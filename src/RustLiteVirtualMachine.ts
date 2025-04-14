import {
  ASSIGN,
  BINOP,
  CALL,
  ENTER_SCOPE,
  GOTO,
  JOF,
  LD,
  LDC,
  LDF,
  Pair,
  RESET,
  SUPPORTED_TYPES,
  TAIL_CALL,
  UNOP,
  instruction,
  instruction_type,
  node_size,
  size_offset,
  word_size,
  max_words,
} from "./RustLiteTypes";
import { RustLiteStack } from "./RustLiteStack";

interface VirtualMachineMicrocode {
  [key: string]: (instr: instruction) => void;
}

enum HeapTag {
  Bool = 0,
  Number = 1,
  Blockframe = 2,
  Callframe = 3,
  Frame = 5,
  Struct = 7,
}

function peek(array: SUPPORTED_TYPES[], index: number): SUPPORTED_TYPES {
  if (index < 0 || index >= array.length) {
    throw new Error("Index out of bounds");
  }
  return array.slice(-1 - index)[0];
}

class Heap {
  data: DataView;
  free: number;

  constructor(numWords: number) {
    const buffer = new ArrayBuffer(numWords * word_size);
    this.data = new DataView(buffer);

    // Initialize free list
    this.free = 0;

    // Set up the free list chain
    for (let i = 0; i < numWords - 1; i++) {
      this.set(i * word_size, (i + 1) * word_size);
    }

    // Mark the end of the free list
    this.set((numWords - 1) * word_size, -1);
  }

  get(index: number): number {
    return this.data.getFloat64(index);
  }

  set(address: number, value: number): void {
    this.data.setFloat64(address, value);
  }

  allocate(tag: HeapTag, size: number): number {
    if (size > node_size) {
      throw new Error(
        `limitation: nodes cannot be larger than ${node_size} words`
      );
    }

    if (this.free === -1) {
      throw new Error("heap memory exhausted");
    }

    const address = this.free;
    this.free = this.get(this.free);
    this.data.setInt8(address * word_size, tag);
    this.data.setUint16(address * word_size + size_offset, size);
    return address;
  }

  get_at_offset(address: number, offset: number): number {
    return this.data.getUint8(address * word_size + offset);
  }

  set_at_offset(address: number, offset: number, value: number): void {
    this.data.setUint8(address * word_size + offset, value);
  }

  get_2_at_offset(address: number, offset: number): number {
    return this.data.getUint16(address * word_size + offset);
  }

  set_2_at_offset(address: number, offset: number, value: number): void {
    this.data.setUint16(address * word_size + offset, value);
  }

  getTag(address: number): HeapTag {
    return this.data.getInt8(address * word_size);
  }

  getSize(address: number): number {
    return this.data.getUint16(address * word_size + size_offset);
  }

  get_child(address: number, child_index: number): number {
    return this.get(address + 1 + child_index);
  }

  set_child(address: number, child_index: number, value: number): void {
    this.set(address + 1 + child_index, value);
  }

  get_num_children(address: number): number {
    return this.getTag(address) === HeapTag.Number
      ? 0
      : this.getSize(address) - 1;
  }
}

interface VirtualMachine<T> {
  microcode: VirtualMachineMicrocode;
  stack: RustLiteStack;
  heap: Heap;
  pc: number;
  instrs: instruction[];
}

export class RustLiteVirtualMachine implements VirtualMachine<SUPPORTED_TYPES> {
  stack: RustLiteStack; // Stack for values, variables, and call frames
  heap: Heap;
  pc: number;

  instrs: instruction[];

  constructor(instrs: instruction[]) {
    this.instrs = instrs;
    this.stack = new RustLiteStack();
    this.heap = new Heap(100);
    this.pc = 0;
  }

