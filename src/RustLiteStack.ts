import {
  GOTO,
  SUPPORTED_TYPES,
  instruction,
  instruction_type,
} from "./RustLiteTypes";

import { word_size, max_words } from "./RustLiteTypes";

export class RustLiteStack {
  data: DataView;
  sp: number; // Stack pointer
  fp: number; // Frame pointer

  constructor() {
    const buffer = new ArrayBuffer(max_words * word_size);
    this.data = new DataView(buffer);
    this.sp = 0;
  }

  // Get value at a specific word index (e.g., for debugging)
  get(index: number): number {
    if (index < 0 || index >= this.sp) {
      throw new Error(`Invalid read at index ${index}`);
    }
    return this.data.getFloat64(index * word_size, true);
  }

  // Push value to top of stack
  push(value: SUPPORTED_TYPES): void {
    if (this.sp >= max_words) {
      throw new Error("Stack overflow");
    }

    if (typeof value === "number") {
      this.data.setFloat64(this.sp * word_size, value, true);
    } else {
      //value is of type bool
      this.data.setFloat64(this.sp * word_size, value ? 1 : 0, true);
    }
    this.sp++;
  }

  // Pop value from top of stack
  pop(): number {
    if (this.sp <= 0) {
      throw new Error("Stack underflow");
    }
    this.sp--;
    return this.data.getFloat64(this.sp * word_size, true);
  }

  // Peek at top value without popping
  peek(): number {
    if (this.sp <= 0) {
      throw new Error("Stack is empty");
    }
    return this.data.getFloat64((this.sp - 1) * word_size, true);
  }

  // Debug print the whole stack
  dump(): void {
    const values = [];
    for (let i = 0; i < this.sp; i++) {
      values.push(this.get(i));
    }
    console.log("[Stack]", values);
  }

  // Add methods for stack frame management
  pushFrame(frameSize: number): void {
    const oldFp = this.fp;
    this.fp = this.sp;
    this.push(oldFp); // Store old frame pointer
    this.push(frameSize);
    // Reserve space for local variables
    for (let i = 0; i < frameSize; i++) {
      this.push(0);
    }
  }

  popFrame(): void {
    const frameSize = this.pop();
    const oldFp = this.pop();
    this.sp = this.fp;
    this.fp = oldFp;
  }

  getLocal(offset: number): number {
    return this.get(this.fp + offset + 2); // +2 for fp and frameSize
  }

  setLocal(offset: number, value: number): void {
    this.data.setFloat64((this.fp + offset + 2) * word_size, value, true);
  }
}
