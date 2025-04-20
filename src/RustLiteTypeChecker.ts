import {
  ArithExprContext,
  BlockContext,
  CondStmtContext,
  DeclareStmtContext,
  ExprContext,
  FnCallContext,
  FnDeclareStmtContext,
  LogicExprContext,
  ParamListContext,
  PrintlnMacroContext,
  ProgContext,
  ReturnStmtContext,
  ReturnTypeContext,
  RustLiteParser,
  StmtContext,
  TypeContext,
  VectorExprContext,
  WhileStmtContext,
} from "./parser/src/RustLiteParser";
import {
  RustLiteType,
  RustLiteTypeEnv,
  RustLiteTypeFrame,
  VoidType,
  global_scope,
} from "./RustLiteTypes";

import { Token } from "antlr4ng";

export class RustLiteTypeChecker {
  // Each function will have its own array of frames as functions do not capture
  // variables from the outer scope
  private type_env: RustLiteTypeEnv;
  private global_frame: RustLiteTypeFrame;
  private current_frame: RustLiteTypeFrame;

  constructor() {
    const global_frame = RustLiteTypeChecker.createFrame();
    this.type_env = new Map<string, RustLiteTypeFrame>();
    this.type_env.set(global_scope, global_frame);
    this.global_frame = global_frame;
    this.current_frame = global_frame;
  }

  private static createFrame(): RustLiteTypeFrame {
    return {
      fnNameMappings: new Map<string, string>(),
      mappings: new Map<string, RustLiteType>(),
      parent: null,
      children: [],
    };
  }

  public typeCheck(ctx: ProgContext): RustLiteTypeEnv {
    this.visitProgram(ctx);
    return this.type_env;
  }

  private visitProgram(ctx: ProgContext): void {
    console.log("Visiting program");

    const globalElements = ctx.globalElement();
    for (const element of globalElements) {
      const fnDeclareStmt = element.fnDeclareStmt();
      if (fnDeclareStmt) {
        const fnName = fnDeclareStmt.IDENTIFIER().getText();
        // Create a new frame for the function
        const frameKey = this.createAndAddFunctionFrame(fnName);
        const fnType = this.visitFnDeclareStmt(element.fnDeclareStmt());

        // After visiting the function declaration, we reset current function name
        this.current_frame = this.global_frame;

        // Add the function type to the frame
        this.current_frame.fnNameMappings.set(fnName, frameKey);
        this.current_frame.mappings.set(fnName, fnType);
      }
    }
  }

  private visitDeclareStmt(ctx: DeclareStmtContext): void {
    console.log("Visiting variable declaration");

    // Get the type of the variable
    // If type is not present, infer it from the initializer
    // If initializer is not present, throw an error
    const typeCtx = ctx.type();
    const exprCtx = ctx.expr();
    let type: RustLiteType | null;
    if (typeCtx) {
      type = this.getTypeOfType(typeCtx);
    } else {
      type = null;
    }
    if (!type && !exprCtx) {
      throw new Error(`Invalid variable declaration: initializer is required`);
    }
    const name = ctx.IDENTIFIER()?.getText() ?? "";
    if (!name || name.length === 0) {
      throw new Error(`Invalid identifier: ${name}`);
    }

    if (!exprCtx)
      throw new Error(`Invalid variable declaration: initializer is required`);
    const exprType = this.getTypeOfExpr(exprCtx);

    if (exprType === "void")
      throw new Error(
        `Invalid variable declaration: initializer cannot be void`
      );

    if (
      typeof exprType === "object" &&
      exprType.kind === "vec" &&
      exprType.elementType === undefined
    ) {
      if (!type)
        throw new Error(
          "Type annotation is required for empty vector initialization"
        );
      // Empty vector initialization. Take declared type
      this.current_frame.mappings.set(name, type);
    }

    if (type && exprType && type !== exprType) {
      // Type mismatch. Check if the type is a vector
      if (
        typeof type === "object" &&
        type.kind === "vec" &&
        typeof exprType === "object" &&
        exprType.kind === "vec"
      ) {
        // Check if the vector types are compatible
        if (type.elementType === undefined) {
          throw new Error("Missing generics for struct 'Vec'");
        }

        if (type.elementType !== exprType.elementType) {
          if (
            !(
              exprType.elementType === "u64 | i64" &&
              (type.elementType === "u64" || type.elementType === "i64")
            )
          ) {
            throw new Error(
              `Type mismatch: expected ${JSON.stringify(
                type
              )} but got ${JSON.stringify(exprType)}`
            );
          }
        }
      }
    }

    // Add the variable to the current frame
    this.current_frame.mappings.set(name, exprType);
  }

