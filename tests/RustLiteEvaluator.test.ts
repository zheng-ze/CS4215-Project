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
});
