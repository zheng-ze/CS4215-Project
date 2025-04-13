import {
  ASSIGN,
  BINOP,
  CALL,
  ENTER_SCOPE,
  GOTO,
  JOF,
  LD,
  LDC,
  LDF,
  Pair,
  RESET,
  SUPPORTED_TYPES,
  TAIL_CALL,
  UNOP,
  instruction,
  instruction_type,
  node_size,
  size_offset,
  word_size,
  max_words,
} from "./RustLiteTypes";
import { RustLiteStack } from "./RustLiteStack";

interface VirtualMachineMicrocode {
  [key: string]: (instr: instruction) => void;
}

enum HeapTag {
  Bool = 0,
  Number = 1,
  Blockframe = 2,
  Callframe = 3,
  Closure = 4,
  Frame = 5,
  Environment = 6,
  Struct = 7,
}

function push<T>(array: T[], ...items: T[]): T[] {
  for (const item of items) {
    array.push(item);
  }
  return array;
}

function peek(array: SUPPORTED_TYPES[], index: number): SUPPORTED_TYPES {
  if (index < 0 || index >= array.length) {
    throw new Error("Index out of bounds");
  }
  return array.slice(-1 - index)[0];
}

class Heap {
  data: DataView<ArrayBuffer>;
  free: number;

  constructor(numWords: number) {
    const buffer = new ArrayBuffer(numWords * word_size);
    this.data = new DataView(buffer);

    // Initialize free list
    this.free = 0;

    // Set up the free list chain
    for (let i = 0; i < numWords - 1; i++) {
      this.set(i * word_size, (i + 1) * word_size);
    }

    // Mark the end of the free list
    this.set((numWords - 1) * word_size, -1);
  }

  get(index: number): number {
    return this.data.getFloat64(index);
  }

  set(address: number, value: number): void {
    this.data.setFloat64(address, value);
  }

  allocate(tag: HeapTag, size: number): number {
    if (size > node_size) {
      throw new Error(
        `limitation: nodes cannot be larger than ${node_size} words`
      );
    }

    if (this.free === -1) {
      throw new Error("heap memory exhausted");
    }

    const address = this.free;
    this.free = this.get(this.free);
    this.data.setInt8(address * word_size, tag);
    this.data.setUint16(address * word_size + size_offset, size);
    return address;
  }

  get_at_offset(address: number, offset: number): number {
    return this.data.getUint8(address * word_size + offset);
  }

  set_at_offset(address: number, offset: number, value: number): void {
    this.data.setUint8(address * word_size + offset, value);
  }

  get_2_at_offset(address: number, offset: number): number {
    return this.data.getUint16(address * word_size + offset);
  }

  set_2_at_offset(address: number, offset: number, value: number): void {
    this.data.setUint16(address * word_size + offset, value);
  }

  getTag(address: number): HeapTag {
    console.log(this.data.getInt8(address * word_size));
    return this.data.getInt8(address * word_size);
  }

  getSize(address: number): number {
    return this.data.getUint16(address * word_size + size_offset);
  }

  get_child(address: number, child_index: number): number {
    return this.get(address + 1 + child_index);
  }

  set_child(address: number, child_index: number, value: number): void {
    this.set(address + 1 + child_index, value);
  }

  get_num_children(address: number): number {
    return this.getTag(address) === HeapTag.Number
      ? 0
      : this.getSize(address) - 1;
  }
}

interface VirtualMachine<T> {
  microcode: VirtualMachineMicrocode;

  stack: RustLiteStack;
  heap: Heap;
  pc: number;
  e: number;

  instrs: instruction[];
}

export class RustLiteVirtualMachine implements VirtualMachine<SUPPORTED_TYPES> {
  stack: RustLiteStack; // Combined stack for values and return addresses
  heap: Heap;
  pc: number;
  e: number;

  instrs: instruction[];

  constructor(instrs: instruction[]) {
    this.instrs = instrs;
    this.stack = new RustLiteStack();
    this.heap = new Heap(100);
    this.pc = 0;
    this.e = 0;
  }

