import {
  GOTO,
  SUPPORTED_TYPES,
  instruction,
  instruction_type,
} from "./RustLiteTypes";

import { word_size, max_words } from "./RustLiteTypes";

interface StackFrame {
  basePointer: number; // Points to the start of this frame in the stack
  frameSize: number; // Size of this frame in words
  returnAddress?: number; // Optional return address for function frames
  borrowedValues: Map<number, boolean>; // Track borrowed values (address -> is_mutable)
  lifetimes: Map<number, number>; // Track lifetimes of values (address -> scope depth)
}

export class RustLiteStack {
  private data: DataView; // Actual memory storage for stack values
  private stackPointer: number = 0; // Points to the next free slot on the stack
  private frames: StackFrame[] = []; // Metadata about frames
  private valueStack: SUPPORTED_TYPES[] = []; // Separate stack for temporary values

  constructor() {
    // Initialize the stack memory
    const buffer = new ArrayBuffer(max_words * word_size);
    this.data = new DataView(buffer);
  }

  // Push a value onto the value stack (for temporary values during expression evaluation)
  public push(value: SUPPORTED_TYPES): void {
    this.valueStack.push(value);
  }

  // Pop a value from the value stack
  public pop(): SUPPORTED_TYPES {
    if (this.valueStack.length === 0) {
      throw new Error("Value stack underflow");
    }
    return this.valueStack.pop()!;
  }

  // Peek at the top value without popping
  public peek(): SUPPORTED_TYPES {
    if (this.valueStack.length === 0) {
      throw new Error("Value stack is empty");
    }
    return this.valueStack[this.valueStack.length - 1];
  }

  // Create a new stack frame with specified size
  public pushFrame(returnAddress?: number): void {
    console.log(
      `Pushing frame with Stack pointer: ${this.stackPointer}, Return address: ${returnAddress}`
    );

    const newFrame: StackFrame = {
      basePointer: this.stackPointer,
      frameSize: 0,
      returnAddress: this.getReturnAddress(),
      borrowedValues: new Map(),
      lifetimes: new Map(),
    };

    this.frames.push(newFrame);
  }

  // Exit a lexical scope and check for lifetime violations
  public exitScope(): void {
    // Check for any values with lifetimes tied to this scope
    if (this.frames.length > 0) {
      const currentFrame = this.frames[this.frames.length - 1];

      // Check for any values that should be dropped
      for (const [address, lifetime] of currentFrame.lifetimes.entries()) {
        if (lifetime > this.frames.length) {
          // Value's lifetime has ended, check if it's still borrowed
          if (currentFrame.borrowedValues.has(address)) {
            throw new Error(
              `Use of value after lifetime ended at address ${address}`
            );
          }

          // Remove the lifetime tracking for this value
          currentFrame.lifetimes.delete(address);
        }
      }
    }
  }

  // Get a local variable from the current frame
  public getLocal(offset: number): SUPPORTED_TYPES {
    const currentFrame = this.frames[this.frames.length - 1];
    if (!currentFrame) {
      throw new Error("No active frame");
    }
    if (offset < 0 || offset > currentFrame.frameSize) {
      throw new Error(
        `Invalid frame offset: ${offset}, frame size: ${currentFrame.frameSize}`
      );
    }
    const index = currentFrame.basePointer + offset;

    // Convert numeric representation back to boolean if needed
    // This is a simplification - in a real implementation we'd need type information
    console.log(
      `Getting value at offset ${offset} from frame ${this.frames.length - 1}`
    );
    const value = this.data.getFloat64(index * word_size, true);
    console.log(`Value: ${value}`);
    return value;
  }

  // Set a local variable in the current frame
  public setLocal(offset: number, value: SUPPORTED_TYPES): void {
    const currentFrame = this.frames[this.frames.length - 1];
    if (!currentFrame) {
      throw new Error("No active frame");
    }
    if (offset < 0 || offset >= currentFrame.frameSize) {
      throw new Error(
        `Invalid frame offset: ${offset}, frame size: ${currentFrame.frameSize}`
      );
    }

    const index = currentFrame.basePointer + offset;
    const address = index * word_size;

    // Check if this value is borrowed immutably
    if (
      currentFrame.borrowedValues.has(address) &&
      !currentFrame.borrowedValues.get(address)
    ) {
      throw new Error(
        `Cannot modify a value that is borrowed immutably at offset ${offset}`
      );
    }

    // Store the value
    let storageValue = typeof value === "number" ? value : value ? 1 : 0;
    this.data.setFloat64(address, storageValue, true);

    // Track the lifetime of this value
    currentFrame.lifetimes.set(address, this.frames.length);
  }

  // Borrow a value (immutably or mutably)
  public borrowValue(offset: number, mutable: boolean): number {
    const currentFrame = this.frames[this.frames.length - 1];
    if (!currentFrame) {
      throw new Error("No active frame");
    }

    const index = currentFrame.basePointer + offset;
    const address = index * word_size;

    // Check if this value is already borrowed mutably or trying to borrow mutably when already borrowed
    if (
      (currentFrame.borrowedValues.has(address) &&
        currentFrame.borrowedValues.get(address)) ||
      (mutable && currentFrame.borrowedValues.has(address))
    ) {
      throw new Error(
        `Cannot borrow value ${
          mutable ? "mutably" : "immutably"
        } as it is already borrowed`
      );
    }

    // Mark as borrowed
    currentFrame.borrowedValues.set(address, mutable);

    // Return the address (which serves as a reference)
    return address;
  }

