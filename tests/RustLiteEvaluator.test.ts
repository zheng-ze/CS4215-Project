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

  it("should throw an error for division by zero", async () => {
    const conductor = new JestConductor();
    const evaluator = new RustLiteEvaluator(conductor);
    const testCode = `
    fn main() {
      let x = 10 / 0; // Division by zero
    }
    `;
    await evaluator.evaluateChunk(testCode);
    expect(conductor.outputs.length).toBe(1);
    expect(conductor.outputs[0]).toBe("Runtime Error: Division by zero");
  });

  it("should throw an error for modulo by zero", async () => {
    const conductor = new JestConductor();
    const evaluator = new RustLiteEvaluator(conductor);
    const testCode = `
    fn main() {
      let x = 10 % 0; // Modulo by zero
    }
    `;
    await evaluator.evaluateChunk(testCode);
    expect(conductor.outputs.length).toBe(1);
    expect(conductor.outputs[0]).toBe("Runtime Error: Modulo by zero");
  });

  it("should support mutable variables", async () => {
    const conductor = new JestConductor();
    const evaluator = new RustLiteEvaluator(conductor);
    const testCode = `
    fn main() {
      let mut x = 10;
      x = 20;
      println!("x: {}", x);
    }
    `;
    await evaluator.evaluateChunk(testCode);
    expect(conductor.outputs.length).toBe(1);
    expect(conductor.outputs[0]).toBe("x: 20");
  });

  it("should throw an error while mutating immutable variables", async () => {
    const conductor = new JestConductor();
    const evaluator = new RustLiteEvaluator(conductor);
    const testCode = `
    fn main() {
      let x = 10;
      x = 20; // Error: cannot assign twice to immutable variable
    }
    `;
    await evaluator.evaluateChunk(testCode);
    expect(conductor.outputs.length).toBe(1);
    expect(conductor.outputs[0]).toBe(
      "Compile Error: Cannot assign twice to immutable variable x"
    );
  });

  it("should support function calls and returns", async () => {
    const conductor = new JestConductor();
    const evaluator = new RustLiteEvaluator(conductor);

    const testCode = `
    fn add(a: i32, b: i32) -> i32 {
      return a + b;
    }
    
    fn main() {
      let result = add(3, 4);
      println!("3 + 4 = {}", result);
    }
    `;
    await evaluator.evaluateChunk(testCode);
    expect(conductor.outputs).toEqual(["3 + 4 = 7"]);
  });

  it("should shadow variables in nested scopes", async () => {
    const conductor = new JestConductor();
    const evaluator = new RustLiteEvaluator(conductor);
    const testCode = `
    fn main() {
      let x = 10;
      {
        let x = 20;
        println!("Inner x: {}", x);
      }
      println!("Outer x: {}", x);
    }
    `;
    await evaluator.evaluateChunk(testCode);
    expect(conductor.outputs.length).toBe(2);
    expect(conductor.outputs[0]).toBe("Inner x: 20");
    expect(conductor.outputs[1]).toBe("Outer x: 10");
  });
  it("should shadow functions in nested scopes", async () => {
    const conductor = new JestConductor();
    const evaluator = new RustLiteEvaluator(conductor);
    const testCode = `
    fn main() {
      fn x() {
        println!("Inner x");
      }
      {
        fn x() {
          println!("Inner x in block");
        }
        x();
      }
      x();
    }
    `;
    await evaluator.evaluateChunk(testCode);
    expect(conductor.outputs.length).toBe(2);
    expect(conductor.outputs[0]).toBe("Inner x in block");
    expect(conductor.outputs[1]).toBe("Inner x");
  });

  it("should handle nested function calls", async () => {
    const conductor = new JestConductor();
    const evaluator = new RustLiteEvaluator(conductor);

    const testCode = `
    fn main() {
      fn sum_of_squares(a: i32, b: i32) -> i32 {
        fn square(x: i32) -> i32 {
          return x * x;
        }
        return square(a) + square(b);
      }
      println!("Sum of squares: {}", sum_of_squares(3, 4));
    }
    `;
    await evaluator.evaluateChunk(testCode);
    expect(conductor.outputs).toEqual(["Sum of squares: 25"]);
  });

  it("should support if-else statements", async () => {
    const conductor = new JestConductor();
    const evaluator = new RustLiteEvaluator(conductor);

    const testCode = `
    fn main() {
      let x = 10;
      
      if x > 5 {
        println!("x is greater than 5");
      } else {
        println!("x is not greater than 5");
      }
      
      let y = 3;
      if y > 5 {
        println!("y is greater than 5");
      } else {
        println!("y is not greater than 5");
      }
    }
    `;
    await evaluator.evaluateChunk(testCode);
    expect(conductor.outputs).toEqual([
      "x is greater than 5",
      "y is not greater than 5",
    ]);
  });

  it("should support while loops", async () => {
    const conductor = new JestConductor();
    const evaluator = new RustLiteEvaluator(conductor);

    const testCode = `
    fn main() {
      let mut count = 0;
      while count < 5 {
        println!("Count: {}", count);
        count = count + 1;
      }
    }
    `;
    await evaluator.evaluateChunk(testCode);
    expect(conductor.outputs).toEqual([
      "Count: 0",
      "Count: 1",
      "Count: 2",
      "Count: 3",
      "Count: 4",
    ]);
  });

  it("should support vector creation and access", async () => {
    const conductor = new JestConductor();
    const evaluator = new RustLiteEvaluator(conductor);

    const testCode = `
    fn main() {
      let nums = vec![1, 2, 3, 4, 5];
      println!("First: {}", nums[0]);
      println!("Third: {}", nums[2]);
      println!("Length: {}", nums.len());
    }
    `;
    await evaluator.evaluateChunk(testCode);
    expect(conductor.outputs).toEqual(["First: 1", "Third: 3", "Length: 5"]);
  });

  it("should handle nested scopes and blocks", async () => {
    const conductor = new JestConductor();
    const evaluator = new RustLiteEvaluator(conductor);

    const testCode = `
    fn main() {
      let x = 10;
      {
        let y = 20;
        println!("Inner x: {}, y: {}", x, y);
        
        {
          let z = 30;
          println!("Nested x: {}, y: {}, z: {}", x, y, z);
        }
      }
      
      println!("Outer x: {}", x);
      // println!("y should be out of scope: {}", y); // This would be a compile error
    }
    `;
    await evaluator.evaluateChunk(testCode);
    expect(conductor.outputs).toEqual([
      "Inner x: 10, y: 20",
      "Nested x: 10, y: 20, z: 30",
      "Outer x: 10",
    ]);
  });

  it("should throw an error for out of scope variables", async () => {
    const conductor = new JestConductor();
    const evaluator = new RustLiteEvaluator(conductor);
    const testCode = `
    fn main() {
      let x = 10;
      {
        let y = 20;
        println!("Inner x: {}, y: {}", x, y);
      }
      println!("Outer x: {}", x);
      println!("y should be out of scope: {}", y); // This would be a compile error
    }
    `;
    await evaluator.evaluateChunk(testCode);
    expect(conductor.outputs.length).toBe(1);
    expect(conductor.outputs[0]).toBe("Compile Error: Identifier y not found");
  });

  it("should throw an error for out of scope functions", async () => {
    const conductor = new JestConductor();
    const evaluator = new RustLiteEvaluator(conductor);
    const testCode = `
    fn main() {
      let x: u32 = 5;
      let y: u32 = 10;
      fn sum(a: u32, b: u32) -> u32 {
        fn other_sum(x: u32, y: u32) -> u32 {
            return x + y;
        }
        return other_sum(a, b);
      }
      let z = other_sum(x, y); // This would be a compile error
      return z;
    }
    `;
    await evaluator.evaluateChunk(testCode);
    expect(conductor.outputs.length).toBe(1);
    expect(conductor.outputs[0]).toBe(
      "Compile Error: Identifier other_sum not found"
    );
  });

  it("should handle type errors", async () => {
    const conductor = new JestConductor();
    const evaluator = new RustLiteEvaluator(conductor);

    const testCode = `
    fn main() {
      let x: i64 = true; // Type error
    }
    `;
    await evaluator.evaluateChunk(testCode);
    expect(conductor.outputs[0]).toContain("Error");
  });

  it("should detect borrow checker violations", async () => {
    const conductor = new JestConductor();
    const evaluator = new RustLiteEvaluator(conductor);

    const testCode = `
    fn main() {
      let v = vec![1, 2, 3];
      let v2 = v;
      println!("{}", v[0]); // Use after move error
    }
    `;
    await evaluator.evaluateChunk(testCode);
    expect(conductor.outputs[0]).toContain("Error");
  });

  it("should detect type errors in function calls", async () => {
    const conductor = new JestConductor();
    const evaluator = new RustLiteEvaluator(conductor);

    const testCode = `
    fn add(a: i32, b: i32) -> i32 {
      return a + b;
    }
    
    fn main() {
      let result = add(3, true); // Type error
      println!("Result: {}", result);
    }
    `;
    await evaluator.evaluateChunk(testCode);
    expect(conductor.outputs[0]).toBe(
      "Compile Error: Mismatched types: expected i32 but got bool"
    );
  });
});
