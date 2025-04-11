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
    public static readonly U8_TYPE = 45;
    public static readonly U16_TYPE = 46;
    public static readonly U32_TYPE = 47;
    public static readonly U64_TYPE = 48;
    public static readonly I8_TYPE = 49;
    public static readonly I16_TYPE = 50;
    public static readonly I32_TYPE = 51;
    public static readonly I64_TYPE = 52;
    public static readonly BOOL_TYPE = 53;
    public static readonly STRING = 54;
    public static readonly METHOD_ACCESSOR = 55;
    public static readonly VECTOR_MODULE_NAME = 56;
    public static readonly IDENTIFIER = 57;
    public static readonly ERROR_CHAR = 58;
    public static readonly WS = 59;
    public static readonly COMMENT = 60;
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
    public static readonly RULE_returnTypes = 17;
    public static readonly RULE_returnType = 18;
    public static readonly RULE_returnStmt = 19;
    public static readonly RULE_fnDeclareStmt = 20;
    public static readonly RULE_argList = 21;
    public static readonly RULE_fnCall = 22;
    public static readonly RULE_vectorType = 23;
    public static readonly RULE_vectorInit = 24;
    public static readonly RULE_vectorInitList = 25;
    public static readonly RULE_vectorPush = 26;
    public static readonly RULE_vectorPop = 27;
    public static readonly RULE_vectorLen = 28;
    public static readonly RULE_vectorIndexAccess = 29;
    public static readonly RULE_vectorAssignment = 30;
    public static readonly RULE_vectorExpr = 31;
    public static readonly RULE_printlnMacro = 32;
    public static readonly RULE_printlnArgs = 33;

    public static readonly literalNames = [
        null, "'('", "')'", "'-'", "'*'", "'/'", "'%'", "'+'", "'=='", "'!='", 
        "'<='", "'>='", "'!'", "'&&'", "'||'", "'{'", "'}'", "','", "'()'", 
        "'->'", "'['", "']'", "'.'", "'let'", "'mut'", "'fn'", "'if'", "'else'", 
        "'while'", "'return'", "'break'", "'continue'", "'vec'", "'new'", 
        "'push'", "'pop'", "'len'", "'println'", "'<'", "'>'", "'='", "':'", 
        "';'", null, null, "'u8'", "'u16'", "'u32'", "'u64'", "'i8'", "'i16'", 
        "'i32'", "'i64'", "'bool'", null, "'::'", "'Vec'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, "LET", "MUT", "FN", "IF", "ELSE", "WHILE", "RETURN", "BREAK", 
        "CONTINUE", "VEC", "NEW", "PUSH", "POP", "LEN", "PRINTLN", "LANGLE", 
        "RANGLE", "EQUALS", "COLON", "SEMICOLON", "INT", "BOOL", "U8_TYPE", 
        "U16_TYPE", "U32_TYPE", "U64_TYPE", "I8_TYPE", "I16_TYPE", "I32_TYPE", 
        "I64_TYPE", "BOOL_TYPE", "STRING", "METHOD_ACCESSOR", "VECTOR_MODULE_NAME", 
        "IDENTIFIER", "ERROR_CHAR", "WS", "COMMENT"
    ];
    public static readonly ruleNames = [
        "prog", "type", "expr", "arithExpr", "logicExpr", "globalElement", 
        "stmt", "block", "blockContent", "exprStmt", "declareStmt", "condStmt", 
        "whileStmt", "loopControl", "loopControlStmt", "param", "paramList", 
        "returnTypes", "returnType", "returnStmt", "fnDeclareStmt", "argList", 
        "fnCall", "vectorType", "vectorInit", "vectorInitList", "vectorPush", 
        "vectorPop", "vectorLen", "vectorIndexAccess", "vectorAssignment", 
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
            this.state = 99;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 2, this.context) ) {
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
                this.arithExpr(5);
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
            this.context!.stop = this.tokenStream.LT(-1);
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
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 4, this.context) ) {
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
                        if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 112) !== 0))) {
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
                        if(!(_la === 3 || _la === 7)) {
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
                        if(!(_la === 5 || _la === 6)) {
                            localContext._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 122;
                        this.match(RustLiteParser.INT);

                                              if ((localContext._right != null ? this.tokenStream.getTextFromRange(localContext._right.start, localContext._right.stop) : '') === "0") this.notifyErrorListeners("Division by zero", null, null);
                                          
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
            this.state = 144;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 6, this.context) ) {
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
                if(!(((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & 3221225487) !== 0))) {
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
            this.context!.stop = this.tokenStream.LT(-1);
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
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 7, this.context) ) {
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
            this.state = 157;
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
            this.state = 207;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 17, this.context) ) {
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
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 14, this.context) ) {
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

                this.notifyErrorListeners("Missing semicolon after expression", null, null)
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
    public exprStmt(): ExprStmtContext {
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
            this.state = 265;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 26, this.context) ) {
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
            this.state = 292;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 30, this.context) ) {
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
            this.state = 303;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 31, this.context) ) {
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
            this.state = 305;
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
            this.state = 315;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 32, this.context) ) {
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public returnTypes(): ReturnTypesContext {
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
        this.enterRule(localContext, 38, RustLiteParser.RULE_returnStmt);
        let _la: number;
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
        this.enterRule(localContext, 40, RustLiteParser.RULE_fnDeclareStmt);
        let _la: number;
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
        this.enterRule(localContext, 42, RustLiteParser.RULE_argList);
        let _la: number;
        try {
            let alternative: number;
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
        this.enterRule(localContext, 44, RustLiteParser.RULE_fnCall);
        let _la: number;
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
        this.enterRule(localContext, 48, RustLiteParser.RULE_vectorInit);
        let _la: number;
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
        this.enterRule(localContext, 50, RustLiteParser.RULE_vectorInitList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 396;
            _la = this.tokenStream.LA(1);
            if(!(_la === 43 || _la === 44)) {
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public vectorPush(): VectorPushContext {
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public vectorPop(): VectorPopContext {
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public vectorAssignment(): VectorAssignmentContext {
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
        this.enterRule(localContext, 62, RustLiteParser.RULE_vectorExpr);
        try {
            this.state = 448;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 51, this.context) ) {
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
        this.enterRule(localContext, 66, RustLiteParser.RULE_printlnArgs);
        let _la: number;
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
            return this.precpred(this.context, 3);
        case 4:
            return this.precpred(this.context, 2);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,60,465,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,
        2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,
        7,33,1,0,5,0,70,8,0,10,0,12,0,73,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,1,1,1,1,1,1,3,1,87,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
        2,1,2,1,2,3,2,100,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
        3,3,3,113,8,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,125,8,
        3,10,3,12,3,128,9,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,
        1,4,1,4,1,4,1,4,3,4,145,8,4,1,4,1,4,1,4,1,4,1,4,1,4,5,4,153,8,4,
        10,4,12,4,156,9,4,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,168,
        8,6,1,7,1,7,1,7,1,7,1,8,5,8,175,8,8,10,8,12,8,178,9,8,1,8,3,8,181,
        8,8,1,8,5,8,184,8,8,10,8,12,8,187,9,8,1,8,5,8,190,8,8,10,8,12,8,
        193,9,8,1,8,1,8,1,8,5,8,198,8,8,10,8,12,8,201,9,8,1,8,3,8,204,8,
        8,1,8,1,8,3,8,208,8,8,1,9,1,9,1,9,1,10,1,10,3,10,215,8,10,1,10,1,
        10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,226,8,10,1,10,1,10,1,
        10,1,10,1,10,1,10,1,10,3,10,235,8,10,1,10,1,10,1,10,1,10,1,10,1,
        10,1,10,3,10,244,8,10,1,10,1,10,1,10,3,10,249,8,10,1,10,1,10,3,10,
        253,8,10,1,10,1,10,3,10,257,8,10,1,10,1,10,1,10,1,10,3,10,263,8,
        10,1,10,3,10,266,8,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,5,
        11,276,8,11,10,11,12,11,279,9,11,1,11,1,11,3,11,283,8,11,1,11,1,
        11,1,11,1,11,1,11,1,11,3,11,291,8,11,3,11,293,8,11,1,12,1,12,1,12,
        1,12,1,12,1,12,1,12,1,12,1,12,3,12,304,8,12,1,13,1,13,1,14,1,14,
        1,14,1,15,1,15,1,15,1,15,1,15,3,15,316,8,15,1,16,1,16,1,16,5,16,
        321,8,16,10,16,12,16,324,9,16,1,16,3,16,327,8,16,1,17,1,17,3,17,
        331,8,17,1,18,1,18,1,18,1,19,1,19,3,19,338,8,19,1,19,1,19,1,20,1,
        20,1,20,1,20,3,20,346,8,20,1,20,1,20,3,20,350,8,20,1,20,3,20,353,
        8,20,1,20,1,20,1,21,1,21,1,21,5,21,360,8,21,10,21,12,21,363,9,21,
        1,21,3,21,366,8,21,1,22,1,22,1,22,3,22,371,8,22,1,22,1,22,1,23,1,
        23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,24,3,24,386,8,24,1,
        24,1,24,1,24,1,24,3,24,392,8,24,1,24,3,24,395,8,24,1,25,1,25,1,25,
        1,25,5,25,401,8,25,10,25,12,25,404,9,25,1,26,1,26,1,26,1,26,1,26,
        1,26,1,26,3,26,413,8,26,1,27,1,27,1,27,1,27,1,27,1,27,3,27,421,8,
        27,1,28,1,28,1,28,1,28,1,28,1,28,3,28,429,8,28,1,29,1,29,1,29,1,
        29,1,29,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,
        31,1,31,3,31,449,8,31,1,32,1,32,1,32,1,32,1,32,1,32,1,33,1,33,1,
        33,5,33,460,8,33,10,33,12,33,463,9,33,1,33,0,2,6,8,34,0,2,4,6,8,
        10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,
        54,56,58,60,62,64,66,0,6,1,0,4,6,2,0,3,3,7,7,1,0,5,6,2,0,8,11,38,
        39,1,0,30,31,1,0,43,44,519,0,71,1,0,0,0,2,86,1,0,0,0,4,99,1,0,0,
        0,6,112,1,0,0,0,8,144,1,0,0,0,10,157,1,0,0,0,12,167,1,0,0,0,14,169,
        1,0,0,0,16,207,1,0,0,0,18,209,1,0,0,0,20,265,1,0,0,0,22,292,1,0,
        0,0,24,303,1,0,0,0,26,305,1,0,0,0,28,307,1,0,0,0,30,315,1,0,0,0,
        32,317,1,0,0,0,34,330,1,0,0,0,36,332,1,0,0,0,38,335,1,0,0,0,40,341,
        1,0,0,0,42,356,1,0,0,0,44,367,1,0,0,0,46,374,1,0,0,0,48,394,1,0,
        0,0,50,396,1,0,0,0,52,412,1,0,0,0,54,414,1,0,0,0,56,422,1,0,0,0,
        58,430,1,0,0,0,60,435,1,0,0,0,62,448,1,0,0,0,64,450,1,0,0,0,66,456,
        1,0,0,0,68,70,3,10,5,0,69,68,1,0,0,0,70,73,1,0,0,0,71,69,1,0,0,0,
        71,72,1,0,0,0,72,74,1,0,0,0,73,71,1,0,0,0,74,75,5,0,0,1,75,1,1,0,
        0,0,76,87,5,45,0,0,77,87,5,46,0,0,78,87,5,47,0,0,79,87,5,48,0,0,
        80,87,5,49,0,0,81,87,5,50,0,0,82,87,5,51,0,0,83,87,5,52,0,0,84,87,
        5,53,0,0,85,87,3,46,23,0,86,76,1,0,0,0,86,77,1,0,0,0,86,78,1,0,0,
        0,86,79,1,0,0,0,86,80,1,0,0,0,86,81,1,0,0,0,86,82,1,0,0,0,86,83,
        1,0,0,0,86,84,1,0,0,0,86,85,1,0,0,0,87,3,1,0,0,0,88,89,5,1,0,0,89,
        90,3,4,2,0,90,91,5,2,0,0,91,100,1,0,0,0,92,100,5,57,0,0,93,100,5,
        43,0,0,94,100,5,44,0,0,95,100,3,6,3,0,96,100,3,8,4,0,97,100,3,44,
        22,0,98,100,3,62,31,0,99,88,1,0,0,0,99,92,1,0,0,0,99,93,1,0,0,0,
        99,94,1,0,0,0,99,95,1,0,0,0,99,96,1,0,0,0,99,97,1,0,0,0,99,98,1,
        0,0,0,100,5,1,0,0,0,101,102,6,3,-1,0,102,113,5,43,0,0,103,113,5,
        57,0,0,104,105,5,1,0,0,105,106,3,6,3,0,106,107,5,2,0,0,107,113,1,
        0,0,0,108,109,5,3,0,0,109,113,3,6,3,5,110,111,5,44,0,0,111,113,6,
        3,-1,0,112,101,1,0,0,0,112,103,1,0,0,0,112,104,1,0,0,0,112,108,1,
        0,0,0,112,110,1,0,0,0,113,126,1,0,0,0,114,115,10,4,0,0,115,116,7,
        0,0,0,116,125,3,6,3,5,117,118,10,3,0,0,118,119,7,1,0,0,119,125,3,
        6,3,4,120,121,10,1,0,0,121,122,7,2,0,0,122,123,5,43,0,0,123,125,
        6,3,-1,0,124,114,1,0,0,0,124,117,1,0,0,0,124,120,1,0,0,0,125,128,
        1,0,0,0,126,124,1,0,0,0,126,127,1,0,0,0,127,7,1,0,0,0,128,126,1,
        0,0,0,129,130,6,4,-1,0,130,145,5,44,0,0,131,145,5,57,0,0,132,133,
        5,1,0,0,133,134,3,8,4,0,134,135,5,2,0,0,135,145,1,0,0,0,136,137,
        3,6,3,0,137,138,7,3,0,0,138,139,3,6,3,0,139,145,1,0,0,0,140,141,
        5,12,0,0,141,145,3,8,4,4,142,143,5,43,0,0,143,145,6,4,-1,0,144,129,
        1,0,0,0,144,131,1,0,0,0,144,132,1,0,0,0,144,136,1,0,0,0,144,140,
        1,0,0,0,144,142,1,0,0,0,145,154,1,0,0,0,146,147,10,3,0,0,147,148,
        5,13,0,0,148,153,3,8,4,4,149,150,10,2,0,0,150,151,5,14,0,0,151,153,
        3,8,4,3,152,146,1,0,0,0,152,149,1,0,0,0,153,156,1,0,0,0,154,152,
        1,0,0,0,154,155,1,0,0,0,155,9,1,0,0,0,156,154,1,0,0,0,157,158,3,
        40,20,0,158,11,1,0,0,0,159,168,3,18,9,0,160,168,3,20,10,0,161,168,
        3,22,11,0,162,168,3,24,12,0,163,168,3,28,14,0,164,168,3,40,20,0,
        165,168,3,38,19,0,166,168,3,14,7,0,167,159,1,0,0,0,167,160,1,0,0,
        0,167,161,1,0,0,0,167,162,1,0,0,0,167,163,1,0,0,0,167,164,1,0,0,
        0,167,165,1,0,0,0,167,166,1,0,0,0,168,13,1,0,0,0,169,170,5,15,0,
        0,170,171,3,16,8,0,171,172,5,16,0,0,172,15,1,0,0,0,173,175,3,12,
        6,0,174,173,1,0,0,0,175,178,1,0,0,0,176,174,1,0,0,0,176,177,1,0,
        0,0,177,180,1,0,0,0,178,176,1,0,0,0,179,181,3,4,2,0,180,179,1,0,
        0,0,180,181,1,0,0,0,181,208,1,0,0,0,182,184,3,12,6,0,183,182,1,0,
        0,0,184,187,1,0,0,0,185,183,1,0,0,0,185,186,1,0,0,0,186,208,1,0,
        0,0,187,185,1,0,0,0,188,190,3,12,6,0,189,188,1,0,0,0,190,193,1,0,
        0,0,191,189,1,0,0,0,191,192,1,0,0,0,192,194,1,0,0,0,193,191,1,0,
        0,0,194,199,3,4,2,0,195,198,3,12,6,0,196,198,3,4,2,0,197,195,1,0,
        0,0,197,196,1,0,0,0,198,201,1,0,0,0,199,197,1,0,0,0,199,200,1,0,
        0,0,200,203,1,0,0,0,201,199,1,0,0,0,202,204,3,4,2,0,203,202,1,0,
        0,0,203,204,1,0,0,0,204,205,1,0,0,0,205,206,6,8,-1,0,206,208,1,0,
        0,0,207,176,1,0,0,0,207,185,1,0,0,0,207,191,1,0,0,0,208,17,1,0,0,
        0,209,210,3,4,2,0,210,211,5,42,0,0,211,19,1,0,0,0,212,214,5,23,0,
        0,213,215,5,24,0,0,214,213,1,0,0,0,214,215,1,0,0,0,215,216,1,0,0,
        0,216,217,5,57,0,0,217,218,5,41,0,0,218,219,3,2,1,0,219,220,5,40,
        0,0,220,221,3,4,2,0,221,222,5,42,0,0,222,266,1,0,0,0,223,225,5,23,
        0,0,224,226,5,24,0,0,225,224,1,0,0,0,225,226,1,0,0,0,226,227,1,0,
        0,0,227,228,5,57,0,0,228,229,5,41,0,0,229,230,3,2,1,0,230,231,5,
        42,0,0,231,266,1,0,0,0,232,234,5,23,0,0,233,235,5,24,0,0,234,233,
        1,0,0,0,234,235,1,0,0,0,235,236,1,0,0,0,236,237,5,57,0,0,237,238,
        5,40,0,0,238,239,3,4,2,0,239,240,5,42,0,0,240,266,1,0,0,0,241,243,
        5,23,0,0,242,244,5,24,0,0,243,242,1,0,0,0,243,244,1,0,0,0,244,245,
        1,0,0,0,245,246,5,57,0,0,246,248,6,10,-1,0,247,249,5,42,0,0,248,
        247,1,0,0,0,248,249,1,0,0,0,249,266,1,0,0,0,250,252,5,23,0,0,251,
        253,5,24,0,0,252,251,1,0,0,0,252,253,1,0,0,0,253,256,1,0,0,0,254,
        255,5,41,0,0,255,257,3,2,1,0,256,254,1,0,0,0,256,257,1,0,0,0,257,
        258,1,0,0,0,258,262,6,10,-1,0,259,260,5,40,0,0,260,261,5,41,0,0,
        261,263,3,4,2,0,262,259,1,0,0,0,262,263,1,0,0,0,263,264,1,0,0,0,
        264,266,5,42,0,0,265,212,1,0,0,0,265,223,1,0,0,0,265,232,1,0,0,0,
        265,241,1,0,0,0,265,250,1,0,0,0,266,21,1,0,0,0,267,268,5,26,0,0,
        268,269,3,8,4,0,269,277,3,14,7,0,270,271,5,27,0,0,271,272,5,26,0,
        0,272,273,3,8,4,0,273,274,3,14,7,0,274,276,1,0,0,0,275,270,1,0,0,
        0,276,279,1,0,0,0,277,275,1,0,0,0,277,278,1,0,0,0,278,282,1,0,0,
        0,279,277,1,0,0,0,280,281,5,27,0,0,281,283,3,14,7,0,282,280,1,0,
        0,0,282,283,1,0,0,0,283,293,1,0,0,0,284,285,5,26,0,0,285,286,3,4,
        2,0,286,287,6,11,-1,0,287,290,3,14,7,0,288,289,5,27,0,0,289,291,
        3,14,7,0,290,288,1,0,0,0,290,291,1,0,0,0,291,293,1,0,0,0,292,267,
        1,0,0,0,292,284,1,0,0,0,293,23,1,0,0,0,294,295,5,28,0,0,295,296,
        3,8,4,0,296,297,3,14,7,0,297,304,1,0,0,0,298,299,5,28,0,0,299,300,
        3,4,2,0,300,301,6,12,-1,0,301,302,3,14,7,0,302,304,1,0,0,0,303,294,
        1,0,0,0,303,298,1,0,0,0,304,25,1,0,0,0,305,306,7,4,0,0,306,27,1,
        0,0,0,307,308,3,26,13,0,308,309,5,42,0,0,309,29,1,0,0,0,310,311,
        5,57,0,0,311,312,5,41,0,0,312,316,3,2,1,0,313,314,5,57,0,0,314,316,
        6,15,-1,0,315,310,1,0,0,0,315,313,1,0,0,0,316,31,1,0,0,0,317,322,
        3,30,15,0,318,319,5,17,0,0,319,321,3,30,15,0,320,318,1,0,0,0,321,
        324,1,0,0,0,322,320,1,0,0,0,322,323,1,0,0,0,323,326,1,0,0,0,324,
        322,1,0,0,0,325,327,5,17,0,0,326,325,1,0,0,0,326,327,1,0,0,0,327,
        33,1,0,0,0,328,331,3,2,1,0,329,331,5,18,0,0,330,328,1,0,0,0,330,
        329,1,0,0,0,331,35,1,0,0,0,332,333,5,19,0,0,333,334,3,34,17,0,334,
        37,1,0,0,0,335,337,5,29,0,0,336,338,3,4,2,0,337,336,1,0,0,0,337,
        338,1,0,0,0,338,339,1,0,0,0,339,340,5,42,0,0,340,39,1,0,0,0,341,
        342,5,25,0,0,342,349,5,57,0,0,343,345,5,1,0,0,344,346,3,32,16,0,
        345,344,1,0,0,0,345,346,1,0,0,0,346,347,1,0,0,0,347,350,5,2,0,0,
        348,350,5,18,0,0,349,343,1,0,0,0,349,348,1,0,0,0,350,352,1,0,0,0,
        351,353,3,36,18,0,352,351,1,0,0,0,352,353,1,0,0,0,353,354,1,0,0,
        0,354,355,3,14,7,0,355,41,1,0,0,0,356,361,3,4,2,0,357,358,5,17,0,
        0,358,360,3,4,2,0,359,357,1,0,0,0,360,363,1,0,0,0,361,359,1,0,0,
        0,361,362,1,0,0,0,362,365,1,0,0,0,363,361,1,0,0,0,364,366,5,17,0,
        0,365,364,1,0,0,0,365,366,1,0,0,0,366,43,1,0,0,0,367,368,5,57,0,
        0,368,370,5,1,0,0,369,371,3,42,21,0,370,369,1,0,0,0,370,371,1,0,
        0,0,371,372,1,0,0,0,372,373,5,2,0,0,373,45,1,0,0,0,374,375,5,56,
        0,0,375,376,5,38,0,0,376,377,3,2,1,0,377,378,5,39,0,0,378,47,1,0,
        0,0,379,380,5,56,0,0,380,381,5,55,0,0,381,385,5,33,0,0,382,386,5,
        18,0,0,383,384,5,1,0,0,384,386,5,2,0,0,385,382,1,0,0,0,385,383,1,
        0,0,0,386,395,1,0,0,0,387,388,5,32,0,0,388,389,5,12,0,0,389,391,
        5,20,0,0,390,392,3,50,25,0,391,390,1,0,0,0,391,392,1,0,0,0,392,393,
        1,0,0,0,393,395,5,21,0,0,394,379,1,0,0,0,394,387,1,0,0,0,395,49,
        1,0,0,0,396,402,7,5,0,0,397,398,5,17,0,0,398,401,5,43,0,0,399,401,
        5,44,0,0,400,397,1,0,0,0,400,399,1,0,0,0,401,404,1,0,0,0,402,400,
        1,0,0,0,402,403,1,0,0,0,403,51,1,0,0,0,404,402,1,0,0,0,405,406,5,
        57,0,0,406,407,5,22,0,0,407,408,5,34,0,0,408,409,5,1,0,0,409,413,
        5,43,0,0,410,411,5,44,0,0,411,413,5,2,0,0,412,405,1,0,0,0,412,410,
        1,0,0,0,413,53,1,0,0,0,414,415,5,57,0,0,415,416,5,22,0,0,416,420,
        5,35,0,0,417,421,5,18,0,0,418,419,5,1,0,0,419,421,5,2,0,0,420,417,
        1,0,0,0,420,418,1,0,0,0,421,55,1,0,0,0,422,423,5,57,0,0,423,424,
        5,22,0,0,424,428,5,36,0,0,425,429,5,18,0,0,426,427,5,1,0,0,427,429,
        5,2,0,0,428,425,1,0,0,0,428,426,1,0,0,0,429,57,1,0,0,0,430,431,5,
        57,0,0,431,432,5,20,0,0,432,433,3,4,2,0,433,434,5,21,0,0,434,59,
        1,0,0,0,435,436,5,57,0,0,436,437,5,20,0,0,437,438,3,4,2,0,438,439,
        5,21,0,0,439,440,5,40,0,0,440,441,3,62,31,0,441,61,1,0,0,0,442,449,
        3,48,24,0,443,449,3,52,26,0,444,449,3,54,27,0,445,449,3,56,28,0,
        446,449,3,58,29,0,447,449,3,60,30,0,448,442,1,0,0,0,448,443,1,0,
        0,0,448,444,1,0,0,0,448,445,1,0,0,0,448,446,1,0,0,0,448,447,1,0,
        0,0,449,63,1,0,0,0,450,451,5,37,0,0,451,452,5,12,0,0,452,453,5,1,
        0,0,453,454,3,66,33,0,454,455,5,2,0,0,455,65,1,0,0,0,456,461,5,54,
        0,0,457,458,5,17,0,0,458,460,3,4,2,0,459,457,1,0,0,0,460,463,1,0,
        0,0,461,459,1,0,0,0,461,462,1,0,0,0,462,67,1,0,0,0,463,461,1,0,0,
        0,53,71,86,99,112,124,126,144,152,154,167,176,180,185,191,197,199,
        203,207,214,225,234,243,248,252,256,262,265,277,282,290,292,303,
        315,322,326,330,337,345,349,352,361,365,370,385,391,394,400,402,
        412,420,428,448,461
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
    public U8_TYPE(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.U8_TYPE, 0);
    }
    public U16_TYPE(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.U16_TYPE, 0);
    }
    public U32_TYPE(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.U32_TYPE, 0);
    }
    public U64_TYPE(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.U64_TYPE, 0);
    }
    public I8_TYPE(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.I8_TYPE, 0);
    }
    public I16_TYPE(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.I16_TYPE, 0);
    }
    public I32_TYPE(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.I32_TYPE, 0);
    }
    public I64_TYPE(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.I64_TYPE, 0);
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
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
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
    public MUT(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.MUT, 0);
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


export class ReturnTypesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public type(): TypeContext | null {
        return this.getRuleContext(0, TypeContext);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_returnTypes;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterReturnTypes) {
             listener.enterReturnTypes(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitReturnTypes) {
             listener.exitReturnTypes(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitReturnTypes) {
            return visitor.visitReturnTypes(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ReturnTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public returnTypes(): ReturnTypesContext {
        return this.getRuleContext(0, ReturnTypesContext)!;
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
    public INT(): antlr.TerminalNode[];
    public INT(i: number): antlr.TerminalNode | null;
    public INT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustLiteParser.INT);
    	} else {
    		return this.getToken(RustLiteParser.INT, i);
    	}
    }
    public BOOL(): antlr.TerminalNode[];
    public BOOL(i: number): antlr.TerminalNode | null;
    public BOOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(RustLiteParser.BOOL);
    	} else {
    		return this.getToken(RustLiteParser.BOOL, i);
    	}
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


export class VectorPushContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.IDENTIFIER, 0);
    }
    public PUSH(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.PUSH, 0);
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.INT, 0);
    }
    public BOOL(): antlr.TerminalNode | null {
        return this.getToken(RustLiteParser.BOOL, 0);
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_vectorPush;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterVectorPush) {
             listener.enterVectorPush(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitVectorPush) {
             listener.exitVectorPush(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitVectorPush) {
            return visitor.visitVectorPush(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VectorPopContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(RustLiteParser.IDENTIFIER, 0)!;
    }
    public POP(): antlr.TerminalNode {
        return this.getToken(RustLiteParser.POP, 0)!;
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_vectorPop;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterVectorPop) {
             listener.enterVectorPop(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitVectorPop) {
             listener.exitVectorPop(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitVectorPop) {
            return visitor.visitVectorPop(this);
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
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
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


export class VectorAssignmentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(RustLiteParser.IDENTIFIER, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public EQUALS(): antlr.TerminalNode {
        return this.getToken(RustLiteParser.EQUALS, 0)!;
    }
    public vectorExpr(): VectorExprContext {
        return this.getRuleContext(0, VectorExprContext)!;
    }
    public override get ruleIndex(): number {
        return RustLiteParser.RULE_vectorAssignment;
    }
    public override enterRule(listener: RustLiteListener): void {
        if(listener.enterVectorAssignment) {
             listener.enterVectorAssignment(this);
        }
    }
    public override exitRule(listener: RustLiteListener): void {
        if(listener.exitVectorAssignment) {
             listener.exitVectorAssignment(this);
        }
    }
    public override accept<Result>(visitor: RustLiteVisitor<Result>): Result | null {
        if (visitor.visitVectorAssignment) {
            return visitor.visitVectorAssignment(this);
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
    public vectorPush(): VectorPushContext | null {
        return this.getRuleContext(0, VectorPushContext);
    }
    public vectorPop(): VectorPopContext | null {
        return this.getRuleContext(0, VectorPopContext);
    }
    public vectorLen(): VectorLenContext | null {
        return this.getRuleContext(0, VectorLenContext);
    }
    public vectorIndexAccess(): VectorIndexAccessContext | null {
        return this.getRuleContext(0, VectorIndexAccessContext);
    }
    public vectorAssignment(): VectorAssignmentContext | null {
        return this.getRuleContext(0, VectorAssignmentContext);
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
    public printlnArgs(): PrintlnArgsContext {
        return this.getRuleContext(0, PrintlnArgsContext)!;
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
