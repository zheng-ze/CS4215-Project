export type SUPPORTED_TYPES = number | boolean;

export const word_size = 8;
export const node_size = 4;
export const size_offset = 5;
export const max_words = 2048;

export enum instruction_type {
  LDC,
  UNOP,
  BINOP,
  POP,
  JOF,
  GOTO,
  ENTER_SCOPE,
  EXIT_SCOPE,
  LD,
  ASSIGN,
  LDF,
  CALL,
  TAIL_CALL,
  RESET,
  DONE,
}

export interface Pair<T> {
  first: T;
  second: T;
}

export interface instruction {
  type: instruction_type;
}

export interface LDC extends instruction {
  type: instruction_type.LDC;
  val: SUPPORTED_TYPES;
}

export interface UNOP extends instruction {
  type: instruction_type.UNOP;
  sym: string;
}

export interface BINOP extends instruction {
  type: instruction_type.BINOP;
  sym: string;
}

export interface POP extends instruction {
  type: instruction_type.POP;
}

export interface JOF extends instruction {
  type: instruction_type.JOF;
  addr: number;
}

export interface GOTO extends instruction {
  type: instruction_type.GOTO;
  addr: number;
}

export interface ENTER_SCOPE extends instruction {
  type: instruction_type.ENTER_SCOPE;
  num: number;
}

export interface EXIT_SCOPE extends instruction {
  type: instruction_type.EXIT_SCOPE;
}

export interface LD extends instruction {
  type: instruction_type.LD;
  pos: Pair<number>;
}

export interface ASSIGN extends instruction {
  type: instruction_type.ASSIGN;
  pos: Pair<number>;
}

export interface LDF extends instruction {
  type: instruction_type.LDF;
  addr: number;
  arity: number;
}

export interface CALL extends instruction {
  type: instruction_type.CALL;
  arity: number;
}

export interface TAIL_CALL extends instruction {
  type: instruction_type.TAIL_CALL;
  arity: number;
}

export interface RESET extends instruction {
  type: instruction_type.RESET;
}

export interface DONE extends instruction {
  type: instruction_type.DONE;
}
