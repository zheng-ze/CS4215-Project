import {
  ArithExprContext,
  BlockContentContext,
  BlockContext,
  DeclareStmtContext,
  ExprContext,
  ExprStmtContext,
  FnCallContext,
  FnDeclareStmtContext,
  GlobalElementContext,
  LogicExprContext,
  ParamListContext,
  PrintlnMacroContext,
  ProgContext,
  StmtContext,
  VectorExprContext,
  VectorIndexAccessContext,
  VectorLenContext,
} from "./parser/src/RustLiteParser";

// TODO: improve error messages

export class RustLiteBorrowChecker {
  private referenceTypes: Map<string, boolean>[];
  private scopeDepth: number;

  constructor() {
    this.referenceTypes = [new Map<string, boolean>()];
    this.scopeDepth = 0;
    this.referenceTypes.push(new Map());
  }

  visitProg(ctx: ProgContext): void {
    for (const element of ctx.globalElement()) {
      this.visitGlobalElement(element);
    }
  }

  visitGlobalElement(ctx: GlobalElementContext): void {
    const fnDeclareCtx = ctx.fnDeclareStmt();
    if (fnDeclareCtx) {
      this.visitFnDeclareStmt(ctx.fnDeclareStmt());
    }
  }

  visitFnDeclareStmt(ctx: FnDeclareStmtContext): void {
    const params = ctx.paramList() ?? undefined;
    const blockCtx = ctx.block();
    if (blockCtx) {
      this.visitBlock(ctx.block(), params);
    }
  }

  visitBlock(ctx: BlockContext, params?: ParamListContext): void {
    const blockContentCtx = ctx.blockContent();
    if (blockContentCtx) {
      this.visitBlockContent(blockContentCtx, params);
    }
  }

  visitBlockContent(ctx: BlockContentContext, params?: ParamListContext): void {
    const stmts = ctx.stmt();
    const newScope = new Map(this.referenceTypes[this.scopeDepth - 1]);
    this.referenceTypes.push(newScope);
    this.scopeDepth++;

    if (params) {
      for (const param of params.param()) {
        const paramName = param.IDENTIFIER().getText();
        const paramTypeCtx = param.type();
        if (!paramTypeCtx) throw new Error("Parameter type is invalid");
        const paramType = paramTypeCtx.getText();
        if (paramType == "vec") {
          this.referenceTypes[this.scopeDepth - 1].set(paramName, false);
        }
      }
    }

    for (let stmt of stmts) {
      if (!stmt) continue;
      this.visitStmt(stmt);
    }
    this.scopeDepth--;
    this.referenceTypes.pop();
  }

  visitStmt(ctx: StmtContext): void {
    const declareStatement = ctx.declareStmt();
    if (declareStatement) return this.visitDeclareStmt(declareStatement);
    const exprStatement = ctx.exprStmt();
    if (exprStatement) return this.visitExprStmt(exprStatement);
    const fnDeclareStmt = ctx.fnDeclareStmt();
    if (fnDeclareStmt) return this.visitFnDeclareStmt(fnDeclareStmt);
    const printLn = ctx.printlnMacro();
    if (printLn) return this.visitPrintLn(printLn);
  }

  visitDeclareStmt(ctx: DeclareStmtContext): void {
    const varNameCtx = ctx.IDENTIFIER();
    if (!varNameCtx) throw new Error("Variable name is invalid");
    const varName = varNameCtx.getText();
    const expr = ctx.expr();
    // if it is an identifier, we need to check if it is moved
    if (!expr) throw new Error("Expression is invalid");
    const exprNameCtx = expr.IDENTIFIER();
    if (exprNameCtx) {
      if (!this.referenceTypes[this.scopeDepth - 1].has(varName)) {
        const identifier = exprNameCtx.getText();
        const hasMoved =
          this.referenceTypes[this.scopeDepth - 1].get(identifier);
        if (hasMoved) {
          throw new Error(`Use of moved value ${identifier}`);
        }
        // mark the lhs as moved
        this.referenceTypes[this.scopeDepth - 1].set(identifier, true);
        // mark the rhs as not moved
        this.referenceTypes[this.scopeDepth - 1].set(varName, false);
      }
    } else if (expr.vectorExpr()) {
      this.referenceTypes[this.scopeDepth - 1].set(varName, false);
    } else if (this.referenceTypes[this.scopeDepth - 1].has(varName)) {
      this.referenceTypes[this.scopeDepth - 1].delete(varName);
    }
  }

