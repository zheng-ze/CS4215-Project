import {
  ASSIGN,
  BINOP,
  CALL,
  DONE,
  GOTO,
  ENTER_SCOPE,
  EXIT_SCOPE,
  JOF,
  LD,
  LDC,
  LDF,
  POP,
  RESET,
  SUPPORTED_TYPES,
  TAIL_CALL,
  UNOP,
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

export function enterScope(): ENTER_SCOPE {
  return {
    type: instruction_type.ENTER_SCOPE,
  };
}

export function exitScope(): EXIT_SCOPE {
  return {
    type: instruction_type.EXIT_SCOPE,
  };
}

export function loadFunction(arity: number, address: number): LDF {
  return {
    type: instruction_type.LDF,
    arity: arity,
    addr: address,
  };
}

export function load(level: number, offset: number): LD {
  return {
    type: instruction_type.LD,
    pos: { first: level, second: offset },
  };
}

export function assign(): ASSIGN {
  return {
    type: instruction_type.ASSIGN,
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
