import {
  AddressType,
  HeapTag,
  SUPPORTED_TYPES,
  TypeTag,
  max_words,
  size_offset,
  type_offset,
  word_size,
} from "./RustLiteTypes";

export class Heap {
  data: DataView;
  free: number;

  constructor(numWords: number) {
    const buffer = new ArrayBuffer(numWords * word_size);
    this.data = new DataView(buffer);

    // Initialize free list
    this.free = 0;

    // Set up the free list chain
    for (let i = 0; i < numWords - 1; i++) {
      this.set(i, { type: "address", value: i + 1 }, TypeTag.Address);
    }

    // Mark the end of the free list
    this.set(numWords - 1, { type: "address", value: -1 }, TypeTag.Address);
  }

  get(address: number): [SUPPORTED_TYPES, TypeTag] {
    if (address < 0 || address >= max_words * word_size) {
      throw new Error(`Invalid address: ${address}`);
    }
    // get type
    const type = this.get_at_offset(address, type_offset);
    const storedValue = this.data.getFloat64(address * word_size);

    if (type === TypeTag.Bool) {
      // Convert stored value to boolean
      // 1 for true, 0 for false
      return [storedValue === 0 ? false : true, TypeTag.Bool];
    } else if (type === TypeTag.Address) {
      // For addresses to other vectors, return the address
      return [{ type: "address", value: storedValue }, TypeTag.Address];
    } else if (type === TypeTag.Int) {
      // For integers, return the value
      return [storedValue, TypeTag.Int];
    } else {
      throw new Error(`Unknown type tag: ${type}`);
    }
  }

  set(address: number, value: SUPPORTED_TYPES, tag: TypeTag): void {
    console.log(`Setting value at address ${address}:`, value, tag);
    // Check if the address is valid
    if (address < 0 || address >= max_words * word_size) {
      throw new Error(`Invalid address: ${address}`);
    }
    // Check if typetag and value are compatible
    if (tag === TypeTag.Bool && typeof value !== "boolean") {
      throw new Error(`Expected boolean value, got ${typeof value}`);
    }
    if (tag === TypeTag.Int && typeof value !== "number") {
      throw new Error(`Expected number value, got ${typeof value}`);
    }
    if (
      tag === TypeTag.Address &&
      (typeof value !== "object" ||
        value.type !== "address" ||
        typeof value.value !== "number")
    ) {
      throw new Error(`Expected address value, got ${typeof value}`);
    }

    if (tag === TypeTag.Address) {
      // For addresses to other vectors, store the address
      let valueToStore = value as AddressType;
      this.data.setFloat64(address * word_size, valueToStore.value);
    } else {
      // For other types, store the value directly
      // Convert boolean to number (1 for true, 0 for false)
      let valueToStore =
        typeof value === "boolean" ? (value ? 1 : 0) : (value as number);
      this.data.setFloat64(address * word_size, valueToStore);
    }

    this.set_at_offset(address, type_offset, tag);
  }

  // Helper method to check if a number is a valid vector address
  isVectorAddress(addr: number): boolean {
    if (addr < 0 || addr >= this.data.byteLength) {
      return false;
    }

    // Check if the tag at addr is VectorStart
    const tag = this.data.getInt8(addr);
    return tag === HeapTag.VectorStart;
  }

  allocate(tag: HeapTag, size: number): number {
    if (this.free === -1) {
      throw new Error("heap memory exhausted");
    }

    const address = this.free;
    const [free, storedTag] = this.get(this.free);
    if (
      storedTag !== TypeTag.Address ||
      typeof free !== "object" ||
      free.type !== "address"
    ) {
      throw new Error(`Free list corrupted at address ${address}`);
    }
    this.free = (free as AddressType).value;
    this.data.setInt8(address * word_size, tag);
    this.data.setUint16(address * word_size + size_offset, size);
    return address;
  }

  // Allocate a vector of size `size`
  // The first byte is the tag
  // The second byte is the size of the vector
  // The other words are the elements of the vector
  // The vector is stored as a contiguous block of memory
  allocate_vector(numElements: number): number {
    if (numElements < 0) {
      throw new Error(`Vector size cannot be negative`);
    }
    const address = this.allocate(HeapTag.VectorStart, 1 + numElements);
    this.set_at_offset(address, type_offset, TypeTag.Vector);
    return address;
  }

  // Set a node in the vector
  set_vector_node(
    address: number,
    index: number,
    value: SUPPORTED_TYPES,
    tag: TypeTag
  ): void {
    if (index < 0) {
      throw new Error(`Index cannot be negative`);
    }
    if (this.getTag(address) !== HeapTag.VectorStart) {
      throw new Error(`Address ${address} is not a vector`);
    }
    if (index >= this.getSize(address) - 1) {
      throw new Error(`Index out of bounds`);
    }

    this.set(address + 1 + index, value, tag);
    this.heap_dump();
  }

  get_vector_node(address: number, index: number): [SUPPORTED_TYPES, TypeTag] {
    if (index < 0) throw new Error(`Index cannot be negative`);
    if (this.getTag(address) !== HeapTag.VectorStart)
      throw new Error(`Address ${address} is not a vector`);
    if (index >= this.getSize(address) - 1)
      throw new Error(`Index out of bounds`);
    this.heap_dump();
    return this.get(address + 1 + index);
  }

  get_vector_size(address: number): number {
    if (this.getTag(address) !== HeapTag.VectorStart)
      throw new Error(`Address ${address} is not a vector`);
    return this.getSize(address) - 1;
  }

  heap_dump(): void {
    console.log("Heap dump:");
    for (let i = 0; i < this.free; i++) {
      const address = i * word_size;
      const tag = this.data.getInt8(address);
      const size = this.data.getUint16(address + size_offset);
      const value = this.data.getFloat64(address);
      const typeTag = this.data.getInt8(address + type_offset);
      const type = TypeTag[typeTag];
      console.log(
        `Address: ${address}, Tag: ${HeapTag[tag]}, Size: ${size}, Value: ${value}, Type: ${type}`
      );
      for (let j = 0; j < size; j++) {
        const i = j + 1;
        const address = i * word_size;
        const value = this.data.getFloat64(address);
        const typeTag = this.data.getInt8(address + type_offset);
        const type = TypeTag[typeTag];
        console.log(`Address: ${address}, Value: ${value}, Type: ${type}`);
      }
    }
    console.log("===================");
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
}
