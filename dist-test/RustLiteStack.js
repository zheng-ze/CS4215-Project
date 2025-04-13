"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RustLiteStack = void 0;
const RustLiteTypes_1 = require("./RustLiteTypes");
class RustLiteStack {
    constructor() {
        this.stackPointer = 0; // where the top of the stack is
        this.framePointer = 0; // where the current frame starts
        this.frames = []; // stack frames
        const buffer = new ArrayBuffer(RustLiteTypes_1.max_words * RustLiteTypes_1.word_size);
        this.data = new DataView(buffer);
    }
    // Get value at a specific word index (e.g., for debugging)
    get(index) {
        if (index < 0 || index >= this.stackPointer) {
            throw new Error(`Invalid read at index ${index}`);
        }
        return this.data.getFloat64(index * RustLiteTypes_1.word_size, true);
    }
    // Push value to top of stack
    push(value) {
        if (this.stackPointer >= RustLiteTypes_1.max_words) {
            throw new Error("Stack overflow");
        }
        // TODO: Handle pointers to heap
        if (typeof value === "number") {
            this.data.setFloat64(this.stackPointer * RustLiteTypes_1.word_size, value, true);
        }
        else {
            //value is of type bool
            this.data.setFloat64(this.stackPointer * RustLiteTypes_1.word_size, value ? 1 : 0, true);
        }
        return this.stackPointer++;
    }
    // Pop value from top of stack
    pop() {
        if (this.stackPointer <= 0) {
            throw new Error("Stack underflow");
        }
        this.stackPointer--;
        return this.data.getFloat64(this.stackPointer * RustLiteTypes_1.word_size, true);
    }
    // Peek at top value without popping
    peek() {
        if (this.stackPointer <= 0) {
            throw new Error("Stack is empty");
        }
        return this.data.getFloat64((this.stackPointer - 1) * RustLiteTypes_1.word_size, true);
    }
    // Debug print the whole stack
    dump() {
        const values = [];
        for (let i = 0; i < this.stackPointer; i++) {
            values.push(this.get(i));
        }
        console.log("[Stack]", values);
    }
    // Add methods for stack frame management
    pushFrame(frameSize) {
        console.log(`Pushing frame with size: ${frameSize}, Stack pointer: ${this.stackPointer}`);
        if (frameSize < 0) {
            throw new Error("Frame size must be positive");
        }
        if (frameSize + this.stackPointer >= RustLiteTypes_1.max_words) {
            throw new Error("Stack overflow");
        }
        const newFrame = {
            basePointer: this.framePointer, // Store old frame pointer
            frameSize: frameSize,
        };
        this.frames.push(newFrame);
        this.framePointer = this.stackPointer;
        this.stackPointer = this.framePointer;
    }
    popFrame() {
        if (this.frames.length === 0) {
            throw new Error("No frame to pop");
        }
        const prevFrame = this.frames.pop();
        this.stackPointer = this.framePointer;
        this.framePointer = prevFrame.basePointer; // Restore old frame pointer
    }
    getLocal(offset) {
        return this.get(this.framePointer + offset);
    }
    setLocal(offset, value) {
        this.data.setFloat64((this.framePointer + offset) * RustLiteTypes_1.word_size, value, true);
    }
    reset() {
        this.stackPointer = 0;
        this.framePointer = 0;
        this.frames = [];
    }
}
exports.RustLiteStack = RustLiteStack;
