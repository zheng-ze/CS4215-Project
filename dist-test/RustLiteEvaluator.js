"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RustLiteEvaluator = void 0;
const antlr4ng_1 = require("antlr4ng");
const RustLiteParser_1 = require("./parser/src/RustLiteParser");
const RustLiteCompiler_1 = require("./RustLiteCompiler");
const runner_1 = require("conductor/dist/conductor/runner");
const RustLiteLexer_1 = require("./parser/src/RustLiteLexer");
const RustLiteVirtualMachine_1 = require("./RustLiteVirtualMachine");
class RustLiteEvaluatorVisitor extends antlr4ng_1.AbstractParseTreeVisitor {
    constructor() {
        super(...arguments);
        this.wc = 0;
        this.instrs = [];
        this.currentScope = new Map(); // Track variable offsets in current scope
        this.functionTable = new Map(); // Track function addresses
    }
    visitProg(ctx) {
        console.log(`Visiting Program, text parsed: ${ctx.getText()}`);
        let globalElements = ctx.globalElement();
        if (!globalElements) {
            return;
        }
        for (let i = 0; i < globalElements.length; i++) {
            try {
                if (!globalElements[i])
                    continue;
                console.log(`Statement: ${globalElements[i].getText()}`);
                this.visitGlobalElement(globalElements[i]);
            }
            catch (error) {
                throw `Error while visiting statement ${globalElements[i]}, with error: ${error}`;
            }
        }
        const compileTimePos = { first: 0, second: 0 }; // TODO: Get the compile time position of the main function
        if (!compileTimePos) {
            // No main function found nothing will execute so return undefined
            this.instrs = [
                (0, RustLiteCompiler_1.loadConstant)(0), // TODO: Add null as supported type and return it
            ];
        }
        // After processing all global elements, call main if it exists
        const mainAddr = this.functionTable.get("main");
        console.log(`address of main: ${mainAddr}`);
        if (mainAddr !== undefined) {
            this.instrs[this.wc++] = (0, RustLiteCompiler_1.loadFunction)(0, mainAddr); // Load the function
            this.instrs[this.wc++] = (0, RustLiteCompiler_1.call)(0); // Call main with 0 arguments
        }
        this.instrs[this.wc++] = (0, RustLiteCompiler_1.done)(); // End program execution
    }
    visitGlobalElement(ctx) {
        console.log("Visiting GlobalElement");
        if (ctx.fnDeclareStmt()) {
            return this.visitFnDeclareStmt(ctx.fnDeclareStmt());
        }
        // TODO: Check if there is a main function and call it if it exists
        throw new Error(`Unknown global element: ${ctx.getText()}`);
    }
    visitExpr(ctx) {
        console.log("Visiting Expr");
        const bool = ctx.BOOL();
        const int = ctx.INT();
        const identifier = ctx.IDENTIFIER();
        const vectorExprCtx = ctx.vectorExpr();
        const arithExprCtx = ctx.arithExpr();
        const logicExprCtx = ctx.logicExpr();
        const fnCallCtx = ctx.fnCall();
        const innerCtx = ctx._inner;
        if (innerCtx)
            return this.visitExpr(innerCtx);
        if (bool) {
            this.instrs[this.wc++] = (0, RustLiteCompiler_1.loadConstant)(bool.getText() === "true");
            return;
        }
        if (int) {
            this.instrs[this.wc++] = (0, RustLiteCompiler_1.loadConstant)(parseInt(int.getText()));
            return;
        }
        if (identifier) {
            const name = identifier.getText();
            const offset = this.currentScope.get(name);
            if (offset === undefined) {
                throw new Error(`Undefined variable: ${name}`);
            }
            this.instrs[this.wc++] = (0, RustLiteCompiler_1.load)(name);
            return;
        }
        if (arithExprCtx)
            return this.visitArithExpr(arithExprCtx);
        if (logicExprCtx)
            return this.visitLogicExpr(logicExprCtx);
        if (fnCallCtx)
            return this.visitFnCall(fnCallCtx);
        if (vectorExprCtx)
            return this.visitVectorExpr(vectorExprCtx);
    }
    visitArithExpr(ctx) {
        console.log("Visiting ArithExpr");
        const int = ctx.INT();
        const identifier = ctx.IDENTIFIER();
        const innerCtx = ctx._inner;
        const opText = ctx._op?.text;
        const leftCtx = ctx._left;
        const rightCtx = ctx._right;
        if (int) {
            this.instrs[this.wc++] = (0, RustLiteCompiler_1.loadConstant)(parseInt(int.getText()));
            return;
        }
        if (identifier) {
            // TODO: Implement retrieving variable value
            throw new Error(`Identifier not implemented: ${identifier.getText()}`);
        }
        if (innerCtx)
            return this.visitArithExpr(innerCtx);
        if (opText === "-" && !leftCtx && rightCtx) {
            // Unary minus
            this.visitArithExpr(rightCtx);
            this.instrs[this.wc++] = (0, RustLiteCompiler_1.unaryOperation)("-");
            return;
        }
        if (leftCtx && rightCtx && opText) {
            // Binary operation
            this.visitArithExpr(leftCtx);
            this.visitArithExpr(rightCtx);
            this.instrs[this.wc++] = (0, RustLiteCompiler_1.binaryOperation)(opText);
            return;
        }
    }
    visitLogicExpr(ctx) {
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
            this.instrs[this.wc++] = (0, RustLiteCompiler_1.loadConstant)(bool.getText() === "true");
            return;
        }
        if (identifier) {
            const name = identifier.getText();
            const offset = this.currentScope.get(name);
            if (offset === undefined) {
                throw new Error(`Undefined variable: ${name}`);
            }
            this.instrs[this.wc++] = (0, RustLiteCompiler_1.load)(name);
            return;
        }
        if (innerCtx)
            return this.visitLogicExpr(innerCtx);
        if (arithLeftCtx && arithRightCtx && opText) {
            // Comparison operation
            this.visitArithExpr(arithLeftCtx);
            this.visitArithExpr(arithRightCtx);
            this.instrs[this.wc++] = (0, RustLiteCompiler_1.binaryOperation)(opText);
            return;
        }
        if (opText === "!" && !leftCtx && rightCtx) {
            // Unary negation
            this.visitLogicExpr(rightCtx);
            this.instrs[this.wc++] = (0, RustLiteCompiler_1.unaryOperation)("!");
            return;
        }
        if (leftCtx && rightCtx && opText) {
            // Binary operation
            this.visitLogicExpr(leftCtx);
            this.visitLogicExpr(rightCtx);
            this.instrs[this.wc++] = (0, RustLiteCompiler_1.binaryOperation)(opText);
            return;
        }
    }
    visitStmt(ctx) {
        console.log("Visiting Stmt");
        const exprStmtCtx = ctx.exprStmt();
        const declareStmtCtx = ctx.declareStmt();
        const condStmtCtx = ctx.condStmt();
        const whileStmtCtx = ctx.whileStmt();
        const fnDeclareStmtCtx = ctx.fnDeclareStmt();
        const returnStmtCtx = ctx.returnStmt();
        const blockCtx = ctx.block();
        if (exprStmtCtx)
            return this.visitExprStmt(exprStmtCtx);
        if (declareStmtCtx)
            return this.visitDeclareStmt(declareStmtCtx);
        if (condStmtCtx)
            return this.visitCondStmt(condStmtCtx);
        if (whileStmtCtx)
            return this.visitWhileStmt(whileStmtCtx);
        if (fnDeclareStmtCtx)
            return this.visitFnDeclareStmt(fnDeclareStmtCtx);
        if (returnStmtCtx)
            return this.visitReturnStmt(returnStmtCtx);
        if (blockCtx)
            return this.visitBlock(blockCtx);
    }
    visitBlock(ctx) {
        console.log("Visiting Block");
        if (ctx.blockContent())
            return this.visitBlockContent(ctx.blockContent());
    }
    visitBlockContent(ctx) {
        // Save outer scope
        const outerScope = new Map(this.currentScope);
        console.log("Visiting BlockContent");
        const stmts = ctx.stmt();
        // TODO: Get num of locals from the context
        const [_, names] = this.scanForLocalVars(ctx);
        const numLocals = names.length;
        this.instrs[this.wc++] = (0, RustLiteCompiler_1.enterScope)(numLocals);
        for (let stmt of stmts) {
            if (!stmt)
                continue;
            try {
                console.log(`Statement: ${stmt.getText()}`);
                this.visitStmt(stmt);
            }
            catch (error) {
                throw `Error while visiting statement ${stmt.getText()}, with error: ${error}`;
            }
        }
        if (ctx._finalExpr) {
            this.visitExpr(ctx._finalExpr);
            this.instrs[this.wc++] = (0, RustLiteCompiler_1.reset)();
        }
        this.instrs[this.wc++] = (0, RustLiteCompiler_1.exitScope)();
        // Restore outer scope when exiting
        this.currentScope = outerScope;
    }
    scanForLocalVars(ctx) {
        console.log("Visiting BlockContent");
        const stmts = ctx.stmt();
        const types = [];
        const names = [];
        for (let stmt of stmts) {
            if (!stmt)
                continue;
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
    visitExprStmt(ctx) {
        console.log("Visiting ExprStmt");
        const exprCtx = ctx.expr();
        if (exprCtx)
            return this.visitExpr(exprCtx);
    }
    visitDeclareStmt(ctx) {
        console.log("Visiting DeclareStmt");
        const typeCtx = ctx.type();
        const isMutable = ctx.MUT() ? true : false;
        const name = ctx.IDENTIFIER()?.getText();
        if (!name)
            throw new Error("Variable declaration requires a name");
        // Add variable to current scope
        const offset = this.currentScope.size;
        this.currentScope.set(name, offset);
        const value = ctx.expr();
        if (value) {
            this.visitExpr(value);
        }
        else {
            // Default initialization
            this.instrs[this.wc++] = (0, RustLiteCompiler_1.loadConstant)(0);
        }
        this.instrs[this.wc++] = (0, RustLiteCompiler_1.assign)(name, false);
        return;
    }
    visitCondStmt(ctx) {
        console.log("Visiting CondStmt");
        return;
    }
    visitWhileStmt(ctx) {
        console.log("Visiting WhileStmt");
        return;
    }
    visitLoopControl(ctx) {
        console.log("Visiting LoopControl");
        return;
    }
    visitLoopControlStmt(ctx) {
        console.log("Visiting LoopControlStmt");
        return;
    }
    processParam(ctx) {
        const identifier = ctx.IDENTIFIER();
        const typeCtx = ctx.type();
        if (!typeCtx || !identifier)
            throw new Error("Invalid parameter");
        const type = typeCtx.getText();
        const name = identifier.getText();
        return [type, name];
    }
    processParamList(ctx) {
        console.log("Visiting ParamList");
        if (!ctx || ctx.param().length === 0)
            return [[], []];
        const types = [];
        const names = [];
        const params = ctx.param();
        for (let param of params) {
            if (!param)
                continue;
            const [type, name] = this.processParam(param);
            types.push(type);
            names.push(name);
        }
        return [types, names];
    }
    processReturnType(ctx) {
        console.log("Visiting ReturnType");
        if (!ctx || !ctx.returnTypes())
            return "void";
        return this.processReturnTypes(ctx.returnTypes());
    }
    processReturnTypes(ctx) {
        console.log("Visiting ReturnTypes");
        const typeCtx = ctx.type();
        if (!ctx || !typeCtx)
            return "void";
        const type = typeCtx.getText();
        return type;
    }
    visitReturnStmt(ctx) {
        console.log("Visiting ReturnStmt");
        const exprCtx = ctx.expr();
        if (exprCtx) {
            this.visitExpr(exprCtx);
            this.instrs[this.wc++] = (0, RustLiteCompiler_1.reset)();
        }
        else {
            this.instrs[this.wc++] = (0, RustLiteCompiler_1.loadConstant)(0);
            this.instrs[this.wc++] = (0, RustLiteCompiler_1.reset)();
        }
    }
    visitFnDeclareStmt(ctx) {
        console.log("Visiting FnDeclareStmt");
        const identifier = ctx.IDENTIFIER();
        if (!identifier)
            throw new Error("Function declaration requires a name");
        const fnName = identifier.getText();
        // Store function location in table
        this.functionTable.set(fnName, this.wc);
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
            throw new Error(`Parameter types and names do not match: ${types.length} != ${names.length}`);
        }
        this.instrs[this.wc++] = (0, RustLiteCompiler_1.loadFunction)(names.length, this.wc + 1); // this.wc + 1 is after goto instr
        const gotoInstr = (0, RustLiteCompiler_1.jump)(0); // 0 is a placeholder
        this.instrs[this.wc++] = gotoInstr;
        this.visitBlock(blockCtx);
        this.instrs[this.wc++] = (0, RustLiteCompiler_1.loadConstant)(0); // TODO: Add null as supported type and return it
        this.instrs[this.wc++] = (0, RustLiteCompiler_1.reset)();
        gotoInstr.addr = this.wc; // Set the address of the jump instruction to the current instruction count which is after the function body
        return;
    }
    visitFnCall(ctx) {
        console.log("Visiting FnCall");
        const fnName = ctx.IDENTIFIER().getText();
        const fnAddr = this.functionTable.get(fnName);
        if (fnAddr === undefined) {
            throw new Error(`Undefined function: ${fnName}`);
        }
        this.instrs[this.wc++] = (0, RustLiteCompiler_1.loadConstant)(fnAddr);
        const args = ctx.argList();
        if (args) {
            for (let arg of args.expr()) {
                if (!arg)
                    continue;
                this.visitExpr(arg);
            }
        }
        this.instrs[this.wc++] = (0, RustLiteCompiler_1.call)(args ? args.expr().length : 0);
        return;
    }
    visitVectorExpr(ctx) {
        console.log("Visiting VectorExpr");
        return;
    }
    visitVectorInit(ctx) {
        console.log("Visiting VectorInit");
        return;
    }
    visitVectorType(ctx) {
        console.log("Visiting Type");
        return;
    }
    visitVectorAssignment(ctx) {
        console.log("Visiting VectorAssignment");
        return;
    }
    visitVectorIndexAccess(ctx) {
        console.log("Visiting VectorIndexAccess");
        return;
    }
    visitVectorLen(ctx) {
        console.log("Visiting VectorLen");
        return;
    }
    visitVectorPop(ctx) {
        console.log("Visiting VectorPop");
        return;
    }
    visitVectorPush(ctx) {
        console.log("Visiting VectorPush");
        return;
    }
    visitPrintlnArgs(ctx) {
        console.log("Visiting PrintlnArgs");
        return;
    }
    visitPrintlnMacro(ctx) {
        console.log("Visiting PrintlnMacro");
        return;
    }
    defaultResult() {
        return;
    }
    getCompiledInstructions() {
        // Return readonly copy of the instructions
        return Object.freeze(this.instrs);
    }
}
class RustLiteEvaluator extends runner_1.BasicEvaluator {
    constructor(conductor) {
        super(conductor);
        this.executionCount = 0;
        this.visitor = new RustLiteEvaluatorVisitor();
    }
    async evaluateChunk(chunk) {
        this.executionCount++;
        try {
            // Create the lexer and parser
            const inputStream = antlr4ng_1.CharStream.fromString(chunk);
            const lexer = new RustLiteLexer_1.RustLiteLexer(inputStream);
            const tokenStream = new antlr4ng_1.CommonTokenStream(lexer);
            const parser = new RustLiteParser_1.RustLiteParser(tokenStream);
            parser.removeErrorListeners();
            parser.addErrorListener({
                syntaxError: (recognizer, offendingSymbol, line, charPositionInLine, msg) => {
                    this.conductor.sendOutput(`Syntax error at ${line}:${charPositionInLine} - ${msg}`);
                },
                reportAmbiguity() { },
                reportAttemptingFullContext() { },
                reportContextSensitivity() { },
            });
            lexer.removeErrorListeners();
            lexer.addErrorListener({
                syntaxError: (recognizer, offendingSymbol, line, charPositionInLine, msg) => {
                    this.conductor.sendOutput(`Lexer error at ${line}:${charPositionInLine} - ${msg}`);
                },
                reportAmbiguity() { },
                reportAttemptingFullContext() { },
                reportContextSensitivity() { },
            });
            // Parse the input
            const tree = parser.prog();
            // Evaluate the parsed tree
            this.visitor.visit(tree);
            const instructions = this.visitor.getCompiledInstructions();
            console.log("Compiled instructions:");
            console.log(instructions);
            // Create and run VM with instructions
            const vm = new RustLiteVirtualMachine_1.RustLiteVirtualMachine([...instructions]);
            // const result = vm.run();
            // // Send both instructions and execution result to the REPL
            // this.conductor.sendOutput(
            //   `Compiled instructions: ${JSON.stringify(instructions, null, 2)}\n` +
            //     `Execution result: ${result}`
            // );
        }
        catch (error) {
            // Handle errors and send them to the REPL
            if (error instanceof Error) {
                this.conductor.sendOutput(`Error: ${error.message}`);
            }
            else {
                this.conductor.sendOutput(`Error: ${String(error)}`);
            }
        }
    }
}
exports.RustLiteEvaluator = RustLiteEvaluator;