  // Release a borrowed value
  public releaseBorrow(address: number): void {
    const currentFrame = this.frames[this.frames.length - 1];
    if (!currentFrame) {
      throw new Error("No active frame");
    }

    if (!currentFrame.borrowedValues.has(address)) {
      throw new Error(
        `Attempting to release a value that is not borrowed at address ${address}`
      );
    }

    currentFrame.borrowedValues.delete(address);
  }

  // Get the return address from the current frame
  public getReturnAddress(): number | undefined {
    const currentFrame = this.frames[this.frames.length - 1];
    if (!currentFrame) {
      throw new Error("No active frame");
    }

    // Add debugging to help track return addresses
    console.log(
      `Getting return address from frame ${this.frames.length - 1}: ${
        currentFrame.returnAddress
      }`
    );

    // Make sure the return address is properly set
    if (currentFrame.returnAddress === undefined) {
      console.warn("Warning: Return address is undefined for current frame");
    }

    return currentFrame.returnAddress;
  }

  // Pop the current frame and restore the previous frame
  public popFrame(): void {
    if (this.frames.length === 0) {
      throw new Error("No frame to pop");
    }

    const currentFrame = this.frames.pop()!;

    // Check for any remaining borrowed values (would be a bug in real Rust)
    if (currentFrame.borrowedValues.size > 0) {
      console.warn(
        `Frame popped with ${currentFrame.borrowedValues.size} values still borrowed`
      );
    }

    this.stackPointer = currentFrame.basePointer; // Reset stack pointer to base of current frame
  }

  // Get the number of frames
  public getFrameCount(): number {
    return this.frames.length;
  }

  // Get a specific frame
  public getFrame(index: number): StackFrame {
    if (index < 0 || index >= this.frames.length) {
      throw new Error(`Invalid frame index: ${index}`);
    }
    return this.frames[index];
  }

  // Reset the stack
  public reset(): void {
    this.stackPointer = 0;
    this.frames = [];
    this.valueStack = [];
  }

  // Debug dump of the stack state
  public dump(): void {
    console.log("=== STACK DUMP ===");
    console.log(`Stack pointer: ${this.stackPointer}`);
    console.log(
      `Value stack (${this.valueStack.length} items):`,
      this.valueStack
    );

    console.log(`Frames (${this.frames.length}):`);
    this.frames.forEach((frame, i) => {
      console.log(
        `  Frame ${i}: BP=${frame.basePointer}, Size=${frame.frameSize}, RA=${frame.returnAddress}`
      );
      console.log(`    Borrowed values: ${frame.borrowedValues.size}`);
      console.log(`    Values with lifetimes: ${frame.lifetimes.size}`);

      // Print actual values in this frame
      for (let j = 0; j < frame.frameSize; j++) {
        const addr = (frame.basePointer + j) * word_size;
        const value = this.data.getFloat64(addr, true);
        console.log(`    [${j}]: ${value}`);
      }
    });
    console.log("===================");
  }

  // Add a new method to explicitly set the return address for the current frame
  public setReturnAddress(returnAddress: number): void {
    if (this.frames.length === 0) {
      throw new Error("No active frame to set return address");
    }

    const currentFrame = this.frames[this.frames.length - 1];
    console.log(
      `Explicitly setting return address ${returnAddress} for frame ${
        this.frames.length - 1
      }`
    );
    currentFrame.returnAddress = returnAddress;
  }

  // Get a local variable from a specific frame by index
  public getLocalFromFrame(
    frameIndex: number,
    offset: number
  ): SUPPORTED_TYPES {
    if (frameIndex < 0 || frameIndex >= this.frames.length) {
      throw new Error(
        `Invalid frame index: ${frameIndex}, total frames: ${this.frames.length}`
      );
    }

    const frame = this.frames[frameIndex];
    if (offset < 0 || offset >= frame.frameSize) {
      throw new Error(
        `Invalid frame offset: ${offset}, frame size: ${frame.frameSize}`
      );
    }

    const index = frame.basePointer + offset;
    console.log(`Getting value at offset ${offset} from frame ${frameIndex}`);
    const value = this.data.getFloat64(index * word_size, true);
    console.log(`Value: ${value}`);
    return value;
  }

  // // Set a local variable in a specific frame by index
  // public setLocalInFrame(
  //   frameIndex: number,
  //   offset: number,
  //   value: SUPPORTED_TYPES
  // ): void {
  //   if (frameIndex < 0 || frameIndex >= this.frames.length) {
  //     throw new Error(
  //       `Invalid frame index: ${frameIndex}, total frames: ${this.frames.length}`
  //     );
  //   }

  //   const frame = this.frames[frameIndex];
  //   if (offset < 0 || offset >= frame.frameSize) {
  //     throw new Error(
  //       `Invalid frame offset: ${offset}, frame size: ${frame.frameSize}`
  //     );
  //   }

  //   const index = frame.basePointer + offset;
  //   const address = index * word_size;

  //   // Check if this value is borrowed immutably
  //   if (
  //     frame.borrowedValues &&
  //     frame.borrowedValues.has(address) &&
  //     !frame.borrowedValues.get(address)
  //   ) {
  //     throw new Error(
  //       `Cannot modify a value that is borrowed immutably at offset ${offset}`
  //     );
  //   }

  //   console.log(
  //     `Setting value ${value} at frame ${frameIndex}, offset ${offset} (address ${address})`
  //   );

  //   // Store the value
  //   if (typeof value === "boolean") {
  //     this.data.setFloat64(address, value ? 1 : 0, true);
  //   } else {
  //     this.data.setFloat64(address, Number(value), true);
  //   }

  //   // Track the lifetime of this value
  //   frame.lifetimes.set(address, this.scopeDepth);
  // }
}
