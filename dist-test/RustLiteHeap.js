"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heap = void 0;
const RustLiteTypes_1 = require("./RustLiteTypes");
class Heap {
    constructor(numWords) {
        const buffer = new ArrayBuffer(numWords * RustLiteTypes_1.word_size);
        this.data = new DataView(buffer);
        // Initialize free list
        this.free = 0;
        // Set up the free list chain
        for (let i = 0; i < numWords - 1; i++) {
            this.set(i, { type: "address", value: i + 1 }, RustLiteTypes_1.TypeTag.Address);
        }
        // Mark the end of the free list
        this.set(numWords - 1, { type: "address", value: -1 }, RustLiteTypes_1.TypeTag.Address);
    }
    get(address) {
        if (address < 0 || address >= RustLiteTypes_1.max_words * RustLiteTypes_1.word_size) {
            throw new Error(`Invalid address: ${address}`);
        }
        // get type
        const type = this.get_at_offset(address, RustLiteTypes_1.type_offset);
        const storedValue = this.data.getFloat64(address * RustLiteTypes_1.word_size);
        if (type === RustLiteTypes_1.TypeTag.Bool) {
            // Convert stored value to boolean
            // 1 for true, 0 for false
            return [storedValue === 0 ? false : true, RustLiteTypes_1.TypeTag.Bool];
        }
        else if (type === RustLiteTypes_1.TypeTag.Address) {
            // For addresses to other vectors, return the address
            return [{ type: "address", value: storedValue }, RustLiteTypes_1.TypeTag.Address];
        }
        else if (type === RustLiteTypes_1.TypeTag.Int) {
            // For integers, return the value
            return [storedValue, RustLiteTypes_1.TypeTag.Int];
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
        if (tag === RustLiteTypes_1.TypeTag.Bool && typeof value !== "boolean") {
            throw new Error(`Expected boolean value, got ${typeof value}`);
        }
        if (tag === RustLiteTypes_1.TypeTag.Int && typeof value !== "number") {
            throw new Error(`Expected number value, got ${typeof value}`);
        }
        if (tag === RustLiteTypes_1.TypeTag.Address &&
            (typeof value !== "object" ||
                value.type !== "address" ||
                typeof value.value !== "number")) {
            throw new Error(`Expected address value, got ${typeof value}`);
        }
        if (tag === RustLiteTypes_1.TypeTag.Address) {
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
        this.set_at_offset(address, RustLiteTypes_1.type_offset, tag);
    }
    // Helper method to check if a number is a valid vector address
    isVectorAddress(addr) {
        if (addr < 0 || addr >= this.data.byteLength) {
            return false;
        }
        // Check if the tag at addr is VectorStart
        const tag = this.data.getInt8(addr);
        return tag === RustLiteTypes_1.HeapTag.VectorStart;
    }
    allocate(tag, size) {
        if (this.free === -1) {
            throw new Error("heap memory exhausted");
        }
        const address = this.free;
        const [free, storedTag] = this.get(this.free);
        if (storedTag !== RustLiteTypes_1.TypeTag.Address ||
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
        const address = this.allocate(RustLiteTypes_1.HeapTag.VectorStart, 1 + numElements);
        this.set_at_offset(address, RustLiteTypes_1.type_offset, RustLiteTypes_1.TypeTag.Vector);
        return address;
    }
    // Set a node in the vector
    set_vector_node(address, index, value, tag) {
        if (index < 0) {
            throw new Error(`Index cannot be negative`);
        }
        if (this.getTag(address) !== RustLiteTypes_1.HeapTag.VectorStart) {
            throw new Error(`Address ${address} is not a vector`);
        }
        if (index >= this.getSize(address) - 1) {
            throw new Error(`Index out of bounds`);
        }
        this.set(address + 1 + index, value, tag);
        this.heap_dump();
    }
    get_vector_node(address, index) {
        if (index < 0)
            throw new Error(`Index cannot be negative`);
        if (this.getTag(address) !== RustLiteTypes_1.HeapTag.VectorStart)
            throw new Error(`Address ${address} is not a vector`);
        if (index >= this.getSize(address) - 1)
            throw new Error(`Index out of bounds`);
        this.heap_dump();
        return this.get(address + 1 + index);
    }
    get_vector_size(address) {
        if (this.getTag(address) !== RustLiteTypes_1.HeapTag.VectorStart)
            throw new Error(`Address ${address} is not a vector`);
        return this.getSize(address) - 1;
    }
    heap_dump() {
        console.log("Heap dump:");
        for (let i = 0; i < this.free; i++) {
            const address = i * RustLiteTypes_1.word_size;
            const tag = this.data.getInt8(address);
            const size = this.data.getUint16(address + RustLiteTypes_1.size_offset);
            const value = this.data.getFloat64(address);
            const typeTag = this.data.getInt8(address + RustLiteTypes_1.type_offset);
            const type = RustLiteTypes_1.TypeTag[typeTag];
            console.log(`Address: ${address}, Tag: ${RustLiteTypes_1.HeapTag[tag]}, Size: ${size}, Value: ${value}, Type: ${type}`);
            for (let j = 0; j < size; j++) {
                const i = j + 1;
                const address = i * RustLiteTypes_1.word_size;
                const value = this.data.getFloat64(address);
                const typeTag = this.data.getInt8(address + RustLiteTypes_1.type_offset);
                const type = RustLiteTypes_1.TypeTag[typeTag];
                console.log(`Address: ${address}, Value: ${value}, Type: ${type}`);
            }
        }
        console.log("===================");
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
exports.Heap = Heap;
