"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RustLiteVirtualMachine = void 0;
const RustLiteTypes_1 = require("./RustLiteTypes");
const RustLiteStack_1 = require("./RustLiteStack");
var HeapTag;
(function (HeapTag) {
    HeapTag[HeapTag["Bool"] = 0] = "Bool";
    HeapTag[HeapTag["Number"] = 1] = "Number";
    HeapTag[HeapTag["Blockframe"] = 2] = "Blockframe";
    HeapTag[HeapTag["Callframe"] = 3] = "Callframe";
    HeapTag[HeapTag["Closure"] = 4] = "Closure";
    HeapTag[HeapTag["Frame"] = 5] = "Frame";
    HeapTag[HeapTag["Environment"] = 6] = "Environment";
    HeapTag[HeapTag["Struct"] = 7] = "Struct";
})(HeapTag || (HeapTag = {}));
function push(array, ...items) {
    for (const item of items) {
        array.push(item);
    }
    return array;
}
function peek(array, index) {
    if (index < 0 || index >= array.length) {
        throw new Error("Index out of bounds");
    }
    return array.slice(-1 - index)[0];
}
class Heap {
    constructor(numWords) {
        const buffer = new ArrayBuffer(numWords * RustLiteTypes_1.word_size);
        this.data = new DataView(buffer);
        // Initialize free list
        this.free = 0;
        // Set up the free list chain
        for (let i = 0; i < numWords - 1; i++) {
            this.set(i * RustLiteTypes_1.word_size, (i + 1) * RustLiteTypes_1.word_size);
        }
        // Mark the end of the free list
        this.set((numWords - 1) * RustLiteTypes_1.word_size, -1);
    }
    get(index) {
        return this.data.getFloat64(index);
    }
    set(address, value) {
        this.data.setFloat64(address, value);
    }
    allocate(tag, size) {
        if (size > RustLiteTypes_1.node_size) {
            throw new Error(`limitation: nodes cannot be larger than ${RustLiteTypes_1.node_size} words`);
        }
        if (this.free === -1) {
            throw new Error("heap memory exhausted");
        }
        const address = this.free;
        this.free = this.get(this.free);
        this.data.setInt8(address * RustLiteTypes_1.word_size, tag);
        this.data.setUint16(address * RustLiteTypes_1.word_size + RustLiteTypes_1.size_offset, size);
        return address;
    }
    get_at_offset(address, offset) {
        return this.data.getUint8(address * RustLiteTypes_1.word_size + offset);
    }
    set_at_offset(address, offset, value) {
        this.data.setUint8(address * RustLiteTypes_1.word_size + offset, value);
    }
    get_2_at_offset(address, offset) {
        return this.data.getUint16(address * RustLiteTypes_1.word_size + offset);
    }
    set_2_at_offset(address, offset, value) {
        this.data.setUint16(address * RustLiteTypes_1.word_size + offset, value);
    }
    getTag(address) {
        console.log(this.data.getInt8(address * RustLiteTypes_1.word_size));
        return this.data.getInt8(address * RustLiteTypes_1.word_size);
    }
    getSize(address) {
        return this.data.getUint16(address * RustLiteTypes_1.word_size + RustLiteTypes_1.size_offset);
    }
    get_child(address, child_index) {
        return this.get(address + 1 + child_index);
    }
    set_child(address, child_index, value) {
        this.set(address + 1 + child_index, value);
    }
    get_num_children(address) {
        return this.getTag(address) === HeapTag.Number
            ? 0
            : this.getSize(address) - 1;
    }
}
class RustLiteVirtualMachine {
    constructor(instrs) {
        this.microcode = {
            [RustLiteTypes_1.instruction_type.LDC]: (instr) => {
                const ldc = instr;
                if (typeof ldc.val === "number" || typeof ldc.val === "boolean") {
                    // Store primitives directly on the stack
                    this.stack.push(ldc.val);
                }
                else {
                    console.log("Non Primitive Value");
                    const addr = this.JS_value_to_address(ldc.val);
                    this.stack.push(addr);
                }
            },
            [RustLiteTypes_1.instruction_type.UNOP]: (instr) => {
                const unop = instr;
                const arg = this.stack.pop();
                const result = this.apply_unop(unop.sym, arg);
                this.stack.push(result);
            },
            [RustLiteTypes_1.instruction_type.BINOP]: (instr) => {
                const binop = instr;
                const right = this.stack.pop();
                const left = this.stack.pop();
                const result = this.apply_binop(binop.sym, left, right);
                this.stack.push(result);
            },
            [RustLiteTypes_1.instruction_type.POP]: (instr) => {
                this.stack.pop();
            },
            [RustLiteTypes_1.instruction_type.JOF]: (instr) => {
                const jof = instr;
                const condition = this.stack.pop();
                // Jump if condition is falsy (0 or false)
                if (condition === 0) {
                    this.pc = jof.addr;
                }
            },
            [RustLiteTypes_1.instruction_type.GOTO]: (instr) => {
                const goto = instr;
                this.pc = goto.addr;
            },
            [RustLiteTypes_1.instruction_type.ENTER_SCOPE]: (instr) => {
                const enter = instr;
                // Create new stack frame for the scope
                this.stack.pushFrame(enter.num);
                // Initialize locals to 0 (already done in pushFrame)
            },
            [RustLiteTypes_1.instruction_type.EXIT_SCOPE]: (instr) => {
                // Pop the current stack frame
                this.stack.popFrame();
            },
            [RustLiteTypes_1.instruction_type.LD]: (instr) => {
                const ld = instr;
                // Load from stack frame instead of environment
                const value = this.stack.getLocal(ld.pos.second);
                this.stack.push(value);
            },
            [RustLiteTypes_1.instruction_type.ASSIGN]: (instr) => {
                const assign = instr;
                const value = this.stack.peek();
                // Store in stack frame instead of environment
                this.stack.setLocal(assign.pos.second, value);
            },
            [RustLiteTypes_1.instruction_type.LDF]: (instr) => {
                const ldf = instr;
                const closure_addr = this.allocate_Closure(ldf.arity, ldf.addr, this.e);
                this.stack.push(closure_addr);
                // Don't skip over function body - the compiler handles this
            },
            [RustLiteTypes_1.instruction_type.CALL]: (instr) => {
                const call = instr;
                const arity = call.arity;
                // Get function closure first
                const fun = this.stack.pop();
                // console.log(fun.toString(2));
                // console.log(this.is_Closure(fun));
                if (!this.is_Closure(fun)) {
                    throw new Error("Attempting to call a non-function value");
                }
                // Save current execution context
                this.stack.push(this.pc);
                // Create new stack frame for parameters
                this.stack.pushFrame(arity);
                // Pop arguments in reverse order and store in frame
                for (let i = arity - 1; i >= 0; i--) {
                    const arg = this.stack.pop();
                    this.stack.setLocal(i, arg);
                }
                // Jump to function code
                this.pc = this.get_closure_pc(fun);
                this.e = this.get_closure_env(fun);
            },
            [RustLiteTypes_1.instruction_type.RESET]: (instr) => {
                this.stack.popFrame(); // Remove current frame
                this.pc = this.stack.pop(); // Restore return address
            },
            [RustLiteTypes_1.instruction_type.TAIL_CALL]: (instr) => {
                const tail_call = instr;
                const arity = tail_call.arity;
                // Reuse current frame for tail call optimization
                const args = new Array(arity);
                for (let i = arity - 1; i >= 0; i--) {
                    args[i] = this.stack.pop();
                }
                const fun = this.stack.pop();
                // Reuse the current frame instead of creating a new one
                for (let i = 0; i < arity; i++) {
                    this.stack.setLocal(i, args[i]);
                }
                if (this.is_Closure(fun)) {
                    this.pc = this.get_closure_pc(fun);
                    this.e = this.get_closure_env(fun);
                }
                else {
                    throw new Error("Attempting to call a non-function value");
                }
            },
        };
        this.unop_microcode = {
            "-unary": (num) => -num,
            "!": (bool) => !bool,
        };
        this.binop_microcode = {
            "+": (left, right) => left + right,
            "-": (left, right) => left - right,
            "*": (left, right) => left * right,
            "/": (left, right) => {
                if (right === 0)
                    throw new Error("Division by zero");
                return left / right;
            },
            "%": (left, right) => {
                if (right === 0)
                    throw new Error("Modulo by zero");
                return left % right;
            },
            "==": (left, right) => left === right,
            "!=": (left, right) => left !== right,
            "<": (left, right) => left < right,
            "<=": (left, right) => left <= right,
            ">": (left, right) => left > right,
            ">=": (left, right) => left >= right,
            "&&": (left, right) => left && right,
            "||": (left, right) => left || right,
        };
        this.instrs = instrs;
        this.stack = new RustLiteStack_1.RustLiteStack();
        this.heap = new Heap(100);
        this.pc = 0;
        this.e = 0;
    }
    run() {
        this.reset();
        while (this.instrs[this.pc].type !== RustLiteTypes_1.instruction_type.DONE) {
            console.log("PC:", this.pc);
            console.log("Current instruction type:", RustLiteTypes_1.instruction_type[this.instrs[this.pc].type]);
            console.log("Instruction:", this.instrs[this.pc]);
            const instr = this.instrs[this.pc++];
            const microcode = this.microcode[instr.type];
            if (microcode) {
                microcode(instr);
            }
            else {
                throw new Error(`Unknown instruction type: ${instr.type}`);
            }
        }
        // Return the value directly from stack since we store primitives there
        return this.stack.peek();
    }
    reset() {
        this.stack.reset();
        this.heap = new Heap(100);
        this.pc = 0;
        this.e = 0;
    }
    // bool
    // [1 byte tag, 4 bytes unused,
    //  2 bytes #children, 1 byte unused]
    // followed by the number, one word
    // note: #children is 0
    is_Bool(address) {
        return this.heap.getTag(address) === HeapTag.Bool;
    }
    allocate_Bool(value) {
        const address = this.heap.allocate(HeapTag.Bool, 2);
        this.heap.set(address + 1, value ? 1 : 0);
        return address;
    }
    // number
    // [1 byte tag, 4 bytes unused,
    //  2 bytes #children, 1 byte unused]
    // followed by the number, one word
    // note: #children is 0
    is_Number(address) {
        return this.heap.getTag(address) === HeapTag.Number;
    }
    allocateNumber(value) {
        const address = this.heap.allocate(HeapTag.Number, 2);
        this.heap.set(address + 1, value);
        return address;
    }
    // closure
    // [1 byte tag, 1 byte arity, 2 bytes pc, 1 byte unused,
    //  2 bytes #children, 1 byte unused]
    // followed by the address of env
    // note: currently bytes at offset 4 and 7 are not used;
    //   they could be used to increase pc and #children range
    is_Closure(address) {
        console.log(address);
        return this.heap.getTag(address) === HeapTag.Closure;
    }
    allocate_Closure(arity, pc, env) {
        const address = this.heap.allocate(HeapTag.Closure, 3);
        this.heap.set_at_offset(address, 1, arity);
        this.heap.set_2_at_offset(address, 2, pc);
        this.heap.set_child(address, 0, env);
        return address;
    }
    get_closure_arity(address) {
        return this.heap.get_at_offset(address, 1);
    }
    get_closure_pc(address) {
        return this.heap.get_2_at_offset(address, 2);
    }
    get_closure_env(address) {
        return this.heap.get_child(address, 0);
    }
    // block frame
    // [1 byte tag, 4 bytes unused,
    //  2 bytes #children, 1 byte unused]
    is_Blockframe(address) {
        return this.heap.getTag(address) === HeapTag.Blockframe;
    }
    allocate_Blockframe(env) {
        const address = this.heap.allocate(HeapTag.Blockframe, 2);
        this.heap.set(address + 1, env);
        return address;
    }
    get_blockframe_env(address) {
        return this.heap.get_child(address, 0);
    }
    // call frame
    // [1 byte tag, 1 byte unused, 2 bytes pc,
    //  1 byte unused, 2 bytes #children, 1 byte unused]
    // followed by the address of env
    is_Callframe(address) {
        return this.heap.getTag(address) === HeapTag.Callframe;
    }
    allocate_Callframe(env, pc) {
        const address = this.heap.allocate(HeapTag.Callframe, 2);
        this.heap.set_2_at_offset(address, 2, pc);
        this.heap.set(address + 1, env);
        return address;
    }
    get_callframe_env(address) {
        return this.heap.get_child(address, 0);
    }
    get_callframe_pc(address) {
        return this.heap.get_2_at_offset(address, 2);
    }
    // environment frame
    // [1 byte tag, 4 bytes unused,
    //  2 bytes #children, 1 byte unused]
    // followed by the addresses of its values
    is_Environment(address) {
        return this.heap.getTag(address) === HeapTag.Environment;
    }
    allocate_Environment(numFrames) {
        const address = this.heap.allocate(HeapTag.Environment, numFrames + 1);
        return address;
    }
    get_Environment_value(address, index) {
        const frameIndex = index.first;
        const valueIndex = index.second;
        const frameAddress = this.heap.get_child(address, frameIndex);
        const valueAddress = this.heap.get_child(frameAddress, valueIndex);
        return valueAddress;
    }
    set_Environment_value(address, index, value) {
        const frameIndex = index.first;
        const valueIndex = index.second;
        const frameAddress = this.heap.get_child(address, frameIndex);
        this.heap.set_child(frameAddress, valueIndex, value);
    }
    environment_extend(frameAddress, envAddress) {
        const old_size = this.heap.getSize(envAddress);
        const new_env_address = this.heap.allocate(HeapTag.Environment, old_size + 1);
        let i = 0;
        for (i; i < old_size - 1; i++) {
            this.heap.set_child(new_env_address, i, this.heap.get_child(envAddress, i));
        }
        this.heap.set_child(new_env_address, i, frameAddress);
        return new_env_address;
    }
    address_to_JS_value(address) {
        if (this.is_Bool(address)) {
            return this.heap.get(address + 1) === 1;
        }
        if (this.is_Number(address)) {
            return this.heap.get(address + 1);
        }
        throw new Error(`Unsupported address type: ${this.heap.getTag(address)}`);
    }
    JS_value_to_address(val) {
        if (typeof val === "number") {
            return this.allocateNumber(val);
        }
        if (typeof val === "boolean") {
            return this.allocate_Bool(val);
        }
        throw new Error(`Unsupported type: ${typeof val}`);
    }
    apply_unop(op, value) {
        // Convert numeric 0/1 to boolean for boolean operations
        if (op === "!") {
            return this.unop_microcode[op](value === 0 ? false : true);
        }
        return this.unop_microcode[op](value);
    }
    apply_binop(op, left, right) {
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
        if (op === "==" ||
            op === "!=" ||
            op === "<" ||
            op === "<=" ||
            op === ">" ||
            op === ">=") {
            return operation(left, right) ? 1 : 0;
        }
        return operation(left, right);
    }
}
exports.RustLiteVirtualMachine = RustLiteVirtualMachine;