  run(): SUPPORTED_TYPES {
    this.reset();

    while (this.instrs[this.pc].type !== instruction_type.DONE) {
      console.log("PC:", this.pc);
      console.log(
        "Current instruction type:",
        instruction_type[this.instrs[this.pc].type]
      );
      console.log("Instruction:", this.instrs[this.pc]);
      const instr = this.instrs[this.pc++];

      const microcode = this.microcode[instr.type];
      if (microcode) {
        microcode(instr);
      } else {
        throw new Error(`Unknown instruction type: ${instr.type}`);
      }
    }

    // Return the value directly from stack since we store primitives there
    return this.stack.peek();
  }

  reset(): void {
    this.stack.reset();
    this.heap = new Heap(100);
    this.pc = 0;
  }

  microcode: VirtualMachineMicrocode = {
    [instruction_type.LDC]: (instr: instruction) => {
      const ldc = instr as LDC;
      if (typeof ldc.val === "number" || typeof ldc.val === "boolean") {
        // Store primitives directly on the stack
        this.stack.push(ldc.val);
      } else {
        console.log("Non Primitive Value");
      }
    },
    
    [instruction_type.UNOP]: (instr: instruction) => {
      const unop = instr as UNOP;
      const arg = this.stack.pop();
      const result = this.apply_unop(unop.sym, arg);
      this.stack.push(result);
    },
    
    [instruction_type.BINOP]: (instr: instruction) => {
      const binop = instr as BINOP;
      const right = this.stack.pop();
      const left = this.stack.pop();
      const result = this.apply_binop(binop.sym, left, right);
      this.stack.push(result);
    },
    
    [instruction_type.POP]: (instr: instruction) => {
      this.stack.pop();
    },
    
    [instruction_type.JOF]: (instr: instruction) => {
      const jof = instr as JOF;
      const condition = this.stack.pop();
      // Jump if condition is falsy (0 or false)
      if (condition === 0 || condition === false) {
        this.pc = jof.addr;
      }
    },
    
    [instruction_type.GOTO]: (instr: instruction) => {
      const goto = instr as GOTO;
      this.pc = goto.addr;
    },
    
    [instruction_type.ENTER_SCOPE]: (instr: instruction) => {
      const enter = instr as ENTER_SCOPE;
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
    
    [instruction_type.EXIT_SCOPE]: (instr: instruction) => {
      // Exit the lexical scope first to check for lifetime violations
      this.stack.exitScope();
      
      // Then pop the stack frame
      this.stack.popFrame();
    },

    [instruction_type.LD]: (instr: instruction) => {
      const ld = instr as LD;
      
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
          if (ld.pos.second >= currentFrame.frameSize && currentFrameIndex > 0) {
            const parentFrameIndex = currentFrameIndex - 1;
            const value = this.stack.getLocalFromFrame(parentFrameIndex, ld.pos.second);
            this.stack.push(value);
            console.log(`Loaded value from parent frame ${parentFrameIndex}, offset ${ld.pos.second}: ${value}`);
          } else {
            const value = this.stack.getLocalFromFrame(currentFrameIndex, ld.pos.second);
            this.stack.push(value);
            console.log(`Loaded value from frame level ${ld.pos.first} (frame index ${currentFrameIndex}), offset ${ld.pos.second}: ${value}`);
          }
        } else if (ld.pos.first === 3) {
          // For frame level 3, we need to access the parent frame
          const frameIndex = this.stack.getFrameCount() - 2;
          
          if (frameIndex < 0) {
            throw new Error(`Cannot access frame level ${ld.pos.first} when only ${this.stack.getFrameCount()} frames exist`);
          }
          
          const value = this.stack.getLocalFromFrame(frameIndex, ld.pos.second);
          this.stack.push(value);
          console.log(`Loaded value from frame level ${ld.pos.first} (frame index ${frameIndex}), offset ${ld.pos.second}: ${value}`);
        } else {
          throw new Error(`Accessing variables from frame level ${ld.pos.first} not yet implemented`);
        }
      } catch (error: any) {
        console.error(`Error accessing variable at position ${ld.pos.first}.${ld.pos.second}: ${error.message}`);
        throw error;
      }
    },

