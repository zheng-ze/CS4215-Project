import {
  ASSIGN,
  BINOP,
  CALL,
  DONE,
  ENTER_SCOPE,
  EXIT_SCOPE,
  GOTO,
  JOF,
  LD,
  LDC,
  LDF,
  POP,
  Pair,
  RESET,
  SUPPORTED_TYPES,
  TAIL_CALL,
  UNOP,
  instruction,
  instruction_type,
} from "./RustLiteTypes";

export function loadConstant(value: SUPPORTED_TYPES): LDC {
  return {
    type: instruction_type.LDC,
    val: value,
  };
}

export function unaryOperation(symbol: string): UNOP {
  return {
    type: instruction_type.UNOP,
    sym: symbol,
  };
}

export function binaryOperation(symbol: string): BINOP {
  return {
    type: instruction_type.BINOP,
    sym: symbol,
  };
}

export function pop(): POP {
  return {
    type: instruction_type.POP,
  };
}

export function jumpIfFalse(address: number): JOF {
  return {
    type: instruction_type.JOF,
    addr: address,
  };
}

export function jump(address: number): GOTO {
  return {
    type: instruction_type.GOTO,
    addr: address,
  };
}

// Add a new type to track variable scope information
interface ScopeInfo {
  frameLevel: number;
  offset: number;
}
export function enterScope(num: number): ENTER_SCOPE {
  return {
    type: instruction_type.ENTER_SCOPE,
    num: num,
  };
}

export function exitScope(): EXIT_SCOPE {
  return {
    type: instruction_type.EXIT_SCOPE,
  };
}

// Add function scope tracking
let functionScopes: Map<string, ScopeInfo>[] = [];

// Add a variable to track the current function level
let currentFunctionLevel = 2; // Start at 2 for the main function

export function loadFunction(arity: number, address: number): LDF {
  return {
    type: instruction_type.LDF,
    arity: arity,
    addr: address,
  };
}

// Update load function to correctly handle variable access
export function load(level: number, offset: number): LD {
  // Make sure we're using the correct frame level for variable access
  return {
    type: instruction_type.LD,
    pos: { first: level, second: offset },
  };
}

// Update assign to use the current function level
export function assign(name: string, isParameter: boolean = false): ASSIGN {
  let info = scopeMap.get(name);
  if (!info) {
    info = {
      frameLevel: currentFunctionLevel,
      offset: isParameter ? currentOffset : currentOffset++,
    };
    console.log(
      `Adding ${isParameter ? "parameter" : "variable"} ${name} to scope:`,
      info
    );
    scopeMap.set(name, info);
    if (isParameter) currentOffset++;
  }
  return {
    type: instruction_type.ASSIGN,
    pos: { first: info.frameLevel, second: info.offset },
  };
}

export function call(arity: number): CALL {
  return {
    type: instruction_type.CALL,
    arity: arity,
  };
}

export function tailCall(address: number, arity: number): TAIL_CALL {
  return {
    type: instruction_type.TAIL_CALL,
    arity: arity,
  };
}

export function reset(): RESET {
  return {
    type: instruction_type.RESET,
  };
}

export function done(): DONE {
  return {
    type: instruction_type.DONE,
  };
}
