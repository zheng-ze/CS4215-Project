import {
  ALLOC_VECTOR,
  ASSIGN,
  BINOP,
  GOTO,
  JOF,
  LD,
  LDC,
  LDF,
  SUPPORTED_TYPES,
  TypeTag,
  UNOP,
  instruction,
  instruction_type,
} from "./RustLiteTypes";

import { Heap } from "./RustLiteHeap";
import { RustLiteStack } from "./RustLiteStack";

interface VirtualMachineMicrocode {
  [key: string]: (instr: instruction) => void;
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
  private printDelegate: Function;

  constructor(instrs: instruction[], printDelegate: Function) {
    this.instrs = instrs;
    this.os = [];
    this.stack = new RustLiteStack();
    this.heap = new Heap(100);
    this.pc = 0;
    this.printDelegate = printDelegate;
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

    [instruction_type.JOF]: this.handle_jof_instr.bind(this),

    [instruction_type.GOTO]: this.handle_goto_instr.bind(this),

    [instruction_type.ENTER_SCOPE]: this.handle_enter_scope.bind(this),

    [instruction_type.EXIT_SCOPE]: this.handle_exit_scope.bind(this),

    [instruction_type.LD]: this.handle_ld_instruction.bind(this),

    [instruction_type.ASSIGN]: this.handle_assign_instruction.bind(this),

    [instruction_type.LDF]: this.handle_ldf_instruction.bind(this),

    [instruction_type.RESET]: this.handle_reset_instr.bind(this),

    [instruction_type.ALLOC_VECTOR]: this.handle_alloc_vector.bind(this),

    [instruction_type.SET_VECTOR]: this.handle_set_vector.bind(this),

    [instruction_type.GET_VECTOR]: this.handle_get_vector.bind(this),

    [instruction_type.VECTOR_LENGTH]: this.handle_vector_length.bind(this),

    [instruction_type.PRINT_LINE]: this.handle_print_line.bind(this),
  };

  //Load Constant, for example when we are just calling a primitive value like 1;
  private handle_ldc_instruction(instr: instruction) {
    const ldc = instr as LDC;
    const val = ldc.val;
    if (
      typeof val === "number" ||
      typeof val === "boolean" ||
      typeof val === "string"
    ) {
      // Store primitives directly on the stack
      this.os.push(ldc.val);
    } else {
      console.log("Non Primitive Value");
    }
  }

  //Unary Operator Handling for default operations with only one argument like ! or (-)
  private handle_unop_instruction(instr: instruction) {
    const unop = instr as UNOP;
    const arg = this.os.pop();
    if (arg == undefined) {
      throw Error("UNOP Argument not found on OS");
    }
    const result = this.apply_unop(unop.sym, arg);
    if (result != undefined) this.os.push(result);
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
    if (left == undefined || right == undefined) {
      throw Error("Values not present in the OS");
    }
    const result = this.apply_binop(binop.sym, left, right);
    console.log(
      `Applied BINOP: ${binop.sym}, LEFT: ${JSON.stringify(
        left
      )}, RIGHT: ${right}, RESULT: ${result}`
    );
    if (result != undefined) this.os.push(result);
  }

  private binop_microcode: any = {
    "+": (left: number, right: number) => left + right,
    "-": (left: number, right: number) => left - right,
    "*": (left: number, right: number) => left * right,
    "/": (left: number, right: number) => {
      if (right === 0) throw new Error("Division by zero");
      return Math.floor(left / right);
    },
    "%": (left: number, right: number) => {
      if (right === 0) throw new Error("Modulo by zero");
      return left % right;
    },
    "==": (left: SUPPORTED_TYPES, right: SUPPORTED_TYPES) => left === right,
    "!=": (left: SUPPORTED_TYPES, right: SUPPORTED_TYPES) => left !== right,
    "<": (left: SUPPORTED_TYPES, right: SUPPORTED_TYPES) => left < right,
    "<=": (left: SUPPORTED_TYPES, right: SUPPORTED_TYPES) => left <= right,
    ">": (left: SUPPORTED_TYPES, right: SUPPORTED_TYPES) => left > right,
    ">=": (left: SUPPORTED_TYPES, right: SUPPORTED_TYPES) => left >= right,
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
      return operation(left, right);
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
      return operation(left, right);
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
    if (value == undefined) throw new Error("Value not found in stack");
    this.os.push(value);
  }

  //Assigns a value to the current scope by pushing it onto the stack
  private handle_assign_instruction(inst: instruction) {
    const instr = inst as ASSIGN;
    const val = this.os.pop();
    if (val == undefined) throw new Error("ASSIGN: Value not found in stack");
    this.stack.push(val);
  }

