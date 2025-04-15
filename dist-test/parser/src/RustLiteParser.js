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
exports.PrintlnArgsContext = exports.PrintlnMacroContext = exports.VectorExprContext = exports.VectorIndexAccessContext = exports.VectorLenContext = exports.VectorInitListContext = exports.VectorInitContext = exports.VectorTypeContext = exports.FnCallContext = exports.ArgListContext = exports.FnDeclareStmtContext = exports.ReturnStmtContext = exports.ReturnTypeContext = exports.ReturnTypesContext = exports.ParamListContext = exports.ParamContext = exports.LoopControlStmtContext = exports.LoopControlContext = exports.WhileStmtContext = exports.CondStmtContext = exports.DeclareStmtContext = exports.ExprStmtContext = exports.BlockContentContext = exports.BlockContext = exports.StmtContext = exports.GlobalElementContext = exports.LogicExprContext = exports.ArithExprContext = exports.ExprContext = exports.TypeContext = exports.ProgContext = exports.RustLiteParser = void 0;
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
                this.state = 65;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 25) {
                    {
                        {
                            this.state = 62;
                            this.globalElement();
                        }
                    }
                    this.state = 67;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 68;
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
            this.state = 80;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case RustLiteParser.U8_TYPE:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 70;
                        this.match(RustLiteParser.U8_TYPE);
                    }
                    break;
                case RustLiteParser.U16_TYPE:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 71;
                        this.match(RustLiteParser.U16_TYPE);
                    }
                    break;
                case RustLiteParser.U32_TYPE:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 72;
                        this.match(RustLiteParser.U32_TYPE);
                    }
                    break;
                case RustLiteParser.U64_TYPE:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 73;
                        this.match(RustLiteParser.U64_TYPE);
                    }
                    break;
                case RustLiteParser.I8_TYPE:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 74;
                        this.match(RustLiteParser.I8_TYPE);
                    }
                    break;
                case RustLiteParser.I16_TYPE:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 75;
                        this.match(RustLiteParser.I16_TYPE);
                    }
                    break;
                case RustLiteParser.I32_TYPE:
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 76;
                        this.match(RustLiteParser.I32_TYPE);
                    }
                    break;
                case RustLiteParser.I64_TYPE:
                    this.enterOuterAlt(localContext, 8);
                    {
                        this.state = 77;
                        this.match(RustLiteParser.I64_TYPE);
                    }
                    break;
                case RustLiteParser.BOOL_TYPE:
                    this.enterOuterAlt(localContext, 9);
                    {
                        this.state = 78;
                        this.match(RustLiteParser.BOOL_TYPE);
                    }
                    break;
                case RustLiteParser.VECTOR_MODULE_NAME:
                    this.enterOuterAlt(localContext, 10);
                    {
                        this.state = 79;
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
            this.state = 93;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 2, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 82;
                        this.match(RustLiteParser.T__0);
                        this.state = 83;
                        localContext._inner = this.expr();
                        this.state = 84;
                        this.match(RustLiteParser.T__1);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 86;
                        this.match(RustLiteParser.IDENTIFIER);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 87;
                        this.match(RustLiteParser.INT);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 88;
                        this.match(RustLiteParser.BOOL);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 89;
                        this.arithExpr(0);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 90;
                        this.logicExpr(0);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 91;
                        this.fnCall();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(localContext, 8);
                    {
                        this.state = 92;
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
                this.state = 106;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case RustLiteParser.INT:
                        {
                            this.state = 96;
                            localContext._primary = this.match(RustLiteParser.INT);
                        }
                        break;
                    case RustLiteParser.IDENTIFIER:
                        {
                            this.state = 97;
                            localContext._primary = this.match(RustLiteParser.IDENTIFIER);
                        }
                        break;
                    case RustLiteParser.T__0:
                        {
                            this.state = 98;
                            this.match(RustLiteParser.T__0);
                            this.state = 99;
                            localContext._inner = this.arithExpr(0);
                            this.state = 100;
                            this.match(RustLiteParser.T__1);
                        }
                        break;
                    case RustLiteParser.T__2:
                        {
                            this.state = 102;
                            localContext._op = this.match(RustLiteParser.T__2);
                            this.state = 103;
                            localContext._right = this.arithExpr(5);
                        }
                        break;
                    case RustLiteParser.BOOL:
                        {
                            this.state = 104;
                            this.match(RustLiteParser.BOOL);
                            this.notifyErrorListeners("Cannot use boolean in arithmetic expressions", null, null);
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                }
                this.context.stop = this.tokenStream.LT(-1);
                this.state = 120;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 5, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        if (this.parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        previousContext = localContext;
                        {
                            this.state = 118;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 4, this.context)) {
                                case 1:
                                    {
                                        localContext = new ArithExprContext(parentContext, parentState);
                                        localContext._left = previousContext;
                                        this.pushNewRecursionContext(localContext, _startState, RustLiteParser.RULE_arithExpr);
                                        this.state = 108;
                                        if (!(this.precpred(this.context, 4))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                                        }
                                        this.state = 109;
                                        localContext._op = this.tokenStream.LT(1);
                                        _la = this.tokenStream.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 112) !== 0))) {
                                            localContext._op = this.errorHandler.recoverInline(this);
                                        }
                                        else {
                                            this.errorHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 110;
                                        localContext._right = this.arithExpr(5);
                                    }
                                    break;
                                case 2:
                                    {
                                        localContext = new ArithExprContext(parentContext, parentState);
                                        localContext._left = previousContext;
                                        this.pushNewRecursionContext(localContext, _startState, RustLiteParser.RULE_arithExpr);
                                        this.state = 111;
                                        if (!(this.precpred(this.context, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                                        }
                                        this.state = 112;
                                        localContext._op = this.tokenStream.LT(1);
                                        _la = this.tokenStream.LA(1);
                                        if (!(_la === 3 || _la === 7)) {
                                            localContext._op = this.errorHandler.recoverInline(this);
                                        }
                                        else {
                                            this.errorHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 113;
                                        localContext._right = this.arithExpr(4);
                                    }
                                    break;
                                case 3:
                                    {
                                        localContext = new ArithExprContext(parentContext, parentState);
                                        localContext._left = previousContext;
                                        this.pushNewRecursionContext(localContext, _startState, RustLiteParser.RULE_arithExpr);
                                        this.state = 114;
                                        if (!(this.precpred(this.context, 1))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                                        }
                                        this.state = 115;
                                        localContext._op = this.tokenStream.LT(1);
                                        _la = this.tokenStream.LA(1);
                                        if (!(_la === 5 || _la === 6)) {
                                            localContext._op = this.errorHandler.recoverInline(this);
                                        }
                                        else {
                                            this.errorHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 116;
                                        this.match(RustLiteParser.INT);
                                        if ((localContext._right != null ? this.tokenStream.getTextFromRange(localContext._right.start, localContext._right.stop) : '') === "0")
                                            this.notifyErrorListeners("Division by zero", null, null);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 122;
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
                this.state = 138;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 6, this.context)) {
                    case 1:
                        {
                            this.state = 124;
                            localContext._primary = this.match(RustLiteParser.BOOL);
                        }
                        break;
                    case 2:
                        {
                            this.state = 125;
                            localContext._primary = this.match(RustLiteParser.IDENTIFIER);
                        }
                        break;
                    case 3:
                        {
                            this.state = 126;
                            this.match(RustLiteParser.T__0);
                            this.state = 127;
                            localContext._inner = this.logicExpr(0);
                            this.state = 128;
                            this.match(RustLiteParser.T__1);
                        }
                        break;
                    case 4:
                        {
                            this.state = 130;
                            localContext._arithLeft = this.arithExpr(0);
                            this.state = 131;
                            localContext._op = this.tokenStream.LT(1);
                            _la = this.tokenStream.LA(1);
                            if (!(((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & 3221225487) !== 0))) {
                                localContext._op = this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 132;
                            localContext._arithRight = this.arithExpr(0);
                        }
                        break;
                    case 5:
                        {
                            this.state = 134;
                            localContext._op = this.match(RustLiteParser.T__11);
                            this.state = 135;
                            localContext._right = this.logicExpr(4);
                        }
                        break;
                    case 6:
                        {
                            this.state = 136;
                            this.match(RustLiteParser.INT);
                            this.notifyErrorListeners("Cannot use INT without comparison operators in logical expressions", null, null);
                        }
                        break;
                }
                this.context.stop = this.tokenStream.LT(-1);
                this.state = 148;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 8, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        if (this.parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        previousContext = localContext;
                        {
                            this.state = 146;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 7, this.context)) {
                                case 1:
                                    {
                                        localContext = new LogicExprContext(parentContext, parentState);
                                        localContext._left = previousContext;
                                        this.pushNewRecursionContext(localContext, _startState, RustLiteParser.RULE_logicExpr);
                                        this.state = 140;
                                        if (!(this.precpred(this.context, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                                        }
                                        this.state = 141;
                                        localContext._op = this.match(RustLiteParser.T__12);
                                        this.state = 142;
                                        localContext._right = this.logicExpr(4);
                                    }
                                    break;
                                case 2:
                                    {
                                        localContext = new LogicExprContext(parentContext, parentState);
                                        localContext._left = previousContext;
                                        this.pushNewRecursionContext(localContext, _startState, RustLiteParser.RULE_logicExpr);
                                        this.state = 143;
                                        if (!(this.precpred(this.context, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                                        }
                                        this.state = 144;
                                        localContext._op = this.match(RustLiteParser.T__13);
                                        this.state = 145;
                                        localContext._right = this.logicExpr(3);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 150;
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
                this.state = 151;
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
            this.state = 161;
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
                        this.state = 153;
                        this.exprStmt();
                    }
                    break;
                case RustLiteParser.LET:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 154;
                        this.declareStmt();
                    }
                    break;
                case RustLiteParser.IF:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 155;
                        this.condStmt();
                    }
                    break;
                case RustLiteParser.WHILE:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 156;
                        this.whileStmt();
                    }
                    break;
                case RustLiteParser.BREAK:
                case RustLiteParser.CONTINUE:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 157;
                        this.loopControlStmt();
                    }
                    break;
                case RustLiteParser.FN:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 158;
                        this.fnDeclareStmt();
                    }
                    break;
                case RustLiteParser.RETURN:
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 159;
                        this.returnStmt();
                    }
                    break;
                case RustLiteParser.T__14:
                    this.enterOuterAlt(localContext, 8);
                    {
                        this.state = 160;
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
                this.state = 163;
                this.match(RustLiteParser.T__14);
                this.state = 164;
                this.blockContent();
                this.state = 165;
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
            this.state = 201;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 17, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 170;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 10, this.context);
                        while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                            if (alternative === 1) {
                                {
                                    {
                                        this.state = 167;
                                        this.stmt();
                                    }
                                }
                            }
                            this.state = 172;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 10, this.context);
                        }
                        this.state = 174;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4106) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 50337793) !== 0)) {
                            {
                                this.state = 173;
                                localContext._finalExpr = this.expr();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 179;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4135620618) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 50337793) !== 0)) {
                            {
                                {
                                    this.state = 176;
                                    this.stmt();
                                }
                            }
                            this.state = 181;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 185;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 13, this.context);
                        while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                            if (alternative === 1) {
                                {
                                    {
                                        this.state = 182;
                                        this.stmt();
                                    }
                                }
                            }
                            this.state = 187;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 13, this.context);
                        }
                        this.state = 188;
                        this.expr();
                        this.state = 193;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 15, this.context);
                        while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                            if (alternative === 1) {
                                {
                                    this.state = 191;
                                    this.errorHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this.tokenStream, 14, this.context)) {
                                        case 1:
                                            {
                                                this.state = 189;
                                                this.stmt();
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 190;
                                                this.expr();
                                            }
                                            break;
                                    }
                                }
                            }
                            this.state = 195;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 15, this.context);
                        }
                        this.state = 197;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4106) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 50337793) !== 0)) {
                            {
                                this.state = 196;
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
                this.state = 203;
                this.expr();
                this.state = 204;
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
            this.state = 244;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 21, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 206;
                        this.match(RustLiteParser.LET);
                        this.state = 207;
                        this.match(RustLiteParser.IDENTIFIER);
                        this.state = 208;
                        this.match(RustLiteParser.COLON);
                        this.state = 209;
                        this.type_();
                        this.state = 210;
                        this.match(RustLiteParser.EQUALS);
                        this.state = 211;
                        this.expr();
                        this.state = 212;
                        this.match(RustLiteParser.SEMICOLON);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 214;
                        this.match(RustLiteParser.LET);
                        this.state = 215;
                        this.match(RustLiteParser.IDENTIFIER);
                        this.state = 216;
                        this.match(RustLiteParser.COLON);
                        this.state = 217;
                        this.type_();
                        this.state = 218;
                        this.match(RustLiteParser.SEMICOLON);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 220;
                        this.match(RustLiteParser.LET);
                        this.state = 221;
                        this.match(RustLiteParser.IDENTIFIER);
                        this.state = 222;
                        this.match(RustLiteParser.EQUALS);
                        this.state = 223;
                        this.expr();
                        this.state = 224;
                        this.match(RustLiteParser.SEMICOLON);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 226;
                        this.match(RustLiteParser.LET);
                        this.state = 227;
                        this.match(RustLiteParser.IDENTIFIER);
                        this.notifyErrorListeners("Type annotations needed", null, null);
                        this.state = 230;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 42) {
                            {
                                this.state = 229;
                                this.match(RustLiteParser.SEMICOLON);
                            }
                        }
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 232;
                        this.match(RustLiteParser.LET);
                        this.state = 235;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 41) {
                            {
                                this.state = 233;
                                this.match(RustLiteParser.COLON);
                                this.state = 234;
                                this.type_();
                            }
                        }
                        this.notifyErrorListeners("Expected identifier", null, null);
                        this.state = 241;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 40) {
                            {
                                this.state = 238;
                                this.match(RustLiteParser.EQUALS);
                                this.state = 239;
                                this.match(RustLiteParser.COLON);
                                this.state = 240;
                                this.expr();
                            }
                        }
                        this.state = 243;
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
            this.state = 271;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 25, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 246;
                        this.match(RustLiteParser.IF);
                        this.state = 247;
                        this.logicExpr(0);
                        this.state = 248;
                        this.block();
                        this.state = 256;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 22, this.context);
                        while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                            if (alternative === 1) {
                                {
                                    {
                                        this.state = 249;
                                        this.match(RustLiteParser.ELSE);
                                        this.state = 250;
                                        this.match(RustLiteParser.IF);
                                        this.state = 251;
                                        this.logicExpr(0);
                                        this.state = 252;
                                        this.block();
                                    }
                                }
                            }
                            this.state = 258;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 22, this.context);
                        }
                        this.state = 261;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 27) {
                            {
                                this.state = 259;
                                this.match(RustLiteParser.ELSE);
                                this.state = 260;
                                this.block();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 263;
                        this.match(RustLiteParser.IF);
                        this.state = 264;
                        this.expr();
                        this.notifyErrorListeners("Condition must be a boolean expression", null, null);
                        this.state = 266;
                        this.block();
                        this.state = 269;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 27) {
                            {
                                this.state = 267;
                                this.match(RustLiteParser.ELSE);
                                this.state = 268;
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
            this.state = 282;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 26, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 273;
                        this.match(RustLiteParser.WHILE);
                        this.state = 274;
                        this.logicExpr(0);
                        this.state = 275;
                        this.block();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 277;
                        this.match(RustLiteParser.WHILE);
                        this.state = 278;
                        this.expr();
                        this.notifyErrorListeners("Condition must be a boolean expression", null, null);
                        this.state = 280;
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
                this.state = 284;
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
                this.state = 286;
                this.loopControl();
                this.state = 287;
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
            this.state = 294;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 27, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 289;
                        this.match(RustLiteParser.IDENTIFIER);
                        this.state = 290;
                        this.match(RustLiteParser.COLON);
                        this.state = 291;
                        this.type_();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 292;
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
                this.state = 296;
                this.param();
                this.state = 301;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 28, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 297;
                                this.match(RustLiteParser.T__16);
                                this.state = 298;
                                this.param();
                            }
                        }
                    }
                    this.state = 303;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 28, this.context);
                }
                this.state = 305;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 17) {
                    {
                        this.state = 304;
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
            this.state = 309;
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
                        this.state = 307;
                        this.type_();
                    }
                    break;
                case RustLiteParser.T__17:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 308;
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
                this.state = 311;
                this.match(RustLiteParser.T__18);
                this.state = 312;
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
                this.state = 314;
                this.match(RustLiteParser.RETURN);
                this.state = 316;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4106) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 50337793) !== 0)) {
                    {
                        this.state = 315;
                        this.expr();
                    }
                }
                this.state = 318;
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
                this.state = 320;
                this.match(RustLiteParser.FN);
                this.state = 321;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 328;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case RustLiteParser.T__0:
                        {
                            this.state = 322;
                            this.match(RustLiteParser.T__0);
                            this.state = 324;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 57) {
                                {
                                    this.state = 323;
                                    this.paramList();
                                }
                            }
                            this.state = 326;
                            this.match(RustLiteParser.T__1);
                        }
                        break;
                    case RustLiteParser.T__17:
                        {
                            this.state = 327;
                            this.match(RustLiteParser.T__17);
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                }
                this.state = 331;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 19) {
                    {
                        this.state = 330;
                        this.returnType();
                    }
                }
                this.state = 333;
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
                this.state = 335;
                this.expr();
                this.state = 340;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 35, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 336;
                                this.match(RustLiteParser.T__16);
                                this.state = 337;
                                this.expr();
                            }
                        }
                    }
                    this.state = 342;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 35, this.context);
                }
                this.state = 344;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 17) {
                    {
                        this.state = 343;
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
                this.state = 346;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 347;
                this.match(RustLiteParser.T__0);
                this.state = 349;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4106) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 50337793) !== 0)) {
                    {
                        this.state = 348;
                        this.argList();
                    }
                }
                this.state = 351;
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
                this.state = 353;
                this.match(RustLiteParser.VECTOR_MODULE_NAME);
                this.state = 354;
                this.match(RustLiteParser.LANGLE);
                this.state = 355;
                this.type_();
                this.state = 356;
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
            this.state = 373;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case RustLiteParser.VECTOR_MODULE_NAME:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 358;
                        this.match(RustLiteParser.VECTOR_MODULE_NAME);
                        this.state = 359;
                        this.match(RustLiteParser.METHOD_ACCESSOR);
                        this.state = 360;
                        this.match(RustLiteParser.NEW);
                        this.state = 364;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                            case RustLiteParser.T__17:
                                {
                                    this.state = 361;
                                    this.match(RustLiteParser.T__17);
                                }
                                break;
                            case RustLiteParser.T__0:
                                {
                                    this.state = 362;
                                    this.match(RustLiteParser.T__0);
                                    this.state = 363;
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
                        this.state = 366;
                        this.match(RustLiteParser.VEC);
                        this.state = 367;
                        this.match(RustLiteParser.T__11);
                        this.state = 368;
                        this.match(RustLiteParser.T__19);
                        this.state = 370;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4106) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 50337793) !== 0)) {
                            {
                                this.state = 369;
                                this.vectorInitList();
                            }
                        }
                        this.state = 372;
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
                this.state = 375;
                this.expr();
                this.state = 380;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 17) {
                    {
                        {
                            this.state = 376;
                            this.match(RustLiteParser.T__16);
                            this.state = 377;
                            this.expr();
                        }
                    }
                    this.state = 382;
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
        this.enterRule(localContext, 52, RustLiteParser.RULE_vectorLen);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 383;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 384;
                this.match(RustLiteParser.T__21);
                this.state = 385;
                this.match(RustLiteParser.LEN);
                this.state = 389;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case RustLiteParser.T__17:
                        {
                            this.state = 386;
                            this.match(RustLiteParser.T__17);
                        }
                        break;
                    case RustLiteParser.T__0:
                        {
                            this.state = 387;
                            this.match(RustLiteParser.T__0);
                            this.state = 388;
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
        this.enterRule(localContext, 54, RustLiteParser.RULE_vectorIndexAccess);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 391;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 392;
                this.match(RustLiteParser.T__19);
                this.state = 393;
                this.arithExpr(0);
                this.state = 394;
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
        this.enterRule(localContext, 56, RustLiteParser.RULE_vectorExpr);
        try {
            this.state = 399;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 43, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 396;
                        this.vectorInit();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 397;
                        this.vectorLen();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 398;
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
        this.enterRule(localContext, 58, RustLiteParser.RULE_printlnMacro);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 401;
                this.match(RustLiteParser.PRINTLN);
                this.state = 402;
                this.match(RustLiteParser.T__11);
                this.state = 403;
                this.match(RustLiteParser.T__0);
                this.state = 404;
                this.printlnArgs();
                this.state = 405;
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
        this.enterRule(localContext, 60, RustLiteParser.RULE_printlnArgs);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 407;
                this.match(RustLiteParser.STRING);
                this.state = 412;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 17) {
                    {
                        {
                            this.state = 408;
                            this.match(RustLiteParser.T__16);
                            this.state = 409;
                            this.expr();
                        }
                    }
                    this.state = 414;
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
RustLiteParser.RULE_vectorLen = 26;
RustLiteParser.RULE_vectorIndexAccess = 27;
RustLiteParser.RULE_vectorExpr = 28;
RustLiteParser.RULE_printlnMacro = 29;
RustLiteParser.RULE_printlnArgs = 30;
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
    "fnCall", "vectorType", "vectorInit", "vectorInitList", "vectorLen",
    "vectorIndexAccess", "vectorExpr", "printlnMacro", "printlnArgs",
];
RustLiteParser._serializedATN = [
    4, 1, 60, 416, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7,
    6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13,
    2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20,
    7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24, 7, 24, 2, 25, 7, 25, 2, 26, 7, 26,
    2, 27, 7, 27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 1, 0, 5, 0, 64, 8, 0, 10, 0, 12, 0,
    67, 9, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 81, 8,
    1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 3, 2, 94, 8, 2, 1, 3, 1, 3,
    1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 107, 8, 3, 1, 3, 1, 3, 1, 3, 1, 3,
    1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 5, 3, 119, 8, 3, 10, 3, 12, 3, 122, 9, 3, 1, 4, 1, 4, 1,
    4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 3, 4, 139, 8, 4, 1,
    4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 5, 4, 147, 8, 4, 10, 4, 12, 4, 150, 9, 4, 1, 5, 1, 5, 1, 6,
    1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 3, 6, 162, 8, 6, 1, 7, 1, 7, 1, 7, 1, 7, 1, 8, 5, 8,
    169, 8, 8, 10, 8, 12, 8, 172, 9, 8, 1, 8, 3, 8, 175, 8, 8, 1, 8, 5, 8, 178, 8, 8, 10, 8, 12,
    8, 181, 9, 8, 1, 8, 5, 8, 184, 8, 8, 10, 8, 12, 8, 187, 9, 8, 1, 8, 1, 8, 1, 8, 5, 8, 192,
    8, 8, 10, 8, 12, 8, 195, 9, 8, 1, 8, 3, 8, 198, 8, 8, 1, 8, 1, 8, 3, 8, 202, 8, 8, 1, 9, 1,
    9, 1, 9, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10,
    1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 3, 10,
    231, 8, 10, 1, 10, 1, 10, 1, 10, 3, 10, 236, 8, 10, 1, 10, 1, 10, 1, 10, 1, 10, 3, 10, 242,
    8, 10, 1, 10, 3, 10, 245, 8, 10, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11,
    5, 11, 255, 8, 11, 10, 11, 12, 11, 258, 9, 11, 1, 11, 1, 11, 3, 11, 262, 8, 11, 1, 11,
    1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 3, 11, 270, 8, 11, 3, 11, 272, 8, 11, 1, 12, 1, 12, 1,
    12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 3, 12, 283, 8, 12, 1, 13, 1, 13, 1, 14, 1,
    14, 1, 14, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 3, 15, 295, 8, 15, 1, 16, 1, 16, 1, 16, 5,
    16, 300, 8, 16, 10, 16, 12, 16, 303, 9, 16, 1, 16, 3, 16, 306, 8, 16, 1, 17, 1, 17, 3,
    17, 310, 8, 17, 1, 18, 1, 18, 1, 18, 1, 19, 1, 19, 3, 19, 317, 8, 19, 1, 19, 1, 19, 1, 20,
    1, 20, 1, 20, 1, 20, 3, 20, 325, 8, 20, 1, 20, 1, 20, 3, 20, 329, 8, 20, 1, 20, 3, 20, 332,
    8, 20, 1, 20, 1, 20, 1, 21, 1, 21, 1, 21, 5, 21, 339, 8, 21, 10, 21, 12, 21, 342, 9, 21,
    1, 21, 3, 21, 345, 8, 21, 1, 22, 1, 22, 1, 22, 3, 22, 350, 8, 22, 1, 22, 1, 22, 1, 23, 1,
    23, 1, 23, 1, 23, 1, 23, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 3, 24, 365, 8, 24, 1,
    24, 1, 24, 1, 24, 1, 24, 3, 24, 371, 8, 24, 1, 24, 3, 24, 374, 8, 24, 1, 25, 1, 25, 1, 25,
    5, 25, 379, 8, 25, 10, 25, 12, 25, 382, 9, 25, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26,
    3, 26, 390, 8, 26, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 28, 1, 28, 1, 28, 3, 28, 400, 8,
    28, 1, 29, 1, 29, 1, 29, 1, 29, 1, 29, 1, 29, 1, 30, 1, 30, 1, 30, 5, 30, 411, 8, 30, 10,
    30, 12, 30, 414, 9, 30, 1, 30, 0, 2, 6, 8, 31, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22,
    24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 0, 5, 1, 0,
    4, 6, 2, 0, 3, 3, 7, 7, 1, 0, 5, 6, 2, 0, 8, 11, 38, 39, 1, 0, 30, 31, 462, 0, 65, 1, 0, 0,
    0, 2, 80, 1, 0, 0, 0, 4, 93, 1, 0, 0, 0, 6, 106, 1, 0, 0, 0, 8, 138, 1, 0, 0, 0, 10, 151, 1,
    0, 0, 0, 12, 161, 1, 0, 0, 0, 14, 163, 1, 0, 0, 0, 16, 201, 1, 0, 0, 0, 18, 203, 1, 0, 0,
    0, 20, 244, 1, 0, 0, 0, 22, 271, 1, 0, 0, 0, 24, 282, 1, 0, 0, 0, 26, 284, 1, 0, 0, 0, 28,
    286, 1, 0, 0, 0, 30, 294, 1, 0, 0, 0, 32, 296, 1, 0, 0, 0, 34, 309, 1, 0, 0, 0, 36, 311,
    1, 0, 0, 0, 38, 314, 1, 0, 0, 0, 40, 320, 1, 0, 0, 0, 42, 335, 1, 0, 0, 0, 44, 346, 1, 0,
    0, 0, 46, 353, 1, 0, 0, 0, 48, 373, 1, 0, 0, 0, 50, 375, 1, 0, 0, 0, 52, 383, 1, 0, 0, 0,
    54, 391, 1, 0, 0, 0, 56, 399, 1, 0, 0, 0, 58, 401, 1, 0, 0, 0, 60, 407, 1, 0, 0, 0, 62, 64,
    3, 10, 5, 0, 63, 62, 1, 0, 0, 0, 64, 67, 1, 0, 0, 0, 65, 63, 1, 0, 0, 0, 65, 66, 1, 0, 0, 0,
    66, 68, 1, 0, 0, 0, 67, 65, 1, 0, 0, 0, 68, 69, 5, 0, 0, 1, 69, 1, 1, 0, 0, 0, 70, 81, 5, 45,
    0, 0, 71, 81, 5, 46, 0, 0, 72, 81, 5, 47, 0, 0, 73, 81, 5, 48, 0, 0, 74, 81, 5, 49, 0, 0,
    75, 81, 5, 50, 0, 0, 76, 81, 5, 51, 0, 0, 77, 81, 5, 52, 0, 0, 78, 81, 5, 53, 0, 0, 79, 81,
    3, 46, 23, 0, 80, 70, 1, 0, 0, 0, 80, 71, 1, 0, 0, 0, 80, 72, 1, 0, 0, 0, 80, 73, 1, 0, 0,
    0, 80, 74, 1, 0, 0, 0, 80, 75, 1, 0, 0, 0, 80, 76, 1, 0, 0, 0, 80, 77, 1, 0, 0, 0, 80, 78,
    1, 0, 0, 0, 80, 79, 1, 0, 0, 0, 81, 3, 1, 0, 0, 0, 82, 83, 5, 1, 0, 0, 83, 84, 3, 4, 2, 0, 84,
    85, 5, 2, 0, 0, 85, 94, 1, 0, 0, 0, 86, 94, 5, 57, 0, 0, 87, 94, 5, 43, 0, 0, 88, 94, 5, 44,
    0, 0, 89, 94, 3, 6, 3, 0, 90, 94, 3, 8, 4, 0, 91, 94, 3, 44, 22, 0, 92, 94, 3, 56, 28, 0,
    93, 82, 1, 0, 0, 0, 93, 86, 1, 0, 0, 0, 93, 87, 1, 0, 0, 0, 93, 88, 1, 0, 0, 0, 93, 89, 1,
    0, 0, 0, 93, 90, 1, 0, 0, 0, 93, 91, 1, 0, 0, 0, 93, 92, 1, 0, 0, 0, 94, 5, 1, 0, 0, 0, 95,
    96, 6, 3, -1, 0, 96, 107, 5, 43, 0, 0, 97, 107, 5, 57, 0, 0, 98, 99, 5, 1, 0, 0, 99, 100,
    3, 6, 3, 0, 100, 101, 5, 2, 0, 0, 101, 107, 1, 0, 0, 0, 102, 103, 5, 3, 0, 0, 103, 107,
    3, 6, 3, 5, 104, 105, 5, 44, 0, 0, 105, 107, 6, 3, -1, 0, 106, 95, 1, 0, 0, 0, 106, 97,
    1, 0, 0, 0, 106, 98, 1, 0, 0, 0, 106, 102, 1, 0, 0, 0, 106, 104, 1, 0, 0, 0, 107, 120, 1,
    0, 0, 0, 108, 109, 10, 4, 0, 0, 109, 110, 7, 0, 0, 0, 110, 119, 3, 6, 3, 5, 111, 112, 10,
    3, 0, 0, 112, 113, 7, 1, 0, 0, 113, 119, 3, 6, 3, 4, 114, 115, 10, 1, 0, 0, 115, 116, 7,
    2, 0, 0, 116, 117, 5, 43, 0, 0, 117, 119, 6, 3, -1, 0, 118, 108, 1, 0, 0, 0, 118, 111,
    1, 0, 0, 0, 118, 114, 1, 0, 0, 0, 119, 122, 1, 0, 0, 0, 120, 118, 1, 0, 0, 0, 120, 121,
    1, 0, 0, 0, 121, 7, 1, 0, 0, 0, 122, 120, 1, 0, 0, 0, 123, 124, 6, 4, -1, 0, 124, 139, 5,
    44, 0, 0, 125, 139, 5, 57, 0, 0, 126, 127, 5, 1, 0, 0, 127, 128, 3, 8, 4, 0, 128, 129,
    5, 2, 0, 0, 129, 139, 1, 0, 0, 0, 130, 131, 3, 6, 3, 0, 131, 132, 7, 3, 0, 0, 132, 133,
    3, 6, 3, 0, 133, 139, 1, 0, 0, 0, 134, 135, 5, 12, 0, 0, 135, 139, 3, 8, 4, 4, 136, 137,
    5, 43, 0, 0, 137, 139, 6, 4, -1, 0, 138, 123, 1, 0, 0, 0, 138, 125, 1, 0, 0, 0, 138, 126,
    1, 0, 0, 0, 138, 130, 1, 0, 0, 0, 138, 134, 1, 0, 0, 0, 138, 136, 1, 0, 0, 0, 139, 148,
    1, 0, 0, 0, 140, 141, 10, 3, 0, 0, 141, 142, 5, 13, 0, 0, 142, 147, 3, 8, 4, 4, 143, 144,
    10, 2, 0, 0, 144, 145, 5, 14, 0, 0, 145, 147, 3, 8, 4, 3, 146, 140, 1, 0, 0, 0, 146, 143,
    1, 0, 0, 0, 147, 150, 1, 0, 0, 0, 148, 146, 1, 0, 0, 0, 148, 149, 1, 0, 0, 0, 149, 9, 1,
    0, 0, 0, 150, 148, 1, 0, 0, 0, 151, 152, 3, 40, 20, 0, 152, 11, 1, 0, 0, 0, 153, 162, 3,
    18, 9, 0, 154, 162, 3, 20, 10, 0, 155, 162, 3, 22, 11, 0, 156, 162, 3, 24, 12, 0, 157,
    162, 3, 28, 14, 0, 158, 162, 3, 40, 20, 0, 159, 162, 3, 38, 19, 0, 160, 162, 3, 14, 7,
    0, 161, 153, 1, 0, 0, 0, 161, 154, 1, 0, 0, 0, 161, 155, 1, 0, 0, 0, 161, 156, 1, 0, 0,
    0, 161, 157, 1, 0, 0, 0, 161, 158, 1, 0, 0, 0, 161, 159, 1, 0, 0, 0, 161, 160, 1, 0, 0,
    0, 162, 13, 1, 0, 0, 0, 163, 164, 5, 15, 0, 0, 164, 165, 3, 16, 8, 0, 165, 166, 5, 16,
    0, 0, 166, 15, 1, 0, 0, 0, 167, 169, 3, 12, 6, 0, 168, 167, 1, 0, 0, 0, 169, 172, 1, 0,
    0, 0, 170, 168, 1, 0, 0, 0, 170, 171, 1, 0, 0, 0, 171, 174, 1, 0, 0, 0, 172, 170, 1, 0,
    0, 0, 173, 175, 3, 4, 2, 0, 174, 173, 1, 0, 0, 0, 174, 175, 1, 0, 0, 0, 175, 202, 1, 0,
    0, 0, 176, 178, 3, 12, 6, 0, 177, 176, 1, 0, 0, 0, 178, 181, 1, 0, 0, 0, 179, 177, 1, 0,
    0, 0, 179, 180, 1, 0, 0, 0, 180, 202, 1, 0, 0, 0, 181, 179, 1, 0, 0, 0, 182, 184, 3, 12,
    6, 0, 183, 182, 1, 0, 0, 0, 184, 187, 1, 0, 0, 0, 185, 183, 1, 0, 0, 0, 185, 186, 1, 0,
    0, 0, 186, 188, 1, 0, 0, 0, 187, 185, 1, 0, 0, 0, 188, 193, 3, 4, 2, 0, 189, 192, 3, 12,
    6, 0, 190, 192, 3, 4, 2, 0, 191, 189, 1, 0, 0, 0, 191, 190, 1, 0, 0, 0, 192, 195, 1, 0,
    0, 0, 193, 191, 1, 0, 0, 0, 193, 194, 1, 0, 0, 0, 194, 197, 1, 0, 0, 0, 195, 193, 1, 0,
    0, 0, 196, 198, 3, 4, 2, 0, 197, 196, 1, 0, 0, 0, 197, 198, 1, 0, 0, 0, 198, 199, 1, 0,
    0, 0, 199, 200, 6, 8, -1, 0, 200, 202, 1, 0, 0, 0, 201, 170, 1, 0, 0, 0, 201, 179, 1, 0,
    0, 0, 201, 185, 1, 0, 0, 0, 202, 17, 1, 0, 0, 0, 203, 204, 3, 4, 2, 0, 204, 205, 5, 42,
    0, 0, 205, 19, 1, 0, 0, 0, 206, 207, 5, 23, 0, 0, 207, 208, 5, 57, 0, 0, 208, 209, 5, 41,
    0, 0, 209, 210, 3, 2, 1, 0, 210, 211, 5, 40, 0, 0, 211, 212, 3, 4, 2, 0, 212, 213, 5, 42,
    0, 0, 213, 245, 1, 0, 0, 0, 214, 215, 5, 23, 0, 0, 215, 216, 5, 57, 0, 0, 216, 217, 5,
    41, 0, 0, 217, 218, 3, 2, 1, 0, 218, 219, 5, 42, 0, 0, 219, 245, 1, 0, 0, 0, 220, 221,
    5, 23, 0, 0, 221, 222, 5, 57, 0, 0, 222, 223, 5, 40, 0, 0, 223, 224, 3, 4, 2, 0, 224, 225,
    5, 42, 0, 0, 225, 245, 1, 0, 0, 0, 226, 227, 5, 23, 0, 0, 227, 228, 5, 57, 0, 0, 228, 230,
    6, 10, -1, 0, 229, 231, 5, 42, 0, 0, 230, 229, 1, 0, 0, 0, 230, 231, 1, 0, 0, 0, 231, 245,
    1, 0, 0, 0, 232, 235, 5, 23, 0, 0, 233, 234, 5, 41, 0, 0, 234, 236, 3, 2, 1, 0, 235, 233,
    1, 0, 0, 0, 235, 236, 1, 0, 0, 0, 236, 237, 1, 0, 0, 0, 237, 241, 6, 10, -1, 0, 238, 239,
    5, 40, 0, 0, 239, 240, 5, 41, 0, 0, 240, 242, 3, 4, 2, 0, 241, 238, 1, 0, 0, 0, 241, 242,
    1, 0, 0, 0, 242, 243, 1, 0, 0, 0, 243, 245, 5, 42, 0, 0, 244, 206, 1, 0, 0, 0, 244, 214,
    1, 0, 0, 0, 244, 220, 1, 0, 0, 0, 244, 226, 1, 0, 0, 0, 244, 232, 1, 0, 0, 0, 245, 21, 1,
    0, 0, 0, 246, 247, 5, 26, 0, 0, 247, 248, 3, 8, 4, 0, 248, 256, 3, 14, 7, 0, 249, 250,
    5, 27, 0, 0, 250, 251, 5, 26, 0, 0, 251, 252, 3, 8, 4, 0, 252, 253, 3, 14, 7, 0, 253, 255,
    1, 0, 0, 0, 254, 249, 1, 0, 0, 0, 255, 258, 1, 0, 0, 0, 256, 254, 1, 0, 0, 0, 256, 257,
    1, 0, 0, 0, 257, 261, 1, 0, 0, 0, 258, 256, 1, 0, 0, 0, 259, 260, 5, 27, 0, 0, 260, 262,
    3, 14, 7, 0, 261, 259, 1, 0, 0, 0, 261, 262, 1, 0, 0, 0, 262, 272, 1, 0, 0, 0, 263, 264,
    5, 26, 0, 0, 264, 265, 3, 4, 2, 0, 265, 266, 6, 11, -1, 0, 266, 269, 3, 14, 7, 0, 267,
    268, 5, 27, 0, 0, 268, 270, 3, 14, 7, 0, 269, 267, 1, 0, 0, 0, 269, 270, 1, 0, 0, 0, 270,
    272, 1, 0, 0, 0, 271, 246, 1, 0, 0, 0, 271, 263, 1, 0, 0, 0, 272, 23, 1, 0, 0, 0, 273, 274,
    5, 28, 0, 0, 274, 275, 3, 8, 4, 0, 275, 276, 3, 14, 7, 0, 276, 283, 1, 0, 0, 0, 277, 278,
    5, 28, 0, 0, 278, 279, 3, 4, 2, 0, 279, 280, 6, 12, -1, 0, 280, 281, 3, 14, 7, 0, 281,
    283, 1, 0, 0, 0, 282, 273, 1, 0, 0, 0, 282, 277, 1, 0, 0, 0, 283, 25, 1, 0, 0, 0, 284, 285,
    7, 4, 0, 0, 285, 27, 1, 0, 0, 0, 286, 287, 3, 26, 13, 0, 287, 288, 5, 42, 0, 0, 288, 29,
    1, 0, 0, 0, 289, 290, 5, 57, 0, 0, 290, 291, 5, 41, 0, 0, 291, 295, 3, 2, 1, 0, 292, 293,
    5, 57, 0, 0, 293, 295, 6, 15, -1, 0, 294, 289, 1, 0, 0, 0, 294, 292, 1, 0, 0, 0, 295, 31,
    1, 0, 0, 0, 296, 301, 3, 30, 15, 0, 297, 298, 5, 17, 0, 0, 298, 300, 3, 30, 15, 0, 299,
    297, 1, 0, 0, 0, 300, 303, 1, 0, 0, 0, 301, 299, 1, 0, 0, 0, 301, 302, 1, 0, 0, 0, 302,
    305, 1, 0, 0, 0, 303, 301, 1, 0, 0, 0, 304, 306, 5, 17, 0, 0, 305, 304, 1, 0, 0, 0, 305,
    306, 1, 0, 0, 0, 306, 33, 1, 0, 0, 0, 307, 310, 3, 2, 1, 0, 308, 310, 5, 18, 0, 0, 309,
    307, 1, 0, 0, 0, 309, 308, 1, 0, 0, 0, 310, 35, 1, 0, 0, 0, 311, 312, 5, 19, 0, 0, 312,
    313, 3, 34, 17, 0, 313, 37, 1, 0, 0, 0, 314, 316, 5, 29, 0, 0, 315, 317, 3, 4, 2, 0, 316,
    315, 1, 0, 0, 0, 316, 317, 1, 0, 0, 0, 317, 318, 1, 0, 0, 0, 318, 319, 5, 42, 0, 0, 319,
    39, 1, 0, 0, 0, 320, 321, 5, 25, 0, 0, 321, 328, 5, 57, 0, 0, 322, 324, 5, 1, 0, 0, 323,
    325, 3, 32, 16, 0, 324, 323, 1, 0, 0, 0, 324, 325, 1, 0, 0, 0, 325, 326, 1, 0, 0, 0, 326,
    329, 5, 2, 0, 0, 327, 329, 5, 18, 0, 0, 328, 322, 1, 0, 0, 0, 328, 327, 1, 0, 0, 0, 329,
    331, 1, 0, 0, 0, 330, 332, 3, 36, 18, 0, 331, 330, 1, 0, 0, 0, 331, 332, 1, 0, 0, 0, 332,
    333, 1, 0, 0, 0, 333, 334, 3, 14, 7, 0, 334, 41, 1, 0, 0, 0, 335, 340, 3, 4, 2, 0, 336,
    337, 5, 17, 0, 0, 337, 339, 3, 4, 2, 0, 338, 336, 1, 0, 0, 0, 339, 342, 1, 0, 0, 0, 340,
    338, 1, 0, 0, 0, 340, 341, 1, 0, 0, 0, 341, 344, 1, 0, 0, 0, 342, 340, 1, 0, 0, 0, 343,
    345, 5, 17, 0, 0, 344, 343, 1, 0, 0, 0, 344, 345, 1, 0, 0, 0, 345, 43, 1, 0, 0, 0, 346,
    347, 5, 57, 0, 0, 347, 349, 5, 1, 0, 0, 348, 350, 3, 42, 21, 0, 349, 348, 1, 0, 0, 0, 349,
    350, 1, 0, 0, 0, 350, 351, 1, 0, 0, 0, 351, 352, 5, 2, 0, 0, 352, 45, 1, 0, 0, 0, 353, 354,
    5, 56, 0, 0, 354, 355, 5, 38, 0, 0, 355, 356, 3, 2, 1, 0, 356, 357, 5, 39, 0, 0, 357, 47,
    1, 0, 0, 0, 358, 359, 5, 56, 0, 0, 359, 360, 5, 55, 0, 0, 360, 364, 5, 33, 0, 0, 361, 365,
    5, 18, 0, 0, 362, 363, 5, 1, 0, 0, 363, 365, 5, 2, 0, 0, 364, 361, 1, 0, 0, 0, 364, 362,
    1, 0, 0, 0, 365, 374, 1, 0, 0, 0, 366, 367, 5, 32, 0, 0, 367, 368, 5, 12, 0, 0, 368, 370,
    5, 20, 0, 0, 369, 371, 3, 50, 25, 0, 370, 369, 1, 0, 0, 0, 370, 371, 1, 0, 0, 0, 371, 372,
    1, 0, 0, 0, 372, 374, 5, 21, 0, 0, 373, 358, 1, 0, 0, 0, 373, 366, 1, 0, 0, 0, 374, 49,
    1, 0, 0, 0, 375, 380, 3, 4, 2, 0, 376, 377, 5, 17, 0, 0, 377, 379, 3, 4, 2, 0, 378, 376,
    1, 0, 0, 0, 379, 382, 1, 0, 0, 0, 380, 378, 1, 0, 0, 0, 380, 381, 1, 0, 0, 0, 381, 51, 1,
    0, 0, 0, 382, 380, 1, 0, 0, 0, 383, 384, 5, 57, 0, 0, 384, 385, 5, 22, 0, 0, 385, 389,
    5, 36, 0, 0, 386, 390, 5, 18, 0, 0, 387, 388, 5, 1, 0, 0, 388, 390, 5, 2, 0, 0, 389, 386,
    1, 0, 0, 0, 389, 387, 1, 0, 0, 0, 390, 53, 1, 0, 0, 0, 391, 392, 5, 57, 0, 0, 392, 393,
    5, 20, 0, 0, 393, 394, 3, 6, 3, 0, 394, 395, 5, 21, 0, 0, 395, 55, 1, 0, 0, 0, 396, 400,
    3, 48, 24, 0, 397, 400, 3, 52, 26, 0, 398, 400, 3, 54, 27, 0, 399, 396, 1, 0, 0, 0, 399,
    397, 1, 0, 0, 0, 399, 398, 1, 0, 0, 0, 400, 57, 1, 0, 0, 0, 401, 402, 5, 37, 0, 0, 402,
    403, 5, 12, 0, 0, 403, 404, 5, 1, 0, 0, 404, 405, 3, 60, 30, 0, 405, 406, 5, 2, 0, 0, 406,
    59, 1, 0, 0, 0, 407, 412, 5, 54, 0, 0, 408, 409, 5, 17, 0, 0, 409, 411, 3, 4, 2, 0, 410,
    408, 1, 0, 0, 0, 411, 414, 1, 0, 0, 0, 412, 410, 1, 0, 0, 0, 412, 413, 1, 0, 0, 0, 413,
    61, 1, 0, 0, 0, 414, 412, 1, 0, 0, 0, 45, 65, 80, 93, 106, 118, 120, 138, 146, 148, 161,
    170, 174, 179, 185, 191, 193, 197, 201, 230, 235, 241, 244, 256, 261, 269, 271,
    282, 294, 301, 305, 309, 316, 324, 328, 331, 340, 344, 349, 364, 370, 373, 380,
    389, 399, 412
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
