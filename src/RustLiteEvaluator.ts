import {
  AbstractParseTreeVisitor,
  CharStream,
  CommonTokenStream,
} from "antlr4ng";
import {
  ArgListContext,
  ArithExprContext,
  BlockContentContext,
  BlockContext,
  CondStmtContext,
  DeclareStmtContext,
  ExprContext,
  ExprStmtContext,
  FnCallContext,
  FnDeclareStmtContext,
  GlobalElementContext,
  LogicExprContext,
  LoopControlContext,
  LoopControlStmtContext,
  ParamContext,
  ParamListContext,
  PrintlnArgsContext,
  PrintlnMacroContext,
  ProgContext,
  ReturnStmtContext,
  ReturnTypeContext,
  ReturnTypesContext,
  RustLiteParser,
  StmtContext,
  TypeContext,
  VectorAssignmentContext,
  VectorExprContext,
  VectorIndexAccessContext,
  VectorInitContext,
  VectorLenContext,
  VectorPopContext,
  VectorPushContext,
  VectorTypeContext,
  WhileStmtContext,
} from "./parser/src/RustLiteParser";
import {
  GOTO,
  SUPPORTED_TYPES,
  instruction,
  instruction_type,
} from "./RustLiteTypes";
import {
  assign,
  binaryOperation,
  call,
  done,
  enterScope,
  exitScope,
  jump,
  load,
  loadConstant,
  loadFunction,
  reset,
  unaryOperation,
} from "./RustLiteCompiler";

import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { RustLiteLexer } from "./parser/src/RustLiteLexer";
import { RustLiteVisitor } from "./parser/src/RustLiteVisitor";
import { RustLiteVirtualMachine } from "./RustLiteVirtualMachine";
import { error } from "console";
import { stat } from "fs";