    [instruction_type.ASSIGN]: (instr: instruction) => {
      const assign = instr as ASSIGN;
      const value = this.stack.peek();
      
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
        } else if (assign.pos.first === 3) {
          // For frame level 3, assign to the parent frame
          const frameIndex = this.stack.getFrameCount() - 2;
          
          if (frameIndex < 0) {
            throw new Error(`Cannot assign to frame level ${assign.pos.first} when only ${this.stack.getFrameCount()} frames exist`);
          }
          
          this.stack.setLocalInFrame(frameIndex, assign.pos.second, value);
          console.log(`Assigned value ${value} to variable at frame ${frameIndex}, offset ${assign.pos.second}`);
        } else {
          throw new Error(`Assigning to variables at frame level ${assign.pos.first} not yet implemented`);
        }
      } catch (error: any) {
        console.error(`Error assigning to variable at position ${assign.pos.first}.${assign.pos.second}: ${error.message}`);
        throw error;
      }
    },

    [instruction_type.LDF]: (instr: instruction) => {
      const ldf = instr as LDF;
      // Just push the function address and arity - no environment needed
      this.stack.push(ldf.addr);
      this.stack.push(ldf.arity);
      console.log(`LDF: Loaded function at address ${ldf.addr} with arity ${ldf.arity}`);
    },

    [instruction_type.CALL]: (instr: instruction) => {
      const call = instr as CALL;
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
      const args: SUPPORTED_TYPES[] = [];
      console.log("In Call fn")
      for (let i = 0; i < arity; i++) {
        args[i] = this.stack.pop();
      }

      console.log(args)

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

    [instruction_type.TAIL_CALL]: (instr: instruction) => {
      const tail_call = instr as TAIL_CALL;
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
      const args: SUPPORTED_TYPES[] = [];
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

    [instruction_type.RESET]: (instr: instruction) => {
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
  };

  private unop_microcode: any = {
    "-unary": (num: number) => -num,
    "!": (bool: boolean) => !bool,
  };

  private apply_unop(op: string, value: SUPPORTED_TYPES): SUPPORTED_TYPES {
    // Convert numeric 0/1 to boolean for boolean operations
    if (op === "!") {
      return this.unop_microcode[op](value === 0 ? false : true);
    }
    return this.unop_microcode[op](value);
  }

  private binop_microcode: any = {
    "+": (left: number, right: number) => left + right,
    "-": (left: number, right: number) => left - right,
    "*": (left: number, right: number) => left * right,
    "/": (left: number, right: number) => {
      if (right === 0) throw new Error("Division by zero");
      return left / right;
    },
    "%": (left: number, right: number) => {
      if (right === 0) throw new Error("Modulo by zero");
      return left % right;
    },
    "==": (left: SUPPORTED_TYPES, right: SUPPORTED_TYPES) => left === right,
    "!=": (left: SUPPORTED_TYPES, right: SUPPORTED_TYPES) => left !== right,
    "<": (left: number, right: number) => left < right,
    "<=": (left: number, right: number) => left <= right,
    ">": (left: number, right: number) => left > right,
    ">=": (left: number, right: number) => left >= right,
    "&&": (left: boolean, right: boolean) => left && right,
    "||": (left: boolean, right: boolean) => left || right,
  };

  private apply_binop(
    op: string,
    left: SUPPORTED_TYPES,
    right: SUPPORTED_TYPES
  ): SUPPORTED_TYPES {
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
    if (
      op === "==" ||
      op === "!=" ||
      op === "<" ||
      op === "<=" ||
      op === ">" ||
      op === ">="
    ) {
      return operation(left, right) ? 1 : 0;
    }

    return operation(left, right);
  }
}
