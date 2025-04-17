"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeTag = exports.HeapTag = exports.instruction_type = exports.max_words = exports.type_offset = exports.size_offset = exports.node_size = exports.word_size = void 0;
exports.word_size = 9; // 8 for data, 1 for type
exports.node_size = 4;
exports.size_offset = 5;
exports.type_offset = 8;
exports.max_words = 2048;
var instruction_type;
(function (instruction_type) {
    instruction_type[instruction_type["LDC"] = 0] = "LDC";
    instruction_type[instruction_type["UNOP"] = 1] = "UNOP";
    instruction_type[instruction_type["BINOP"] = 2] = "BINOP";
    instruction_type[instruction_type["POP"] = 3] = "POP";
    instruction_type[instruction_type["JOF"] = 4] = "JOF";
    instruction_type[instruction_type["GOTO"] = 5] = "GOTO";
    instruction_type[instruction_type["ENTER_SCOPE"] = 6] = "ENTER_SCOPE";
    instruction_type[instruction_type["EXIT_SCOPE"] = 7] = "EXIT_SCOPE";
    instruction_type[instruction_type["LD"] = 8] = "LD";
    instruction_type[instruction_type["ASSIGN"] = 9] = "ASSIGN";
    instruction_type[instruction_type["LDF"] = 10] = "LDF";
    instruction_type[instruction_type["CALL"] = 11] = "CALL";
    instruction_type[instruction_type["TAIL_CALL"] = 12] = "TAIL_CALL";
    instruction_type[instruction_type["RESET"] = 13] = "RESET";
    instruction_type[instruction_type["DONE"] = 14] = "DONE";
    instruction_type[instruction_type["ALLOC_VECTOR"] = 15] = "ALLOC_VECTOR";
    instruction_type[instruction_type["SET_VECTOR"] = 16] = "SET_VECTOR";
    instruction_type[instruction_type["GET_VECTOR"] = 17] = "GET_VECTOR";
})(instruction_type || (exports.instruction_type = instruction_type = {}));
var HeapTag;
(function (HeapTag) {
    HeapTag[HeapTag["VectorStart"] = 0] = "VectorStart";
    HeapTag[HeapTag["VectorNode"] = 1] = "VectorNode";
})(HeapTag || (exports.HeapTag = HeapTag = {}));
var TypeTag;
(function (TypeTag) {
    TypeTag[TypeTag["Int"] = 0] = "Int";
    TypeTag[TypeTag["Bool"] = 1] = "Bool";
    TypeTag[TypeTag["Address"] = 2] = "Address";
    TypeTag[TypeTag["Vector"] = 3] = "Vector";
})(TypeTag || (exports.TypeTag = TypeTag = {}));
