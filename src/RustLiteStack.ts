import { error } from "console";
import {
  GOTO,
  SUPPORTED_TYPES,
  instruction,
  instruction_type,
} from "./RustLiteTypes";

import { word_size, max_words } from "./RustLiteTypes";

interface StackFrame {
  basePointer: number; // Points to the start of this frame in the stack
  returnAddress?: number; // Optional return address for function frames
}

export class RustLiteStack {
  private data: DataView; // Actual memory storage for stack values
  private stackPointer: number = 0; // Points to the next free slot on the stack
  private frames: StackFrame[] = []; // Metadata about frames

  constructor() {
    // Initialize the stack memory
    const buffer = new ArrayBuffer(max_words * word_size);
    this.data = new DataView(buffer);
  }

  public push(value: SUPPORTED_TYPES) {
    let val;
    if (typeof value === "boolean") {
      val = value ? 1 : 0;
    } else if (typeof value === "number") {
      val = value;
    } else {
      throw error(`Data type not supported: ${typeof value}`);
    }
    console.log(`Set value: ${val} at SP: ${this.stackPointer}`);
    this.data.setFloat64(this.stackPointer, val);
    this.stackPointer += word_size;
  }

  public pop(): SUPPORTED_TYPES {
    if (this.stackPointer === 0) {
      throw new Error("Value stack is empty");
    }
    this.stackPointer -= word_size;
    let res = this.data.getFloat64(this.stackPointer);
    return res;
  }

  // Peek at the top value without popping
  public peek(): SUPPORTED_TYPES {
    if (this.stackPointer < 0) {
      throw new Error("Value stack is empty");
    }
    return this.data.getFloat64(this.stackPointer);
  }

  // Create a new stack frame with specified size
  public pushFrame(returnAddress?: number): void {
    console.log(
      `Pushing frame ${this.getFrameCount() + 1} with Stack pointer: ${
        this.stackPointer
      }, Return address: ${returnAddress}`
    );

    const newFrame: StackFrame = {
      basePointer: this.stackPointer,
      returnAddress: returnAddress || this.getReturnAddress(),
    };

    this.frames.push(newFrame);
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

    this.stackPointer = currentFrame.basePointer; // Reset stack pointer to base of current frame
  }

  // Get the number of frames
  public getFrameCount(): number {
    return this.frames.length;
  }

  // Get a specific frame
  public getFrame(index: number): StackFrame {
    if (index < 0 || index >= this.frames.length) {
      this.dump();
      throw new Error(`Invalid frame index: ${index}`);
    }
    return this.frames[index];
  }

  // Reset the stack
  public reset(): void {
    this.stackPointer = 0;
    this.frames = [];
  }

  // Debug dump of the stack state
  public dump(): void {
    console.log("=== STACK DUMP ===");
    console.log(`Stack pointer: ${this.stackPointer}`);

    console.log(`Frames (${this.frames.length}):`);
    this.frames.forEach((frame, i) => {
      console.log(
        `  Frame ${i}: BP=${frame.basePointer}, RA=${frame.returnAddress}`
      );
    });
    let currentFrame = 0;
    let framePointer =
      currentFrame < this.frames.length
        ? this.frames[currentFrame].basePointer
        : -1;

    // Print actual values in frame stack
    console.log("===StackData===");
    for (let i = 0; i < this.stackPointer; i += word_size) {
      if (i == framePointer) {
        console.log(`=== Frame ${currentFrame + 1} ===`);
        currentFrame++;
        framePointer =
          currentFrame < this.frames.length
            ? this.frames[currentFrame].basePointer
            : -1;
      }
      console.log(this.data.getFloat64(i));
    }
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
    if (frameIndex >= this.frames.length) {
      throw Error("Invalid frame index");
    }

    const index = frame.basePointer + offset * word_size;
    console.log(
      `Getting value at offset ${offset} from frame ${
        frameIndex + 1
      } at index: ${index}`
    );
    this.dump();
    const value = this.data.getFloat64(index);
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
