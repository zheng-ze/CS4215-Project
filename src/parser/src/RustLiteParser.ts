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
            this.state = 130;
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
                localContext._right = this.logicExpr(3);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 143;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 8, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 141;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 7, this.context) ) {
                    case 1:
                        {
                        localContext = new LogicExprContext(parentContext, parentState);
                        localContext._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, RustLiteParser.RULE_logicExpr);
                        this.state = 132;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 133;
                        localContext._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & 3221225487) !== 0))) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 134;
                        localContext._right = this.logicExpr(5);
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
                        localContext._op = this.match(RustLiteParser.T__12);
                        this.state = 137;
                        localContext._right = this.logicExpr(3);
                        }
                        break;
                    case 3:
                        {
                        localContext = new LogicExprContext(parentContext, parentState);
                        localContext._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, RustLiteParser.RULE_logicExpr);
                        this.state = 138;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 139;
                        localContext._op = this.match(RustLiteParser.T__13);
                        this.state = 140;
                        localContext._right = this.logicExpr(2);
                        }
                        break;
                    }
                    }
                }
                this.state = 145;
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
            this.state = 146;
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
            this.state = 157;
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
                this.state = 148;
                this.exprStmt();
                }
                break;
            case RustLiteParser.LET:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 149;
                this.declareStmt();
                }
                break;
            case RustLiteParser.IF:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 150;
                this.condStmt();
                }
                break;
            case RustLiteParser.WHILE:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 151;
                this.whileStmt();
                }
                break;
            case RustLiteParser.BREAK:
            case RustLiteParser.CONTINUE:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 152;
                this.loopControlStmt();
                }
                break;
            case RustLiteParser.FN:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 153;
                this.fnDeclareStmt();
                }
                break;
            case RustLiteParser.RETURN:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 154;
                this.returnStmt();
                }
                break;
            case RustLiteParser.T__14:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 155;
                this.block();
                }
                break;
            case RustLiteParser.PRINTLN:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 156;
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
            this.state = 159;
            this.match(RustLiteParser.T__14);
            this.state = 160;
            this.blockContent();
            this.state = 161;
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
            this.state = 166;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 10, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 163;
                    this.stmt();
                    }
                    }
                }
                this.state = 168;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 10, this.context);
            }
            this.state = 170;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4106) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 792577) !== 0)) {
                {
                this.state = 169;
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
            this.state = 172;
            this.expr();
            this.state = 173;
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
            this.state = 207;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 15, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 175;
                this.match(RustLiteParser.LET);
                this.state = 176;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 177;
                this.match(RustLiteParser.COLON);
                this.state = 178;
                this.type_();
                this.state = 179;
                this.match(RustLiteParser.EQUALS);
                this.state = 180;
                this.expr();
                this.state = 181;
                this.match(RustLiteParser.SEMICOLON);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 183;
                this.match(RustLiteParser.LET);
                this.state = 184;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 185;
                this.match(RustLiteParser.EQUALS);
                this.state = 186;
                this.expr();
                this.state = 187;
                this.match(RustLiteParser.SEMICOLON);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 189;
                this.match(RustLiteParser.LET);
                this.state = 190;
                this.match(RustLiteParser.IDENTIFIER);

                                this.notifyErrorListeners("Type annotations needed", null, null);
                            
                this.state = 193;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 42) {
                    {
                    this.state = 192;
                    this.match(RustLiteParser.SEMICOLON);
                    }
                }

                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 195;
                this.match(RustLiteParser.LET);
                this.state = 198;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 41) {
                    {
                    this.state = 196;
                    this.match(RustLiteParser.COLON);
                    this.state = 197;
                    this.type_();
                    }
                }

                this.notifyErrorListeners("Expected identifier", null, null);
                this.state = 204;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 40) {
                    {
                    this.state = 201;
                    this.match(RustLiteParser.EQUALS);
                    this.state = 202;
                    this.match(RustLiteParser.COLON);
                    this.state = 203;
                    this.expr();
                    }
                }

                this.state = 206;
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
            this.state = 234;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 19, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 209;
                this.match(RustLiteParser.IF);
                this.state = 210;
                this.logicExpr(0);
                this.state = 211;
                this.block();
                this.state = 219;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 16, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 212;
                        this.match(RustLiteParser.ELSE);
                        this.state = 213;
                        this.match(RustLiteParser.IF);
                        this.state = 214;
                        this.logicExpr(0);
                        this.state = 215;
                        this.block();
                        }
                        }
                    }
                    this.state = 221;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 16, this.context);
                }
                this.state = 224;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 27) {
                    {
                    this.state = 222;
                    this.match(RustLiteParser.ELSE);
                    this.state = 223;
                    this.block();
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 226;
                this.match(RustLiteParser.IF);
                this.state = 227;
                this.expr();

                                this.notifyErrorListeners("Condition must be a boolean expression", null, null);
                            
                this.state = 229;
                this.block();
                this.state = 232;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 27) {
                    {
                    this.state = 230;
                    this.match(RustLiteParser.ELSE);
                    this.state = 231;
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
            this.state = 245;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 20, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 236;
                this.match(RustLiteParser.WHILE);
                this.state = 237;
                this.logicExpr(0);
                this.state = 238;
                this.block();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 240;
                this.match(RustLiteParser.WHILE);
                this.state = 241;
                this.expr();

                                this.notifyErrorListeners("Condition must be a boolean expression", null, null);
                            
                this.state = 243;
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
            this.state = 247;
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
            this.state = 249;
            this.loopControl();
            this.state = 250;
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
            this.state = 257;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 21, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 252;
                this.match(RustLiteParser.IDENTIFIER);
                this.state = 253;
                this.match(RustLiteParser.COLON);
                this.state = 254;
                this.type_();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 255;
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
            this.state = 259;
            this.param();
            this.state = 264;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 22, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 260;
                    this.match(RustLiteParser.T__16);
                    this.state = 261;
                    this.param();
                    }
                    }
                }
                this.state = 266;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 22, this.context);
            }
            this.state = 268;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 17) {
                {
                this.state = 267;
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
            this.state = 270;
            this.match(RustLiteParser.T__17);
            this.state = 273;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustLiteParser.U32_TYPE:
            case RustLiteParser.I32_TYPE:
            case RustLiteParser.BOOL_TYPE:
            case RustLiteParser.VECTOR_MODULE_NAME:
                {
                this.state = 271;
                this.type_();
                }
                break;
            case RustLiteParser.T__18:
                {
                this.state = 272;
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
            this.state = 275;
            this.match(RustLiteParser.RETURN);
            this.state = 277;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4106) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 792577) !== 0)) {
                {
                this.state = 276;
                this.expr();
                }
            }

            this.state = 279;
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
            this.state = 281;
            this.match(RustLiteParser.FN);
            this.state = 282;
            this.match(RustLiteParser.IDENTIFIER);
            this.state = 289;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustLiteParser.T__0:
                {
                this.state = 283;
                this.match(RustLiteParser.T__0);
                this.state = 285;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 51) {
                    {
                    this.state = 284;
                    this.paramList();
                    }
                }

                this.state = 287;
                this.match(RustLiteParser.T__1);
                }
                break;
            case RustLiteParser.T__18:
                {
                this.state = 288;
                this.match(RustLiteParser.T__18);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 292;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 18) {
                {
                this.state = 291;
                this.returnType();
                }
            }

            this.state = 294;
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
            this.state = 296;
            this.expr();
            this.state = 301;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 29, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 297;
                    this.match(RustLiteParser.T__16);
                    this.state = 298;
                    this.expr();
                    }
                    }
                }
                this.state = 303;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 29, this.context);
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
            this.state = 307;
            this.match(RustLiteParser.IDENTIFIER);
            this.state = 314;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustLiteParser.T__0:
                {
                this.state = 308;
                this.match(RustLiteParser.T__0);
                this.state = 310;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4106) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 792577) !== 0)) {
                    {
                    this.state = 309;
                    this.argList();
                    }
                }

                this.state = 312;
                this.match(RustLiteParser.T__1);
                }
                break;
            case RustLiteParser.T__18:
                {
                this.state = 313;
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
            this.state = 316;
            this.match(RustLiteParser.VECTOR_MODULE_NAME);
            this.state = 317;
            this.match(RustLiteParser.LANGLE);
            this.state = 318;
            this.type_();
            this.state = 319;
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
            this.state = 336;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustLiteParser.VECTOR_MODULE_NAME:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 321;
                this.match(RustLiteParser.VECTOR_MODULE_NAME);
                this.state = 322;
                this.match(RustLiteParser.METHOD_ACCESSOR);
                this.state = 323;
                this.match(RustLiteParser.NEW);
                this.state = 327;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case RustLiteParser.T__18:
                    {
                    this.state = 324;
                    this.match(RustLiteParser.T__18);
                    }
                    break;
                case RustLiteParser.T__0:
                    {
                    this.state = 325;
                    this.match(RustLiteParser.T__0);
                    this.state = 326;
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
                this.state = 329;
                this.match(RustLiteParser.VEC);
                this.state = 330;
                this.match(RustLiteParser.T__11);
                this.state = 331;
                this.match(RustLiteParser.T__19);
                this.state = 333;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4106) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 792577) !== 0)) {
                    {
                    this.state = 332;
                    this.vectorInitList();
                    }
                }

                this.state = 335;
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
            this.state = 338;
            this.expr();
            this.state = 343;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 17) {
                {
                {
                this.state = 339;
                this.match(RustLiteParser.T__16);
                this.state = 340;
                this.expr();
                }
                }
                this.state = 345;
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
            this.state = 346;
            this.match(RustLiteParser.IDENTIFIER);
            this.state = 347;
            this.match(RustLiteParser.T__21);
            this.state = 348;
            this.match(RustLiteParser.LEN);
            this.state = 352;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case RustLiteParser.T__18:
                {
                this.state = 349;
                this.match(RustLiteParser.T__18);
                }
                break;
            case RustLiteParser.T__0:
                {
                this.state = 350;
                this.match(RustLiteParser.T__0);
                this.state = 351;
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
            this.state = 354;
            this.match(RustLiteParser.IDENTIFIER);
            this.state = 355;
            this.match(RustLiteParser.T__19);
            this.state = 356;
            this.arithExpr(0);
            this.state = 357;
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
            this.state = 362;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 38, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 359;
                this.vectorInit();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 360;
                this.vectorLen();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 361;
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
            this.state = 364;
            this.match(RustLiteParser.PRINTLN);
            this.state = 365;
            this.match(RustLiteParser.T__11);
            this.state = 366;
            this.match(RustLiteParser.T__0);
            this.state = 368;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 48) {
                {
                this.state = 367;
                this.printlnArgs();
                }
            }

            this.state = 370;
            this.match(RustLiteParser.T__1);
            this.state = 371;
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
            this.state = 373;
            this.match(RustLiteParser.STRING);
            this.state = 378;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 17) {
                {
                {
                this.state = 374;
                this.match(RustLiteParser.T__16);
                this.state = 375;
                this.expr();
                }
                }
                this.state = 380;
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
            return this.precpred(this.context, 4);
        case 4:
            return this.precpred(this.context, 2);
        case 5:
            return this.precpred(this.context, 1);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,54,382,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,
        2,27,7,27,2,28,7,28,2,29,7,29,1,0,5,0,62,8,0,10,0,12,0,65,9,0,1,
        0,1,0,1,1,1,1,1,1,1,1,3,1,73,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
        1,2,1,2,1,2,3,2,86,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
        3,1,3,3,3,100,8,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,112,
        8,3,10,3,12,3,115,9,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,
        4,1,4,1,4,1,4,3,4,131,8,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,5,
        4,142,8,4,10,4,12,4,145,9,4,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,
        1,6,1,6,3,6,158,8,6,1,7,1,7,1,7,1,7,1,8,5,8,165,8,8,10,8,12,8,168,
        9,8,1,8,3,8,171,8,8,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,
        10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,194,
        8,10,1,10,1,10,1,10,3,10,199,8,10,1,10,1,10,1,10,1,10,3,10,205,8,
        10,1,10,3,10,208,8,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,5,
        11,218,8,11,10,11,12,11,221,9,11,1,11,1,11,3,11,225,8,11,1,11,1,
        11,1,11,1,11,1,11,1,11,3,11,233,8,11,3,11,235,8,11,1,12,1,12,1,12,
        1,12,1,12,1,12,1,12,1,12,1,12,3,12,246,8,12,1,13,1,13,1,14,1,14,
        1,14,1,15,1,15,1,15,1,15,1,15,3,15,258,8,15,1,16,1,16,1,16,5,16,
        263,8,16,10,16,12,16,266,9,16,1,16,3,16,269,8,16,1,17,1,17,1,17,
        3,17,274,8,17,1,18,1,18,3,18,278,8,18,1,18,1,18,1,19,1,19,1,19,1,
        19,3,19,286,8,19,1,19,1,19,3,19,290,8,19,1,19,3,19,293,8,19,1,19,
        1,19,1,20,1,20,1,20,5,20,300,8,20,10,20,12,20,303,9,20,1,20,3,20,
        306,8,20,1,21,1,21,1,21,3,21,311,8,21,1,21,1,21,3,21,315,8,21,1,
        22,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,1,23,3,23,328,8,
        23,1,23,1,23,1,23,1,23,3,23,334,8,23,1,23,3,23,337,8,23,1,24,1,24,
        1,24,5,24,342,8,24,10,24,12,24,345,9,24,1,25,1,25,1,25,1,25,1,25,
        1,25,3,25,353,8,25,1,26,1,26,1,26,1,26,1,26,1,27,1,27,1,27,3,27,
        363,8,27,1,28,1,28,1,28,1,28,3,28,369,8,28,1,28,1,28,1,28,1,29,1,
        29,1,29,5,29,377,8,29,10,29,12,29,380,9,29,1,29,0,2,6,8,30,0,2,4,
        6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,
        50,52,54,56,58,0,5,1,0,4,6,2,0,3,3,7,7,1,0,5,6,2,0,8,11,38,39,1,
        0,30,31,420,0,63,1,0,0,0,2,72,1,0,0,0,4,85,1,0,0,0,6,99,1,0,0,0,
        8,130,1,0,0,0,10,146,1,0,0,0,12,157,1,0,0,0,14,159,1,0,0,0,16,166,
        1,0,0,0,18,172,1,0,0,0,20,207,1,0,0,0,22,234,1,0,0,0,24,245,1,0,
        0,0,26,247,1,0,0,0,28,249,1,0,0,0,30,257,1,0,0,0,32,259,1,0,0,0,
        34,270,1,0,0,0,36,275,1,0,0,0,38,281,1,0,0,0,40,296,1,0,0,0,42,307,
        1,0,0,0,44,316,1,0,0,0,46,336,1,0,0,0,48,338,1,0,0,0,50,346,1,0,
        0,0,52,354,1,0,0,0,54,362,1,0,0,0,56,364,1,0,0,0,58,373,1,0,0,0,
        60,62,3,10,5,0,61,60,1,0,0,0,62,65,1,0,0,0,63,61,1,0,0,0,63,64,1,
        0,0,0,64,66,1,0,0,0,65,63,1,0,0,0,66,67,5,0,0,1,67,1,1,0,0,0,68,
        73,5,45,0,0,69,73,5,46,0,0,70,73,5,47,0,0,71,73,3,44,22,0,72,68,
        1,0,0,0,72,69,1,0,0,0,72,70,1,0,0,0,72,71,1,0,0,0,73,3,1,0,0,0,74,
        75,5,1,0,0,75,76,3,4,2,0,76,77,5,2,0,0,77,86,1,0,0,0,78,86,5,51,
        0,0,79,86,5,43,0,0,80,86,5,44,0,0,81,86,3,6,3,0,82,86,3,8,4,0,83,
        86,3,42,21,0,84,86,3,54,27,0,85,74,1,0,0,0,85,78,1,0,0,0,85,79,1,
        0,0,0,85,80,1,0,0,0,85,81,1,0,0,0,85,82,1,0,0,0,85,83,1,0,0,0,85,
        84,1,0,0,0,86,5,1,0,0,0,87,88,6,3,-1,0,88,100,5,43,0,0,89,100,5,
        51,0,0,90,100,3,42,21,0,91,92,5,1,0,0,92,93,3,6,3,0,93,94,5,2,0,
        0,94,100,1,0,0,0,95,96,5,3,0,0,96,100,3,6,3,5,97,98,5,44,0,0,98,
        100,6,3,-1,0,99,87,1,0,0,0,99,89,1,0,0,0,99,90,1,0,0,0,99,91,1,0,
        0,0,99,95,1,0,0,0,99,97,1,0,0,0,100,113,1,0,0,0,101,102,10,4,0,0,
        102,103,7,0,0,0,103,112,3,6,3,5,104,105,10,3,0,0,105,106,7,1,0,0,
        106,112,3,6,3,4,107,108,10,1,0,0,108,109,7,2,0,0,109,110,5,43,0,
        0,110,112,6,3,-1,0,111,101,1,0,0,0,111,104,1,0,0,0,111,107,1,0,0,
        0,112,115,1,0,0,0,113,111,1,0,0,0,113,114,1,0,0,0,114,7,1,0,0,0,
        115,113,1,0,0,0,116,117,6,4,-1,0,117,131,5,44,0,0,118,131,5,51,0,
        0,119,131,3,42,21,0,120,121,5,1,0,0,121,122,3,8,4,0,122,123,5,2,
        0,0,123,131,1,0,0,0,124,125,3,6,3,0,125,126,7,3,0,0,126,127,3,6,
        3,0,127,131,1,0,0,0,128,129,5,12,0,0,129,131,3,8,4,3,130,116,1,0,
        0,0,130,118,1,0,0,0,130,119,1,0,0,0,130,120,1,0,0,0,130,124,1,0,
        0,0,130,128,1,0,0,0,131,143,1,0,0,0,132,133,10,4,0,0,133,134,7,3,
        0,0,134,142,3,8,4,5,135,136,10,2,0,0,136,137,5,13,0,0,137,142,3,
        8,4,3,138,139,10,1,0,0,139,140,5,14,0,0,140,142,3,8,4,2,141,132,
        1,0,0,0,141,135,1,0,0,0,141,138,1,0,0,0,142,145,1,0,0,0,143,141,
        1,0,0,0,143,144,1,0,0,0,144,9,1,0,0,0,145,143,1,0,0,0,146,147,3,
        38,19,0,147,11,1,0,0,0,148,158,3,18,9,0,149,158,3,20,10,0,150,158,
        3,22,11,0,151,158,3,24,12,0,152,158,3,28,14,0,153,158,3,38,19,0,
        154,158,3,36,18,0,155,158,3,14,7,0,156,158,3,56,28,0,157,148,1,0,
        0,0,157,149,1,0,0,0,157,150,1,0,0,0,157,151,1,0,0,0,157,152,1,0,
        0,0,157,153,1,0,0,0,157,154,1,0,0,0,157,155,1,0,0,0,157,156,1,0,
        0,0,158,13,1,0,0,0,159,160,5,15,0,0,160,161,3,16,8,0,161,162,5,16,
        0,0,162,15,1,0,0,0,163,165,3,12,6,0,164,163,1,0,0,0,165,168,1,0,
        0,0,166,164,1,0,0,0,166,167,1,0,0,0,167,170,1,0,0,0,168,166,1,0,
        0,0,169,171,3,4,2,0,170,169,1,0,0,0,170,171,1,0,0,0,171,17,1,0,0,
        0,172,173,3,4,2,0,173,174,5,42,0,0,174,19,1,0,0,0,175,176,5,23,0,
        0,176,177,5,51,0,0,177,178,5,41,0,0,178,179,3,2,1,0,179,180,5,40,
        0,0,180,181,3,4,2,0,181,182,5,42,0,0,182,208,1,0,0,0,183,184,5,23,
        0,0,184,185,5,51,0,0,185,186,5,40,0,0,186,187,3,4,2,0,187,188,5,
        42,0,0,188,208,1,0,0,0,189,190,5,23,0,0,190,191,5,51,0,0,191,193,
        6,10,-1,0,192,194,5,42,0,0,193,192,1,0,0,0,193,194,1,0,0,0,194,208,
        1,0,0,0,195,198,5,23,0,0,196,197,5,41,0,0,197,199,3,2,1,0,198,196,
        1,0,0,0,198,199,1,0,0,0,199,200,1,0,0,0,200,204,6,10,-1,0,201,202,
        5,40,0,0,202,203,5,41,0,0,203,205,3,4,2,0,204,201,1,0,0,0,204,205,
        1,0,0,0,205,206,1,0,0,0,206,208,5,42,0,0,207,175,1,0,0,0,207,183,
        1,0,0,0,207,189,1,0,0,0,207,195,1,0,0,0,208,21,1,0,0,0,209,210,5,
        26,0,0,210,211,3,8,4,0,211,219,3,14,7,0,212,213,5,27,0,0,213,214,
        5,26,0,0,214,215,3,8,4,0,215,216,3,14,7,0,216,218,1,0,0,0,217,212,
        1,0,0,0,218,221,1,0,0,0,219,217,1,0,0,0,219,220,1,0,0,0,220,224,
        1,0,0,0,221,219,1,0,0,0,222,223,5,27,0,0,223,225,3,14,7,0,224,222,
        1,0,0,0,224,225,1,0,0,0,225,235,1,0,0,0,226,227,5,26,0,0,227,228,
        3,4,2,0,228,229,6,11,-1,0,229,232,3,14,7,0,230,231,5,27,0,0,231,
        233,3,14,7,0,232,230,1,0,0,0,232,233,1,0,0,0,233,235,1,0,0,0,234,
        209,1,0,0,0,234,226,1,0,0,0,235,23,1,0,0,0,236,237,5,28,0,0,237,
        238,3,8,4,0,238,239,3,14,7,0,239,246,1,0,0,0,240,241,5,28,0,0,241,
        242,3,4,2,0,242,243,6,12,-1,0,243,244,3,14,7,0,244,246,1,0,0,0,245,
        236,1,0,0,0,245,240,1,0,0,0,246,25,1,0,0,0,247,248,7,4,0,0,248,27,
        1,0,0,0,249,250,3,26,13,0,250,251,5,42,0,0,251,29,1,0,0,0,252,253,
        5,51,0,0,253,254,5,41,0,0,254,258,3,2,1,0,255,256,5,51,0,0,256,258,
        6,15,-1,0,257,252,1,0,0,0,257,255,1,0,0,0,258,31,1,0,0,0,259,264,
        3,30,15,0,260,261,5,17,0,0,261,263,3,30,15,0,262,260,1,0,0,0,263,
        266,1,0,0,0,264,262,1,0,0,0,264,265,1,0,0,0,265,268,1,0,0,0,266,
        264,1,0,0,0,267,269,5,17,0,0,268,267,1,0,0,0,268,269,1,0,0,0,269,
        33,1,0,0,0,270,273,5,18,0,0,271,274,3,2,1,0,272,274,5,19,0,0,273,
        271,1,0,0,0,273,272,1,0,0,0,274,35,1,0,0,0,275,277,5,29,0,0,276,
        278,3,4,2,0,277,276,1,0,0,0,277,278,1,0,0,0,278,279,1,0,0,0,279,
        280,5,42,0,0,280,37,1,0,0,0,281,282,5,25,0,0,282,289,5,51,0,0,283,
        285,5,1,0,0,284,286,3,32,16,0,285,284,1,0,0,0,285,286,1,0,0,0,286,
        287,1,0,0,0,287,290,5,2,0,0,288,290,5,19,0,0,289,283,1,0,0,0,289,
        288,1,0,0,0,290,292,1,0,0,0,291,293,3,34,17,0,292,291,1,0,0,0,292,
        293,1,0,0,0,293,294,1,0,0,0,294,295,3,14,7,0,295,39,1,0,0,0,296,
        301,3,4,2,0,297,298,5,17,0,0,298,300,3,4,2,0,299,297,1,0,0,0,300,
        303,1,0,0,0,301,299,1,0,0,0,301,302,1,0,0,0,302,305,1,0,0,0,303,
        301,1,0,0,0,304,306,5,17,0,0,305,304,1,0,0,0,305,306,1,0,0,0,306,
        41,1,0,0,0,307,314,5,51,0,0,308,310,5,1,0,0,309,311,3,40,20,0,310,
        309,1,0,0,0,310,311,1,0,0,0,311,312,1,0,0,0,312,315,5,2,0,0,313,
        315,5,19,0,0,314,308,1,0,0,0,314,313,1,0,0,0,315,43,1,0,0,0,316,
        317,5,50,0,0,317,318,5,38,0,0,318,319,3,2,1,0,319,320,5,39,0,0,320,
        45,1,0,0,0,321,322,5,50,0,0,322,323,5,49,0,0,323,327,5,33,0,0,324,
        328,5,19,0,0,325,326,5,1,0,0,326,328,5,2,0,0,327,324,1,0,0,0,327,
        325,1,0,0,0,328,337,1,0,0,0,329,330,5,32,0,0,330,331,5,12,0,0,331,
        333,5,20,0,0,332,334,3,48,24,0,333,332,1,0,0,0,333,334,1,0,0,0,334,
        335,1,0,0,0,335,337,5,21,0,0,336,321,1,0,0,0,336,329,1,0,0,0,337,
        47,1,0,0,0,338,343,3,4,2,0,339,340,5,17,0,0,340,342,3,4,2,0,341,
        339,1,0,0,0,342,345,1,0,0,0,343,341,1,0,0,0,343,344,1,0,0,0,344,
        49,1,0,0,0,345,343,1,0,0,0,346,347,5,51,0,0,347,348,5,22,0,0,348,
        352,5,36,0,0,349,353,5,19,0,0,350,351,5,1,0,0,351,353,5,2,0,0,352,
        349,1,0,0,0,352,350,1,0,0,0,353,51,1,0,0,0,354,355,5,51,0,0,355,
        356,5,20,0,0,356,357,3,6,3,0,357,358,5,21,0,0,358,53,1,0,0,0,359,
        363,3,46,23,0,360,363,3,50,25,0,361,363,3,52,26,0,362,359,1,0,0,
        0,362,360,1,0,0,0,362,361,1,0,0,0,363,55,1,0,0,0,364,365,5,37,0,
        0,365,366,5,12,0,0,366,368,5,1,0,0,367,369,3,58,29,0,368,367,1,0,
        0,0,368,369,1,0,0,0,369,370,1,0,0,0,370,371,5,2,0,0,371,372,5,42,
        0,0,372,57,1,0,0,0,373,378,5,48,0,0,374,375,5,17,0,0,375,377,3,4,
        2,0,376,374,1,0,0,0,377,380,1,0,0,0,378,376,1,0,0,0,378,379,1,0,
        0,0,379,59,1,0,0,0,380,378,1,0,0,0,41,63,72,85,99,111,113,130,141,
        143,157,166,170,193,198,204,207,219,224,232,234,245,257,264,268,
        273,277,285,289,292,301,305,310,314,327,333,336,343,352,362,368,
        378
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
