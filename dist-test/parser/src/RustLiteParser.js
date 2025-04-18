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
exports.PrintlnArgsContext = exports.PrintlnMacroContext = exports.VectorExprContext = exports.VectorIndexAccessContext = exports.VectorLenContext = exports.VectorInitListContext = exports.VectorInitContext = exports.VectorTypeContext = exports.FnCallContext = exports.ArgListContext = exports.FnDeclareStmtContext = exports.ReturnStmtContext = exports.ReturnTypeContext = exports.ParamListContext = exports.ParamContext = exports.LoopControlStmtContext = exports.LoopControlContext = exports.WhileStmtContext = exports.CondStmtContext = exports.DeclareStmtContext = exports.ExprStmtContext = exports.BlockContentContext = exports.BlockContext = exports.StmtContext = exports.GlobalElementContext = exports.LogicExprContext = exports.ArithExprContext = exports.ExprContext = exports.TypeContext = exports.ProgContext = exports.RustLiteParser = void 0;
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
                this.state = 63;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 25) {
                    {
                        {
                            this.state = 60;
                            this.globalElement();
                        }
                    }
                    this.state = 65;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 66;
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
            this.state = 72;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case RustLiteParser.U64_TYPE:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 68;
                        this.match(RustLiteParser.U64_TYPE);
                    }
                    break;
                case RustLiteParser.I64_TYPE:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 69;
                        this.match(RustLiteParser.I64_TYPE);
                    }
                    break;
                case RustLiteParser.BOOL_TYPE:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 70;
                        this.match(RustLiteParser.BOOL_TYPE);
                    }
                    break;
                case RustLiteParser.VECTOR_MODULE_NAME:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 71;
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
            this.state = 85;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 2, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 74;
                        this.match(RustLiteParser.T__0);
                        this.state = 75;
                        localContext._inner = this.expr();
                        this.state = 76;
                        this.match(RustLiteParser.T__1);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 78;
                        localContext._primary = this.match(RustLiteParser.IDENTIFIER);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 79;
                        localContext._primary = this.match(RustLiteParser.INT);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 80;
                        localContext._primary = this.match(RustLiteParser.BOOL);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 81;
                        this.arithExpr(0);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 82;
                        this.logicExpr(0);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 83;
                        this.fnCall();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(localContext, 8);
                    {
                        this.state = 84;
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
                this.state = 99;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 3, this.context)) {
                    case 1:
                        {
                            this.state = 88;
                            localContext._primary = this.match(RustLiteParser.INT);
                        }
                        break;
                    case 2:
                        {
                            this.state = 89;
                            localContext._primary = this.match(RustLiteParser.IDENTIFIER);
                        }
                        break;
                    case 3:
                        {
                            this.state = 90;
                            this.fnCall();
                        }
                        break;
                    case 4:
                        {
                            this.state = 91;
                            this.match(RustLiteParser.T__0);
                            this.state = 92;
                            localContext._inner = this.arithExpr(0);
                            this.state = 93;
                            this.match(RustLiteParser.T__1);
                        }
                        break;
                    case 5:
                        {
                            this.state = 95;
                            localContext._op = this.match(RustLiteParser.T__2);
                            this.state = 96;
                            localContext._right = this.arithExpr(5);
                        }
                        break;
                    case 6:
                        {
                            this.state = 97;
                            this.match(RustLiteParser.BOOL);
                            this.notifyErrorListeners("Cannot use boolean in arithmetic expressions", null, null);
                        }
                        break;
                }
                this.context.stop = this.tokenStream.LT(-1);
                this.state = 113;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 5, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        if (this.parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        previousContext = localContext;
                        {
                            this.state = 111;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 4, this.context)) {
                                case 1:
                                    {
                                        localContext = new ArithExprContext(parentContext, parentState);
                                        localContext._left = previousContext;
                                        this.pushNewRecursionContext(localContext, _startState, RustLiteParser.RULE_arithExpr);
                                        this.state = 101;
                                        if (!(this.precpred(this.context, 4))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                                        }
                                        this.state = 102;
                                        localContext._op = this.tokenStream.LT(1);
                                        _la = this.tokenStream.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 112) !== 0))) {
                                            localContext._op = this.errorHandler.recoverInline(this);
                                        }
                                        else {
                                            this.errorHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 103;
                                        localContext._right = this.arithExpr(5);
                                    }
                                    break;
                                case 2:
                                    {
                                        localContext = new ArithExprContext(parentContext, parentState);
                                        localContext._left = previousContext;
                                        this.pushNewRecursionContext(localContext, _startState, RustLiteParser.RULE_arithExpr);
                                        this.state = 104;
                                        if (!(this.precpred(this.context, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                                        }
                                        this.state = 105;
                                        localContext._op = this.tokenStream.LT(1);
                                        _la = this.tokenStream.LA(1);
                                        if (!(_la === 3 || _la === 7)) {
                                            localContext._op = this.errorHandler.recoverInline(this);
                                        }
                                        else {
                                            this.errorHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 106;
                                        localContext._right = this.arithExpr(4);
                                    }
                                    break;
                                case 3:
                                    {
                                        localContext = new ArithExprContext(parentContext, parentState);
                                        localContext._left = previousContext;
                                        this.pushNewRecursionContext(localContext, _startState, RustLiteParser.RULE_arithExpr);
                                        this.state = 107;
                                        if (!(this.precpred(this.context, 1))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                                        }
                                        this.state = 108;
                                        localContext._op = this.tokenStream.LT(1);
                                        _la = this.tokenStream.LA(1);
                                        if (!(_la === 5 || _la === 6)) {
                                            localContext._op = this.errorHandler.recoverInline(this);
                                        }
                                        else {
                                            this.errorHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 109;
                                        this.match(RustLiteParser.INT);
                                        if ((localContext._right != null ? this.tokenStream.getTextFromRange(localContext._right.start, localContext._right.stop) : '') === "0")
                                            this.notifyErrorListeners("Division by zero", null, null);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 115;
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
                this.state = 132;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 6, this.context)) {
                    case 1:
                        {
                            this.state = 117;
                            localContext._primary = this.match(RustLiteParser.BOOL);
                        }
                        break;
                    case 2:
                        {
                            this.state = 118;
                            localContext._primary = this.match(RustLiteParser.IDENTIFIER);
                        }
                        break;
                    case 3:
                        {
                            this.state = 119;
                            this.fnCall();
                        }
                        break;
                    case 4:
                        {
                            this.state = 120;
                            this.match(RustLiteParser.T__0);
                            this.state = 121;
                            localContext._inner = this.logicExpr(0);
                            this.state = 122;
                            this.match(RustLiteParser.T__1);
                        }
                        break;
                    case 5:
                        {
                            this.state = 124;
                            localContext._arithLeft = this.arithExpr(0);
                            this.state = 125;
                            localContext._op = this.tokenStream.LT(1);
                            _la = this.tokenStream.LA(1);
                            if (!(((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & 3221225487) !== 0))) {
                                localContext._op = this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 126;
                            localContext._arithRight = this.arithExpr(0);
                        }
                        break;
                    case 6:
                        {
                            this.state = 128;
                            localContext._op = this.match(RustLiteParser.T__11);
                            this.state = 129;
                            localContext._right = this.logicExpr(4);
                        }
                        break;
                    case 7:
                        {
                            this.state = 130;
                            this.match(RustLiteParser.INT);
                            this.notifyErrorListeners("Cannot use INT without comparison operators in logical expressions", null, null);
                        }
                        break;
                }
                this.context.stop = this.tokenStream.LT(-1);
                this.state = 142;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 8, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        if (this.parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        previousContext = localContext;
                        {
                            this.state = 140;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 7, this.context)) {
                                case 1:
                                    {
                                        localContext = new LogicExprContext(parentContext, parentState);
                                        localContext._left = previousContext;
                                        this.pushNewRecursionContext(localContext, _startState, RustLiteParser.RULE_logicExpr);
                                        this.state = 134;
                                        if (!(this.precpred(this.context, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                                        }
                                        this.state = 135;
                                        localContext._op = this.match(RustLiteParser.T__12);
                                        this.state = 136;
                                        localContext._right = this.logicExpr(4);
                                    }
                                    break;
                                case 2:
                                    {
                                        localContext = new LogicExprContext(parentContext, parentState);
                                        localContext._left = previousContext;
                                        this.pushNewRecursionContext(localContext, _startState, RustLiteParser.RULE_logicExpr);
                                        this.state = 137;
                                        if (!(this.precpred(this.context, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                                        }
                                        this.state = 138;
                                        localContext._op = this.match(RustLiteParser.T__13);
                                        this.state = 139;
                                        localContext._right = this.logicExpr(3);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 144;
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
                this.state = 145;
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
            this.state = 155;
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
                        this.state = 147;
                        this.exprStmt();
                    }
                    break;
                case RustLiteParser.LET:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 148;
                        this.declareStmt();
                    }
                    break;
                case RustLiteParser.IF:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 149;
                        this.condStmt();
                    }
                    break;
                case RustLiteParser.WHILE:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 150;
                        this.whileStmt();
                    }
                    break;
                case RustLiteParser.BREAK:
                case RustLiteParser.CONTINUE:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 151;
                        this.loopControlStmt();
                    }
                    break;
                case RustLiteParser.FN:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 152;
                        this.fnDeclareStmt();
                    }
                    break;
                case RustLiteParser.RETURN:
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 153;
                        this.returnStmt();
                    }
                    break;
                case RustLiteParser.T__14:
                    this.enterOuterAlt(localContext, 8);
                    {
                        this.state = 154;
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
                this.state = 157;
                this.match(RustLiteParser.T__14);
                this.state = 158;
                this.blockContent();
                this.state = 159;
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
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 164;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 10, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 161;
                                this.stmt();
                            }
                        }
                    }
                    this.state = 166;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 10, this.context);
                }
                this.state = 168;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4106) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 792577) !== 0)) {
                    {
                        this.state = 167;
                        localContext._finalExpr = this.expr();
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
    exprStmt() {
        let localContext = new ExprStmtContext(this.context, this.state);
        this.enterRule(localContext, 18, RustLiteParser.RULE_exprStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 170;
                this.expr();
                this.state = 171;
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
            this.state = 205;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 15, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 173;
                        this.match(RustLiteParser.LET);
                        this.state = 174;
                        this.match(RustLiteParser.IDENTIFIER);
                        this.state = 175;
                        this.match(RustLiteParser.COLON);
                        this.state = 176;
                        this.type_();
                        this.state = 177;
                        this.match(RustLiteParser.EQUALS);
                        this.state = 178;
                        this.expr();
                        this.state = 179;
                        this.match(RustLiteParser.SEMICOLON);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 181;
                        this.match(RustLiteParser.LET);
                        this.state = 182;
                        this.match(RustLiteParser.IDENTIFIER);
                        this.state = 183;
                        this.match(RustLiteParser.EQUALS);
                        this.state = 184;
                        this.expr();
                        this.state = 185;
                        this.match(RustLiteParser.SEMICOLON);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 187;
                        this.match(RustLiteParser.LET);
                        this.state = 188;
                        this.match(RustLiteParser.IDENTIFIER);
                        this.notifyErrorListeners("Type annotations needed", null, null);
                        this.state = 191;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 42) {
                            {
                                this.state = 190;
                                this.match(RustLiteParser.SEMICOLON);
                            }
                        }
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 193;
                        this.match(RustLiteParser.LET);
                        this.state = 196;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 41) {
                            {
                                this.state = 194;
                                this.match(RustLiteParser.COLON);
                                this.state = 195;
                                this.type_();
                            }
                        }
                        this.notifyErrorListeners("Expected identifier", null, null);
                        this.state = 202;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 40) {
                            {
                                this.state = 199;
                                this.match(RustLiteParser.EQUALS);
                                this.state = 200;
                                this.match(RustLiteParser.COLON);
                                this.state = 201;
                                this.expr();
                            }
                        }
                        this.state = 204;
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
            this.state = 232;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 19, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 207;
                        this.match(RustLiteParser.IF);
                        this.state = 208;
                        this.logicExpr(0);
                        this.state = 209;
                        this.block();
                        this.state = 217;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 16, this.context);
                        while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                            if (alternative === 1) {
                                {
                                    {
                                        this.state = 210;
                                        this.match(RustLiteParser.ELSE);
                                        this.state = 211;
                                        this.match(RustLiteParser.IF);
                                        this.state = 212;
                                        this.logicExpr(0);
                                        this.state = 213;
                                        this.block();
                                    }
                                }
                            }
                            this.state = 219;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 16, this.context);
                        }
                        this.state = 222;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 27) {
                            {
                                this.state = 220;
                                this.match(RustLiteParser.ELSE);
                                this.state = 221;
                                this.block();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 224;
                        this.match(RustLiteParser.IF);
                        this.state = 225;
                        this.expr();
                        this.notifyErrorListeners("Condition must be a boolean expression", null, null);
                        this.state = 227;
                        this.block();
                        this.state = 230;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 27) {
                            {
                                this.state = 228;
                                this.match(RustLiteParser.ELSE);
                                this.state = 229;
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
            this.state = 243;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 20, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 234;
                        this.match(RustLiteParser.WHILE);
                        this.state = 235;
                        this.logicExpr(0);
                        this.state = 236;
                        this.block();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 238;
                        this.match(RustLiteParser.WHILE);
                        this.state = 239;
                        this.expr();
                        this.notifyErrorListeners("Condition must be a boolean expression", null, null);
                        this.state = 241;
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
                this.state = 245;
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
                this.state = 247;
                this.loopControl();
                this.state = 248;
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
            this.state = 255;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 21, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 250;
                        this.match(RustLiteParser.IDENTIFIER);
                        this.state = 251;
                        this.match(RustLiteParser.COLON);
                        this.state = 252;
                        this.type_();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 253;
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
                this.state = 257;
                this.param();
                this.state = 262;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 22, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 258;
                                this.match(RustLiteParser.T__16);
                                this.state = 259;
                                this.param();
                            }
                        }
                    }
                    this.state = 264;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 22, this.context);
                }
                this.state = 266;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 17) {
                    {
                        this.state = 265;
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
    returnType() {
        let localContext = new ReturnTypeContext(this.context, this.state);
        this.enterRule(localContext, 34, RustLiteParser.RULE_returnType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 268;
                this.match(RustLiteParser.T__17);
                this.state = 271;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case RustLiteParser.U64_TYPE:
                    case RustLiteParser.I64_TYPE:
                    case RustLiteParser.BOOL_TYPE:
                    case RustLiteParser.VECTOR_MODULE_NAME:
                        {
                            this.state = 269;
                            this.type_();
                        }
                        break;
                    case RustLiteParser.T__18:
                        {
                            this.state = 270;
                            this.match(RustLiteParser.T__18);
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
    returnStmt() {
        let localContext = new ReturnStmtContext(this.context, this.state);
        this.enterRule(localContext, 36, RustLiteParser.RULE_returnStmt);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 273;
                this.match(RustLiteParser.RETURN);
                this.state = 275;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4106) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 792577) !== 0)) {
                    {
                        this.state = 274;
                        this.expr();
                    }
                }
                this.state = 277;
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
        this.enterRule(localContext, 38, RustLiteParser.RULE_fnDeclareStmt);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 279;
                this.match(RustLiteParser.FN);
                this.state = 280;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 287;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case RustLiteParser.T__0:
                        {
                            this.state = 281;
                            this.match(RustLiteParser.T__0);
                            this.state = 283;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 51) {
                                {
                                    this.state = 282;
                                    this.paramList();
                                }
                            }
                            this.state = 285;
                            this.match(RustLiteParser.T__1);
                        }
                        break;
                    case RustLiteParser.T__18:
                        {
                            this.state = 286;
                            this.match(RustLiteParser.T__18);
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                }
                this.state = 290;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 18) {
                    {
                        this.state = 289;
                        this.returnType();
                    }
                }
                this.state = 292;
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
        this.enterRule(localContext, 40, RustLiteParser.RULE_argList);
        let _la;
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 294;
                this.expr();
                this.state = 299;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 29, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 295;
                                this.match(RustLiteParser.T__16);
                                this.state = 296;
                                this.expr();
                            }
                        }
                    }
                    this.state = 301;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 29, this.context);
                }
                this.state = 303;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 17) {
                    {
                        this.state = 302;
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
        this.enterRule(localContext, 42, RustLiteParser.RULE_fnCall);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 305;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 312;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case RustLiteParser.T__0:
                        {
                            this.state = 306;
                            this.match(RustLiteParser.T__0);
                            this.state = 308;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4106) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 792577) !== 0)) {
                                {
                                    this.state = 307;
                                    this.argList();
                                }
                            }
                            this.state = 310;
                            this.match(RustLiteParser.T__1);
                        }
                        break;
                    case RustLiteParser.T__18:
                        {
                            this.state = 311;
                            this.match(RustLiteParser.T__18);
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
    vectorType() {
        let localContext = new VectorTypeContext(this.context, this.state);
        this.enterRule(localContext, 44, RustLiteParser.RULE_vectorType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 314;
                this.match(RustLiteParser.VECTOR_MODULE_NAME);
                this.state = 315;
                this.match(RustLiteParser.LANGLE);
                this.state = 316;
                this.type_();
                this.state = 317;
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
        this.enterRule(localContext, 46, RustLiteParser.RULE_vectorInit);
        let _la;
        try {
            this.state = 334;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case RustLiteParser.VECTOR_MODULE_NAME:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 319;
                        this.match(RustLiteParser.VECTOR_MODULE_NAME);
                        this.state = 320;
                        this.match(RustLiteParser.METHOD_ACCESSOR);
                        this.state = 321;
                        this.match(RustLiteParser.NEW);
                        this.state = 325;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                            case RustLiteParser.T__18:
                                {
                                    this.state = 322;
                                    this.match(RustLiteParser.T__18);
                                }
                                break;
                            case RustLiteParser.T__0:
                                {
                                    this.state = 323;
                                    this.match(RustLiteParser.T__0);
                                    this.state = 324;
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
                        this.state = 327;
                        this.match(RustLiteParser.VEC);
                        this.state = 328;
                        this.match(RustLiteParser.T__11);
                        this.state = 329;
                        this.match(RustLiteParser.T__19);
                        this.state = 331;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4106) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 792577) !== 0)) {
                            {
                                this.state = 330;
                                this.vectorInitList();
                            }
                        }
                        this.state = 333;
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
        this.enterRule(localContext, 48, RustLiteParser.RULE_vectorInitList);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 336;
                this.expr();
                this.state = 341;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 17) {
                    {
                        {
                            this.state = 337;
                            this.match(RustLiteParser.T__16);
                            this.state = 338;
                            this.expr();
                        }
                    }
                    this.state = 343;
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
    vectorLen() {
        let localContext = new VectorLenContext(this.context, this.state);
        this.enterRule(localContext, 50, RustLiteParser.RULE_vectorLen);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 344;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 345;
                this.match(RustLiteParser.T__21);
                this.state = 346;
                this.match(RustLiteParser.LEN);
                this.state = 350;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case RustLiteParser.T__18:
                        {
                            this.state = 347;
                            this.match(RustLiteParser.T__18);
                        }
                        break;
                    case RustLiteParser.T__0:
                        {
                            this.state = 348;
                            this.match(RustLiteParser.T__0);
                            this.state = 349;
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
        this.enterRule(localContext, 52, RustLiteParser.RULE_vectorIndexAccess);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 352;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 353;
                this.match(RustLiteParser.T__19);
                this.state = 354;
                this.arithExpr(0);
                this.state = 355;
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
    vectorExpr() {
        let localContext = new VectorExprContext(this.context, this.state);
        this.enterRule(localContext, 54, RustLiteParser.RULE_vectorExpr);
        try {
            this.state = 360;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 38, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 357;
                        this.vectorInit();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 358;
                        this.vectorLen();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 359;
                        this.vectorIndexAccess();
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
        this.enterRule(localContext, 56, RustLiteParser.RULE_printlnMacro);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 362;
                this.match(RustLiteParser.PRINTLN);
                this.state = 363;
                this.match(RustLiteParser.T__11);
                this.state = 364;
                this.match(RustLiteParser.T__0);
                this.state = 365;
                this.printlnArgs();
                this.state = 366;
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
        this.enterRule(localContext, 58, RustLiteParser.RULE_printlnArgs);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 368;
                this.match(RustLiteParser.STRING);
                this.state = 373;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 17) {
                    {
                        {
                            this.state = 369;
                            this.match(RustLiteParser.T__16);
                            this.state = 370;
                            this.expr();
                        }
                    }
                    this.state = 375;
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
RustLiteParser.U64_TYPE = 45;
RustLiteParser.I64_TYPE = 46;
RustLiteParser.BOOL_TYPE = 47;
RustLiteParser.STRING = 48;
RustLiteParser.METHOD_ACCESSOR = 49;
RustLiteParser.VECTOR_MODULE_NAME = 50;
RustLiteParser.IDENTIFIER = 51;
RustLiteParser.ERROR_CHAR = 52;
RustLiteParser.WS = 53;
RustLiteParser.COMMENT = 54;
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
RustLiteParser.RULE_returnType = 17;
RustLiteParser.RULE_returnStmt = 18;
RustLiteParser.RULE_fnDeclareStmt = 19;
RustLiteParser.RULE_argList = 20;
RustLiteParser.RULE_fnCall = 21;
RustLiteParser.RULE_vectorType = 22;
RustLiteParser.RULE_vectorInit = 23;
RustLiteParser.RULE_vectorInitList = 24;
RustLiteParser.RULE_vectorLen = 25;
RustLiteParser.RULE_vectorIndexAccess = 26;
RustLiteParser.RULE_vectorExpr = 27;
RustLiteParser.RULE_printlnMacro = 28;
RustLiteParser.RULE_printlnArgs = 29;
RustLiteParser.literalNames = [
    null, "'('", "')'", "'-'", "'*'", "'/'", "'%'", "'+'", "'=='", "'!='",
    "'<='", "'>='", "'!'", "'&&'", "'||'", "'{'", "'}'", "','", "'->'",
    "'()'", "'['", "']'", "'.'", "'let'", "'mut'", "'fn'", "'if'", "'else'",
    "'while'", "'return'", "'break'", "'continue'", "'vec'", "'new'",
    "'push'", "'pop'", "'len'", "'println'", "'<'", "'>'", "'='", "':'",
    "';'", null, null, "'u64'", "'i64'", "'bool'", null, "'::'", "'Vec'"
];
RustLiteParser.symbolicNames = [
    null, null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null, null,
    null, "LET", "MUT", "FN", "IF", "ELSE", "WHILE", "RETURN", "BREAK",
    "CONTINUE", "VEC", "NEW", "PUSH", "POP", "LEN", "PRINTLN", "LANGLE",
    "RANGLE", "EQUALS", "COLON", "SEMICOLON", "INT", "BOOL", "U64_TYPE",
    "I64_TYPE", "BOOL_TYPE", "STRING", "METHOD_ACCESSOR", "VECTOR_MODULE_NAME",
    "IDENTIFIER", "ERROR_CHAR", "WS", "COMMENT"
];
RustLiteParser.ruleNames = [
    "prog", "type", "expr", "arithExpr", "logicExpr", "globalElement",
    "stmt", "block", "blockContent", "exprStmt", "declareStmt", "condStmt",
    "whileStmt", "loopControl", "loopControlStmt", "param", "paramList",
    "returnType", "returnStmt", "fnDeclareStmt", "argList", "fnCall",
    "vectorType", "vectorInit", "vectorInitList", "vectorLen", "vectorIndexAccess",
    "vectorExpr", "printlnMacro", "printlnArgs",
];
RustLiteParser._serializedATN = [
    4, 1, 54, 377, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7,
    6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13,
    2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20,
    7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24, 7, 24, 2, 25, 7, 25, 2, 26, 7, 26,
    2, 27, 7, 27, 2, 28, 7, 28, 2, 29, 7, 29, 1, 0, 5, 0, 62, 8, 0, 10, 0, 12, 0, 65, 9, 0, 1,
    0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 73, 8, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2,
    1, 2, 1, 2, 1, 2, 3, 2, 86, 8, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1,
    3, 1, 3, 3, 3, 100, 8, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 5, 3, 112,
    8, 3, 10, 3, 12, 3, 115, 9, 3, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1,
    4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 3, 4, 133, 8, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 5, 4, 141,
    8, 4, 10, 4, 12, 4, 144, 9, 4, 1, 5, 1, 5, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 3,
    6, 156, 8, 6, 1, 7, 1, 7, 1, 7, 1, 7, 1, 8, 5, 8, 163, 8, 8, 10, 8, 12, 8, 166, 9, 8, 1, 8,
    3, 8, 169, 8, 8, 1, 9, 1, 9, 1, 9, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10,
    1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 3, 10, 192, 8, 10,
    1, 10, 1, 10, 1, 10, 3, 10, 197, 8, 10, 1, 10, 1, 10, 1, 10, 1, 10, 3, 10, 203, 8, 10, 1,
    10, 3, 10, 206, 8, 10, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 5, 11, 216,
    8, 11, 10, 11, 12, 11, 219, 9, 11, 1, 11, 1, 11, 3, 11, 223, 8, 11, 1, 11, 1, 11, 1, 11,
    1, 11, 1, 11, 1, 11, 3, 11, 231, 8, 11, 3, 11, 233, 8, 11, 1, 12, 1, 12, 1, 12, 1, 12, 1,
    12, 1, 12, 1, 12, 1, 12, 1, 12, 3, 12, 244, 8, 12, 1, 13, 1, 13, 1, 14, 1, 14, 1, 14, 1,
    15, 1, 15, 1, 15, 1, 15, 1, 15, 3, 15, 256, 8, 15, 1, 16, 1, 16, 1, 16, 5, 16, 261, 8, 16,
    10, 16, 12, 16, 264, 9, 16, 1, 16, 3, 16, 267, 8, 16, 1, 17, 1, 17, 1, 17, 3, 17, 272,
    8, 17, 1, 18, 1, 18, 3, 18, 276, 8, 18, 1, 18, 1, 18, 1, 19, 1, 19, 1, 19, 1, 19, 3, 19,
    284, 8, 19, 1, 19, 1, 19, 3, 19, 288, 8, 19, 1, 19, 3, 19, 291, 8, 19, 1, 19, 1, 19, 1,
    20, 1, 20, 1, 20, 5, 20, 298, 8, 20, 10, 20, 12, 20, 301, 9, 20, 1, 20, 3, 20, 304, 8,
    20, 1, 21, 1, 21, 1, 21, 3, 21, 309, 8, 21, 1, 21, 1, 21, 3, 21, 313, 8, 21, 1, 22, 1, 22,
    1, 22, 1, 22, 1, 22, 1, 23, 1, 23, 1, 23, 1, 23, 1, 23, 1, 23, 3, 23, 326, 8, 23, 1, 23,
    1, 23, 1, 23, 1, 23, 3, 23, 332, 8, 23, 1, 23, 3, 23, 335, 8, 23, 1, 24, 1, 24, 1, 24, 5,
    24, 340, 8, 24, 10, 24, 12, 24, 343, 9, 24, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 3,
    25, 351, 8, 25, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 27, 1, 27, 1, 27, 3, 27, 361, 8, 27,
    1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 1, 29, 1, 29, 1, 29, 5, 29, 372, 8, 29, 10, 29,
    12, 29, 375, 9, 29, 1, 29, 0, 2, 6, 8, 30, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24,
    26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 0, 5, 1, 0, 4, 6, 2,
    0, 3, 3, 7, 7, 1, 0, 5, 6, 2, 0, 8, 11, 38, 39, 1, 0, 30, 31, 413, 0, 63, 1, 0, 0, 0, 2, 72,
    1, 0, 0, 0, 4, 85, 1, 0, 0, 0, 6, 99, 1, 0, 0, 0, 8, 132, 1, 0, 0, 0, 10, 145, 1, 0, 0, 0, 12,
    155, 1, 0, 0, 0, 14, 157, 1, 0, 0, 0, 16, 164, 1, 0, 0, 0, 18, 170, 1, 0, 0, 0, 20, 205,
    1, 0, 0, 0, 22, 232, 1, 0, 0, 0, 24, 243, 1, 0, 0, 0, 26, 245, 1, 0, 0, 0, 28, 247, 1, 0,
    0, 0, 30, 255, 1, 0, 0, 0, 32, 257, 1, 0, 0, 0, 34, 268, 1, 0, 0, 0, 36, 273, 1, 0, 0, 0,
    38, 279, 1, 0, 0, 0, 40, 294, 1, 0, 0, 0, 42, 305, 1, 0, 0, 0, 44, 314, 1, 0, 0, 0, 46, 334,
    1, 0, 0, 0, 48, 336, 1, 0, 0, 0, 50, 344, 1, 0, 0, 0, 52, 352, 1, 0, 0, 0, 54, 360, 1, 0,
    0, 0, 56, 362, 1, 0, 0, 0, 58, 368, 1, 0, 0, 0, 60, 62, 3, 10, 5, 0, 61, 60, 1, 0, 0, 0, 62,
    65, 1, 0, 0, 0, 63, 61, 1, 0, 0, 0, 63, 64, 1, 0, 0, 0, 64, 66, 1, 0, 0, 0, 65, 63, 1, 0, 0,
    0, 66, 67, 5, 0, 0, 1, 67, 1, 1, 0, 0, 0, 68, 73, 5, 45, 0, 0, 69, 73, 5, 46, 0, 0, 70, 73,
    5, 47, 0, 0, 71, 73, 3, 44, 22, 0, 72, 68, 1, 0, 0, 0, 72, 69, 1, 0, 0, 0, 72, 70, 1, 0, 0,
    0, 72, 71, 1, 0, 0, 0, 73, 3, 1, 0, 0, 0, 74, 75, 5, 1, 0, 0, 75, 76, 3, 4, 2, 0, 76, 77, 5,
    2, 0, 0, 77, 86, 1, 0, 0, 0, 78, 86, 5, 51, 0, 0, 79, 86, 5, 43, 0, 0, 80, 86, 5, 44, 0, 0,
    81, 86, 3, 6, 3, 0, 82, 86, 3, 8, 4, 0, 83, 86, 3, 42, 21, 0, 84, 86, 3, 54, 27, 0, 85, 74,
    1, 0, 0, 0, 85, 78, 1, 0, 0, 0, 85, 79, 1, 0, 0, 0, 85, 80, 1, 0, 0, 0, 85, 81, 1, 0, 0, 0,
    85, 82, 1, 0, 0, 0, 85, 83, 1, 0, 0, 0, 85, 84, 1, 0, 0, 0, 86, 5, 1, 0, 0, 0, 87, 88, 6, 3,
    -1, 0, 88, 100, 5, 43, 0, 0, 89, 100, 5, 51, 0, 0, 90, 100, 3, 42, 21, 0, 91, 92, 5, 1,
    0, 0, 92, 93, 3, 6, 3, 0, 93, 94, 5, 2, 0, 0, 94, 100, 1, 0, 0, 0, 95, 96, 5, 3, 0, 0, 96,
    100, 3, 6, 3, 5, 97, 98, 5, 44, 0, 0, 98, 100, 6, 3, -1, 0, 99, 87, 1, 0, 0, 0, 99, 89, 1,
    0, 0, 0, 99, 90, 1, 0, 0, 0, 99, 91, 1, 0, 0, 0, 99, 95, 1, 0, 0, 0, 99, 97, 1, 0, 0, 0, 100,
    113, 1, 0, 0, 0, 101, 102, 10, 4, 0, 0, 102, 103, 7, 0, 0, 0, 103, 112, 3, 6, 3, 5, 104,
    105, 10, 3, 0, 0, 105, 106, 7, 1, 0, 0, 106, 112, 3, 6, 3, 4, 107, 108, 10, 1, 0, 0, 108,
    109, 7, 2, 0, 0, 109, 110, 5, 43, 0, 0, 110, 112, 6, 3, -1, 0, 111, 101, 1, 0, 0, 0, 111,
    104, 1, 0, 0, 0, 111, 107, 1, 0, 0, 0, 112, 115, 1, 0, 0, 0, 113, 111, 1, 0, 0, 0, 113,
    114, 1, 0, 0, 0, 114, 7, 1, 0, 0, 0, 115, 113, 1, 0, 0, 0, 116, 117, 6, 4, -1, 0, 117, 133,
    5, 44, 0, 0, 118, 133, 5, 51, 0, 0, 119, 133, 3, 42, 21, 0, 120, 121, 5, 1, 0, 0, 121,
    122, 3, 8, 4, 0, 122, 123, 5, 2, 0, 0, 123, 133, 1, 0, 0, 0, 124, 125, 3, 6, 3, 0, 125,
    126, 7, 3, 0, 0, 126, 127, 3, 6, 3, 0, 127, 133, 1, 0, 0, 0, 128, 129, 5, 12, 0, 0, 129,
    133, 3, 8, 4, 4, 130, 131, 5, 43, 0, 0, 131, 133, 6, 4, -1, 0, 132, 116, 1, 0, 0, 0, 132,
    118, 1, 0, 0, 0, 132, 119, 1, 0, 0, 0, 132, 120, 1, 0, 0, 0, 132, 124, 1, 0, 0, 0, 132,
    128, 1, 0, 0, 0, 132, 130, 1, 0, 0, 0, 133, 142, 1, 0, 0, 0, 134, 135, 10, 3, 0, 0, 135,
    136, 5, 13, 0, 0, 136, 141, 3, 8, 4, 4, 137, 138, 10, 2, 0, 0, 138, 139, 5, 14, 0, 0, 139,
    141, 3, 8, 4, 3, 140, 134, 1, 0, 0, 0, 140, 137, 1, 0, 0, 0, 141, 144, 1, 0, 0, 0, 142,
    140, 1, 0, 0, 0, 142, 143, 1, 0, 0, 0, 143, 9, 1, 0, 0, 0, 144, 142, 1, 0, 0, 0, 145, 146,
    3, 38, 19, 0, 146, 11, 1, 0, 0, 0, 147, 156, 3, 18, 9, 0, 148, 156, 3, 20, 10, 0, 149,
    156, 3, 22, 11, 0, 150, 156, 3, 24, 12, 0, 151, 156, 3, 28, 14, 0, 152, 156, 3, 38, 19,
    0, 153, 156, 3, 36, 18, 0, 154, 156, 3, 14, 7, 0, 155, 147, 1, 0, 0, 0, 155, 148, 1, 0,
    0, 0, 155, 149, 1, 0, 0, 0, 155, 150, 1, 0, 0, 0, 155, 151, 1, 0, 0, 0, 155, 152, 1, 0,
    0, 0, 155, 153, 1, 0, 0, 0, 155, 154, 1, 0, 0, 0, 156, 13, 1, 0, 0, 0, 157, 158, 5, 15,
    0, 0, 158, 159, 3, 16, 8, 0, 159, 160, 5, 16, 0, 0, 160, 15, 1, 0, 0, 0, 161, 163, 3, 12,
    6, 0, 162, 161, 1, 0, 0, 0, 163, 166, 1, 0, 0, 0, 164, 162, 1, 0, 0, 0, 164, 165, 1, 0,
    0, 0, 165, 168, 1, 0, 0, 0, 166, 164, 1, 0, 0, 0, 167, 169, 3, 4, 2, 0, 168, 167, 1, 0,
    0, 0, 168, 169, 1, 0, 0, 0, 169, 17, 1, 0, 0, 0, 170, 171, 3, 4, 2, 0, 171, 172, 5, 42,
    0, 0, 172, 19, 1, 0, 0, 0, 173, 174, 5, 23, 0, 0, 174, 175, 5, 51, 0, 0, 175, 176, 5, 41,
    0, 0, 176, 177, 3, 2, 1, 0, 177, 178, 5, 40, 0, 0, 178, 179, 3, 4, 2, 0, 179, 180, 5, 42,
    0, 0, 180, 206, 1, 0, 0, 0, 181, 182, 5, 23, 0, 0, 182, 183, 5, 51, 0, 0, 183, 184, 5,
    40, 0, 0, 184, 185, 3, 4, 2, 0, 185, 186, 5, 42, 0, 0, 186, 206, 1, 0, 0, 0, 187, 188,
    5, 23, 0, 0, 188, 189, 5, 51, 0, 0, 189, 191, 6, 10, -1, 0, 190, 192, 5, 42, 0, 0, 191,
    190, 1, 0, 0, 0, 191, 192, 1, 0, 0, 0, 192, 206, 1, 0, 0, 0, 193, 196, 5, 23, 0, 0, 194,
    195, 5, 41, 0, 0, 195, 197, 3, 2, 1, 0, 196, 194, 1, 0, 0, 0, 196, 197, 1, 0, 0, 0, 197,
    198, 1, 0, 0, 0, 198, 202, 6, 10, -1, 0, 199, 200, 5, 40, 0, 0, 200, 201, 5, 41, 0, 0,
    201, 203, 3, 4, 2, 0, 202, 199, 1, 0, 0, 0, 202, 203, 1, 0, 0, 0, 203, 204, 1, 0, 0, 0,
    204, 206, 5, 42, 0, 0, 205, 173, 1, 0, 0, 0, 205, 181, 1, 0, 0, 0, 205, 187, 1, 0, 0, 0,
    205, 193, 1, 0, 0, 0, 206, 21, 1, 0, 0, 0, 207, 208, 5, 26, 0, 0, 208, 209, 3, 8, 4, 0,
    209, 217, 3, 14, 7, 0, 210, 211, 5, 27, 0, 0, 211, 212, 5, 26, 0, 0, 212, 213, 3, 8, 4,
    0, 213, 214, 3, 14, 7, 0, 214, 216, 1, 0, 0, 0, 215, 210, 1, 0, 0, 0, 216, 219, 1, 0, 0,
    0, 217, 215, 1, 0, 0, 0, 217, 218, 1, 0, 0, 0, 218, 222, 1, 0, 0, 0, 219, 217, 1, 0, 0,
    0, 220, 221, 5, 27, 0, 0, 221, 223, 3, 14, 7, 0, 222, 220, 1, 0, 0, 0, 222, 223, 1, 0,
    0, 0, 223, 233, 1, 0, 0, 0, 224, 225, 5, 26, 0, 0, 225, 226, 3, 4, 2, 0, 226, 227, 6, 11,
    -1, 0, 227, 230, 3, 14, 7, 0, 228, 229, 5, 27, 0, 0, 229, 231, 3, 14, 7, 0, 230, 228,
    1, 0, 0, 0, 230, 231, 1, 0, 0, 0, 231, 233, 1, 0, 0, 0, 232, 207, 1, 0, 0, 0, 232, 224,
    1, 0, 0, 0, 233, 23, 1, 0, 0, 0, 234, 235, 5, 28, 0, 0, 235, 236, 3, 8, 4, 0, 236, 237,
    3, 14, 7, 0, 237, 244, 1, 0, 0, 0, 238, 239, 5, 28, 0, 0, 239, 240, 3, 4, 2, 0, 240, 241,
    6, 12, -1, 0, 241, 242, 3, 14, 7, 0, 242, 244, 1, 0, 0, 0, 243, 234, 1, 0, 0, 0, 243, 238,
    1, 0, 0, 0, 244, 25, 1, 0, 0, 0, 245, 246, 7, 4, 0, 0, 246, 27, 1, 0, 0, 0, 247, 248, 3,
    26, 13, 0, 248, 249, 5, 42, 0, 0, 249, 29, 1, 0, 0, 0, 250, 251, 5, 51, 0, 0, 251, 252,
    5, 41, 0, 0, 252, 256, 3, 2, 1, 0, 253, 254, 5, 51, 0, 0, 254, 256, 6, 15, -1, 0, 255,
    250, 1, 0, 0, 0, 255, 253, 1, 0, 0, 0, 256, 31, 1, 0, 0, 0, 257, 262, 3, 30, 15, 0, 258,
    259, 5, 17, 0, 0, 259, 261, 3, 30, 15, 0, 260, 258, 1, 0, 0, 0, 261, 264, 1, 0, 0, 0, 262,
    260, 1, 0, 0, 0, 262, 263, 1, 0, 0, 0, 263, 266, 1, 0, 0, 0, 264, 262, 1, 0, 0, 0, 265,
    267, 5, 17, 0, 0, 266, 265, 1, 0, 0, 0, 266, 267, 1, 0, 0, 0, 267, 33, 1, 0, 0, 0, 268,
    271, 5, 18, 0, 0, 269, 272, 3, 2, 1, 0, 270, 272, 5, 19, 0, 0, 271, 269, 1, 0, 0, 0, 271,
    270, 1, 0, 0, 0, 272, 35, 1, 0, 0, 0, 273, 275, 5, 29, 0, 0, 274, 276, 3, 4, 2, 0, 275,
    274, 1, 0, 0, 0, 275, 276, 1, 0, 0, 0, 276, 277, 1, 0, 0, 0, 277, 278, 5, 42, 0, 0, 278,
    37, 1, 0, 0, 0, 279, 280, 5, 25, 0, 0, 280, 287, 5, 51, 0, 0, 281, 283, 5, 1, 0, 0, 282,
    284, 3, 32, 16, 0, 283, 282, 1, 0, 0, 0, 283, 284, 1, 0, 0, 0, 284, 285, 1, 0, 0, 0, 285,
    288, 5, 2, 0, 0, 286, 288, 5, 19, 0, 0, 287, 281, 1, 0, 0, 0, 287, 286, 1, 0, 0, 0, 288,
    290, 1, 0, 0, 0, 289, 291, 3, 34, 17, 0, 290, 289, 1, 0, 0, 0, 290, 291, 1, 0, 0, 0, 291,
    292, 1, 0, 0, 0, 292, 293, 3, 14, 7, 0, 293, 39, 1, 0, 0, 0, 294, 299, 3, 4, 2, 0, 295,
    296, 5, 17, 0, 0, 296, 298, 3, 4, 2, 0, 297, 295, 1, 0, 0, 0, 298, 301, 1, 0, 0, 0, 299,
    297, 1, 0, 0, 0, 299, 300, 1, 0, 0, 0, 300, 303, 1, 0, 0, 0, 301, 299, 1, 0, 0, 0, 302,
    304, 5, 17, 0, 0, 303, 302, 1, 0, 0, 0, 303, 304, 1, 0, 0, 0, 304, 41, 1, 0, 0, 0, 305,
    312, 5, 51, 0, 0, 306, 308, 5, 1, 0, 0, 307, 309, 3, 40, 20, 0, 308, 307, 1, 0, 0, 0, 308,
    309, 1, 0, 0, 0, 309, 310, 1, 0, 0, 0, 310, 313, 5, 2, 0, 0, 311, 313, 5, 19, 0, 0, 312,
    306, 1, 0, 0, 0, 312, 311, 1, 0, 0, 0, 313, 43, 1, 0, 0, 0, 314, 315, 5, 50, 0, 0, 315,
    316, 5, 38, 0, 0, 316, 317, 3, 2, 1, 0, 317, 318, 5, 39, 0, 0, 318, 45, 1, 0, 0, 0, 319,
    320, 5, 50, 0, 0, 320, 321, 5, 49, 0, 0, 321, 325, 5, 33, 0, 0, 322, 326, 5, 19, 0, 0,
    323, 324, 5, 1, 0, 0, 324, 326, 5, 2, 0, 0, 325, 322, 1, 0, 0, 0, 325, 323, 1, 0, 0, 0,
    326, 335, 1, 0, 0, 0, 327, 328, 5, 32, 0, 0, 328, 329, 5, 12, 0, 0, 329, 331, 5, 20, 0,
    0, 330, 332, 3, 48, 24, 0, 331, 330, 1, 0, 0, 0, 331, 332, 1, 0, 0, 0, 332, 333, 1, 0,
    0, 0, 333, 335, 5, 21, 0, 0, 334, 319, 1, 0, 0, 0, 334, 327, 1, 0, 0, 0, 335, 47, 1, 0,
    0, 0, 336, 341, 3, 4, 2, 0, 337, 338, 5, 17, 0, 0, 338, 340, 3, 4, 2, 0, 339, 337, 1, 0,
    0, 0, 340, 343, 1, 0, 0, 0, 341, 339, 1, 0, 0, 0, 341, 342, 1, 0, 0, 0, 342, 49, 1, 0, 0,
    0, 343, 341, 1, 0, 0, 0, 344, 345, 5, 51, 0, 0, 345, 346, 5, 22, 0, 0, 346, 350, 5, 36,
    0, 0, 347, 351, 5, 19, 0, 0, 348, 349, 5, 1, 0, 0, 349, 351, 5, 2, 0, 0, 350, 347, 1, 0,
    0, 0, 350, 348, 1, 0, 0, 0, 351, 51, 1, 0, 0, 0, 352, 353, 5, 51, 0, 0, 353, 354, 5, 20,
    0, 0, 354, 355, 3, 6, 3, 0, 355, 356, 5, 21, 0, 0, 356, 53, 1, 0, 0, 0, 357, 361, 3, 46,
    23, 0, 358, 361, 3, 50, 25, 0, 359, 361, 3, 52, 26, 0, 360, 357, 1, 0, 0, 0, 360, 358,
    1, 0, 0, 0, 360, 359, 1, 0, 0, 0, 361, 55, 1, 0, 0, 0, 362, 363, 5, 37, 0, 0, 363, 364,
    5, 12, 0, 0, 364, 365, 5, 1, 0, 0, 365, 366, 3, 58, 29, 0, 366, 367, 5, 2, 0, 0, 367, 57,
    1, 0, 0, 0, 368, 373, 5, 48, 0, 0, 369, 370, 5, 17, 0, 0, 370, 372, 3, 4, 2, 0, 371, 369,
    1, 0, 0, 0, 372, 375, 1, 0, 0, 0, 373, 371, 1, 0, 0, 0, 373, 374, 1, 0, 0, 0, 374, 59, 1,
    0, 0, 0, 375, 373, 1, 0, 0, 0, 40, 63, 72, 85, 99, 111, 113, 132, 140, 142, 155, 164,
    168, 191, 196, 202, 205, 217, 222, 230, 232, 243, 255, 262, 266, 271, 275, 283,
    287, 290, 299, 303, 308, 312, 325, 331, 334, 341, 350, 360, 373
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
    U64_TYPE() {
        return this.getToken(RustLiteParser.U64_TYPE, 0);
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
    fnCall() {
        return this.getRuleContext(0, FnCallContext);
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
    fnCall() {
        return this.getRuleContext(0, FnCallContext);
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
    expr() {
        return this.getRuleContext(0, ExprContext);
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
class ReturnTypeContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    type() {
        return this.getRuleContext(0, TypeContext);
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
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        return this.getRuleContext(i, ExprContext);
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
    arithExpr() {
        return this.getRuleContext(0, ArithExprContext);
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
class VectorExprContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    vectorInit() {
        return this.getRuleContext(0, VectorInitContext);
    }
    vectorLen() {
        return this.getRuleContext(0, VectorLenContext);
    }
    vectorIndexAccess() {
        return this.getRuleContext(0, VectorIndexAccessContext);
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
