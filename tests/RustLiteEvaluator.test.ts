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
        println!("1. {} 2. {} 3. {}", 10, 20, 30);
    }
    `;
    await evaluator.evaluateChunk(testCode);
    expect(conductor.outputs.length).toBe(1);
    expect(conductor.outputs[0]).toBe("1. 10 2. 20 3. 30");
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
});