  run(): SUPPORTED_TYPES {
    this.reset();

    while (this.instrs[this.pc].type !== instruction_type.DONE) {
      console.log("PC:", this.pc);
      console.log(
        "Current instruction type:",
        instruction_type[this.instrs[this.pc].type]
      );
      console.log("Instruction:", this.instrs[this.pc]);
      const instr = this.instrs[this.pc++];

      const microcode = this.microcode[instr.type];
      if (microcode) {
        microcode(instr);
      } else {
        throw new Error(`Unknown instruction type: ${instr.type}`);
      }
    }

    // Return the value directly from stack since we store primitives there
    return this.stack.peek();
  }

  reset(): void {
    this.stack.reset();
    this.heap = new Heap(100);
    this.pc = 0;
    this.e = 0;
  }

  microcode: VirtualMachineMicrocode = {
    [instruction_type.LDC]: (instr: instruction) => {
      const ldc = instr as LDC;
      if (typeof ldc.val === "number" || typeof ldc.val === "boolean") {
        // Store primitives directly on the stack
        this.stack.push(ldc.val);
      } else {
        console.log("Non Primitive Value");
        const addr = this.JS_value_to_address(ldc.val);
        this.stack.push(addr);
      }
    },
    [instruction_type.UNOP]: (instr: instruction) => {
      const unop = instr as UNOP;
      const arg = this.stack.pop();
      const result = this.apply_unop(unop.sym, arg);
      this.stack.push(result);
    },
    [instruction_type.BINOP]: (instr: instruction) => {
      const binop = instr as BINOP;
      const right = this.stack.pop();
      const left = this.stack.pop();
      const result = this.apply_binop(binop.sym, left, right);
      this.stack.push(result);
    },
    [instruction_type.POP]: (instr: instruction) => {
      this.stack.pop();
    },
    [instruction_type.JOF]: (instr: instruction) => {
      const jof = instr as JOF;
      const condition = this.stack.pop();
      // Jump if condition is falsy (0 or false)
      if (condition === 0) {
        this.pc = jof.addr;
      }
    },
    [instruction_type.GOTO]: (instr: instruction) => {
      const goto = instr as GOTO;
      this.pc = goto.addr;
    },
    [instruction_type.ENTER_SCOPE]: (instr: instruction) => {
      const enter = instr as ENTER_SCOPE;
      // Create new stack frame for the scope
      this.stack.pushFrame(enter.num);
      // Initialize locals to 0 (already done in pushFrame)
    },

    [instruction_type.EXIT_SCOPE]: (instr: instruction) => {
      // Pop the current stack frame
      this.stack.popFrame();
    },

    [instruction_type.LD]: (instr: instruction) => {
      const ld = instr as LD;
      // Load from stack frame instead of environment
      const value = this.stack.getLocal(ld.pos.second);
      this.stack.push(value);
    },

    [instruction_type.ASSIGN]: (instr: instruction) => {
      const assign = instr as ASSIGN;
      const value = this.stack.peek();
      // Store in stack frame instead of environment
      this.stack.setLocal(assign.pos.second, value);
    },

    [instruction_type.LDF]: (instr: instruction) => {
      const ldf = instr as LDF;
      const closure_addr = this.allocate_Closure(ldf.arity, ldf.addr, this.e);
      this.stack.push(closure_addr);
      // Don't skip over function body - the compiler handles this
    },

    [instruction_type.CALL]: (instr: instruction) => {
      const call = instr as CALL;
      const arity = call.arity;

      // Get function closure first
      const fun = this.stack.pop();
      // console.log(fun.toString(2));
      // console.log(this.is_Closure(fun));
      if (!this.is_Closure(fun)) {
        throw new Error("Attempting to call a non-function value");
      }

      // Save current execution context
      this.stack.push(this.pc);

      // Create new stack frame for parameters
      this.stack.pushFrame(arity);

      // Pop arguments in reverse order and store in frame
      for (let i = arity - 1; i >= 0; i--) {
        const arg = this.stack.pop();
        this.stack.setLocal(i, arg);
      }

      // Jump to function code
      this.pc = this.get_closure_pc(fun);
      this.e = this.get_closure_env(fun);
    },

    [instruction_type.RESET]: (instr: instruction) => {
      this.stack.popFrame(); // Remove current frame
      this.pc = this.stack.pop(); // Restore return address
    },

    [instruction_type.TAIL_CALL]: (instr: instruction) => {
      const tail_call = instr as TAIL_CALL;
      const arity = tail_call.arity;

      // Reuse current frame for tail call optimization
      const args = new Array(arity);
      for (let i = arity - 1; i >= 0; i--) {
        args[i] = this.stack.pop();
      }
      const fun = this.stack.pop();

      // Reuse the current frame instead of creating a new one
      for (let i = 0; i < arity; i++) {
        this.stack.setLocal(i, args[i]);
      }

      if (this.is_Closure(fun)) {
        this.pc = this.get_closure_pc(fun);
        this.e = this.get_closure_env(fun);
      } else {
        throw new Error("Attempting to call a non-function value");
      }
    },
  };

