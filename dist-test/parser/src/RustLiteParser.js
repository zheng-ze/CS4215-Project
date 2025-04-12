"use strict";
// Generated from src/RustLite.g4 by ANTLR 4.13.1
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrintlnArgsContext = exports.PrintlnMacroContext = exports.VectorExprContext = exports.VectorAssignmentContext = exports.VectorIndexAccessContext = exports.VectorLenContext = exports.VectorPopContext = exports.VectorPushContext = exports.VectorInitListContext = exports.VectorInitContext = exports.VectorTypeContext = exports.FnCallContext = exports.ArgListContext = exports.FnDeclareStmtContext = exports.ReturnStmtContext = exports.ReturnTypeContext = exports.ReturnTypesContext = exports.ParamListContext = exports.ParamContext = exports.LoopControlStmtContext = exports.LoopControlContext = exports.WhileStmtContext = exports.CondStmtContext = exports.DeclareStmtContext = exports.ExprStmtContext = exports.BlockContentContext = exports.BlockContext = exports.StmtContext = exports.GlobalElementContext = exports.LogicExprContext = exports.ArithExprContext = exports.ExprContext = exports.TypeContext = exports.ProgContext = exports.RustLiteParser = void 0;
const antlr = __importStar(require("antlr4ng"));
class RustLiteParser extends antlr.Parser {
    get grammarFileName() { return "RustLite.g4"; }
    get literalNames() { return RustLiteParser.literalNames; }
    get symbolicNames() { return RustLiteParser.symbolicNames; }
    get ruleNames() { return RustLiteParser.ruleNames; }
    get serializedATN() { return RustLiteParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new antlr.FailedPredicateException(this, predicate, message);
    }
    constructor(input) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, RustLiteParser._ATN, RustLiteParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    prog() {
        let localContext = new ProgContext(this.context, this.state);
        this.enterRule(localContext, 0, RustLiteParser.RULE_prog);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 71;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 25) {
                    {
                        {
                            this.state = 68;
                            this.globalElement();
                        }
                    }
                    this.state = 73;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 74;
                this.match(RustLiteParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    type_() {
        let localContext = new TypeContext(this.context, this.state);
        this.enterRule(localContext, 2, RustLiteParser.RULE_type);
        try {
            this.state = 86;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case RustLiteParser.U8_TYPE:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 76;
                        this.match(RustLiteParser.U8_TYPE);
                    }
                    break;
                case RustLiteParser.U16_TYPE:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 77;
                        this.match(RustLiteParser.U16_TYPE);
                    }
                    break;
                case RustLiteParser.U32_TYPE:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 78;
                        this.match(RustLiteParser.U32_TYPE);
                    }
                    break;
                case RustLiteParser.U64_TYPE:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 79;
                        this.match(RustLiteParser.U64_TYPE);
                    }
                    break;
                case RustLiteParser.I8_TYPE:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 80;
                        this.match(RustLiteParser.I8_TYPE);
                    }
                    break;
                case RustLiteParser.I16_TYPE:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 81;
                        this.match(RustLiteParser.I16_TYPE);
                    }
                    break;
                case RustLiteParser.I32_TYPE:
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 82;
                        this.match(RustLiteParser.I32_TYPE);
                    }
                    break;
                case RustLiteParser.I64_TYPE:
                    this.enterOuterAlt(localContext, 8);
                    {
                        this.state = 83;
                        this.match(RustLiteParser.I64_TYPE);
                    }
                    break;
                case RustLiteParser.BOOL_TYPE:
                    this.enterOuterAlt(localContext, 9);
                    {
                        this.state = 84;
                        this.match(RustLiteParser.BOOL_TYPE);
                    }
                    break;
                case RustLiteParser.VECTOR_MODULE_NAME:
                    this.enterOuterAlt(localContext, 10);
                    {
                        this.state = 85;
                        this.vectorType();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    expr() {
        let localContext = new ExprContext(this.context, this.state);
        this.enterRule(localContext, 4, RustLiteParser.RULE_expr);
        try {
            this.state = 99;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 2, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 88;
                        this.match(RustLiteParser.T__0);
                        this.state = 89;
                        localContext._inner = this.expr();
                        this.state = 90;
                        this.match(RustLiteParser.T__1);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 92;
                        this.match(RustLiteParser.IDENTIFIER);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 93;
                        this.match(RustLiteParser.INT);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 94;
                        this.match(RustLiteParser.BOOL);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 95;
                        this.arithExpr(0);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 96;
                        this.logicExpr(0);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 97;
                        this.fnCall();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(localContext, 8);
                    {
                        this.state = 98;
                        this.vectorExpr();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    arithExpr(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ArithExprContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 6;
        this.enterRecursionRule(localContext, 6, RustLiteParser.RULE_arithExpr, _p);
        let _la;
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 112;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case RustLiteParser.INT:
                        {
                            this.state = 102;
                            localContext._primary = this.match(RustLiteParser.INT);
                        }
                        break;
                    case RustLiteParser.IDENTIFIER:
                        {
                            this.state = 103;
                            localContext._primary = this.match(RustLiteParser.IDENTIFIER);
                        }
                        break;
                    case RustLiteParser.T__0:
                        {
                            this.state = 104;
                            this.match(RustLiteParser.T__0);
                            this.state = 105;
                            localContext._inner = this.arithExpr(0);
                            this.state = 106;
                            this.match(RustLiteParser.T__1);
                        }
                        break;
                    case RustLiteParser.T__2:
                        {
                            this.state = 108;
                            localContext._op = this.match(RustLiteParser.T__2);
                            this.state = 109;
                            localContext._right = this.arithExpr(5);
                        }
                        break;
                    case RustLiteParser.BOOL:
                        {
                            this.state = 110;
                            this.match(RustLiteParser.BOOL);
                            this.notifyErrorListeners("Cannot use boolean in arithmetic expressions", null, null);
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                }
                this.context.stop = this.tokenStream.LT(-1);
                this.state = 126;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 5, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        if (this.parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        previousContext = localContext;
                        {
                            this.state = 124;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 4, this.context)) {
                                case 1:
                                    {
                                        localContext = new ArithExprContext(parentContext, parentState);
                                        localContext._left = previousContext;
                                        this.pushNewRecursionContext(localContext, _startState, RustLiteParser.RULE_arithExpr);
                                        this.state = 114;
                                        if (!(this.precpred(this.context, 4))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                                        }
                                        this.state = 115;
                                        localContext._op = this.tokenStream.LT(1);
                                        _la = this.tokenStream.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 112) !== 0))) {
                                            localContext._op = this.errorHandler.recoverInline(this);
                                        }
                                        else {
                                            this.errorHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 116;
                                        localContext._right = this.arithExpr(5);
                                    }
                                    break;
                                case 2:
                                    {
                                        localContext = new ArithExprContext(parentContext, parentState);
                                        localContext._left = previousContext;
                                        this.pushNewRecursionContext(localContext, _startState, RustLiteParser.RULE_arithExpr);
                                        this.state = 117;
                                        if (!(this.precpred(this.context, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                                        }
                                        this.state = 118;
                                        localContext._op = this.tokenStream.LT(1);
                                        _la = this.tokenStream.LA(1);
                                        if (!(_la === 3 || _la === 7)) {
                                            localContext._op = this.errorHandler.recoverInline(this);
                                        }
                                        else {
                                            this.errorHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 119;
                                        localContext._right = this.arithExpr(4);
                                    }
                                    break;
                                case 3:
                                    {
                                        localContext = new ArithExprContext(parentContext, parentState);
                                        localContext._left = previousContext;
                                        this.pushNewRecursionContext(localContext, _startState, RustLiteParser.RULE_arithExpr);
                                        this.state = 120;
                                        if (!(this.precpred(this.context, 1))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                                        }
                                        this.state = 121;
                                        localContext._op = this.tokenStream.LT(1);
                                        _la = this.tokenStream.LA(1);
                                        if (!(_la === 5 || _la === 6)) {
                                            localContext._op = this.errorHandler.recoverInline(this);
                                        }
                                        else {
                                            this.errorHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 122;
                                        this.match(RustLiteParser.INT);
                                        if ((localContext._right != null ? this.tokenStream.getTextFromRange(localContext._right.start, localContext._right.stop) : '') === "0")
                                            this.notifyErrorListeners("Division by zero", null, null);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 128;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 5, this.context);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    logicExpr(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new LogicExprContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 8;
        this.enterRecursionRule(localContext, 8, RustLiteParser.RULE_logicExpr, _p);
        let _la;
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 144;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 6, this.context)) {
                    case 1:
                        {
                            this.state = 130;
                            localContext._primary = this.match(RustLiteParser.BOOL);
                        }
                        break;
                    case 2:
                        {
                            this.state = 131;
                            localContext._primary = this.match(RustLiteParser.IDENTIFIER);
                        }
                        break;
                    case 3:
                        {
                            this.state = 132;
                            this.match(RustLiteParser.T__0);
                            this.state = 133;
                            localContext._inner = this.logicExpr(0);
                            this.state = 134;
                            this.match(RustLiteParser.T__1);
                        }
                        break;
                    case 4:
                        {
                            this.state = 136;
                            localContext._arithLeft = this.arithExpr(0);
                            this.state = 137;
                            localContext._op = this.tokenStream.LT(1);
                            _la = this.tokenStream.LA(1);
                            if (!(((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & 3221225487) !== 0))) {
                                localContext._op = this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 138;
                            localContext._arithRight = this.arithExpr(0);
                        }
                        break;
                    case 5:
                        {
                            this.state = 140;
                            localContext._op = this.match(RustLiteParser.T__11);
                            this.state = 141;
                            localContext._right = this.logicExpr(4);
                        }
                        break;
                    case 6:
                        {
                            this.state = 142;
                            this.match(RustLiteParser.INT);
                            this.notifyErrorListeners("Cannot use INT without comparison operators in logical expressions", null, null);
                        }
                        break;
                }
                this.context.stop = this.tokenStream.LT(-1);
                this.state = 154;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 8, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        if (this.parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        previousContext = localContext;
                        {
                            this.state = 152;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 7, this.context)) {
                                case 1:
                                    {
                                        localContext = new LogicExprContext(parentContext, parentState);
                                        localContext._left = previousContext;
                                        this.pushNewRecursionContext(localContext, _startState, RustLiteParser.RULE_logicExpr);
                                        this.state = 146;
                                        if (!(this.precpred(this.context, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                                        }
                                        this.state = 147;
                                        localContext._op = this.match(RustLiteParser.T__12);
                                        this.state = 148;
                                        localContext._right = this.logicExpr(4);
                                    }
                                    break;
                                case 2:
                                    {
                                        localContext = new LogicExprContext(parentContext, parentState);
                                        localContext._left = previousContext;
                                        this.pushNewRecursionContext(localContext, _startState, RustLiteParser.RULE_logicExpr);
                                        this.state = 149;
                                        if (!(this.precpred(this.context, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                                        }
                                        this.state = 150;
                                        localContext._op = this.match(RustLiteParser.T__13);
                                        this.state = 151;
                                        localContext._right = this.logicExpr(3);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 156;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 8, this.context);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    globalElement() {
        let localContext = new GlobalElementContext(this.context, this.state);
        this.enterRule(localContext, 10, RustLiteParser.RULE_globalElement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 157;
                this.fnDeclareStmt();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    stmt() {
        let localContext = new StmtContext(this.context, this.state);
        this.enterRule(localContext, 12, RustLiteParser.RULE_stmt);
        try {
            this.state = 167;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case RustLiteParser.T__0:
                case RustLiteParser.T__2:
                case RustLiteParser.T__11:
                case RustLiteParser.VEC:
                case RustLiteParser.INT:
                case RustLiteParser.BOOL:
                case RustLiteParser.VECTOR_MODULE_NAME:
                case RustLiteParser.IDENTIFIER:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 159;
                        this.exprStmt();
                    }
                    break;
                case RustLiteParser.LET:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 160;
                        this.declareStmt();
                    }
                    break;
                case RustLiteParser.IF:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 161;
                        this.condStmt();
                    }
                    break;
                case RustLiteParser.WHILE:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 162;
                        this.whileStmt();
                    }
                    break;
                case RustLiteParser.BREAK:
                case RustLiteParser.CONTINUE:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 163;
                        this.loopControlStmt();
                    }
                    break;
                case RustLiteParser.FN:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 164;
                        this.fnDeclareStmt();
                    }
                    break;
                case RustLiteParser.RETURN:
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 165;
                        this.returnStmt();
                    }
                    break;
                case RustLiteParser.T__14:
                    this.enterOuterAlt(localContext, 8);
                    {
                        this.state = 166;
                        this.block();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    block() {
        let localContext = new BlockContext(this.context, this.state);
        this.enterRule(localContext, 14, RustLiteParser.RULE_block);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 169;
                this.match(RustLiteParser.T__14);
                this.state = 170;
                this.blockContent();
                this.state = 171;
                this.match(RustLiteParser.T__15);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    blockContent() {
        let localContext = new BlockContentContext(this.context, this.state);
        this.enterRule(localContext, 16, RustLiteParser.RULE_blockContent);
        let _la;
        try {
            let alternative;
            this.state = 207;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 17, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 176;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 10, this.context);
                        while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                            if (alternative === 1) {
                                {
                                    {
                                        this.state = 173;
                                        this.stmt();
                                    }
                                }
                            }
                            this.state = 178;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 10, this.context);
                        }
                        this.state = 180;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4106) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 50337793) !== 0)) {
                            {
                                this.state = 179;
                                localContext._finalExpr = this.expr();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 185;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4135620618) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 50337793) !== 0)) {
                            {
                                {
                                    this.state = 182;
                                    this.stmt();
                                }
                            }
                            this.state = 187;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 191;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 13, this.context);
                        while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                            if (alternative === 1) {
                                {
                                    {
                                        this.state = 188;
                                        this.stmt();
                                    }
                                }
                            }
                            this.state = 193;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 13, this.context);
                        }
                        this.state = 194;
                        this.expr();
                        this.state = 199;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 15, this.context);
                        while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                            if (alternative === 1) {
                                {
                                    this.state = 197;
                                    this.errorHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this.tokenStream, 14, this.context)) {
                                        case 1:
                                            {
                                                this.state = 195;
                                                this.stmt();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 196;
                                                this.expr();
                                            }
                                            break;
                                    }
                                }
                            }
                            this.state = 201;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 15, this.context);
                        }
                        this.state = 203;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4106) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 50337793) !== 0)) {
                            {
                                this.state = 202;
                                localContext._finalExpr = this.expr();
                            }
                        }
                        this.notifyErrorListeners("Missing semicolon after expression", null, null);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    exprStmt() {
        let localContext = new ExprStmtContext(this.context, this.state);
        this.enterRule(localContext, 18, RustLiteParser.RULE_exprStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 209;
                this.expr();
                this.state = 210;
                this.match(RustLiteParser.SEMICOLON);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    declareStmt() {
        let localContext = new DeclareStmtContext(this.context, this.state);
        this.enterRule(localContext, 20, RustLiteParser.RULE_declareStmt);
        let _la;
        try {
            this.state = 265;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 26, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 212;
                        this.match(RustLiteParser.LET);
                        this.state = 214;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 24) {
                            {
                                this.state = 213;
                                this.match(RustLiteParser.MUT);
                            }
                        }
                        this.state = 216;
                        this.match(RustLiteParser.IDENTIFIER);
                        this.state = 217;
                        this.match(RustLiteParser.COLON);
                        this.state = 218;
                        this.type_();
                        this.state = 219;
                        this.match(RustLiteParser.EQUALS);
                        this.state = 220;
                        this.expr();
                        this.state = 221;
                        this.match(RustLiteParser.SEMICOLON);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 223;
                        this.match(RustLiteParser.LET);
                        this.state = 225;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 24) {
                            {
                                this.state = 224;
                                this.match(RustLiteParser.MUT);
                            }
                        }
                        this.state = 227;
                        this.match(RustLiteParser.IDENTIFIER);
                        this.state = 228;
                        this.match(RustLiteParser.COLON);
                        this.state = 229;
                        this.type_();
                        this.state = 230;
                        this.match(RustLiteParser.SEMICOLON);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 232;
                        this.match(RustLiteParser.LET);
                        this.state = 234;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 24) {
                            {
                                this.state = 233;
                                this.match(RustLiteParser.MUT);
                            }
                        }
                        this.state = 236;
                        this.match(RustLiteParser.IDENTIFIER);
                        this.state = 237;
                        this.match(RustLiteParser.EQUALS);
                        this.state = 238;
                        this.expr();
                        this.state = 239;
                        this.match(RustLiteParser.SEMICOLON);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 241;
                        this.match(RustLiteParser.LET);
                        this.state = 243;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 24) {
                            {
                                this.state = 242;
                                this.match(RustLiteParser.MUT);
                            }
                        }
                        this.state = 245;
                        this.match(RustLiteParser.IDENTIFIER);
                        this.notifyErrorListeners("Type annotations needed", null, null);
                        this.state = 248;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 42) {
                            {
                                this.state = 247;
                                this.match(RustLiteParser.SEMICOLON);
                            }
                        }
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 250;
                        this.match(RustLiteParser.LET);
                        this.state = 252;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 24) {
                            {
                                this.state = 251;
                                this.match(RustLiteParser.MUT);
                            }
                        }
                        this.state = 256;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 41) {
                            {
                                this.state = 254;
                                this.match(RustLiteParser.COLON);
                                this.state = 255;
                                this.type_();
                            }
                        }
                        this.notifyErrorListeners("Expected identifier", null, null);
                        this.state = 262;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 40) {
                            {
                                this.state = 259;
                                this.match(RustLiteParser.EQUALS);
                                this.state = 260;
                                this.match(RustLiteParser.COLON);
                                this.state = 261;
                                this.expr();
                            }
                        }
                        this.state = 264;
                        this.match(RustLiteParser.SEMICOLON);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    condStmt() {
        let localContext = new CondStmtContext(this.context, this.state);
        this.enterRule(localContext, 22, RustLiteParser.RULE_condStmt);
        let _la;
        try {
            let alternative;
            this.state = 292;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 30, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 267;
                        this.match(RustLiteParser.IF);
                        this.state = 268;
                        this.logicExpr(0);
                        this.state = 269;
                        this.block();
                        this.state = 277;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 27, this.context);
                        while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                            if (alternative === 1) {
                                {
                                    {
                                        this.state = 270;
                                        this.match(RustLiteParser.ELSE);
                                        this.state = 271;
                                        this.match(RustLiteParser.IF);
                                        this.state = 272;
                                        this.logicExpr(0);
                                        this.state = 273;
                                        this.block();
                                    }
                                }
                            }
                            this.state = 279;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 27, this.context);
                        }
                        this.state = 282;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 27) {
                            {
                                this.state = 280;
                                this.match(RustLiteParser.ELSE);
                                this.state = 281;
                                this.block();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 284;
                        this.match(RustLiteParser.IF);
                        this.state = 285;
                        this.expr();
                        this.notifyErrorListeners("Condition must be a boolean expression", null, null);
                        this.state = 287;
                        this.block();
                        this.state = 290;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 27) {
                            {
                                this.state = 288;
                                this.match(RustLiteParser.ELSE);
                                this.state = 289;
                                this.block();
                            }
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    whileStmt() {
        let localContext = new WhileStmtContext(this.context, this.state);
        this.enterRule(localContext, 24, RustLiteParser.RULE_whileStmt);
        try {
            this.state = 303;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 31, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 294;
                        this.match(RustLiteParser.WHILE);
                        this.state = 295;
                        this.logicExpr(0);
                        this.state = 296;
                        this.block();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 298;
                        this.match(RustLiteParser.WHILE);
                        this.state = 299;
                        this.expr();
                        this.notifyErrorListeners("Condition must be a boolean expression", null, null);
                        this.state = 301;
                        this.block();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    loopControl() {
        let localContext = new LoopControlContext(this.context, this.state);
        this.enterRule(localContext, 26, RustLiteParser.RULE_loopControl);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 305;
                _la = this.tokenStream.LA(1);
                if (!(_la === 30 || _la === 31)) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    loopControlStmt() {
        let localContext = new LoopControlStmtContext(this.context, this.state);
        this.enterRule(localContext, 28, RustLiteParser.RULE_loopControlStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 307;
                this.loopControl();
                this.state = 308;
                this.match(RustLiteParser.SEMICOLON);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    param() {
        let localContext = new ParamContext(this.context, this.state);
        this.enterRule(localContext, 30, RustLiteParser.RULE_param);
        try {
            this.state = 315;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 32, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 310;
                        this.match(RustLiteParser.IDENTIFIER);
                        this.state = 311;
                        this.match(RustLiteParser.COLON);
                        this.state = 312;
                        this.type_();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 313;
                        this.match(RustLiteParser.IDENTIFIER);
                        this.notifyErrorListeners("Parameters must specify a type", null, null);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    paramList() {
        let localContext = new ParamListContext(this.context, this.state);
        this.enterRule(localContext, 32, RustLiteParser.RULE_paramList);
        let _la;
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 317;
                this.param();
                this.state = 322;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 33, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 318;
                                this.match(RustLiteParser.T__16);
                                this.state = 319;
                                this.param();
                            }
                        }
                    }
                    this.state = 324;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 33, this.context);
                }
                this.state = 326;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 17) {
                    {
                        this.state = 325;
                        this.match(RustLiteParser.T__16);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    returnTypes() {
        let localContext = new ReturnTypesContext(this.context, this.state);
        this.enterRule(localContext, 34, RustLiteParser.RULE_returnTypes);
        try {
            this.state = 330;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case RustLiteParser.U8_TYPE:
                case RustLiteParser.U16_TYPE:
                case RustLiteParser.U32_TYPE:
                case RustLiteParser.U64_TYPE:
                case RustLiteParser.I8_TYPE:
                case RustLiteParser.I16_TYPE:
                case RustLiteParser.I32_TYPE:
                case RustLiteParser.I64_TYPE:
                case RustLiteParser.BOOL_TYPE:
                case RustLiteParser.VECTOR_MODULE_NAME:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 328;
                        this.type_();
                    }
                    break;
                case RustLiteParser.T__17:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 329;
                        this.match(RustLiteParser.T__17);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    returnType() {
        let localContext = new ReturnTypeContext(this.context, this.state);
        this.enterRule(localContext, 36, RustLiteParser.RULE_returnType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 332;
                this.match(RustLiteParser.T__18);
                this.state = 333;
                this.returnTypes();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    returnStmt() {
        let localContext = new ReturnStmtContext(this.context, this.state);
        this.enterRule(localContext, 38, RustLiteParser.RULE_returnStmt);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 335;
                this.match(RustLiteParser.RETURN);
                this.state = 337;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4106) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 50337793) !== 0)) {
                    {
                        this.state = 336;
                        this.expr();
                    }
                }
                this.state = 339;
                this.match(RustLiteParser.SEMICOLON);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    fnDeclareStmt() {
        let localContext = new FnDeclareStmtContext(this.context, this.state);
        this.enterRule(localContext, 40, RustLiteParser.RULE_fnDeclareStmt);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 341;
                this.match(RustLiteParser.FN);
                this.state = 342;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 349;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case RustLiteParser.T__0:
                        {
                            this.state = 343;
                            this.match(RustLiteParser.T__0);
                            this.state = 345;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 57) {
                                {
                                    this.state = 344;
                                    this.paramList();
                                }
                            }
                            this.state = 347;
                            this.match(RustLiteParser.T__1);
                        }
                        break;
                    case RustLiteParser.T__17:
                        {
                            this.state = 348;
                            this.match(RustLiteParser.T__17);
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                }
                this.state = 352;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 19) {
                    {
                        this.state = 351;
                        this.returnType();
                    }
                }
                this.state = 354;
                this.block();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    argList() {
        let localContext = new ArgListContext(this.context, this.state);
        this.enterRule(localContext, 42, RustLiteParser.RULE_argList);
        let _la;
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 356;
                this.expr();
                this.state = 361;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 40, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 357;
                                this.match(RustLiteParser.T__16);
                                this.state = 358;
                                this.expr();
                            }
                        }
                    }
                    this.state = 363;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 40, this.context);
                }
                this.state = 365;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 17) {
                    {
                        this.state = 364;
                        this.match(RustLiteParser.T__16);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    fnCall() {
        let localContext = new FnCallContext(this.context, this.state);
        this.enterRule(localContext, 44, RustLiteParser.RULE_fnCall);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 367;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 368;
                this.match(RustLiteParser.T__0);
                this.state = 370;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4106) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 50337793) !== 0)) {
                    {
                        this.state = 369;
                        this.argList();
                    }
                }
                this.state = 372;
                this.match(RustLiteParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    vectorType() {
        let localContext = new VectorTypeContext(this.context, this.state);
        this.enterRule(localContext, 46, RustLiteParser.RULE_vectorType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 374;
                this.match(RustLiteParser.VECTOR_MODULE_NAME);
                this.state = 375;
                this.match(RustLiteParser.LANGLE);
                this.state = 376;
                this.type_();
                this.state = 377;
                this.match(RustLiteParser.RANGLE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    vectorInit() {
        let localContext = new VectorInitContext(this.context, this.state);
        this.enterRule(localContext, 48, RustLiteParser.RULE_vectorInit);
        let _la;
        try {
            this.state = 394;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case RustLiteParser.VECTOR_MODULE_NAME:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 379;
                        this.match(RustLiteParser.VECTOR_MODULE_NAME);
                        this.state = 380;
                        this.match(RustLiteParser.METHOD_ACCESSOR);
                        this.state = 381;
                        this.match(RustLiteParser.NEW);
                        this.state = 385;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                            case RustLiteParser.T__17:
                                {
                                    this.state = 382;
                                    this.match(RustLiteParser.T__17);
                                }
                                break;
                            case RustLiteParser.T__0:
                                {
                                    this.state = 383;
                                    this.match(RustLiteParser.T__0);
                                    this.state = 384;
                                    this.match(RustLiteParser.T__1);
                                }
                                break;
                            default:
                                throw new antlr.NoViableAltException(this);
                        }
                    }
                    break;
                case RustLiteParser.VEC:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 387;
                        this.match(RustLiteParser.VEC);
                        this.state = 388;
                        this.match(RustLiteParser.T__11);
                        this.state = 389;
                        this.match(RustLiteParser.T__19);
                        this.state = 391;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 43 || _la === 44) {
                            {
                                this.state = 390;
                                this.vectorInitList();
                            }
                        }
                        this.state = 393;
                        this.match(RustLiteParser.T__20);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    vectorInitList() {
        let localContext = new VectorInitListContext(this.context, this.state);
        this.enterRule(localContext, 50, RustLiteParser.RULE_vectorInitList);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 396;
                _la = this.tokenStream.LA(1);
                if (!(_la === 43 || _la === 44)) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 402;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 17 || _la === 44) {
                    {
                        this.state = 400;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                            case RustLiteParser.T__16:
                                {
                                    this.state = 397;
                                    this.match(RustLiteParser.T__16);
                                    this.state = 398;
                                    this.match(RustLiteParser.INT);
                                }
                                break;
                            case RustLiteParser.BOOL:
                                {
                                    this.state = 399;
                                    this.match(RustLiteParser.BOOL);
                                }
                                break;
                            default:
                                throw new antlr.NoViableAltException(this);
                        }
                    }
                    this.state = 404;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    vectorPush() {
        let localContext = new VectorPushContext(this.context, this.state);
        this.enterRule(localContext, 52, RustLiteParser.RULE_vectorPush);
        try {
            this.state = 412;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case RustLiteParser.IDENTIFIER:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 405;
                        this.match(RustLiteParser.IDENTIFIER);
                        this.state = 406;
                        this.match(RustLiteParser.T__21);
                        this.state = 407;
                        this.match(RustLiteParser.PUSH);
                        this.state = 408;
                        this.match(RustLiteParser.T__0);
                        this.state = 409;
                        this.match(RustLiteParser.INT);
                    }
                    break;
                case RustLiteParser.BOOL:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 410;
                        this.match(RustLiteParser.BOOL);
                        this.state = 411;
                        this.match(RustLiteParser.T__1);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    vectorPop() {
        let localContext = new VectorPopContext(this.context, this.state);
        this.enterRule(localContext, 54, RustLiteParser.RULE_vectorPop);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 414;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 415;
                this.match(RustLiteParser.T__21);
                this.state = 416;
                this.match(RustLiteParser.POP);
                this.state = 420;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case RustLiteParser.T__17:
                        {
                            this.state = 417;
                            this.match(RustLiteParser.T__17);
                        }
                        break;
                    case RustLiteParser.T__0:
                        {
                            this.state = 418;
                            this.match(RustLiteParser.T__0);
                            this.state = 419;
                            this.match(RustLiteParser.T__1);
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    vectorLen() {
        let localContext = new VectorLenContext(this.context, this.state);
        this.enterRule(localContext, 56, RustLiteParser.RULE_vectorLen);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 422;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 423;
                this.match(RustLiteParser.T__21);
                this.state = 424;
                this.match(RustLiteParser.LEN);
                this.state = 428;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case RustLiteParser.T__17:
                        {
                            this.state = 425;
                            this.match(RustLiteParser.T__17);
                        }
                        break;
                    case RustLiteParser.T__0:
                        {
                            this.state = 426;
                            this.match(RustLiteParser.T__0);
                            this.state = 427;
                            this.match(RustLiteParser.T__1);
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    vectorIndexAccess() {
        let localContext = new VectorIndexAccessContext(this.context, this.state);
        this.enterRule(localContext, 58, RustLiteParser.RULE_vectorIndexAccess);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 430;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 431;
                this.match(RustLiteParser.T__19);
                this.state = 432;
                this.expr();
                this.state = 433;
                this.match(RustLiteParser.T__20);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    vectorAssignment() {
        let localContext = new VectorAssignmentContext(this.context, this.state);
        this.enterRule(localContext, 60, RustLiteParser.RULE_vectorAssignment);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 435;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 436;
                this.match(RustLiteParser.T__19);
                this.state = 437;
                this.expr();
                this.state = 438;
                this.match(RustLiteParser.T__20);
                this.state = 439;
                this.match(RustLiteParser.EQUALS);
                this.state = 440;
                this.vectorExpr();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    vectorExpr() {
        let localContext = new VectorExprContext(this.context, this.state);
        this.enterRule(localContext, 62, RustLiteParser.RULE_vectorExpr);
        try {
            this.state = 448;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 51, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 442;
                        this.vectorInit();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 443;
                        this.vectorPush();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 444;
                        this.vectorPop();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 445;
                        this.vectorLen();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 446;
                        this.vectorIndexAccess();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 447;
                        this.vectorAssignment();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    printlnMacro() {
        let localContext = new PrintlnMacroContext(this.context, this.state);
        this.enterRule(localContext, 64, RustLiteParser.RULE_printlnMacro);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 450;
                this.match(RustLiteParser.PRINTLN);
                this.state = 451;
                this.match(RustLiteParser.T__11);
                this.state = 452;
                this.match(RustLiteParser.T__0);
                this.state = 453;
                this.printlnArgs();
                this.state = 454;
                this.match(RustLiteParser.T__1);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    printlnArgs() {
        let localContext = new PrintlnArgsContext(this.context, this.state);
        this.enterRule(localContext, 66, RustLiteParser.RULE_printlnArgs);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 456;
                this.match(RustLiteParser.STRING);
                this.state = 461;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 17) {
                    {
                        {
                            this.state = 457;
                            this.match(RustLiteParser.T__16);
                            this.state = 458;
                            this.expr();
                        }
                    }
                    this.state = 463;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    sempred(localContext, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 3:
                return this.arithExpr_sempred(localContext, predIndex);
            case 4:
                return this.logicExpr_sempred(localContext, predIndex);
        }
        return true;
    }
    arithExpr_sempred(localContext, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this.context, 4);
            case 1:
                return this.precpred(this.context, 3);
            case 2:
                return this.precpred(this.context, 1);
        }
        return true;
    }
    logicExpr_sempred(localContext, predIndex) {
        switch (predIndex) {
            case 3:
                return this.precpred(this.context, 3);
            case 4:
                return this.precpred(this.context, 2);
        }
        return true;
    }
    static get _ATN() {
        if (!RustLiteParser.__ATN) {
            RustLiteParser.__ATN = new antlr.ATNDeserializer().deserialize(RustLiteParser._serializedATN);
        }
        return RustLiteParser.__ATN;
    }
    get vocabulary() {
        return RustLiteParser.vocabulary;
    }
}
exports.RustLiteParser = RustLiteParser;
RustLiteParser.T__0 = 1;
RustLiteParser.T__1 = 2;
RustLiteParser.T__2 = 3;
RustLiteParser.T__3 = 4;
RustLiteParser.T__4 = 5;
RustLiteParser.T__5 = 6;
RustLiteParser.T__6 = 7;
RustLiteParser.T__7 = 8;
RustLiteParser.T__8 = 9;
RustLiteParser.T__9 = 10;
RustLiteParser.T__10 = 11;
RustLiteParser.T__11 = 12;
RustLiteParser.T__12 = 13;
RustLiteParser.T__13 = 14;
RustLiteParser.T__14 = 15;
RustLiteParser.T__15 = 16;
RustLiteParser.T__16 = 17;
RustLiteParser.T__17 = 18;
RustLiteParser.T__18 = 19;
RustLiteParser.T__19 = 20;
RustLiteParser.T__20 = 21;
RustLiteParser.T__21 = 22;
RustLiteParser.LET = 23;
RustLiteParser.MUT = 24;
RustLiteParser.FN = 25;
RustLiteParser.IF = 26;
RustLiteParser.ELSE = 27;
RustLiteParser.WHILE = 28;
RustLiteParser.RETURN = 29;
RustLiteParser.BREAK = 30;
RustLiteParser.CONTINUE = 31;
RustLiteParser.VEC = 32;
RustLiteParser.NEW = 33;
RustLiteParser.PUSH = 34;
RustLiteParser.POP = 35;
RustLiteParser.LEN = 36;
RustLiteParser.PRINTLN = 37;
RustLiteParser.LANGLE = 38;
RustLiteParser.RANGLE = 39;
RustLiteParser.EQUALS = 40;
RustLiteParser.COLON = 41;
RustLiteParser.SEMICOLON = 42;
RustLiteParser.INT = 43;
RustLiteParser.BOOL = 44;
RustLiteParser.U8_TYPE = 45;
RustLiteParser.U16_TYPE = 46;
RustLiteParser.U32_TYPE = 47;
RustLiteParser.U64_TYPE = 48;
RustLiteParser.I8_TYPE = 49;
RustLiteParser.I16_TYPE = 50;
RustLiteParser.I32_TYPE = 51;
RustLiteParser.I64_TYPE = 52;
RustLiteParser.BOOL_TYPE = 53;
RustLiteParser.STRING = 54;
RustLiteParser.METHOD_ACCESSOR = 55;
RustLiteParser.VECTOR_MODULE_NAME = 56;
RustLiteParser.IDENTIFIER = 57;
RustLiteParser.ERROR_CHAR = 58;
RustLiteParser.WS = 59;
RustLiteParser.COMMENT = 60;
RustLiteParser.RULE_prog = 0;
RustLiteParser.RULE_type = 1;
RustLiteParser.RULE_expr = 2;
RustLiteParser.RULE_arithExpr = 3;
RustLiteParser.RULE_logicExpr = 4;
RustLiteParser.RULE_globalElement = 5;
RustLiteParser.RULE_stmt = 6;
RustLiteParser.RULE_block = 7;
RustLiteParser.RULE_blockContent = 8;
RustLiteParser.RULE_exprStmt = 9;
RustLiteParser.RULE_declareStmt = 10;
RustLiteParser.RULE_condStmt = 11;
RustLiteParser.RULE_whileStmt = 12;
RustLiteParser.RULE_loopControl = 13;
RustLiteParser.RULE_loopControlStmt = 14;
RustLiteParser.RULE_param = 15;
RustLiteParser.RULE_paramList = 16;
RustLiteParser.RULE_returnTypes = 17;
RustLiteParser.RULE_returnType = 18;
RustLiteParser.RULE_returnStmt = 19;
RustLiteParser.RULE_fnDeclareStmt = 20;
RustLiteParser.RULE_argList = 21;
RustLiteParser.RULE_fnCall = 22;
RustLiteParser.RULE_vectorType = 23;
RustLiteParser.RULE_vectorInit = 24;
RustLiteParser.RULE_vectorInitList = 25;
RustLiteParser.RULE_vectorPush = 26;
RustLiteParser.RULE_vectorPop = 27;
RustLiteParser.RULE_vectorLen = 28;
RustLiteParser.RULE_vectorIndexAccess = 29;
RustLiteParser.RULE_vectorAssignment = 30;
RustLiteParser.RULE_vectorExpr = 31;
RustLiteParser.RULE_printlnMacro = 32;
RustLiteParser.RULE_printlnArgs = 33;
RustLiteParser.literalNames = [
    null, "'('", "')'", "'-'", "'*'", "'/'", "'%'", "'+'", "'=='", "'!='",
    "'<='", "'>='", "'!'", "'&&'", "'||'", "'{'", "'}'", "','", "'()'",
    "'->'", "'['", "']'", "'.'", "'let'", "'mut'", "'fn'", "'if'", "'else'",
    "'while'", "'return'", "'break'", "'continue'", "'vec'", "'new'",
    "'push'", "'pop'", "'len'", "'println'", "'<'", "'>'", "'='", "':'",
    "';'", null, null, "'u8'", "'u16'", "'u32'", "'u64'", "'i8'", "'i16'",
    "'i32'", "'i64'", "'bool'", null, "'::'", "'Vec'"
];
RustLiteParser.symbolicNames = [
    null, null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null, null,
    null, "LET", "MUT", "FN", "IF", "ELSE", "WHILE", "RETURN", "BREAK",
    "CONTINUE", "VEC", "NEW", "PUSH", "POP", "LEN", "PRINTLN", "LANGLE",
    "RANGLE", "EQUALS", "COLON", "SEMICOLON", "INT", "BOOL", "U8_TYPE",
    "U16_TYPE", "U32_TYPE", "U64_TYPE", "I8_TYPE", "I16_TYPE", "I32_TYPE",
    "I64_TYPE", "BOOL_TYPE", "STRING", "METHOD_ACCESSOR", "VECTOR_MODULE_NAME",
    "IDENTIFIER", "ERROR_CHAR", "WS", "COMMENT"
];
RustLiteParser.ruleNames = [
    "prog", "type", "expr", "arithExpr", "logicExpr", "globalElement",
    "stmt", "block", "blockContent", "exprStmt", "declareStmt", "condStmt",
    "whileStmt", "loopControl", "loopControlStmt", "param", "paramList",
    "returnTypes", "returnType", "returnStmt", "fnDeclareStmt", "argList",
    "fnCall", "vectorType", "vectorInit", "vectorInitList", "vectorPush",
    "vectorPop", "vectorLen", "vectorIndexAccess", "vectorAssignment",
    "vectorExpr", "printlnMacro", "printlnArgs",
];
RustLiteParser._serializedATN = [
    4, 1, 60, 465, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7,
    6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13,
    2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20,
    7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24, 7, 24, 2, 25, 7, 25, 2, 26, 7, 26,
    2, 27, 7, 27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7, 31, 2, 32, 7, 32, 2, 33,
    7, 33, 1, 0, 5, 0, 70, 8, 0, 10, 0, 12, 0, 73, 9, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 87, 8, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1,
    2, 1, 2, 1, 2, 3, 2, 100, 8, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1,
    3, 3, 3, 113, 8, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 5, 3, 125, 8,
    3, 10, 3, 12, 3, 128, 9, 3, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4,
    1, 4, 1, 4, 1, 4, 1, 4, 3, 4, 145, 8, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 5, 4, 153, 8, 4,
    10, 4, 12, 4, 156, 9, 4, 1, 5, 1, 5, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 3, 6, 168,
    8, 6, 1, 7, 1, 7, 1, 7, 1, 7, 1, 8, 5, 8, 175, 8, 8, 10, 8, 12, 8, 178, 9, 8, 1, 8, 3, 8, 181,
    8, 8, 1, 8, 5, 8, 184, 8, 8, 10, 8, 12, 8, 187, 9, 8, 1, 8, 5, 8, 190, 8, 8, 10, 8, 12, 8,
    193, 9, 8, 1, 8, 1, 8, 1, 8, 5, 8, 198, 8, 8, 10, 8, 12, 8, 201, 9, 8, 1, 8, 3, 8, 204, 8,
    8, 1, 8, 1, 8, 3, 8, 208, 8, 8, 1, 9, 1, 9, 1, 9, 1, 10, 1, 10, 3, 10, 215, 8, 10, 1, 10, 1,
    10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 3, 10, 226, 8, 10, 1, 10, 1, 10, 1,
    10, 1, 10, 1, 10, 1, 10, 1, 10, 3, 10, 235, 8, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1,
    10, 1, 10, 3, 10, 244, 8, 10, 1, 10, 1, 10, 1, 10, 3, 10, 249, 8, 10, 1, 10, 1, 10, 3, 10,
    253, 8, 10, 1, 10, 1, 10, 3, 10, 257, 8, 10, 1, 10, 1, 10, 1, 10, 1, 10, 3, 10, 263, 8,
    10, 1, 10, 3, 10, 266, 8, 10, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 5,
    11, 276, 8, 11, 10, 11, 12, 11, 279, 9, 11, 1, 11, 1, 11, 3, 11, 283, 8, 11, 1, 11, 1,
    11, 1, 11, 1, 11, 1, 11, 1, 11, 3, 11, 291, 8, 11, 3, 11, 293, 8, 11, 1, 12, 1, 12, 1, 12,
    1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 3, 12, 304, 8, 12, 1, 13, 1, 13, 1, 14, 1, 14,
    1, 14, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 3, 15, 316, 8, 15, 1, 16, 1, 16, 1, 16, 5, 16,
    321, 8, 16, 10, 16, 12, 16, 324, 9, 16, 1, 16, 3, 16, 327, 8, 16, 1, 17, 1, 17, 3, 17,
    331, 8, 17, 1, 18, 1, 18, 1, 18, 1, 19, 1, 19, 3, 19, 338, 8, 19, 1, 19, 1, 19, 1, 20, 1,
    20, 1, 20, 1, 20, 3, 20, 346, 8, 20, 1, 20, 1, 20, 3, 20, 350, 8, 20, 1, 20, 3, 20, 353,
    8, 20, 1, 20, 1, 20, 1, 21, 1, 21, 1, 21, 5, 21, 360, 8, 21, 10, 21, 12, 21, 363, 9, 21,
    1, 21, 3, 21, 366, 8, 21, 1, 22, 1, 22, 1, 22, 3, 22, 371, 8, 22, 1, 22, 1, 22, 1, 23, 1,
    23, 1, 23, 1, 23, 1, 23, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 3, 24, 386, 8, 24, 1,
    24, 1, 24, 1, 24, 1, 24, 3, 24, 392, 8, 24, 1, 24, 3, 24, 395, 8, 24, 1, 25, 1, 25, 1, 25,
    1, 25, 5, 25, 401, 8, 25, 10, 25, 12, 25, 404, 9, 25, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26,
    1, 26, 1, 26, 3, 26, 413, 8, 26, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 3, 27, 421, 8,
    27, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 3, 28, 429, 8, 28, 1, 29, 1, 29, 1, 29, 1,
    29, 1, 29, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 1, 31, 1, 31, 1, 31, 1, 31, 1,
    31, 1, 31, 3, 31, 449, 8, 31, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 33, 1, 33, 1,
    33, 5, 33, 460, 8, 33, 10, 33, 12, 33, 463, 9, 33, 1, 33, 0, 2, 6, 8, 34, 0, 2, 4, 6, 8,
    10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52,
    54, 56, 58, 60, 62, 64, 66, 0, 6, 1, 0, 4, 6, 2, 0, 3, 3, 7, 7, 1, 0, 5, 6, 2, 0, 8, 11, 38,
    39, 1, 0, 30, 31, 1, 0, 43, 44, 519, 0, 71, 1, 0, 0, 0, 2, 86, 1, 0, 0, 0, 4, 99, 1, 0, 0,
    0, 6, 112, 1, 0, 0, 0, 8, 144, 1, 0, 0, 0, 10, 157, 1, 0, 0, 0, 12, 167, 1, 0, 0, 0, 14, 169,
    1, 0, 0, 0, 16, 207, 1, 0, 0, 0, 18, 209, 1, 0, 0, 0, 20, 265, 1, 0, 0, 0, 22, 292, 1, 0,
    0, 0, 24, 303, 1, 0, 0, 0, 26, 305, 1, 0, 0, 0, 28, 307, 1, 0, 0, 0, 30, 315, 1, 0, 0, 0,
    32, 317, 1, 0, 0, 0, 34, 330, 1, 0, 0, 0, 36, 332, 1, 0, 0, 0, 38, 335, 1, 0, 0, 0, 40, 341,
    1, 0, 0, 0, 42, 356, 1, 0, 0, 0, 44, 367, 1, 0, 0, 0, 46, 374, 1, 0, 0, 0, 48, 394, 1, 0,
    0, 0, 50, 396, 1, 0, 0, 0, 52, 412, 1, 0, 0, 0, 54, 414, 1, 0, 0, 0, 56, 422, 1, 0, 0, 0,
    58, 430, 1, 0, 0, 0, 60, 435, 1, 0, 0, 0, 62, 448, 1, 0, 0, 0, 64, 450, 1, 0, 0, 0, 66, 456,
    1, 0, 0, 0, 68, 70, 3, 10, 5, 0, 69, 68, 1, 0, 0, 0, 70, 73, 1, 0, 0, 0, 71, 69, 1, 0, 0, 0,
    71, 72, 1, 0, 0, 0, 72, 74, 1, 0, 0, 0, 73, 71, 1, 0, 0, 0, 74, 75, 5, 0, 0, 1, 75, 1, 1, 0,
    0, 0, 76, 87, 5, 45, 0, 0, 77, 87, 5, 46, 0, 0, 78, 87, 5, 47, 0, 0, 79, 87, 5, 48, 0, 0,
    80, 87, 5, 49, 0, 0, 81, 87, 5, 50, 0, 0, 82, 87, 5, 51, 0, 0, 83, 87, 5, 52, 0, 0, 84, 87,
    5, 53, 0, 0, 85, 87, 3, 46, 23, 0, 86, 76, 1, 0, 0, 0, 86, 77, 1, 0, 0, 0, 86, 78, 1, 0, 0,
    0, 86, 79, 1, 0, 0, 0, 86, 80, 1, 0, 0, 0, 86, 81, 1, 0, 0, 0, 86, 82, 1, 0, 0, 0, 86, 83,
    1, 0, 0, 0, 86, 84, 1, 0, 0, 0, 86, 85, 1, 0, 0, 0, 87, 3, 1, 0, 0, 0, 88, 89, 5, 1, 0, 0, 89,
    90, 3, 4, 2, 0, 90, 91, 5, 2, 0, 0, 91, 100, 1, 0, 0, 0, 92, 100, 5, 57, 0, 0, 93, 100, 5,
    43, 0, 0, 94, 100, 5, 44, 0, 0, 95, 100, 3, 6, 3, 0, 96, 100, 3, 8, 4, 0, 97, 100, 3, 44,
    22, 0, 98, 100, 3, 62, 31, 0, 99, 88, 1, 0, 0, 0, 99, 92, 1, 0, 0, 0, 99, 93, 1, 0, 0, 0,
    99, 94, 1, 0, 0, 0, 99, 95, 1, 0, 0, 0, 99, 96, 1, 0, 0, 0, 99, 97, 1, 0, 0, 0, 99, 98, 1,
    0, 0, 0, 100, 5, 1, 0, 0, 0, 101, 102, 6, 3, -1, 0, 102, 113, 5, 43, 0, 0, 103, 113, 5,
    57, 0, 0, 104, 105, 5, 1, 0, 0, 105, 106, 3, 6, 3, 0, 106, 107, 5, 2, 0, 0, 107, 113, 1,
    0, 0, 0, 108, 109, 5, 3, 0, 0, 109, 113, 3, 6, 3, 5, 110, 111, 5, 44, 0, 0, 111, 113, 6,
    3, -1, 0, 112, 101, 1, 0, 0, 0, 112, 103, 1, 0, 0, 0, 112, 104, 1, 0, 0, 0, 112, 108, 1,
    0, 0, 0, 112, 110, 1, 0, 0, 0, 113, 126, 1, 0, 0, 0, 114, 115, 10, 4, 0, 0, 115, 116, 7,
    0, 0, 0, 116, 125, 3, 6, 3, 5, 117, 118, 10, 3, 0, 0, 118, 119, 7, 1, 0, 0, 119, 125, 3,
    6, 3, 4, 120, 121, 10, 1, 0, 0, 121, 122, 7, 2, 0, 0, 122, 123, 5, 43, 0, 0, 123, 125,
    6, 3, -1, 0, 124, 114, 1, 0, 0, 0, 124, 117, 1, 0, 0, 0, 124, 120, 1, 0, 0, 0, 125, 128,
    1, 0, 0, 0, 126, 124, 1, 0, 0, 0, 126, 127, 1, 0, 0, 0, 127, 7, 1, 0, 0, 0, 128, 126, 1,
    0, 0, 0, 129, 130, 6, 4, -1, 0, 130, 145, 5, 44, 0, 0, 131, 145, 5, 57, 0, 0, 132, 133,
    5, 1, 0, 0, 133, 134, 3, 8, 4, 0, 134, 135, 5, 2, 0, 0, 135, 145, 1, 0, 0, 0, 136, 137,
    3, 6, 3, 0, 137, 138, 7, 3, 0, 0, 138, 139, 3, 6, 3, 0, 139, 145, 1, 0, 0, 0, 140, 141,
    5, 12, 0, 0, 141, 145, 3, 8, 4, 4, 142, 143, 5, 43, 0, 0, 143, 145, 6, 4, -1, 0, 144, 129,
    1, 0, 0, 0, 144, 131, 1, 0, 0, 0, 144, 132, 1, 0, 0, 0, 144, 136, 1, 0, 0, 0, 144, 140,
    1, 0, 0, 0, 144, 142, 1, 0, 0, 0, 145, 154, 1, 0, 0, 0, 146, 147, 10, 3, 0, 0, 147, 148,
    5, 13, 0, 0, 148, 153, 3, 8, 4, 4, 149, 150, 10, 2, 0, 0, 150, 151, 5, 14, 0, 0, 151, 153,
    3, 8, 4, 3, 152, 146, 1, 0, 0, 0, 152, 149, 1, 0, 0, 0, 153, 156, 1, 0, 0, 0, 154, 152,
    1, 0, 0, 0, 154, 155, 1, 0, 0, 0, 155, 9, 1, 0, 0, 0, 156, 154, 1, 0, 0, 0, 157, 158, 3,
    40, 20, 0, 158, 11, 1, 0, 0, 0, 159, 168, 3, 18, 9, 0, 160, 168, 3, 20, 10, 0, 161, 168,
    3, 22, 11, 0, 162, 168, 3, 24, 12, 0, 163, 168, 3, 28, 14, 0, 164, 168, 3, 40, 20, 0,
    165, 168, 3, 38, 19, 0, 166, 168, 3, 14, 7, 0, 167, 159, 1, 0, 0, 0, 167, 160, 1, 0, 0,
    0, 167, 161, 1, 0, 0, 0, 167, 162, 1, 0, 0, 0, 167, 163, 1, 0, 0, 0, 167, 164, 1, 0, 0,
    0, 167, 165, 1, 0, 0, 0, 167, 166, 1, 0, 0, 0, 168, 13, 1, 0, 0, 0, 169, 170, 5, 15, 0,
    0, 170, 171, 3, 16, 8, 0, 171, 172, 5, 16, 0, 0, 172, 15, 1, 0, 0, 0, 173, 175, 3, 12,
    6, 0, 174, 173, 1, 0, 0, 0, 175, 178, 1, 0, 0, 0, 176, 174, 1, 0, 0, 0, 176, 177, 1, 0,
    0, 0, 177, 180, 1, 0, 0, 0, 178, 176, 1, 0, 0, 0, 179, 181, 3, 4, 2, 0, 180, 179, 1, 0,
    0, 0, 180, 181, 1, 0, 0, 0, 181, 208, 1, 0, 0, 0, 182, 184, 3, 12, 6, 0, 183, 182, 1, 0,
    0, 0, 184, 187, 1, 0, 0, 0, 185, 183, 1, 0, 0, 0, 185, 186, 1, 0, 0, 0, 186, 208, 1, 0,
    0, 0, 187, 185, 1, 0, 0, 0, 188, 190, 3, 12, 6, 0, 189, 188, 1, 0, 0, 0, 190, 193, 1, 0,
    0, 0, 191, 189, 1, 0, 0, 0, 191, 192, 1, 0, 0, 0, 192, 194, 1, 0, 0, 0, 193, 191, 1, 0,
    0, 0, 194, 199, 3, 4, 2, 0, 195, 198, 3, 12, 6, 0, 196, 198, 3, 4, 2, 0, 197, 195, 1, 0,
    0, 0, 197, 196, 1, 0, 0, 0, 198, 201, 1, 0, 0, 0, 199, 197, 1, 0, 0, 0, 199, 200, 1, 0,
    0, 0, 200, 203, 1, 0, 0, 0, 201, 199, 1, 0, 0, 0, 202, 204, 3, 4, 2, 0, 203, 202, 1, 0,
    0, 0, 203, 204, 1, 0, 0, 0, 204, 205, 1, 0, 0, 0, 205, 206, 6, 8, -1, 0, 206, 208, 1, 0,
    0, 0, 207, 176, 1, 0, 0, 0, 207, 185, 1, 0, 0, 0, 207, 191, 1, 0, 0, 0, 208, 17, 1, 0, 0,
    0, 209, 210, 3, 4, 2, 0, 210, 211, 5, 42, 0, 0, 211, 19, 1, 0, 0, 0, 212, 214, 5, 23, 0,
    0, 213, 215, 5, 24, 0, 0, 214, 213, 1, 0, 0, 0, 214, 215, 1, 0, 0, 0, 215, 216, 1, 0, 0,
    0, 216, 217, 5, 57, 0, 0, 217, 218, 5, 41, 0, 0, 218, 219, 3, 2, 1, 0, 219, 220, 5, 40,
    0, 0, 220, 221, 3, 4, 2, 0, 221, 222, 5, 42, 0, 0, 222, 266, 1, 0, 0, 0, 223, 225, 5, 23,
    0, 0, 224, 226, 5, 24, 0, 0, 225, 224, 1, 0, 0, 0, 225, 226, 1, 0, 0, 0, 226, 227, 1, 0,
    0, 0, 227, 228, 5, 57, 0, 0, 228, 229, 5, 41, 0, 0, 229, 230, 3, 2, 1, 0, 230, 231, 5,
    42, 0, 0, 231, 266, 1, 0, 0, 0, 232, 234, 5, 23, 0, 0, 233, 235, 5, 24, 0, 0, 234, 233,
    1, 0, 0, 0, 234, 235, 1, 0, 0, 0, 235, 236, 1, 0, 0, 0, 236, 237, 5, 57, 0, 0, 237, 238,
    5, 40, 0, 0, 238, 239, 3, 4, 2, 0, 239, 240, 5, 42, 0, 0, 240, 266, 1, 0, 0, 0, 241, 243,
    5, 23, 0, 0, 242, 244, 5, 24, 0, 0, 243, 242, 1, 0, 0, 0, 243, 244, 1, 0, 0, 0, 244, 245,
    1, 0, 0, 0, 245, 246, 5, 57, 0, 0, 246, 248, 6, 10, -1, 0, 247, 249, 5, 42, 0, 0, 248,
    247, 1, 0, 0, 0, 248, 249, 1, 0, 0, 0, 249, 266, 1, 0, 0, 0, 250, 252, 5, 23, 0, 0, 251,
    253, 5, 24, 0, 0, 252, 251, 1, 0, 0, 0, 252, 253, 1, 0, 0, 0, 253, 256, 1, 0, 0, 0, 254,
    255, 5, 41, 0, 0, 255, 257, 3, 2, 1, 0, 256, 254, 1, 0, 0, 0, 256, 257, 1, 0, 0, 0, 257,
    258, 1, 0, 0, 0, 258, 262, 6, 10, -1, 0, 259, 260, 5, 40, 0, 0, 260, 261, 5, 41, 0, 0,
    261, 263, 3, 4, 2, 0, 262, 259, 1, 0, 0, 0, 262, 263, 1, 0, 0, 0, 263, 264, 1, 0, 0, 0,
    264, 266, 5, 42, 0, 0, 265, 212, 1, 0, 0, 0, 265, 223, 1, 0, 0, 0, 265, 232, 1, 0, 0, 0,
    265, 241, 1, 0, 0, 0, 265, 250, 1, 0, 0, 0, 266, 21, 1, 0, 0, 0, 267, 268, 5, 26, 0, 0,
    268, 269, 3, 8, 4, 0, 269, 277, 3, 14, 7, 0, 270, 271, 5, 27, 0, 0, 271, 272, 5, 26, 0,
    0, 272, 273, 3, 8, 4, 0, 273, 274, 3, 14, 7, 0, 274, 276, 1, 0, 0, 0, 275, 270, 1, 0, 0,
    0, 276, 279, 1, 0, 0, 0, 277, 275, 1, 0, 0, 0, 277, 278, 1, 0, 0, 0, 278, 282, 1, 0, 0,
    0, 279, 277, 1, 0, 0, 0, 280, 281, 5, 27, 0, 0, 281, 283, 3, 14, 7, 0, 282, 280, 1, 0,
    0, 0, 282, 283, 1, 0, 0, 0, 283, 293, 1, 0, 0, 0, 284, 285, 5, 26, 0, 0, 285, 286, 3, 4,
    2, 0, 286, 287, 6, 11, -1, 0, 287, 290, 3, 14, 7, 0, 288, 289, 5, 27, 0, 0, 289, 291,
    3, 14, 7, 0, 290, 288, 1, 0, 0, 0, 290, 291, 1, 0, 0, 0, 291, 293, 1, 0, 0, 0, 292, 267,
    1, 0, 0, 0, 292, 284, 1, 0, 0, 0, 293, 23, 1, 0, 0, 0, 294, 295, 5, 28, 0, 0, 295, 296,
    3, 8, 4, 0, 296, 297, 3, 14, 7, 0, 297, 304, 1, 0, 0, 0, 298, 299, 5, 28, 0, 0, 299, 300,
    3, 4, 2, 0, 300, 301, 6, 12, -1, 0, 301, 302, 3, 14, 7, 0, 302, 304, 1, 0, 0, 0, 303, 294,
    1, 0, 0, 0, 303, 298, 1, 0, 0, 0, 304, 25, 1, 0, 0, 0, 305, 306, 7, 4, 0, 0, 306, 27, 1,
    0, 0, 0, 307, 308, 3, 26, 13, 0, 308, 309, 5, 42, 0, 0, 309, 29, 1, 0, 0, 0, 310, 311,
    5, 57, 0, 0, 311, 312, 5, 41, 0, 0, 312, 316, 3, 2, 1, 0, 313, 314, 5, 57, 0, 0, 314, 316,
    6, 15, -1, 0, 315, 310, 1, 0, 0, 0, 315, 313, 1, 0, 0, 0, 316, 31, 1, 0, 0, 0, 317, 322,
    3, 30, 15, 0, 318, 319, 5, 17, 0, 0, 319, 321, 3, 30, 15, 0, 320, 318, 1, 0, 0, 0, 321,
    324, 1, 0, 0, 0, 322, 320, 1, 0, 0, 0, 322, 323, 1, 0, 0, 0, 323, 326, 1, 0, 0, 0, 324,
    322, 1, 0, 0, 0, 325, 327, 5, 17, 0, 0, 326, 325, 1, 0, 0, 0, 326, 327, 1, 0, 0, 0, 327,
    33, 1, 0, 0, 0, 328, 331, 3, 2, 1, 0, 329, 331, 5, 18, 0, 0, 330, 328, 1, 0, 0, 0, 330,
    329, 1, 0, 0, 0, 331, 35, 1, 0, 0, 0, 332, 333, 5, 19, 0, 0, 333, 334, 3, 34, 17, 0, 334,
    37, 1, 0, 0, 0, 335, 337, 5, 29, 0, 0, 336, 338, 3, 4, 2, 0, 337, 336, 1, 0, 0, 0, 337,
    338, 1, 0, 0, 0, 338, 339, 1, 0, 0, 0, 339, 340, 5, 42, 0, 0, 340, 39, 1, 0, 0, 0, 341,
    342, 5, 25, 0, 0, 342, 349, 5, 57, 0, 0, 343, 345, 5, 1, 0, 0, 344, 346, 3, 32, 16, 0,
    345, 344, 1, 0, 0, 0, 345, 346, 1, 0, 0, 0, 346, 347, 1, 0, 0, 0, 347, 350, 5, 2, 0, 0,
    348, 350, 5, 18, 0, 0, 349, 343, 1, 0, 0, 0, 349, 348, 1, 0, 0, 0, 350, 352, 1, 0, 0, 0,
    351, 353, 3, 36, 18, 0, 352, 351, 1, 0, 0, 0, 352, 353, 1, 0, 0, 0, 353, 354, 1, 0, 0,
    0, 354, 355, 3, 14, 7, 0, 355, 41, 1, 0, 0, 0, 356, 361, 3, 4, 2, 0, 357, 358, 5, 17, 0,
    0, 358, 360, 3, 4, 2, 0, 359, 357, 1, 0, 0, 0, 360, 363, 1, 0, 0, 0, 361, 359, 1, 0, 0,
    0, 361, 362, 1, 0, 0, 0, 362, 365, 1, 0, 0, 0, 363, 361, 1, 0, 0, 0, 364, 366, 5, 17, 0,
    0, 365, 364, 1, 0, 0, 0, 365, 366, 1, 0, 0, 0, 366, 43, 1, 0, 0, 0, 367, 368, 5, 57, 0,
    0, 368, 370, 5, 1, 0, 0, 369, 371, 3, 42, 21, 0, 370, 369, 1, 0, 0, 0, 370, 371, 1, 0,
    0, 0, 371, 372, 1, 0, 0, 0, 372, 373, 5, 2, 0, 0, 373, 45, 1, 0, 0, 0, 374, 375, 5, 56,
    0, 0, 375, 376, 5, 38, 0, 0, 376, 377, 3, 2, 1, 0, 377, 378, 5, 39, 0, 0, 378, 47, 1, 0,
    0, 0, 379, 380, 5, 56, 0, 0, 380, 381, 5, 55, 0, 0, 381, 385, 5, 33, 0, 0, 382, 386, 5,
    18, 0, 0, 383, 384, 5, 1, 0, 0, 384, 386, 5, 2, 0, 0, 385, 382, 1, 0, 0, 0, 385, 383, 1,
    0, 0, 0, 386, 395, 1, 0, 0, 0, 387, 388, 5, 32, 0, 0, 388, 389, 5, 12, 0, 0, 389, 391,
    5, 20, 0, 0, 390, 392, 3, 50, 25, 0, 391, 390, 1, 0, 0, 0, 391, 392, 1, 0, 0, 0, 392, 393,
    1, 0, 0, 0, 393, 395, 5, 21, 0, 0, 394, 379, 1, 0, 0, 0, 394, 387, 1, 0, 0, 0, 395, 49,
    1, 0, 0, 0, 396, 402, 7, 5, 0, 0, 397, 398, 5, 17, 0, 0, 398, 401, 5, 43, 0, 0, 399, 401,
    5, 44, 0, 0, 400, 397, 1, 0, 0, 0, 400, 399, 1, 0, 0, 0, 401, 404, 1, 0, 0, 0, 402, 400,
    1, 0, 0, 0, 402, 403, 1, 0, 0, 0, 403, 51, 1, 0, 0, 0, 404, 402, 1, 0, 0, 0, 405, 406, 5,
    57, 0, 0, 406, 407, 5, 22, 0, 0, 407, 408, 5, 34, 0, 0, 408, 409, 5, 1, 0, 0, 409, 413,
    5, 43, 0, 0, 410, 411, 5, 44, 0, 0, 411, 413, 5, 2, 0, 0, 412, 405, 1, 0, 0, 0, 412, 410,
    1, 0, 0, 0, 413, 53, 1, 0, 0, 0, 414, 415, 5, 57, 0, 0, 415, 416, 5, 22, 0, 0, 416, 420,
    5, 35, 0, 0, 417, 421, 5, 18, 0, 0, 418, 419, 5, 1, 0, 0, 419, 421, 5, 2, 0, 0, 420, 417,
    1, 0, 0, 0, 420, 418, 1, 0, 0, 0, 421, 55, 1, 0, 0, 0, 422, 423, 5, 57, 0, 0, 423, 424,
    5, 22, 0, 0, 424, 428, 5, 36, 0, 0, 425, 429, 5, 18, 0, 0, 426, 427, 5, 1, 0, 0, 427, 429,
    5, 2, 0, 0, 428, 425, 1, 0, 0, 0, 428, 426, 1, 0, 0, 0, 429, 57, 1, 0, 0, 0, 430, 431, 5,
    57, 0, 0, 431, 432, 5, 20, 0, 0, 432, 433, 3, 4, 2, 0, 433, 434, 5, 21, 0, 0, 434, 59,
    1, 0, 0, 0, 435, 436, 5, 57, 0, 0, 436, 437, 5, 20, 0, 0, 437, 438, 3, 4, 2, 0, 438, 439,
    5, 21, 0, 0, 439, 440, 5, 40, 0, 0, 440, 441, 3, 62, 31, 0, 441, 61, 1, 0, 0, 0, 442, 449,
    3, 48, 24, 0, 443, 449, 3, 52, 26, 0, 444, 449, 3, 54, 27, 0, 445, 449, 3, 56, 28, 0,
    446, 449, 3, 58, 29, 0, 447, 449, 3, 60, 30, 0, 448, 442, 1, 0, 0, 0, 448, 443, 1, 0,
    0, 0, 448, 444, 1, 0, 0, 0, 448, 445, 1, 0, 0, 0, 448, 446, 1, 0, 0, 0, 448, 447, 1, 0,
    0, 0, 449, 63, 1, 0, 0, 0, 450, 451, 5, 37, 0, 0, 451, 452, 5, 12, 0, 0, 452, 453, 5, 1,
    0, 0, 453, 454, 3, 66, 33, 0, 454, 455, 5, 2, 0, 0, 455, 65, 1, 0, 0, 0, 456, 461, 5, 54,
    0, 0, 457, 458, 5, 17, 0, 0, 458, 460, 3, 4, 2, 0, 459, 457, 1, 0, 0, 0, 460, 463, 1, 0,
    0, 0, 461, 459, 1, 0, 0, 0, 461, 462, 1, 0, 0, 0, 462, 67, 1, 0, 0, 0, 463, 461, 1, 0, 0,
    0, 53, 71, 86, 99, 112, 124, 126, 144, 152, 154, 167, 176, 180, 185, 191, 197, 199,
    203, 207, 214, 225, 234, 243, 248, 252, 256, 262, 265, 277, 282, 290, 292, 303,
    315, 322, 326, 330, 337, 345, 349, 352, 361, 365, 370, 385, 391, 394, 400, 402,
    412, 420, 428, 448, 461
];
RustLiteParser.vocabulary = new antlr.Vocabulary(RustLiteParser.literalNames, RustLiteParser.symbolicNames, []);
RustLiteParser.decisionsToDFA = RustLiteParser._ATN.decisionToState.map((ds, index) => new antlr.DFA(ds, index));
class ProgContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    EOF() {
        return this.getToken(RustLiteParser.EOF, 0);
    }
    globalElement(i) {
        if (i === undefined) {
            return this.getRuleContexts(GlobalElementContext);
        }
        return this.getRuleContext(i, GlobalElementContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_prog;
    }
    enterRule(listener) {
        if (listener.enterProg) {
            listener.enterProg(this);
        }
    }
    exitRule(listener) {
        if (listener.exitProg) {
            listener.exitProg(this);
        }
    }
    accept(visitor) {
        if (visitor.visitProg) {
            return visitor.visitProg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ProgContext = ProgContext;
class TypeContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    U8_TYPE() {
        return this.getToken(RustLiteParser.U8_TYPE, 0);
    }
    U16_TYPE() {
        return this.getToken(RustLiteParser.U16_TYPE, 0);
    }
    U32_TYPE() {
        return this.getToken(RustLiteParser.U32_TYPE, 0);
    }
    U64_TYPE() {
        return this.getToken(RustLiteParser.U64_TYPE, 0);
    }
    I8_TYPE() {
        return this.getToken(RustLiteParser.I8_TYPE, 0);
    }
    I16_TYPE() {
        return this.getToken(RustLiteParser.I16_TYPE, 0);
    }
    I32_TYPE() {
        return this.getToken(RustLiteParser.I32_TYPE, 0);
    }
    I64_TYPE() {
        return this.getToken(RustLiteParser.I64_TYPE, 0);
    }
    BOOL_TYPE() {
        return this.getToken(RustLiteParser.BOOL_TYPE, 0);
    }
    vectorType() {
        return this.getRuleContext(0, VectorTypeContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_type;
    }
    enterRule(listener) {
        if (listener.enterType) {
            listener.enterType(this);
        }
    }
    exitRule(listener) {
        if (listener.exitType) {
            listener.exitType(this);
        }
    }
    accept(visitor) {
        if (visitor.visitType) {
            return visitor.visitType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeContext = TypeContext;
class ExprContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    IDENTIFIER() {
        return this.getToken(RustLiteParser.IDENTIFIER, 0);
    }
    INT() {
        return this.getToken(RustLiteParser.INT, 0);
    }
    BOOL() {
        return this.getToken(RustLiteParser.BOOL, 0);
    }
    arithExpr() {
        return this.getRuleContext(0, ArithExprContext);
    }
    logicExpr() {
        return this.getRuleContext(0, LogicExprContext);
    }
    fnCall() {
        return this.getRuleContext(0, FnCallContext);
    }
    vectorExpr() {
        return this.getRuleContext(0, VectorExprContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_expr;
    }
    enterRule(listener) {
        if (listener.enterExpr) {
            listener.enterExpr(this);
        }
    }
    exitRule(listener) {
        if (listener.exitExpr) {
            listener.exitExpr(this);
        }
    }
    accept(visitor) {
        if (visitor.visitExpr) {
            return visitor.visitExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExprContext = ExprContext;
class ArithExprContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    INT() {
        return this.getToken(RustLiteParser.INT, 0);
    }
    IDENTIFIER() {
        return this.getToken(RustLiteParser.IDENTIFIER, 0);
    }
    arithExpr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ArithExprContext);
        }
        return this.getRuleContext(i, ArithExprContext);
    }
    BOOL() {
        return this.getToken(RustLiteParser.BOOL, 0);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_arithExpr;
    }
    enterRule(listener) {
        if (listener.enterArithExpr) {
            listener.enterArithExpr(this);
        }
    }
    exitRule(listener) {
        if (listener.exitArithExpr) {
            listener.exitArithExpr(this);
        }
    }
    accept(visitor) {
        if (visitor.visitArithExpr) {
            return visitor.visitArithExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ArithExprContext = ArithExprContext;
class LogicExprContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    BOOL() {
        return this.getToken(RustLiteParser.BOOL, 0);
    }
    IDENTIFIER() {
        return this.getToken(RustLiteParser.IDENTIFIER, 0);
    }
    logicExpr(i) {
        if (i === undefined) {
            return this.getRuleContexts(LogicExprContext);
        }
        return this.getRuleContext(i, LogicExprContext);
    }
    arithExpr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ArithExprContext);
        }
        return this.getRuleContext(i, ArithExprContext);
    }
    RANGLE() {
        return this.getToken(RustLiteParser.RANGLE, 0);
    }
    LANGLE() {
        return this.getToken(RustLiteParser.LANGLE, 0);
    }
    INT() {
        return this.getToken(RustLiteParser.INT, 0);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_logicExpr;
    }
    enterRule(listener) {
        if (listener.enterLogicExpr) {
            listener.enterLogicExpr(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLogicExpr) {
            listener.exitLogicExpr(this);
        }
    }
    accept(visitor) {
        if (visitor.visitLogicExpr) {
            return visitor.visitLogicExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LogicExprContext = LogicExprContext;
class GlobalElementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    fnDeclareStmt() {
        return this.getRuleContext(0, FnDeclareStmtContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_globalElement;
    }
    enterRule(listener) {
        if (listener.enterGlobalElement) {
            listener.enterGlobalElement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitGlobalElement) {
            listener.exitGlobalElement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitGlobalElement) {
            return visitor.visitGlobalElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.GlobalElementContext = GlobalElementContext;
class StmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    exprStmt() {
        return this.getRuleContext(0, ExprStmtContext);
    }
    declareStmt() {
        return this.getRuleContext(0, DeclareStmtContext);
    }
    condStmt() {
        return this.getRuleContext(0, CondStmtContext);
    }
    whileStmt() {
        return this.getRuleContext(0, WhileStmtContext);
    }
    loopControlStmt() {
        return this.getRuleContext(0, LoopControlStmtContext);
    }
    fnDeclareStmt() {
        return this.getRuleContext(0, FnDeclareStmtContext);
    }
    returnStmt() {
        return this.getRuleContext(0, ReturnStmtContext);
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_stmt;
    }
    enterRule(listener) {
        if (listener.enterStmt) {
            listener.enterStmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitStmt) {
            listener.exitStmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitStmt) {
            return visitor.visitStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StmtContext = StmtContext;
class BlockContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    blockContent() {
        return this.getRuleContext(0, BlockContentContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_block;
    }
    enterRule(listener) {
        if (listener.enterBlock) {
            listener.enterBlock(this);
        }
    }
    exitRule(listener) {
        if (listener.exitBlock) {
            listener.exitBlock(this);
        }
    }
    accept(visitor) {
        if (visitor.visitBlock) {
            return visitor.visitBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BlockContext = BlockContext;
class BlockContentContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    stmt(i) {
        if (i === undefined) {
            return this.getRuleContexts(StmtContext);
        }
        return this.getRuleContext(i, StmtContext);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        return this.getRuleContext(i, ExprContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_blockContent;
    }
    enterRule(listener) {
        if (listener.enterBlockContent) {
            listener.enterBlockContent(this);
        }
    }
    exitRule(listener) {
        if (listener.exitBlockContent) {
            listener.exitBlockContent(this);
        }
    }
    accept(visitor) {
        if (visitor.visitBlockContent) {
            return visitor.visitBlockContent(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BlockContentContext = BlockContentContext;
class ExprStmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    SEMICOLON() {
        return this.getToken(RustLiteParser.SEMICOLON, 0);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_exprStmt;
    }
    enterRule(listener) {
        if (listener.enterExprStmt) {
            listener.enterExprStmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitExprStmt) {
            listener.exitExprStmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitExprStmt) {
            return visitor.visitExprStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExprStmtContext = ExprStmtContext;
class DeclareStmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LET() {
        return this.getToken(RustLiteParser.LET, 0);
    }
    IDENTIFIER() {
        return this.getToken(RustLiteParser.IDENTIFIER, 0);
    }
    COLON(i) {
        if (i === undefined) {
            return this.getTokens(RustLiteParser.COLON);
        }
        else {
            return this.getToken(RustLiteParser.COLON, i);
        }
    }
    type() {
        return this.getRuleContext(0, TypeContext);
    }
    EQUALS() {
        return this.getToken(RustLiteParser.EQUALS, 0);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    SEMICOLON() {
        return this.getToken(RustLiteParser.SEMICOLON, 0);
    }
    MUT() {
        return this.getToken(RustLiteParser.MUT, 0);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_declareStmt;
    }
    enterRule(listener) {
        if (listener.enterDeclareStmt) {
            listener.enterDeclareStmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDeclareStmt) {
            listener.exitDeclareStmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDeclareStmt) {
            return visitor.visitDeclareStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DeclareStmtContext = DeclareStmtContext;
class CondStmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    IF(i) {
        if (i === undefined) {
            return this.getTokens(RustLiteParser.IF);
        }
        else {
            return this.getToken(RustLiteParser.IF, i);
        }
    }
    logicExpr(i) {
        if (i === undefined) {
            return this.getRuleContexts(LogicExprContext);
        }
        return this.getRuleContext(i, LogicExprContext);
    }
    block(i) {
        if (i === undefined) {
            return this.getRuleContexts(BlockContext);
        }
        return this.getRuleContext(i, BlockContext);
    }
    ELSE(i) {
        if (i === undefined) {
            return this.getTokens(RustLiteParser.ELSE);
        }
        else {
            return this.getToken(RustLiteParser.ELSE, i);
        }
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_condStmt;
    }
    enterRule(listener) {
        if (listener.enterCondStmt) {
            listener.enterCondStmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCondStmt) {
            listener.exitCondStmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCondStmt) {
            return visitor.visitCondStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CondStmtContext = CondStmtContext;
class WhileStmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    WHILE() {
        return this.getToken(RustLiteParser.WHILE, 0);
    }
    logicExpr() {
        return this.getRuleContext(0, LogicExprContext);
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_whileStmt;
    }
    enterRule(listener) {
        if (listener.enterWhileStmt) {
            listener.enterWhileStmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitWhileStmt) {
            listener.exitWhileStmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitWhileStmt) {
            return visitor.visitWhileStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.WhileStmtContext = WhileStmtContext;
class LoopControlContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    BREAK() {
        return this.getToken(RustLiteParser.BREAK, 0);
    }
    CONTINUE() {
        return this.getToken(RustLiteParser.CONTINUE, 0);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_loopControl;
    }
    enterRule(listener) {
        if (listener.enterLoopControl) {
            listener.enterLoopControl(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLoopControl) {
            listener.exitLoopControl(this);
        }
    }
    accept(visitor) {
        if (visitor.visitLoopControl) {
            return visitor.visitLoopControl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LoopControlContext = LoopControlContext;
class LoopControlStmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    loopControl() {
        return this.getRuleContext(0, LoopControlContext);
    }
    SEMICOLON() {
        return this.getToken(RustLiteParser.SEMICOLON, 0);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_loopControlStmt;
    }
    enterRule(listener) {
        if (listener.enterLoopControlStmt) {
            listener.enterLoopControlStmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLoopControlStmt) {
            listener.exitLoopControlStmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitLoopControlStmt) {
            return visitor.visitLoopControlStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LoopControlStmtContext = LoopControlStmtContext;
class ParamContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    IDENTIFIER() {
        return this.getToken(RustLiteParser.IDENTIFIER, 0);
    }
    COLON() {
        return this.getToken(RustLiteParser.COLON, 0);
    }
    type() {
        return this.getRuleContext(0, TypeContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_param;
    }
    enterRule(listener) {
        if (listener.enterParam) {
            listener.enterParam(this);
        }
    }
    exitRule(listener) {
        if (listener.exitParam) {
            listener.exitParam(this);
        }
    }
    accept(visitor) {
        if (visitor.visitParam) {
            return visitor.visitParam(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParamContext = ParamContext;
class ParamListContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    param(i) {
        if (i === undefined) {
            return this.getRuleContexts(ParamContext);
        }
        return this.getRuleContext(i, ParamContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_paramList;
    }
    enterRule(listener) {
        if (listener.enterParamList) {
            listener.enterParamList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitParamList) {
            listener.exitParamList(this);
        }
    }
    accept(visitor) {
        if (visitor.visitParamList) {
            return visitor.visitParamList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParamListContext = ParamListContext;
class ReturnTypesContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    type() {
        return this.getRuleContext(0, TypeContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_returnTypes;
    }
    enterRule(listener) {
        if (listener.enterReturnTypes) {
            listener.enterReturnTypes(this);
        }
    }
    exitRule(listener) {
        if (listener.exitReturnTypes) {
            listener.exitReturnTypes(this);
        }
    }
    accept(visitor) {
        if (visitor.visitReturnTypes) {
            return visitor.visitReturnTypes(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ReturnTypesContext = ReturnTypesContext;
class ReturnTypeContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    returnTypes() {
        return this.getRuleContext(0, ReturnTypesContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_returnType;
    }
    enterRule(listener) {
        if (listener.enterReturnType) {
            listener.enterReturnType(this);
        }
    }
    exitRule(listener) {
        if (listener.exitReturnType) {
            listener.exitReturnType(this);
        }
    }
    accept(visitor) {
        if (visitor.visitReturnType) {
            return visitor.visitReturnType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ReturnTypeContext = ReturnTypeContext;
class ReturnStmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    RETURN() {
        return this.getToken(RustLiteParser.RETURN, 0);
    }
    SEMICOLON() {
        return this.getToken(RustLiteParser.SEMICOLON, 0);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_returnStmt;
    }
    enterRule(listener) {
        if (listener.enterReturnStmt) {
            listener.enterReturnStmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitReturnStmt) {
            listener.exitReturnStmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitReturnStmt) {
            return visitor.visitReturnStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ReturnStmtContext = ReturnStmtContext;
class FnDeclareStmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    FN() {
        return this.getToken(RustLiteParser.FN, 0);
    }
    IDENTIFIER() {
        return this.getToken(RustLiteParser.IDENTIFIER, 0);
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    returnType() {
        return this.getRuleContext(0, ReturnTypeContext);
    }
    paramList() {
        return this.getRuleContext(0, ParamListContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_fnDeclareStmt;
    }
    enterRule(listener) {
        if (listener.enterFnDeclareStmt) {
            listener.enterFnDeclareStmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFnDeclareStmt) {
            listener.exitFnDeclareStmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitFnDeclareStmt) {
            return visitor.visitFnDeclareStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FnDeclareStmtContext = FnDeclareStmtContext;
class ArgListContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        return this.getRuleContext(i, ExprContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_argList;
    }
    enterRule(listener) {
        if (listener.enterArgList) {
            listener.enterArgList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitArgList) {
            listener.exitArgList(this);
        }
    }
    accept(visitor) {
        if (visitor.visitArgList) {
            return visitor.visitArgList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ArgListContext = ArgListContext;
class FnCallContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    IDENTIFIER() {
        return this.getToken(RustLiteParser.IDENTIFIER, 0);
    }
    argList() {
        return this.getRuleContext(0, ArgListContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_fnCall;
    }
    enterRule(listener) {
        if (listener.enterFnCall) {
            listener.enterFnCall(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFnCall) {
            listener.exitFnCall(this);
        }
    }
    accept(visitor) {
        if (visitor.visitFnCall) {
            return visitor.visitFnCall(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FnCallContext = FnCallContext;
class VectorTypeContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    VECTOR_MODULE_NAME() {
        return this.getToken(RustLiteParser.VECTOR_MODULE_NAME, 0);
    }
    LANGLE() {
        return this.getToken(RustLiteParser.LANGLE, 0);
    }
    type() {
        return this.getRuleContext(0, TypeContext);
    }
    RANGLE() {
        return this.getToken(RustLiteParser.RANGLE, 0);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_vectorType;
    }
    enterRule(listener) {
        if (listener.enterVectorType) {
            listener.enterVectorType(this);
        }
    }
    exitRule(listener) {
        if (listener.exitVectorType) {
            listener.exitVectorType(this);
        }
    }
    accept(visitor) {
        if (visitor.visitVectorType) {
            return visitor.visitVectorType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VectorTypeContext = VectorTypeContext;
class VectorInitContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    VECTOR_MODULE_NAME() {
        return this.getToken(RustLiteParser.VECTOR_MODULE_NAME, 0);
    }
    METHOD_ACCESSOR() {
        return this.getToken(RustLiteParser.METHOD_ACCESSOR, 0);
    }
    NEW() {
        return this.getToken(RustLiteParser.NEW, 0);
    }
    VEC() {
        return this.getToken(RustLiteParser.VEC, 0);
    }
    vectorInitList() {
        return this.getRuleContext(0, VectorInitListContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_vectorInit;
    }
    enterRule(listener) {
        if (listener.enterVectorInit) {
            listener.enterVectorInit(this);
        }
    }
    exitRule(listener) {
        if (listener.exitVectorInit) {
            listener.exitVectorInit(this);
        }
    }
    accept(visitor) {
        if (visitor.visitVectorInit) {
            return visitor.visitVectorInit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VectorInitContext = VectorInitContext;
class VectorInitListContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    INT(i) {
        if (i === undefined) {
            return this.getTokens(RustLiteParser.INT);
        }
        else {
            return this.getToken(RustLiteParser.INT, i);
        }
    }
    BOOL(i) {
        if (i === undefined) {
            return this.getTokens(RustLiteParser.BOOL);
        }
        else {
            return this.getToken(RustLiteParser.BOOL, i);
        }
    }
    get ruleIndex() {
        return RustLiteParser.RULE_vectorInitList;
    }
    enterRule(listener) {
        if (listener.enterVectorInitList) {
            listener.enterVectorInitList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitVectorInitList) {
            listener.exitVectorInitList(this);
        }
    }
    accept(visitor) {
        if (visitor.visitVectorInitList) {
            return visitor.visitVectorInitList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VectorInitListContext = VectorInitListContext;
class VectorPushContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    IDENTIFIER() {
        return this.getToken(RustLiteParser.IDENTIFIER, 0);
    }
    PUSH() {
        return this.getToken(RustLiteParser.PUSH, 0);
    }
    INT() {
        return this.getToken(RustLiteParser.INT, 0);
    }
    BOOL() {
        return this.getToken(RustLiteParser.BOOL, 0);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_vectorPush;
    }
    enterRule(listener) {
        if (listener.enterVectorPush) {
            listener.enterVectorPush(this);
        }
    }
    exitRule(listener) {
        if (listener.exitVectorPush) {
            listener.exitVectorPush(this);
        }
    }
    accept(visitor) {
        if (visitor.visitVectorPush) {
            return visitor.visitVectorPush(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VectorPushContext = VectorPushContext;
class VectorPopContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    IDENTIFIER() {
        return this.getToken(RustLiteParser.IDENTIFIER, 0);
    }
    POP() {
        return this.getToken(RustLiteParser.POP, 0);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_vectorPop;
    }
    enterRule(listener) {
        if (listener.enterVectorPop) {
            listener.enterVectorPop(this);
        }
    }
    exitRule(listener) {
        if (listener.exitVectorPop) {
            listener.exitVectorPop(this);
        }
    }
    accept(visitor) {
        if (visitor.visitVectorPop) {
            return visitor.visitVectorPop(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VectorPopContext = VectorPopContext;
class VectorLenContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    IDENTIFIER() {
        return this.getToken(RustLiteParser.IDENTIFIER, 0);
    }
    LEN() {
        return this.getToken(RustLiteParser.LEN, 0);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_vectorLen;
    }
    enterRule(listener) {
        if (listener.enterVectorLen) {
            listener.enterVectorLen(this);
        }
    }
    exitRule(listener) {
        if (listener.exitVectorLen) {
            listener.exitVectorLen(this);
        }
    }
    accept(visitor) {
        if (visitor.visitVectorLen) {
            return visitor.visitVectorLen(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VectorLenContext = VectorLenContext;
class VectorIndexAccessContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    IDENTIFIER() {
        return this.getToken(RustLiteParser.IDENTIFIER, 0);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_vectorIndexAccess;
    }
    enterRule(listener) {
        if (listener.enterVectorIndexAccess) {
            listener.enterVectorIndexAccess(this);
        }
    }
    exitRule(listener) {
        if (listener.exitVectorIndexAccess) {
            listener.exitVectorIndexAccess(this);
        }
    }
    accept(visitor) {
        if (visitor.visitVectorIndexAccess) {
            return visitor.visitVectorIndexAccess(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VectorIndexAccessContext = VectorIndexAccessContext;
class VectorAssignmentContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    IDENTIFIER() {
        return this.getToken(RustLiteParser.IDENTIFIER, 0);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    EQUALS() {
        return this.getToken(RustLiteParser.EQUALS, 0);
    }
    vectorExpr() {
        return this.getRuleContext(0, VectorExprContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_vectorAssignment;
    }
    enterRule(listener) {
        if (listener.enterVectorAssignment) {
            listener.enterVectorAssignment(this);
        }
    }
    exitRule(listener) {
        if (listener.exitVectorAssignment) {
            listener.exitVectorAssignment(this);
        }
    }
    accept(visitor) {
        if (visitor.visitVectorAssignment) {
            return visitor.visitVectorAssignment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VectorAssignmentContext = VectorAssignmentContext;
class VectorExprContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    vectorInit() {
        return this.getRuleContext(0, VectorInitContext);
    }
    vectorPush() {
        return this.getRuleContext(0, VectorPushContext);
    }
    vectorPop() {
        return this.getRuleContext(0, VectorPopContext);
    }
    vectorLen() {
        return this.getRuleContext(0, VectorLenContext);
    }
    vectorIndexAccess() {
        return this.getRuleContext(0, VectorIndexAccessContext);
    }
    vectorAssignment() {
        return this.getRuleContext(0, VectorAssignmentContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_vectorExpr;
    }
    enterRule(listener) {
        if (listener.enterVectorExpr) {
            listener.enterVectorExpr(this);
        }
    }
    exitRule(listener) {
        if (listener.exitVectorExpr) {
            listener.exitVectorExpr(this);
        }
    }
    accept(visitor) {
        if (visitor.visitVectorExpr) {
            return visitor.visitVectorExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VectorExprContext = VectorExprContext;
class PrintlnMacroContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    PRINTLN() {
        return this.getToken(RustLiteParser.PRINTLN, 0);
    }
    printlnArgs() {
        return this.getRuleContext(0, PrintlnArgsContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_printlnMacro;
    }
    enterRule(listener) {
        if (listener.enterPrintlnMacro) {
            listener.enterPrintlnMacro(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPrintlnMacro) {
            listener.exitPrintlnMacro(this);
        }
    }
    accept(visitor) {
        if (visitor.visitPrintlnMacro) {
            return visitor.visitPrintlnMacro(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PrintlnMacroContext = PrintlnMacroContext;
class PrintlnArgsContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    STRING() {
        return this.getToken(RustLiteParser.STRING, 0);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        return this.getRuleContext(i, ExprContext);
    }
    get ruleIndex() {
        return RustLiteParser.RULE_printlnArgs;
    }
    enterRule(listener) {
        if (listener.enterPrintlnArgs) {
            listener.enterPrintlnArgs(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPrintlnArgs) {
            listener.exitPrintlnArgs(this);
        }
    }
    accept(visitor) {
        if (visitor.visitPrintlnArgs) {
            return visitor.visitPrintlnArgs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PrintlnArgsContext = PrintlnArgsContext;
