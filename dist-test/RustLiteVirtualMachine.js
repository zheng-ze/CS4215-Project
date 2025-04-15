"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RustLiteVirtualMachine = void 0;
const RustLiteTypes_1 = require("./RustLiteTypes");
const RustLiteStack_1 = require("./RustLiteStack");
var HeapTag;
(function (HeapTag) {
    HeapTag[HeapTag["VectorStart"] = 0] = "VectorStart";
    HeapTag[HeapTag["VectorNode"] = 1] = "VectorNode";
})(HeapTag || (HeapTag = {}));
var TypeTag;
(function (TypeTag) {
    TypeTag[TypeTag["Int"] = 0] = "Int";
    TypeTag[TypeTag["Bool"] = 1] = "Bool";
    TypeTag[TypeTag["Address"] = 2] = "Address";
})(TypeTag || (TypeTag = {}));
class Heap {
    constructor(numWords) {
        const buffer = new ArrayBuffer(numWords * RustLiteTypes_1.word_size);
        this.data = new DataView(buffer);
        // Initialize free list
        this.free = 0;
        // Set up the free list chain
        for (let i = 0; i < numWords - 1; i++) {
            this.set(i, { type: "address", value: i + 1 }, TypeTag.Address);
        }
        // Mark the end of the free list
        this.set(numWords - 1, { type: "address", value: -1 }, TypeTag.Address);
    }
    get(address) {
        if (address < 0 || address >= RustLiteTypes_1.max_words * RustLiteTypes_1.word_size) {
            throw new Error(`Invalid address: ${address}`);
        }
        // get type
        const type = this.get_at_offset(address, 8);
        const storedValue = this.data.getFloat64(address * RustLiteTypes_1.word_size);
        if (type === TypeTag.Bool) {
            // Convert stored value to boolean
            // 1 for true, 0 for false
            return [storedValue === 0 ? false : true, TypeTag.Bool];
        }
        else if (type === TypeTag.Address) {
            // For addresses to other vectors, return the address
            return [{ type: "address", value: storedValue }, TypeTag.Address];
        }
        else if (type === TypeTag.Int) {
            // For integers, return the value
            return [storedValue, TypeTag.Int];
        }
        else {
            throw new Error(`Unknown type tag: ${type}`);
        }
    }
    set(address, value, tag) {
        console.log(`Setting value at address ${address}:`, value, tag);
        // Check if the address is valid
        if (address < 0 || address >= RustLiteTypes_1.max_words * RustLiteTypes_1.word_size) {
            throw new Error(`Invalid address: ${address}`);
        }
        // Check if typetag and value are compatible
        if (tag === TypeTag.Bool && typeof value !== "boolean") {
            throw new Error(`Expected boolean value, got ${typeof value}`);
        }
        if (tag === TypeTag.Int && typeof value !== "number") {
            throw new Error(`Expected number value, got ${typeof value}`);
        }
        if (tag === TypeTag.Address &&
            (typeof value !== "object" ||
                value.type !== "address" ||
                typeof value.value !== "number")) {
            throw new Error(`Expected address value, got ${typeof value}`);
        }
        if (tag === TypeTag.Address) {
            // For addresses to other vectors, store the address
            let valueToStore = value;
            this.data.setFloat64(address * RustLiteTypes_1.word_size, valueToStore.value);
        }
        else {
            // For other types, store the value directly
            // Convert boolean to number (1 for true, 0 for false)
            let valueToStore = typeof value === "boolean" ? (value ? 1 : 0) : value;
            this.data.setFloat64(address * RustLiteTypes_1.word_size, valueToStore);
        }
        this.set_at_offset(address, 8, tag);
    }
    // Helper method to check if a number is a valid vector address
    isVectorAddress(addr) {
        if (addr < 0 || addr >= this.data.byteLength) {
            return false;
        }
        // Check if the tag at addr is VectorStart
        const tag = this.data.getInt8(addr);
        return tag === HeapTag.VectorStart;
    }
    allocate(tag, size) {
        if (this.free === -1) {
            throw new Error("heap memory exhausted");
        }
        const address = this.free;
        const [free, storedTag] = this.get(this.free);
        if (storedTag !== TypeTag.Address ||
            typeof free !== "object" ||
            free.type !== "address") {
            throw new Error(`Free list corrupted at address ${address}`);
        }
        this.free = free.value;
        this.data.setInt8(address * RustLiteTypes_1.word_size, tag);
        this.data.setUint16(address * RustLiteTypes_1.word_size + RustLiteTypes_1.size_offset, size);
        return address;
    }
    // Allocate a vector of size `size`
    // The first byte is the tag
    // The second byte is the size of the vector
    // The other words are the elements of the vector
    // The vector is stored as a contiguous block of memory
    allocate_vector(numElements) {
        if (numElements < 0) {
            throw new Error(`Vector size cannot be negative`);
        }
        const address = this.allocate(HeapTag.VectorStart, 1 + numElements);
        return address;
    }
    // Set a node in the vector
    set_vector_node(address, index, value, tag) {
        if (index < 0) {
            throw new Error(`Index cannot be negative`);
        }
        if (this.getTag(address) !== HeapTag.VectorStart) {
            throw new Error(`Address ${address} is not a vector`);
        }
        if (index >= this.getSize(address) - 1) {
            throw new Error(`Index out of bounds`);
        }
        this.set(address + 1 + index, value, tag);
    }
    get_vector_node(address, index) {
        if (index < 0)
            throw new Error(`Index cannot be negative`);
        if (this.getTag(address) !== HeapTag.VectorStart)
            throw new Error(`Address ${address} is not a vector`);
        if (index >= this.getSize(address) - 1)
            throw new Error(`Index out of bounds`);
        return this.get(address + 1 + index);
    }
    get_vector_size(address) {
        if (this.getTag(address) !== HeapTag.VectorStart)
            throw new Error(`Address ${address} is not a vector`);
        return this.getSize(address) - 1;
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
        return this.data.getInt8(address * RustLiteTypes_1.word_size);
    }
    getSize(address) {
        return this.data.getUint16(address * RustLiteTypes_1.word_size + RustLiteTypes_1.size_offset);
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
                if (condition === 0 || condition === false) {
                    this.pc = jof.addr;
                }
            },
            [RustLiteTypes_1.instruction_type.GOTO]: (instr) => {
                const goto = instr;
                this.pc = goto.addr;
            },
            [RustLiteTypes_1.instruction_type.ENTER_SCOPE]: (instr) => {
                const enter = instr;
                // Calculate the maximum variable offset that will be accessed in this scope
                let maxOffset = enter.num;
                // Get the return address from the current frame to propagate to the new frame
                let returnAddr = undefined;
                if (this.stack.getFrameCount() > 0) {
                    returnAddr = this.stack.getReturnAddress();
                    console.log(`Propagating return address ${returnAddr} from parent frame to new scope frame`);
                }
                // Create a new frame with the calculated size and propagate the return address
                const minFrameSize = Math.max(maxOffset, 1);
                console.log(`Creating frame with size ${minFrameSize} for scope`);
                // When creating a new scope frame, we need to ensure it has enough space
                // for all variables that will be defined in this scope
                this.stack.pushFrame(minFrameSize, returnAddr);
                // Also enter a lexical scope for lifetime tracking
                this.stack.enterScope();
                // Dump the stack state for debugging
                this.stack.dump();
            },
            [RustLiteTypes_1.instruction_type.EXIT_SCOPE]: (instr) => {
                // Exit the lexical scope first to check for lifetime violations
                this.stack.exitScope();
                // Then pop the stack frame
                this.stack.popFrame();
            },
            [RustLiteTypes_1.instruction_type.LD]: (instr) => {
                const ld = instr;
                try {
                    // The first part of the position indicates the frame level
                    // For nested functions, we need to adjust which frame we're accessing
                    if (ld.pos.first === 2) {
                        // For frame level 2, we need to find the correct frame
                        // This could be the current function's frame or a parent frame
                        // First, try the current frame
                        const currentFrameIndex = this.stack.getFrameCount() - 1;
                        if (currentFrameIndex < 0) {
                            throw new Error(`Cannot access frame level ${ld.pos.first} when no frames exist`);
                        }
                        // Check if we're in a nested scope inside a function
                        // If so, we need to access the parent frame that contains the parameters
                        const currentFrame = this.stack.getFrame(currentFrameIndex);
                        // If current frame is too small to hold the requested offset, look at parent frame
                        if (ld.pos.second >= currentFrame.frameSize &&
                            currentFrameIndex > 0) {
                            const parentFrameIndex = currentFrameIndex - 1;
                            const value = this.stack.getLocalFromFrame(parentFrameIndex, ld.pos.second);
                            this.stack.push(value);
                            console.log(`Loaded value from parent frame ${parentFrameIndex}, offset ${ld.pos.second}: ${value}`);
                        }
                        else {
                            const value = this.stack.getLocalFromFrame(currentFrameIndex, ld.pos.second);
                            this.stack.push(value);
                            console.log(`Loaded value from frame level ${ld.pos.first} (frame index ${currentFrameIndex}), offset ${ld.pos.second}: ${value}`);
                        }
                    }
                    else if (ld.pos.first === 3) {
                        // For frame level 3, we need to access the parent frame
                        const frameIndex = this.stack.getFrameCount() - 2;
                        if (frameIndex < 0) {
                            throw new Error(`Cannot access frame level ${ld.pos.first} when only ${this.stack.getFrameCount()} frames exist`);
                        }
                        const value = this.stack.getLocalFromFrame(frameIndex, ld.pos.second);
                        this.stack.push(value);
                        console.log(`Loaded value from frame level ${ld.pos.first} (frame index ${frameIndex}), offset ${ld.pos.second}: ${value}`);
                    }
                    else {
                        throw new Error(`Accessing variables from frame level ${ld.pos.first} not yet implemented`);
                    }
                }
                catch (error) {
                    console.error(`Error accessing variable at position ${ld.pos.first}.${ld.pos.second}: ${error.message}`);
                    throw error;
                }
            },
            [RustLiteTypes_1.instruction_type.ASSIGN]: (instr) => {
                const assign = instr;
                const value = this.stack.peek();
                // Validate the value
                if (typeof value === "object" &&
                    value.type === "address" &&
                    typeof value.value !== "number") {
                    throw new Error(`Invalid address value: ${JSON.stringify(value)}`);
                }
                try {
                    // Handle different frame levels for assignment
                    if (assign.pos.first === 2) {
                        // For frame level 2, assign to the current frame
                        const frameIndex = this.stack.getFrameCount() - 1;
                        if (frameIndex < 0) {
                            throw new Error(`Cannot assign to frame level ${assign.pos.first} when no frames exist`);
                        }
                        this.stack.setLocalInFrame(frameIndex, assign.pos.second, value);
                        console.log(`Assigned value ${value} to variable at frame ${frameIndex}, offset ${assign.pos.second}`);
                    }
                    else if (assign.pos.first === 3) {
                        // For frame level 3, assign to the parent frame
                        const frameIndex = this.stack.getFrameCount() - 2;
                        if (frameIndex < 0) {
                            throw new Error(`Cannot assign to frame level ${assign.pos.first} when only ${this.stack.getFrameCount()} frames exist`);
                        }
                        this.stack.setLocalInFrame(frameIndex, assign.pos.second, value);
                        console.log(`Assigned value ${value} to variable at frame ${frameIndex}, offset ${assign.pos.second}`);
                    }
                    else {
                        throw new Error(`Assigning to variables at frame level ${assign.pos.first} not yet implemented`);
                    }
                }
                catch (error) {
                    console.error(`Error assigning to variable at position ${assign.pos.first}.${assign.pos.second}: ${error.message}`);
                    throw error;
                }
            },
            [RustLiteTypes_1.instruction_type.LDF]: (instr) => {
                const ldf = instr;
                // Just push the function address and arity - no environment needed
                this.stack.push(ldf.addr);
                this.stack.push(ldf.arity);
                console.log(`LDF: Loaded function at address ${ldf.addr} with arity ${ldf.arity}`);
            },
            [RustLiteTypes_1.instruction_type.CALL]: (instr) => {
                const call = instr;
                const arity = call.arity;
                // Get function info from stack (order is now reversed from LDF)
                const functionArity = this.stack.pop();
                const functionPC = this.stack.pop();
                if (functionArity !== arity) {
                    throw new Error(`Function expected ${functionArity} arguments but got ${arity}`);
                }
                // Set return address to current PC
                const returnAddr = this.pc;
                console.log(`Setting return address to ${returnAddr} for function call to PC=${functionPC}`);
                // Store arguments temporarily
                const args = [];
                console.log("In Call fn");
                for (let i = 0; i < arity; i++) {
                    args[i] = this.stack.pop();
                }
                console.log(args);
                // Create a new frame for the function with enough space for all parameters
                const frameSize = arity;
                this.stack.pushFrame(frameSize, returnAddr);
                // Double-check that the return address is set correctly
                this.stack.setReturnAddress(returnAddr);
                // Store arguments in the new frame in the correct order
                for (let i = 0; i < arity; i++) {
                    // The arguments are popped in reverse order from the stack
                    // For a call like sum(x, y), the stack will have [y, x]
                    // So we need to store them in the correct order in the frame
                    this.stack.setLocalInFrame(this.stack.getFrameCount() - 1, i, args[arity - 1 - i]);
                    console.log(`Setting argument ${i} to value ${args[arity - 1 - i]}`);
                }
                // Update program counter
                this.pc = Number(functionPC);
                console.log(`CALL: Jumping to function at PC=${functionPC}, return address=${returnAddr}, frame size=${frameSize}`);
            },
            [RustLiteTypes_1.instruction_type.TAIL_CALL]: (instr) => {
                const tail_call = instr;
                const arity = tail_call.arity;
                // Get function info from stack
                const functionArity = this.stack.pop();
                const functionPC = this.stack.pop();
                if (functionArity !== arity) {
                    throw new Error(`Function expected ${functionArity} arguments but got ${arity}`);
                }
                // For tail calls, we need to preserve the return address
                const returnAddr = this.stack.getReturnAddress();
                if (returnAddr === undefined) {
                    throw new Error("Cannot perform tail call without a return address");
                }
                // Store arguments temporarily
                const args = [];
                for (let i = 0; i < arity; i++) {
                    args[i] = this.stack.pop();
                }
                // Pop the current frame but remember its return address
                this.stack.popFrame();
                // Create a new frame with the same return address
                const frameSize = Math.max(arity, 1);
                this.stack.pushFrame(frameSize, returnAddr);
                // Store arguments in the new frame
                for (let i = 0; i < arity; i++) {
                    this.stack.setLocal(i, args[arity - 1 - i]);
                }
                // Update PC
                this.pc = Number(functionPC);
                console.log(`TAIL_CALL: Jumping to function at PC=${functionPC}, preserving return address=${returnAddr}`);
            },
            [RustLiteTypes_1.instruction_type.RESET]: (instr) => {
                // Get the return address from the current frame
                const returnAddr = this.stack.getReturnAddress();
                // Get the return value from the top of the stack
                const returnValue = this.stack.peek();
                console.log(`Return value before frame pop: ${returnValue}`);
                if (returnAddr === undefined) {
                    // Try to find a return address in any parent frame
                    let foundReturnAddr = undefined;
                    for (let i = this.stack.getFrameCount() - 2; i >= 0; i--) {
                        const frame = this.stack.getFrame(i);
                        if (frame.returnAddress !== undefined) {
                            foundReturnAddr = frame.returnAddress;
                            console.log(`Found return address ${foundReturnAddr} in parent frame ${i}`);
                            break;
                        }
                    }
                    if (foundReturnAddr === undefined) {
                        throw new Error("Cannot return without a return address");
                    }
                    // Pop frames until we reach the one with the return address
                    while (this.stack.getFrameCount() > 0 &&
                        this.stack.getReturnAddress() !== foundReturnAddr) {
                        this.stack.exitScope();
                        this.stack.popFrame();
                    }
                    // Push the return value back onto the stack
                    this.stack.push(returnValue);
                    // Jump to the return address
                    console.log(`RESET: Returning to address ${foundReturnAddr} with value ${returnValue}`);
                    this.pc = foundReturnAddr;
                    return;
                }
                // Pop the current frame
                this.stack.exitScope();
                this.stack.popFrame();
                // Push the return value back onto the stack
                this.stack.push(returnValue);
                console.log(`Return value after frame pop: ${returnValue}`);
                // Jump to the return address
                console.log(`RESET: Returning to address ${returnAddr} with value ${returnValue}`);
                this.pc = returnAddr;
            },
            [RustLiteTypes_1.instruction_type.ALLOC_VECTOR]: (instr) => {
                const alloc = instr;
                const size = alloc.size;
                if (size < 0) {
                    throw new Error(`Vector size cannot be negative`);
                }
                const address = this.heap.allocate_vector(size);
                this.stack.push({ type: "address", value: address });
                console.log(`Allocated vector at address ${address} with size ${size}`);
            },
            [RustLiteTypes_1.instruction_type.SET_VECTOR]: (instr) => {
                let value = this.stack.pop();
                const index = this.stack.pop();
                if (typeof index !== "number" || index < 0) {
                    throw new Error(`Invalid vector index: ${index}`);
                }
                let vectorAddr = this.stack.peek();
                if (typeof vectorAddr !== "object" || vectorAddr.type !== "address") {
                    throw new Error(`Invalid vector address: ${JSON.stringify(vectorAddr)}`);
                }
                vectorAddr = vectorAddr.value;
                if (!this.heap.isVectorAddress(vectorAddr))
                    throw new Error("Invalid vector address");
                // Get the type tag for the value
                let tag = TypeTag.Int;
                if (typeof value === "boolean") {
                    tag = TypeTag.Bool;
                }
                else if (typeof value === "number") {
                    tag = TypeTag.Int;
                }
                else if (value &&
                    typeof value === "object" &&
                    value.type === "address") {
                    throw new Error("Nested vectors are not supported");
                }
                else {
                    throw new Error(`Unsupported value type: ${typeof value}`);
                }
                // Set the vector node
                this.heap.set_vector_node(vectorAddr, index, value, tag);
                console.log(`SET_VECTOR: Set value ${value} at address ${vectorAddr}, index ${index}`);
            },
            [RustLiteTypes_1.instruction_type.GET_VECTOR]: (instr) => {
                const index = this.stack.pop();
                if (typeof index !== "number" || index < 0) {
                    throw new Error(`Invalid vector index: ${index}`);
                }
                let vectorAddr = this.stack.pop();
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
                this.stack.push(value);
                console.log(`GET_VECTOR: Retrieved value ${value} from address ${vectorAddr}, index ${index}`);
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
