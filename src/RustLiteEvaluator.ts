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
  SUPPORTED_TYPES,
  instruction,
  instruction_type,
} from "./RustLiteTypes";

import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { RustLiteLexer } from "./parser/src/RustLiteLexer";
import { RustLiteVisitor } from "./parser/src/RustLiteVisitor";
import { error } from "console";
import { stat } from "fs";

class RustLiteEvaluatorVisitor
  extends AbstractParseTreeVisitor<SUPPORTED_TYPES>
  implements RustLiteVisitor<SUPPORTED_TYPES>
{
  //TODO: Implement Visit Prog
  visitProg(ctx: ProgContext): SUPPORTED_TYPES {
    console.log(`Visiting Program, text parsed: ${ctx.getText()}`);
    let result: SUPPORTED_TYPES = 0;
    let globalElements = ctx.globalElement();
    if (!globalElements) {
      return 0;
    }
    for (let i = 0; i < globalElements.length; i++) {
      try {
        if (globalElements[i]) {
          console.log(`Statement: ${globalElements[i]}`);
          result = this.visitGlobalElement(globalElements[i]);
        }
      } catch (error) {
        throw `Error while visiting statement ${globalElements[i]}, with error: ${error}`;
      }
    }
    return result;
  }

  visitGlobalElement(ctx: GlobalElementContext): SUPPORTED_TYPES {
    console.log("Visiting GlobalElement");
    if (ctx.fnDeclareStmt()) {
      return this.visitFnDeclareStmt(ctx.fnDeclareStmt());
    }
    throw new Error(`Unknown global element: ${ctx.getText()}`);
  }

  visitExpr(ctx: ExprContext): SUPPORTED_TYPES {
    console.log("Visiting Expr");
    if (ctx._inner) {
      return this.visitExpr(ctx._inner);
    }
    if (ctx.BOOL()) {
      console.log("Visiting Expr: BOOL");
      return ctx.BOOL().getText() === "true";
    }
    if (ctx.INT()) {
      console.log("Visiting Expr: INT");
      return parseInt(ctx.INT().getText());
    }
    if (ctx.IDENTIFIER()) {
      console.log("Visiting Expr: IDENTIFIER");
      // TODO: Implement retrieving variable value
      return 0;
    }
    if (ctx.arithExpr()) {
      return this.visitArithExpr(ctx.arithExpr());
    }
    if (ctx.logicExpr()) {
      return this.visitLogicExpr(ctx.logicExpr());
    }
    if (ctx.fnCall()) {
      // Struct field access
      const fnCall = ctx.fnCall();
      const result = this.visitFnCall(fnCall);
      return result;
    }
  }

  visitArithExpr(ctx: ArithExprContext): number {
    console.log("Visiting ArithExpr");
    if (ctx.INT()) {
      // Is integer
      return parseInt(ctx.INT().getText());
    }

    if (ctx.IDENTIFIER()) {
      // Is variable
      const variableName = ctx.IDENTIFIER().getText();
      return 0; //TODO: Implement retrieving variable value
    }

    if (ctx._inner) {
      return this.visitArithExpr(ctx._inner);
    }

    if (ctx._op && ctx._op.text === "-" && !ctx._left) {
      // Unary minus
      const right = this.visitArithExpr(ctx._right);
      return -right;
    }

    if (ctx._left && ctx._right && ctx._op) {
      // Binary operation
      const left = this.visitArithExpr(ctx._left);
      const right = this.visitArithExpr(ctx._right);

      switch (ctx._op.text) {
        case "+":
          return left + right;
        case "-":
          return left - right;
        case "*":
          return left * right;
        case "/":
          if (right === 0) {
            throw new Error("Division by zero");
          }
          return Math.trunc(left / right); // Integer division
        // TODO: Implement other operators like % and ^
        default:
          throw new Error(`Unknown operator: ${ctx._op.text}`);
      }
    }

    // throw new Error(`Invalid expression: ${ctx.getText()}`);
  }

  visitLogicExpr(ctx: LogicExprContext): boolean {
    console.log("Visiting LogicExpr");
    if (ctx.BOOL()) {
      return ctx.BOOL().getText() === "true";
    }

    if (ctx.IDENTIFIER()) {
      // Is variable
      const variableName = ctx.IDENTIFIER().getText();
      return false; //TODO: Implement retrieving variable value
    }

    if (ctx._inner) {
      return this.visitLogicExpr(ctx._inner);
    }

    if (ctx._arithLeft && ctx._arithRight && ctx._op) {
      // Comparison operation
      const left = this.visitArithExpr(ctx._arithLeft);
      const right = this.visitArithExpr(ctx._arithRight);

      switch (ctx._op.text) {
        case "==":
          return left === right;
        case "!=":
          return left !== right;
        case "<":
          return left < right;
        case "<=":
          return left <= right;
        case ">":
          return left > right;
        case ">=":
          return left >= right;
        default:
          throw new Error(`Unknown operator: ${ctx._op.text}`);
      }
    }

    if (ctx._op && ctx._op.text === "!" && !ctx._left) {
      // Unary negation
      const right = this.visitLogicExpr(ctx._right);
      return !right;
    }

    if (ctx._left && ctx._right && ctx._op) {
      // Binary operation
      const left = this.visitLogicExpr(ctx._left);
      const right = this.visitLogicExpr(ctx._right);

      switch (ctx._op.text) {
        case "&&":
          return left && right;
        case "||":
          return left || right;
        default:
          throw new Error(`Unknown operator: ${ctx._op.text}`);
      }
    }

    // throw new Error(`Invalid expression: ${ctx.getText()}`);
  }

  visitStmt(ctx: StmtContext): SUPPORTED_TYPES {
    console.log("Visiting Stmt");
    if (ctx.exprStmt()) {
      return this.visitExprStmt(ctx.exprStmt());
    }
    if (ctx.declareStmt()) {
      return this.visitDeclareStmt(ctx.declareStmt());
    }
    if (ctx.condStmt()) {
      return this.visitCondStmt(ctx.condStmt());
    }
    if (ctx.whileStmt()) {
      return this.visitWhileStmt(ctx.whileStmt());
    }
    if (ctx.fnDeclareStmt()) {
      return this.visitFnDeclareStmt(ctx.fnDeclareStmt());
    }
    if (ctx.returnStmt()) {
      return this.visitReturnStmt(ctx.returnStmt());
    }
    if (ctx.block()) {
      return this.visitBlock(ctx.block());
    }
  }

  visitBlock(ctx: BlockContext): SUPPORTED_TYPES {
    console.log("Visiting Block");
    return this.visitBlockContent(ctx.blockContent());
  }

  visitBlockContent(ctx: BlockContentContext): SUPPORTED_TYPES {
    console.log("Visiting BlockContent");
    let result: SUPPORTED_TYPES;
    const stmts = ctx.stmt();

    for (let i = 0; i < stmts.length; i++) {
      try {
        if (stmts[i]) {
          console.log(`Statement: ${stmts[i]}`);
          result = this.visitStmt(stmts[i]);
        }
      } catch (error) {
        throw `Error while visiting statement ${stmts[i]}, with error: ${error}`;
      }
    }
    if (ctx._finalExpr) {
      result = this.visitExpr(ctx._finalExpr);
    }
    return result;
  }

  visitExprStmt(ctx: ExprStmtContext): SUPPORTED_TYPES {
    console.log("Visiting ExprStmt");
    return this.visit(ctx.expr());
  }

  visitDeclareStmt(ctx: DeclareStmtContext): SUPPORTED_TYPES {
    console.log("Visiting DeclareStmt");
    return 0;
  }

  visitCondStmt(ctx: CondStmtContext): SUPPORTED_TYPES {
    console.log("Visiting CondStmt");
    return 0;
  }

  visitWhileStmt(ctx: WhileStmtContext): SUPPORTED_TYPES {
    console.log("Visiting WhileStmt");
    return 0;
  }

  visitLoopControl(ctx: LoopControlContext): SUPPORTED_TYPES {
    console.log("Visiting LoopControl");
    return 0;
  }

  visitLoopControlStmt(ctx: LoopControlStmtContext): SUPPORTED_TYPES {
    console.log("Visiting LoopControlStmt");
    return 0;
  }

  visitParam(ctx: ParamContext): SUPPORTED_TYPES {
    console.log("Visiting Param");
    return 0;
  }

  visitParamList(ctx: ParamListContext): SUPPORTED_TYPES {
    console.log("Visiting ParamList");
    return 0;
  }

  visitReturnType(ctx: ReturnTypeContext): SUPPORTED_TYPES {
    console.log("Visiting ReturnType");
    return 0;
  }

  visitReturnStmt(ctx: ReturnStmtContext): SUPPORTED_TYPES {
    console.log("Visiting ReturnStmt");
    return 0;
  }

  visitFnDeclareStmt(ctx: FnDeclareStmtContext): SUPPORTED_TYPES {
    this.visitParamList(ctx.paramList());
    this.visitReturnType(ctx.returnType());
    console.log("Visiting FnDeclareStmt");
    this.visitBlock(ctx.block());
    return 0;
  }

  visitReturnTypes(ctx: ReturnTypesContext): SUPPORTED_TYPES {
    console.log("Visiting ReturnTypes");
    return 0;
  }

  visitFnCall(ctx: FnCallContext): SUPPORTED_TYPES {
    console.log("Visiting FnCall");
    return 0;
  }

  visitArgList(ctx: ArgListContext): SUPPORTED_TYPES {
    console.log("Visiting ArgList");
    return 0;
  }

  visitVectorExpr(ctx: VectorExprContext): SUPPORTED_TYPES {
    console.log("Visiting VectorExpr");
    return 0;
  }

  visitVectorInit(ctx: VectorInitContext): SUPPORTED_TYPES {
    console.log("Visiting VectorInit");
    return 0;
  }

  visitVectorType(ctx: VectorTypeContext): SUPPORTED_TYPES {
    console.log("Visiting Type");
    return 0;
  }

  visitVectorAssignment(ctx: VectorAssignmentContext): SUPPORTED_TYPES {
    console.log("Visiting VectorAssignment");
    return 0;
  }

  visitVectorIndexAccess(ctx: VectorIndexAccessContext): SUPPORTED_TYPES {
    console.log("Visiting VectorIndexAccess");
    return 0;
  }

  visitVectorLen(ctx: VectorLenContext): SUPPORTED_TYPES {
    console.log("Visiting VectorLen");
    return 0;
  }

  visitVectorPop(ctx: VectorPopContext): SUPPORTED_TYPES {
    console.log("Visiting VectorPop");
    return 0;
  }

  visitVectorPush(ctx: VectorPushContext): SUPPORTED_TYPES {
    console.log("Visiting VectorPush");
    return 0;
  }

  visitPrintlnArgs(ctx: PrintlnArgsContext): SUPPORTED_TYPES {
    console.log("Visiting PrintlnArgs");
    return 0;
  }

  visitPrintlnMacro(ctx: PrintlnMacroContext): SUPPORTED_TYPES {
    console.log("Visiting PrintlnMacro");
    return 0;
  }

  protected defaultResult(): SUPPORTED_TYPES {
    return 0;
  }

  // Override the aggregate result method
  protected aggregateResult(
    aggregate: SUPPORTED_TYPES,
    nextResult: SUPPORTED_TYPES
  ): SUPPORTED_TYPES {
    return nextResult;
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
      const result = this.visitor.visit(tree);

      // Send the result to the REPL
      this.conductor.sendOutput(`Result of expression: ${result}`);
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