  private visitFnDeclareStmt(ctx: FnDeclareStmtContext): RustLiteType {
    console.log("Visiting function declaration");
    // Assume function frame is already created and current scope is set to the current function
    const params = this.getParamTypes(ctx.paramList());
    const returnType = this.getFnReturnType(ctx.returnType());
    const paramTypes = params.map(([_, type]) => type);

    // Add params to current frame
    for (const [name, type] of params) {
      if (this.current_frame.mappings.has(name)) {
        throw new Error(
          `Identifier ${name} is bound more than once in this parameter list`
        );
      }
      this.current_frame.mappings.set(name, type);
    }

    // Get return type of the body
    const body = ctx.block();
    const bodyReturnType = this.getBodyReturnType(body);

    if (JSON.stringify(bodyReturnType) !== JSON.stringify(returnType)) {
      throw new Error(
        `Return type mismatch: expected ${returnType}, got ${bodyReturnType}`
      );
    }

    return { kind: "function", returnType: returnType, paramTypes: paramTypes };
  }

  private getTypeOfExpr(ctx: ExprContext): RustLiteType | VoidType {
    console.log("Visiting expression");
    const primary = ctx._primary;
    if (primary) return this.getTypeOfToken(primary);

    const inner = ctx._inner;
    if (inner) return this.getTypeOfExpr(inner);

    const arithExpr = ctx.arithExpr();
    if (arithExpr) return this.getTypeOfArithExpr(arithExpr);

    const boolExpr = ctx.logicExpr();
    if (boolExpr) return this.getTypeOfLogicExpr(boolExpr);

    const vectorExpr = ctx.vectorExpr();
    if (vectorExpr) return this.getTypeOfVectorExpr(vectorExpr);

    const fnCall = ctx.fnCall();
    if (fnCall) return this.getTypeOfFnCall(fnCall);

    throw new Error("Invalid expression");
  }

  private getTypeOfArithExpr(ctx: ArithExprContext): RustLiteType {
    console.log("Visiting arithmetic expression");
    const primary = ctx._primary;
    if (primary) return this.getTypeOfToken(primary);
    const inner = ctx._inner;
    if (inner) return this.getTypeOfArithExpr(inner);
    const fnCall = ctx.fnCall();
    if (fnCall) {
      const returnType = this.getTypeOfFnCall(fnCall);
      if (returnType === "void")
        throw new Error("Cannot use void in arithmetic expression");
      return returnType;
    }

    const left = ctx._left;
    const right = ctx._right;
    const op = ctx._op;

    console.log("Left:", left?.getText() ?? "NULL");
    console.log("Right:", right?.getText() ?? "NULL");
    console.log("Operator:", op?.text ?? "NULL");

    if (!left || !right) {
      throw new Error("Invalid arithmetic expression");
    }

    // Unary minus
    if (!left && right && op) {
      if (op.type.toString() !== "-")
        throw new Error("Invalid unary arithmetic operation");

      const rightType = this.getTypeOfArithExpr(right);

      if (
        rightType !== "i64" &&
        rightType !== "u64" &&
        rightType !== "u64 | i64"
      )
        throw new Error("Invalid type for unary minus operation");

      return rightType;
    }

    // Binary operation
    if (left && right && op) {
      const opType = op.text;
      if (
        opType !== "+" &&
        opType !== "-" &&
        opType !== "*" &&
        opType !== "/" &&
        opType !== "%"
      )
        throw new Error("Unknown arithmetic operation");

      const leftType = this.getTypeOfArithExpr(left);
      const rightType = this.getTypeOfArithExpr(right);

      if (leftType !== "i64" && leftType !== "u64" && leftType !== "u64 | i64")
        throw new Error("Invalid type for left operand");

      if (
        rightType !== "i64" &&
        rightType !== "u64" &&
        rightType !== "u64 | i64"
      )
        throw new Error("Invalid type for right operand");

      if (leftType == rightType) {
        return leftType;
      }

      if (leftType === "u64 | i64" && rightType !== "u64 | i64") {
        return rightType;
      }

      if (leftType !== "u64 | i64" && rightType === "u64 | i64") {
        return leftType;
      }

      throw new Error(
        `Mismatched types for ${opType}: ${leftType} and ${rightType}`
      );
    }

    // If we reach here, it means we have an invalid expression
    throw new Error("Invalid arithmetic expression");
  }

