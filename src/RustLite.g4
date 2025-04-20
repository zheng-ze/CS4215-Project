grammar RustLite;

prog: globalElement* EOF;

LET: 'let';
MUT: 'mut';
FN: 'fn';
IF: 'if';
ELSE: 'else';
WHILE: 'while';
RETURN: 'return';
BREAK: 'break';
CONTINUE: 'continue';
VEC: 'vec';
NEW: 'new';
PUSH: 'push';
POP: 'pop';
LEN: 'len';
PRINTLN: 'println';
LANGLE: '<';
RANGLE: '>';
EQUALS: '=';
COLON: ':';
SEMICOLON: ';';

INT: [0-9]+;
BOOL: 'true' | 'false';
U64_TYPE: 'u64';
I64_TYPE: 'i64';
BOOL_TYPE: 'bool';
STRING: '"' (~["\r\n] | '\\"')* '"';
METHOD_ACCESSOR: '::';
VECTOR_MODULE_NAME: 'Vec';
IDENTIFIER: [a-zA-Z_][a-zA-Z0-9_]*; // - not allowed in name.
ERROR_CHAR: . -> channel(HIDDEN);

// Ignore whitespace and comments
WS: [ \t\r\n]+ -> skip;
COMMENT: '//' ~[\r\n]* -> skip;

type: U64_TYPE | I64_TYPE | BOOL_TYPE | vectorType;

expr: '(' inner=expr ')'
    | primary=IDENTIFIER
    | primary=INT
    | primary=BOOL
    | arithExpr
    | logicExpr
    | fnCall
    | vectorExpr;

arithExpr: primary=INT
        | primary=IDENTIFIER
        | fnCall
        | '(' inner=arithExpr ')'
        | op='-' right=arithExpr
        | left=arithExpr op=('*'|'/'|'%') right=arithExpr
        | left=arithExpr op=('+'|'-') right=arithExpr
        | BOOL {this.notifyErrorListeners("Cannot use boolean in arithmetic expressions", null, null);}
        | left=arithExpr op=('/'|'%') INT {
            if ($right.text === "0") this.notifyErrorListeners("Division by zero", null, null);
        };

logicExpr: primary=BOOL
        | primary=IDENTIFIER
        | fnCall
        | '(' inner=logicExpr ')'
        | arithLeft=arithExpr op=('>'|'<'|'=='|'!='|'<='|'>=') arithRight=arithExpr
        | op='!' right=logicExpr
        | left=logicExpr op='&&' right=logicExpr
        | left=logicExpr op='||' right=logicExpr
        | INT {this.notifyErrorListeners("Cannot use INT without comparison operators in logical expressions", null, null);};

globalElement: fnDeclareStmt;

stmt: exprStmt
    | declareStmt
    | condStmt
    | whileStmt
    | loopControlStmt
    | fnDeclareStmt
    | returnStmt
    | block
    | printlnMacro;

// expr for implicit return in fn block. Need to check when compiling to bytecode
block: '{' blockContent '}';

blockContent: stmt* (finalExpr=expr)?;


exprStmt: expr SEMICOLON;

declareStmt: LET IDENTIFIER COLON type EQUALS expr SEMICOLON
        | LET IDENTIFIER EQUALS expr SEMICOLON
        | LET IDENTIFIER {
                this.notifyErrorListeners("Type annotations needed", null, null);
            } SEMICOLON? 
        | LET (COLON type)? {this.notifyErrorListeners("Expected identifier", null, null);} (EQUALS COLON expr)? SEMICOLON;

condStmt: IF logicExpr block (ELSE IF logicExpr block)* (ELSE block)?
        | IF expr {
                this.notifyErrorListeners("Condition must be a boolean expression", null, null);
            } block (ELSE block)?;

whileStmt: WHILE logicExpr block
        | WHILE expr {
                this.notifyErrorListeners("Condition must be a boolean expression", null, null);
            } block;

loopControl: BREAK | CONTINUE; 

loopControlStmt: loopControl SEMICOLON;

// Function declaration
param: IDENTIFIER COLON type
    | IDENTIFIER {this.notifyErrorListeners("Parameters must specify a type", null, null);};
paramList: param (',' param)* ','?;

returnType: '->' (type | '()');
returnStmt: RETURN expr? SEMICOLON;

fnDeclareStmt: FN IDENTIFIER ('(' paramList? ')' | '()')  returnType? block;

argList: expr (',' expr)* ','?;
fnCall: IDENTIFIER ('(' argList? ')' | '()');

vectorType: VECTOR_MODULE_NAME LANGLE type RANGLE;
vectorInit: VECTOR_MODULE_NAME METHOD_ACCESSOR NEW ('()' | '(' ')')
        | VEC '!' '[' vectorInitList? ']';
vectorInitList: expr (',' expr)*;
vectorLen: IDENTIFIER '.' LEN ('()' | '(' ')');
vectorIndexAccess: IDENTIFIER '[' arithExpr ']';

vectorExpr: vectorInit
        | vectorLen
        | vectorIndexAccess;
        

printlnMacro: PRINTLN '!' '(' printlnArgs? ')' ';';
printlnArgs: STRING (',' expr)*;
