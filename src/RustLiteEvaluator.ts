import {
  AbstractParseTreeVisitor,
  CharStream,
  CommonTokenStream,
} from "antlr4ng";
import {
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
  VectorExprContext,
  VectorIndexAccessContext,
  VectorInitContext,
  VectorLenContext,
  VectorTypeContext,
  WhileStmtContext,
} from "./parser/src/RustLiteParser";
import { GOTO, instruction, instruction_type } from "./RustLiteTypes";
import {
  allocate_vector,
  assign,
  binaryOperation,
  call,
  done,
  enterScope,
  exitScope,
  get_vector,
  jump,
  jumpIfFalse,
  load,
  loadConstant,
  loadFunction,
  pop,
  reset,
  set_vector,
  unaryOperation,
} from "./RustLiteCompiler";

import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { RustLiteLexer } from "./parser/src/RustLiteLexer";
import { RustLiteVirtualMachine } from "./RustLiteVirtualMachine";
import { RustLiteVisitor } from "./parser/src/RustLiteVisitor";

class RustLiteEvaluatorVisitor
  extends AbstractParseTreeVisitor<void>
  implements RustLiteVisitor<void>
{
  private wc: number = 0;
  private instrs: instruction[] = [];
  private scopeList: Array<Map<string, number>> = []; // Track variable offsets in current scope
  private functionTable: Map<string, number> = new Map(); // Track function addresses
  private functionScopeMap: Map<string, Map<string, number>> = new Map();

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
      // this.instrs[this.wc++] = call(0); // Call main with 0 arguments
      // Add a POP instruction to remove the return value from the stack
      // This prevents the VM from getting stuck in a loop
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

      let paramDetails = this.findParam(name);
      console.log(`Loading value of :${name} into top of stack`);
      this.instrs[this.wc++] = load(
        paramDetails.scopeLevel,
        paramDetails.offset
      );
      return;
    }

    if (arithExprCtx) return this.visitArithExpr(arithExprCtx);
    if (logicExprCtx) return this.visitLogicExpr(logicExprCtx);
    if (fnCallCtx) return this.visitFnCall(fnCallCtx);
    if (vectorExprCtx) return this.visitVectorExpr(vectorExprCtx);
  }

  findParam(name: string) {
    console.log(`Finding param: ${name}`);
    console.log(`Current Length of ScopeList: ${this.scopeList.length}`);
    console.log(this.scopeList[this.scopeList.length - 1]);
    for (let i = this.scopeList.length - 1; i >= 0; i--) {
      const currScope = this.scopeList[i];
      let offset = currScope.get(name);
      if (offset === undefined) {
        continue;
      } else {
        console.log(
          `Found Param: ${name}, Scope Level: ${i}, Offset: ${offset}`
        );
        return { scopeLevel: i, offset: offset };
      }
    }
    throw new Error(`Undefined variable: ${name}`);
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
      console.log(`Loading Constant: ${parseInt(int.getText())}`);
      this.instrs[this.wc++] = loadConstant(parseInt(int.getText()));
      return;
    }

    if (identifier) {
      const name = identifier.getText();

      let paramDetails = this.findParam(name);
      this.instrs[this.wc++] = load(
        paramDetails.scopeLevel,
        paramDetails.offset
      );
      return;
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

      let paramDetails = this.findParam(name);
      this.instrs[this.wc++] = load(
        paramDetails.scopeLevel,
        paramDetails.offset
      );
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
    const blockContentCtx = ctx.blockContent();
    if (blockContentCtx) return this.visitBlockContent(blockContentCtx);
  }

  visitFnBlock(ctx: BlockContext, fnName: string): void {
    console.log("Visiting FnBlock");
    const blockContentCtx = ctx.blockContent();
    if (blockContentCtx)
      return this.visitFnBlockContent(blockContentCtx, fnName);
  }

  visitBlockContent(ctx: BlockContentContext): void {
    console.log("Visiting BlockContent");
    // Save the scope
    const currentScope = new Map();
    if (currentScope == undefined) {
      throw Error("Error while creating new scope");
    }
    this.scopeList.push(currentScope);
    const stmts = ctx.stmt();

    // Find the number of local variables
    const [_, names] = this.scanForLocalVars(ctx);
    console.log(`Local variables: ${names.toString()}`);
    const numLocals = names.length;
    this.instrs[this.wc++] = enterScope();

    // Track if we've seen a return statement
    let hasReturn = false;
    console.log(`Number of statements: ${stmts.length}`);
    for (let stmt of stmts) {
      if (!stmt) continue;
      try {
        console.log(`Statement: ${stmt.getText()}`);

        // Check if this is a return statement
        if (stmt.returnStmt()) {
          hasReturn = true;
        }

        this.visitStmt(stmt);
      } catch (error) {
        throw `Error while visiting statement ${stmt.getText()}, with error: ${error}`;
      }
    }

    // Only add EXIT_SCOPE if there's no return statement
    // If there is a return, the RESET instruction will handle popping the frame
    if (!hasReturn) {
      this.instrs[this.wc++] = exitScope();
    }

    // Restore outer scope when exiting
    this.scopeList.pop();
  }

  private scanForLocalVars(ctx: BlockContentContext): [string[], string[]] {
    console.log("Scanning Local Vars");
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
        if (name) {
          types.push(type?.getText() ?? "unknown");
          names.push(name.getText());
        }
      }
      if (fnDeclareStmt) {
        const fnName = fnDeclareStmt.IDENTIFIER();
        const retType = fnDeclareStmt.returnType();
        if (fnName) {
          types.push(retType?.getText() ?? "void");
          names.push(fnName.getText());
        }
      }
    }
    return [types, names];
  }

  visitFnBlockContent(ctx: BlockContentContext, fnName: string): void {
    console.log("Visiting FnBlockContent");
    let currentScope = this.functionScopeMap.get(fnName);
    console.log(currentScope);
    if (currentScope == undefined) {
      throw Error("Error getting scope from functionScopeMap");
    }
    const prevScopeList = this.scopeList;
    this.scopeList = [currentScope];
    console.log(`Current Scope length: ${this.scopeList.length}`);

    const stmts = ctx.stmt();

    // Find the number of local variables
    const [_, names] = this.scanForLocalVars(ctx);
    // const numLocals = names.length;

    // Track if we've seen a return statement
    let hasReturn = false;

    for (let stmt of stmts) {
      if (!stmt) continue;
      try {
        console.log(`Statement: ${stmt.getText()}`);

        // Check if this is a return statement
        if (stmt.returnStmt()) {
          hasReturn = true;
        }

        this.visitStmt(stmt);
      } catch (error) {
        throw `Error while visiting statement ${stmt.getText()}, with error: ${error}`;
      }
    }
    this.scopeList = prevScopeList;
    this.scopeList.push(currentScope);
  }

  visitExprStmt(ctx: ExprStmtContext): void {
    console.log("Visiting ExprStmt");
    const exprCtx = ctx.expr();
    if (exprCtx) return this.visitExpr(exprCtx);
  }

  visitDeclareStmt(ctx: DeclareStmtContext): void {
    console.log(`Visiting DeclareStmt: ${ctx.getText()}`);
    const typeCtx = ctx.type();
    const name = ctx.IDENTIFIER()?.getText();
    if (!name) throw new Error("Variable declaration requires a name");

    // Add variable to current scope
    let currentScope = this.scopeList[this.scopeList.length - 1];
    const offset = currentScope.size;
    currentScope.set(name, offset);

    const value = ctx.expr();
    if (value) {
      this.visitExpr(value);
    } else {
      // Default initialization
      this.instrs[this.wc++] = loadConstant(0);
    }
    this.instrs[this.wc++] = assign();
    return;
  }

  visitCondStmt(ctx: CondStmtContext): void {
    console.log("Visiting CondStmt");
    const predicates = ctx.logicExpr();
    let jumps: GOTO[] = [];

    if (!predicates)
      throw new Error("Predicate is missing from conditional statement");

    for (let i = 0; i < predicates.length; i++) {
      const predicate = predicates[i];
      if (!predicate) continue;
      this.visitLogicExpr(predicate);
      const temp = jumpIfFalse(0);
      this.instrs[this.wc++] = temp;
      const block = ctx.block(i);
      if (!block)
        throw new Error("Block is missing from conditional statement");
      this.visitBlock(block);
      const jumpToEnd = jump(0);
      this.instrs[this.wc++] = jumpToEnd;
      jumps.push(jumpToEnd);
      temp.addr = this.wc;
    }

    const lastBlock = ctx.block(predicates.length);
    if (!lastBlock) throw new Error("Else block is missing");
    this.visitBlock(lastBlock);

    // Ensure that all the blocks return to the end of the conditional
    for (let i = 0; i < jumps.length; i++) {
      const jump = jumps[i];
      if (!jump) continue;
      jump.addr = this.wc + 1;
    }
    return;
  }

  visitWhileStmt(ctx: WhileStmtContext): void {
    console.log("Visiting WhileStmt");
    let start = this.wc;
    let expr = ctx.logicExpr();
    if (expr) this.visitLogicExpr(expr);
    let temp = jumpIfFalse(0);
    this.instrs[this.wc++] = temp;
    if (ctx.block()) this.visitBlock(ctx.block());
    this.instrs[this.wc++] = jump(start);
    temp.addr = this.wc + 1;
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
    } else {
      this.instrs[this.wc++] = loadConstant(0);
    }

    // Missing RESET instruction - this is critical!
    this.instrs[this.wc++] = reset();
  }

  visitFnDeclareStmt(ctx: FnDeclareStmtContext): void {
    console.log("Visiting FnDeclareStmt");
    const identifier = ctx.IDENTIFIER();
    if (!identifier) throw new Error("Function declaration requires a name");
    const fnName = identifier.getText();

    // Store function location in table
    this.functionTable.set(fnName, this.wc + 1); // +1 to skip the jump instruction

    const [paramTypes, paramNames] = this.processParamList(ctx.paramList());
    console.log(`Params: ${paramNames}`);

    const paramScope = new Map();
    for (let i = 0; i < paramNames.length; i++) {
      if (paramScope.has(paramNames[i])) {
        throw Error("Parameter name has already been declared");
      }
      paramScope.set(paramNames[i], i);
    }

    //Need to store the scope map seperately from the scopes because the function has not been visited yet
    this.functionScopeMap.set(fnName, paramScope);

    const gotoInstr: GOTO = jump(0);
    this.instrs[this.wc++] = gotoInstr;

    // Visit the function body
    const blockCtx = ctx.block();
    if (!blockCtx) throw new Error("Invalid function declaration");
    this.visitFnBlock(blockCtx, fnName);

    // Check if the last instruction is a RESET (return statement)
    // If not, add a default return with RESET
    const lastInstr = this.instrs[this.wc - 1];
    if (!lastInstr || lastInstr.type !== instruction_type.RESET) {
      // Add default return if none exists
      this.instrs[this.wc++] = loadConstant(0);
      this.instrs[this.wc++] = reset();
    }

    // Exit scope is needed but should come after the RESET in the VM execution
    this.instrs[this.wc++] = exitScope();

    gotoInstr.addr = this.wc;

    // Restore outer scope when exiting
    let functionScope = this.scopeList.pop();
    if (functionScope == undefined) {
      throw Error("Error while trying to retrieve function scope");
    }
    this.functionScopeMap.set(fnName, functionScope);
  }

  visitFnCall(ctx: FnCallContext): void {
    console.log(`Visiting FnCall: ${ctx.getText()}`);
    const fnName = ctx.IDENTIFIER().getText();
    const fnAddr = this.functionTable.get(fnName);
    if (!fnAddr) {
      throw new Error(`Undefined function: ${fnName}`);
    }
    const fnScope = this.functionScopeMap.get(fnName);
    if (!fnScope) {
      throw new Error("Undefined function scope");
    }
    const args = ctx.argList()?.expr() || [];
    console.log(`Calling function ${fnName} with ${args.length} arguments`);

    // Load arguments in reverse order
    for (let i = args.length - 1; i >= 0; i--) {
      if (!args[i]) continue;
      this.visitExpr(args[i]);
    }
    // Load function and call it
    this.instrs[this.wc++] = loadFunction(args.length, fnAddr);
    return;
  }

  visitVectorExpr(ctx: VectorExprContext): void {
    console.log("Visiting VectorExpr");
    const vectorIndexAccess = ctx.vectorIndexAccess();
    const vectorLen = ctx.vectorLen();
    const vectorInit = ctx.vectorInit();
    if (vectorIndexAccess)
      return this.visitVectorIndexAccess(vectorIndexAccess);
    if (vectorLen) return this.visitVectorLen(vectorLen);
    if (vectorInit) return this.visitVectorInit(vectorInit);
    return;
  }

  visitVectorInit(ctx: VectorInitContext): void {
    console.log("Visiting VectorInit");
    if (ctx.NEW()) {
      this.instrs[this.wc++] = allocate_vector(0);
      return;
    }
    if (ctx.vectorInitList()) {
      const vectorInitList = ctx.vectorInitList();
      const elements = vectorInitList?.expr();

      // TODO: Check if type of all elements is the same
      const length = elements?.length ?? 0;
      this.instrs[this.wc++] = allocate_vector(length);

      for (let i = 0; i < length; i++) {
        if (!elements || !elements[i]) continue;
        this.instrs[this.wc++] = loadConstant(i); // Push index
        this.visitExpr(elements[i]); // Push value
        this.instrs[this.wc++] = set_vector(); // Set value at index
      }
    }
    // Do not pop reference from stack so that it can be assigned
  }

  visitVectorType(ctx: VectorTypeContext): void {
    console.log("Visiting Type");
    return;
  }

  visitVectorIndexAccess(ctx: VectorIndexAccessContext): void {
    console.log("Visiting VectorIndexAccess");
    const vector = ctx.IDENTIFIER();
    const index = ctx.arithExpr();
    if (!vector || !index) {
      throw new Error("Invalid vector index access");
    }
    let vectorDetails = this.findParam(vector.toString());
    this.instrs[this.wc++] = load(
      vectorDetails.scopeLevel,
      vectorDetails.offset
    ); // Load vector reference
    this.visitArithExpr(index); // Load index
    this.instrs[this.wc++] = get_vector(); // Get value at index
    return;
  }

  visitVectorLen(ctx: VectorLenContext): void {
    console.log("Visiting VectorLen");
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
      console.log("=== Runnning Instructions in VM ===");
      const result = vm.run();

      // Send both instructions and execution result to the REPL
      this.conductor.sendOutput(`Execution result: ${result}`);
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