  private getTypeOfLogicExpr(ctx: LogicExprContext): RustLiteType {
    console.log("Visiting logic expression");
    const primary = ctx._primary;
    if (primary) return this.getTypeOfToken(primary);
    const inner = ctx._inner;
    if (inner) return this.getTypeOfLogicExpr(inner);
    const left = ctx._left;
    const right = ctx._right;
    const op = ctx._op;

    // Logical not
    if (!left && right && op) {
      if (op.type.toString() !== "!")
        throw new Error("Invalid unary logical operation");

      const rightType = this.getTypeOfLogicExpr(right);

      if (rightType !== "bool")
        throw new Error("Expected bool got: " + rightType);

      return rightType;
    }

    // Binary operation
    if (left && right && op) {
      const opType = op.type.toString();
      if (opType !== "&&" && opType !== "||")
        throw new Error("Unknown logical operation");

      const leftType = this.getTypeOfLogicExpr(left);
      const rightType = this.getTypeOfLogicExpr(right);

      if (leftType !== "bool" || rightType !== "bool") {
        const errorType = leftType === "bool" ? rightType : leftType;
        throw new Error("Expected bool got: " + errorType);
      }

      return leftType;
    }

    // If we reach here, it means we have an invalid expression
    throw new Error("Invalid logic expression");
  }

  private getTypeOfVectorExpr(ctx: VectorExprContext): RustLiteType {
    console.log("Visiting vector expression");
    const vectorInit = ctx.vectorInit();
    const vectorLength = ctx.vectorLen();
    const vectorIndex = ctx.vectorIndexAccess();

    if (vectorInit) {
      const init_new = vectorInit.NEW();
      const init_vector = vectorInit.vectorInitList();

      if (init_new) {
        // Handle Vec::new()
        return { kind: "vec", elementType: undefined };
      } else if (init_vector) {
        // Handle vector initialization list
        const expressions = init_vector.expr();

        // No initial list means empty vector. Take type declared in declaration
        if (expressions.length === 0)
          return { kind: "vec", elementType: undefined };

        // Get the type of the first element
        const firstType = this.getTypeOfExpr(expressions[0]);
        if (firstType === "void")
          throw new Error("Vector element type cannot be void");

        // Check if the first type is a valid type
        if (typeof firstType !== "string")
          throw new Error(`Unsupported type for vector element: ${firstType}`);

        // Check all elements have the same type
        for (let i = 1; i < expressions.length; i++) {
          const currentType = this.getTypeOfExpr(expressions[i]);
          if (currentType !== firstType) {
            throw new Error(
              `Mismatched types: expected ${JSON.stringify(
                firstType
              )} but got ${JSON.stringify(currentType)}`
            );
          }
        }

        // Create vector type with the determined element type
        return { kind: "vec", elementType: firstType };
      }
    }
    if (vectorLength) return "u64 | i64";
    if (vectorIndex) {
      const vectorName = vectorIndex.IDENTIFIER().getText();
      const vectorType = this.getTypeOfIdentifier(vectorName);
      if (typeof vectorType !== "object" || vectorType.kind !== "vec")
        throw new Error(`Identifier ${vectorName} is not a vector`);

      const type = vectorType.elementType;
      if (type === undefined)
        throw new Error(`Annotation is required for empty vector`);

      return type;
    }

    // If we reach here, it means we have an invalid expression
    throw new Error("Invalid vector expression");
  }