  // bool
  // [1 byte tag, 4 bytes unused,
  //  2 bytes #children, 1 byte unused]
  // followed by the number, one word
  // note: #children is 0
  private is_Bool(address: number): boolean {
    return this.heap.getTag(address) === HeapTag.Bool;
  }

  private allocate_Bool(value: boolean): number {
    const address = this.heap.allocate(HeapTag.Bool, 2);
    this.heap.set(address + 1, value ? 1 : 0);
    return address;
  }

  // number
  // [1 byte tag, 4 bytes unused,
  //  2 bytes #children, 1 byte unused]
  // followed by the number, one word
  // note: #children is 0
  private is_Number(address: number): boolean {
    return this.heap.getTag(address) === HeapTag.Number;
  }

  private allocateNumber(value: number): number {
    const address = this.heap.allocate(HeapTag.Number, 2);
    this.heap.set(address + 1, value);
    return address;
  }

  // closure
  // [1 byte tag, 1 byte arity, 2 bytes pc, 1 byte unused,
  //  2 bytes #children, 1 byte unused]
  // followed by the address of env
  // note: currently bytes at offset 4 and 7 are not used;
  //   they could be used to increase pc and #children range
  private is_Closure(address: number): boolean {
    console.log(address);
    return this.heap.getTag(address) === HeapTag.Closure;
  }

  private allocate_Closure(arity: number, pc: number, env: number): number {
    const address = this.heap.allocate(HeapTag.Closure, 3);
    this.heap.set_at_offset(address, 1, arity);
    this.heap.set_2_at_offset(address, 2, pc);
    this.heap.set_child(address, 0, env);
    return address;
  }

  private get_closure_arity(address: number): number {
    return this.heap.get_at_offset(address, 1);
  }

  private get_closure_pc(address: number): number {
    return this.heap.get_2_at_offset(address, 2);
  }

  private get_closure_env(address: number): number {
    return this.heap.get_child(address, 0);
  }

  // block frame
  // [1 byte tag, 4 bytes unused,
  //  2 bytes #children, 1 byte unused]
  is_Blockframe(address: number): boolean {
    return this.heap.getTag(address) === HeapTag.Blockframe;
  }

  private allocate_Blockframe(env: number): number {
    const address = this.heap.allocate(HeapTag.Blockframe, 2);
    this.heap.set(address + 1, env);
    return address;
  }

  private get_blockframe_env(address: number): number {
    return this.heap.get_child(address, 0);
  }

  // call frame
  // [1 byte tag, 1 byte unused, 2 bytes pc,
  //  1 byte unused, 2 bytes #children, 1 byte unused]
  // followed by the address of env
  private is_Callframe(address: number): boolean {
    return this.heap.getTag(address) === HeapTag.Callframe;
  }

  private allocate_Callframe(env: number, pc: number): number {
    const address = this.heap.allocate(HeapTag.Callframe, 2);
    this.heap.set_2_at_offset(address, 2, pc);
    this.heap.set(address + 1, env);
    return address;
  }

  private get_callframe_env(address: number): number {
    return this.heap.get_child(address, 0);
  }

  private get_callframe_pc(address: number): number {
    return this.heap.get_2_at_offset(address, 2);
  }

  // environment frame
  // [1 byte tag, 4 bytes unused,
  //  2 bytes #children, 1 byte unused]
  // followed by the addresses of its values

