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
exports.load = load;
exports.enterFunctionScope = enterFunctionScope;
exports.exitFunctionScope = exitFunctionScope;
exports.loadFunction = loadFunction;
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
// Add scope tracking to compiler
let currentFrameLevel = 0;
let currentOffset = 0;
const scopeMap = new Map();
function enterScope(num) {
    currentFrameLevel++;
    currentOffset = 0;
    return {
        type: RustLiteTypes_1.instruction_type.ENTER_SCOPE,
        num: num,
    };
}
function exitScope() {
    currentFrameLevel--;
    // Clear variables from the current scope
    for (const [name, info] of scopeMap.entries()) {
        if (info.frameLevel === currentFrameLevel + 1) {
            scopeMap.delete(name);
        }
    }
    return {
        type: RustLiteTypes_1.instruction_type.EXIT_SCOPE,
    };
}
function load(name) {
    const info = scopeMap.get(name);
    if (!info) {
        throw new Error(`Undefined variable: ${name}`);
    }
    return {
        type: RustLiteTypes_1.instruction_type.LD,
        pos: { first: info.frameLevel, second: info.offset },
    };
}
// Add function scope tracking
let functionScopes = [];
function enterFunctionScope() {
    functionScopes.push(new Map());
    currentFrameLevel = 0;
    currentOffset = 0;
}
function exitFunctionScope() {
    functionScopes.pop();
}
function loadFunction(arity, address) {
    return {
        type: RustLiteTypes_1.instruction_type.LDF,
        arity: arity,
        addr: address,
    };
}
// Update assign to handle function parameters
function assign(name, isParameter = false) {
    const info = scopeMap.get(name);
    if (!info) {
        const newInfo = {
            frameLevel: currentFrameLevel,
            offset: isParameter ? currentOffset : currentOffset++
        };
        scopeMap.set(name, newInfo);
        if (isParameter) {
            currentOffset++;
        }
        return {
            type: RustLiteTypes_1.instruction_type.ASSIGN,
            pos: { first: newInfo.frameLevel, second: newInfo.offset },
        };
    }
    return {
        type: RustLiteTypes_1.instruction_type.ASSIGN,
        pos: { first: info.frameLevel, second: info.offset },
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