  private getTypeOfFnCall(ctx: FnCallContext): RustLiteType | VoidType {
    console.log("Visiting function call");
    const fnName = ctx.IDENTIFIER().getText();
    const fnType = this.getTypeOfIdentifier(fnName);
    if (typeof fnType !== "object" || fnType.kind !== "function")
      throw new Error(`Identifier ${fnName} is not a function`);

    // Check the arguments
    const args = ctx.argList()?.expr() ?? [];
    if (args.length === 0 && fnType.paramTypes.length > 0) throw new Error("");
    if (args.length !== fnType.paramTypes.length)
      throw new Error(
        `Function ${fnName} expects ${fnType.paramTypes.length} arguments but got ${args.length}`
      );

    for (let i = 0; i < args.length; i++) {
      const argType = this.getTypeOfExpr(args[i]);
      const paramType = fnType.paramTypes[i];
      if (argType !== paramType) {
        if (
          !(
            argType === "u64 | i64" &&
            (paramType === "i64" || paramType === "u64")
          )
        )
          throw new Error(
            `Mismatched types: expected ${JSON.stringify(
              paramType
            )} but got ${JSON.stringify(argType)}`
          );
      }
    }

    return fnType.returnType;
  }

  private getParamTypes(
    ctx: ParamListContext | null
  ): [string, RustLiteType][] {
    console.log("Getting parameter types");
    const paramTypes: [string, RustLiteType][] = [];

    if (!ctx) return paramTypes;

    const params = ctx.param();
    for (const param of params) {
      const typeCtx = param.type();
      if (!typeCtx) {
        throw new Error("Parameter type is required");
      }
      const vectorType = typeCtx.vectorType();
      let type: RustLiteType;
      if (vectorType !== null) {
        type = this.getTypeOfType(typeCtx);
      } else {
        type = this.getTypeOfToken(typeCtx.start);
      }
      const name = param.IDENTIFIER().getText();
      paramTypes.push([name, type]);
    }
    return paramTypes;
  }

  private getFnReturnType(
    ctx: ReturnTypeContext | null
  ): RustLiteType | VoidType {
    console.log("Getting return type");

    if (!ctx) return "void";

    const type = ctx.type();
    if (type) {
      const vectorType = type.vectorType();
      if (vectorType) {
        return this.getTypeOfType(type);
      }
      const token = type.start;
      const tokenType = this.getTypeOfToken(token);
      return tokenType;
    }
    return "void";
  }

  private getBodyReturnType(ctx: BlockContext): RustLiteType | VoidType {
    console.log("Getting function body return type");

    const blockContent = ctx.blockContent();
    const stmts = blockContent.stmt();
    const finalExpr = blockContent._finalExpr;

    if (stmts.length == 0 && !finalExpr) return "void";
    let returnType: RustLiteType | VoidType | null = null;
    for (const stmt of stmts) {
      const stmtType = this.getReturnTypeOfStmt(stmt);
      if (stmtType === "void") continue;
      if (returnType === null) {
        returnType = stmtType;
        continue;
      }
      if (returnType !== stmtType) {
        throw new Error(`Return type mismatch: ${returnType} vs ${stmtType}`);
      }
    }

    if (finalExpr) {
      const exprType = this.getTypeOfToken(finalExpr.start);
      if (returnType === null) {
        returnType = exprType;
      } else if (returnType !== exprType) {
        throw new Error(`Return type mismatch: ${returnType} vs ${exprType}`);
      }
    }

    return returnType ?? "void";
  }

  private getReturnTypeOfStmt(
    ctx: StmtContext | null
  ): RustLiteType | VoidType | null {
    console.log("Getting return type of statement");
    if (!ctx) return "void";
    const condStmtCtx = ctx.condStmt();
    const blockCtx = ctx.block();
    const whileStmtCtx = ctx.whileStmt();
    const returnStmtCtx = ctx.returnStmt();

    // No return type but called to perform type checking
    const declareStmtCtx = ctx.declareStmt();
    const fnDeclareStmtCtx = ctx.fnDeclareStmt();
    const printLn = ctx.printlnMacro();

    // Recursively check for types on stmts that can potentially return
    if (declareStmtCtx) {
      this.visitDeclareStmt(declareStmtCtx);
      return "void";
    }
    if (fnDeclareStmtCtx) {
      // Create a new frame for the function
      const currentFrame = this.current_frame; // Save the current frame
      const fnName = fnDeclareStmtCtx.IDENTIFIER().getText();
      const frameKey = this.createAndAddFunctionFrame(fnName);
      const fnType = this.visitFnDeclareStmt(fnDeclareStmtCtx);

      this.current_frame = currentFrame; // Restore the current frame

      // Add the function type to the frame
      this.current_frame.fnNameMappings.set(fnName, frameKey);
      this.current_frame.mappings.set(fnName, fnType);

      return "void";
    }
    if (returnStmtCtx) return this.getReturnTypeOfReturnStmt(returnStmtCtx);
    if (condStmtCtx) return this.getReturnTypeOfCondStmt(condStmtCtx);
    if (whileStmtCtx) return this.getReturnTypeOfWhileStmt(whileStmtCtx);
    if (blockCtx)
      return this.wrapWithFrameAndEvaluate(
        this.getBodyReturnType.bind(this, blockCtx)
      );
    if (printLn) {
      this.visitPrintLnMacro(printLn);
      return "void";
    }

    return "void";
  }