class RustLiteEvaluatorVisitor
  extends AbstractParseTreeVisitor<void>
  implements RustLiteVisitor<void>
{
  private wc: number = 0;
  private instrs: instruction[] = [];
  private currentScope: Map<string, number> = new Map(); // Track variable offsets in current scope
  private functionTable: Map<string, number> = new Map(); // Track function addresses

  visitProg(ctx: ProgContext): void {
    console.log(`Visiting Program, text parsed: ${ctx.getText()}`);
    let globalElements = ctx.globalElement();
    if (!globalElements) {
      return;
    }
    for (let i = 0; i < globalElements.length; i++) {
      try {
        if (!globalElements[i]) continue;
        console.log(`Statement: ${globalElements[i].getText()}`);
        this.visitGlobalElement(globalElements[i]);
      } catch (error) {
        throw `Error while visiting statement ${globalElements[i]}, with error: ${error}`;
      }
    }
    const compileTimePos = { first: 0, second: 0 }; // TODO: Get the compile time position of the main function
    if (!compileTimePos) {
      // No main function found nothing will execute so return undefined
      this.instrs = [
        loadConstant(0), // TODO: Add null as supported type and return it
      ];
    }

    // After processing all global elements, call main if it exists
    const mainAddr = this.functionTable.get("main");
    if (mainAddr !== undefined) {
      this.instrs[this.wc++] = loadFunction(0, mainAddr); // Load the function
      this.instrs[this.wc++] = call(0); // Call main with 0 arguments
    }
    this.instrs[this.wc++] = done(); // End program execution
  }

  visitGlobalElement(ctx: GlobalElementContext): void {
    console.log("Visiting GlobalElement");
    if (ctx.fnDeclareStmt()) {
      return this.visitFnDeclareStmt(ctx.fnDeclareStmt());
    }
    // TODO: Check if there is a main function and call it if it exists
    throw new Error(`Unknown global element: ${ctx.getText()}`);
  }

  visitExpr(ctx: ExprContext): void {
    console.log("Visiting Expr");

    const bool = ctx.BOOL();
    const int = ctx.INT();
    const identifier = ctx.IDENTIFIER();
    const vectorExprCtx = ctx.vectorExpr();
    const arithExprCtx = ctx.arithExpr();
    const logicExprCtx = ctx.logicExpr();
    const fnCallCtx = ctx.fnCall();
    const innerCtx = ctx._inner;

    if (innerCtx) return this.visitExpr(innerCtx);
    if (bool) {
      this.instrs[this.wc++] = loadConstant(bool.getText() === "true");
      return;
    }
    if (int) {
      this.instrs[this.wc++] = loadConstant(parseInt(int.getText()));
      return;
    }
    if (identifier) {
      const name = identifier.getText();
      const offset = this.currentScope.get(name);
      if (offset === undefined) {
        throw new Error(`Undefined variable: ${name}`);
      }
      this.instrs[this.wc++] = load(name);
      return;
    }
    if (arithExprCtx) return this.visitArithExpr(arithExprCtx);
    if (logicExprCtx) return this.visitLogicExpr(logicExprCtx);
    if (fnCallCtx) return this.visitFnCall(fnCallCtx);
    if (vectorExprCtx) return this.visitVectorExpr(vectorExprCtx);
  }

  visitArithExpr(ctx: ArithExprContext): void {
    console.log("Visiting ArithExpr");

    const int = ctx.INT();
    const identifier = ctx.IDENTIFIER();
    const innerCtx = ctx._inner;

    const opText = ctx._op?.text;
    const leftCtx = ctx._left;
    const rightCtx = ctx._right;

    if (int) {
      this.instrs[this.wc++] = loadConstant(parseInt(int.getText()));
      return;
    }

    if (identifier) {
      // TODO: Implement retrieving variable value
      const name = identifier.getText();
      const offset = this.currentScope.get(name);
      if (offset === undefined) {
        throw new Error(`Undefined variable: ${name}`);
      }
      this.instrs[this.wc++] = load(name);
      // throw new Error(`Identifier not implemented: ${identifier.getText()}`);
    }

    if (innerCtx) return this.visitArithExpr(innerCtx);

    if (opText === "-" && !leftCtx && rightCtx) {
      // Unary minus
      this.visitArithExpr(rightCtx);
      this.instrs[this.wc++] = unaryOperation("-");
      return;
    }

    if (leftCtx && rightCtx && opText) {
      // Binary operation
      this.visitArithExpr(leftCtx);
      this.visitArithExpr(rightCtx);
      this.instrs[this.wc++] = binaryOperation(opText);
      return;
    }
  }

  visitLogicExpr(ctx: LogicExprContext): void {
    console.log("Visiting LogicExpr");

    const bool = ctx.BOOL();
    const identifier = ctx.IDENTIFIER();
    const innerCtx = ctx._inner;
    const arithLeftCtx = ctx._arithLeft;
    const arithRightCtx = ctx._arithRight;
    const opText = ctx._op?.text;
    const leftCtx = ctx._left;
    const rightCtx = ctx._right;

    if (bool) {
      this.instrs[this.wc++] = loadConstant(bool.getText() === "true");
      return;
    }

    if (identifier) {
      const name = identifier.getText();
      const offset = this.currentScope.get(name);
      if (offset === undefined) {
        throw new Error(`Undefined variable: ${name}`);
      }
      this.instrs[this.wc++] = load(name);
      return;
    }
    if (innerCtx) return this.visitLogicExpr(innerCtx);

    if (arithLeftCtx && arithRightCtx && opText) {
      // Comparison operation
      this.visitArithExpr(arithLeftCtx);
      this.visitArithExpr(arithRightCtx);
      this.instrs[this.wc++] = binaryOperation(opText);
      return;
    }

    if (opText === "!" && !leftCtx && rightCtx) {
      // Unary negation
      this.visitLogicExpr(rightCtx);
      this.instrs[this.wc++] = unaryOperation("!");
      return;
    }

    if (leftCtx && rightCtx && opText) {
      // Binary operation
      this.visitLogicExpr(leftCtx);
      this.visitLogicExpr(rightCtx);
      this.instrs[this.wc++] = binaryOperation(opText);
      return;
    }
  }

  visitStmt(ctx: StmtContext): void {
    console.log("Visiting Stmt");

    const exprStmtCtx = ctx.exprStmt();
    const declareStmtCtx = ctx.declareStmt();
    const condStmtCtx = ctx.condStmt();
    const whileStmtCtx = ctx.whileStmt();
    const fnDeclareStmtCtx = ctx.fnDeclareStmt();
    const returnStmtCtx = ctx.returnStmt();
    const blockCtx = ctx.block();

    if (exprStmtCtx) return this.visitExprStmt(exprStmtCtx);
    if (declareStmtCtx) return this.visitDeclareStmt(declareStmtCtx);
    if (condStmtCtx) return this.visitCondStmt(condStmtCtx);
    if (whileStmtCtx) return this.visitWhileStmt(whileStmtCtx);
    if (fnDeclareStmtCtx) return this.visitFnDeclareStmt(fnDeclareStmtCtx);
    if (returnStmtCtx) return this.visitReturnStmt(returnStmtCtx);
    if (blockCtx) return this.visitBlock(blockCtx);
  }

  visitBlock(ctx: BlockContext): void {
    console.log("Visiting Block");
    if (ctx.blockContent()) return this.visitBlockContent(ctx.blockContent());
  }

  visitBlockContent(ctx: BlockContentContext): void {
    // Save outer scope
    const outerScope = new Map(this.currentScope);

    console.log("Visiting BlockContent");
    const stmts = ctx.stmt();

    // TODO: Get num of locals from the context
    const [_, names] = this.scanForLocalVars(ctx);
    const numLocals = names.length;
    this.instrs[this.wc++] = enterScope(numLocals);

    for (let stmt of stmts) {
      if (!stmt) continue;
      try {
        console.log(`Statement: ${stmt.getText()}`);
        this.visitStmt(stmt);
      } catch (error) {
        throw `Error while visiting statement ${stmt.getText()}, with error: ${error}`;
      }
    }

    this.instrs[this.wc++] = exitScope();
    // Restore outer scope when exiting
    this.currentScope = outerScope;
  }

  private scanForLocalVars(ctx: BlockContentContext): [string[], string[]] {
    console.log("Visiting BlockContent");
    const stmts = ctx.stmt();
    const types: string[] = [];
    const names: string[] = [];
    for (let stmt of stmts) {
      if (!stmt) continue;

      const declareStmt = stmt.declareStmt();
      const fnDeclareStmt = stmt.fnDeclareStmt();
      if (declareStmt) {
        const type = declareStmt.type();
        const name = declareStmt.IDENTIFIER();
        if (type && name) {
          types.push(type.getText());
          names.push(name.getText());
        }
      }
      if (fnDeclareStmt) {
        const fnName = fnDeclareStmt.IDENTIFIER();
        const retType = fnDeclareStmt.returnType();
        if (fnName && retType) {
          types.push(retType.getText());
          names.push(fnName.getText());
        }
      }
    }
    return [types, names];
  }

  visitExprStmt(ctx: ExprStmtContext): void {
    console.log("Visiting ExprStmt");
    const exprCtx = ctx.expr();
    if (exprCtx) return this.visitExpr(exprCtx);
  }

  visitDeclareStmt(ctx: DeclareStmtContext): void {
    console.log("Visiting DeclareStmt");
    const typeCtx = ctx.type();
    const isMutable = ctx.MUT() ? true : false;
    const name = ctx.IDENTIFIER()?.getText();
    if (!name) throw new Error("Variable declaration requires a name");

    // Add variable to current scope
    const offset = this.currentScope.size;
    this.currentScope.set(name, offset);

    const value = ctx.expr();
    if (value) {
      this.visitExpr(value);
    } else {
      // Default initialization
      this.instrs[this.wc++] = loadConstant(0);
    }

    this.instrs[this.wc++] = assign(name, false);
    return;
  }

  visitCondStmt(ctx: CondStmtContext): void {
    console.log("Visiting CondStmt");
    return;
  }

  visitWhileStmt(ctx: WhileStmtContext): void {
    console.log("Visiting WhileStmt");
    return;
  }

  visitLoopControl(ctx: LoopControlContext): void {
    console.log("Visiting LoopControl");
    return;
  }

  visitLoopControlStmt(ctx: LoopControlStmtContext): void {
    console.log("Visiting LoopControlStmt");
    return;
  }

  private processParam(ctx: ParamContext): [string, string] {
    const identifier = ctx.IDENTIFIER();
    const typeCtx = ctx.type();
    if (!typeCtx || !identifier) throw new Error("Invalid parameter");

    const type = typeCtx.getText();
    const name = identifier.getText();

    return [type, name];
  }

  private processParamList(ctx: ParamListContext | null): [string[], string[]] {
    console.log("Visiting ParamList");
    if (!ctx || ctx.param().length === 0) return [[], []];
    const types: string[] = [];
    const names: string[] = [];
    const params = ctx.param();
    for (let param of params) {
      if (!param) continue;
      const [type, name] = this.processParam(param);
      types.push(type);
      names.push(name);
    }
    return [types, names];
  }

  private processReturnType(ctx: ReturnTypeContext): string {
    console.log("Visiting ReturnType");
    if (!ctx || !ctx.returnTypes()) return "void";
    return this.processReturnTypes(ctx.returnTypes());
  }

  private processReturnTypes(ctx: ReturnTypesContext): string {
    console.log("Visiting ReturnTypes");
    const typeCtx = ctx.type();
    if (!ctx || !typeCtx) return "void";
    const type = typeCtx.getText();
    return type;
  }

  visitReturnStmt(ctx: ReturnStmtContext): void {
    console.log("Visiting ReturnStmt");
    const exprCtx = ctx.expr();
    if (exprCtx) {
      this.visitExpr(exprCtx);
      this.instrs[this.wc++] = reset();
    } else {
      this.instrs[this.wc++] = loadConstant(0);
      this.instrs[this.wc++] = reset();
    }
  }

  visitFnDeclareStmt(ctx: FnDeclareStmtContext): void {
    console.log("Visiting FnDeclareStmt");
    const identifier = ctx.IDENTIFIER();
    if (!identifier) throw new Error("Function declaration requires a name");
    const fnName = identifier.getText();

    // Store function location in table
    this.functionTable.set(fnName, this.wc + 2);

    const [paramTypes, paramNames] = this.processParamList(ctx.paramList());

    // Create new scope for function
    const oldScope = new Map(this.currentScope);
    this.currentScope.clear();

    // Add parameters to scope
    paramNames.forEach((param, index) => {
      this.currentScope.set(param, index);
    });

    const paramListCtx = ctx.paramList();
    const blockCtx = ctx.block();
    const returnTypeCtx = ctx.returnType();
    if (!identifier || !blockCtx) {
      throw new Error("Invalid function declaration");
    }

    const [types, names] = this.processParamList(paramListCtx);

    let returnType = "void";
    if (returnTypeCtx) {
      returnType = this.processReturnType(returnTypeCtx);
      // If return type is not provided, default to void
    }

    if (types.length !== names.length) {
      throw new Error(
        `Parameter types and names do not match: ${types.length} != ${names.length}`
      );
    }

    const gotoInstr: GOTO = jump(0); // 0 is a placeholder
    this.instrs[this.wc++] = gotoInstr;
    this.visitBlock(blockCtx);
    this.instrs[this.wc++] = loadConstant(0); // TODO: Add null as supported type and return it
    this.instrs[this.wc++] = reset();
    gotoInstr.addr = this.wc; // Set the address of the jump instruction to the current instruction count which is after the function body
    return;
  }

  visitFnCall(ctx: FnCallContext): void {
    console.log("Visiting FnCall");
    const fnName = ctx.IDENTIFIER().getText();
    const fnAddr = this.functionTable.get(fnName);
    if (fnAddr === undefined) {
      throw new Error(`Undefined function: ${fnName}`);
    }
    const args = ctx.argList()?.expr() || [];
    for (let i = args.length - 1; i >= 0; i--) {
      this.visitExpr(args[i]);
    }

    // Load function and call it
    this.instrs[this.wc++] = loadFunction(args.length, fnAddr);
    this.instrs[this.wc++] = call(args.length);
    return;
  }

  visitVectorExpr(ctx: VectorExprContext): void {
    console.log("Visiting VectorExpr");
    return;
  }

  visitVectorInit(ctx: VectorInitContext): void {
    console.log("Visiting VectorInit");
    return;
  }

  visitVectorType(ctx: VectorTypeContext): void {
    console.log("Visiting Type");
    return;
  }

  visitVectorAssignment(ctx: VectorAssignmentContext): void {
    console.log("Visiting VectorAssignment");
    return;
  }

  visitVectorIndexAccess(ctx: VectorIndexAccessContext): void {
    console.log("Visiting VectorIndexAccess");
    return;
  }

  visitVectorLen(ctx: VectorLenContext): void {
    console.log("Visiting VectorLen");
    return;
  }

  visitVectorPop(ctx: VectorPopContext): void {
    console.log("Visiting VectorPop");
    return;
  }

  visitVectorPush(ctx: VectorPushContext): void {
    console.log("Visiting VectorPush");
    return;
  }

  visitPrintlnArgs(ctx: PrintlnArgsContext): void {
    console.log("Visiting PrintlnArgs");
    return;
  }

  visitPrintlnMacro(ctx: PrintlnMacroContext): void {
    console.log("Visiting PrintlnMacro");
    return;
  }

  protected defaultResult(): void {
    return;
  }

  getCompiledInstructions(): readonly instruction[] {
    // Return readonly copy of the instructions
    return Object.freeze(this.instrs);
  }
}

