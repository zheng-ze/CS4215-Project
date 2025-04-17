import {
  ASSIGN,
  BINOP,
  CALL,
  ENTER_SCOPE,
  EXIT_SCOPE,
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
  max_words,
  node_size,
  size_offset,
  word_size,
} from "./RustLiteTypes";

import { RustLiteStack } from "./RustLiteStack";
import { off } from "process";

interface VirtualMachineMicrocode {
  [key: string]: (instr: instruction) => void;
}

enum HeapTag {
  Bool = 0,
  Number = 1,
  Blockframe = 2,
  Callframe = 3,
  Frame = 5,
  Struct = 7,
}

function peek(array: SUPPORTED_TYPES[], index: number): SUPPORTED_TYPES {
  if (index < 0 || index >= array.length) {
    throw new Error("Index out of bounds");
  }
  return array.slice(-1 - index)[0];
}

class Heap {
  data: DataView;
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
  instrs: instruction[];
}

export class RustLiteVirtualMachine implements VirtualMachine<SUPPORTED_TYPES> {
  stack: RustLiteStack; // Stack for values, variables, and call frames
  os: Array<SUPPORTED_TYPES>;
  heap: Heap;
  pc: number;

  instrs: instruction[];

  constructor(instrs: instruction[]) {
    this.instrs = instrs;
    this.os = [];
    this.stack = new RustLiteStack();
    this.heap = new Heap(100);
    this.pc = 0;
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
    console.log(this.stack.dump());
    return this.os.pop() || 0;
  }

  reset(): void {
    this.stack.reset();
    this.os = [];
    this.heap = new Heap(100);
    this.pc = 0;
  }

  microcode: VirtualMachineMicrocode = {
    [instruction_type.LDC]: this.handle_ldc_instruction.bind(this),

    [instruction_type.UNOP]: this.handle_unop_instruction.bind(this),

    [instruction_type.BINOP]: this.handle_binop_instruction.bind(this),

    [instruction_type.POP]: (instr: instruction) => {
      this.stack.pop();
    },

    [instruction_type.JOF]: (instr: instruction) => {
      const jof = instr as JOF;
      const condition = this.stack.pop();
      // Jump if condition is falsy (0 or false)
      if (condition === 0 || condition === false) {
        this.pc = jof.addr;
      }
    },

    [instruction_type.GOTO]: this.handle_goto_instr.bind(this),

    [instruction_type.ENTER_SCOPE]: this.handle_enter_scope.bind(this),

    [instruction_type.EXIT_SCOPE]: this.handle_exit_scope.bind(this),

    [instruction_type.LD]: this.handle_ld_instruction.bind(this),

    [instruction_type.ASSIGN]: this.handle_assign_instruction.bind(this),

    [instruction_type.LDF]: this.handle_ldf_instruction.bind(this),

    // [instruction_type.CALL]: (instr: instruction) => {
    //   const call = instr as CALL;
    //   const arity = call.arity;
    //   // Get function info from stack (order is now reversed from LDF)
    //   const functionArity = this.stack.pop();
    //   const functionPC = this.stack.pop();

    //   if (functionArity !== arity) {
    //     throw new Error(
    //       `Function expected ${functionArity} arguments but got ${arity}`
    //     );
    //   }

    //   // Set return address to current PC
    //   const returnAddr = this.pc;
    //   console.log(
    //     `Setting return address to ${returnAddr} for function call to PC=${functionPC}`
    //   );

    //   // Store arguments temporarily
    //   const args: SUPPORTED_TYPES[] = [];
    //   console.log("In Call fn");
    //   for (let i = 0; i < arity; i++) {
    //     args[i] = this.stack.pop();
    //   }

    //   console.log(args);

    //   // Create a new frame for the function with enough space for all parameters
    //   const frameSize = arity;
    //   this.stack.pushFrame(returnAddr);

    //   // Double-check that the return address is set correctly
    //   this.stack.setReturnAddress(returnAddr);

    //   // Store arguments in the new frame in the correct order
    //   for (let i = 0; i < arity; i++) {
    //     // The arguments are popped in reverse order from the stack
    //     // For a call like sum(x, y), the stack will have [y, x]
    //     // So we need to store them in the correct order in the frame
    //     this.stack.setLocalInFrame(
    //       this.stack.getFrameCount() - 1,
    //       i,
    //       args[arity - 1 - i]
    //     );
    //     console.log(`Setting argument ${i} to value ${args[arity - 1 - i]}`);
    //   }

    //   // Update program counter
    //   this.pc = Number(functionPC);

    //   console.log(
    //     `CALL: Jumping to function at PC=${functionPC}, return address=${returnAddr}, frame size=${frameSize}`
    //   );
    // },

    // [instruction_type.TAIL_CALL]: (instr: instruction) => {
    //   const tail_call = instr as TAIL_CALL;
    //   const arity = tail_call.arity;

    //   // Get function info from stack
    //   const functionArity = this.stack.pop();
    //   const functionPC = this.stack.pop();

    //   if (functionArity !== arity) {
    //     throw new Error(
    //       `Function expected ${functionArity} arguments but got ${arity}`
    //     );
    //   }

    //   // For tail calls, we need to preserve the return address
    //   const returnAddr = this.stack.getReturnAddress();
    //   if (returnAddr === undefined) {
    //     throw new Error("Cannot perform tail call without a return address");
    //   }

    //   // Store arguments temporarily
    //   const args: SUPPORTED_TYPES[] = [];
    //   for (let i = 0; i < arity; i++) {
    //     args[i] = this.stack.pop();
    //   }

    //   // Pop the current frame but remember its return address
    //   this.stack.popFrame();

    //   // Create a new frame with the same return address
    //   const frameSize = Math.max(arity, 1);
    //   this.stack.pushFrame(returnAddr);

    //   // Store arguments in the new frame
    //   for (let i = 0; i < arity; i++) {
    //     this.stack.setLocal(i, args[arity - 1 - i]);
    //   }

    //   // Update PC
    //   this.pc = Number(functionPC);

    //   console.log(
    //     `TAIL_CALL: Jumping to function at PC=${functionPC}, preserving return address=${returnAddr}`
    //   );
    // },

    [instruction_type.RESET]: this.handle_reset_instr.bind(this),
  };

