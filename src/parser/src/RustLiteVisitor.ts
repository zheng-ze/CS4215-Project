// Generated from src/RustLite.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


import { ProgContext } from "./RustLiteParser.js";
import { TypeContext } from "./RustLiteParser.js";
import { ExprContext } from "./RustLiteParser.js";
import { ArithExprContext } from "./RustLiteParser.js";
import { LogicExprContext } from "./RustLiteParser.js";
import { GlobalElementContext } from "./RustLiteParser.js";
import { StmtContext } from "./RustLiteParser.js";
import { BlockContext } from "./RustLiteParser.js";
import { BlockContentContext } from "./RustLiteParser.js";
import { ExprStmtContext } from "./RustLiteParser.js";
import { DeclareStmtContext } from "./RustLiteParser.js";
import { CondStmtContext } from "./RustLiteParser.js";
import { WhileStmtContext } from "./RustLiteParser.js";
import { LoopControlContext } from "./RustLiteParser.js";
import { LoopControlStmtContext } from "./RustLiteParser.js";
import { ParamContext } from "./RustLiteParser.js";
import { ParamListContext } from "./RustLiteParser.js";
import { ReturnTypesContext } from "./RustLiteParser.js";
import { ReturnTypeContext } from "./RustLiteParser.js";
import { ReturnStmtContext } from "./RustLiteParser.js";
import { FnDeclareStmtContext } from "./RustLiteParser.js";
import { ArgListContext } from "./RustLiteParser.js";
import { FnCallContext } from "./RustLiteParser.js";
import { VectorTypeContext } from "./RustLiteParser.js";
import { VectorInitContext } from "./RustLiteParser.js";
import { VectorInitListContext } from "./RustLiteParser.js";
import { VectorPushContext } from "./RustLiteParser.js";
import { VectorPopContext } from "./RustLiteParser.js";
import { VectorLenContext } from "./RustLiteParser.js";
import { VectorIndexAccessContext } from "./RustLiteParser.js";
import { VectorAssignmentContext } from "./RustLiteParser.js";
import { VectorExprContext } from "./RustLiteParser.js";
import { PrintlnMacroContext } from "./RustLiteParser.js";
import { PrintlnArgsContext } from "./RustLiteParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `RustLiteParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class RustLiteVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `RustLiteParser.prog`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProg?: (ctx: ProgContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType?: (ctx: TypeContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpr?: (ctx: ExprContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.arithExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArithExpr?: (ctx: ArithExprContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.logicExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogicExpr?: (ctx: LogicExprContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.globalElement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGlobalElement?: (ctx: GlobalElementContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt?: (ctx: StmtContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlock?: (ctx: BlockContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.blockContent`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlockContent?: (ctx: BlockContentContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.exprStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExprStmt?: (ctx: ExprStmtContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.declareStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeclareStmt?: (ctx: DeclareStmtContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.condStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCondStmt?: (ctx: CondStmtContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.whileStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhileStmt?: (ctx: WhileStmtContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.loopControl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoopControl?: (ctx: LoopControlContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.loopControlStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoopControlStmt?: (ctx: LoopControlStmtContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.param`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParam?: (ctx: ParamContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.paramList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParamList?: (ctx: ParamListContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.returnTypes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturnTypes?: (ctx: ReturnTypesContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.returnType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturnType?: (ctx: ReturnTypeContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.returnStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturnStmt?: (ctx: ReturnStmtContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.fnDeclareStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFnDeclareStmt?: (ctx: FnDeclareStmtContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.argList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArgList?: (ctx: ArgListContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.fnCall`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFnCall?: (ctx: FnCallContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.vectorType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVectorType?: (ctx: VectorTypeContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.vectorInit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVectorInit?: (ctx: VectorInitContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.vectorInitList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVectorInitList?: (ctx: VectorInitListContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.vectorPush`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVectorPush?: (ctx: VectorPushContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.vectorPop`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVectorPop?: (ctx: VectorPopContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.vectorLen`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVectorLen?: (ctx: VectorLenContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.vectorIndexAccess`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVectorIndexAccess?: (ctx: VectorIndexAccessContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.vectorAssignment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVectorAssignment?: (ctx: VectorAssignmentContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.vectorExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVectorExpr?: (ctx: VectorExprContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.printlnMacro`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrintlnMacro?: (ctx: PrintlnMacroContext) => Result;
    /**
     * Visit a parse tree produced by `RustLiteParser.printlnArgs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrintlnArgs?: (ctx: PrintlnArgsContext) => Result;
}

