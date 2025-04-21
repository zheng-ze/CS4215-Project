// Generated from src/RustLite.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { RustLiteListener } from "./RustLiteListener.js";
import { RustLiteVisitor } from "./RustLiteVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class RustLiteParser extends antlr.Parser {
    public static readonly T__0 = 1;
    public static readonly T__1 = 2;
    public static readonly T__2 = 3;
    public static readonly T__3 = 4;
    public static readonly T__4 = 5;
    public static readonly T__5 = 6;
    public static readonly T__6 = 7;
    public static readonly T__7 = 8;
    public static readonly T__8 = 9;
    public static readonly T__9 = 10;
    public static readonly T__10 = 11;
    public static readonly T__11 = 12;
    public static readonly T__12 = 13;
    public static readonly T__13 = 14;
    public static readonly T__14 = 15;
    public static readonly T__15 = 16;
    public static readonly T__16 = 17;
    public static readonly T__17 = 18;
    public static readonly T__18 = 19;
    public static readonly T__19 = 20;
    public static readonly T__20 = 21;
    public static readonly T__21 = 22;
    public static readonly LET = 23;
    public static readonly MUT = 24;
    public static readonly FN = 25;
    public static readonly IF = 26;
    public static readonly ELSE = 27;
    public static readonly WHILE = 28;
    public static readonly RETURN = 29;
    public static readonly BREAK = 30;
    public static readonly CONTINUE = 31;
    public static readonly VEC = 32;
    public static readonly NEW = 33;
    public static readonly PUSH = 34;
    public static readonly POP = 35;
    public static readonly LEN = 36;
    public static readonly PRINTLN = 37;
    public static readonly LANGLE = 38;
    public static readonly RANGLE = 39;
    public static readonly EQUALS = 40;
    public static readonly COLON = 41;
    public static readonly SEMICOLON = 42;
    public static readonly INT = 43;
    public static readonly BOOL = 44;
    public static readonly U32_TYPE = 45;
    public static readonly I32_TYPE = 46;
    public static readonly BOOL_TYPE = 47;
    public static readonly STRING = 48;
    public static readonly METHOD_ACCESSOR = 49;
    public static readonly VECTOR_MODULE_NAME = 50;
    public static readonly IDENTIFIER = 51;
    public static readonly ERROR_CHAR = 52;
    public static readonly WS = 53;
    public static readonly COMMENT = 54;
    public static readonly RULE_prog = 0;
    public static readonly RULE_type = 1;
    public static readonly RULE_expr = 2;
    public static readonly RULE_arithExpr = 3;
    public static readonly RULE_logicExpr = 4;
    public static readonly RULE_globalElement = 5;
    public static readonly RULE_stmt = 6;
    public static readonly RULE_block = 7;
    public static readonly RULE_blockContent = 8;
    public static readonly RULE_exprStmt = 9;
    public static readonly RULE_declareStmt = 10;
    public static readonly RULE_condStmt = 11;
    public static readonly RULE_whileStmt = 12;
    public static readonly RULE_loopControl = 13;
    public static readonly RULE_loopControlStmt = 14;
    public static readonly RULE_param = 15;
    public static readonly RULE_paramList = 16;
    public static readonly RULE_returnType = 17;
    public static readonly RULE_returnStmt = 18;
    public static readonly RULE_fnDeclareStmt = 19;
    public static readonly RULE_argList = 20;
    public static readonly RULE_fnCall = 21;
    public static readonly RULE_vectorType = 22;
    public static readonly RULE_vectorInit = 23;
    public static readonly RULE_vectorInitList = 24;
    public static readonly RULE_vectorLen = 25;
    public static readonly RULE_vectorIndexAccess = 26;
    public static readonly RULE_vectorExpr = 27;
    public static readonly RULE_printlnMacro = 28;
    public static readonly RULE_printlnArgs = 29;

    public static readonly literalNames = [
        null, "'('", "')'", "'-'", "'*'", "'/'", "'%'", "'+'", "'=='", "'!='", 
        "'<='", "'>='", "'!'", "'&&'", "'||'", "'{'", "'}'", "','", "'->'", 
        "'()'", "'['", "']'", "'.'", "'let'", "'mut'", "'fn'", "'if'", "'else'", 
        "'while'", "'return'", "'break'", "'continue'", "'vec'", "'new'", 
        "'push'", "'pop'", "'len'", "'println'", "'<'", "'>'", "'='", "':'", 
        "';'", null, null, "'u32'", "'i32'", "'bool'", null, "'::'", "'Vec'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, "LET", "MUT", "FN", "IF", "ELSE", "WHILE", "RETURN", "BREAK", 
        "CONTINUE", "VEC", "NEW", "PUSH", "POP", "LEN", "PRINTLN", "LANGLE", 
        "RANGLE", "EQUALS", "COLON", "SEMICOLON", "INT", "BOOL", "U32_TYPE", 
        "I32_TYPE", "BOOL_TYPE", "STRING", "METHOD_ACCESSOR", "VECTOR_MODULE_NAME", 
        "IDENTIFIER", "ERROR_CHAR", "WS", "COMMENT"
    ];
    public static readonly ruleNames = [
        "prog", "type", "expr", "arithExpr", "logicExpr", "globalElement", 
        "stmt", "block", "blockContent", "exprStmt", "declareStmt", "condStmt", 
        "whileStmt", "loopControl", "loopControlStmt", "param", "paramList", 
        "returnType", "returnStmt", "fnDeclareStmt", "argList", "fnCall", 
        "vectorType", "vectorInit", "vectorInitList", "vectorLen", "vectorIndexAccess", 
        "vectorExpr", "printlnMacro", "printlnArgs",
    ];

    public get grammarFileName(): string { return "RustLite.g4"; }
    public get literalNames(): (string | null)[] { return RustLiteParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return RustLiteParser.symbolicNames; }
    public get ruleNames(): string[] { return RustLiteParser.ruleNames; }
    public get serializedATN(): number[] { return RustLiteParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, RustLiteParser._ATN, RustLiteParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public prog(): ProgContext {
        let localContext = new ProgContext(this.context, this.state);
        this.enterRule(localContext, 0, RustLiteParser.RULE_prog);
        let _la: number;
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public type_(): TypeContext {
        let localContext = new TypeContext(this.context, this.state);
        this.enterRule(localContext, 2, RustLiteParser.RULE_type);
        try {
            this.state = 72;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustLiteParser.U32_TYPE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 68;
                this.match(RustLiteParser.U32_TYPE);
                }
                break;
            case RustLiteParser.I32_TYPE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 69;
                this.match(RustLiteParser.I32_TYPE);
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expr(): ExprContext {
        let localContext = new ExprContext(this.context, this.state);
        this.enterRule(localContext, 4, RustLiteParser.RULE_expr);
        try {
            this.state = 85;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 2, this.context) ) {
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public arithExpr(): ArithExprContext;
    public arithExpr(_p: number): ArithExprContext;
    public arithExpr(_p?: number): ArithExprContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ArithExprContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 6;
        this.enterRecursionRule(localContext, 6, RustLiteParser.RULE_arithExpr, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 99;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 3, this.context) ) {
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
            this.context!.stop = this.tokenStream.LT(-1);
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
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 4, this.context) ) {
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
                        if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 112) !== 0))) {
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
                        if(!(_la === 3 || _la === 7)) {
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
                        if(!(_la === 5 || _la === 6)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 109;
                        this.match(RustLiteParser.INT);

                                              if ((localContext._right != null ? this.tokenStream.getTextFromRange(localContext._right.start, localContext._right.stop) : '') === "0") this.notifyErrorListeners("Division by zero", null, null);
                                          
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
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }

    public logicExpr(): LogicExprContext;
    public logicExpr(_p: number): LogicExprContext;
    public logicExpr(_p?: number): LogicExprContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new LogicExprContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 8;
        this.enterRecursionRule(localContext, 8, RustLiteParser.RULE_logicExpr, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 132;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 6, this.context) ) {
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
                if(!(((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & 3221225487) !== 0))) {
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
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 145;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 8, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 143;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 7, this.context) ) {
                    case 1:
                        {
                        localContext = new LogicExprContext(parentContext, parentState);
                        localContext._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, RustLiteParser.RULE_logicExpr);
                        this.state = 134;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 135;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & 3221225487) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 136;
                        localContext._right = this.logicExpr(6);
                        }
                        break;
                    case 2:
                        {
                        localContext = new LogicExprContext(parentContext, parentState);
                        localContext._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, RustLiteParser.RULE_logicExpr);
                        this.state = 137;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 138;
                        localContext._op = this.match(RustLiteParser.T__12);
                        this.state = 139;
                        localContext._right = this.logicExpr(4);
                        }
                        break;
                    case 3:
                        {
                        localContext = new LogicExprContext(parentContext, parentState);
                        localContext._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, RustLiteParser.RULE_logicExpr);
                        this.state = 140;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 141;
                        localContext._op = this.match(RustLiteParser.T__13);
                        this.state = 142;
                        localContext._right = this.logicExpr(3);
                        }
                        break;
                    }
                    }
                }
                this.state = 147;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 8, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public globalElement(): GlobalElementContext {
        let localContext = new GlobalElementContext(this.context, this.state);
        this.enterRule(localContext, 10, RustLiteParser.RULE_globalElement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 148;
            this.fnDeclareStmt();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public stmt(): StmtContext {
        let localContext = new StmtContext(this.context, this.state);
        this.enterRule(localContext, 12, RustLiteParser.RULE_stmt);
        try {
            this.state = 159;
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
                this.state = 150;
                this.exprStmt();
                }
                break;
            case RustLiteParser.LET:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 151;
                this.declareStmt();
                }
                break;
            case RustLiteParser.IF:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 152;
                this.condStmt();
                }
                break;
            case RustLiteParser.WHILE:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 153;
                this.whileStmt();
                }
                break;
            case RustLiteParser.BREAK:
            case RustLiteParser.CONTINUE:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 154;
                this.loopControlStmt();
                }
                break;
            case RustLiteParser.FN:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 155;
                this.fnDeclareStmt();
                }
                break;
            case RustLiteParser.RETURN:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 156;
                this.returnStmt();
                }
                break;
            case RustLiteParser.T__14:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 157;
                this.block();
                }
                break;
            case RustLiteParser.PRINTLN:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 158;
                this.printlnMacro();
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public block(): BlockContext {
        let localContext = new BlockContext(this.context, this.state);
        this.enterRule(localContext, 14, RustLiteParser.RULE_block);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 161;
            this.match(RustLiteParser.T__14);
            this.state = 162;
            this.blockContent();
            this.state = 163;
            this.match(RustLiteParser.T__15);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public blockContent(): BlockContentContext {
        let localContext = new BlockContentContext(this.context, this.state);
        this.enterRule(localContext, 16, RustLiteParser.RULE_blockContent);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 168;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 10, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 165;
                    this.stmt();
                    }
                    }
                }
                this.state = 170;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 10, this.context);
            }
            this.state = 172;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4106) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 792577) !== 0)) {
                {
                this.state = 171;
                localContext._finalExpr = this.expr();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public exprStmt(): ExprStmtContext {
        let localContext = new ExprStmtContext(this.context, this.state);
        this.enterRule(localContext, 18, RustLiteParser.RULE_exprStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 174;
            this.expr();
            this.state = 175;
            this.match(RustLiteParser.SEMICOLON);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public declareStmt(): DeclareStmtContext {
        let localContext = new DeclareStmtContext(this.context, this.state);
        this.enterRule(localContext, 20, RustLiteParser.RULE_declareStmt);
        let _la: number;
        try {
            this.state = 209;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 15, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 177;
                this.match(RustLiteParser.LET);
                this.state = 178;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 179;
                this.match(RustLiteParser.COLON);
                this.state = 180;
                this.type_();
                this.state = 181;
                this.match(RustLiteParser.EQUALS);
                this.state = 182;
                this.expr();
                this.state = 183;
                this.match(RustLiteParser.SEMICOLON);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 185;
                this.match(RustLiteParser.LET);
                this.state = 186;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 187;
                this.match(RustLiteParser.EQUALS);
                this.state = 188;
                this.expr();
                this.state = 189;
                this.match(RustLiteParser.SEMICOLON);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 191;
                this.match(RustLiteParser.LET);
                this.state = 192;
                this.match(RustLiteParser.IDENTIFIER);

                                this.notifyErrorListeners("Type annotations needed", null, null);
                            
                this.state = 195;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 42) {
                    {
                    this.state = 194;
                    this.match(RustLiteParser.SEMICOLON);
                    }
                }

                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 197;
                this.match(RustLiteParser.LET);
                this.state = 200;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 41) {
                    {
                    this.state = 198;
                    this.match(RustLiteParser.COLON);
                    this.state = 199;
                    this.type_();
                    }
                }

                this.notifyErrorListeners("Expected identifier", null, null);
                this.state = 206;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 40) {
                    {
                    this.state = 203;
                    this.match(RustLiteParser.EQUALS);
                    this.state = 204;
                    this.match(RustLiteParser.COLON);
                    this.state = 205;
                    this.expr();
                    }
                }

                this.state = 208;
                this.match(RustLiteParser.SEMICOLON);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public condStmt(): CondStmtContext {
        let localContext = new CondStmtContext(this.context, this.state);
        this.enterRule(localContext, 22, RustLiteParser.RULE_condStmt);
        let _la: number;
        try {
            let alternative: number;
            this.state = 236;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 19, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 211;
                this.match(RustLiteParser.IF);
                this.state = 212;
                this.logicExpr(0);
                this.state = 213;
                this.block();
                this.state = 221;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 16, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 214;
                        this.match(RustLiteParser.ELSE);
                        this.state = 215;
                        this.match(RustLiteParser.IF);
                        this.state = 216;
                        this.logicExpr(0);
                        this.state = 217;
                        this.block();
                        }
                        }
                    }
                    this.state = 223;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 16, this.context);
                }
                this.state = 226;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 27) {
                    {
                    this.state = 224;
                    this.match(RustLiteParser.ELSE);
                    this.state = 225;
                    this.block();
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 228;
                this.match(RustLiteParser.IF);
                this.state = 229;
                this.expr();

                                this.notifyErrorListeners("Condition must be a boolean expression", null, null);
                            
                this.state = 231;
                this.block();
                this.state = 234;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 27) {
                    {
                    this.state = 232;
                    this.match(RustLiteParser.ELSE);
                    this.state = 233;
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public whileStmt(): WhileStmtContext {
        let localContext = new WhileStmtContext(this.context, this.state);
        this.enterRule(localContext, 24, RustLiteParser.RULE_whileStmt);
        try {
            this.state = 247;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 20, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 238;
                this.match(RustLiteParser.WHILE);
                this.state = 239;
                this.logicExpr(0);
                this.state = 240;
                this.block();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 242;
                this.match(RustLiteParser.WHILE);
                this.state = 243;
                this.expr();

                                this.notifyErrorListeners("Condition must be a boolean expression", null, null);
                            
                this.state = 245;
                this.block();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public loopControl(): LoopControlContext {
        let localContext = new LoopControlContext(this.context, this.state);
        this.enterRule(localContext, 26, RustLiteParser.RULE_loopControl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 249;
            _la = this.tokenStream.LA(1);
            if(!(_la === 30 || _la === 31)) {
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public loopControlStmt(): LoopControlStmtContext {
        let localContext = new LoopControlStmtContext(this.context, this.state);
        this.enterRule(localContext, 28, RustLiteParser.RULE_loopControlStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 251;
            this.loopControl();
            this.state = 252;
            this.match(RustLiteParser.SEMICOLON);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public param(): ParamContext {
        let localContext = new ParamContext(this.context, this.state);
        this.enterRule(localContext, 30, RustLiteParser.RULE_param);
        try {
            this.state = 259;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 21, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 254;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 255;
                this.match(RustLiteParser.COLON);
                this.state = 256;
                this.type_();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 257;
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public paramList(): ParamListContext {
        let localContext = new ParamListContext(this.context, this.state);
        this.enterRule(localContext, 32, RustLiteParser.RULE_paramList);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 261;
            this.param();
            this.state = 266;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 22, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 262;
                    this.match(RustLiteParser.T__16);
                    this.state = 263;
                    this.param();
                    }
                    }
                }
                this.state = 268;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 22, this.context);
            }
            this.state = 270;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 17) {
                {
                this.state = 269;
                this.match(RustLiteParser.T__16);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public returnType(): ReturnTypeContext {
        let localContext = new ReturnTypeContext(this.context, this.state);
        this.enterRule(localContext, 34, RustLiteParser.RULE_returnType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 272;
            this.match(RustLiteParser.T__17);
            this.state = 275;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustLiteParser.U32_TYPE:
            case RustLiteParser.I32_TYPE:
            case RustLiteParser.BOOL_TYPE:
            case RustLiteParser.VECTOR_MODULE_NAME:
                {
                this.state = 273;
                this.type_();
                }
                break;
            case RustLiteParser.T__18:
                {
                this.state = 274;
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public returnStmt(): ReturnStmtContext {
        let localContext = new ReturnStmtContext(this.context, this.state);
        this.enterRule(localContext, 36, RustLiteParser.RULE_returnStmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 277;
            this.match(RustLiteParser.RETURN);
            this.state = 279;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4106) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 792577) !== 0)) {
                {
                this.state = 278;
                this.expr();
                }
            }

            this.state = 281;
            this.match(RustLiteParser.SEMICOLON);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fnDeclareStmt(): FnDeclareStmtContext {
        let localContext = new FnDeclareStmtContext(this.context, this.state);
        this.enterRule(localContext, 38, RustLiteParser.RULE_fnDeclareStmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 283;
            this.match(RustLiteParser.FN);
            this.state = 284;
            this.match(RustLiteParser.IDENTIFIER);
            this.state = 291;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustLiteParser.T__0:
                {
                this.state = 285;
                this.match(RustLiteParser.T__0);
                this.state = 287;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 51) {
                    {
                    this.state = 286;
                    this.paramList();
                    }
                }

                this.state = 289;
                this.match(RustLiteParser.T__1);
                }
                break;
            case RustLiteParser.T__18:
                {
                this.state = 290;
                this.match(RustLiteParser.T__18);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 294;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 18) {
                {
                this.state = 293;
                this.returnType();
                }
            }

            this.state = 296;
            this.block();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public argList(): ArgListContext {
        let localContext = new ArgListContext(this.context, this.state);
        this.enterRule(localContext, 40, RustLiteParser.RULE_argList);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 298;
            this.expr();
            this.state = 303;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 29, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 299;
                    this.match(RustLiteParser.T__16);
                    this.state = 300;
                    this.expr();
                    }
                    }
                }
                this.state = 305;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 29, this.context);
            }
            this.state = 307;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 17) {
                {
                this.state = 306;
                this.match(RustLiteParser.T__16);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fnCall(): FnCallContext {
        let localContext = new FnCallContext(this.context, this.state);
        this.enterRule(localContext, 42, RustLiteParser.RULE_fnCall);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 309;
            this.match(RustLiteParser.IDENTIFIER);
            this.state = 316;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustLiteParser.T__0:
                {
                this.state = 310;
                this.match(RustLiteParser.T__0);
                this.state = 312;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4106) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 792577) !== 0)) {
                    {
                    this.state = 311;
                    this.argList();
                    }
                }

                this.state = 314;
                this.match(RustLiteParser.T__1);
                }
                break;
            case RustLiteParser.T__18:
                {
                this.state = 315;
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public vectorType(): VectorTypeContext {
        let localContext = new VectorTypeContext(this.context, this.state);
        this.enterRule(localContext, 44, RustLiteParser.RULE_vectorType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 318;
            this.match(RustLiteParser.VECTOR_MODULE_NAME);
            this.state = 319;
            this.match(RustLiteParser.LANGLE);
            this.state = 320;
            this.type_();
            this.state = 321;
            this.match(RustLiteParser.RANGLE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public vectorInit(): VectorInitContext {
        let localContext = new VectorInitContext(this.context, this.state);
        this.enterRule(localContext, 46, RustLiteParser.RULE_vectorInit);
        let _la: number;
        try {
            this.state = 338;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustLiteParser.VECTOR_MODULE_NAME:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 323;
                this.match(RustLiteParser.VECTOR_MODULE_NAME);
                this.state = 324;
                this.match(RustLiteParser.METHOD_ACCESSOR);
                this.state = 325;
                this.match(RustLiteParser.NEW);
                this.state = 329;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case RustLiteParser.T__18:
                    {
                    this.state = 326;
                    this.match(RustLiteParser.T__18);
                    }
                    break;
                case RustLiteParser.T__0:
                    {
                    this.state = 327;
                    this.match(RustLiteParser.T__0);
                    this.state = 328;
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
                this.state = 331;
                this.match(RustLiteParser.VEC);
                this.state = 332;
                this.match(RustLiteParser.T__11);
                this.state = 333;
                this.match(RustLiteParser.T__19);
                this.state = 335;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4106) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 792577) !== 0)) {
                    {
                    this.state = 334;
                    this.vectorInitList();
                    }
                }

                this.state = 337;
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public vectorInitList(): VectorInitListContext {
        let localContext = new VectorInitListContext(this.context, this.state);
        this.enterRule(localContext, 48, RustLiteParser.RULE_vectorInitList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 340;
            this.expr();
            this.state = 345;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 17) {
                {
                {
                this.state = 341;
                this.match(RustLiteParser.T__16);
                this.state = 342;
                this.expr();
                }
                }
                this.state = 347;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public vectorLen(): VectorLenContext {
        let localContext = new VectorLenContext(this.context, this.state);
        this.enterRule(localContext, 50, RustLiteParser.RULE_vectorLen);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 348;
            this.match(RustLiteParser.IDENTIFIER);
            this.state = 349;
            this.match(RustLiteParser.T__21);
            this.state = 350;
            this.match(RustLiteParser.LEN);
            this.state = 354;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustLiteParser.T__18:
                {
                this.state = 351;
                this.match(RustLiteParser.T__18);
                }
                break;
            case RustLiteParser.T__0:
                {
                this.state = 352;
                this.match(RustLiteParser.T__0);
                this.state = 353;
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public vectorIndexAccess(): VectorIndexAccessContext {
        let localContext = new VectorIndexAccessContext(this.context, this.state);
        this.enterRule(localContext, 52, RustLiteParser.RULE_vectorIndexAccess);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 356;
            this.match(RustLiteParser.IDENTIFIER);
            this.state = 357;
            this.match(RustLiteParser.T__19);
            this.state = 358;
            this.arithExpr(0);
            this.state = 359;
            this.match(RustLiteParser.T__20);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public vectorExpr(): VectorExprContext {
        let localContext = new VectorExprContext(this.context, this.state);
        this.enterRule(localContext, 54, RustLiteParser.RULE_vectorExpr);
        try {
            this.state = 364;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 38, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 361;
                this.vectorInit();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 362;
                this.vectorLen();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 363;
                this.vectorIndexAccess();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public printlnMacro(): PrintlnMacroContext {
        let localContext = new PrintlnMacroContext(this.context, this.state);
        this.enterRule(localContext, 56, RustLiteParser.RULE_printlnMacro);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 366;
            this.match(RustLiteParser.PRINTLN);
            this.state = 367;
            this.match(RustLiteParser.T__11);
            this.state = 368;
            this.match(RustLiteParser.T__0);
            this.state = 370;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 48) {
                {
                this.state = 369;
                this.printlnArgs();
                }
            }

            this.state = 372;
            this.match(RustLiteParser.T__1);
            this.state = 373;
            this.match(RustLiteParser.SEMICOLON);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public printlnArgs(): PrintlnArgsContext {
        let localContext = new PrintlnArgsContext(this.context, this.state);
        this.enterRule(localContext, 58, RustLiteParser.RULE_printlnArgs);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 375;
            this.match(RustLiteParser.STRING);
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 3:
            return this.arithExpr_sempred(localContext as ArithExprContext, predIndex);
        case 4:
            return this.logicExpr_sempred(localContext as LogicExprContext, predIndex);
        }
        return true;
    }
    private arithExpr_sempred(localContext: ArithExprContext | null, predIndex: number): boolean {
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
    private logicExpr_sempred(localContext: LogicExprContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 3:
            return this.precpred(this.context, 5);
        case 4:
            return this.precpred(this.context, 3);
        case 5:
            return this.precpred(this.context, 2);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,54,384,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,
        2,27,7,27,2,28,7,28,2,29,7,29,1,0,5,0,62,8,0,10,0,12,0,65,9,0,1,
        0,1,0,1,1,1,1,1,1,1,1,3,1,73,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
        1,2,1,2,1,2,3,2,86,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
        3,1,3,3,3,100,8,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,112,
        8,3,10,3,12,3,115,9,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,
        4,1,4,1,4,1,4,1,4,1,4,3,4,133,8,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,
        4,1,4,5,4,144,8,4,10,4,12,4,147,9,4,1,5,1,5,1,6,1,6,1,6,1,6,1,6,
        1,6,1,6,1,6,1,6,3,6,160,8,6,1,7,1,7,1,7,1,7,1,8,5,8,167,8,8,10,8,
        12,8,170,9,8,1,8,3,8,173,8,8,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,
        1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
        3,10,196,8,10,1,10,1,10,1,10,3,10,201,8,10,1,10,1,10,1,10,1,10,3,
        10,207,8,10,1,10,3,10,210,8,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,
        1,11,5,11,220,8,11,10,11,12,11,223,9,11,1,11,1,11,3,11,227,8,11,
        1,11,1,11,1,11,1,11,1,11,1,11,3,11,235,8,11,3,11,237,8,11,1,12,1,
        12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,248,8,12,1,13,1,13,1,
        14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,3,15,260,8,15,1,16,1,16,1,
        16,5,16,265,8,16,10,16,12,16,268,9,16,1,16,3,16,271,8,16,1,17,1,
        17,1,17,3,17,276,8,17,1,18,1,18,3,18,280,8,18,1,18,1,18,1,19,1,19,
        1,19,1,19,3,19,288,8,19,1,19,1,19,3,19,292,8,19,1,19,3,19,295,8,
        19,1,19,1,19,1,20,1,20,1,20,5,20,302,8,20,10,20,12,20,305,9,20,1,
        20,3,20,308,8,20,1,21,1,21,1,21,3,21,313,8,21,1,21,1,21,3,21,317,
        8,21,1,22,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,1,23,3,23,
        330,8,23,1,23,1,23,1,23,1,23,3,23,336,8,23,1,23,3,23,339,8,23,1,
        24,1,24,1,24,5,24,344,8,24,10,24,12,24,347,9,24,1,25,1,25,1,25,1,
        25,1,25,1,25,3,25,355,8,25,1,26,1,26,1,26,1,26,1,26,1,27,1,27,1,
        27,3,27,365,8,27,1,28,1,28,1,28,1,28,3,28,371,8,28,1,28,1,28,1,28,
        1,29,1,29,1,29,5,29,379,8,29,10,29,12,29,382,9,29,1,29,0,2,6,8,30,
        0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,
        46,48,50,52,54,56,58,0,5,1,0,4,6,2,0,3,3,7,7,1,0,5,6,2,0,8,11,38,
        39,1,0,30,31,423,0,63,1,0,0,0,2,72,1,0,0,0,4,85,1,0,0,0,6,99,1,0,
        0,0,8,132,1,0,0,0,10,148,1,0,0,0,12,159,1,0,0,0,14,161,1,0,0,0,16,
        168,1,0,0,0,18,174,1,0,0,0,20,209,1,0,0,0,22,236,1,0,0,0,24,247,
        1,0,0,0,26,249,1,0,0,0,28,251,1,0,0,0,30,259,1,0,0,0,32,261,1,0,
        0,0,34,272,1,0,0,0,36,277,1,0,0,0,38,283,1,0,0,0,40,298,1,0,0,0,
        42,309,1,0,0,0,44,318,1,0,0,0,46,338,1,0,0,0,48,340,1,0,0,0,50,348,
        1,0,0,0,52,356,1,0,0,0,54,364,1,0,0,0,56,366,1,0,0,0,58,375,1,0,
        0,0,60,62,3,10,5,0,61,60,1,0,0,0,62,65,1,0,0,0,63,61,1,0,0,0,63,
        64,1,0,0,0,64,66,1,0,0,0,65,63,1,0,0,0,66,67,5,0,0,1,67,1,1,0,0,
        0,68,73,5,45,0,0,69,73,5,46,0,0,70,73,5,47,0,0,71,73,3,44,22,0,72,
        68,1,0,0,0,72,69,1,0,0,0,72,70,1,0,0,0,72,71,1,0,0,0,73,3,1,0,0,
        0,74,75,5,1,0,0,75,76,3,4,2,0,76,77,5,2,0,0,77,86,1,0,0,0,78,86,
        5,51,0,0,79,86,5,43,0,0,80,86,5,44,0,0,81,86,3,6,3,0,82,86,3,8,4,
        0,83,86,3,42,21,0,84,86,3,54,27,0,85,74,1,0,0,0,85,78,1,0,0,0,85,
        79,1,0,0,0,85,80,1,0,0,0,85,81,1,0,0,0,85,82,1,0,0,0,85,83,1,0,0,
        0,85,84,1,0,0,0,86,5,1,0,0,0,87,88,6,3,-1,0,88,100,5,43,0,0,89,100,
        5,51,0,0,90,100,3,42,21,0,91,92,5,1,0,0,92,93,3,6,3,0,93,94,5,2,
        0,0,94,100,1,0,0,0,95,96,5,3,0,0,96,100,3,6,3,5,97,98,5,44,0,0,98,
        100,6,3,-1,0,99,87,1,0,0,0,99,89,1,0,0,0,99,90,1,0,0,0,99,91,1,0,
        0,0,99,95,1,0,0,0,99,97,1,0,0,0,100,113,1,0,0,0,101,102,10,4,0,0,
        102,103,7,0,0,0,103,112,3,6,3,5,104,105,10,3,0,0,105,106,7,1,0,0,
        106,112,3,6,3,4,107,108,10,1,0,0,108,109,7,2,0,0,109,110,5,43,0,
        0,110,112,6,3,-1,0,111,101,1,0,0,0,111,104,1,0,0,0,111,107,1,0,0,
        0,112,115,1,0,0,0,113,111,1,0,0,0,113,114,1,0,0,0,114,7,1,0,0,0,
        115,113,1,0,0,0,116,117,6,4,-1,0,117,133,5,44,0,0,118,133,5,51,0,
        0,119,133,3,42,21,0,120,121,5,1,0,0,121,122,3,8,4,0,122,123,5,2,
        0,0,123,133,1,0,0,0,124,125,3,6,3,0,125,126,7,3,0,0,126,127,3,6,
        3,0,127,133,1,0,0,0,128,129,5,12,0,0,129,133,3,8,4,4,130,131,5,43,
        0,0,131,133,6,4,-1,0,132,116,1,0,0,0,132,118,1,0,0,0,132,119,1,0,
        0,0,132,120,1,0,0,0,132,124,1,0,0,0,132,128,1,0,0,0,132,130,1,0,
        0,0,133,145,1,0,0,0,134,135,10,5,0,0,135,136,7,3,0,0,136,144,3,8,
        4,6,137,138,10,3,0,0,138,139,5,13,0,0,139,144,3,8,4,4,140,141,10,
        2,0,0,141,142,5,14,0,0,142,144,3,8,4,3,143,134,1,0,0,0,143,137,1,
        0,0,0,143,140,1,0,0,0,144,147,1,0,0,0,145,143,1,0,0,0,145,146,1,
        0,0,0,146,9,1,0,0,0,147,145,1,0,0,0,148,149,3,38,19,0,149,11,1,0,
        0,0,150,160,3,18,9,0,151,160,3,20,10,0,152,160,3,22,11,0,153,160,
        3,24,12,0,154,160,3,28,14,0,155,160,3,38,19,0,156,160,3,36,18,0,
        157,160,3,14,7,0,158,160,3,56,28,0,159,150,1,0,0,0,159,151,1,0,0,
        0,159,152,1,0,0,0,159,153,1,0,0,0,159,154,1,0,0,0,159,155,1,0,0,
        0,159,156,1,0,0,0,159,157,1,0,0,0,159,158,1,0,0,0,160,13,1,0,0,0,
        161,162,5,15,0,0,162,163,3,16,8,0,163,164,5,16,0,0,164,15,1,0,0,
        0,165,167,3,12,6,0,166,165,1,0,0,0,167,170,1,0,0,0,168,166,1,0,0,
        0,168,169,1,0,0,0,169,172,1,0,0,0,170,168,1,0,0,0,171,173,3,4,2,
        0,172,171,1,0,0,0,172,173,1,0,0,0,173,17,1,0,0,0,174,175,3,4,2,0,
        175,176,5,42,0,0,176,19,1,0,0,0,177,178,5,23,0,0,178,179,5,51,0,
        0,179,180,5,41,0,0,180,181,3,2,1,0,181,182,5,40,0,0,182,183,3,4,
        2,0,183,184,5,42,0,0,184,210,1,0,0,0,185,186,5,23,0,0,186,187,5,
        51,0,0,187,188,5,40,0,0,188,189,3,4,2,0,189,190,5,42,0,0,190,210,
        1,0,0,0,191,192,5,23,0,0,192,193,5,51,0,0,193,195,6,10,-1,0,194,
        196,5,42,0,0,195,194,1,0,0,0,195,196,1,0,0,0,196,210,1,0,0,0,197,
        200,5,23,0,0,198,199,5,41,0,0,199,201,3,2,1,0,200,198,1,0,0,0,200,
        201,1,0,0,0,201,202,1,0,0,0,202,206,6,10,-1,0,203,204,5,40,0,0,204,
        205,5,41,0,0,205,207,3,4,2,0,206,203,1,0,0,0,206,207,1,0,0,0,207,
        208,1,0,0,0,208,210,5,42,0,0,209,177,1,0,0,0,209,185,1,0,0,0,209,
        191,1,0,0,0,209,197,1,0,0,0,210,21,1,0,0,0,211,212,5,26,0,0,212,
        213,3,8,4,0,213,221,3,14,7,0,214,215,5,27,0,0,215,216,5,26,0,0,216,
        217,3,8,4,0,217,218,3,14,7,0,218,220,1,0,0,0,219,214,1,0,0,0,220,
        223,1,0,0,0,221,219,1,0,0,0,221,222,1,0,0,0,222,226,1,0,0,0,223,
        221,1,0,0,0,224,225,5,27,0,0,225,227,3,14,7,0,226,224,1,0,0,0,226,
        227,1,0,0,0,227,237,1,0,0,0,228,229,5,26,0,0,229,230,3,4,2,0,230,
        231,6,11,-1,0,231,234,3,14,7,0,232,233,5,27,0,0,233,235,3,14,7,0,
        234,232,1,0,0,0,234,235,1,0,0,0,235,237,1,0,0,0,236,211,1,0,0,0,
        236,228,1,0,0,0,237,23,1,0,0,0,238,239,5,28,0,0,239,240,3,8,4,0,
        240,241,3,14,7,0,241,248,1,0,0,0,242,243,5,28,0,0,243,244,3,4,2,
        0,244,245,6,12,-1,0,245,246,3,14,7,0,246,248,1,0,0,0,247,238,1,0,
        0,0,247,242,1,0,0,0,248,25,1,0,0,0,249,250,7,4,0,0,250,27,1,0,0,
        0,251,252,3,26,13,0,252,253,5,42,0,0,253,29,1,0,0,0,254,255,5,51,
        0,0,255,256,5,41,0,0,256,260,3,2,1,0,257,258,5,51,0,0,258,260,6,
        15,-1,0,259,254,1,0,0,0,259,257,1,0,0,0,260,31,1,0,0,0,261,266,3,
        30,15,0,262,263,5,17,0,0,263,265,3,30,15,0,264,262,1,0,0,0,265,268,
        1,0,0,0,266,264,1,0,0,0,266,267,1,0,0,0,267,270,1,0,0,0,268,266,
        1,0,0,0,269,271,5,17,0,0,270,269,1,0,0,0,270,271,1,0,0,0,271,33,
        1,0,0,0,272,275,5,18,0,0,273,276,3,2,1,0,274,276,5,19,0,0,275,273,
        1,0,0,0,275,274,1,0,0,0,276,35,1,0,0,0,277,279,5,29,0,0,278,280,
        3,4,2,0,279,278,1,0,0,0,279,280,1,0,0,0,280,281,1,0,0,0,281,282,
        5,42,0,0,282,37,1,0,0,0,283,284,5,25,0,0,284,291,5,51,0,0,285,287,
        5,1,0,0,286,288,3,32,16,0,287,286,1,0,0,0,287,288,1,0,0,0,288,289,
        1,0,0,0,289,292,5,2,0,0,290,292,5,19,0,0,291,285,1,0,0,0,291,290,
        1,0,0,0,292,294,1,0,0,0,293,295,3,34,17,0,294,293,1,0,0,0,294,295,
        1,0,0,0,295,296,1,0,0,0,296,297,3,14,7,0,297,39,1,0,0,0,298,303,
        3,4,2,0,299,300,5,17,0,0,300,302,3,4,2,0,301,299,1,0,0,0,302,305,
        1,0,0,0,303,301,1,0,0,0,303,304,1,0,0,0,304,307,1,0,0,0,305,303,
        1,0,0,0,306,308,5,17,0,0,307,306,1,0,0,0,307,308,1,0,0,0,308,41,
        1,0,0,0,309,316,5,51,0,0,310,312,5,1,0,0,311,313,3,40,20,0,312,311,
        1,0,0,0,312,313,1,0,0,0,313,314,1,0,0,0,314,317,5,2,0,0,315,317,
        5,19,0,0,316,310,1,0,0,0,316,315,1,0,0,0,317,43,1,0,0,0,318,319,
        5,50,0,0,319,320,5,38,0,0,320,321,3,2,1,0,321,322,5,39,0,0,322,45,
        1,0,0,0,323,324,5,50,0,0,324,325,5,49,0,0,325,329,5,33,0,0,326,330,
        5,19,0,0,327,328,5,1,0,0,328,330,5,2,0,0,329,326,1,0,0,0,329,327,
        1,0,0,0,330,339,1,0,0,0,331,332,5,32,0,0,332,333,5,12,0,0,333,335,
        5,20,0,0,334,336,3,48,24,0,335,334,1,0,0,0,335,336,1,0,0,0,336,337,
        1,0,0,0,337,339,5,21,0,0,338,323,1,0,0,0,338,331,1,0,0,0,339,47,
        1,0,0,0,340,345,3,4,2,0,341,342,5,17,0,0,342,344,3,4,2,0,343,341,
        1,0,0,0,344,347,1,0,0,0,345,343,1,0,0,0,345,346,1,0,0,0,346,49,1,
        0,0,0,347,345,1,0,0,0,348,349,5,51,0,0,349,350,5,22,0,0,350,354,
        5,36,0,0,351,355,5,19,0,0,352,353,5,1,0,0,353,355,5,2,0,0,354,351,
        1,0,0,0,354,352,1,0,0,0,355,51,1,0,0,0,356,357,5,51,0,0,357,358,
        5,20,0,0,358,359,3,6,3,0,359,360,5,21,0,0,360,53,1,0,0,0,361,365,
        3,46,23,0,362,365,3,50,25,0,363,365,3,52,26,0,364,361,1,0,0,0,364,
        362,1,0,0,0,364,363,1,0,0,0,365,55,1,0,0,0,366,367,5,37,0,0,367,
        368,5,12,0,0,368,370,5,1,0,0,369,371,3,58,29,0,370,369,1,0,0,0,370,
        371,1,0,0,0,371,372,1,0,0,0,372,373,5,2,0,0,373,374,5,42,0,0,374,
        57,1,0,0,0,375,380,5,48,0,0,376,377,5,17,0,0,377,379,3,4,2,0,378,
        376,1,0,0,0,379,382,1,0,0,0,380,378,1,0,0,0,380,381,1,0,0,0,381,
        59,1,0,0,0,382,380,1,0,0,0,41,63,72,85,99,111,113,132,143,145,159,
        168,172,195,200,206,209,221,226,234,236,247,259,266,270,275,279,
        287,291,294,303,307,312,316,329,335,338,345,354,364,370,380
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!RustLiteParser.__ATN) {
            RustLiteParser.__ATN = new antlr.ATNDeserializer().deserialize(RustLiteParser._serializedATN);
        }

        return RustLiteParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(RustLiteParser.literalNames, RustLiteParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return RustLiteParser.vocabulary;
    }

    private static readonly decisionsToDFA = RustLiteParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ProgContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(RustLiteParser.EOF, 0)!;
    }
    public globalElement(): GlobalElementContext[];
    public globalElement(i: number): GlobalElementContext | null;
    public globalElement(i?: number): GlobalElementContext[] | GlobalElementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(GlobalElementContext);
        }

        return this.getRuleContext(i, GlobalElementContext);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_prog;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterProg) {
             listener.enterProg(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitProg) {
             listener.exitProg(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitProg) {
            return visitor.visitProg(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public U32_TYPE(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.U32_TYPE, 0);
    }
    public I32_TYPE(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.I32_TYPE, 0);
    }
    public BOOL_TYPE(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.BOOL_TYPE, 0);
    }
    public vectorType(): VectorTypeContext | null {
        return this.getRuleContext(0, VectorTypeContext);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_type;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterType) {
             listener.enterType(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitType) {
             listener.exitType(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitType) {
            return visitor.visitType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExprContext extends antlr.ParserRuleContext {
    public _inner?: ExprContext;
    public _primary?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.IDENTIFIER, 0);
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.INT, 0);
    }
    public BOOL(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.BOOL, 0);
    }
    public arithExpr(): ArithExprContext | null {
        return this.getRuleContext(0, ArithExprContext);
    }
    public logicExpr(): LogicExprContext | null {
        return this.getRuleContext(0, LogicExprContext);
    }
    public fnCall(): FnCallContext | null {
        return this.getRuleContext(0, FnCallContext);
    }
    public vectorExpr(): VectorExprContext | null {
        return this.getRuleContext(0, VectorExprContext);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_expr;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterExpr) {
             listener.enterExpr(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitExpr) {
             listener.exitExpr(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitExpr) {
            return visitor.visitExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ArithExprContext extends antlr.ParserRuleContext {
    public _left?: ArithExprContext;
    public _primary?: Token | null;
    public _inner?: ArithExprContext;
    public _op?: Token | null;
    public _right?: ArithExprContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.INT, 0);
    }
    public IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.IDENTIFIER, 0);
    }
    public fnCall(): FnCallContext | null {
        return this.getRuleContext(0, FnCallContext);
    }
    public arithExpr(): ArithExprContext[];
    public arithExpr(i: number): ArithExprContext | null;
    public arithExpr(i?: number): ArithExprContext[] | ArithExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ArithExprContext);
        }

        return this.getRuleContext(i, ArithExprContext);
    }
    public BOOL(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.BOOL, 0);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_arithExpr;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterArithExpr) {
             listener.enterArithExpr(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitArithExpr) {
             listener.exitArithExpr(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitArithExpr) {
            return visitor.visitArithExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LogicExprContext extends antlr.ParserRuleContext {
    public _left?: LogicExprContext;
    public _primary?: Token | null;
    public _inner?: LogicExprContext;
    public _arithLeft?: ArithExprContext;
    public _op?: Token | null;
    public _arithRight?: ArithExprContext;
    public _right?: LogicExprContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BOOL(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.BOOL, 0);
    }
    public IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.IDENTIFIER, 0);
    }
    public fnCall(): FnCallContext | null {
        return this.getRuleContext(0, FnCallContext);
    }
    public logicExpr(): LogicExprContext[];
    public logicExpr(i: number): LogicExprContext | null;
    public logicExpr(i?: number): LogicExprContext[] | LogicExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LogicExprContext);
        }

        return this.getRuleContext(i, LogicExprContext);
    }
    public arithExpr(): ArithExprContext[];
    public arithExpr(i: number): ArithExprContext | null;
    public arithExpr(i?: number): ArithExprContext[] | ArithExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ArithExprContext);
        }

        return this.getRuleContext(i, ArithExprContext);
    }
    public RANGLE(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.RANGLE, 0);
    }
    public LANGLE(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.LANGLE, 0);
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.INT, 0);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_logicExpr;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterLogicExpr) {
             listener.enterLogicExpr(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitLogicExpr) {
             listener.exitLogicExpr(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitLogicExpr) {
            return visitor.visitLogicExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GlobalElementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public fnDeclareStmt(): FnDeclareStmtContext {
        return this.getRuleContext(0, FnDeclareStmtContext)!;
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_globalElement;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterGlobalElement) {
             listener.enterGlobalElement(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitGlobalElement) {
             listener.exitGlobalElement(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitGlobalElement) {
            return visitor.visitGlobalElement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public exprStmt(): ExprStmtContext | null {
        return this.getRuleContext(0, ExprStmtContext);
    }
    public declareStmt(): DeclareStmtContext | null {
        return this.getRuleContext(0, DeclareStmtContext);
    }
    public condStmt(): CondStmtContext | null {
        return this.getRuleContext(0, CondStmtContext);
    }
    public whileStmt(): WhileStmtContext | null {
        return this.getRuleContext(0, WhileStmtContext);
    }
    public loopControlStmt(): LoopControlStmtContext | null {
        return this.getRuleContext(0, LoopControlStmtContext);
    }
    public fnDeclareStmt(): FnDeclareStmtContext | null {
        return this.getRuleContext(0, FnDeclareStmtContext);
    }
    public returnStmt(): ReturnStmtContext | null {
        return this.getRuleContext(0, ReturnStmtContext);
    }
    public block(): BlockContext | null {
        return this.getRuleContext(0, BlockContext);
    }
    public printlnMacro(): PrintlnMacroContext | null {
        return this.getRuleContext(0, PrintlnMacroContext);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_stmt;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterStmt) {
             listener.enterStmt(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitStmt) {
             listener.exitStmt(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitStmt) {
            return visitor.visitStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public blockContent(): BlockContentContext {
        return this.getRuleContext(0, BlockContentContext)!;
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_block;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterBlock) {
             listener.enterBlock(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitBlock) {
             listener.exitBlock(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitBlock) {
            return visitor.visitBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BlockContentContext extends antlr.ParserRuleContext {
    public _finalExpr?: ExprContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public stmt(): StmtContext[];
    public stmt(i: number): StmtContext | null;
    public stmt(i?: number): StmtContext[] | StmtContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StmtContext);
        }

        return this.getRuleContext(i, StmtContext);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_blockContent;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterBlockContent) {
             listener.enterBlockContent(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitBlockContent) {
             listener.exitBlockContent(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitBlockContent) {
            return visitor.visitBlockContent(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExprStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(RustLiteParser.SEMICOLON, 0)!;
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_exprStmt;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterExprStmt) {
             listener.enterExprStmt(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitExprStmt) {
             listener.exitExprStmt(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitExprStmt) {
            return visitor.visitExprStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DeclareStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LET(): antlr.TerminalNode {
        return this.getToken(RustLiteParser.LET, 0)!;
    }
    public IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.IDENTIFIER, 0);
    }
    public COLON(): antlr.TerminalNode[];
    public COLON(i: number): antlr.TerminalNode | null;
    public COLON(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustLiteParser.COLON);
    	} else {
    		return this.getToken(RustLiteParser.COLON, i);
    	}
    }
    public type(): TypeContext | null {
        return this.getRuleContext(0, TypeContext);
    }
    public EQUALS(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.EQUALS, 0);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public SEMICOLON(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.SEMICOLON, 0);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_declareStmt;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterDeclareStmt) {
             listener.enterDeclareStmt(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitDeclareStmt) {
             listener.exitDeclareStmt(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitDeclareStmt) {
            return visitor.visitDeclareStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CondStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IF(): antlr.TerminalNode[];
    public IF(i: number): antlr.TerminalNode | null;
    public IF(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustLiteParser.IF);
    	} else {
    		return this.getToken(RustLiteParser.IF, i);
    	}
    }
    public logicExpr(): LogicExprContext[];
    public logicExpr(i: number): LogicExprContext | null;
    public logicExpr(i?: number): LogicExprContext[] | LogicExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LogicExprContext);
        }

        return this.getRuleContext(i, LogicExprContext);
    }
    public block(): BlockContext[];
    public block(i: number): BlockContext | null;
    public block(i?: number): BlockContext[] | BlockContext | null {
        if (i === undefined) {
            return this.getRuleContexts(BlockContext);
        }

        return this.getRuleContext(i, BlockContext);
    }
    public ELSE(): antlr.TerminalNode[];
    public ELSE(i: number): antlr.TerminalNode | null;
    public ELSE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustLiteParser.ELSE);
    	} else {
    		return this.getToken(RustLiteParser.ELSE, i);
    	}
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_condStmt;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterCondStmt) {
             listener.enterCondStmt(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitCondStmt) {
             listener.exitCondStmt(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitCondStmt) {
            return visitor.visitCondStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WhileStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WHILE(): antlr.TerminalNode {
        return this.getToken(RustLiteParser.WHILE, 0)!;
    }
    public logicExpr(): LogicExprContext | null {
        return this.getRuleContext(0, LogicExprContext);
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_whileStmt;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterWhileStmt) {
             listener.enterWhileStmt(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitWhileStmt) {
             listener.exitWhileStmt(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitWhileStmt) {
            return visitor.visitWhileStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LoopControlContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BREAK(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.BREAK, 0);
    }
    public CONTINUE(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.CONTINUE, 0);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_loopControl;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterLoopControl) {
             listener.enterLoopControl(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitLoopControl) {
             listener.exitLoopControl(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitLoopControl) {
            return visitor.visitLoopControl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LoopControlStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public loopControl(): LoopControlContext {
        return this.getRuleContext(0, LoopControlContext)!;
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(RustLiteParser.SEMICOLON, 0)!;
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_loopControlStmt;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterLoopControlStmt) {
             listener.enterLoopControlStmt(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitLoopControlStmt) {
             listener.exitLoopControlStmt(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitLoopControlStmt) {
            return visitor.visitLoopControlStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParamContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(RustLiteParser.IDENTIFIER, 0)!;
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.COLON, 0);
    }
    public type(): TypeContext | null {
        return this.getRuleContext(0, TypeContext);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_param;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterParam) {
             listener.enterParam(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitParam) {
             listener.exitParam(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitParam) {
            return visitor.visitParam(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParamListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public param(): ParamContext[];
    public param(i: number): ParamContext | null;
    public param(i?: number): ParamContext[] | ParamContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ParamContext);
        }

        return this.getRuleContext(i, ParamContext);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_paramList;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterParamList) {
             listener.enterParamList(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitParamList) {
             listener.exitParamList(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitParamList) {
            return visitor.visitParamList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ReturnTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public type(): TypeContext | null {
        return this.getRuleContext(0, TypeContext);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_returnType;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterReturnType) {
             listener.enterReturnType(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitReturnType) {
             listener.exitReturnType(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitReturnType) {
            return visitor.visitReturnType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ReturnStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RETURN(): antlr.TerminalNode {
        return this.getToken(RustLiteParser.RETURN, 0)!;
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(RustLiteParser.SEMICOLON, 0)!;
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_returnStmt;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterReturnStmt) {
             listener.enterReturnStmt(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitReturnStmt) {
             listener.exitReturnStmt(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitReturnStmt) {
            return visitor.visitReturnStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FnDeclareStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FN(): antlr.TerminalNode {
        return this.getToken(RustLiteParser.FN, 0)!;
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(RustLiteParser.IDENTIFIER, 0)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public returnType(): ReturnTypeContext | null {
        return this.getRuleContext(0, ReturnTypeContext);
    }
    public paramList(): ParamListContext | null {
        return this.getRuleContext(0, ParamListContext);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_fnDeclareStmt;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterFnDeclareStmt) {
             listener.enterFnDeclareStmt(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitFnDeclareStmt) {
             listener.exitFnDeclareStmt(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitFnDeclareStmt) {
            return visitor.visitFnDeclareStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ArgListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_argList;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterArgList) {
             listener.enterArgList(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitArgList) {
             listener.exitArgList(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitArgList) {
            return visitor.visitArgList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FnCallContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(RustLiteParser.IDENTIFIER, 0)!;
    }
    public argList(): ArgListContext | null {
        return this.getRuleContext(0, ArgListContext);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_fnCall;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterFnCall) {
             listener.enterFnCall(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitFnCall) {
             listener.exitFnCall(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitFnCall) {
            return visitor.visitFnCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VectorTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public VECTOR_MODULE_NAME(): antlr.TerminalNode {
        return this.getToken(RustLiteParser.VECTOR_MODULE_NAME, 0)!;
    }
    public LANGLE(): antlr.TerminalNode {
        return this.getToken(RustLiteParser.LANGLE, 0)!;
    }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext)!;
    }
    public RANGLE(): antlr.TerminalNode {
        return this.getToken(RustLiteParser.RANGLE, 0)!;
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_vectorType;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterVectorType) {
             listener.enterVectorType(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitVectorType) {
             listener.exitVectorType(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitVectorType) {
            return visitor.visitVectorType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VectorInitContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public VECTOR_MODULE_NAME(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.VECTOR_MODULE_NAME, 0);
    }
    public METHOD_ACCESSOR(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.METHOD_ACCESSOR, 0);
    }
    public NEW(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.NEW, 0);
    }
    public VEC(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.VEC, 0);
    }
    public vectorInitList(): VectorInitListContext | null {
        return this.getRuleContext(0, VectorInitListContext);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_vectorInit;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterVectorInit) {
             listener.enterVectorInit(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitVectorInit) {
             listener.exitVectorInit(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitVectorInit) {
            return visitor.visitVectorInit(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VectorInitListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_vectorInitList;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterVectorInitList) {
             listener.enterVectorInitList(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitVectorInitList) {
             listener.exitVectorInitList(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitVectorInitList) {
            return visitor.visitVectorInitList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VectorLenContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(RustLiteParser.IDENTIFIER, 0)!;
    }
    public LEN(): antlr.TerminalNode {
        return this.getToken(RustLiteParser.LEN, 0)!;
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_vectorLen;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterVectorLen) {
             listener.enterVectorLen(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitVectorLen) {
             listener.exitVectorLen(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitVectorLen) {
            return visitor.visitVectorLen(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VectorIndexAccessContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(RustLiteParser.IDENTIFIER, 0)!;
    }
    public arithExpr(): ArithExprContext {
        return this.getRuleContext(0, ArithExprContext)!;
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_vectorIndexAccess;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterVectorIndexAccess) {
             listener.enterVectorIndexAccess(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitVectorIndexAccess) {
             listener.exitVectorIndexAccess(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitVectorIndexAccess) {
            return visitor.visitVectorIndexAccess(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VectorExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public vectorInit(): VectorInitContext | null {
        return this.getRuleContext(0, VectorInitContext);
    }
    public vectorLen(): VectorLenContext | null {
        return this.getRuleContext(0, VectorLenContext);
    }
    public vectorIndexAccess(): VectorIndexAccessContext | null {
        return this.getRuleContext(0, VectorIndexAccessContext);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_vectorExpr;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterVectorExpr) {
             listener.enterVectorExpr(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitVectorExpr) {
             listener.exitVectorExpr(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitVectorExpr) {
            return visitor.visitVectorExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PrintlnMacroContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PRINTLN(): antlr.TerminalNode {
        return this.getToken(RustLiteParser.PRINTLN, 0)!;
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(RustLiteParser.SEMICOLON, 0)!;
    }
    public printlnArgs(): PrintlnArgsContext | null {
        return this.getRuleContext(0, PrintlnArgsContext);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_printlnMacro;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterPrintlnMacro) {
             listener.enterPrintlnMacro(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitPrintlnMacro) {
             listener.exitPrintlnMacro(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitPrintlnMacro) {
            return visitor.visitPrintlnMacro(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PrintlnArgsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STRING(): antlr.TerminalNode {
        return this.getToken(RustLiteParser.STRING, 0)!;
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_printlnArgs;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterPrintlnArgs) {
             listener.enterPrintlnArgs(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitPrintlnArgs) {
             listener.exitPrintlnArgs(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitPrintlnArgs) {
            return visitor.visitPrintlnArgs(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