  private getReturnTypeOfCondStmt(
    ctx: CondStmtContext | null
  ): RustLiteType | VoidType {
    console.log("Getting return type of conditional statement");
    if (!ctx) return "void";
    const blockCtx = ctx.block();
    const blockTypes = blockCtx.map((block) =>
      this.wrapWithFrameAndEvaluate(this.getBodyReturnType.bind(this, block))
    );

    // Check if all blocks have the same return type
    const firstType = blockTypes[0];
    for (let i = 1; i < blockTypes.length; i++) {
      const type = blockTypes[i];
      if (type !== firstType) {
        throw new Error(`Return type mismatch: ${firstType} vs ${type}`);
      }
    }
    return firstType;
  }

  private getReturnTypeOfWhileStmt(
    ctx: WhileStmtContext | null
  ): RustLiteType | VoidType {
    console.log("Getting return type of while statement");
    if (!ctx) return "void";
    const blockCtx = ctx.block();
    return this.wrapWithFrameAndEvaluate(
      this.getBodyReturnType.bind(this, blockCtx)
    );
  }

  private getReturnTypeOfReturnStmt(
    ctx: ReturnStmtContext | null
  ): RustLiteType | VoidType {
    console.log("Getting return type of return statement");
    if (!ctx) throw new Error("Return statement context is null");
    const expr = ctx.expr();
    if (!expr) return "void";

    return this.getTypeOfExpr(expr);
  }

  private visitPrintLnMacro(ctx: PrintlnMacroContext): void {
    console.log("Visiting println macro");
    const printlnArgs = ctx.printlnArgs();
    if (!printlnArgs) return; // Print empty line
    const stringCtx = printlnArgs.STRING();
    const argsCtx = printlnArgs.expr();

    if (!stringCtx && argsCtx.length > 0) {
      throw new Error("Expected string found ,");
    }

    const string = stringCtx?.getText() ?? "";
    const args = argsCtx ?? [];

    let numValidArgs = 0;
    for (const arg of args) {
      if (!arg) continue;
      numValidArgs++;
    }

    // Check if the string is valid
    this.checkStringFormat(string, numValidArgs);

    // Check if type of args is valid
    for (const arg of args) {
      const argType = this.getTypeOfExpr(arg);
      if (argType === "void" || typeof argType === "object") {
        throw new Error(
          `\`${JSON.stringify(
            argType
          )}\` doesn't implement \`std::fmt::Display\``
        );
      }
    }
  }

  private checkStringFormat(string: string, numArgs: number): void {
    console.log("Checking string format");
    console.log("String:", string);
    console.log("Number of arguments:", numArgs);
    let str = string;
    let argsIndex = 0;
    const LEFT_BRACE_MARKER = "\uE000"; // Private use Unicode character
    const RIGHT_BRACE_MARKER = "\uE001"; // Private use Unicode character

    // Replace escaped braces
    str = str.replace(/\{\{/g, LEFT_BRACE_MARKER);
    str = str.replace(/\}\}/g, RIGHT_BRACE_MARKER);

    // Replace {} with args
    let missingArgs = 0;
    str = str.replace(/\{}/g, () => {
      if (argsIndex >= numArgs) {
        missingArgs++;
        return "";
      }
      argsIndex++;
      return "";
    });

    if (str.includes("{")) {
      throw new Error(`Unmatched '{' in format string: ${string}`);
    }

    if (str.includes("}")) {
      throw new Error(`Unmatched '}' in format string: ${string}`);
    }

    // Check if there is sufficient arguments and placeholders
    if (argsIndex < numArgs) {
      throw new Error(`Formatting specifier missing`);
    }

    if (missingArgs > 0) {
      throw new Error(
        `${missingArgs} positional argument in format string, but no arguments were given`
      );
    }
  }

