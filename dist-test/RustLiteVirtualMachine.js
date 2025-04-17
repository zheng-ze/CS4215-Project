"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RustLiteVirtualMachine = void 0;
const RustLiteTypes_1 = require("./RustLiteTypes");
const RustLiteHeap_1 = require("./RustLiteHeap");
const RustLiteStack_1 = require("./RustLiteStack");
class RustLiteVirtualMachine {
    constructor(instrs) {
        this.microcode = {
            [RustLiteTypes_1.instruction_type.LDC]: this.handle_ldc_instruction.bind(this),
            [RustLiteTypes_1.instruction_type.UNOP]: this.handle_unop_instruction.bind(this),
            [RustLiteTypes_1.instruction_type.BINOP]: this.handle_binop_instruction.bind(this),
            [RustLiteTypes_1.instruction_type.POP]: (instr) => {
                this.stack.pop();
            },
            [RustLiteTypes_1.instruction_type.JOF]: this.handle_jof_instr.bind(this),
            [RustLiteTypes_1.instruction_type.GOTO]: this.handle_goto_instr.bind(this),
            [RustLiteTypes_1.instruction_type.ENTER_SCOPE]: this.handle_enter_scope.bind(this),
            [RustLiteTypes_1.instruction_type.EXIT_SCOPE]: this.handle_exit_scope.bind(this),
            [RustLiteTypes_1.instruction_type.LD]: this.handle_ld_instruction.bind(this),
            [RustLiteTypes_1.instruction_type.ASSIGN]: this.handle_assign_instruction.bind(this),
            [RustLiteTypes_1.instruction_type.LDF]: this.handle_ldf_instruction.bind(this),
            // [instruction_type.CALL]: (instr: instruction) => {
            //   const call = instr as CALL;
            //   const arity = call.arity;
            //   // Get function info from stack (order is now reversed from LDF)
            //   const functionArity = this.stack.pop();
            //   const functionPC = this.stack.pop();
            //   if (functionArity !== arity) {
            //     throw new Error(
            //       `Function expected ${functionArity} arguments but got ${arity}`
            //     );
            //   }
            //   // Set return address to current PC
            //   const returnAddr = this.pc;
            //   console.log(
            //     `Setting return address to ${returnAddr} for function call to PC=${functionPC}`
            //   );
            //   // Store arguments temporarily
            //   const args: SUPPORTED_TYPES[] = [];
            //   console.log("In Call fn");
            //   for (let i = 0; i < arity; i++) {
            //     args[i] = this.stack.pop();
            //   }
            //   console.log(args);
            //   // Create a new frame for the function with enough space for all parameters
            //   const frameSize = arity;
            //   this.stack.pushFrame(returnAddr);
            //   // Double-check that the return address is set correctly
            //   this.stack.setReturnAddress(returnAddr);
            //   // Store arguments in the new frame in the correct order
            //   for (let i = 0; i < arity; i++) {
            //     // The arguments are popped in reverse order from the stack
            //     // For a call like sum(x, y), the stack will have [y, x]
            //     // So we need to store them in the correct order in the frame
            //     this.stack.setLocalInFrame(
            //       this.stack.getFrameCount() - 1,
            //       i,
            //       args[arity - 1 - i]
            //     );
            //     console.log(`Setting argument ${i} to value ${args[arity - 1 - i]}`);
            //   }
            //   // Update program counter
            //   this.pc = Number(functionPC);
            //   console.log(
            //     `CALL: Jumping to function at PC=${functionPC}, return address=${returnAddr}, frame size=${frameSize}`
            //   );
            // },
            // [instruction_type.TAIL_CALL]: (instr: instruction) => {
            //   const tail_call = instr as TAIL_CALL;
            //   const arity = tail_call.arity;
            //   // Get function info from stack
            //   const functionArity = this.stack.pop();
            //   const functionPC = this.stack.pop();
            //   if (functionArity !== arity) {
            //     throw new Error(
            //       `Function expected ${functionArity} arguments but got ${arity}`
            //     );
            //   }
            //   // For tail calls, we need to preserve the return address
            //   const returnAddr = this.stack.getReturnAddress();
            //   if (returnAddr === undefined) {
            //     throw new Error("Cannot perform tail call without a return address");
            //   }
            //   // Store arguments temporarily
            //   const args: SUPPORTED_TYPES[] = [];
            //   for (let i = 0; i < arity; i++) {
            //     args[i] = this.stack.pop();
            //   }
            //   // Pop the current frame but remember its return address
            //   this.stack.popFrame();
            //   // Create a new frame with the same return address
            //   const frameSize = Math.max(arity, 1);
            //   this.stack.pushFrame(returnAddr);
            //   // Store arguments in the new frame
            //   for (let i = 0; i < arity; i++) {
            //     this.stack.setLocal(i, args[arity - 1 - i]);
            //   }
            //   // Update PC
            //   this.pc = Number(functionPC);
            //   console.log(
            //     `TAIL_CALL: Jumping to function at PC=${functionPC}, preserving return address=${returnAddr}`
            //   );
            // },
            [RustLiteTypes_1.instruction_type.RESET]: this.handle_reset_instr.bind(this),
            [RustLiteTypes_1.instruction_type.ALLOC_VECTOR]: this.handle_alloc_vector.bind(this),
            [RustLiteTypes_1.instruction_type.SET_VECTOR]: this.handle_set_vector.bind(this),
            [RustLiteTypes_1.instruction_type.GET_VECTOR]: this.handle_get_vector.bind(this),
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
                return Math.floor(left / right);
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
        this.os = [];
        this.stack = new RustLiteStack_1.RustLiteStack();
        this.heap = new RustLiteHeap_1.Heap(100);
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
        console.log(this.stack.dump());
        return this.os.pop() || 0;
    }
    reset() {
        this.stack.reset();
        this.os = [];
        this.heap = new RustLiteHeap_1.Heap(100);
        this.pc = 0;
    }
    //Load Constant, for example when we are just calling a primitive value like 1;
    handle_ldc_instruction(instr) {
        const ldc = instr;
        if (typeof ldc.val === "number" || typeof ldc.val === "boolean") {
            // Store primitives directly on the stack
            this.os.push(ldc.val);
        }
        else {
            console.log("Non Primitive Value");
        }
    }
    //Unary Operator Handling for default operations with only one argument like ! or (-)
    handle_unop_instruction(instr) {
        const unop = instr;
        const arg = this.os.pop();
        if (arg == undefined) {
            throw Error("UNOP Argument not found on OS");
        }
        const result = this.apply_unop(unop.sym, arg);
        if (result != undefined)
            this.os.push(result);
    }
    apply_unop(op, value) {
        // Convert numeric 0/1 to boolean for boolean operations
        if (op === "!") {
            return this.unop_microcode[op](value === 0 ? false : true);
        }
        return this.unop_microcode[op](value);
    }
    //Binary Operator Handling for default operations with two arguments
    //Pre Condition: left and right arguments should have already been pushed onto the stack in the order [left, right]
    handle_binop_instruction(instr) {
        const binop = instr;
        const right = this.os.pop();
        const left = this.os.pop();
        if (left == undefined || right == undefined) {
            throw Error("Values not present in the OS");
        }
        const result = this.apply_binop(binop.sym, left, right);
        console.log(`Applied BINOP: ${binop.sym}, LEFT: ${JSON.stringify(left)}, RIGHT: ${right}, RESULT: ${result}`);
        if (result != undefined)
            this.os.push(result);
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
    //GOTO, updates the pointer of the current instruction to the index/address specified in the GOTO instruction
    handle_goto_instr(inst) {
        const goto = inst;
        console.log(`Jumping to address ${goto.addr}`);
        // console.log("Current PC:", this.pc);
        this.pc = goto.addr;
    }
    //Enters a new scope and creates a new frame on the stack
    handle_enter_scope(instr) {
        this.stack.pushFrame();
    }
    //Exits a scope by popping frame from stack and resetting stack pointer to previous base of frame
    handle_exit_scope(instr) {
        this.stack.popFrame();
    }
    //Loads value into stack by getting values stack frame
    handle_ld_instruction(ins) {
        const instr = ins;
        const frame_index = instr?.pos?.first;
        const offset = instr?.pos?.second;
        const value = this.stack.getLocalFromFrame(frame_index, offset);
        console.log(`pushed value: ${value} to top of the stack`);
        if (value == undefined)
            throw new Error("Value not found in stack");
        this.os.push(value);
    }
    //Assigns a value to the current scope by pushing it onto the stack
    handle_assign_instruction(inst) {
        const instr = inst;
        const val = this.os.pop();
        if (val == undefined)
            throw new Error("ASSIGN: Value not found in stack");
        this.stack.push(val);
    }
    //Loads a function into memory by creating a new frame on the stack with return address at current pc + 1
    handle_ldf_instruction(instr) {
        const ldf = instr;
        this.stack.pushFrame(this.pc++);
        for (let i = 0; i < ldf.arity; i++) {
            let val = this.os.pop();
            if (val == undefined)
                throw new Error("LDF: Value not found in stack");
            this.stack.push(val);
        }
        this.pc = ldf.addr;
    }
    handle_reset_instr(instr) {
        // Get the return address from the current frame
        const returnAddr = this.stack.getReturnAddress();
        if (returnAddr == undefined) {
            throw Error("Return Address cannot be undefined");
        }
        // Get the return value from the top of the stack
        const returnValue = this.os.pop();
        console.log(`Return value before frame pop: ${returnValue}`);
        //Need to pop frames until we completely exit the function
        while (this.stack.getFrameCount() &&
            this.stack.getReturnAddress() == returnAddr) {
            this.stack.popFrame();
        }
        this.pc = returnAddr;
        if (returnValue != undefined)
            this.os.push(returnValue);
    }
    handle_jof_instr(instr) {
        const jof = instr;
        console.log(`Stack: ${this.os}`);
        const condition = this.os.pop();
        console.log(`Predicate value: ${condition}`);
        // Jump if condition is falsy (0 or false)
        if (condition == undefined)
            throw new Error("JOF: Value not found in stack");
        if (condition)
            return;
        this.pc = jof.addr;
    }
    handle_alloc_vector(instr) {
        const alloc = instr;
        const size = alloc.size;
        if (size < 0) {
            throw new Error("ALLOC_VECTOR: Size cannot be negative");
        }
        const addr = this.heap.allocate_vector(size);
        this.os.push({ type: "address", value: addr });
        console.log(`Allocated vector of size ${size} at address ${addr}, current free list head: ${this.heap.free}`);
    }
    handle_set_vector(instr) {
        console.log("OS", this.os);
        const value = this.os.pop();
        const index = this.os.pop();
        if (typeof index !== "number" || index < 0) {
            throw new Error("SET_VECTOR: Index must be a non-negative number");
        }
        if (value == undefined) {
            throw new Error("SET_VECTOR: Value not found in stack");
        }
        const addr = this.os.slice(-1)[0];
        if (typeof addr !== "object" || addr.type !== "address") {
            throw new Error("SET_VECTOR: Invalid address: " + JSON.stringify(addr));
        }
        this.heap.set_vector_node(addr.value, index, value, RustLiteTypes_1.TypeTag.Int);
    }
    handle_get_vector(instr) {
        console.log("OS", this.os);
        const index = this.os.pop();
        if (typeof index !== "number" || index < 0) {
            throw new Error(`Invalid vector index: ${index}`);
        }
        let vectorAddr = this.os.pop();
        if (typeof vectorAddr !== "object" || vectorAddr.type !== "address") {
            throw new Error(`Invalid vector address: ${JSON.stringify(vectorAddr)}`);
        }
        vectorAddr = vectorAddr.value;
        if (!this.heap.isVectorAddress(vectorAddr))
            throw new Error("Invalid vector address");
        // Get the vector node
        let [value, tag] = this.heap.get_vector_node(vectorAddr, index);
        if (tag === RustLiteTypes_1.TypeTag.Address) {
            throw new Error(`Nested vectors are not supported. Address: ${value}`);
        }
        console.log(`GET_VECTOR: Retrieved value ${value} from address ${vectorAddr}, index ${index}`);
        this.os.push(value);
    }
}
exports.RustLiteVirtualMachine = RustLiteVirtualMachine;
