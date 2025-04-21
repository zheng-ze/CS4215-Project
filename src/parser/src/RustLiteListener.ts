// Generated from src/RustLite.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { ProgContext } from "./RustLiteParser.js";
import { TypeContext } from "./RustLiteParser.js";
import { ExprContext } from "./RustLiteParser.js";
import { ArithExprContext } from "./RustLiteParser.js";
import { LogicExprContext } from "./RustLiteParser.js";
import { GlobalElementContext } from "./RustLiteParser.js";
import { StmtContext } from "./RustLiteParser.js";
import { BlockContext } from "./RustLiteParser.js";
import { BlockContentContext } from "./RustLiteParser.js";
import { AssignStmtContext } from "./RustLiteParser.js";
import { ExprStmtContext } from "./RustLiteParser.js";
import { DeclareStmtContext } from "./RustLiteParser.js";
import { CondStmtContext } from "./RustLiteParser.js";
import { WhileStmtContext } from "./RustLiteParser.js";
import { LoopControlContext } from "./RustLiteParser.js";
import { LoopControlStmtContext } from "./RustLiteParser.js";
import { ParamContext } from "./RustLiteParser.js";
import { ParamListContext } from "./RustLiteParser.js";
import { ReturnTypeContext } from "./RustLiteParser.js";
import { ReturnStmtContext } from "./RustLiteParser.js";
import { FnDeclareStmtContext } from "./RustLiteParser.js";
import { ArgListContext } from "./RustLiteParser.js";
import { FnCallContext } from "./RustLiteParser.js";
import { VectorTypeContext } from "./RustLiteParser.js";
import { VectorInitContext } from "./RustLiteParser.js";
import { VectorInitListContext } from "./RustLiteParser.js";
import { VectorLenContext } from "./RustLiteParser.js";
import { VectorIndexAccessContext } from "./RustLiteParser.js";
import { VectorExprContext } from "./RustLiteParser.js";
import { PrintlnMacroContext } from "./RustLiteParser.js";
import { PrintlnArgsContext } from "./RustLiteParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `RustLiteParser`.
 */