  //Load Constant, for example when we are just calling a primitive value like 1;
  private handle_ldc_instruction(instr: instruction) {
    const ldc = instr as LDC;
    if (typeof ldc.val === "number" || typeof ldc.val === "boolean") {
      // Store primitives directly on the stack
      this.os.push(ldc.val);
    } else {
      console.log("Non Primitive Value");
    }
  }

  //Unary Operator Handling for default operations with only one argument like ! or (-)
  private handle_unop_instruction(instr: instruction) {
    const unop = instr as UNOP;
    const arg = this.stack.pop();
    const result = this.apply_unop(unop.sym, arg);
    if (result) this.os.push(result);
  }

  private unop_microcode: any = {
    "-unary": (num: number) => -num,
    "!": (bool: boolean) => !bool,
  };

  private apply_unop(op: string, value: SUPPORTED_TYPES): SUPPORTED_TYPES {
    // Convert numeric 0/1 to boolean for boolean operations
    if (op === "!") {
      return this.unop_microcode[op](value === 0 ? false : true);
    }
    return this.unop_microcode[op](value);
  }

  //Binary Operator Handling for default operations with two arguments
  //Pre Condition: left and right arguments should have already been pushed onto the stack in the order [left, right]

  private handle_binop_instruction(instr: instruction) {
    const binop = instr as BINOP;
    const right = this.os.pop();
    const left = this.os.pop();
    if (!left || !right) {
      throw Error("Values not present in the OS");
    }
    const result = this.apply_binop(binop.sym, left, right);
    console.log(
      `Applied BINOP: ${binop.sym}, LEFT: ${left}, RIGHT: ${right}, RESULT: ${result}`
    );
    if (result) this.os.push(result);
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
    left: SUPPORTED_TYPES,
    right: SUPPORTED_TYPES
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

  //GOTO, updates the pointer of the current instruction to the index/address specified in the GOTO instruction
  private handle_goto_instr(inst: instruction) {
    const goto = inst as GOTO;
    console.log(`Jumping to address ${goto.addr}`);
    // console.log("Current PC:", this.pc);
    this.pc = goto.addr;
  }

  //Enters a new scope and creates a new frame on the stack
  private handle_enter_scope(instr: instruction) {
    this.stack.pushFrame();
  }

  //Exits a scope by popping frame from stack and resetting stack pointer to previous base of frame
  private handle_exit_scope(instr: instruction) {
    this.stack.popFrame();
  }

  //Loads value into stack by getting values stack frame
  private handle_ld_instruction(ins: instruction) {
    const instr = ins as LD;
    const frame_index = instr?.pos?.first;
    const offset = instr?.pos?.second;
    const value = this.stack.getLocalFromFrame(frame_index, offset);
    console.log(`pushed value: ${value} to top of the stack`);
    if (value) this.os.push(value);
  }

  //Assigns a value to the current scope by pushing it onto the stack
  private handle_assign_instruction(inst: instruction) {
    const instr = inst as ASSIGN;
    const val = this.os.pop();
    if (val) this.stack.push(val);
  }

  //Loads a function into memory by creating a new frame on the stack with return address at current pc + 1
  private handle_ldf_instruction(instr: instruction) {
    const ldf = instr as LDF;
    this.stack.pushFrame(this.pc++);

    for (let i = 0; i < ldf.arity; i++) {
      let val = this.os.pop();
      if (val) this.stack.push(val);
    }
    this.pc = ldf.addr;
  }

  private handle_reset_instr(instr: instruction) {
    // Get the return address from the current frame
    const returnAddr = this.stack.getReturnAddress();
    if (returnAddr == undefined) {
      throw Error("Return Address cannot be undefined");
    }
    // Get the return value from the top of the stack
    const returnValue = this.os.pop();
    console.log(`Return value before frame pop: ${returnValue}`);

    //Need to pop frames until we completely exit the function
    while (
      this.stack.getFrameCount() &&
      this.stack.getReturnAddress() == returnAddr
    ) {
      this.stack.popFrame();
    }

    this.pc = returnAddr;
    if (returnValue) this.os.push(returnValue);
  }
}
