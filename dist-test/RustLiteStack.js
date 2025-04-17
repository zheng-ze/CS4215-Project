"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RustLiteStack = void 0;
const RustLiteTypes_1 = require("./RustLiteTypes");
const RustLiteTypes_2 = require("./RustLiteTypes");
const console_1 = require("console");
class RustLiteStack {
    constructor() {
        this.stackPointer = 0; // Points to the next free slot on the stack
        this.frames = []; // Metadata about frames
        // Initialize the stack memory
        const buffer = new ArrayBuffer(RustLiteTypes_2.max_words * RustLiteTypes_2.word_size);
        this.data = new DataView(buffer);
    }
    push(value) {
        let val;
        let type;
        if (typeof value === "boolean") {
            val = value ? 1 : 0;
            type = RustLiteTypes_1.TypeTag.Bool;
        }
        else if (typeof value === "number") {
            val = value;
            type = RustLiteTypes_1.TypeTag.Int;
        }
        else if (typeof value === "object" && value.type === "address") {
            val = value.value;
            type = RustLiteTypes_1.TypeTag.Address;
        }
        else {
            throw (0, console_1.error)(`Data type not supported: ${typeof value}`);
        }
        console.log(`Set value: ${val} at SP: ${this.stackPointer}`);
        this.data.setFloat64(this.stackPointer, val); // store the value
        this.data.setUint8(this.stackPointer + RustLiteTypes_1.type_offset, type); // store the type
        this.stackPointer += RustLiteTypes_2.word_size;
    }
    pop() {
        if (this.stackPointer === 0) {
            throw new Error("Value stack is empty");
        }
        this.stackPointer -= RustLiteTypes_2.word_size;
        let res = this.data.getFloat64(this.stackPointer);
        let type = this.data.getUint8(this.stackPointer + RustLiteTypes_1.type_offset);
        let output;
        if (type === RustLiteTypes_1.TypeTag.Bool) {
            output = res === 0 ? false : true;
        }
        else if (type === RustLiteTypes_1.TypeTag.Int) {
            output = res;
        }
        else if (type === RustLiteTypes_1.TypeTag.Address) {
            output = { type: "address", value: res };
        }
        else {
            throw new Error(`Unknown type tag: ${type}`);
        }
        return output;
    }
    // Peek at the top value without popping
    peek() {
        if (this.stackPointer < 0) {
            throw new Error("Value stack is empty");
        }
        const data = this.data.getFloat64(this.stackPointer);
        const type = this.data.getUint8(this.stackPointer + RustLiteTypes_1.type_offset);
        let output;
        if (type === RustLiteTypes_1.TypeTag.Bool) {
            output = data === 0 ? false : true;
        }
        else if (type === RustLiteTypes_1.TypeTag.Int) {
            output = data;
        }
        else if (type === RustLiteTypes_1.TypeTag.Address) {
            output = { type: "address", value: data };
        }
        else {
            throw new Error(`Unknown type tag: ${type}`);
        }
        return output;
    }
    // Create a new stack frame with specified size
    pushFrame(returnAddress) {
        console.log(`Pushing frame ${this.getFrameCount() + 1} with Stack pointer: ${this.stackPointer}, Return address: ${returnAddress}`);
        const newFrame = {
            basePointer: this.stackPointer,
            returnAddress: returnAddress || this.getReturnAddress(),
        };
        this.frames.push(newFrame);
    }
    // Get the return address from the current frame
    getReturnAddress() {
        const currentFrame = this.frames[this.frames.length - 1];
        if (!currentFrame) {
            throw new Error("No active frame");
        }
        // Add debugging to help track return addresses
        console.log(`Getting return address from frame ${this.frames.length - 1}: ${currentFrame.returnAddress}`);
        // Make sure the return address is properly set
        if (currentFrame.returnAddress === undefined) {
            console.warn("Warning: Return address is undefined for current frame");
        }
        return currentFrame.returnAddress;
    }
    // Pop the current frame and restore the previous frame
    popFrame() {
        if (this.frames.length === 0) {
            throw new Error("No frame to pop");
        }
        const currentFrame = this.frames.pop();
        this.stackPointer = currentFrame.basePointer; // Reset stack pointer to base of current frame
    }
    // Get the number of frames
    getFrameCount() {
        return this.frames.length;
    }
    // Get a specific frame
    getFrame(index) {
        if (index < 0 || index >= this.frames.length) {
            this.dump();
            throw new Error(`Invalid frame index: ${index}`);
        }
        return this.frames[index];
    }
    // Reset the stack
    reset() {
        this.stackPointer = 0;
        this.frames = [];
    }
    // Debug dump of the stack state
    dump() {
        console.log("=== STACK DUMP ===");
        console.log(`Stack pointer: ${this.stackPointer}`);
        console.log(`Frames (${this.frames.length}):`);
        this.frames.forEach((frame, i) => {
            console.log(`  Frame ${i}: BP=${frame.basePointer}, RA=${frame.returnAddress}`);
        });
        let currentFrame = 0;
        let framePointer = currentFrame < this.frames.length
            ? this.frames[currentFrame].basePointer
            : -1;
        // Print actual values in frame stack
        console.log("===StackData===");
        for (let i = 0; i < this.stackPointer; i += RustLiteTypes_2.word_size) {
            if (i == framePointer) {
                console.log(`=== Frame ${currentFrame + 1} ===`);
                currentFrame++;
                framePointer =
                    currentFrame < this.frames.length
                        ? this.frames[currentFrame].basePointer
                        : -1;
            }
            console.log(`Data: ${this.data.getFloat64(i)}, Type: ${this.data.getUint8(i + RustLiteTypes_1.type_offset)}`);
        }
        console.log("===================");
    }
    // Add a new method to explicitly set the return address for the current frame
    setReturnAddress(returnAddress) {
        if (this.frames.length === 0) {
            throw new Error("No active frame to set return address");
        }
        const currentFrame = this.frames[this.frames.length - 1];
        console.log(`Explicitly setting return address ${returnAddress} for frame ${this.frames.length - 1}`);
        currentFrame.returnAddress = returnAddress;
    }
    // Get a local variable from a specific frame by index
    getLocalFromFrame(frameIndex, offset) {
        if (frameIndex < 0 || frameIndex >= this.frames.length) {
            throw new Error(`Invalid frame index: ${frameIndex}, total frames: ${this.frames.length}`);
        }
        const frame = this.frames[frameIndex];
        if (frameIndex >= this.frames.length) {
            throw Error("Invalid frame index");
        }
        const index = frame.basePointer + offset * RustLiteTypes_2.word_size;
        console.log(`Getting value at offset ${offset} from frame ${frameIndex + 1} at index: ${index}`);
        this.dump();
        const value = this.data.getFloat64(index);
        const type = this.data.getUint8(index + RustLiteTypes_1.type_offset);
        let output;
        if (type === RustLiteTypes_1.TypeTag.Bool) {
            output = value === 0 ? false : true;
        }
        else if (type === RustLiteTypes_1.TypeTag.Int) {
            output = value;
        }
        else if (type === RustLiteTypes_1.TypeTag.Address) {
            output = { type: "address", value: value };
        }
        else {
            throw new Error(`Unknown type tag: ${type}`);
        }
        console.log(`Output: ${output}, Type: ${type}`);
        return output;
    }
}
exports.RustLiteStack = RustLiteStack;
