import {
  ASSIGN,
  BINOP,
  CALL,
  DONE,
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

export function loadFunction(arity: number, address: number): LDF {
  return {
    type: instruction_type.LDF,
    arity: arity,
    addr: address,
  };
}

// Update load function to correctly handle variable access
export function load(pos: Pair<number>): LD {
  // Make sure we're using the correct frame level for variable access
  return {
    type: instruction_type.LD,
    pos: { first: pos.first, second: pos.second },
  };
}

// Update assign to use the current function level
export function assign(pos: Pair<number>): ASSIGN {
  return {
    type: instruction_type.ASSIGN,
    pos: { first: pos.first, second: pos.second },
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
