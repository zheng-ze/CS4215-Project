import { JestConductor } from "./JestConductor";
import { RustLiteEvaluator } from "../src/RustLiteEvaluator";
import { describe } from "@jest/globals";

describe("RustLiteEvaluator", () => {
  it("should create an instance of RustLiteEvaluator", () => {
    const conductor = new JestConductor();
    const evaluator = new RustLiteEvaluator(conductor);
    expect(evaluator).toBeInstanceOf(RustLiteEvaluator);
  });

  it("Println should output to conductor", async () => {
    const conductor = new JestConductor();
    const evaluator = new RustLiteEvaluator(conductor);

    const testCode = `
    fn main() {
        println!("Hello world!");
    }
    `;
    await evaluator.evaluateChunk(testCode);
    expect(conductor.outputs.length).toBe(1);
    expect(conductor.outputs[0]).toBe("Hello world!");
  });

  it("Println should output to conductor with args in order", async () => {
    const conductor = new JestConductor();
    const evaluator = new RustLiteEvaluator(conductor);

    const testCode = `
    fn main() {
        println!("1. {} 2. {} 3. {}", 10, 20, true);
    }
    `;
    await evaluator.evaluateChunk(testCode);
    expect(conductor.outputs.length).toBe(1);
    expect(conductor.outputs[0]).toBe("1. 10 2. 20 3. true");
  });

  it("Println should throw an error if there are insufficient args", async () => {
    const conductor = new JestConductor();
    const evaluator = new RustLiteEvaluator(conductor);

    const testCode = `
    fn main() {
        println!("1. {} 2. {}", 10);
    }
    `;
    await evaluator.evaluateChunk(testCode);

    expect(conductor.outputs.length).toBe(1);
    expect(conductor.outputs[0]).toBe(
      "Compile Error: 2 positional argument in format string, but 1 arguments were given"
    );
  });

  it("Println should throw an error if there are too many args", async () => {
    const conductor = new JestConductor();
    const evaluator = new RustLiteEvaluator(conductor);

    const testCode = `
    fn main() {
        println!("1. {} 2. {}", 10, 20, 30);
    }
    `;
    await evaluator.evaluateChunk(testCode);

    expect(conductor.outputs.length).toBe(1);
    expect(conductor.outputs[0]).toBe(
      "Compile Error: Formatting specifier missing"
    );
  });

  it("should support variable assignment with type inference", async () => {
    const conductor = new JestConductor();
    const evaluator = new RustLiteEvaluator(conductor);

    const testCode = `
    fn main() {
        let x = 10;
        println!("x: {}", x);
    }
    `;
    await evaluator.evaluateChunk(testCode);
    expect(conductor.outputs.length).toBe(1);
    expect(conductor.outputs[0]).toBe("x: 10");
  });

  it("should support variable assignment with type annotation", async () => {
    const conductor = new JestConductor();
    const evaluator = new RustLiteEvaluator(conductor);

    const testCode = `
    fn main() {
        let x: i32 = 10;
        let y: u32 = 20;
        println!("x: {}, y: {}", x, y);
    }
    `;
    await evaluator.evaluateChunk(testCode);
    expect(conductor.outputs.length).toBe(1);
    expect(conductor.outputs[0]).toBe("x: 10, y: 20");
  });

  it("should throw an error if u32 is negative", async () => {
    const conductor = new JestConductor();
    const evaluator = new RustLiteEvaluator(conductor);
    const testCode = `
    fn main() {
        let x: u32 = -1;
        println!("x: {}", x);
    }
    `;
    await evaluator.evaluateChunk(testCode);
    expect(conductor.outputs.length).toBe(1);
    expect(conductor.outputs[0]).toBe(
      "Compile Error: Type mismatch: expected u32 but got i32"
    );
  });

  it("should perform basic arithmetic operations", async () => {
    const conductor = new JestConductor();
    const evaluator = new RustLiteEvaluator(conductor);

    const testCode = `
    fn main() {
      println!("Addition: {}", 5 + 3);
      println!("Subtraction: {}", 10 - 4);
      println!("Multiplication: {}", 6 * 7);
      println!("Division: {}", 20 / 5);
      println!("Remainder: {}", 10 % 3);
    }
    `;
    await evaluator.evaluateChunk(testCode);
    expect(conductor.outputs).toEqual([
      "Addition: 8",
      "Subtraction: 6",
      "Multiplication: 42",
      "Division: 4",
      "Remainder: 1",
    ]);
  });

  it("should handle logical operations and comparisons", async () => {
    const conductor = new JestConductor();
    const evaluator = new RustLiteEvaluator(conductor);

    const testCode = `
    fn main() {
      println!("true && true: {}", true && true);
      println!("true && false: {}", true && false);
      println!("true || false: {}", true || false);
      println!("!true: {}", !true);
      println!("10 > 5: {}", 10 > 5);
      println!("5 >= 5: {}", 5 >= 5);
      println!("3 < 8: {}", 3 < 8);
      println!("4 <= 4: {}", 4 <= 4);
      println!("5 == 5: {}", 5 == 5);
      println!("6 != 7: {}", 6 != 7);
    }
    `;
    await evaluator.evaluateChunk(testCode);
    expect(conductor.outputs).toEqual([
      "true && true: true",
      "true && false: false",
      "true || false: true",
      "!true: false",
      "10 > 5: true",
      "5 >= 5: true",
      "3 < 8: true",
      "4 <= 4: true",
      "5 == 5: true",
      "6 != 7: true",
    ]);
  });
});