  visitExprStmt(ctx: ExprStmtContext): void {
    const expr = ctx.expr();
    if (expr) return this.visitExpr(expr);
  }

  visitExpr(ctx: ExprContext): void {
    const fnCallCtx = ctx.fnCall();
    if (fnCallCtx) return this.visitFnCall(fnCallCtx);
    const logicExprCtx = ctx.logicExpr();
    if (logicExprCtx) return this.visitLogicExpr(logicExprCtx);
    const arithExprCtx = ctx.arithExpr();
    if (arithExprCtx) return this.visitArithExpr(arithExprCtx);
    const vectorExprCtx = ctx.vectorExpr();
    if (vectorExprCtx) return this.visitVectorExpr(vectorExprCtx);
  }

  visitLogicExpr(ctx: LogicExprContext): void {
    const fnCallCtx = ctx.fnCall();
    if (fnCallCtx) return this.visitFnCall(fnCallCtx);
  }

  visitArithExpr(ctx: ArithExprContext): void {
    const fnCallCtx = ctx.fnCall();
    if (fnCallCtx) return this.visitFnCall(fnCallCtx);
  }

  visitFnCall(ctx: FnCallContext): void {
    const args = ctx.argList();
    if (!args) return;
    for (const arg of args.expr()) {
      const argNameCtx = arg.IDENTIFIER();
      if (!argNameCtx) throw new Error("Argument name is invalid");
      const argName = argNameCtx.getText();
      if (this.referenceTypes[this.scopeDepth - 1].has(argName)) {
        const hasMoved = this.referenceTypes[this.scopeDepth - 1].get(argName);
        if (hasMoved) {
          throw new Error(`Use of moved value ${argName}`);
        }
        this.referenceTypes[this.scopeDepth - 1].set(argName, true);
      }
    }
  }

  visitPrintLn(ctx: PrintlnMacroContext): void {
    const args = ctx.printlnArgs();
    if (!args) return;
    const expressions = args.expr();

    for (const expr of expressions) {
      this.visitExpr(expr);
    }
  }

  visitVectorExpr(ctx: VectorExprContext): void {
    const vectorLenCtx = ctx.vectorLen();
    if (vectorLenCtx) return this.visitVectorLen(vectorLenCtx);
    const vectorIndexAccessCtx = ctx.vectorIndexAccess();
    if (vectorIndexAccessCtx)
      return this.visitVectorIndexAccess(vectorIndexAccessCtx);
  }

  visitVectorLen(ctx: VectorLenContext): void {
    const identifier = ctx.IDENTIFIER();
    if (!identifier) throw new Error("Argument name is invalid");
    const name = identifier.getText();
    if (this.referenceTypes[this.scopeDepth - 1].has(name)) {
      const hasMoved = this.referenceTypes[this.scopeDepth - 1].get(name);
      if (hasMoved) {
        throw new Error(`Borrow of moved value ${name}`);
      }
    }
  }

  visitVectorIndexAccess(ctx: VectorIndexAccessContext): void {
    const identifier = ctx.IDENTIFIER();
    if (!identifier) throw new Error("Argument name is invalid");
    const name = identifier.getText();
    if (this.referenceTypes[this.scopeDepth - 1].has(name)) {
      const hasMoved = this.referenceTypes[this.scopeDepth - 1].get(name);
      if (hasMoved) {
        throw new Error(`Borrow of moved value ${name}`);
      }
    }
  }

  getParamTypes(ctx: ParamListContext): string[] {
    const paramTypes: string[] = [];
    for (const param of ctx.param()) {
      const paramTypeCtx = param.type();
      if (!paramTypeCtx) throw new Error("Parameter type is invalid");
      const paramType = paramTypeCtx.getText();
      if (paramType) {
        paramTypes.push(paramType);
      }
    }
    return paramTypes;
  }

  check(ctx: ProgContext) {
    return this.visitProg(ctx);
  }
}
