import {
  GOTO,
  SUPPORTED_TYPES,
  instruction,
  instruction_type,
} from "./RustLiteTypes";

import { word_size, max_words } from "./RustLiteTypes";

interface StackFrame {
  basePointer: number;
  frameSize: number;
}

export class RustLiteStack {
  private data: DataView;
  private stackPointer: number = 0; // where the top of the stack is
  private framePointer: number = 0; // where the current frame starts
  private frames: StackFrame[] = []; // stack frames

  constructor() {
    const buffer = new ArrayBuffer(max_words * word_size);
    this.data = new DataView(buffer);
  }

  // Get value at a specific word index (e.g., for debugging)
  get(index: number): number {
    if (index < 0 || index >= this.stackPointer) {
      throw new Error(`Invalid read at index ${index}`);
    }
    return this.data.getFloat64(index * word_size, true);
  }

  // Push value to top of stack
  push(value: SUPPORTED_TYPES): void {
    if (this.stackPointer >= max_words) {
      throw new Error("Stack overflow");
    }

    if (typeof value === "number") {
      this.data.setFloat64(this.stackPointer * word_size, value, true);
    } else {
      //value is of type bool
      this.data.setFloat64(this.stackPointer * word_size, value ? 1 : 0, true);
    }
    this.stackPointer++;
  }

  // Pop value from top of stack
  pop(): number {
    if (this.stackPointer <= 0) {
      throw new Error("Stack underflow");
    }
    this.stackPointer--;
    return this.data.getFloat64(this.stackPointer * word_size, true);
  }

  // Peek at top value without popping
  peek(): number {
    if (this.stackPointer <= 0) {
      throw new Error("Stack is empty");
    }
    return this.data.getFloat64((this.stackPointer - 1) * word_size, true);
  }

  // Debug print the whole stack
  dump(): void {
    const values = [];
    for (let i = 0; i < this.stackPointer; i++) {
      values.push(this.get(i));
    }
    console.log("[Stack]", values);
  }

  // Add methods for stack frame management
  pushFrame(frameSize: number): void {
    if (frameSize <= 0) {
      throw new Error("Frame size must be positive");
    }

    if (frameSize + this.stackPointer >= max_words) {
      throw new Error("Stack overflow");
    }

    const newFrame: StackFrame = {
      basePointer: this.framePointer, // Store old frame pointer
      frameSize: frameSize,
    };

    this.frames.push(newFrame);
    this.framePointer = this.stackPointer;
    this.stackPointer = this.framePointer;
  }

  popFrame(): void {
    if (this.frames.length === 0) {
      throw new Error("No frame to pop");
    }
    const prevFrame: StackFrame = this.frames.pop();
    this.stackPointer = this.framePointer;
    this.framePointer = prevFrame.basePointer; // Restore old frame pointer
  }

  getLocal(offset: number): number {
    return this.get(this.framePointer + offset); // +2 for fp and frameSize
  }

  setLocal(offset: number, value: number): void {
    this.data.setFloat64((this.framePointer + offset) * word_size, value, true);
  }
}
