"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RustLiteEvaluator = void 0;
const antlr4ng_1 = require("antlr4ng");
const RustLiteParser_1 = require("./parser/src/RustLiteParser");
const RustLiteCompiler_1 = require("./RustLiteCompiler");
const runner_1 = require("conductor/dist/conductor/runner");
const RustLiteLexer_1 = require("./parser/src/RustLiteLexer");
class RustLiteEvaluatorVisitor extends antlr4ng_1.AbstractParseTreeVisitor {
    constructor() {
        super(...arguments);
        this.wc = 0;
        this.instrs = [];
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
        if (ctx._inner)
            return this.visitExpr(ctx._inner);
        if (ctx.BOOL()) {
            this.instrs[this.wc++] = (0, RustLiteCompiler_1.loadConstant)(ctx.BOOL().getText() === "true");
            return;
        }
        if (ctx.INT()) {
            this.instrs[this.wc++] = (0, RustLiteCompiler_1.loadConstant)(parseInt(ctx.INT().getText()));
            return;
        }
        if (ctx.IDENTIFIER()) {
            // TODO: Implement retrieving variable value
            throw new Error(`Identifier not implemented: ${ctx.IDENTIFIER().getText()}`);
        }
        if (ctx.arithExpr())
            return this.visitArithExpr(ctx.arithExpr());
        if (ctx.logicExpr())
            return this.visitLogicExpr(ctx.logicExpr());
        if (ctx.fnCall())
            return this.visitFnCall(ctx.fnCall());
    }
    visitArithExpr(ctx) {
        console.log("Visiting ArithExpr");
        if (ctx.INT()) {
            this.instrs[this.wc++] = (0, RustLiteCompiler_1.loadConstant)(parseInt(ctx.INT().getText()));
            return;
        }
        if (ctx.IDENTIFIER()) {
            // TODO: Implement retrieving variable value
            throw new Error(`Identifier not implemented: ${ctx.IDENTIFIER().getText()}`);
        }
        if (ctx._inner)
            return this.visitArithExpr(ctx._inner);
        if (ctx._op && ctx._op.text === "-" && !ctx._left && ctx.arithExpr()) {
            // Unary minus
            const right = ctx.arithExpr();
            for (let expr of right) {
                this.visitArithExpr(expr);
            }
            this.instrs[this.wc++] = (0, RustLiteCompiler_1.unaryOperation)("-");
            return;
        }
        if (ctx._left && ctx._right && ctx._op) {
            // Binary operation
            this.visitArithExpr(ctx._left);
            this.visitArithExpr(ctx._right);
            this.instrs[this.wc++] = (0, RustLiteCompiler_1.binaryOperation)(ctx._op.text);
            return;
        }
    }
    visitLogicExpr(ctx) {
        console.log("Visiting LogicExpr");
        if (ctx.BOOL()) {
            this.instrs[this.wc++] = (0, RustLiteCompiler_1.loadConstant)(ctx.BOOL().getText() === "true");
            return;
        }
        if (ctx.IDENTIFIER()) {
            // TODO: Implement retrieving variable value
            throw new Error(`Identifier not implemented: ${ctx.IDENTIFIER().getText()}`);
        }
        if (ctx._inner)
            return this.visitLogicExpr(ctx._inner);
        if (ctx._arithLeft && ctx._arithRight && ctx._op) {
            // Comparison operation
            this.visitArithExpr(ctx._arithLeft);
            this.visitArithExpr(ctx._arithRight);
            this.instrs[this.wc++] = (0, RustLiteCompiler_1.binaryOperation)(ctx._op.text);
            return;
        }
        if (ctx._op && ctx._op.text === "!" && !ctx._left) {
            // Unary negation
            this.visitLogicExpr(ctx._right);
            this.instrs[this.wc++] = (0, RustLiteCompiler_1.unaryOperation)("!");
            return;
        }
        if (ctx._left && ctx._right && ctx._op) {
            // Binary operation
            this.visitLogicExpr(ctx._left);
            this.visitLogicExpr(ctx._right);
            this.instrs[this.wc++] = (0, RustLiteCompiler_1.binaryOperation)(ctx._op.text);
            return;
        }
    }
    visitStmt(ctx) {
        console.log("Visiting Stmt");
        if (ctx.exprStmt())
            return this.visitExprStmt(ctx.exprStmt());
        if (ctx.declareStmt())
            return this.visitDeclareStmt(ctx.declareStmt());
        if (ctx.condStmt())
            return this.visitCondStmt(ctx.condStmt());
        if (ctx.whileStmt())
            return this.visitWhileStmt(ctx.whileStmt());
        if (ctx.fnDeclareStmt())
            return this.visitFnDeclareStmt(ctx.fnDeclareStmt());
        if (ctx.returnStmt())
            return this.visitReturnStmt(ctx.returnStmt());
        if (ctx.block())
            return this.visitBlock(ctx.block());
    }
    visitBlock(ctx) {
        console.log("Visiting Block");
        if (ctx.blockContent())
            return this.visitBlockContent(ctx.blockContent());
    }
    visitBlockContent(ctx) {
        console.log("Visiting BlockContent");
        const stmts = ctx.stmt();
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
        }
    }
    visitExprStmt(ctx) {
        console.log("Visiting ExprStmt");
        if (ctx.expr())
            return this.visit(ctx.expr());
    }
    visitDeclareStmt(ctx) {
        console.log("Visiting DeclareStmt");
        const type = ctx.type(); // TODO: Do type checking if have time
        const isMutable = ctx.MUT() ? true : false;
        const name = ctx.IDENTIFIER().getText();
        const value = ctx.expr();
        if (value)
            this.visitExpr(value);
        // TODO: Properly determine compile time env position
        this.instrs[this.wc++] = (0, RustLiteCompiler_1.assign)({ first: 0, second: 0 });
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
        if (!ctx.type() || !ctx.IDENTIFIER()) {
            throw new Error("Invalid parameter");
        }
        const type = ctx.type().getText();
        const name = ctx.IDENTIFIER().getText();
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
        if (!ctx || !ctx.type())
            return "void";
        const type = ctx.type().getText();
        return type;
    }
    visitReturnStmt(ctx) {
        console.log("Visiting ReturnStmt");
        if (ctx.expr())
            return this.visitExpr(ctx.expr());
    }
    visitFnDeclareStmt(ctx) {
        console.log("Visiting FnDeclareStmt");
        const [types, names] = this.processParamList(ctx.paramList());
        const returnType = this.processReturnType(ctx.returnType());
        if (types.length !== names.length) {
            throw new Error(`Parameter types and names do not match: ${types.length} != ${names.length}`);
        }
        this.instrs[this.wc++] = (0, RustLiteCompiler_1.loadFunction)(this.wc + 1, names.length); // this.wc + 1 is after goto instr
        const gotoInstr = (0, RustLiteCompiler_1.jump)(0); // 0 is a placeholder
        this.instrs[this.wc++] = gotoInstr;
        this.visitBlock(ctx.block());
        this.instrs[this.wc++] = (0, RustLiteCompiler_1.loadConstant)(0); // TODO: Add null as supported type and return it
        this.instrs[this.wc++] = (0, RustLiteCompiler_1.reset)();
        gotoInstr.addr = this.wc; // Set the address of the jump instruction to the current instruction count which is after the function body
        return;
    }
    visitFnCall(ctx) {
        console.log("Visiting FnCall");
        const fnName = ctx.IDENTIFIER().getText();
        const compileTimePos = { first: 0, second: 0 }; // TODO: Get the compile time position of the function
        this.instrs[this.wc++] = (0, RustLiteCompiler_1.load)(compileTimePos); // TODO: Add function address
        const args = ctx.argList();
        if (args) {
            for (let arg of args.expr()) {
                if (!arg)
                    continue;
                this.visitExpr(arg); // Loads arguments onto the stack
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
            console.log("Compiled instructions:");
            console.log(this.visitor.instrs);
            // Send the result to the REPL
            this.conductor.sendOutput(`Result of expression: ${this.visitor.instrs}`);
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