export class RustLiteListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `RustLiteParser.prog`.
     * @param ctx the parse tree
     */
    enterProg?: (ctx: ProgContext) => void;
    /**
     * Exit a parse tree produced by `RustLiteParser.prog`.
     * @param ctx the parse tree
     */
    exitProg?: (ctx: ProgContext) => void;
    /**
     * Enter a parse tree produced by `RustLiteParser.type`.
     * @param ctx the parse tree
     */
    enterType?: (ctx: TypeContext) => void;
    /**
     * Exit a parse tree produced by `RustLiteParser.type`.
     * @param ctx the parse tree
     */
    exitType?: (ctx: TypeContext) => void;
    /**
     * Enter a parse tree produced by `RustLiteParser.expr`.
     * @param ctx the parse tree
     */
    enterExpr?: (ctx: ExprContext) => void;
    /**
     * Exit a parse tree produced by `RustLiteParser.expr`.
     * @param ctx the parse tree
     */
    exitExpr?: (ctx: ExprContext) => void;
    /**
     * Enter a parse tree produced by `RustLiteParser.arithExpr`.
     * @param ctx the parse tree
     */
    enterArithExpr?: (ctx: ArithExprContext) => void;
    /**
     * Exit a parse tree produced by `RustLiteParser.arithExpr`.
     * @param ctx the parse tree
     */
    exitArithExpr?: (ctx: ArithExprContext) => void;
    /**
     * Enter a parse tree produced by `RustLiteParser.logicExpr`.
     * @param ctx the parse tree
     */
    enterLogicExpr?: (ctx: LogicExprContext) => void;
    /**
     * Exit a parse tree produced by `RustLiteParser.logicExpr`.
     * @param ctx the parse tree
     */
    exitLogicExpr?: (ctx: LogicExprContext) => void;
    /**
     * Enter a parse tree produced by `RustLiteParser.globalElement`.
     * @param ctx the parse tree
     */
    enterGlobalElement?: (ctx: GlobalElementContext) => void;
    /**
     * Exit a parse tree produced by `RustLiteParser.globalElement`.
     * @param ctx the parse tree
     */
    exitGlobalElement?: (ctx: GlobalElementContext) => void;
    /**
     * Enter a parse tree produced by `RustLiteParser.stmt`.
     * @param ctx the parse tree
     */
    enterStmt?: (ctx: StmtContext) => void;
    /**
     * Exit a parse tree produced by `RustLiteParser.stmt`.
     * @param ctx the parse tree
     */
    exitStmt?: (ctx: StmtContext) => void;
    /**
     * Enter a parse tree produced by `RustLiteParser.block`.
     * @param ctx the parse tree
     */
    enterBlock?: (ctx: BlockContext) => void;
    /**
     * Exit a parse tree produced by `RustLiteParser.block`.
     * @param ctx the parse tree
     */
    exitBlock?: (ctx: BlockContext) => void;
    /**
     * Enter a parse tree produced by `RustLiteParser.blockContent`.
     * @param ctx the parse tree
     */
    enterBlockContent?: (ctx: BlockContentContext) => void;
    /**
     * Exit a parse tree produced by `RustLiteParser.blockContent`.
     * @param ctx the parse tree
     */
    exitBlockContent?: (ctx: BlockContentContext) => void;
    /**
     * Enter a parse tree produced by `RustLiteParser.assignStmt`.
     * @param ctx the parse tree
     */
    enterAssignStmt?: (ctx: AssignStmtContext) => void;
    /**
     * Exit a parse tree produced by `RustLiteParser.assignStmt`.
     * @param ctx the parse tree
     */
    exitAssignStmt?: (ctx: AssignStmtContext) => void;
    /**
     * Enter a parse tree produced by `RustLiteParser.exprStmt`.
     * @param ctx the parse tree
     */
    enterExprStmt?: (ctx: ExprStmtContext) => void;
    /**
     * Exit a parse tree produced by `RustLiteParser.exprStmt`.
     * @param ctx the parse tree
     */
    exitExprStmt?: (ctx: ExprStmtContext) => void;
    /**
     * Enter a parse tree produced by `RustLiteParser.declareStmt`.
     * @param ctx the parse tree
     */
    enterDeclareStmt?: (ctx: DeclareStmtContext) => void;
    /**
     * Exit a parse tree produced by `RustLiteParser.declareStmt`.
     * @param ctx the parse tree
     */
    exitDeclareStmt?: (ctx: DeclareStmtContext) => void;
    /**
     * Enter a parse tree produced by `RustLiteParser.condStmt`.
     * @param ctx the parse tree
     */
    enterCondStmt?: (ctx: CondStmtContext) => void;
    /**
     * Exit a parse tree produced by `RustLiteParser.condStmt`.
     * @param ctx the parse tree
     */
    exitCondStmt?: (ctx: CondStmtContext) => void;
    /**
     * Enter a parse tree produced by `RustLiteParser.whileStmt`.
     * @param ctx the parse tree
     */
    enterWhileStmt?: (ctx: WhileStmtContext) => void;
    /**
     * Exit a parse tree produced by `RustLiteParser.whileStmt`.
     * @param ctx the parse tree
     */
    exitWhileStmt?: (ctx: WhileStmtContext) => void;
    /**
     * Enter a parse tree produced by `RustLiteParser.loopControl`.
     * @param ctx the parse tree
     */
    enterLoopControl?: (ctx: LoopControlContext) => void;
    /**
     * Exit a parse tree produced by `RustLiteParser.loopControl`.
     * @param ctx the parse tree
     */
    exitLoopControl?: (ctx: LoopControlContext) => void;
    /**
     * Enter a parse tree produced by `RustLiteParser.loopControlStmt`.
     * @param ctx the parse tree
     */
    enterLoopControlStmt?: (ctx: LoopControlStmtContext) => void;
    /**
     * Exit a parse tree produced by `RustLiteParser.loopControlStmt`.
     * @param ctx the parse tree
     */
    exitLoopControlStmt?: (ctx: LoopControlStmtContext) => void;
    /**
     * Enter a parse tree produced by `RustLiteParser.param`.
     * @param ctx the parse tree
     */
    enterParam?: (ctx: ParamContext) => void;
    /**
     * Exit a parse tree produced by `RustLiteParser.param`.
     * @param ctx the parse tree
     */
    exitParam?: (ctx: ParamContext) => void;
    /**
     * Enter a parse tree produced by `RustLiteParser.paramList`.
     * @param ctx the parse tree
     */
    enterParamList?: (ctx: ParamListContext) => void;
    /**
     * Exit a parse tree produced by `RustLiteParser.paramList`.
     * @param ctx the parse tree
     */
    exitParamList?: (ctx: ParamListContext) => void;
    /**
     * Enter a parse tree produced by `RustLiteParser.returnType`.
     * @param ctx the parse tree
     */
    enterReturnType?: (ctx: ReturnTypeContext) => void;
    /**
     * Exit a parse tree produced by `RustLiteParser.returnType`.
     * @param ctx the parse tree
     */
    exitReturnType?: (ctx: ReturnTypeContext) => void;
    /**
     * Enter a parse tree produced by `RustLiteParser.returnStmt`.
     * @param ctx the parse tree
     */
    enterReturnStmt?: (ctx: ReturnStmtContext) => void;
    /**
     * Exit a parse tree produced by `RustLiteParser.returnStmt`.
     * @param ctx the parse tree
     */
    exitReturnStmt?: (ctx: ReturnStmtContext) => void;
    /**
     * Enter a parse tree produced by `RustLiteParser.fnDeclareStmt`.
     * @param ctx the parse tree
     */
    enterFnDeclareStmt?: (ctx: FnDeclareStmtContext) => void;
    /**
     * Exit a parse tree produced by `RustLiteParser.fnDeclareStmt`.
     * @param ctx the parse tree
     */
    exitFnDeclareStmt?: (ctx: FnDeclareStmtContext) => void;
    /**
     * Enter a parse tree produced by `RustLiteParser.argList`.
     * @param ctx the parse tree
     */
    enterArgList?: (ctx: ArgListContext) => void;
    /**
     * Exit a parse tree produced by `RustLiteParser.argList`.
     * @param ctx the parse tree
     */
    exitArgList?: (ctx: ArgListContext) => void;
    /**
     * Enter a parse tree produced by `RustLiteParser.fnCall`.
     * @param ctx the parse tree
     */
    enterFnCall?: (ctx: FnCallContext) => void;
    /**
     * Exit a parse tree produced by `RustLiteParser.fnCall`.
     * @param ctx the parse tree
     */
    exitFnCall?: (ctx: FnCallContext) => void;
    /**
     * Enter a parse tree produced by `RustLiteParser.vectorType`.
     * @param ctx the parse tree
     */
    enterVectorType?: (ctx: VectorTypeContext) => void;
    /**
     * Exit a parse tree produced by `RustLiteParser.vectorType`.
     * @param ctx the parse tree
     */
    exitVectorType?: (ctx: VectorTypeContext) => void;
    /**
     * Enter a parse tree produced by `RustLiteParser.vectorInit`.
     * @param ctx the parse tree
     */
    enterVectorInit?: (ctx: VectorInitContext) => void;
    /**
     * Exit a parse tree produced by `RustLiteParser.vectorInit`.
     * @param ctx the parse tree
     */
    exitVectorInit?: (ctx: VectorInitContext) => void;
    /**
     * Enter a parse tree produced by `RustLiteParser.vectorInitList`.
     * @param ctx the parse tree
     */
    enterVectorInitList?: (ctx: VectorInitListContext) => void;
    /**
     * Exit a parse tree produced by `RustLiteParser.vectorInitList`.
     * @param ctx the parse tree
     */
    exitVectorInitList?: (ctx: VectorInitListContext) => void;
    /**
     * Enter a parse tree produced by `RustLiteParser.vectorLen`.
     * @param ctx the parse tree
     */
    enterVectorLen?: (ctx: VectorLenContext) => void;
    /**
     * Exit a parse tree produced by `RustLiteParser.vectorLen`.
     * @param ctx the parse tree
     */
    exitVectorLen?: (ctx: VectorLenContext) => void;
    /**
     * Enter a parse tree produced by `RustLiteParser.vectorIndexAccess`.
     * @param ctx the parse tree
     */
    enterVectorIndexAccess?: (ctx: VectorIndexAccessContext) => void;
    /**
     * Exit a parse tree produced by `RustLiteParser.vectorIndexAccess`.
     * @param ctx the parse tree
     */
    exitVectorIndexAccess?: (ctx: VectorIndexAccessContext) => void;
    /**
     * Enter a parse tree produced by `RustLiteParser.vectorExpr`.
     * @param ctx the parse tree
     */
    enterVectorExpr?: (ctx: VectorExprContext) => void;
    /**
     * Exit a parse tree produced by `RustLiteParser.vectorExpr`.
     * @param ctx the parse tree
     */
    exitVectorExpr?: (ctx: VectorExprContext) => void;
    /**
     * Enter a parse tree produced by `RustLiteParser.printlnMacro`.
     * @param ctx the parse tree
     */
    enterPrintlnMacro?: (ctx: PrintlnMacroContext) => void;
    /**
     * Exit a parse tree produced by `RustLiteParser.printlnMacro`.
     * @param ctx the parse tree
     */
    exitPrintlnMacro?: (ctx: PrintlnMacroContext) => void;
    /**
     * Enter a parse tree produced by `RustLiteParser.printlnArgs`.
     * @param ctx the parse tree
     */
    enterPrintlnArgs?: (ctx: PrintlnArgsContext) => void;
    /**
     * Exit a parse tree produced by `RustLiteParser.printlnArgs`.
     * @param ctx the parse tree
     */
    exitPrintlnArgs?: (ctx: PrintlnArgsContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