  private is_Environment(address: number): boolean {
    return this.heap.getTag(address) === HeapTag.Environment;
  }

  private allocate_Environment(numFrames: number): number {
    const address = this.heap.allocate(HeapTag.Environment, numFrames + 1);
    return address;
  }

  private get_Environment_value(address: number, index: Pair<number>): number {
    const frameIndex = index.first;
    const valueIndex = index.second;
    const frameAddress = this.heap.get_child(address, frameIndex);
    const valueAddress = this.heap.get_child(frameAddress, valueIndex);
    return valueAddress;
  }

  private set_Environment_value(
    address: number,
    index: Pair<number>,
    value: number
  ): void {
    const frameIndex = index.first;
    const valueIndex = index.second;
    const frameAddress = this.heap.get_child(address, frameIndex);
    this.heap.set_child(frameAddress, valueIndex, value);
  }

  private environment_extend(frameAddress: number, envAddress: number): number {
    const old_size = this.heap.getSize(envAddress);
    const new_env_address = this.heap.allocate(
      HeapTag.Environment,
      old_size + 1
    );
    let i = 0;
    for (i; i < old_size - 1; i++) {
      this.heap.set_child(
        new_env_address,
        i,
        this.heap.get_child(envAddress, i)
      );
    }
    this.heap.set_child(new_env_address, i, frameAddress);
    return new_env_address;
  }

  private address_to_JS_value(address: number): SUPPORTED_TYPES {
    if (this.is_Bool(address)) {
      return this.heap.get(address + 1) === 1;
    }

    if (this.is_Number(address)) {
      return this.heap.get(address + 1);
    }

    throw new Error(`Unsupported address type: ${this.heap.getTag(address)}`);
  }

  private JS_value_to_address(val: SUPPORTED_TYPES): number {
    if (typeof val === "number") {
      return this.allocateNumber(val);
    }

    if (typeof val === "boolean") {
      return this.allocate_Bool(val);
    }

    throw new Error(`Unsupported type: ${typeof val}`);
  }

  private unop_microcode: any = {
    "-unary": (num: number) => -num,
    "!": (bool: boolean) => !bool,
  };

  private apply_unop(op: string, value: number): SUPPORTED_TYPES {
    // Convert numeric 0/1 to boolean for boolean operations
    if (op === "!") {
      return this.unop_microcode[op](value === 0 ? false : true);
    }
    return this.unop_microcode[op](value);
  }

  private binop_microcode: any = {
    "+": (left: number, right: number) => left + right,
    "-": (left: number, right: number) => left - right,
    "*": (left: number, right: number) => left * right,
    "/": (left: number, right: number) => {
      if (right === 0) throw new Error("Division by zero");
      return left / right;
    },
    "%": (left: number, right: number) => {
      if (right === 0) throw new Error("Modulo by zero");
      return left % right;
    },
    "==": (left: SUPPORTED_TYPES, right: SUPPORTED_TYPES) => left === right,
    "!=": (left: SUPPORTED_TYPES, right: SUPPORTED_TYPES) => left !== right,
    "<": (left: number, right: number) => left < right,
    "<=": (left: number, right: number) => left <= right,
    ">": (left: number, right: number) => left > right,
    ">=": (left: number, right: number) => left >= right,
    "&&": (left: boolean, right: boolean) => left && right,
    "||": (left: boolean, right: boolean) => left || right,
  };

  private apply_binop(
    op: string,
    left: number,
    right: number
  ): SUPPORTED_TYPES {
    const operation = this.binop_microcode[op];
    if (!operation) {
      throw new Error(`Unknown binary operator: ${op}`);
    }

    // Convert numeric 0/1 to boolean for boolean operations
    if (op === "&&" || op === "||") {
      return operation(left === 0 ? false : true, right === 0 ? false : true)
        ? 1
        : 0;
    }

    // For comparison operators, return 1 for true and 0 for false
    if (
      op === "==" ||
      op === "!=" ||
      op === "<" ||
      op === "<=" ||
      op === ">" ||
      op === ">="
    ) {
      return operation(left, right) ? 1 : 0;
    }

    return operation(left, right);
  }
}