  // Helper methods
  private getTypeOfType(ctx: TypeContext): RustLiteType {
    console.log("Getting type");
    if (!ctx) throw new Error("Type context is null");
    const vectorType = ctx.vectorType();
    if (vectorType) {
      const typeCtx = vectorType.type();
      const elementType = this.getTypeOfToken(typeCtx.start);

      if (!elementType) throw new Error("Missing generics for struct 'Vec'");

      if (typeof elementType !== "string")
        throw new Error(`Unsupported type for vector element: ${elementType}`);

      return {
        kind: "vec",
        elementType: elementType,
      };
    }

    return this.getTypeOfToken(ctx.start);
  }

  private getTypeOfToken(token: Token | null): RustLiteType {
    if (!token) {
      throw new Error("Token is null");
    }
    console.log("Visiting token:", token.text);

    switch (token.type) {
      case RustLiteParser.BOOL:
        return "bool";
      case RustLiteParser.INT:
        const intToken = token.text;
        if (!intToken || intToken.length === 0) {
          throw new Error(`Invalid integer: ${intToken}`);
        }
        const number = parseInt(intToken);
        if (isNaN(number)) {
          throw new Error(`Invalid integer: ${token.text}`);
        }
        if (number < -(2 ** 63) || number > 2 ** 64 - 1)
          throw new Error(`Integer out of range: ${token.text}`);
        if (number < 0) return "i64";
        if (number < 2 ** 63 - 1) return "u64 | i64";
        return "u64";
      case RustLiteParser.IDENTIFIER:
        const name = token.text;
        if (!name || name.length === 0) {
          throw new Error(`Invalid identifier: ${name}`);
        }
        return this.getTypeOfIdentifier(name);
      case RustLiteParser.U64_TYPE:
        return "u64";
      case RustLiteParser.I64_TYPE:
        return "i64";
    }
    throw new Error(`Unknown token type: ${token.text}`);
  }

  private getTypeOfIdentifier(identifier: string): RustLiteType {
    console.log("Getting type of identifier:", identifier);
    // Check if the identifier is in the current frame and it's ancestor frames
    // Global frame is the root of the tree and is always present
    let currentFrame: RustLiteTypeFrame | null = this.current_frame;
    while (currentFrame) {
      const type = currentFrame.mappings.get(identifier);
      if (type) {
        console.log("Found type:", type);
        return type;
      }
      currentFrame = currentFrame.parent;
    }

    throw new Error(`Identifier ${identifier} not found`);
  }

  // This method is used to create a new frame for the function
  // and add it to the type_env at the global scope.
  // Returns the key that the frame is assigned to.
  private createAndAddFunctionFrame(name: string): string {
    // Check that there is no function with the same name in current scope
    const type = this.current_frame.mappings.get(name);
    if (type && typeof type === "object" && type.kind === "function")
      throw new Error(`Function ${name} already exists in current scope`);

    let frameKey = name;

    // Check if the function name is already in use
    if (this.type_env.has(name)) {
      // Create a unique name for the frame
      let i = 1;
      while (this.type_env.has(`${name}_${i}`)) {
        i++;
      }
      frameKey = `${name}_${i}`;
    }

    // Create and add the frame to the type_env

    const frame = RustLiteTypeChecker.createFrame();
    frame.parent = this.global_frame;

    this.type_env.set(frameKey, frame);
    this.current_frame = frame;

    // Do not add the function frames to the current frame as they do not capture
    // the variables from the outer scope
    return frameKey;
  }

  private wrapWithFrameAndEvaluate(
    fn: () => RustLiteType | VoidType
  ): RustLiteType | VoidType {
    const currentFrame = this.current_frame;
    const newFrame = RustLiteTypeChecker.createFrame();
    newFrame.parent = currentFrame;
    currentFrame.children.push(newFrame);
    this.current_frame = newFrame;

    const result = fn();

    this.current_frame = currentFrame; // Restore the current frame

    return result;
  }
}
