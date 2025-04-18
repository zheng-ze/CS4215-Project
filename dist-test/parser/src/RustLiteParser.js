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
                this.state = 98;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case RustLiteParser.INT:
                        {
                            this.state = 88;
                            localContext._primary = this.match(RustLiteParser.INT);
                        }
                        break;
                    case RustLiteParser.IDENTIFIER:
                        {
                            this.state = 89;
                            localContext._primary = this.match(RustLiteParser.IDENTIFIER);
                        }
                        break;
                    case RustLiteParser.T__0:
                        {
                            this.state = 90;
                            this.match(RustLiteParser.T__0);
                            this.state = 91;
                            localContext._inner = this.arithExpr(0);
                            this.state = 92;
                            this.match(RustLiteParser.T__1);
                        }
                        break;
                    case RustLiteParser.T__2:
                        {
                            this.state = 94;
                            localContext._op = this.match(RustLiteParser.T__2);
                            this.state = 95;
                            localContext._right = this.arithExpr(5);
                        }
                        break;
                    case RustLiteParser.BOOL:
                        {
                            this.state = 96;
                            this.match(RustLiteParser.BOOL);
                            this.notifyErrorListeners("Cannot use boolean in arithmetic expressions", null, null);
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                }
                this.context.stop = this.tokenStream.LT(-1);
                this.state = 112;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 5, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        if (this.parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        previousContext = localContext;
                        {
                            this.state = 110;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 4, this.context)) {
                                case 1:
                                    {
                                        localContext = new ArithExprContext(parentContext, parentState);
                                        localContext._left = previousContext;
                                        this.pushNewRecursionContext(localContext, _startState, RustLiteParser.RULE_arithExpr);
                                        this.state = 100;
                                        if (!(this.precpred(this.context, 4))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                                        }
                                        this.state = 101;
                                        localContext._op = this.tokenStream.LT(1);
                                        _la = this.tokenStream.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 112) !== 0))) {
                                            localContext._op = this.errorHandler.recoverInline(this);
                                        }
                                        else {
                                            this.errorHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 102;
                                        localContext._right = this.arithExpr(5);
                                    }
                                    break;
                                case 2:
                                    {
                                        localContext = new ArithExprContext(parentContext, parentState);
                                        localContext._left = previousContext;
                                        this.pushNewRecursionContext(localContext, _startState, RustLiteParser.RULE_arithExpr);
                                        this.state = 103;
                                        if (!(this.precpred(this.context, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                                        }
                                        this.state = 104;
                                        localContext._op = this.tokenStream.LT(1);
                                        _la = this.tokenStream.LA(1);
                                        if (!(_la === 3 || _la === 7)) {
                                            localContext._op = this.errorHandler.recoverInline(this);
                                        }
                                        else {
                                            this.errorHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 105;
                                        localContext._right = this.arithExpr(4);
                                    }
                                    break;
                                case 3:
                                    {
                                        localContext = new ArithExprContext(parentContext, parentState);
                                        localContext._left = previousContext;
                                        this.pushNewRecursionContext(localContext, _startState, RustLiteParser.RULE_arithExpr);
                                        this.state = 106;
                                        if (!(this.precpred(this.context, 1))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                                        }
                                        this.state = 107;
                                        localContext._op = this.tokenStream.LT(1);
                                        _la = this.tokenStream.LA(1);
                                        if (!(_la === 5 || _la === 6)) {
                                            localContext._op = this.errorHandler.recoverInline(this);
                                        }
                                        else {
                                            this.errorHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 108;
                                        this.match(RustLiteParser.INT);
                                        if ((localContext._right != null ? this.tokenStream.getTextFromRange(localContext._right.start, localContext._right.stop) : '') === "0")
                                            this.notifyErrorListeners("Division by zero", null, null);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 114;
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
                this.state = 130;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 6, this.context)) {
                    case 1:
                        {
                            this.state = 116;
                            localContext._primary = this.match(RustLiteParser.BOOL);
                        }
                        break;
                    case 2:
                        {
                            this.state = 117;
                            localContext._primary = this.match(RustLiteParser.IDENTIFIER);
                        }
                        break;
                    case 3:
                        {
                            this.state = 118;
                            this.match(RustLiteParser.T__0);
                            this.state = 119;
                            localContext._inner = this.logicExpr(0);
                            this.state = 120;
                            this.match(RustLiteParser.T__1);
                        }
                        break;
                    case 4:
                        {
                            this.state = 122;
                            localContext._arithLeft = this.arithExpr(0);
                            this.state = 123;
                            localContext._op = this.tokenStream.LT(1);
                            _la = this.tokenStream.LA(1);
                            if (!(((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & 3221225487) !== 0))) {
                                localContext._op = this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 124;
                            localContext._arithRight = this.arithExpr(0);
                        }
                        break;
                    case 5:
                        {
                            this.state = 126;
                            localContext._op = this.match(RustLiteParser.T__11);
                            this.state = 127;
                            localContext._right = this.logicExpr(4);
                        }
                        break;
                    case 6:
                        {
                            this.state = 128;
                            this.match(RustLiteParser.INT);
                            this.notifyErrorListeners("Cannot use INT without comparison operators in logical expressions", null, null);
                        }
                        break;
                }
                this.context.stop = this.tokenStream.LT(-1);
                this.state = 140;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 8, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        if (this.parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        previousContext = localContext;
                        {
                            this.state = 138;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 7, this.context)) {
                                case 1:
                                    {
                                        localContext = new LogicExprContext(parentContext, parentState);
                                        localContext._left = previousContext;
                                        this.pushNewRecursionContext(localContext, _startState, RustLiteParser.RULE_logicExpr);
                                        this.state = 132;
                                        if (!(this.precpred(this.context, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                                        }
                                        this.state = 133;
                                        localContext._op = this.match(RustLiteParser.T__12);
                                        this.state = 134;
                                        localContext._right = this.logicExpr(4);
                                    }
                                    break;
                                case 2:
                                    {
                                        localContext = new LogicExprContext(parentContext, parentState);
                                        localContext._left = previousContext;
                                        this.pushNewRecursionContext(localContext, _startState, RustLiteParser.RULE_logicExpr);
                                        this.state = 135;
                                        if (!(this.precpred(this.context, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                                        }
                                        this.state = 136;
                                        localContext._op = this.match(RustLiteParser.T__13);
                                        this.state = 137;
                                        localContext._right = this.logicExpr(3);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 142;
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
                this.state = 143;
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
            this.state = 153;
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
                        this.state = 145;
                        this.exprStmt();
                    }
                    break;
                case RustLiteParser.LET:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 146;
                        this.declareStmt();
                    }
                    break;
                case RustLiteParser.IF:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 147;
                        this.condStmt();
                    }
                    break;
                case RustLiteParser.WHILE:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 148;
                        this.whileStmt();
                    }
                    break;
                case RustLiteParser.BREAK:
                case RustLiteParser.CONTINUE:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 149;
                        this.loopControlStmt();
                    }
                    break;
                case RustLiteParser.FN:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 150;
                        this.fnDeclareStmt();
                    }
                    break;
                case RustLiteParser.RETURN:
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 151;
                        this.returnStmt();
                    }
                    break;
                case RustLiteParser.T__14:
                    this.enterOuterAlt(localContext, 8);
                    {
                        this.state = 152;
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
                this.state = 155;
                this.match(RustLiteParser.T__14);
                this.state = 156;
                this.blockContent();
                this.state = 157;
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
            this.state = 193;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 17, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 162;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 10, this.context);
                        while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                            if (alternative === 1) {
                                {
                                    {
                                        this.state = 159;
                                        this.stmt();
                                    }
                                }
                            }
                            this.state = 164;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 10, this.context);
                        }
                        this.state = 166;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4106) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 792577) !== 0)) {
                            {
                                this.state = 165;
                                localContext._finalExpr = this.expr();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 171;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4135620618) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 792577) !== 0)) {
                            {
                                {
                                    this.state = 168;
                                    this.stmt();
                                }
                            }
                            this.state = 173;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 177;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 13, this.context);
                        while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                            if (alternative === 1) {
                                {
                                    {
                                        this.state = 174;
                                        this.stmt();
                                    }
                                }
                            }
                            this.state = 179;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 13, this.context);
                        }
                        this.state = 180;
                        this.expr();
                        this.state = 185;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 15, this.context);
                        while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                            if (alternative === 1) {
                                {
                                    this.state = 183;
                                    this.errorHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this.tokenStream, 14, this.context)) {
                                        case 1:
                                            {
                                                this.state = 181;
                                                this.stmt();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 182;
                                                this.expr();
                                            }
                                            break;
                                    }
                                }
                            }
                            this.state = 187;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 15, this.context);
                        }
                        this.state = 189;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4106) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 792577) !== 0)) {
                            {
                                this.state = 188;
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
                this.state = 195;
                this.expr();
                this.state = 196;
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
            this.state = 230;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 21, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 198;
                        this.match(RustLiteParser.LET);
                        this.state = 199;
                        this.match(RustLiteParser.IDENTIFIER);
                        this.state = 200;
                        this.match(RustLiteParser.COLON);
                        this.state = 201;
                        this.type_();
                        this.state = 202;
                        this.match(RustLiteParser.EQUALS);
                        this.state = 203;
                        this.expr();
                        this.state = 204;
                        this.match(RustLiteParser.SEMICOLON);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 206;
                        this.match(RustLiteParser.LET);
                        this.state = 207;
                        this.match(RustLiteParser.IDENTIFIER);
                        this.state = 208;
                        this.match(RustLiteParser.EQUALS);
                        this.state = 209;
                        this.expr();
                        this.state = 210;
                        this.match(RustLiteParser.SEMICOLON);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 212;
                        this.match(RustLiteParser.LET);
                        this.state = 213;
                        this.match(RustLiteParser.IDENTIFIER);
                        this.notifyErrorListeners("Type annotations needed", null, null);
                        this.state = 216;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 42) {
                            {
                                this.state = 215;
                                this.match(RustLiteParser.SEMICOLON);
                            }
                        }
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 218;
                        this.match(RustLiteParser.LET);
                        this.state = 221;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 41) {
                            {
                                this.state = 219;
                                this.match(RustLiteParser.COLON);
                                this.state = 220;
                                this.type_();
                            }
                        }
                        this.notifyErrorListeners("Expected identifier", null, null);
                        this.state = 227;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 40) {
                            {
                                this.state = 224;
                                this.match(RustLiteParser.EQUALS);
                                this.state = 225;
                                this.match(RustLiteParser.COLON);
                                this.state = 226;
                                this.expr();
                            }
                        }
                        this.state = 229;
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
            this.state = 257;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 25, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 232;
                        this.match(RustLiteParser.IF);
                        this.state = 233;
                        this.logicExpr(0);
                        this.state = 234;
                        this.block();
                        this.state = 242;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 22, this.context);
                        while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                            if (alternative === 1) {
                                {
                                    {
                                        this.state = 235;
                                        this.match(RustLiteParser.ELSE);
                                        this.state = 236;
                                        this.match(RustLiteParser.IF);
                                        this.state = 237;
                                        this.logicExpr(0);
                                        this.state = 238;
                                        this.block();
                                    }
                                }
                            }
                            this.state = 244;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 22, this.context);
                        }
                        this.state = 247;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 27) {
                            {
                                this.state = 245;
                                this.match(RustLiteParser.ELSE);
                                this.state = 246;
                                this.block();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 249;
                        this.match(RustLiteParser.IF);
                        this.state = 250;
                        this.expr();
                        this.notifyErrorListeners("Condition must be a boolean expression", null, null);
                        this.state = 252;
                        this.block();
                        this.state = 255;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 27) {
                            {
                                this.state = 253;
                                this.match(RustLiteParser.ELSE);
                                this.state = 254;
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
            this.state = 268;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 26, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 259;
                        this.match(RustLiteParser.WHILE);
                        this.state = 260;
                        this.logicExpr(0);
                        this.state = 261;
                        this.block();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 263;
                        this.match(RustLiteParser.WHILE);
                        this.state = 264;
                        this.expr();
                        this.notifyErrorListeners("Condition must be a boolean expression", null, null);
                        this.state = 266;
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
                this.state = 270;
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
                this.state = 272;
                this.loopControl();
                this.state = 273;
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
            this.state = 280;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 27, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 275;
                        this.match(RustLiteParser.IDENTIFIER);
                        this.state = 276;
                        this.match(RustLiteParser.COLON);
                        this.state = 277;
                        this.type_();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 278;
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
                this.state = 282;
                this.param();
                this.state = 287;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 28, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 283;
                                this.match(RustLiteParser.T__16);
                                this.state = 284;
                                this.param();
                            }
                        }
                    }
                    this.state = 289;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 28, this.context);
                }
                this.state = 291;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 17) {
                    {
                        this.state = 290;
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
                this.state = 293;
                this.match(RustLiteParser.T__17);
                this.state = 296;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case RustLiteParser.U64_TYPE:
                    case RustLiteParser.I64_TYPE:
                    case RustLiteParser.BOOL_TYPE:
                    case RustLiteParser.VECTOR_MODULE_NAME:
                        {
                            this.state = 294;
                            this.type_();
                        }
                        break;
                    case RustLiteParser.T__18:
                        {
                            this.state = 295;
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
                this.state = 298;
                this.match(RustLiteParser.RETURN);
                this.state = 300;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4106) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 792577) !== 0)) {
                    {
                        this.state = 299;
                        this.expr();
                    }
                }
                this.state = 302;
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
                this.state = 304;
                this.match(RustLiteParser.FN);
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
                            if (_la === 51) {
                                {
                                    this.state = 307;
                                    this.paramList();
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
                this.state = 315;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 18) {
                    {
                        this.state = 314;
                        this.returnType();
                    }
                }
                this.state = 317;
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
                this.state = 319;
                this.expr();
                this.state = 324;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 35, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 320;
                                this.match(RustLiteParser.T__16);
                                this.state = 321;
                                this.expr();
                            }
                        }
                    }
                    this.state = 326;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 35, this.context);
                }
                this.state = 328;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 17) {
                    {
                        this.state = 327;
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
                this.state = 330;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 337;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case RustLiteParser.T__0:
                        {
                            this.state = 331;
                            this.match(RustLiteParser.T__0);
                            this.state = 333;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4106) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 792577) !== 0)) {
                                {
                                    this.state = 332;
                                    this.argList();
                                }
                            }
                            this.state = 335;
                            this.match(RustLiteParser.T__1);
                        }
                        break;
                    case RustLiteParser.T__18:
                        {
                            this.state = 336;
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
                this.state = 339;
                this.match(RustLiteParser.VECTOR_MODULE_NAME);
                this.state = 340;
                this.match(RustLiteParser.LANGLE);
                this.state = 341;
                this.type_();
                this.state = 342;
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
            this.state = 359;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case RustLiteParser.VECTOR_MODULE_NAME:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 344;
                        this.match(RustLiteParser.VECTOR_MODULE_NAME);
                        this.state = 345;
                        this.match(RustLiteParser.METHOD_ACCESSOR);
                        this.state = 346;
                        this.match(RustLiteParser.NEW);
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
                    break;
                case RustLiteParser.VEC:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 352;
                        this.match(RustLiteParser.VEC);
                        this.state = 353;
                        this.match(RustLiteParser.T__11);
                        this.state = 354;
                        this.match(RustLiteParser.T__19);
                        this.state = 356;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4106) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 792577) !== 0)) {
                            {
                                this.state = 355;
                                this.vectorInitList();
                            }
                        }
                        this.state = 358;
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
                this.state = 361;
                this.expr();
                this.state = 366;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 17) {
                    {
                        {
                            this.state = 362;
                            this.match(RustLiteParser.T__16);
                            this.state = 363;
                            this.expr();
                        }
                    }
                    this.state = 368;
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
                this.state = 369;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 370;
                this.match(RustLiteParser.T__21);
                this.state = 371;
                this.match(RustLiteParser.LEN);
                this.state = 375;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case RustLiteParser.T__18:
                        {
                            this.state = 372;
                            this.match(RustLiteParser.T__18);
                        }
                        break;
                    case RustLiteParser.T__0:
                        {
                            this.state = 373;
                            this.match(RustLiteParser.T__0);
                            this.state = 374;
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
                this.state = 377;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 378;
                this.match(RustLiteParser.T__19);
                this.state = 379;
                this.arithExpr(0);
                this.state = 380;
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
            this.state = 385;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 44, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 382;
                        this.vectorInit();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 383;
                        this.vectorLen();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 384;
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
                this.state = 387;
                this.match(RustLiteParser.PRINTLN);
                this.state = 388;
                this.match(RustLiteParser.T__11);
                this.state = 389;
                this.match(RustLiteParser.T__0);
                this.state = 390;
                this.printlnArgs();
                this.state = 391;
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
                this.state = 393;
                this.match(RustLiteParser.STRING);
                this.state = 398;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 17) {
                    {
                        {
                            this.state = 394;
                            this.match(RustLiteParser.T__16);
                            this.state = 395;
                            this.expr();
                        }
                    }
                    this.state = 400;
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
    4, 1, 54, 402, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7,
    6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13,
    2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20,
    7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24, 7, 24, 2, 25, 7, 25, 2, 26, 7, 26,
    2, 27, 7, 27, 2, 28, 7, 28, 2, 29, 7, 29, 1, 0, 5, 0, 62, 8, 0, 10, 0, 12, 0, 65, 9, 0, 1,
    0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 73, 8, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2,
    1, 2, 1, 2, 1, 2, 3, 2, 86, 8, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1,
    3, 3, 3, 99, 8, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 5, 3, 111, 8, 3,
    10, 3, 12, 3, 114, 9, 3, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1,
    4, 1, 4, 1, 4, 1, 4, 3, 4, 131, 8, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 5, 4, 139, 8, 4, 10,
    4, 12, 4, 142, 9, 4, 1, 5, 1, 5, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 3, 6, 154, 8,
    6, 1, 7, 1, 7, 1, 7, 1, 7, 1, 8, 5, 8, 161, 8, 8, 10, 8, 12, 8, 164, 9, 8, 1, 8, 3, 8, 167,
    8, 8, 1, 8, 5, 8, 170, 8, 8, 10, 8, 12, 8, 173, 9, 8, 1, 8, 5, 8, 176, 8, 8, 10, 8, 12, 8,
    179, 9, 8, 1, 8, 1, 8, 1, 8, 5, 8, 184, 8, 8, 10, 8, 12, 8, 187, 9, 8, 1, 8, 3, 8, 190, 8,
    8, 1, 8, 1, 8, 3, 8, 194, 8, 8, 1, 9, 1, 9, 1, 9, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10,
    1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 3, 10,
    217, 8, 10, 1, 10, 1, 10, 1, 10, 3, 10, 222, 8, 10, 1, 10, 1, 10, 1, 10, 1, 10, 3, 10, 228,
    8, 10, 1, 10, 3, 10, 231, 8, 10, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11,
    5, 11, 241, 8, 11, 10, 11, 12, 11, 244, 9, 11, 1, 11, 1, 11, 3, 11, 248, 8, 11, 1, 11,
    1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 3, 11, 256, 8, 11, 3, 11, 258, 8, 11, 1, 12, 1, 12, 1,
    12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 3, 12, 269, 8, 12, 1, 13, 1, 13, 1, 14, 1,
    14, 1, 14, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 3, 15, 281, 8, 15, 1, 16, 1, 16, 1, 16, 5,
    16, 286, 8, 16, 10, 16, 12, 16, 289, 9, 16, 1, 16, 3, 16, 292, 8, 16, 1, 17, 1, 17, 1,
    17, 3, 17, 297, 8, 17, 1, 18, 1, 18, 3, 18, 301, 8, 18, 1, 18, 1, 18, 1, 19, 1, 19, 1, 19,
    1, 19, 3, 19, 309, 8, 19, 1, 19, 1, 19, 3, 19, 313, 8, 19, 1, 19, 3, 19, 316, 8, 19, 1,
    19, 1, 19, 1, 20, 1, 20, 1, 20, 5, 20, 323, 8, 20, 10, 20, 12, 20, 326, 9, 20, 1, 20, 3,
    20, 329, 8, 20, 1, 21, 1, 21, 1, 21, 3, 21, 334, 8, 21, 1, 21, 1, 21, 3, 21, 338, 8, 21,
    1, 22, 1, 22, 1, 22, 1, 22, 1, 22, 1, 23, 1, 23, 1, 23, 1, 23, 1, 23, 1, 23, 3, 23, 351,
    8, 23, 1, 23, 1, 23, 1, 23, 1, 23, 3, 23, 357, 8, 23, 1, 23, 3, 23, 360, 8, 23, 1, 24, 1,
    24, 1, 24, 5, 24, 365, 8, 24, 10, 24, 12, 24, 368, 9, 24, 1, 25, 1, 25, 1, 25, 1, 25, 1,
    25, 1, 25, 3, 25, 376, 8, 25, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 27, 1, 27, 1, 27, 3,
    27, 386, 8, 27, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 1, 29, 1, 29, 1, 29, 5, 29, 397,
    8, 29, 10, 29, 12, 29, 400, 9, 29, 1, 29, 0, 2, 6, 8, 30, 0, 2, 4, 6, 8, 10, 12, 14, 16,
    18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 0,
    5, 1, 0, 4, 6, 2, 0, 3, 3, 7, 7, 1, 0, 5, 6, 2, 0, 8, 11, 38, 39, 1, 0, 30, 31, 443, 0, 63,
    1, 0, 0, 0, 2, 72, 1, 0, 0, 0, 4, 85, 1, 0, 0, 0, 6, 98, 1, 0, 0, 0, 8, 130, 1, 0, 0, 0, 10,
    143, 1, 0, 0, 0, 12, 153, 1, 0, 0, 0, 14, 155, 1, 0, 0, 0, 16, 193, 1, 0, 0, 0, 18, 195,
    1, 0, 0, 0, 20, 230, 1, 0, 0, 0, 22, 257, 1, 0, 0, 0, 24, 268, 1, 0, 0, 0, 26, 270, 1, 0,
    0, 0, 28, 272, 1, 0, 0, 0, 30, 280, 1, 0, 0, 0, 32, 282, 1, 0, 0, 0, 34, 293, 1, 0, 0, 0,
    36, 298, 1, 0, 0, 0, 38, 304, 1, 0, 0, 0, 40, 319, 1, 0, 0, 0, 42, 330, 1, 0, 0, 0, 44, 339,
    1, 0, 0, 0, 46, 359, 1, 0, 0, 0, 48, 361, 1, 0, 0, 0, 50, 369, 1, 0, 0, 0, 52, 377, 1, 0,
    0, 0, 54, 385, 1, 0, 0, 0, 56, 387, 1, 0, 0, 0, 58, 393, 1, 0, 0, 0, 60, 62, 3, 10, 5, 0,
    61, 60, 1, 0, 0, 0, 62, 65, 1, 0, 0, 0, 63, 61, 1, 0, 0, 0, 63, 64, 1, 0, 0, 0, 64, 66, 1,
    0, 0, 0, 65, 63, 1, 0, 0, 0, 66, 67, 5, 0, 0, 1, 67, 1, 1, 0, 0, 0, 68, 73, 5, 45, 0, 0, 69,
    73, 5, 46, 0, 0, 70, 73, 5, 47, 0, 0, 71, 73, 3, 44, 22, 0, 72, 68, 1, 0, 0, 0, 72, 69, 1,
    0, 0, 0, 72, 70, 1, 0, 0, 0, 72, 71, 1, 0, 0, 0, 73, 3, 1, 0, 0, 0, 74, 75, 5, 1, 0, 0, 75,
    76, 3, 4, 2, 0, 76, 77, 5, 2, 0, 0, 77, 86, 1, 0, 0, 0, 78, 86, 5, 51, 0, 0, 79, 86, 5, 43,
    0, 0, 80, 86, 5, 44, 0, 0, 81, 86, 3, 6, 3, 0, 82, 86, 3, 8, 4, 0, 83, 86, 3, 42, 21, 0, 84,
    86, 3, 54, 27, 0, 85, 74, 1, 0, 0, 0, 85, 78, 1, 0, 0, 0, 85, 79, 1, 0, 0, 0, 85, 80, 1, 0,
    0, 0, 85, 81, 1, 0, 0, 0, 85, 82, 1, 0, 0, 0, 85, 83, 1, 0, 0, 0, 85, 84, 1, 0, 0, 0, 86, 5,
    1, 0, 0, 0, 87, 88, 6, 3, -1, 0, 88, 99, 5, 43, 0, 0, 89, 99, 5, 51, 0, 0, 90, 91, 5, 1, 0,
    0, 91, 92, 3, 6, 3, 0, 92, 93, 5, 2, 0, 0, 93, 99, 1, 0, 0, 0, 94, 95, 5, 3, 0, 0, 95, 99,
    3, 6, 3, 5, 96, 97, 5, 44, 0, 0, 97, 99, 6, 3, -1, 0, 98, 87, 1, 0, 0, 0, 98, 89, 1, 0, 0,
    0, 98, 90, 1, 0, 0, 0, 98, 94, 1, 0, 0, 0, 98, 96, 1, 0, 0, 0, 99, 112, 1, 0, 0, 0, 100, 101,
    10, 4, 0, 0, 101, 102, 7, 0, 0, 0, 102, 111, 3, 6, 3, 5, 103, 104, 10, 3, 0, 0, 104, 105,
    7, 1, 0, 0, 105, 111, 3, 6, 3, 4, 106, 107, 10, 1, 0, 0, 107, 108, 7, 2, 0, 0, 108, 109,
    5, 43, 0, 0, 109, 111, 6, 3, -1, 0, 110, 100, 1, 0, 0, 0, 110, 103, 1, 0, 0, 0, 110, 106,
    1, 0, 0, 0, 111, 114, 1, 0, 0, 0, 112, 110, 1, 0, 0, 0, 112, 113, 1, 0, 0, 0, 113, 7, 1,
    0, 0, 0, 114, 112, 1, 0, 0, 0, 115, 116, 6, 4, -1, 0, 116, 131, 5, 44, 0, 0, 117, 131,
    5, 51, 0, 0, 118, 119, 5, 1, 0, 0, 119, 120, 3, 8, 4, 0, 120, 121, 5, 2, 0, 0, 121, 131,
    1, 0, 0, 0, 122, 123, 3, 6, 3, 0, 123, 124, 7, 3, 0, 0, 124, 125, 3, 6, 3, 0, 125, 131,
    1, 0, 0, 0, 126, 127, 5, 12, 0, 0, 127, 131, 3, 8, 4, 4, 128, 129, 5, 43, 0, 0, 129, 131,
    6, 4, -1, 0, 130, 115, 1, 0, 0, 0, 130, 117, 1, 0, 0, 0, 130, 118, 1, 0, 0, 0, 130, 122,
    1, 0, 0, 0, 130, 126, 1, 0, 0, 0, 130, 128, 1, 0, 0, 0, 131, 140, 1, 0, 0, 0, 132, 133,
    10, 3, 0, 0, 133, 134, 5, 13, 0, 0, 134, 139, 3, 8, 4, 4, 135, 136, 10, 2, 0, 0, 136, 137,
    5, 14, 0, 0, 137, 139, 3, 8, 4, 3, 138, 132, 1, 0, 0, 0, 138, 135, 1, 0, 0, 0, 139, 142,
    1, 0, 0, 0, 140, 138, 1, 0, 0, 0, 140, 141, 1, 0, 0, 0, 141, 9, 1, 0, 0, 0, 142, 140, 1,
    0, 0, 0, 143, 144, 3, 38, 19, 0, 144, 11, 1, 0, 0, 0, 145, 154, 3, 18, 9, 0, 146, 154,
    3, 20, 10, 0, 147, 154, 3, 22, 11, 0, 148, 154, 3, 24, 12, 0, 149, 154, 3, 28, 14, 0,
    150, 154, 3, 38, 19, 0, 151, 154, 3, 36, 18, 0, 152, 154, 3, 14, 7, 0, 153, 145, 1, 0,
    0, 0, 153, 146, 1, 0, 0, 0, 153, 147, 1, 0, 0, 0, 153, 148, 1, 0, 0, 0, 153, 149, 1, 0,
    0, 0, 153, 150, 1, 0, 0, 0, 153, 151, 1, 0, 0, 0, 153, 152, 1, 0, 0, 0, 154, 13, 1, 0, 0,
    0, 155, 156, 5, 15, 0, 0, 156, 157, 3, 16, 8, 0, 157, 158, 5, 16, 0, 0, 158, 15, 1, 0,
    0, 0, 159, 161, 3, 12, 6, 0, 160, 159, 1, 0, 0, 0, 161, 164, 1, 0, 0, 0, 162, 160, 1, 0,
    0, 0, 162, 163, 1, 0, 0, 0, 163, 166, 1, 0, 0, 0, 164, 162, 1, 0, 0, 0, 165, 167, 3, 4,
    2, 0, 166, 165, 1, 0, 0, 0, 166, 167, 1, 0, 0, 0, 167, 194, 1, 0, 0, 0, 168, 170, 3, 12,
    6, 0, 169, 168, 1, 0, 0, 0, 170, 173, 1, 0, 0, 0, 171, 169, 1, 0, 0, 0, 171, 172, 1, 0,
    0, 0, 172, 194, 1, 0, 0, 0, 173, 171, 1, 0, 0, 0, 174, 176, 3, 12, 6, 0, 175, 174, 1, 0,
    0, 0, 176, 179, 1, 0, 0, 0, 177, 175, 1, 0, 0, 0, 177, 178, 1, 0, 0, 0, 178, 180, 1, 0,
    0, 0, 179, 177, 1, 0, 0, 0, 180, 185, 3, 4, 2, 0, 181, 184, 3, 12, 6, 0, 182, 184, 3, 4,
    2, 0, 183, 181, 1, 0, 0, 0, 183, 182, 1, 0, 0, 0, 184, 187, 1, 0, 0, 0, 185, 183, 1, 0,
    0, 0, 185, 186, 1, 0, 0, 0, 186, 189, 1, 0, 0, 0, 187, 185, 1, 0, 0, 0, 188, 190, 3, 4,
    2, 0, 189, 188, 1, 0, 0, 0, 189, 190, 1, 0, 0, 0, 190, 191, 1, 0, 0, 0, 191, 192, 6, 8,
    -1, 0, 192, 194, 1, 0, 0, 0, 193, 162, 1, 0, 0, 0, 193, 171, 1, 0, 0, 0, 193, 177, 1, 0,
    0, 0, 194, 17, 1, 0, 0, 0, 195, 196, 3, 4, 2, 0, 196, 197, 5, 42, 0, 0, 197, 19, 1, 0, 0,
    0, 198, 199, 5, 23, 0, 0, 199, 200, 5, 51, 0, 0, 200, 201, 5, 41, 0, 0, 201, 202, 3, 2,
    1, 0, 202, 203, 5, 40, 0, 0, 203, 204, 3, 4, 2, 0, 204, 205, 5, 42, 0, 0, 205, 231, 1,
    0, 0, 0, 206, 207, 5, 23, 0, 0, 207, 208, 5, 51, 0, 0, 208, 209, 5, 40, 0, 0, 209, 210,
    3, 4, 2, 0, 210, 211, 5, 42, 0, 0, 211, 231, 1, 0, 0, 0, 212, 213, 5, 23, 0, 0, 213, 214,
    5, 51, 0, 0, 214, 216, 6, 10, -1, 0, 215, 217, 5, 42, 0, 0, 216, 215, 1, 0, 0, 0, 216,
    217, 1, 0, 0, 0, 217, 231, 1, 0, 0, 0, 218, 221, 5, 23, 0, 0, 219, 220, 5, 41, 0, 0, 220,
    222, 3, 2, 1, 0, 221, 219, 1, 0, 0, 0, 221, 222, 1, 0, 0, 0, 222, 223, 1, 0, 0, 0, 223,
    227, 6, 10, -1, 0, 224, 225, 5, 40, 0, 0, 225, 226, 5, 41, 0, 0, 226, 228, 3, 4, 2, 0,
    227, 224, 1, 0, 0, 0, 227, 228, 1, 0, 0, 0, 228, 229, 1, 0, 0, 0, 229, 231, 5, 42, 0, 0,
    230, 198, 1, 0, 0, 0, 230, 206, 1, 0, 0, 0, 230, 212, 1, 0, 0, 0, 230, 218, 1, 0, 0, 0,
    231, 21, 1, 0, 0, 0, 232, 233, 5, 26, 0, 0, 233, 234, 3, 8, 4, 0, 234, 242, 3, 14, 7, 0,
    235, 236, 5, 27, 0, 0, 236, 237, 5, 26, 0, 0, 237, 238, 3, 8, 4, 0, 238, 239, 3, 14, 7,
    0, 239, 241, 1, 0, 0, 0, 240, 235, 1, 0, 0, 0, 241, 244, 1, 0, 0, 0, 242, 240, 1, 0, 0,
    0, 242, 243, 1, 0, 0, 0, 243, 247, 1, 0, 0, 0, 244, 242, 1, 0, 0, 0, 245, 246, 5, 27, 0,
    0, 246, 248, 3, 14, 7, 0, 247, 245, 1, 0, 0, 0, 247, 248, 1, 0, 0, 0, 248, 258, 1, 0, 0,
    0, 249, 250, 5, 26, 0, 0, 250, 251, 3, 4, 2, 0, 251, 252, 6, 11, -1, 0, 252, 255, 3, 14,
    7, 0, 253, 254, 5, 27, 0, 0, 254, 256, 3, 14, 7, 0, 255, 253, 1, 0, 0, 0, 255, 256, 1,
    0, 0, 0, 256, 258, 1, 0, 0, 0, 257, 232, 1, 0, 0, 0, 257, 249, 1, 0, 0, 0, 258, 23, 1, 0,
    0, 0, 259, 260, 5, 28, 0, 0, 260, 261, 3, 8, 4, 0, 261, 262, 3, 14, 7, 0, 262, 269, 1,
    0, 0, 0, 263, 264, 5, 28, 0, 0, 264, 265, 3, 4, 2, 0, 265, 266, 6, 12, -1, 0, 266, 267,
    3, 14, 7, 0, 267, 269, 1, 0, 0, 0, 268, 259, 1, 0, 0, 0, 268, 263, 1, 0, 0, 0, 269, 25,
    1, 0, 0, 0, 270, 271, 7, 4, 0, 0, 271, 27, 1, 0, 0, 0, 272, 273, 3, 26, 13, 0, 273, 274,
    5, 42, 0, 0, 274, 29, 1, 0, 0, 0, 275, 276, 5, 51, 0, 0, 276, 277, 5, 41, 0, 0, 277, 281,
    3, 2, 1, 0, 278, 279, 5, 51, 0, 0, 279, 281, 6, 15, -1, 0, 280, 275, 1, 0, 0, 0, 280, 278,
    1, 0, 0, 0, 281, 31, 1, 0, 0, 0, 282, 287, 3, 30, 15, 0, 283, 284, 5, 17, 0, 0, 284, 286,
    3, 30, 15, 0, 285, 283, 1, 0, 0, 0, 286, 289, 1, 0, 0, 0, 287, 285, 1, 0, 0, 0, 287, 288,
    1, 0, 0, 0, 288, 291, 1, 0, 0, 0, 289, 287, 1, 0, 0, 0, 290, 292, 5, 17, 0, 0, 291, 290,
    1, 0, 0, 0, 291, 292, 1, 0, 0, 0, 292, 33, 1, 0, 0, 0, 293, 296, 5, 18, 0, 0, 294, 297,
    3, 2, 1, 0, 295, 297, 5, 19, 0, 0, 296, 294, 1, 0, 0, 0, 296, 295, 1, 0, 0, 0, 297, 35,
    1, 0, 0, 0, 298, 300, 5, 29, 0, 0, 299, 301, 3, 4, 2, 0, 300, 299, 1, 0, 0, 0, 300, 301,
    1, 0, 0, 0, 301, 302, 1, 0, 0, 0, 302, 303, 5, 42, 0, 0, 303, 37, 1, 0, 0, 0, 304, 305,
    5, 25, 0, 0, 305, 312, 5, 51, 0, 0, 306, 308, 5, 1, 0, 0, 307, 309, 3, 32, 16, 0, 308,
    307, 1, 0, 0, 0, 308, 309, 1, 0, 0, 0, 309, 310, 1, 0, 0, 0, 310, 313, 5, 2, 0, 0, 311,
    313, 5, 19, 0, 0, 312, 306, 1, 0, 0, 0, 312, 311, 1, 0, 0, 0, 313, 315, 1, 0, 0, 0, 314,
    316, 3, 34, 17, 0, 315, 314, 1, 0, 0, 0, 315, 316, 1, 0, 0, 0, 316, 317, 1, 0, 0, 0, 317,
    318, 3, 14, 7, 0, 318, 39, 1, 0, 0, 0, 319, 324, 3, 4, 2, 0, 320, 321, 5, 17, 0, 0, 321,
    323, 3, 4, 2, 0, 322, 320, 1, 0, 0, 0, 323, 326, 1, 0, 0, 0, 324, 322, 1, 0, 0, 0, 324,
    325, 1, 0, 0, 0, 325, 328, 1, 0, 0, 0, 326, 324, 1, 0, 0, 0, 327, 329, 5, 17, 0, 0, 328,
    327, 1, 0, 0, 0, 328, 329, 1, 0, 0, 0, 329, 41, 1, 0, 0, 0, 330, 337, 5, 51, 0, 0, 331,
    333, 5, 1, 0, 0, 332, 334, 3, 40, 20, 0, 333, 332, 1, 0, 0, 0, 333, 334, 1, 0, 0, 0, 334,
    335, 1, 0, 0, 0, 335, 338, 5, 2, 0, 0, 336, 338, 5, 19, 0, 0, 337, 331, 1, 0, 0, 0, 337,
    336, 1, 0, 0, 0, 338, 43, 1, 0, 0, 0, 339, 340, 5, 50, 0, 0, 340, 341, 5, 38, 0, 0, 341,
    342, 3, 2, 1, 0, 342, 343, 5, 39, 0, 0, 343, 45, 1, 0, 0, 0, 344, 345, 5, 50, 0, 0, 345,
    346, 5, 49, 0, 0, 346, 350, 5, 33, 0, 0, 347, 351, 5, 19, 0, 0, 348, 349, 5, 1, 0, 0, 349,
    351, 5, 2, 0, 0, 350, 347, 1, 0, 0, 0, 350, 348, 1, 0, 0, 0, 351, 360, 1, 0, 0, 0, 352,
    353, 5, 32, 0, 0, 353, 354, 5, 12, 0, 0, 354, 356, 5, 20, 0, 0, 355, 357, 3, 48, 24, 0,
    356, 355, 1, 0, 0, 0, 356, 357, 1, 0, 0, 0, 357, 358, 1, 0, 0, 0, 358, 360, 5, 21, 0, 0,
    359, 344, 1, 0, 0, 0, 359, 352, 1, 0, 0, 0, 360, 47, 1, 0, 0, 0, 361, 366, 3, 4, 2, 0, 362,
    363, 5, 17, 0, 0, 363, 365, 3, 4, 2, 0, 364, 362, 1, 0, 0, 0, 365, 368, 1, 0, 0, 0, 366,
    364, 1, 0, 0, 0, 366, 367, 1, 0, 0, 0, 367, 49, 1, 0, 0, 0, 368, 366, 1, 0, 0, 0, 369, 370,
    5, 51, 0, 0, 370, 371, 5, 22, 0, 0, 371, 375, 5, 36, 0, 0, 372, 376, 5, 19, 0, 0, 373,
    374, 5, 1, 0, 0, 374, 376, 5, 2, 0, 0, 375, 372, 1, 0, 0, 0, 375, 373, 1, 0, 0, 0, 376,
    51, 1, 0, 0, 0, 377, 378, 5, 51, 0, 0, 378, 379, 5, 20, 0, 0, 379, 380, 3, 6, 3, 0, 380,
    381, 5, 21, 0, 0, 381, 53, 1, 0, 0, 0, 382, 386, 3, 46, 23, 0, 383, 386, 3, 50, 25, 0,
    384, 386, 3, 52, 26, 0, 385, 382, 1, 0, 0, 0, 385, 383, 1, 0, 0, 0, 385, 384, 1, 0, 0,
    0, 386, 55, 1, 0, 0, 0, 387, 388, 5, 37, 0, 0, 388, 389, 5, 12, 0, 0, 389, 390, 5, 1, 0,
    0, 390, 391, 3, 58, 29, 0, 391, 392, 5, 2, 0, 0, 392, 57, 1, 0, 0, 0, 393, 398, 5, 48,
    0, 0, 394, 395, 5, 17, 0, 0, 395, 397, 3, 4, 2, 0, 396, 394, 1, 0, 0, 0, 397, 400, 1, 0,
    0, 0, 398, 396, 1, 0, 0, 0, 398, 399, 1, 0, 0, 0, 399, 59, 1, 0, 0, 0, 400, 398, 1, 0, 0,
    0, 46, 63, 72, 85, 98, 110, 112, 130, 138, 140, 153, 162, 166, 171, 177, 183, 185,
    189, 193, 216, 221, 227, 230, 242, 247, 255, 257, 268, 280, 287, 291, 296, 300,
    308, 312, 315, 324, 328, 333, 337, 350, 356, 359, 366, 375, 385, 398
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
