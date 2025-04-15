"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RustLiteStack = void 0;
const RustLiteTypes_1 = require("./RustLiteTypes");
class RustLiteStack {
    constructor() {
        this.stackPointer = 0; // Points to the next free slot on the stack
        this.framePointer = 0; // Points to the current frame
        this.frames = []; // Metadata about frames
        this.scopeDepth = 0; // Track lexical scope depth for lifetimes
        this.valueStack = []; // Separate stack for temporary values
        // Initialize the stack memory
        const buffer = new ArrayBuffer(RustLiteTypes_1.max_words * RustLiteTypes_1.word_size);
        this.data = new DataView(buffer);
    }
    // Push a value onto the value stack (for temporary values during expression evaluation)
    push(value) {
        this.valueStack.push(value);
    }
    // Pop a value from the value stack
    pop() {
        if (this.valueStack.length === 0) {
            throw new Error("Value stack underflow");
        }
        return this.valueStack.pop();
    }
    // Peek at the top value without popping
    peek() {
        if (this.valueStack.length === 0) {
            throw new Error("Value stack is empty");
        }
        return this.valueStack[this.valueStack.length - 1];
    }
    // Create a new stack frame with specified size
    pushFrame(frameSize, returnAddress) {
        console.log(`Pushing frame with size: ${frameSize}, Stack pointer: ${this.stackPointer}, Frame pointer: ${this.framePointer}, Return address: ${returnAddress}`);
        const actualFrameSize = Math.max(frameSize, 1);
        // Check if we have enough space for the new frame
        if (this.stackPointer + actualFrameSize >= RustLiteTypes_1.max_words) {
            console.error(`Stack overflow: Cannot allocate frame of size ${actualFrameSize} at position ${this.stackPointer} (max: ${RustLiteTypes_1.max_words})`);
            throw new Error("Stack overflow");
        }
        const newFrame = {
            basePointer: this.stackPointer,
            frameSize: actualFrameSize,
            returnAddress,
            borrowedValues: new Map(),
            lifetimes: new Map()
        };
        // Ensure return address is properly set
        if (returnAddress !== undefined) {
            console.log(`Setting return address ${returnAddress} for new frame at index ${this.frames.length}`);
        }
        this.frames.push(newFrame);
        this.framePointer = this.stackPointer;
        // Initialize frame with zeros and advance stack pointer
        for (let i = 0; i < actualFrameSize; i++) {
            this.data.setFloat64((this.stackPointer + i) * RustLiteTypes_1.word_size, 0, true);
        }
        this.stackPointer += actualFrameSize;
        // Increment scope depth when entering a new frame
        this.scopeDepth++;
    }
    // Enter a new lexical scope (without creating a new frame)
    enterScope() {
        this.scopeDepth++;
    }
    // Exit a lexical scope and check for lifetime violations
    exitScope() {
        this.scopeDepth--;
        // Check for any values with lifetimes tied to this scope
        if (this.frames.length > 0) {
            const currentFrame = this.frames[this.frames.length - 1];
            // Check for any values that should be dropped
            for (const [address, lifetime] of currentFrame.lifetimes.entries()) {
                if (lifetime > this.scopeDepth) {
                    // Value's lifetime has ended, check if it's still borrowed
                    if (currentFrame.borrowedValues.has(address)) {
                        throw new Error(`Use of value after lifetime ended at address ${address}`);
                    }
                    // Remove the lifetime tracking for this value
                    currentFrame.lifetimes.delete(address);
                }
            }
        }
    }
    // Get a local variable from the current frame
    getLocal(offset) {
        const currentFrame = this.frames[this.frames.length - 1];
        if (!currentFrame) {
            throw new Error("No active frame");
        }
        if (offset < 0 || offset > currentFrame.frameSize) {
            throw new Error(`Invalid frame offset: ${offset}, frame size: ${currentFrame.frameSize}`);
        }
        const index = currentFrame.basePointer + offset;
        // Convert numeric representation back to boolean if needed
        // This is a simplification - in a real implementation we'd need type information
        console.log(`Getting value at offset ${offset} from frame ${this.frames.length - 1}`);
        const value = this.data.getFloat64(index * RustLiteTypes_1.word_size, true);
        console.log(`Value: ${value}`);
        return value;
    }
    // Set a local variable in the current frame
    setLocal(offset, value) {
        const currentFrame = this.frames[this.frames.length - 1];
        if (!currentFrame) {
            throw new Error("No active frame");
        }
        if (offset < 0 || offset >= currentFrame.frameSize) {
            throw new Error(`Invalid frame offset: ${offset}, frame size: ${currentFrame.frameSize}`);
        }
        const index = currentFrame.basePointer + offset;
        const address = index * RustLiteTypes_1.word_size;
        // Check if this value is borrowed immutably
        if (currentFrame.borrowedValues.has(address) && !currentFrame.borrowedValues.get(address)) {
            throw new Error(`Cannot modify a value that is borrowed immutably at offset ${offset}`);
        }
        // Store the value
        let storageValue = typeof value === "number" ? value : (value ? 1 : 0);
        this.data.setFloat64(address, storageValue, true);
        // Track the lifetime of this value
        currentFrame.lifetimes.set(address, this.scopeDepth);
    }
    // Borrow a value (immutably or mutably)
    borrowValue(offset, mutable) {
        const currentFrame = this.frames[this.frames.length - 1];
        if (!currentFrame) {
            throw new Error("No active frame");
        }
        const index = currentFrame.basePointer + offset;
        const address = index * RustLiteTypes_1.word_size;
        // Check if this value is already borrowed mutably or trying to borrow mutably when already borrowed
        if ((currentFrame.borrowedValues.has(address) && currentFrame.borrowedValues.get(address)) ||
            (mutable && currentFrame.borrowedValues.has(address))) {
            throw new Error(`Cannot borrow value ${mutable ? 'mutably' : 'immutably'} as it is already borrowed`);
        }
        // Mark as borrowed
        currentFrame.borrowedValues.set(address, mutable);
        // Return the address (which serves as a reference)
        return address;
    }
    // Release a borrowed value
    releaseBorrow(address) {
        const currentFrame = this.frames[this.frames.length - 1];
        if (!currentFrame) {
            throw new Error("No active frame");
        }
        if (!currentFrame.borrowedValues.has(address)) {
            throw new Error(`Attempting to release a value that is not borrowed at address ${address}`);
        }
        currentFrame.borrowedValues.delete(address);
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
        // Check for any remaining borrowed values (would be a bug in real Rust)
        if (currentFrame.borrowedValues.size > 0) {
            console.warn(`Frame popped with ${currentFrame.borrowedValues.size} values still borrowed`);
        }
        this.stackPointer = currentFrame.basePointer; // Reset stack pointer to base of current frame
        // Restore previous frame pointer
        if (this.frames.length > 0) {
            this.framePointer = this.frames[this.frames.length - 1].basePointer;
        }
        else {
            this.framePointer = 0;
        }
        // Decrement scope depth when exiting a frame
        this.scopeDepth--;
    }
    // Get the current frame pointer
    getCurrentFramePointer() {
        return this.framePointer;
    }
    // Get the number of frames
    getFrameCount() {
        return this.frames.length;
    }
    // Get a specific frame
    getFrame(index) {
        if (index < 0 || index >= this.frames.length) {
            throw new Error(`Invalid frame index: ${index}`);
        }
        return this.frames[index];
    }
    // Reset the stack
    reset() {
        this.stackPointer = 0;
        this.framePointer = 0;
        this.frames = [];
        this.scopeDepth = 0;
        this.valueStack = [];
    }
    // Set the environment pointer for the current frame
    setFrameEnvironment(env) {
        if (this.frames.length === 0) {
            throw new Error("No active frame");
        }
        const currentFrame = this.frames[this.frames.length - 1];
        currentFrame.environment = env;
    }
    // Get the environment pointer for a frame
    getFrameEnvironment(frameIndex) {
        if (frameIndex < 0 || frameIndex >= this.frames.length) {
            throw new Error(`Invalid frame index: ${frameIndex}`);
        }
        return this.frames[frameIndex].environment;
    }
    // Debug dump of the stack state
    dump() {
        console.log("=== STACK DUMP ===");
        console.log(`Stack pointer: ${this.stackPointer}, Frame pointer: ${this.framePointer}, Scope depth: ${this.scopeDepth}`);
        console.log(`Value stack (${this.valueStack.length} items):`, this.valueStack);
        console.log(`Frames (${this.frames.length}):`);
        this.frames.forEach((frame, i) => {
            console.log(`  Frame ${i}: BP=${frame.basePointer}, Size=${frame.frameSize}, RA=${frame.returnAddress}`);
            console.log(`    Borrowed values: ${frame.borrowedValues.size}`);
            console.log(`    Values with lifetimes: ${frame.lifetimes.size}`);
            // Print actual values in this frame
            for (let j = 0; j < frame.frameSize; j++) {
                const addr = (frame.basePointer + j) * RustLiteTypes_1.word_size;
                const value = this.data.getFloat64(addr, true);
                console.log(`    [${j}]: ${value}`);
            }
        });
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
        if (offset < 0 || offset >= frame.frameSize) {
            throw new Error(`Invalid frame offset: ${offset}, frame size: ${frame.frameSize}`);
        }
        const index = frame.basePointer + offset;
        console.log(`Getting value at offset ${offset} from frame ${frameIndex}`);
        const value = this.data.getFloat64(index * RustLiteTypes_1.word_size, true);
        console.log(`Value: ${value}`);
        return value;
    }
    // Set a local variable in a specific frame by index
    setLocalInFrame(frameIndex, offset, value) {
        if (frameIndex < 0 || frameIndex >= this.frames.length) {
            throw new Error(`Invalid frame index: ${frameIndex}, total frames: ${this.frames.length}`);
        }
        const frame = this.frames[frameIndex];
        if (offset < 0 || offset >= frame.frameSize) {
            throw new Error(`Invalid frame offset: ${offset}, frame size: ${frame.frameSize}`);
        }
        const index = frame.basePointer + offset;
        const address = index * RustLiteTypes_1.word_size;
        // Check if this value is borrowed immutably
        if (frame.borrowedValues && frame.borrowedValues.has(address) && !frame.borrowedValues.get(address)) {
            throw new Error(`Cannot modify a value that is borrowed immutably at offset ${offset}`);
        }
        console.log(`Setting value ${value} at frame ${frameIndex}, offset ${offset} (address ${address})`);
        // Store the value
        if (typeof value === "boolean") {
            this.data.setFloat64(address, value ? 1 : 0, true);
        }
        else {
            this.data.setFloat64(address, Number(value), true);
        }
        // Track the lifetime of this value
        frame.lifetimes.set(address, this.scopeDepth);
    }
}
exports.RustLiteStack = RustLiteStack;
