export type SUPPORTED_TYPES = number | boolean | AddressType | string;

export const word_size = 9; // 8 for data, 1 for type
export const node_size = 4;
export const size_offset = 5;
export const type_offset = 8;
export const max_words = 2048;

// u64 | i64 type is for integers that are positive and within the range of i64 only to be used in type inference
export type PrimitiveType = "u32" | "i32" | "bool" | "u32 | i32";
export type VoidType = "void";

export type RustLiteType =
  | PrimitiveType
  | { kind: "vec"; elementType: PrimitiveType | undefined }
  | {
      kind: "function";
      returnType: RustLiteType | VoidType;
      paramTypes: RustLiteType[];
    };

// Each function will have its own array of frames
export type RustLiteTypeEnv = Map<string, RustLiteTypeFrame>;
export type RustLiteTypeFrame = {
  // because fn names can be reused in different scopes
  // we need to create a unique name if the function name is already in use
  // so that we can still access the frames as needed
  fnNameMappings: Map<string, string>;
  mappings: Map<string, RustLiteType>;
  parent: RustLiteTypeFrame | null;
  children: RustLiteTypeFrame[];
};

export const global_scope = "*global*"; // * is used as it is not a valid identifier

export interface AddressType {
  type: "address";
  value: number;
}

export enum instruction_type {
  LDC, // 0
  UNOP, // 1
  BINOP, // 2
  POP, // 3
  JOF, // 4
  GOTO, // 5
  ENTER_SCOPE, // 6
  EXIT_SCOPE, // 7
  LD, // 8
  ASSIGN, // 9
  REASSIGN, // 10
  LDF, // 11
  CALL, // 12
  TAIL_CALL, // 13
  RESET, // 14
  DONE, // 15
  ALLOC_VECTOR, // 16
  SET_VECTOR, // 17
  GET_VECTOR, // 18
  VECTOR_LENGTH, // 19
  PRINT_LINE, // 20
}

export enum HeapTag {
  VectorStart = 0,
  VectorNode = 1,
}

export enum TypeTag {
  Int = 0,
  Bool = 1,
  Address = 2,
  Vector = 3,
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
}

export interface REASSIGN extends instruction {
  type: instruction_type.REASSIGN;
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

export interface ALLOC_VECTOR extends instruction {
  type: instruction_type.ALLOC_VECTOR;
  size: number;
}

export interface SET_VECTOR extends instruction {
  type: instruction_type.SET_VECTOR;
}

export interface GET_VECTOR extends instruction {
  type: instruction_type.GET_VECTOR;
}

export interface VECTOR_LENGTH extends instruction {
  type: instruction_type.VECTOR_LENGTH;
}

export interface PRINT_LINE extends instruction {
  type: instruction_type.PRINT_LINE;
}

export interface Tuple<X, Y> {
  first: X;
  second: Y;
}

export interface Scope extends Map<string, Tuple<number, boolean>> {}