  //Loads a function into memory by creating a new frame on the stack with return address at current pc + 1
  private handle_ldf_instruction(instr: instruction) {
    const ldf = instr as LDF;
    this.stack.pushFrame(this.pc++);

    for (let i = 0; i < ldf.arity; i++) {
      let val = this.os.pop();
      if (val == undefined) throw new Error("LDF: Value not found in stack");
      this.stack.push(val);
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
    if (returnValue != undefined) this.os.push(returnValue);
  }

  private handle_jof_instr(instr: instruction) {
    const jof = instr as JOF;
    console.log(`Stack: ${this.os}`);
    const condition = this.os.pop();
    console.log(`Predicate value: ${condition}`);
    // Jump if condition is falsy (0 or false)
    if (condition == undefined)
      throw new Error("JOF: Value not found in stack");
    if (condition) return;
    this.pc = jof.addr;
  }

  private handle_alloc_vector(instr: instruction) {
    const alloc = instr as ALLOC_VECTOR;
    const size = alloc.size;
    if (size < 0) {
      throw new Error("ALLOC_VECTOR: Size cannot be negative");
    }
    const addr = this.heap.allocate_vector(size);
    this.os.push({ type: "address", value: addr });
    console.log(
      `Allocated vector of size ${size} at address ${addr}, current free list head: ${this.heap.free}`
    );
  }

  private handle_set_vector(instr: instruction) {
    console.log("OS", this.os);
    const value = this.os.pop();
    const index = this.os.pop();
    if (typeof index !== "number" || index < 0) {
      throw new Error("SET_VECTOR: Index must be a non-negative number");
    }
    if (value == undefined) {
      throw new Error("SET_VECTOR: Value not found in stack");
    }
    const addr = this.os.slice(-1)[0];
    if (typeof addr !== "object" || addr.type !== "address") {
      throw new Error("SET_VECTOR: Invalid address: " + JSON.stringify(addr));
    }
    this.heap.set_vector_node(addr.value, index, value, TypeTag.Int);
  }
  private handle_get_vector(instr: instruction) {
    console.log("OS", this.os);
    const index = this.os.pop();
    if (typeof index !== "number" || index < 0) {
      throw new Error(`Invalid vector index: ${index}`);
    }
    let vectorAddr = this.os.pop();
    if (typeof vectorAddr !== "object" || vectorAddr.type !== "address") {
      throw new Error(`Invalid vector address: ${JSON.stringify(vectorAddr)}`);
    }
    vectorAddr = vectorAddr.value;

    if (!this.heap.isVectorAddress(vectorAddr))
      throw new Error("Invalid vector address");

    // Get the vector node
    let [value, tag] = this.heap.get_vector_node(vectorAddr, index);
    if (tag === TypeTag.Address) {
      throw new Error(`Nested vectors are not supported. Address: ${value}`);
    }
    console.log(
      `GET_VECTOR: Retrieved value ${value} from address ${vectorAddr}, index ${index}`
    );
    this.os.push(value);
  }
  private handle_vector_length(instr: instruction) {
    const vectorAddr = this.os.pop();
    if (typeof vectorAddr !== "object" || vectorAddr.type !== "address") {
      throw new Error(`Invalid vector address: ${JSON.stringify(vectorAddr)}`);
    }
    const length = this.heap.get_vector_size(vectorAddr.value);
    this.os.push(length);
  }
  private handle_print_line(instr: instruction) {
    const numArgs = this.os.pop();
    console.log("Num args", numArgs);
    if (typeof numArgs !== "number") {
      throw new Error("PRINT_LINE: Number of arguments must be a number");
    }
    const args: SUPPORTED_TYPES[] = [];
    for (let i = 0; i < numArgs; i++) {
      const arg = this.os.pop();
      if (arg == undefined) {
        throw new Error("PRINT_LINE: Arg not found in stack");
      }
      args.push(arg);
    }
    console.log("Args", JSON.stringify(args));
    const formatString = this.os.pop();
    console.log("Format string", formatString);
    if (typeof formatString !== "string") {
      throw new Error(
        "PRINT_LINE: Format string must be a string, got: " +
          typeof formatString
      );
    }
    this.println(formatString, ...args);
  }

  private println(s: string, ...args: SUPPORTED_TYPES[]) {
    // Replace all {} with args
    let str = s;
    let argsIndex = 0;
    const LEFT_BRACE_MARKER = "\uE000"; // Private use Unicode character
    const RIGHT_BRACE_MARKER = "\uE001"; // Private use Unicode character

    // Replace escaped braces
    str = str.replace(/\{\{/g, LEFT_BRACE_MARKER);
    str = str.replace(/\}\}/g, RIGHT_BRACE_MARKER);

    // Replace {} with args
    let missingArgs = 0;
    str = str.replace(/\{}/g, (match) => {
      if (argsIndex >= args.length) {
        missingArgs++;
        return ""; // No replacement will throw an error later
      }
      const arg = args[argsIndex++];
      return arg !== undefined ? arg.toString() : "undefined";
    });

    if (str.includes("{")) {
      throw new Error(`Unmatched '{' in format string: ${s}`);
    }

    if (str.includes("}")) {
      throw new Error(`Unmatched '}' in format string: ${s}`);
    }

    // Check if there is sufficient arguments and placeholders
    if (argsIndex < args.length) {
      throw new Error(`Formatting specifier missing`);
    }

    if (missingArgs > 0) {
      throw new Error(
        `${
          missingArgs + args.length
        } positional argument in format string, but ${
          args.length
        } arguments were given`
      );
    }

    // Replace escaped braces
    str = str.replace(new RegExp(LEFT_BRACE_MARKER, "g"), "{");
    str = str.replace(new RegExp(RIGHT_BRACE_MARKER, "g"), "}");

    // Print the formatted string
    this.printDelegate(str);
  }
}