export class RustLiteEvaluator extends BasicEvaluator {
  private executionCount: number;
  private visitor: RustLiteEvaluatorVisitor;

  constructor(conductor: IRunnerPlugin) {
    super(conductor);
    this.executionCount = 0;
    this.visitor = new RustLiteEvaluatorVisitor();
  }

  async evaluateChunk(chunk: string): Promise<void> {
    this.executionCount++;
    try {
      // Create the lexer and parser
      const inputStream = CharStream.fromString(chunk);
      const lexer = new RustLiteLexer(inputStream);
      const tokenStream = new CommonTokenStream(lexer);
      const parser = new RustLiteParser(tokenStream);
      parser.removeErrorListeners();
      parser.addErrorListener({
        syntaxError: (
          recognizer,
          offendingSymbol,
          line,
          charPositionInLine,
          msg
        ) => {
          this.conductor.sendOutput(
            `Syntax error at ${line}:${charPositionInLine} - ${msg}`
          );
        },
        reportAmbiguity() {},
        reportAttemptingFullContext() {},
        reportContextSensitivity() {},
      });
      lexer.removeErrorListeners();
      lexer.addErrorListener({
        syntaxError: (
          recognizer,
          offendingSymbol,
          line,
          charPositionInLine,
          msg
        ) => {
          this.conductor.sendOutput(
            `Lexer error at ${line}:${charPositionInLine} - ${msg}`
          );
        },
        reportAmbiguity() {},
        reportAttemptingFullContext() {},
        reportContextSensitivity() {},
      });
      // Parse the input
      const tree = parser.prog();

      // Evaluate the parsed tree
      this.visitor.visit(tree);
      const instructions = this.visitor.getCompiledInstructions();
      console.log("Compiled instructions:");
      instructions.forEach((instruction, index) => {
        console.log(`${index}:`, instruction);
      });

      // Create and run VM with instructions
      const vm = new RustLiteVirtualMachine([...instructions]);
      const result = vm.run();

      // Send both instructions and execution result to the REPL
      this.conductor.sendOutput(
        `Compiled instructions: ${JSON.stringify(instructions, null, 2)}\n` +
          `Execution result: ${result}`
      );
    } catch (error) {
      // Handle errors and send them to the REPL
      if (error instanceof Error) {
        this.conductor.sendOutput(`Error: ${error.message}`);
      } else {
        this.conductor.sendOutput(`Error: ${String(error)}`);
      }
    }
  }
}
