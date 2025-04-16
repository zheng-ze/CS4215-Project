"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadConstant = loadConstant;
exports.unaryOperation = unaryOperation;
exports.binaryOperation = binaryOperation;
exports.pop = pop;
exports.jumpIfFalse = jumpIfFalse;
exports.jump = jump;
exports.enterScope = enterScope;
exports.exitScope = exitScope;
exports.loadFunction = loadFunction;
exports.load = load;
exports.assign = assign;
exports.call = call;
exports.tailCall = tailCall;
exports.reset = reset;
exports.done = done;
const RustLiteTypes_1 = require("./RustLiteTypes");
function loadConstant(value) {
    return {
        type: RustLiteTypes_1.instruction_type.LDC,
        val: value,
    };
}
function unaryOperation(symbol) {
    return {
        type: RustLiteTypes_1.instruction_type.UNOP,
        sym: symbol,
    };
}
function binaryOperation(symbol) {
    return {
        type: RustLiteTypes_1.instruction_type.BINOP,
        sym: symbol,
    };
}
function pop() {
    return {
        type: RustLiteTypes_1.instruction_type.POP,
    };
}
function jumpIfFalse(address) {
    return {
        type: RustLiteTypes_1.instruction_type.JOF,
        addr: address,
    };
}
function jump(address) {
    return {
        type: RustLiteTypes_1.instruction_type.GOTO,
        addr: address,
    };
}
function enterScope(num) {
    return {
        type: RustLiteTypes_1.instruction_type.ENTER_SCOPE,
        num: num,
    };
}
function exitScope() {
    return {
        type: RustLiteTypes_1.instruction_type.EXIT_SCOPE,
    };
}
function loadFunction(arity, address) {
    return {
        type: RustLiteTypes_1.instruction_type.LDF,
        arity: arity,
        addr: address,
    };
}
function load(level, offset) {
    return {
        type: RustLiteTypes_1.instruction_type.LD,
        pos: { first: level, second: offset },
    };
}
function assign(level, offset) {
    return {
        type: RustLiteTypes_1.instruction_type.ASSIGN,
        pos: { first: level, second: offset },
    };
}
function call(arity) {
    return {
        type: RustLiteTypes_1.instruction_type.CALL,
        arity: arity,
    };
}
function tailCall(address, arity) {
    return {
        type: RustLiteTypes_1.instruction_type.TAIL_CALL,
        arity: arity,
    };
}
function reset() {
    return {
        type: RustLiteTypes_1.instruction_type.RESET,
    };
}
function done() {
    return {
        type: RustLiteTypes_1.instruction_type.DONE,
    };
}
