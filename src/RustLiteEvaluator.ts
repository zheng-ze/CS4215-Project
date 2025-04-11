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
import { error } from "console";
import { stat } from "fs";

class RustLiteEvaluatorVisitor
  extends AbstractParseTreeVisitor<void>
  implements RustLiteVisitor<void>
{
  private wc: number = 0;
  private instrs: instruction[] = [];

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
    if (ctx._inner) return this.visitExpr(ctx._inner);
    if (ctx.BOOL()) {
      this.instrs[this.wc++] = loadConstant(ctx.BOOL().getText() === "true");
      return;
    }
    if (ctx.INT()) {
      this.instrs[this.wc++] = loadConstant(parseInt(ctx.INT().getText()));
      return;
    }
    if (ctx.IDENTIFIER()) {
      // TODO: Implement retrieving variable value
      throw new Error(
        `Identifier not implemented: ${ctx.IDENTIFIER().getText()}`
      );
    }
    if (ctx.arithExpr()) return this.visitArithExpr(ctx.arithExpr());
    if (ctx.logicExpr()) return this.visitLogicExpr(ctx.logicExpr());
    if (ctx.fnCall()) return this.visitFnCall(ctx.fnCall());
  }

  visitArithExpr(ctx: ArithExprContext): void {
    console.log("Visiting ArithExpr");
    if (ctx.INT()) {
      this.instrs[this.wc++] = loadConstant(parseInt(ctx.INT().getText()));
      return;
    }

    if (ctx.IDENTIFIER()) {
      // TODO: Implement retrieving variable value
      throw new Error(
        `Identifier not implemented: ${ctx.IDENTIFIER().getText()}`
      );
    }

    if (ctx._inner) return this.visitArithExpr(ctx._inner);

    if (ctx._op && ctx._op.text === "-" && !ctx._left && ctx.arithExpr()) {
      // Unary minus
      const right = ctx.arithExpr();
      for (let expr of right) {
        this.visitArithExpr(expr);
      }
      this.instrs[this.wc++] = unaryOperation("-");
      return;
    }

    if (ctx._left && ctx._right && ctx._op) {
      // Binary operation
      this.visitArithExpr(ctx._left);
      this.visitArithExpr(ctx._right);
      this.instrs[this.wc++] = binaryOperation(ctx._op.text);
      return;
    }
  }

  visitLogicExpr(ctx: LogicExprContext): void {
    console.log("Visiting LogicExpr");
    if (ctx.BOOL()) {
      this.instrs[this.wc++] = loadConstant(ctx.BOOL().getText() === "true");
      return;
    }

    if (ctx.IDENTIFIER()) {
      // TODO: Implement retrieving variable value
      throw new Error(
        `Identifier not implemented: ${ctx.IDENTIFIER().getText()}`
      );
    }

    if (ctx._inner) return this.visitLogicExpr(ctx._inner);

    if (ctx._arithLeft && ctx._arithRight && ctx._op) {
      // Comparison operation
      this.visitArithExpr(ctx._arithLeft);
      this.visitArithExpr(ctx._arithRight);
      this.instrs[this.wc++] = binaryOperation(ctx._op.text);
      return;
    }

    if (ctx._op && ctx._op.text === "!" && !ctx._left) {
      // Unary negation
      this.visitLogicExpr(ctx._right);
      this.instrs[this.wc++] = unaryOperation("!");
      return;
    }

    if (ctx._left && ctx._right && ctx._op) {
      // Binary operation
      this.visitLogicExpr(ctx._left);
      this.visitLogicExpr(ctx._right);
      this.instrs[this.wc++] = binaryOperation(ctx._op.text);
      return;
    }
  }

  visitStmt(ctx: StmtContext): void {
    console.log("Visiting Stmt");
    if (ctx.exprStmt()) return this.visitExprStmt(ctx.exprStmt());
    if (ctx.declareStmt()) return this.visitDeclareStmt(ctx.declareStmt());
    if (ctx.condStmt()) return this.visitCondStmt(ctx.condStmt());
    if (ctx.whileStmt()) return this.visitWhileStmt(ctx.whileStmt());
    if (ctx.fnDeclareStmt())
      return this.visitFnDeclareStmt(ctx.fnDeclareStmt());
    if (ctx.returnStmt()) return this.visitReturnStmt(ctx.returnStmt());
    if (ctx.block()) return this.visitBlock(ctx.block());
  }

  visitBlock(ctx: BlockContext): void {
    console.log("Visiting Block");
    if (ctx.blockContent()) return this.visitBlockContent(ctx.blockContent());
  }

  visitBlockContent(ctx: BlockContentContext): void {
    console.log("Visiting BlockContent");
    const stmts = ctx.stmt();

    for (let stmt of stmts) {
      if (!stmt) continue;
      try {
        console.log(`Statement: ${stmt.getText()}`);
        this.visitStmt(stmt);
      } catch (error) {
        throw `Error while visiting statement ${stmt.getText()}, with error: ${error}`;
      }
    }
    if (ctx._finalExpr) {
      this.visitExpr(ctx._finalExpr);
    }
  }

  visitExprStmt(ctx: ExprStmtContext): void {
    console.log("Visiting ExprStmt");
    if (ctx.expr()) return this.visit(ctx.expr());
  }

  visitDeclareStmt(ctx: DeclareStmtContext): void {
    console.log("Visiting DeclareStmt");
    const type = ctx.type(); // TODO: Do type checking if have time
    const isMutable = ctx.MUT() ? true : false;
    const name = ctx.IDENTIFIER().getText();
    const value = ctx.expr();
    if (value) this.visitExpr(value);
    // TODO: Properly determine compile time env position
    this.instrs[this.wc++] = assign({ first: 0, second: 0 });
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
    if (!ctx.type() || !ctx.IDENTIFIER()) {
      throw new Error("Invalid parameter");
    }
    const type = ctx.type().getText();
    const name = ctx.IDENTIFIER().getText();

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
    if (!ctx || !ctx.type()) return "void";
    const type = ctx.type().getText();
    return type;
  }

  visitReturnStmt(ctx: ReturnStmtContext): void {
    console.log("Visiting ReturnStmt");
    if (ctx.expr()) return this.visitExpr(ctx.expr());
  }

  visitFnDeclareStmt(ctx: FnDeclareStmtContext): void {
    console.log("Visiting FnDeclareStmt");
    const [types, names] = this.processParamList(ctx.paramList());
    const returnType = this.processReturnType(ctx.returnType());

    if (types.length !== names.length) {
      throw new Error(
        `Parameter types and names do not match: ${types.length} != ${names.length}`
      );
    }

    this.instrs[this.wc++] = loadFunction(this.wc + 1, names.length); // this.wc + 1 is after goto instr
    const gotoInstr: GOTO = jump(0); // 0 is a placeholder
    this.instrs[this.wc++] = gotoInstr;
    this.visitBlock(ctx.block());
    this.instrs[this.wc++] = loadConstant(0); // TODO: Add null as supported type and return it
    this.instrs[this.wc++] = reset();
    gotoInstr.addr = this.wc; // Set the address of the jump instruction to the current instruction count which is after the function body
    return;
  }

  visitFnCall(ctx: FnCallContext): void {
    console.log("Visiting FnCall");
    const fnName = ctx.IDENTIFIER().getText();
    const compileTimePos = { first: 0, second: 0 }; // TODO: Get the compile time position of the function
    this.instrs[this.wc++] = load(compileTimePos); // TODO: Add function address
    const args = ctx.argList();
    if (args) {
      for (let arg of args.expr()) {
        if (!arg) continue;
        this.visitExpr(arg); // Loads arguments onto the stack
      }
    }
    this.instrs[this.wc++] = call(args ? args.expr().length : 0);
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
      console.log("Compiled instructions:");
      console.log(this.visitor.getCompiledInstructions());

      // Send the result to the REPL
      this.conductor.sendOutput(
        `Result of expression: ${this.visitor.getCompiledInstructions()}`
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
