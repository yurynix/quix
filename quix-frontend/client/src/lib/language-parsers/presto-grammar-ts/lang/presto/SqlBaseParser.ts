// Generated from ./src/lib/language-parsers/presto-grammar-ts/lang/presto/SqlBase.g4 by ANTLR 4.9.0-SNAPSHOT
// @ts-nocheck

import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { SqlBaseListener } from "./SqlBaseListener";
import { SqlBaseVisitor } from "./SqlBaseVisitor";


export class SqlBaseParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly SELECT = 10;
	public static readonly FROM = 11;
	public static readonly ADD = 12;
	public static readonly AS = 13;
	public static readonly ALL = 14;
	public static readonly SOME = 15;
	public static readonly ANY = 16;
	public static readonly DISTINCT = 17;
	public static readonly WHERE = 18;
	public static readonly GROUP = 19;
	public static readonly BY = 20;
	public static readonly GROUPING = 21;
	public static readonly SETS = 22;
	public static readonly CUBE = 23;
	public static readonly ROLLUP = 24;
	public static readonly ORDER = 25;
	public static readonly HAVING = 26;
	public static readonly LIMIT = 27;
	public static readonly AT = 28;
	public static readonly OR = 29;
	public static readonly AND = 30;
	public static readonly IN = 31;
	public static readonly NOT = 32;
	public static readonly NO = 33;
	public static readonly EXISTS = 34;
	public static readonly BETWEEN = 35;
	public static readonly LIKE = 36;
	public static readonly IS = 37;
	public static readonly NULL = 38;
	public static readonly TRUE = 39;
	public static readonly FALSE = 40;
	public static readonly NULLS = 41;
	public static readonly FIRST = 42;
	public static readonly LAST = 43;
	public static readonly ESCAPE = 44;
	public static readonly ASC = 45;
	public static readonly DESC = 46;
	public static readonly SUBSTRING = 47;
	public static readonly POSITION = 48;
	public static readonly FOR = 49;
	public static readonly TINYINT = 50;
	public static readonly SMALLINT = 51;
	public static readonly INTEGER = 52;
	public static readonly DATE = 53;
	public static readonly TIME = 54;
	public static readonly TIMESTAMP = 55;
	public static readonly INTERVAL = 56;
	public static readonly YEAR = 57;
	public static readonly MONTH = 58;
	public static readonly DAY = 59;
	public static readonly HOUR = 60;
	public static readonly MINUTE = 61;
	public static readonly SECOND = 62;
	public static readonly ZONE = 63;
	public static readonly CURRENT_DATE = 64;
	public static readonly CURRENT_TIME = 65;
	public static readonly CURRENT_TIMESTAMP = 66;
	public static readonly LOCALTIME = 67;
	public static readonly LOCALTIMESTAMP = 68;
	public static readonly EXTRACT = 69;
	public static readonly CASE = 70;
	public static readonly WHEN = 71;
	public static readonly THEN = 72;
	public static readonly ELSE = 73;
	public static readonly END = 74;
	public static readonly JOIN = 75;
	public static readonly CROSS = 76;
	public static readonly OUTER = 77;
	public static readonly INNER = 78;
	public static readonly LEFT = 79;
	public static readonly RIGHT = 80;
	public static readonly FULL = 81;
	public static readonly NATURAL = 82;
	public static readonly USING = 83;
	public static readonly ON = 84;
	public static readonly FILTER = 85;
	public static readonly OVER = 86;
	public static readonly PARTITION = 87;
	public static readonly RANGE = 88;
	public static readonly ROWS = 89;
	public static readonly UNBOUNDED = 90;
	public static readonly PRECEDING = 91;
	public static readonly FOLLOWING = 92;
	public static readonly CURRENT = 93;
	public static readonly ROW = 94;
	public static readonly WITH = 95;
	public static readonly RECURSIVE = 96;
	public static readonly VALUES = 97;
	public static readonly CREATE = 98;
	public static readonly SCHEMA = 99;
	public static readonly TABLE = 100;
	public static readonly VIEW = 101;
	public static readonly REPLACE = 102;
	public static readonly INSERT = 103;
	public static readonly DELETE = 104;
	public static readonly INTO = 105;
	public static readonly CONSTRAINT = 106;
	public static readonly DESCRIBE = 107;
	public static readonly GRANT = 108;
	public static readonly REVOKE = 109;
	public static readonly PRIVILEGES = 110;
	public static readonly PUBLIC = 111;
	public static readonly OPTION = 112;
	public static readonly EXPLAIN = 113;
	public static readonly ANALYZE = 114;
	public static readonly FORMAT = 115;
	public static readonly TYPE = 116;
	public static readonly TEXT = 117;
	public static readonly GRAPHVIZ = 118;
	public static readonly LOGICAL = 119;
	public static readonly DISTRIBUTED = 120;
	public static readonly CAST = 121;
	public static readonly TRY_CAST = 122;
	public static readonly SHOW = 123;
	public static readonly TABLES = 124;
	public static readonly SCHEMAS = 125;
	public static readonly CATALOGS = 126;
	public static readonly COLUMNS = 127;
	public static readonly COLUMN = 128;
	public static readonly USE = 129;
	public static readonly PARTITIONS = 130;
	public static readonly FUNCTIONS = 131;
	public static readonly DROP = 132;
	public static readonly UNION = 133;
	public static readonly EXCEPT = 134;
	public static readonly INTERSECT = 135;
	public static readonly TO = 136;
	public static readonly SYSTEM = 137;
	public static readonly BERNOULLI = 138;
	public static readonly POISSONIZED = 139;
	public static readonly TABLESAMPLE = 140;
	public static readonly ALTER = 141;
	public static readonly RENAME = 142;
	public static readonly UNNEST = 143;
	public static readonly ORDINALITY = 144;
	public static readonly ARRAY = 145;
	public static readonly MAP = 146;
	public static readonly SET = 147;
	public static readonly RESET = 148;
	public static readonly SESSION = 149;
	public static readonly DATA = 150;
	public static readonly START = 151;
	public static readonly TRANSACTION = 152;
	public static readonly COMMIT = 153;
	public static readonly ROLLBACK = 154;
	public static readonly WORK = 155;
	public static readonly ISOLATION = 156;
	public static readonly LEVEL = 157;
	public static readonly SERIALIZABLE = 158;
	public static readonly REPEATABLE = 159;
	public static readonly COMMITTED = 160;
	public static readonly UNCOMMITTED = 161;
	public static readonly READ = 162;
	public static readonly WRITE = 163;
	public static readonly ONLY = 164;
	public static readonly CALL = 165;
	public static readonly PREPARE = 166;
	public static readonly DEALLOCATE = 167;
	public static readonly EXECUTE = 168;
	public static readonly INPUT = 169;
	public static readonly OUTPUT = 170;
	public static readonly CASCADE = 171;
	public static readonly RESTRICT = 172;
	public static readonly INCLUDING = 173;
	public static readonly EXCLUDING = 174;
	public static readonly PROPERTIES = 175;
	public static readonly NORMALIZE = 176;
	public static readonly NFD = 177;
	public static readonly NFC = 178;
	public static readonly NFKD = 179;
	public static readonly NFKC = 180;
	public static readonly IF = 181;
	public static readonly NULLIF = 182;
	public static readonly COALESCE = 183;
	public static readonly EQ = 184;
	public static readonly NEQ = 185;
	public static readonly LT = 186;
	public static readonly LTE = 187;
	public static readonly GT = 188;
	public static readonly GTE = 189;
	public static readonly PLUS = 190;
	public static readonly MINUS = 191;
	public static readonly ASTERISK = 192;
	public static readonly SLASH = 193;
	public static readonly PERCENT = 194;
	public static readonly CONCAT = 195;
	public static readonly STRING = 196;
	public static readonly BINARY_LITERAL = 197;
	public static readonly INTEGER_VALUE = 198;
	public static readonly DECIMAL_VALUE = 199;
	public static readonly IDENTIFIER = 200;
	public static readonly DIGIT_IDENTIFIER = 201;
	public static readonly QUOTED_IDENTIFIER = 202;
	public static readonly BACKQUOTED_IDENTIFIER = 203;
	public static readonly TIME_WITH_TIME_ZONE = 204;
	public static readonly TIMESTAMP_WITH_TIME_ZONE = 205;
	public static readonly DOUBLE_PRECISION = 206;
	public static readonly SIMPLE_COMMENT = 207;
	public static readonly BRACKETED_COMMENT = 208;
	public static readonly WS = 209;
	public static readonly SEMICOLON = 210;
	public static readonly UNRECOGNIZED = 211;
	public static readonly DELIMITER = 212;
	public static readonly RULE_multiStatement = 0;
	public static readonly RULE_singleStatement = 1;
	public static readonly RULE_singleExpression = 2;
	public static readonly RULE_statement = 3;
	public static readonly RULE_query = 4;
	public static readonly RULE_presto_with = 5;
	public static readonly RULE_tableElement = 6;
	public static readonly RULE_columnDefinition = 7;
	public static readonly RULE_likeClause = 8;
	public static readonly RULE_tableProperties = 9;
	public static readonly RULE_tableProperty = 10;
	public static readonly RULE_queryNoWith = 11;
	public static readonly RULE_queryTerm = 12;
	public static readonly RULE_queryPrimary = 13;
	public static readonly RULE_sortItem = 14;
	public static readonly RULE_querySpecification = 15;
	public static readonly RULE_groupBy = 16;
	public static readonly RULE_groupingElement = 17;
	public static readonly RULE_groupingExpressions = 18;
	public static readonly RULE_groupingSet = 19;
	public static readonly RULE_namedQuery = 20;
	public static readonly RULE_setQuantifier = 21;
	public static readonly RULE_selectItem = 22;
	public static readonly RULE_relation = 23;
	public static readonly RULE_joinType = 24;
	public static readonly RULE_joinCriteria = 25;
	public static readonly RULE_sampledRelation = 26;
	public static readonly RULE_sampleType = 27;
	public static readonly RULE_aliasedRelation = 28;
	public static readonly RULE_columnAliases = 29;
	public static readonly RULE_relationPrimary = 30;
	public static readonly RULE_expression = 31;
	public static readonly RULE_booleanExpression = 32;
	public static readonly RULE_predicated = 33;
	public static readonly RULE_predicate = 34;
	public static readonly RULE_valueExpression = 35;
	public static readonly RULE_primaryExpression = 36;
	public static readonly RULE_timeZoneSpecifier = 37;
	public static readonly RULE_comparisonOperator = 38;
	public static readonly RULE_comparisonQuantifier = 39;
	public static readonly RULE_booleanValue = 40;
	public static readonly RULE_interval = 41;
	public static readonly RULE_intervalField = 42;
	public static readonly RULE_type = 43;
	public static readonly RULE_typeParameter = 44;
	public static readonly RULE_baseType = 45;
	public static readonly RULE_whenClause = 46;
	public static readonly RULE_filter = 47;
	public static readonly RULE_over = 48;
	public static readonly RULE_windowFrame = 49;
	public static readonly RULE_frameBound = 50;
	public static readonly RULE_explainOption = 51;
	public static readonly RULE_transactionMode = 52;
	public static readonly RULE_levelOfIsolation = 53;
	public static readonly RULE_callArgument = 54;
	public static readonly RULE_privilege = 55;
	public static readonly RULE_qualifiedName = 56;
	public static readonly RULE_identifier = 57;
	public static readonly RULE_quotedIdentifier = 58;
	public static readonly RULE_number = 59;
	public static readonly RULE_nonReserved = 60;
	public static readonly RULE_normalForm = 61;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"multiStatement", "singleStatement", "singleExpression", "statement", 
		"query", "presto_with", "tableElement", "columnDefinition", "likeClause", 
		"tableProperties", "tableProperty", "queryNoWith", "queryTerm", "queryPrimary", 
		"sortItem", "querySpecification", "groupBy", "groupingElement", "groupingExpressions", 
		"groupingSet", "namedQuery", "setQuantifier", "selectItem", "relation", 
		"joinType", "joinCriteria", "sampledRelation", "sampleType", "aliasedRelation", 
		"columnAliases", "relationPrimary", "expression", "booleanExpression", 
		"predicated", "predicate", "valueExpression", "primaryExpression", "timeZoneSpecifier", 
		"comparisonOperator", "comparisonQuantifier", "booleanValue", "interval", 
		"intervalField", "type", "typeParameter", "baseType", "whenClause", "filter", 
		"over", "windowFrame", "frameBound", "explainOption", "transactionMode", 
		"levelOfIsolation", "callArgument", "privilege", "qualifiedName", "identifier", 
		"quotedIdentifier", "number", "nonReserved", "normalForm",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'.'", "'('", "','", "')'", "'?'", "'->'", "'['", "']'", "'=>'", 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "'='", 
		undefined, "'<'", "'<='", "'>'", "'>='", "'+'", "'-'", "'*'", "'/'", "'%'", 
		"'||'", undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "SELECT", "FROM", "ADD", "AS", "ALL", 
		"SOME", "ANY", "DISTINCT", "WHERE", "GROUP", "BY", "GROUPING", "SETS", 
		"CUBE", "ROLLUP", "ORDER", "HAVING", "LIMIT", "AT", "OR", "AND", "IN", 
		"NOT", "NO", "EXISTS", "BETWEEN", "LIKE", "IS", "NULL", "TRUE", "FALSE", 
		"NULLS", "FIRST", "LAST", "ESCAPE", "ASC", "DESC", "SUBSTRING", "POSITION", 
		"FOR", "TINYINT", "SMALLINT", "INTEGER", "DATE", "TIME", "TIMESTAMP", 
		"INTERVAL", "YEAR", "MONTH", "DAY", "HOUR", "MINUTE", "SECOND", "ZONE", 
		"CURRENT_DATE", "CURRENT_TIME", "CURRENT_TIMESTAMP", "LOCALTIME", "LOCALTIMESTAMP", 
		"EXTRACT", "CASE", "WHEN", "THEN", "ELSE", "END", "JOIN", "CROSS", "OUTER", 
		"INNER", "LEFT", "RIGHT", "FULL", "NATURAL", "USING", "ON", "FILTER", 
		"OVER", "PARTITION", "RANGE", "ROWS", "UNBOUNDED", "PRECEDING", "FOLLOWING", 
		"CURRENT", "ROW", "WITH", "RECURSIVE", "VALUES", "CREATE", "SCHEMA", "TABLE", 
		"VIEW", "REPLACE", "INSERT", "DELETE", "INTO", "CONSTRAINT", "DESCRIBE", 
		"GRANT", "REVOKE", "PRIVILEGES", "PUBLIC", "OPTION", "EXPLAIN", "ANALYZE", 
		"FORMAT", "TYPE", "TEXT", "GRAPHVIZ", "LOGICAL", "DISTRIBUTED", "CAST", 
		"TRY_CAST", "SHOW", "TABLES", "SCHEMAS", "CATALOGS", "COLUMNS", "COLUMN", 
		"USE", "PARTITIONS", "FUNCTIONS", "DROP", "UNION", "EXCEPT", "INTERSECT", 
		"TO", "SYSTEM", "BERNOULLI", "POISSONIZED", "TABLESAMPLE", "ALTER", "RENAME", 
		"UNNEST", "ORDINALITY", "ARRAY", "MAP", "SET", "RESET", "SESSION", "DATA", 
		"START", "TRANSACTION", "COMMIT", "ROLLBACK", "WORK", "ISOLATION", "LEVEL", 
		"SERIALIZABLE", "REPEATABLE", "COMMITTED", "UNCOMMITTED", "READ", "WRITE", 
		"ONLY", "CALL", "PREPARE", "DEALLOCATE", "EXECUTE", "INPUT", "OUTPUT", 
		"CASCADE", "RESTRICT", "INCLUDING", "EXCLUDING", "PROPERTIES", "NORMALIZE", 
		"NFD", "NFC", "NFKD", "NFKC", "IF", "NULLIF", "COALESCE", "EQ", "NEQ", 
		"LT", "LTE", "GT", "GTE", "PLUS", "MINUS", "ASTERISK", "SLASH", "PERCENT", 
		"CONCAT", "STRING", "BINARY_LITERAL", "INTEGER_VALUE", "DECIMAL_VALUE", 
		"IDENTIFIER", "DIGIT_IDENTIFIER", "QUOTED_IDENTIFIER", "BACKQUOTED_IDENTIFIER", 
		"TIME_WITH_TIME_ZONE", "TIMESTAMP_WITH_TIME_ZONE", "DOUBLE_PRECISION", 
		"SIMPLE_COMMENT", "BRACKETED_COMMENT", "WS", "SEMICOLON", "UNRECOGNIZED", 
		"DELIMITER",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SqlBaseParser._LITERAL_NAMES, SqlBaseParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SqlBaseParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "SqlBase.g4"; }

	// @Override
	public get ruleNames(): string[] { return SqlBaseParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return SqlBaseParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SqlBaseParser._ATN, this);
	}
	// @RuleVersion(0)
	public multiStatement(): MultiStatementContext {
		let _localctx: MultiStatementContext = new MultiStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SqlBaseParser.RULE_multiStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 124;
			this.statement();
			this.state = 129;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 125;
					this.match(SqlBaseParser.SEMICOLON);
					this.state = 126;
					this.statement();
					}
					}
				}
				this.state = 131;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 133;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SqlBaseParser.SEMICOLON) {
				{
				this.state = 132;
				this.match(SqlBaseParser.SEMICOLON);
				}
			}

			this.state = 135;
			this.match(SqlBaseParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public singleStatement(): SingleStatementContext {
		let _localctx: SingleStatementContext = new SingleStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, SqlBaseParser.RULE_singleStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 137;
			this.statement();
			this.state = 138;
			this.match(SqlBaseParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public singleExpression(): SingleExpressionContext {
		let _localctx: SingleExpressionContext = new SingleExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SqlBaseParser.RULE_singleExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 140;
			this.expression();
			this.state = 141;
			this.match(SqlBaseParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SqlBaseParser.RULE_statement);
		let _la: number;
		try {
			this.state = 495;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				_localctx = new StatementDefaultContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 143;
				this.query();
				}
				break;

			case 2:
				_localctx = new UseContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 144;
				this.match(SqlBaseParser.USE);
				this.state = 145;
				(_localctx as UseContext)._schema = this.identifier();
				}
				break;

			case 3:
				_localctx = new UseContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 146;
				this.match(SqlBaseParser.USE);
				this.state = 147;
				(_localctx as UseContext)._catalog = this.identifier();
				this.state = 148;
				this.match(SqlBaseParser.T__0);
				this.state = 149;
				(_localctx as UseContext)._schema = this.identifier();
				}
				break;

			case 4:
				_localctx = new CreateSchemaContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 151;
				this.match(SqlBaseParser.CREATE);
				this.state = 152;
				this.match(SqlBaseParser.SCHEMA);
				this.state = 156;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
				case 1:
					{
					this.state = 153;
					this.match(SqlBaseParser.IF);
					this.state = 154;
					this.match(SqlBaseParser.NOT);
					this.state = 155;
					this.match(SqlBaseParser.EXISTS);
					}
					break;
				}
				this.state = 158;
				this.qualifiedName();
				this.state = 161;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.WITH) {
					{
					this.state = 159;
					this.match(SqlBaseParser.WITH);
					this.state = 160;
					this.tableProperties();
					}
				}

				}
				break;

			case 5:
				_localctx = new DropSchemaContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 163;
				this.match(SqlBaseParser.DROP);
				this.state = 164;
				this.match(SqlBaseParser.SCHEMA);
				this.state = 167;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
				case 1:
					{
					this.state = 165;
					this.match(SqlBaseParser.IF);
					this.state = 166;
					this.match(SqlBaseParser.EXISTS);
					}
					break;
				}
				this.state = 169;
				this.qualifiedName();
				this.state = 171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.CASCADE || _la === SqlBaseParser.RESTRICT) {
					{
					this.state = 170;
					_la = this._input.LA(1);
					if (!(_la === SqlBaseParser.CASCADE || _la === SqlBaseParser.RESTRICT)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				}
				break;

			case 6:
				_localctx = new RenameSchemaContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 173;
				this.match(SqlBaseParser.ALTER);
				this.state = 174;
				this.match(SqlBaseParser.SCHEMA);
				this.state = 175;
				this.qualifiedName();
				this.state = 176;
				this.match(SqlBaseParser.RENAME);
				this.state = 177;
				this.match(SqlBaseParser.TO);
				this.state = 178;
				this.identifier();
				}
				break;

			case 7:
				_localctx = new CreateTableAsSelectContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 180;
				this.match(SqlBaseParser.CREATE);
				this.state = 181;
				this.match(SqlBaseParser.TABLE);
				this.state = 185;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
				case 1:
					{
					this.state = 182;
					this.match(SqlBaseParser.IF);
					this.state = 183;
					this.match(SqlBaseParser.NOT);
					this.state = 184;
					this.match(SqlBaseParser.EXISTS);
					}
					break;
				}
				this.state = 187;
				this.qualifiedName();
				this.state = 190;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.WITH) {
					{
					this.state = 188;
					this.match(SqlBaseParser.WITH);
					this.state = 189;
					this.tableProperties();
					}
				}

				this.state = 192;
				this.match(SqlBaseParser.AS);
				this.state = 193;
				this.query();
				this.state = 199;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.WITH) {
					{
					this.state = 194;
					this.match(SqlBaseParser.WITH);
					this.state = 196;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === SqlBaseParser.NO) {
						{
						this.state = 195;
						this.match(SqlBaseParser.NO);
						}
					}

					this.state = 198;
					this.match(SqlBaseParser.DATA);
					}
				}

				}
				break;

			case 8:
				_localctx = new CreateTableContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 201;
				this.match(SqlBaseParser.CREATE);
				this.state = 202;
				this.match(SqlBaseParser.TABLE);
				this.state = 206;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
				case 1:
					{
					this.state = 203;
					this.match(SqlBaseParser.IF);
					this.state = 204;
					this.match(SqlBaseParser.NOT);
					this.state = 205;
					this.match(SqlBaseParser.EXISTS);
					}
					break;
				}
				this.state = 208;
				this.qualifiedName();
				this.state = 209;
				this.match(SqlBaseParser.T__1);
				this.state = 210;
				this.tableElement();
				this.state = 215;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SqlBaseParser.T__2) {
					{
					{
					this.state = 211;
					this.match(SqlBaseParser.T__2);
					this.state = 212;
					this.tableElement();
					}
					}
					this.state = 217;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 218;
				this.match(SqlBaseParser.T__3);
				this.state = 221;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.WITH) {
					{
					this.state = 219;
					this.match(SqlBaseParser.WITH);
					this.state = 220;
					this.tableProperties();
					}
				}

				}
				break;

			case 9:
				_localctx = new DropTableContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 223;
				this.match(SqlBaseParser.DROP);
				this.state = 224;
				this.match(SqlBaseParser.TABLE);
				this.state = 227;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
				case 1:
					{
					this.state = 225;
					this.match(SqlBaseParser.IF);
					this.state = 226;
					this.match(SqlBaseParser.EXISTS);
					}
					break;
				}
				this.state = 229;
				this.qualifiedName();
				}
				break;

			case 10:
				_localctx = new InsertIntoContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 230;
				this.match(SqlBaseParser.INSERT);
				this.state = 231;
				this.match(SqlBaseParser.INTO);
				this.state = 232;
				this.qualifiedName();
				this.state = 234;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
				case 1:
					{
					this.state = 233;
					this.columnAliases();
					}
					break;
				}
				this.state = 236;
				this.query();
				}
				break;

			case 11:
				_localctx = new DeleteContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 238;
				this.match(SqlBaseParser.DELETE);
				this.state = 239;
				this.match(SqlBaseParser.FROM);
				this.state = 240;
				this.qualifiedName();
				this.state = 243;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.WHERE) {
					{
					this.state = 241;
					this.match(SqlBaseParser.WHERE);
					this.state = 242;
					this.booleanExpression(0);
					}
				}

				}
				break;

			case 12:
				_localctx = new RenameTableContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 245;
				this.match(SqlBaseParser.ALTER);
				this.state = 246;
				this.match(SqlBaseParser.TABLE);
				this.state = 247;
				(_localctx as RenameTableContext)._from = this.qualifiedName();
				this.state = 248;
				this.match(SqlBaseParser.RENAME);
				this.state = 249;
				this.match(SqlBaseParser.TO);
				this.state = 250;
				(_localctx as RenameTableContext)._to = this.qualifiedName();
				}
				break;

			case 13:
				_localctx = new RenameColumnContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 252;
				this.match(SqlBaseParser.ALTER);
				this.state = 253;
				this.match(SqlBaseParser.TABLE);
				this.state = 254;
				(_localctx as RenameColumnContext)._tableName = this.qualifiedName();
				this.state = 255;
				this.match(SqlBaseParser.RENAME);
				this.state = 256;
				this.match(SqlBaseParser.COLUMN);
				this.state = 257;
				(_localctx as RenameColumnContext)._from = this.identifier();
				this.state = 258;
				this.match(SqlBaseParser.TO);
				this.state = 259;
				(_localctx as RenameColumnContext)._to = this.identifier();
				}
				break;

			case 14:
				_localctx = new AddColumnContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 261;
				this.match(SqlBaseParser.ALTER);
				this.state = 262;
				this.match(SqlBaseParser.TABLE);
				this.state = 263;
				(_localctx as AddColumnContext)._tableName = this.qualifiedName();
				this.state = 264;
				this.match(SqlBaseParser.ADD);
				this.state = 265;
				this.match(SqlBaseParser.COLUMN);
				this.state = 266;
				(_localctx as AddColumnContext)._column = this.columnDefinition();
				}
				break;

			case 15:
				_localctx = new CreateViewContext(_localctx);
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 268;
				this.match(SqlBaseParser.CREATE);
				this.state = 271;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.OR) {
					{
					this.state = 269;
					this.match(SqlBaseParser.OR);
					this.state = 270;
					this.match(SqlBaseParser.REPLACE);
					}
				}

				this.state = 273;
				this.match(SqlBaseParser.VIEW);
				this.state = 274;
				this.qualifiedName();
				this.state = 275;
				this.match(SqlBaseParser.AS);
				this.state = 276;
				this.query();
				}
				break;

			case 16:
				_localctx = new DropViewContext(_localctx);
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 278;
				this.match(SqlBaseParser.DROP);
				this.state = 279;
				this.match(SqlBaseParser.VIEW);
				this.state = 282;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
				case 1:
					{
					this.state = 280;
					this.match(SqlBaseParser.IF);
					this.state = 281;
					this.match(SqlBaseParser.EXISTS);
					}
					break;
				}
				this.state = 284;
				this.qualifiedName();
				}
				break;

			case 17:
				_localctx = new CallContext(_localctx);
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 285;
				this.match(SqlBaseParser.CALL);
				this.state = 286;
				this.qualifiedName();
				this.state = 287;
				this.match(SqlBaseParser.T__1);
				this.state = 296;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SqlBaseParser.T__1) | (1 << SqlBaseParser.T__4) | (1 << SqlBaseParser.ADD))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SqlBaseParser.NOT - 32)) | (1 << (SqlBaseParser.NO - 32)) | (1 << (SqlBaseParser.EXISTS - 32)) | (1 << (SqlBaseParser.NULL - 32)) | (1 << (SqlBaseParser.TRUE - 32)) | (1 << (SqlBaseParser.FALSE - 32)) | (1 << (SqlBaseParser.SUBSTRING - 32)) | (1 << (SqlBaseParser.POSITION - 32)) | (1 << (SqlBaseParser.TINYINT - 32)) | (1 << (SqlBaseParser.SMALLINT - 32)) | (1 << (SqlBaseParser.INTEGER - 32)) | (1 << (SqlBaseParser.DATE - 32)) | (1 << (SqlBaseParser.TIME - 32)) | (1 << (SqlBaseParser.TIMESTAMP - 32)) | (1 << (SqlBaseParser.INTERVAL - 32)) | (1 << (SqlBaseParser.YEAR - 32)) | (1 << (SqlBaseParser.MONTH - 32)) | (1 << (SqlBaseParser.DAY - 32)) | (1 << (SqlBaseParser.HOUR - 32)) | (1 << (SqlBaseParser.MINUTE - 32)) | (1 << (SqlBaseParser.SECOND - 32)) | (1 << (SqlBaseParser.ZONE - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (SqlBaseParser.CURRENT_DATE - 64)) | (1 << (SqlBaseParser.CURRENT_TIME - 64)) | (1 << (SqlBaseParser.CURRENT_TIMESTAMP - 64)) | (1 << (SqlBaseParser.LOCALTIME - 64)) | (1 << (SqlBaseParser.LOCALTIMESTAMP - 64)) | (1 << (SqlBaseParser.EXTRACT - 64)) | (1 << (SqlBaseParser.CASE - 64)) | (1 << (SqlBaseParser.FILTER - 64)) | (1 << (SqlBaseParser.OVER - 64)) | (1 << (SqlBaseParser.PARTITION - 64)) | (1 << (SqlBaseParser.RANGE - 64)) | (1 << (SqlBaseParser.ROWS - 64)) | (1 << (SqlBaseParser.PRECEDING - 64)) | (1 << (SqlBaseParser.FOLLOWING - 64)) | (1 << (SqlBaseParser.CURRENT - 64)) | (1 << (SqlBaseParser.ROW - 64)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (SqlBaseParser.SCHEMA - 99)) | (1 << (SqlBaseParser.VIEW - 99)) | (1 << (SqlBaseParser.REPLACE - 99)) | (1 << (SqlBaseParser.GRANT - 99)) | (1 << (SqlBaseParser.REVOKE - 99)) | (1 << (SqlBaseParser.PRIVILEGES - 99)) | (1 << (SqlBaseParser.PUBLIC - 99)) | (1 << (SqlBaseParser.OPTION - 99)) | (1 << (SqlBaseParser.EXPLAIN - 99)) | (1 << (SqlBaseParser.ANALYZE - 99)) | (1 << (SqlBaseParser.FORMAT - 99)) | (1 << (SqlBaseParser.TYPE - 99)) | (1 << (SqlBaseParser.TEXT - 99)) | (1 << (SqlBaseParser.GRAPHVIZ - 99)) | (1 << (SqlBaseParser.LOGICAL - 99)) | (1 << (SqlBaseParser.DISTRIBUTED - 99)) | (1 << (SqlBaseParser.CAST - 99)) | (1 << (SqlBaseParser.TRY_CAST - 99)) | (1 << (SqlBaseParser.SHOW - 99)) | (1 << (SqlBaseParser.TABLES - 99)) | (1 << (SqlBaseParser.SCHEMAS - 99)) | (1 << (SqlBaseParser.CATALOGS - 99)) | (1 << (SqlBaseParser.COLUMNS - 99)) | (1 << (SqlBaseParser.COLUMN - 99)) | (1 << (SqlBaseParser.USE - 99)) | (1 << (SqlBaseParser.PARTITIONS - 99)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (SqlBaseParser.FUNCTIONS - 131)) | (1 << (SqlBaseParser.TO - 131)) | (1 << (SqlBaseParser.SYSTEM - 131)) | (1 << (SqlBaseParser.BERNOULLI - 131)) | (1 << (SqlBaseParser.POISSONIZED - 131)) | (1 << (SqlBaseParser.TABLESAMPLE - 131)) | (1 << (SqlBaseParser.ARRAY - 131)) | (1 << (SqlBaseParser.MAP - 131)) | (1 << (SqlBaseParser.SET - 131)) | (1 << (SqlBaseParser.RESET - 131)) | (1 << (SqlBaseParser.SESSION - 131)) | (1 << (SqlBaseParser.DATA - 131)) | (1 << (SqlBaseParser.START - 131)) | (1 << (SqlBaseParser.TRANSACTION - 131)) | (1 << (SqlBaseParser.COMMIT - 131)) | (1 << (SqlBaseParser.ROLLBACK - 131)) | (1 << (SqlBaseParser.WORK - 131)) | (1 << (SqlBaseParser.ISOLATION - 131)) | (1 << (SqlBaseParser.LEVEL - 131)) | (1 << (SqlBaseParser.SERIALIZABLE - 131)) | (1 << (SqlBaseParser.REPEATABLE - 131)) | (1 << (SqlBaseParser.COMMITTED - 131)) | (1 << (SqlBaseParser.UNCOMMITTED - 131)) | (1 << (SqlBaseParser.READ - 131)))) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & ((1 << (SqlBaseParser.WRITE - 163)) | (1 << (SqlBaseParser.ONLY - 163)) | (1 << (SqlBaseParser.CALL - 163)) | (1 << (SqlBaseParser.INPUT - 163)) | (1 << (SqlBaseParser.OUTPUT - 163)) | (1 << (SqlBaseParser.CASCADE - 163)) | (1 << (SqlBaseParser.RESTRICT - 163)) | (1 << (SqlBaseParser.INCLUDING - 163)) | (1 << (SqlBaseParser.EXCLUDING - 163)) | (1 << (SqlBaseParser.PROPERTIES - 163)) | (1 << (SqlBaseParser.NORMALIZE - 163)) | (1 << (SqlBaseParser.NFD - 163)) | (1 << (SqlBaseParser.NFC - 163)) | (1 << (SqlBaseParser.NFKD - 163)) | (1 << (SqlBaseParser.NFKC - 163)) | (1 << (SqlBaseParser.IF - 163)) | (1 << (SqlBaseParser.NULLIF - 163)) | (1 << (SqlBaseParser.COALESCE - 163)) | (1 << (SqlBaseParser.PLUS - 163)) | (1 << (SqlBaseParser.MINUS - 163)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (SqlBaseParser.STRING - 196)) | (1 << (SqlBaseParser.BINARY_LITERAL - 196)) | (1 << (SqlBaseParser.INTEGER_VALUE - 196)) | (1 << (SqlBaseParser.DECIMAL_VALUE - 196)) | (1 << (SqlBaseParser.IDENTIFIER - 196)) | (1 << (SqlBaseParser.DIGIT_IDENTIFIER - 196)) | (1 << (SqlBaseParser.QUOTED_IDENTIFIER - 196)) | (1 << (SqlBaseParser.BACKQUOTED_IDENTIFIER - 196)) | (1 << (SqlBaseParser.DOUBLE_PRECISION - 196)))) !== 0)) {
					{
					this.state = 288;
					this.callArgument();
					this.state = 293;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SqlBaseParser.T__2) {
						{
						{
						this.state = 289;
						this.match(SqlBaseParser.T__2);
						this.state = 290;
						this.callArgument();
						}
						}
						this.state = 295;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 298;
				this.match(SqlBaseParser.T__3);
				}
				break;

			case 18:
				_localctx = new GrantContext(_localctx);
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 300;
				this.match(SqlBaseParser.GRANT);
				this.state = 311;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SqlBaseParser.SELECT:
				case SqlBaseParser.ADD:
				case SqlBaseParser.NO:
				case SqlBaseParser.SUBSTRING:
				case SqlBaseParser.POSITION:
				case SqlBaseParser.TINYINT:
				case SqlBaseParser.SMALLINT:
				case SqlBaseParser.INTEGER:
				case SqlBaseParser.DATE:
				case SqlBaseParser.TIME:
				case SqlBaseParser.TIMESTAMP:
				case SqlBaseParser.INTERVAL:
				case SqlBaseParser.YEAR:
				case SqlBaseParser.MONTH:
				case SqlBaseParser.DAY:
				case SqlBaseParser.HOUR:
				case SqlBaseParser.MINUTE:
				case SqlBaseParser.SECOND:
				case SqlBaseParser.ZONE:
				case SqlBaseParser.FILTER:
				case SqlBaseParser.OVER:
				case SqlBaseParser.PARTITION:
				case SqlBaseParser.RANGE:
				case SqlBaseParser.ROWS:
				case SqlBaseParser.PRECEDING:
				case SqlBaseParser.FOLLOWING:
				case SqlBaseParser.CURRENT:
				case SqlBaseParser.ROW:
				case SqlBaseParser.SCHEMA:
				case SqlBaseParser.VIEW:
				case SqlBaseParser.REPLACE:
				case SqlBaseParser.INSERT:
				case SqlBaseParser.DELETE:
				case SqlBaseParser.GRANT:
				case SqlBaseParser.REVOKE:
				case SqlBaseParser.PRIVILEGES:
				case SqlBaseParser.PUBLIC:
				case SqlBaseParser.OPTION:
				case SqlBaseParser.EXPLAIN:
				case SqlBaseParser.ANALYZE:
				case SqlBaseParser.FORMAT:
				case SqlBaseParser.TYPE:
				case SqlBaseParser.TEXT:
				case SqlBaseParser.GRAPHVIZ:
				case SqlBaseParser.LOGICAL:
				case SqlBaseParser.DISTRIBUTED:
				case SqlBaseParser.SHOW:
				case SqlBaseParser.TABLES:
				case SqlBaseParser.SCHEMAS:
				case SqlBaseParser.CATALOGS:
				case SqlBaseParser.COLUMNS:
				case SqlBaseParser.COLUMN:
				case SqlBaseParser.USE:
				case SqlBaseParser.PARTITIONS:
				case SqlBaseParser.FUNCTIONS:
				case SqlBaseParser.TO:
				case SqlBaseParser.SYSTEM:
				case SqlBaseParser.BERNOULLI:
				case SqlBaseParser.POISSONIZED:
				case SqlBaseParser.TABLESAMPLE:
				case SqlBaseParser.ARRAY:
				case SqlBaseParser.MAP:
				case SqlBaseParser.SET:
				case SqlBaseParser.RESET:
				case SqlBaseParser.SESSION:
				case SqlBaseParser.DATA:
				case SqlBaseParser.START:
				case SqlBaseParser.TRANSACTION:
				case SqlBaseParser.COMMIT:
				case SqlBaseParser.ROLLBACK:
				case SqlBaseParser.WORK:
				case SqlBaseParser.ISOLATION:
				case SqlBaseParser.LEVEL:
				case SqlBaseParser.SERIALIZABLE:
				case SqlBaseParser.REPEATABLE:
				case SqlBaseParser.COMMITTED:
				case SqlBaseParser.UNCOMMITTED:
				case SqlBaseParser.READ:
				case SqlBaseParser.WRITE:
				case SqlBaseParser.ONLY:
				case SqlBaseParser.CALL:
				case SqlBaseParser.INPUT:
				case SqlBaseParser.OUTPUT:
				case SqlBaseParser.CASCADE:
				case SqlBaseParser.RESTRICT:
				case SqlBaseParser.INCLUDING:
				case SqlBaseParser.EXCLUDING:
				case SqlBaseParser.PROPERTIES:
				case SqlBaseParser.NFD:
				case SqlBaseParser.NFC:
				case SqlBaseParser.NFKD:
				case SqlBaseParser.NFKC:
				case SqlBaseParser.IF:
				case SqlBaseParser.NULLIF:
				case SqlBaseParser.COALESCE:
				case SqlBaseParser.IDENTIFIER:
				case SqlBaseParser.DIGIT_IDENTIFIER:
				case SqlBaseParser.QUOTED_IDENTIFIER:
				case SqlBaseParser.BACKQUOTED_IDENTIFIER:
					{
					this.state = 301;
					this.privilege();
					this.state = 306;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SqlBaseParser.T__2) {
						{
						{
						this.state = 302;
						this.match(SqlBaseParser.T__2);
						this.state = 303;
						this.privilege();
						}
						}
						this.state = 308;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;
				case SqlBaseParser.ALL:
					{
					this.state = 309;
					this.match(SqlBaseParser.ALL);
					this.state = 310;
					this.match(SqlBaseParser.PRIVILEGES);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 313;
				this.match(SqlBaseParser.ON);
				this.state = 315;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.TABLE) {
					{
					this.state = 314;
					this.match(SqlBaseParser.TABLE);
					}
				}

				this.state = 317;
				this.qualifiedName();
				this.state = 318;
				this.match(SqlBaseParser.TO);
				this.state = 319;
				(_localctx as GrantContext)._grantee = this.identifier();
				this.state = 323;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.WITH) {
					{
					this.state = 320;
					this.match(SqlBaseParser.WITH);
					this.state = 321;
					this.match(SqlBaseParser.GRANT);
					this.state = 322;
					this.match(SqlBaseParser.OPTION);
					}
				}

				}
				break;

			case 19:
				_localctx = new RevokeContext(_localctx);
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 325;
				this.match(SqlBaseParser.REVOKE);
				this.state = 329;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
				case 1:
					{
					this.state = 326;
					this.match(SqlBaseParser.GRANT);
					this.state = 327;
					this.match(SqlBaseParser.OPTION);
					this.state = 328;
					this.match(SqlBaseParser.FOR);
					}
					break;
				}
				this.state = 341;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SqlBaseParser.SELECT:
				case SqlBaseParser.ADD:
				case SqlBaseParser.NO:
				case SqlBaseParser.SUBSTRING:
				case SqlBaseParser.POSITION:
				case SqlBaseParser.TINYINT:
				case SqlBaseParser.SMALLINT:
				case SqlBaseParser.INTEGER:
				case SqlBaseParser.DATE:
				case SqlBaseParser.TIME:
				case SqlBaseParser.TIMESTAMP:
				case SqlBaseParser.INTERVAL:
				case SqlBaseParser.YEAR:
				case SqlBaseParser.MONTH:
				case SqlBaseParser.DAY:
				case SqlBaseParser.HOUR:
				case SqlBaseParser.MINUTE:
				case SqlBaseParser.SECOND:
				case SqlBaseParser.ZONE:
				case SqlBaseParser.FILTER:
				case SqlBaseParser.OVER:
				case SqlBaseParser.PARTITION:
				case SqlBaseParser.RANGE:
				case SqlBaseParser.ROWS:
				case SqlBaseParser.PRECEDING:
				case SqlBaseParser.FOLLOWING:
				case SqlBaseParser.CURRENT:
				case SqlBaseParser.ROW:
				case SqlBaseParser.SCHEMA:
				case SqlBaseParser.VIEW:
				case SqlBaseParser.REPLACE:
				case SqlBaseParser.INSERT:
				case SqlBaseParser.DELETE:
				case SqlBaseParser.GRANT:
				case SqlBaseParser.REVOKE:
				case SqlBaseParser.PRIVILEGES:
				case SqlBaseParser.PUBLIC:
				case SqlBaseParser.OPTION:
				case SqlBaseParser.EXPLAIN:
				case SqlBaseParser.ANALYZE:
				case SqlBaseParser.FORMAT:
				case SqlBaseParser.TYPE:
				case SqlBaseParser.TEXT:
				case SqlBaseParser.GRAPHVIZ:
				case SqlBaseParser.LOGICAL:
				case SqlBaseParser.DISTRIBUTED:
				case SqlBaseParser.SHOW:
				case SqlBaseParser.TABLES:
				case SqlBaseParser.SCHEMAS:
				case SqlBaseParser.CATALOGS:
				case SqlBaseParser.COLUMNS:
				case SqlBaseParser.COLUMN:
				case SqlBaseParser.USE:
				case SqlBaseParser.PARTITIONS:
				case SqlBaseParser.FUNCTIONS:
				case SqlBaseParser.TO:
				case SqlBaseParser.SYSTEM:
				case SqlBaseParser.BERNOULLI:
				case SqlBaseParser.POISSONIZED:
				case SqlBaseParser.TABLESAMPLE:
				case SqlBaseParser.ARRAY:
				case SqlBaseParser.MAP:
				case SqlBaseParser.SET:
				case SqlBaseParser.RESET:
				case SqlBaseParser.SESSION:
				case SqlBaseParser.DATA:
				case SqlBaseParser.START:
				case SqlBaseParser.TRANSACTION:
				case SqlBaseParser.COMMIT:
				case SqlBaseParser.ROLLBACK:
				case SqlBaseParser.WORK:
				case SqlBaseParser.ISOLATION:
				case SqlBaseParser.LEVEL:
				case SqlBaseParser.SERIALIZABLE:
				case SqlBaseParser.REPEATABLE:
				case SqlBaseParser.COMMITTED:
				case SqlBaseParser.UNCOMMITTED:
				case SqlBaseParser.READ:
				case SqlBaseParser.WRITE:
				case SqlBaseParser.ONLY:
				case SqlBaseParser.CALL:
				case SqlBaseParser.INPUT:
				case SqlBaseParser.OUTPUT:
				case SqlBaseParser.CASCADE:
				case SqlBaseParser.RESTRICT:
				case SqlBaseParser.INCLUDING:
				case SqlBaseParser.EXCLUDING:
				case SqlBaseParser.PROPERTIES:
				case SqlBaseParser.NFD:
				case SqlBaseParser.NFC:
				case SqlBaseParser.NFKD:
				case SqlBaseParser.NFKC:
				case SqlBaseParser.IF:
				case SqlBaseParser.NULLIF:
				case SqlBaseParser.COALESCE:
				case SqlBaseParser.IDENTIFIER:
				case SqlBaseParser.DIGIT_IDENTIFIER:
				case SqlBaseParser.QUOTED_IDENTIFIER:
				case SqlBaseParser.BACKQUOTED_IDENTIFIER:
					{
					this.state = 331;
					this.privilege();
					this.state = 336;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SqlBaseParser.T__2) {
						{
						{
						this.state = 332;
						this.match(SqlBaseParser.T__2);
						this.state = 333;
						this.privilege();
						}
						}
						this.state = 338;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;
				case SqlBaseParser.ALL:
					{
					this.state = 339;
					this.match(SqlBaseParser.ALL);
					this.state = 340;
					this.match(SqlBaseParser.PRIVILEGES);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 343;
				this.match(SqlBaseParser.ON);
				this.state = 345;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.TABLE) {
					{
					this.state = 344;
					this.match(SqlBaseParser.TABLE);
					}
				}

				this.state = 347;
				this.qualifiedName();
				this.state = 348;
				this.match(SqlBaseParser.FROM);
				this.state = 349;
				(_localctx as RevokeContext)._grantee = this.identifier();
				}
				break;

			case 20:
				_localctx = new ExplainContext(_localctx);
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 351;
				this.match(SqlBaseParser.EXPLAIN);
				this.state = 353;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.ANALYZE) {
					{
					this.state = 352;
					this.match(SqlBaseParser.ANALYZE);
					}
				}

				this.state = 366;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
				case 1:
					{
					this.state = 355;
					this.match(SqlBaseParser.T__1);
					this.state = 356;
					this.explainOption();
					this.state = 361;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SqlBaseParser.T__2) {
						{
						{
						this.state = 357;
						this.match(SqlBaseParser.T__2);
						this.state = 358;
						this.explainOption();
						}
						}
						this.state = 363;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 364;
					this.match(SqlBaseParser.T__3);
					}
					break;
				}
				this.state = 368;
				this.statement();
				}
				break;

			case 21:
				_localctx = new ShowCreateTableContext(_localctx);
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 369;
				this.match(SqlBaseParser.SHOW);
				this.state = 370;
				this.match(SqlBaseParser.CREATE);
				this.state = 371;
				this.match(SqlBaseParser.TABLE);
				this.state = 372;
				this.qualifiedName();
				}
				break;

			case 22:
				_localctx = new ShowCreateViewContext(_localctx);
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 373;
				this.match(SqlBaseParser.SHOW);
				this.state = 374;
				this.match(SqlBaseParser.CREATE);
				this.state = 375;
				this.match(SqlBaseParser.VIEW);
				this.state = 376;
				this.qualifiedName();
				}
				break;

			case 23:
				_localctx = new ShowTablesContext(_localctx);
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 377;
				this.match(SqlBaseParser.SHOW);
				this.state = 378;
				this.match(SqlBaseParser.TABLES);
				this.state = 381;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.FROM || _la === SqlBaseParser.IN) {
					{
					this.state = 379;
					_la = this._input.LA(1);
					if (!(_la === SqlBaseParser.FROM || _la === SqlBaseParser.IN)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 380;
					this.qualifiedName();
					}
				}

				this.state = 385;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.LIKE) {
					{
					this.state = 383;
					this.match(SqlBaseParser.LIKE);
					this.state = 384;
					(_localctx as ShowTablesContext)._pattern = this.match(SqlBaseParser.STRING);
					}
				}

				}
				break;

			case 24:
				_localctx = new ShowSchemasContext(_localctx);
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 387;
				this.match(SqlBaseParser.SHOW);
				this.state = 388;
				this.match(SqlBaseParser.SCHEMAS);
				this.state = 391;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.FROM || _la === SqlBaseParser.IN) {
					{
					this.state = 389;
					_la = this._input.LA(1);
					if (!(_la === SqlBaseParser.FROM || _la === SqlBaseParser.IN)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 390;
					this.identifier();
					}
				}

				this.state = 395;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.LIKE) {
					{
					this.state = 393;
					this.match(SqlBaseParser.LIKE);
					this.state = 394;
					(_localctx as ShowSchemasContext)._pattern = this.match(SqlBaseParser.STRING);
					}
				}

				}
				break;

			case 25:
				_localctx = new ShowCatalogsContext(_localctx);
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 397;
				this.match(SqlBaseParser.SHOW);
				this.state = 398;
				this.match(SqlBaseParser.CATALOGS);
				this.state = 401;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.LIKE) {
					{
					this.state = 399;
					this.match(SqlBaseParser.LIKE);
					this.state = 400;
					(_localctx as ShowCatalogsContext)._pattern = this.match(SqlBaseParser.STRING);
					}
				}

				}
				break;

			case 26:
				_localctx = new ShowColumnsContext(_localctx);
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 403;
				this.match(SqlBaseParser.SHOW);
				this.state = 404;
				this.match(SqlBaseParser.COLUMNS);
				this.state = 405;
				_la = this._input.LA(1);
				if (!(_la === SqlBaseParser.FROM || _la === SqlBaseParser.IN)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 406;
				this.qualifiedName();
				}
				break;

			case 27:
				_localctx = new ShowColumnsContext(_localctx);
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 407;
				this.match(SqlBaseParser.DESCRIBE);
				this.state = 408;
				this.qualifiedName();
				}
				break;

			case 28:
				_localctx = new ShowColumnsContext(_localctx);
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 409;
				this.match(SqlBaseParser.DESC);
				this.state = 410;
				this.qualifiedName();
				}
				break;

			case 29:
				_localctx = new ShowFunctionsContext(_localctx);
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 411;
				this.match(SqlBaseParser.SHOW);
				this.state = 412;
				this.match(SqlBaseParser.FUNCTIONS);
				}
				break;

			case 30:
				_localctx = new ShowSessionContext(_localctx);
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 413;
				this.match(SqlBaseParser.SHOW);
				this.state = 414;
				this.match(SqlBaseParser.SESSION);
				}
				break;

			case 31:
				_localctx = new SetSessionContext(_localctx);
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 415;
				this.match(SqlBaseParser.SET);
				this.state = 416;
				this.match(SqlBaseParser.SESSION);
				this.state = 417;
				this.qualifiedName();
				this.state = 418;
				this.match(SqlBaseParser.EQ);
				this.state = 419;
				this.expression();
				}
				break;

			case 32:
				_localctx = new ResetSessionContext(_localctx);
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 421;
				this.match(SqlBaseParser.RESET);
				this.state = 422;
				this.match(SqlBaseParser.SESSION);
				this.state = 423;
				this.qualifiedName();
				}
				break;

			case 33:
				_localctx = new StartTransactionContext(_localctx);
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 424;
				this.match(SqlBaseParser.START);
				this.state = 425;
				this.match(SqlBaseParser.TRANSACTION);
				this.state = 434;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.ISOLATION || _la === SqlBaseParser.READ) {
					{
					this.state = 426;
					this.transactionMode();
					this.state = 431;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SqlBaseParser.T__2) {
						{
						{
						this.state = 427;
						this.match(SqlBaseParser.T__2);
						this.state = 428;
						this.transactionMode();
						}
						}
						this.state = 433;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				}
				break;

			case 34:
				_localctx = new CommitContext(_localctx);
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 436;
				this.match(SqlBaseParser.COMMIT);
				this.state = 438;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.WORK) {
					{
					this.state = 437;
					this.match(SqlBaseParser.WORK);
					}
				}

				}
				break;

			case 35:
				_localctx = new RollbackContext(_localctx);
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 440;
				this.match(SqlBaseParser.ROLLBACK);
				this.state = 442;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.WORK) {
					{
					this.state = 441;
					this.match(SqlBaseParser.WORK);
					}
				}

				}
				break;

			case 36:
				_localctx = new ShowPartitionsContext(_localctx);
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 444;
				this.match(SqlBaseParser.SHOW);
				this.state = 445;
				this.match(SqlBaseParser.PARTITIONS);
				this.state = 446;
				_la = this._input.LA(1);
				if (!(_la === SqlBaseParser.FROM || _la === SqlBaseParser.IN)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 447;
				this.qualifiedName();
				this.state = 450;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.WHERE) {
					{
					this.state = 448;
					this.match(SqlBaseParser.WHERE);
					this.state = 449;
					this.booleanExpression(0);
					}
				}

				this.state = 462;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.ORDER) {
					{
					this.state = 452;
					this.match(SqlBaseParser.ORDER);
					this.state = 453;
					this.match(SqlBaseParser.BY);
					this.state = 454;
					this.sortItem();
					this.state = 459;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SqlBaseParser.T__2) {
						{
						{
						this.state = 455;
						this.match(SqlBaseParser.T__2);
						this.state = 456;
						this.sortItem();
						}
						}
						this.state = 461;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 466;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.LIMIT) {
					{
					this.state = 464;
					this.match(SqlBaseParser.LIMIT);
					this.state = 465;
					(_localctx as ShowPartitionsContext)._limit = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === SqlBaseParser.ALL || _la === SqlBaseParser.INTEGER_VALUE)) {
						(_localctx as ShowPartitionsContext)._limit = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				}
				break;

			case 37:
				_localctx = new PrepareContext(_localctx);
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 468;
				this.match(SqlBaseParser.PREPARE);
				this.state = 469;
				this.identifier();
				this.state = 470;
				this.match(SqlBaseParser.FROM);
				this.state = 471;
				this.statement();
				}
				break;

			case 38:
				_localctx = new DeallocateContext(_localctx);
				this.enterOuterAlt(_localctx, 38);
				{
				this.state = 473;
				this.match(SqlBaseParser.DEALLOCATE);
				this.state = 474;
				this.match(SqlBaseParser.PREPARE);
				this.state = 475;
				this.identifier();
				}
				break;

			case 39:
				_localctx = new ExecuteContext(_localctx);
				this.enterOuterAlt(_localctx, 39);
				{
				this.state = 476;
				this.match(SqlBaseParser.EXECUTE);
				this.state = 477;
				this.identifier();
				this.state = 487;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.USING) {
					{
					this.state = 478;
					this.match(SqlBaseParser.USING);
					this.state = 479;
					this.expression();
					this.state = 484;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SqlBaseParser.T__2) {
						{
						{
						this.state = 480;
						this.match(SqlBaseParser.T__2);
						this.state = 481;
						this.expression();
						}
						}
						this.state = 486;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				}
				break;

			case 40:
				_localctx = new DescribeInputContext(_localctx);
				this.enterOuterAlt(_localctx, 40);
				{
				this.state = 489;
				this.match(SqlBaseParser.DESCRIBE);
				this.state = 490;
				this.match(SqlBaseParser.INPUT);
				this.state = 491;
				this.identifier();
				}
				break;

			case 41:
				_localctx = new DescribeOutputContext(_localctx);
				this.enterOuterAlt(_localctx, 41);
				{
				this.state = 492;
				this.match(SqlBaseParser.DESCRIBE);
				this.state = 493;
				this.match(SqlBaseParser.OUTPUT);
				this.state = 494;
				this.identifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public query(): QueryContext {
		let _localctx: QueryContext = new QueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SqlBaseParser.RULE_query);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 498;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SqlBaseParser.WITH) {
				{
				this.state = 497;
				this.presto_with();
				}
			}

			this.state = 500;
			this.queryNoWith();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public presto_with(): Presto_withContext {
		let _localctx: Presto_withContext = new Presto_withContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, SqlBaseParser.RULE_presto_with);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 502;
			this.match(SqlBaseParser.WITH);
			this.state = 504;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SqlBaseParser.RECURSIVE) {
				{
				this.state = 503;
				this.match(SqlBaseParser.RECURSIVE);
				}
			}

			this.state = 506;
			this.namedQuery();
			this.state = 511;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SqlBaseParser.T__2) {
				{
				{
				this.state = 507;
				this.match(SqlBaseParser.T__2);
				this.state = 508;
				this.namedQuery();
				}
				}
				this.state = 513;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableElement(): TableElementContext {
		let _localctx: TableElementContext = new TableElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SqlBaseParser.RULE_tableElement);
		try {
			this.state = 516;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SqlBaseParser.ADD:
			case SqlBaseParser.NO:
			case SqlBaseParser.SUBSTRING:
			case SqlBaseParser.POSITION:
			case SqlBaseParser.TINYINT:
			case SqlBaseParser.SMALLINT:
			case SqlBaseParser.INTEGER:
			case SqlBaseParser.DATE:
			case SqlBaseParser.TIME:
			case SqlBaseParser.TIMESTAMP:
			case SqlBaseParser.INTERVAL:
			case SqlBaseParser.YEAR:
			case SqlBaseParser.MONTH:
			case SqlBaseParser.DAY:
			case SqlBaseParser.HOUR:
			case SqlBaseParser.MINUTE:
			case SqlBaseParser.SECOND:
			case SqlBaseParser.ZONE:
			case SqlBaseParser.FILTER:
			case SqlBaseParser.OVER:
			case SqlBaseParser.PARTITION:
			case SqlBaseParser.RANGE:
			case SqlBaseParser.ROWS:
			case SqlBaseParser.PRECEDING:
			case SqlBaseParser.FOLLOWING:
			case SqlBaseParser.CURRENT:
			case SqlBaseParser.ROW:
			case SqlBaseParser.SCHEMA:
			case SqlBaseParser.VIEW:
			case SqlBaseParser.REPLACE:
			case SqlBaseParser.GRANT:
			case SqlBaseParser.REVOKE:
			case SqlBaseParser.PRIVILEGES:
			case SqlBaseParser.PUBLIC:
			case SqlBaseParser.OPTION:
			case SqlBaseParser.EXPLAIN:
			case SqlBaseParser.ANALYZE:
			case SqlBaseParser.FORMAT:
			case SqlBaseParser.TYPE:
			case SqlBaseParser.TEXT:
			case SqlBaseParser.GRAPHVIZ:
			case SqlBaseParser.LOGICAL:
			case SqlBaseParser.DISTRIBUTED:
			case SqlBaseParser.SHOW:
			case SqlBaseParser.TABLES:
			case SqlBaseParser.SCHEMAS:
			case SqlBaseParser.CATALOGS:
			case SqlBaseParser.COLUMNS:
			case SqlBaseParser.COLUMN:
			case SqlBaseParser.USE:
			case SqlBaseParser.PARTITIONS:
			case SqlBaseParser.FUNCTIONS:
			case SqlBaseParser.TO:
			case SqlBaseParser.SYSTEM:
			case SqlBaseParser.BERNOULLI:
			case SqlBaseParser.POISSONIZED:
			case SqlBaseParser.TABLESAMPLE:
			case SqlBaseParser.ARRAY:
			case SqlBaseParser.MAP:
			case SqlBaseParser.SET:
			case SqlBaseParser.RESET:
			case SqlBaseParser.SESSION:
			case SqlBaseParser.DATA:
			case SqlBaseParser.START:
			case SqlBaseParser.TRANSACTION:
			case SqlBaseParser.COMMIT:
			case SqlBaseParser.ROLLBACK:
			case SqlBaseParser.WORK:
			case SqlBaseParser.ISOLATION:
			case SqlBaseParser.LEVEL:
			case SqlBaseParser.SERIALIZABLE:
			case SqlBaseParser.REPEATABLE:
			case SqlBaseParser.COMMITTED:
			case SqlBaseParser.UNCOMMITTED:
			case SqlBaseParser.READ:
			case SqlBaseParser.WRITE:
			case SqlBaseParser.ONLY:
			case SqlBaseParser.CALL:
			case SqlBaseParser.INPUT:
			case SqlBaseParser.OUTPUT:
			case SqlBaseParser.CASCADE:
			case SqlBaseParser.RESTRICT:
			case SqlBaseParser.INCLUDING:
			case SqlBaseParser.EXCLUDING:
			case SqlBaseParser.PROPERTIES:
			case SqlBaseParser.NFD:
			case SqlBaseParser.NFC:
			case SqlBaseParser.NFKD:
			case SqlBaseParser.NFKC:
			case SqlBaseParser.IF:
			case SqlBaseParser.NULLIF:
			case SqlBaseParser.COALESCE:
			case SqlBaseParser.IDENTIFIER:
			case SqlBaseParser.DIGIT_IDENTIFIER:
			case SqlBaseParser.QUOTED_IDENTIFIER:
			case SqlBaseParser.BACKQUOTED_IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 514;
				this.columnDefinition();
				}
				break;
			case SqlBaseParser.LIKE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 515;
				this.likeClause();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public columnDefinition(): ColumnDefinitionContext {
		let _localctx: ColumnDefinitionContext = new ColumnDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SqlBaseParser.RULE_columnDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 518;
			this.identifier();
			this.state = 519;
			this.type(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public likeClause(): LikeClauseContext {
		let _localctx: LikeClauseContext = new LikeClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, SqlBaseParser.RULE_likeClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 521;
			this.match(SqlBaseParser.LIKE);
			this.state = 522;
			this.qualifiedName();
			this.state = 525;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SqlBaseParser.INCLUDING || _la === SqlBaseParser.EXCLUDING) {
				{
				this.state = 523;
				_localctx._optionType = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === SqlBaseParser.INCLUDING || _la === SqlBaseParser.EXCLUDING)) {
					_localctx._optionType = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 524;
				this.match(SqlBaseParser.PROPERTIES);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableProperties(): TablePropertiesContext {
		let _localctx: TablePropertiesContext = new TablePropertiesContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, SqlBaseParser.RULE_tableProperties);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 527;
			this.match(SqlBaseParser.T__1);
			this.state = 528;
			this.tableProperty();
			this.state = 533;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SqlBaseParser.T__2) {
				{
				{
				this.state = 529;
				this.match(SqlBaseParser.T__2);
				this.state = 530;
				this.tableProperty();
				}
				}
				this.state = 535;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 536;
			this.match(SqlBaseParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableProperty(): TablePropertyContext {
		let _localctx: TablePropertyContext = new TablePropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, SqlBaseParser.RULE_tableProperty);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 538;
			this.identifier();
			this.state = 539;
			this.match(SqlBaseParser.EQ);
			this.state = 540;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public queryNoWith(): QueryNoWithContext {
		let _localctx: QueryNoWithContext = new QueryNoWithContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, SqlBaseParser.RULE_queryNoWith);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 542;
			this.queryTerm(0);
			this.state = 553;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SqlBaseParser.ORDER) {
				{
				this.state = 543;
				this.match(SqlBaseParser.ORDER);
				this.state = 544;
				this.match(SqlBaseParser.BY);
				this.state = 545;
				this.sortItem();
				this.state = 550;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SqlBaseParser.T__2) {
					{
					{
					this.state = 546;
					this.match(SqlBaseParser.T__2);
					this.state = 547;
					this.sortItem();
					}
					}
					this.state = 552;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 557;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SqlBaseParser.LIMIT) {
				{
				this.state = 555;
				this.match(SqlBaseParser.LIMIT);
				this.state = 556;
				_localctx._limit = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === SqlBaseParser.ALL || _la === SqlBaseParser.INTEGER_VALUE)) {
					_localctx._limit = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public queryTerm(): QueryTermContext;
	public queryTerm(_p: number): QueryTermContext;
	// @RuleVersion(0)
	public queryTerm(_p?: number): QueryTermContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: QueryTermContext = new QueryTermContext(this._ctx, _parentState);
		let _prevctx: QueryTermContext = _localctx;
		let _startState: number = 24;
		this.enterRecursionRule(_localctx, 24, SqlBaseParser.RULE_queryTerm, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new QueryTermDefaultContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 560;
			this.queryPrimary();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 576;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 574;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
					case 1:
						{
						_localctx = new SetOperationContext(new QueryTermContext(_parentctx, _parentState));
						(_localctx as SetOperationContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SqlBaseParser.RULE_queryTerm);
						this.state = 562;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 563;
						(_localctx as SetOperationContext)._operator = this.match(SqlBaseParser.INTERSECT);
						this.state = 565;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === SqlBaseParser.ALL || _la === SqlBaseParser.DISTINCT) {
							{
							this.state = 564;
							this.setQuantifier();
							}
						}

						this.state = 567;
						(_localctx as SetOperationContext)._right = this.queryTerm(3);
						}
						break;

					case 2:
						{
						_localctx = new SetOperationContext(new QueryTermContext(_parentctx, _parentState));
						(_localctx as SetOperationContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SqlBaseParser.RULE_queryTerm);
						this.state = 568;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 569;
						(_localctx as SetOperationContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === SqlBaseParser.UNION || _la === SqlBaseParser.EXCEPT)) {
							(_localctx as SetOperationContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 571;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === SqlBaseParser.ALL || _la === SqlBaseParser.DISTINCT) {
							{
							this.state = 570;
							this.setQuantifier();
							}
						}

						this.state = 573;
						(_localctx as SetOperationContext)._right = this.queryTerm(2);
						}
						break;
					}
					}
				}
				this.state = 578;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public queryPrimary(): QueryPrimaryContext {
		let _localctx: QueryPrimaryContext = new QueryPrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, SqlBaseParser.RULE_queryPrimary);
		try {
			let _alt: number;
			this.state = 595;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SqlBaseParser.SELECT:
				_localctx = new QueryPrimaryDefaultContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 579;
				this.querySpecification();
				}
				break;
			case SqlBaseParser.TABLE:
				_localctx = new TableContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 580;
				this.match(SqlBaseParser.TABLE);
				this.state = 581;
				this.qualifiedName();
				}
				break;
			case SqlBaseParser.VALUES:
				_localctx = new InlineTableContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 582;
				this.match(SqlBaseParser.VALUES);
				this.state = 583;
				this.expression();
				this.state = 588;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 584;
						this.match(SqlBaseParser.T__2);
						this.state = 585;
						this.expression();
						}
						}
					}
					this.state = 590;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
				}
				}
				break;
			case SqlBaseParser.T__1:
				_localctx = new SubqueryContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 591;
				this.match(SqlBaseParser.T__1);
				this.state = 592;
				this.queryNoWith();
				this.state = 593;
				this.match(SqlBaseParser.T__3);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sortItem(): SortItemContext {
		let _localctx: SortItemContext = new SortItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, SqlBaseParser.RULE_sortItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 597;
			this.expression();
			this.state = 599;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SqlBaseParser.ASC || _la === SqlBaseParser.DESC) {
				{
				this.state = 598;
				_localctx._ordering = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === SqlBaseParser.ASC || _la === SqlBaseParser.DESC)) {
					_localctx._ordering = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 603;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SqlBaseParser.NULLS) {
				{
				this.state = 601;
				this.match(SqlBaseParser.NULLS);
				this.state = 602;
				_localctx._nullOrdering = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === SqlBaseParser.FIRST || _la === SqlBaseParser.LAST)) {
					_localctx._nullOrdering = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public querySpecification(): QuerySpecificationContext {
		let _localctx: QuerySpecificationContext = new QuerySpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, SqlBaseParser.RULE_querySpecification);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 605;
			this.match(SqlBaseParser.SELECT);
			this.state = 607;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SqlBaseParser.ALL || _la === SqlBaseParser.DISTINCT) {
				{
				this.state = 606;
				this.setQuantifier();
				}
			}

			this.state = 609;
			this.selectItem();
			this.state = 614;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 610;
					this.match(SqlBaseParser.T__2);
					this.state = 611;
					this.selectItem();
					}
					}
				}
				this.state = 616;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
			}
			this.state = 626;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				{
				this.state = 617;
				this.match(SqlBaseParser.FROM);
				this.state = 618;
				this.relation(0);
				this.state = 623;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 619;
						this.match(SqlBaseParser.T__2);
						this.state = 620;
						this.relation(0);
						}
						}
					}
					this.state = 625;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
				}
				}
				break;
			}
			this.state = 630;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
			case 1:
				{
				this.state = 628;
				this.match(SqlBaseParser.WHERE);
				this.state = 629;
				_localctx._where = this.booleanExpression(0);
				}
				break;
			}
			this.state = 635;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				{
				this.state = 632;
				this.match(SqlBaseParser.GROUP);
				this.state = 633;
				this.match(SqlBaseParser.BY);
				this.state = 634;
				this.groupBy();
				}
				break;
			}
			this.state = 639;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
			case 1:
				{
				this.state = 637;
				this.match(SqlBaseParser.HAVING);
				this.state = 638;
				_localctx._having = this.booleanExpression(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupBy(): GroupByContext {
		let _localctx: GroupByContext = new GroupByContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, SqlBaseParser.RULE_groupBy);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 642;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SqlBaseParser.ALL || _la === SqlBaseParser.DISTINCT) {
				{
				this.state = 641;
				this.setQuantifier();
				}
			}

			this.state = 644;
			this.groupingElement();
			this.state = 649;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 645;
					this.match(SqlBaseParser.T__2);
					this.state = 646;
					this.groupingElement();
					}
					}
				}
				this.state = 651;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupingElement(): GroupingElementContext {
		let _localctx: GroupingElementContext = new GroupingElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, SqlBaseParser.RULE_groupingElement);
		let _la: number;
		try {
			this.state = 692;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SqlBaseParser.T__1:
			case SqlBaseParser.T__4:
			case SqlBaseParser.ADD:
			case SqlBaseParser.NOT:
			case SqlBaseParser.NO:
			case SqlBaseParser.EXISTS:
			case SqlBaseParser.NULL:
			case SqlBaseParser.TRUE:
			case SqlBaseParser.FALSE:
			case SqlBaseParser.SUBSTRING:
			case SqlBaseParser.POSITION:
			case SqlBaseParser.TINYINT:
			case SqlBaseParser.SMALLINT:
			case SqlBaseParser.INTEGER:
			case SqlBaseParser.DATE:
			case SqlBaseParser.TIME:
			case SqlBaseParser.TIMESTAMP:
			case SqlBaseParser.INTERVAL:
			case SqlBaseParser.YEAR:
			case SqlBaseParser.MONTH:
			case SqlBaseParser.DAY:
			case SqlBaseParser.HOUR:
			case SqlBaseParser.MINUTE:
			case SqlBaseParser.SECOND:
			case SqlBaseParser.ZONE:
			case SqlBaseParser.CURRENT_DATE:
			case SqlBaseParser.CURRENT_TIME:
			case SqlBaseParser.CURRENT_TIMESTAMP:
			case SqlBaseParser.LOCALTIME:
			case SqlBaseParser.LOCALTIMESTAMP:
			case SqlBaseParser.EXTRACT:
			case SqlBaseParser.CASE:
			case SqlBaseParser.FILTER:
			case SqlBaseParser.OVER:
			case SqlBaseParser.PARTITION:
			case SqlBaseParser.RANGE:
			case SqlBaseParser.ROWS:
			case SqlBaseParser.PRECEDING:
			case SqlBaseParser.FOLLOWING:
			case SqlBaseParser.CURRENT:
			case SqlBaseParser.ROW:
			case SqlBaseParser.SCHEMA:
			case SqlBaseParser.VIEW:
			case SqlBaseParser.REPLACE:
			case SqlBaseParser.GRANT:
			case SqlBaseParser.REVOKE:
			case SqlBaseParser.PRIVILEGES:
			case SqlBaseParser.PUBLIC:
			case SqlBaseParser.OPTION:
			case SqlBaseParser.EXPLAIN:
			case SqlBaseParser.ANALYZE:
			case SqlBaseParser.FORMAT:
			case SqlBaseParser.TYPE:
			case SqlBaseParser.TEXT:
			case SqlBaseParser.GRAPHVIZ:
			case SqlBaseParser.LOGICAL:
			case SqlBaseParser.DISTRIBUTED:
			case SqlBaseParser.CAST:
			case SqlBaseParser.TRY_CAST:
			case SqlBaseParser.SHOW:
			case SqlBaseParser.TABLES:
			case SqlBaseParser.SCHEMAS:
			case SqlBaseParser.CATALOGS:
			case SqlBaseParser.COLUMNS:
			case SqlBaseParser.COLUMN:
			case SqlBaseParser.USE:
			case SqlBaseParser.PARTITIONS:
			case SqlBaseParser.FUNCTIONS:
			case SqlBaseParser.TO:
			case SqlBaseParser.SYSTEM:
			case SqlBaseParser.BERNOULLI:
			case SqlBaseParser.POISSONIZED:
			case SqlBaseParser.TABLESAMPLE:
			case SqlBaseParser.ARRAY:
			case SqlBaseParser.MAP:
			case SqlBaseParser.SET:
			case SqlBaseParser.RESET:
			case SqlBaseParser.SESSION:
			case SqlBaseParser.DATA:
			case SqlBaseParser.START:
			case SqlBaseParser.TRANSACTION:
			case SqlBaseParser.COMMIT:
			case SqlBaseParser.ROLLBACK:
			case SqlBaseParser.WORK:
			case SqlBaseParser.ISOLATION:
			case SqlBaseParser.LEVEL:
			case SqlBaseParser.SERIALIZABLE:
			case SqlBaseParser.REPEATABLE:
			case SqlBaseParser.COMMITTED:
			case SqlBaseParser.UNCOMMITTED:
			case SqlBaseParser.READ:
			case SqlBaseParser.WRITE:
			case SqlBaseParser.ONLY:
			case SqlBaseParser.CALL:
			case SqlBaseParser.INPUT:
			case SqlBaseParser.OUTPUT:
			case SqlBaseParser.CASCADE:
			case SqlBaseParser.RESTRICT:
			case SqlBaseParser.INCLUDING:
			case SqlBaseParser.EXCLUDING:
			case SqlBaseParser.PROPERTIES:
			case SqlBaseParser.NORMALIZE:
			case SqlBaseParser.NFD:
			case SqlBaseParser.NFC:
			case SqlBaseParser.NFKD:
			case SqlBaseParser.NFKC:
			case SqlBaseParser.IF:
			case SqlBaseParser.NULLIF:
			case SqlBaseParser.COALESCE:
			case SqlBaseParser.PLUS:
			case SqlBaseParser.MINUS:
			case SqlBaseParser.STRING:
			case SqlBaseParser.BINARY_LITERAL:
			case SqlBaseParser.INTEGER_VALUE:
			case SqlBaseParser.DECIMAL_VALUE:
			case SqlBaseParser.IDENTIFIER:
			case SqlBaseParser.DIGIT_IDENTIFIER:
			case SqlBaseParser.QUOTED_IDENTIFIER:
			case SqlBaseParser.BACKQUOTED_IDENTIFIER:
			case SqlBaseParser.DOUBLE_PRECISION:
				_localctx = new SingleGroupingSetContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 652;
				this.groupingExpressions();
				}
				break;
			case SqlBaseParser.ROLLUP:
				_localctx = new RollupContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 653;
				this.match(SqlBaseParser.ROLLUP);
				this.state = 654;
				this.match(SqlBaseParser.T__1);
				this.state = 663;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.ADD || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (SqlBaseParser.NO - 33)) | (1 << (SqlBaseParser.SUBSTRING - 33)) | (1 << (SqlBaseParser.POSITION - 33)) | (1 << (SqlBaseParser.TINYINT - 33)) | (1 << (SqlBaseParser.SMALLINT - 33)) | (1 << (SqlBaseParser.INTEGER - 33)) | (1 << (SqlBaseParser.DATE - 33)) | (1 << (SqlBaseParser.TIME - 33)) | (1 << (SqlBaseParser.TIMESTAMP - 33)) | (1 << (SqlBaseParser.INTERVAL - 33)) | (1 << (SqlBaseParser.YEAR - 33)) | (1 << (SqlBaseParser.MONTH - 33)) | (1 << (SqlBaseParser.DAY - 33)) | (1 << (SqlBaseParser.HOUR - 33)) | (1 << (SqlBaseParser.MINUTE - 33)) | (1 << (SqlBaseParser.SECOND - 33)) | (1 << (SqlBaseParser.ZONE - 33)))) !== 0) || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & ((1 << (SqlBaseParser.FILTER - 85)) | (1 << (SqlBaseParser.OVER - 85)) | (1 << (SqlBaseParser.PARTITION - 85)) | (1 << (SqlBaseParser.RANGE - 85)) | (1 << (SqlBaseParser.ROWS - 85)) | (1 << (SqlBaseParser.PRECEDING - 85)) | (1 << (SqlBaseParser.FOLLOWING - 85)) | (1 << (SqlBaseParser.CURRENT - 85)) | (1 << (SqlBaseParser.ROW - 85)) | (1 << (SqlBaseParser.SCHEMA - 85)) | (1 << (SqlBaseParser.VIEW - 85)) | (1 << (SqlBaseParser.REPLACE - 85)) | (1 << (SqlBaseParser.GRANT - 85)) | (1 << (SqlBaseParser.REVOKE - 85)) | (1 << (SqlBaseParser.PRIVILEGES - 85)) | (1 << (SqlBaseParser.PUBLIC - 85)) | (1 << (SqlBaseParser.OPTION - 85)) | (1 << (SqlBaseParser.EXPLAIN - 85)) | (1 << (SqlBaseParser.ANALYZE - 85)) | (1 << (SqlBaseParser.FORMAT - 85)) | (1 << (SqlBaseParser.TYPE - 85)))) !== 0) || ((((_la - 117)) & ~0x1F) === 0 && ((1 << (_la - 117)) & ((1 << (SqlBaseParser.TEXT - 117)) | (1 << (SqlBaseParser.GRAPHVIZ - 117)) | (1 << (SqlBaseParser.LOGICAL - 117)) | (1 << (SqlBaseParser.DISTRIBUTED - 117)) | (1 << (SqlBaseParser.SHOW - 117)) | (1 << (SqlBaseParser.TABLES - 117)) | (1 << (SqlBaseParser.SCHEMAS - 117)) | (1 << (SqlBaseParser.CATALOGS - 117)) | (1 << (SqlBaseParser.COLUMNS - 117)) | (1 << (SqlBaseParser.COLUMN - 117)) | (1 << (SqlBaseParser.USE - 117)) | (1 << (SqlBaseParser.PARTITIONS - 117)) | (1 << (SqlBaseParser.FUNCTIONS - 117)) | (1 << (SqlBaseParser.TO - 117)) | (1 << (SqlBaseParser.SYSTEM - 117)) | (1 << (SqlBaseParser.BERNOULLI - 117)) | (1 << (SqlBaseParser.POISSONIZED - 117)) | (1 << (SqlBaseParser.TABLESAMPLE - 117)) | (1 << (SqlBaseParser.ARRAY - 117)) | (1 << (SqlBaseParser.MAP - 117)) | (1 << (SqlBaseParser.SET - 117)) | (1 << (SqlBaseParser.RESET - 117)))) !== 0) || ((((_la - 149)) & ~0x1F) === 0 && ((1 << (_la - 149)) & ((1 << (SqlBaseParser.SESSION - 149)) | (1 << (SqlBaseParser.DATA - 149)) | (1 << (SqlBaseParser.START - 149)) | (1 << (SqlBaseParser.TRANSACTION - 149)) | (1 << (SqlBaseParser.COMMIT - 149)) | (1 << (SqlBaseParser.ROLLBACK - 149)) | (1 << (SqlBaseParser.WORK - 149)) | (1 << (SqlBaseParser.ISOLATION - 149)) | (1 << (SqlBaseParser.LEVEL - 149)) | (1 << (SqlBaseParser.SERIALIZABLE - 149)) | (1 << (SqlBaseParser.REPEATABLE - 149)) | (1 << (SqlBaseParser.COMMITTED - 149)) | (1 << (SqlBaseParser.UNCOMMITTED - 149)) | (1 << (SqlBaseParser.READ - 149)) | (1 << (SqlBaseParser.WRITE - 149)) | (1 << (SqlBaseParser.ONLY - 149)) | (1 << (SqlBaseParser.CALL - 149)) | (1 << (SqlBaseParser.INPUT - 149)) | (1 << (SqlBaseParser.OUTPUT - 149)) | (1 << (SqlBaseParser.CASCADE - 149)) | (1 << (SqlBaseParser.RESTRICT - 149)) | (1 << (SqlBaseParser.INCLUDING - 149)) | (1 << (SqlBaseParser.EXCLUDING - 149)) | (1 << (SqlBaseParser.PROPERTIES - 149)) | (1 << (SqlBaseParser.NFD - 149)) | (1 << (SqlBaseParser.NFC - 149)) | (1 << (SqlBaseParser.NFKD - 149)) | (1 << (SqlBaseParser.NFKC - 149)))) !== 0) || ((((_la - 181)) & ~0x1F) === 0 && ((1 << (_la - 181)) & ((1 << (SqlBaseParser.IF - 181)) | (1 << (SqlBaseParser.NULLIF - 181)) | (1 << (SqlBaseParser.COALESCE - 181)) | (1 << (SqlBaseParser.IDENTIFIER - 181)) | (1 << (SqlBaseParser.DIGIT_IDENTIFIER - 181)) | (1 << (SqlBaseParser.QUOTED_IDENTIFIER - 181)) | (1 << (SqlBaseParser.BACKQUOTED_IDENTIFIER - 181)))) !== 0)) {
					{
					this.state = 655;
					this.qualifiedName();
					this.state = 660;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SqlBaseParser.T__2) {
						{
						{
						this.state = 656;
						this.match(SqlBaseParser.T__2);
						this.state = 657;
						this.qualifiedName();
						}
						}
						this.state = 662;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 665;
				this.match(SqlBaseParser.T__3);
				}
				break;
			case SqlBaseParser.CUBE:
				_localctx = new CubeContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 666;
				this.match(SqlBaseParser.CUBE);
				this.state = 667;
				this.match(SqlBaseParser.T__1);
				this.state = 676;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.ADD || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (SqlBaseParser.NO - 33)) | (1 << (SqlBaseParser.SUBSTRING - 33)) | (1 << (SqlBaseParser.POSITION - 33)) | (1 << (SqlBaseParser.TINYINT - 33)) | (1 << (SqlBaseParser.SMALLINT - 33)) | (1 << (SqlBaseParser.INTEGER - 33)) | (1 << (SqlBaseParser.DATE - 33)) | (1 << (SqlBaseParser.TIME - 33)) | (1 << (SqlBaseParser.TIMESTAMP - 33)) | (1 << (SqlBaseParser.INTERVAL - 33)) | (1 << (SqlBaseParser.YEAR - 33)) | (1 << (SqlBaseParser.MONTH - 33)) | (1 << (SqlBaseParser.DAY - 33)) | (1 << (SqlBaseParser.HOUR - 33)) | (1 << (SqlBaseParser.MINUTE - 33)) | (1 << (SqlBaseParser.SECOND - 33)) | (1 << (SqlBaseParser.ZONE - 33)))) !== 0) || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & ((1 << (SqlBaseParser.FILTER - 85)) | (1 << (SqlBaseParser.OVER - 85)) | (1 << (SqlBaseParser.PARTITION - 85)) | (1 << (SqlBaseParser.RANGE - 85)) | (1 << (SqlBaseParser.ROWS - 85)) | (1 << (SqlBaseParser.PRECEDING - 85)) | (1 << (SqlBaseParser.FOLLOWING - 85)) | (1 << (SqlBaseParser.CURRENT - 85)) | (1 << (SqlBaseParser.ROW - 85)) | (1 << (SqlBaseParser.SCHEMA - 85)) | (1 << (SqlBaseParser.VIEW - 85)) | (1 << (SqlBaseParser.REPLACE - 85)) | (1 << (SqlBaseParser.GRANT - 85)) | (1 << (SqlBaseParser.REVOKE - 85)) | (1 << (SqlBaseParser.PRIVILEGES - 85)) | (1 << (SqlBaseParser.PUBLIC - 85)) | (1 << (SqlBaseParser.OPTION - 85)) | (1 << (SqlBaseParser.EXPLAIN - 85)) | (1 << (SqlBaseParser.ANALYZE - 85)) | (1 << (SqlBaseParser.FORMAT - 85)) | (1 << (SqlBaseParser.TYPE - 85)))) !== 0) || ((((_la - 117)) & ~0x1F) === 0 && ((1 << (_la - 117)) & ((1 << (SqlBaseParser.TEXT - 117)) | (1 << (SqlBaseParser.GRAPHVIZ - 117)) | (1 << (SqlBaseParser.LOGICAL - 117)) | (1 << (SqlBaseParser.DISTRIBUTED - 117)) | (1 << (SqlBaseParser.SHOW - 117)) | (1 << (SqlBaseParser.TABLES - 117)) | (1 << (SqlBaseParser.SCHEMAS - 117)) | (1 << (SqlBaseParser.CATALOGS - 117)) | (1 << (SqlBaseParser.COLUMNS - 117)) | (1 << (SqlBaseParser.COLUMN - 117)) | (1 << (SqlBaseParser.USE - 117)) | (1 << (SqlBaseParser.PARTITIONS - 117)) | (1 << (SqlBaseParser.FUNCTIONS - 117)) | (1 << (SqlBaseParser.TO - 117)) | (1 << (SqlBaseParser.SYSTEM - 117)) | (1 << (SqlBaseParser.BERNOULLI - 117)) | (1 << (SqlBaseParser.POISSONIZED - 117)) | (1 << (SqlBaseParser.TABLESAMPLE - 117)) | (1 << (SqlBaseParser.ARRAY - 117)) | (1 << (SqlBaseParser.MAP - 117)) | (1 << (SqlBaseParser.SET - 117)) | (1 << (SqlBaseParser.RESET - 117)))) !== 0) || ((((_la - 149)) & ~0x1F) === 0 && ((1 << (_la - 149)) & ((1 << (SqlBaseParser.SESSION - 149)) | (1 << (SqlBaseParser.DATA - 149)) | (1 << (SqlBaseParser.START - 149)) | (1 << (SqlBaseParser.TRANSACTION - 149)) | (1 << (SqlBaseParser.COMMIT - 149)) | (1 << (SqlBaseParser.ROLLBACK - 149)) | (1 << (SqlBaseParser.WORK - 149)) | (1 << (SqlBaseParser.ISOLATION - 149)) | (1 << (SqlBaseParser.LEVEL - 149)) | (1 << (SqlBaseParser.SERIALIZABLE - 149)) | (1 << (SqlBaseParser.REPEATABLE - 149)) | (1 << (SqlBaseParser.COMMITTED - 149)) | (1 << (SqlBaseParser.UNCOMMITTED - 149)) | (1 << (SqlBaseParser.READ - 149)) | (1 << (SqlBaseParser.WRITE - 149)) | (1 << (SqlBaseParser.ONLY - 149)) | (1 << (SqlBaseParser.CALL - 149)) | (1 << (SqlBaseParser.INPUT - 149)) | (1 << (SqlBaseParser.OUTPUT - 149)) | (1 << (SqlBaseParser.CASCADE - 149)) | (1 << (SqlBaseParser.RESTRICT - 149)) | (1 << (SqlBaseParser.INCLUDING - 149)) | (1 << (SqlBaseParser.EXCLUDING - 149)) | (1 << (SqlBaseParser.PROPERTIES - 149)) | (1 << (SqlBaseParser.NFD - 149)) | (1 << (SqlBaseParser.NFC - 149)) | (1 << (SqlBaseParser.NFKD - 149)) | (1 << (SqlBaseParser.NFKC - 149)))) !== 0) || ((((_la - 181)) & ~0x1F) === 0 && ((1 << (_la - 181)) & ((1 << (SqlBaseParser.IF - 181)) | (1 << (SqlBaseParser.NULLIF - 181)) | (1 << (SqlBaseParser.COALESCE - 181)) | (1 << (SqlBaseParser.IDENTIFIER - 181)) | (1 << (SqlBaseParser.DIGIT_IDENTIFIER - 181)) | (1 << (SqlBaseParser.QUOTED_IDENTIFIER - 181)) | (1 << (SqlBaseParser.BACKQUOTED_IDENTIFIER - 181)))) !== 0)) {
					{
					this.state = 668;
					this.qualifiedName();
					this.state = 673;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SqlBaseParser.T__2) {
						{
						{
						this.state = 669;
						this.match(SqlBaseParser.T__2);
						this.state = 670;
						this.qualifiedName();
						}
						}
						this.state = 675;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 678;
				this.match(SqlBaseParser.T__3);
				}
				break;
			case SqlBaseParser.GROUPING:
				_localctx = new MultipleGroupingSetsContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 679;
				this.match(SqlBaseParser.GROUPING);
				this.state = 680;
				this.match(SqlBaseParser.SETS);
				this.state = 681;
				this.match(SqlBaseParser.T__1);
				this.state = 682;
				this.groupingSet();
				this.state = 687;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SqlBaseParser.T__2) {
					{
					{
					this.state = 683;
					this.match(SqlBaseParser.T__2);
					this.state = 684;
					this.groupingSet();
					}
					}
					this.state = 689;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 690;
				this.match(SqlBaseParser.T__3);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupingExpressions(): GroupingExpressionsContext {
		let _localctx: GroupingExpressionsContext = new GroupingExpressionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, SqlBaseParser.RULE_groupingExpressions);
		let _la: number;
		try {
			this.state = 707;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 81, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 694;
				this.match(SqlBaseParser.T__1);
				this.state = 703;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SqlBaseParser.T__1) | (1 << SqlBaseParser.T__4) | (1 << SqlBaseParser.ADD))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SqlBaseParser.NOT - 32)) | (1 << (SqlBaseParser.NO - 32)) | (1 << (SqlBaseParser.EXISTS - 32)) | (1 << (SqlBaseParser.NULL - 32)) | (1 << (SqlBaseParser.TRUE - 32)) | (1 << (SqlBaseParser.FALSE - 32)) | (1 << (SqlBaseParser.SUBSTRING - 32)) | (1 << (SqlBaseParser.POSITION - 32)) | (1 << (SqlBaseParser.TINYINT - 32)) | (1 << (SqlBaseParser.SMALLINT - 32)) | (1 << (SqlBaseParser.INTEGER - 32)) | (1 << (SqlBaseParser.DATE - 32)) | (1 << (SqlBaseParser.TIME - 32)) | (1 << (SqlBaseParser.TIMESTAMP - 32)) | (1 << (SqlBaseParser.INTERVAL - 32)) | (1 << (SqlBaseParser.YEAR - 32)) | (1 << (SqlBaseParser.MONTH - 32)) | (1 << (SqlBaseParser.DAY - 32)) | (1 << (SqlBaseParser.HOUR - 32)) | (1 << (SqlBaseParser.MINUTE - 32)) | (1 << (SqlBaseParser.SECOND - 32)) | (1 << (SqlBaseParser.ZONE - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (SqlBaseParser.CURRENT_DATE - 64)) | (1 << (SqlBaseParser.CURRENT_TIME - 64)) | (1 << (SqlBaseParser.CURRENT_TIMESTAMP - 64)) | (1 << (SqlBaseParser.LOCALTIME - 64)) | (1 << (SqlBaseParser.LOCALTIMESTAMP - 64)) | (1 << (SqlBaseParser.EXTRACT - 64)) | (1 << (SqlBaseParser.CASE - 64)) | (1 << (SqlBaseParser.FILTER - 64)) | (1 << (SqlBaseParser.OVER - 64)) | (1 << (SqlBaseParser.PARTITION - 64)) | (1 << (SqlBaseParser.RANGE - 64)) | (1 << (SqlBaseParser.ROWS - 64)) | (1 << (SqlBaseParser.PRECEDING - 64)) | (1 << (SqlBaseParser.FOLLOWING - 64)) | (1 << (SqlBaseParser.CURRENT - 64)) | (1 << (SqlBaseParser.ROW - 64)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (SqlBaseParser.SCHEMA - 99)) | (1 << (SqlBaseParser.VIEW - 99)) | (1 << (SqlBaseParser.REPLACE - 99)) | (1 << (SqlBaseParser.GRANT - 99)) | (1 << (SqlBaseParser.REVOKE - 99)) | (1 << (SqlBaseParser.PRIVILEGES - 99)) | (1 << (SqlBaseParser.PUBLIC - 99)) | (1 << (SqlBaseParser.OPTION - 99)) | (1 << (SqlBaseParser.EXPLAIN - 99)) | (1 << (SqlBaseParser.ANALYZE - 99)) | (1 << (SqlBaseParser.FORMAT - 99)) | (1 << (SqlBaseParser.TYPE - 99)) | (1 << (SqlBaseParser.TEXT - 99)) | (1 << (SqlBaseParser.GRAPHVIZ - 99)) | (1 << (SqlBaseParser.LOGICAL - 99)) | (1 << (SqlBaseParser.DISTRIBUTED - 99)) | (1 << (SqlBaseParser.CAST - 99)) | (1 << (SqlBaseParser.TRY_CAST - 99)) | (1 << (SqlBaseParser.SHOW - 99)) | (1 << (SqlBaseParser.TABLES - 99)) | (1 << (SqlBaseParser.SCHEMAS - 99)) | (1 << (SqlBaseParser.CATALOGS - 99)) | (1 << (SqlBaseParser.COLUMNS - 99)) | (1 << (SqlBaseParser.COLUMN - 99)) | (1 << (SqlBaseParser.USE - 99)) | (1 << (SqlBaseParser.PARTITIONS - 99)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (SqlBaseParser.FUNCTIONS - 131)) | (1 << (SqlBaseParser.TO - 131)) | (1 << (SqlBaseParser.SYSTEM - 131)) | (1 << (SqlBaseParser.BERNOULLI - 131)) | (1 << (SqlBaseParser.POISSONIZED - 131)) | (1 << (SqlBaseParser.TABLESAMPLE - 131)) | (1 << (SqlBaseParser.ARRAY - 131)) | (1 << (SqlBaseParser.MAP - 131)) | (1 << (SqlBaseParser.SET - 131)) | (1 << (SqlBaseParser.RESET - 131)) | (1 << (SqlBaseParser.SESSION - 131)) | (1 << (SqlBaseParser.DATA - 131)) | (1 << (SqlBaseParser.START - 131)) | (1 << (SqlBaseParser.TRANSACTION - 131)) | (1 << (SqlBaseParser.COMMIT - 131)) | (1 << (SqlBaseParser.ROLLBACK - 131)) | (1 << (SqlBaseParser.WORK - 131)) | (1 << (SqlBaseParser.ISOLATION - 131)) | (1 << (SqlBaseParser.LEVEL - 131)) | (1 << (SqlBaseParser.SERIALIZABLE - 131)) | (1 << (SqlBaseParser.REPEATABLE - 131)) | (1 << (SqlBaseParser.COMMITTED - 131)) | (1 << (SqlBaseParser.UNCOMMITTED - 131)) | (1 << (SqlBaseParser.READ - 131)))) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & ((1 << (SqlBaseParser.WRITE - 163)) | (1 << (SqlBaseParser.ONLY - 163)) | (1 << (SqlBaseParser.CALL - 163)) | (1 << (SqlBaseParser.INPUT - 163)) | (1 << (SqlBaseParser.OUTPUT - 163)) | (1 << (SqlBaseParser.CASCADE - 163)) | (1 << (SqlBaseParser.RESTRICT - 163)) | (1 << (SqlBaseParser.INCLUDING - 163)) | (1 << (SqlBaseParser.EXCLUDING - 163)) | (1 << (SqlBaseParser.PROPERTIES - 163)) | (1 << (SqlBaseParser.NORMALIZE - 163)) | (1 << (SqlBaseParser.NFD - 163)) | (1 << (SqlBaseParser.NFC - 163)) | (1 << (SqlBaseParser.NFKD - 163)) | (1 << (SqlBaseParser.NFKC - 163)) | (1 << (SqlBaseParser.IF - 163)) | (1 << (SqlBaseParser.NULLIF - 163)) | (1 << (SqlBaseParser.COALESCE - 163)) | (1 << (SqlBaseParser.PLUS - 163)) | (1 << (SqlBaseParser.MINUS - 163)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (SqlBaseParser.STRING - 196)) | (1 << (SqlBaseParser.BINARY_LITERAL - 196)) | (1 << (SqlBaseParser.INTEGER_VALUE - 196)) | (1 << (SqlBaseParser.DECIMAL_VALUE - 196)) | (1 << (SqlBaseParser.IDENTIFIER - 196)) | (1 << (SqlBaseParser.DIGIT_IDENTIFIER - 196)) | (1 << (SqlBaseParser.QUOTED_IDENTIFIER - 196)) | (1 << (SqlBaseParser.BACKQUOTED_IDENTIFIER - 196)) | (1 << (SqlBaseParser.DOUBLE_PRECISION - 196)))) !== 0)) {
					{
					this.state = 695;
					this.expression();
					this.state = 700;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SqlBaseParser.T__2) {
						{
						{
						this.state = 696;
						this.match(SqlBaseParser.T__2);
						this.state = 697;
						this.expression();
						}
						}
						this.state = 702;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 705;
				this.match(SqlBaseParser.T__3);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 706;
				this.expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupingSet(): GroupingSetContext {
		let _localctx: GroupingSetContext = new GroupingSetContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, SqlBaseParser.RULE_groupingSet);
		let _la: number;
		try {
			this.state = 722;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SqlBaseParser.T__1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 709;
				this.match(SqlBaseParser.T__1);
				this.state = 718;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.ADD || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (SqlBaseParser.NO - 33)) | (1 << (SqlBaseParser.SUBSTRING - 33)) | (1 << (SqlBaseParser.POSITION - 33)) | (1 << (SqlBaseParser.TINYINT - 33)) | (1 << (SqlBaseParser.SMALLINT - 33)) | (1 << (SqlBaseParser.INTEGER - 33)) | (1 << (SqlBaseParser.DATE - 33)) | (1 << (SqlBaseParser.TIME - 33)) | (1 << (SqlBaseParser.TIMESTAMP - 33)) | (1 << (SqlBaseParser.INTERVAL - 33)) | (1 << (SqlBaseParser.YEAR - 33)) | (1 << (SqlBaseParser.MONTH - 33)) | (1 << (SqlBaseParser.DAY - 33)) | (1 << (SqlBaseParser.HOUR - 33)) | (1 << (SqlBaseParser.MINUTE - 33)) | (1 << (SqlBaseParser.SECOND - 33)) | (1 << (SqlBaseParser.ZONE - 33)))) !== 0) || ((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & ((1 << (SqlBaseParser.FILTER - 85)) | (1 << (SqlBaseParser.OVER - 85)) | (1 << (SqlBaseParser.PARTITION - 85)) | (1 << (SqlBaseParser.RANGE - 85)) | (1 << (SqlBaseParser.ROWS - 85)) | (1 << (SqlBaseParser.PRECEDING - 85)) | (1 << (SqlBaseParser.FOLLOWING - 85)) | (1 << (SqlBaseParser.CURRENT - 85)) | (1 << (SqlBaseParser.ROW - 85)) | (1 << (SqlBaseParser.SCHEMA - 85)) | (1 << (SqlBaseParser.VIEW - 85)) | (1 << (SqlBaseParser.REPLACE - 85)) | (1 << (SqlBaseParser.GRANT - 85)) | (1 << (SqlBaseParser.REVOKE - 85)) | (1 << (SqlBaseParser.PRIVILEGES - 85)) | (1 << (SqlBaseParser.PUBLIC - 85)) | (1 << (SqlBaseParser.OPTION - 85)) | (1 << (SqlBaseParser.EXPLAIN - 85)) | (1 << (SqlBaseParser.ANALYZE - 85)) | (1 << (SqlBaseParser.FORMAT - 85)) | (1 << (SqlBaseParser.TYPE - 85)))) !== 0) || ((((_la - 117)) & ~0x1F) === 0 && ((1 << (_la - 117)) & ((1 << (SqlBaseParser.TEXT - 117)) | (1 << (SqlBaseParser.GRAPHVIZ - 117)) | (1 << (SqlBaseParser.LOGICAL - 117)) | (1 << (SqlBaseParser.DISTRIBUTED - 117)) | (1 << (SqlBaseParser.SHOW - 117)) | (1 << (SqlBaseParser.TABLES - 117)) | (1 << (SqlBaseParser.SCHEMAS - 117)) | (1 << (SqlBaseParser.CATALOGS - 117)) | (1 << (SqlBaseParser.COLUMNS - 117)) | (1 << (SqlBaseParser.COLUMN - 117)) | (1 << (SqlBaseParser.USE - 117)) | (1 << (SqlBaseParser.PARTITIONS - 117)) | (1 << (SqlBaseParser.FUNCTIONS - 117)) | (1 << (SqlBaseParser.TO - 117)) | (1 << (SqlBaseParser.SYSTEM - 117)) | (1 << (SqlBaseParser.BERNOULLI - 117)) | (1 << (SqlBaseParser.POISSONIZED - 117)) | (1 << (SqlBaseParser.TABLESAMPLE - 117)) | (1 << (SqlBaseParser.ARRAY - 117)) | (1 << (SqlBaseParser.MAP - 117)) | (1 << (SqlBaseParser.SET - 117)) | (1 << (SqlBaseParser.RESET - 117)))) !== 0) || ((((_la - 149)) & ~0x1F) === 0 && ((1 << (_la - 149)) & ((1 << (SqlBaseParser.SESSION - 149)) | (1 << (SqlBaseParser.DATA - 149)) | (1 << (SqlBaseParser.START - 149)) | (1 << (SqlBaseParser.TRANSACTION - 149)) | (1 << (SqlBaseParser.COMMIT - 149)) | (1 << (SqlBaseParser.ROLLBACK - 149)) | (1 << (SqlBaseParser.WORK - 149)) | (1 << (SqlBaseParser.ISOLATION - 149)) | (1 << (SqlBaseParser.LEVEL - 149)) | (1 << (SqlBaseParser.SERIALIZABLE - 149)) | (1 << (SqlBaseParser.REPEATABLE - 149)) | (1 << (SqlBaseParser.COMMITTED - 149)) | (1 << (SqlBaseParser.UNCOMMITTED - 149)) | (1 << (SqlBaseParser.READ - 149)) | (1 << (SqlBaseParser.WRITE - 149)) | (1 << (SqlBaseParser.ONLY - 149)) | (1 << (SqlBaseParser.CALL - 149)) | (1 << (SqlBaseParser.INPUT - 149)) | (1 << (SqlBaseParser.OUTPUT - 149)) | (1 << (SqlBaseParser.CASCADE - 149)) | (1 << (SqlBaseParser.RESTRICT - 149)) | (1 << (SqlBaseParser.INCLUDING - 149)) | (1 << (SqlBaseParser.EXCLUDING - 149)) | (1 << (SqlBaseParser.PROPERTIES - 149)) | (1 << (SqlBaseParser.NFD - 149)) | (1 << (SqlBaseParser.NFC - 149)) | (1 << (SqlBaseParser.NFKD - 149)) | (1 << (SqlBaseParser.NFKC - 149)))) !== 0) || ((((_la - 181)) & ~0x1F) === 0 && ((1 << (_la - 181)) & ((1 << (SqlBaseParser.IF - 181)) | (1 << (SqlBaseParser.NULLIF - 181)) | (1 << (SqlBaseParser.COALESCE - 181)) | (1 << (SqlBaseParser.IDENTIFIER - 181)) | (1 << (SqlBaseParser.DIGIT_IDENTIFIER - 181)) | (1 << (SqlBaseParser.QUOTED_IDENTIFIER - 181)) | (1 << (SqlBaseParser.BACKQUOTED_IDENTIFIER - 181)))) !== 0)) {
					{
					this.state = 710;
					this.qualifiedName();
					this.state = 715;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SqlBaseParser.T__2) {
						{
						{
						this.state = 711;
						this.match(SqlBaseParser.T__2);
						this.state = 712;
						this.qualifiedName();
						}
						}
						this.state = 717;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 720;
				this.match(SqlBaseParser.T__3);
				}
				break;
			case SqlBaseParser.ADD:
			case SqlBaseParser.NO:
			case SqlBaseParser.SUBSTRING:
			case SqlBaseParser.POSITION:
			case SqlBaseParser.TINYINT:
			case SqlBaseParser.SMALLINT:
			case SqlBaseParser.INTEGER:
			case SqlBaseParser.DATE:
			case SqlBaseParser.TIME:
			case SqlBaseParser.TIMESTAMP:
			case SqlBaseParser.INTERVAL:
			case SqlBaseParser.YEAR:
			case SqlBaseParser.MONTH:
			case SqlBaseParser.DAY:
			case SqlBaseParser.HOUR:
			case SqlBaseParser.MINUTE:
			case SqlBaseParser.SECOND:
			case SqlBaseParser.ZONE:
			case SqlBaseParser.FILTER:
			case SqlBaseParser.OVER:
			case SqlBaseParser.PARTITION:
			case SqlBaseParser.RANGE:
			case SqlBaseParser.ROWS:
			case SqlBaseParser.PRECEDING:
			case SqlBaseParser.FOLLOWING:
			case SqlBaseParser.CURRENT:
			case SqlBaseParser.ROW:
			case SqlBaseParser.SCHEMA:
			case SqlBaseParser.VIEW:
			case SqlBaseParser.REPLACE:
			case SqlBaseParser.GRANT:
			case SqlBaseParser.REVOKE:
			case SqlBaseParser.PRIVILEGES:
			case SqlBaseParser.PUBLIC:
			case SqlBaseParser.OPTION:
			case SqlBaseParser.EXPLAIN:
			case SqlBaseParser.ANALYZE:
			case SqlBaseParser.FORMAT:
			case SqlBaseParser.TYPE:
			case SqlBaseParser.TEXT:
			case SqlBaseParser.GRAPHVIZ:
			case SqlBaseParser.LOGICAL:
			case SqlBaseParser.DISTRIBUTED:
			case SqlBaseParser.SHOW:
			case SqlBaseParser.TABLES:
			case SqlBaseParser.SCHEMAS:
			case SqlBaseParser.CATALOGS:
			case SqlBaseParser.COLUMNS:
			case SqlBaseParser.COLUMN:
			case SqlBaseParser.USE:
			case SqlBaseParser.PARTITIONS:
			case SqlBaseParser.FUNCTIONS:
			case SqlBaseParser.TO:
			case SqlBaseParser.SYSTEM:
			case SqlBaseParser.BERNOULLI:
			case SqlBaseParser.POISSONIZED:
			case SqlBaseParser.TABLESAMPLE:
			case SqlBaseParser.ARRAY:
			case SqlBaseParser.MAP:
			case SqlBaseParser.SET:
			case SqlBaseParser.RESET:
			case SqlBaseParser.SESSION:
			case SqlBaseParser.DATA:
			case SqlBaseParser.START:
			case SqlBaseParser.TRANSACTION:
			case SqlBaseParser.COMMIT:
			case SqlBaseParser.ROLLBACK:
			case SqlBaseParser.WORK:
			case SqlBaseParser.ISOLATION:
			case SqlBaseParser.LEVEL:
			case SqlBaseParser.SERIALIZABLE:
			case SqlBaseParser.REPEATABLE:
			case SqlBaseParser.COMMITTED:
			case SqlBaseParser.UNCOMMITTED:
			case SqlBaseParser.READ:
			case SqlBaseParser.WRITE:
			case SqlBaseParser.ONLY:
			case SqlBaseParser.CALL:
			case SqlBaseParser.INPUT:
			case SqlBaseParser.OUTPUT:
			case SqlBaseParser.CASCADE:
			case SqlBaseParser.RESTRICT:
			case SqlBaseParser.INCLUDING:
			case SqlBaseParser.EXCLUDING:
			case SqlBaseParser.PROPERTIES:
			case SqlBaseParser.NFD:
			case SqlBaseParser.NFC:
			case SqlBaseParser.NFKD:
			case SqlBaseParser.NFKC:
			case SqlBaseParser.IF:
			case SqlBaseParser.NULLIF:
			case SqlBaseParser.COALESCE:
			case SqlBaseParser.IDENTIFIER:
			case SqlBaseParser.DIGIT_IDENTIFIER:
			case SqlBaseParser.QUOTED_IDENTIFIER:
			case SqlBaseParser.BACKQUOTED_IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 721;
				this.qualifiedName();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedQuery(): NamedQueryContext {
		let _localctx: NamedQueryContext = new NamedQueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, SqlBaseParser.RULE_namedQuery);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 724;
			_localctx._name = this.identifier();
			this.state = 726;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SqlBaseParser.T__1) {
				{
				this.state = 725;
				this.columnAliases();
				}
			}

			this.state = 728;
			this.match(SqlBaseParser.AS);
			this.state = 729;
			this.match(SqlBaseParser.T__1);
			this.state = 730;
			this.query();
			this.state = 731;
			this.match(SqlBaseParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setQuantifier(): SetQuantifierContext {
		let _localctx: SetQuantifierContext = new SetQuantifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, SqlBaseParser.RULE_setQuantifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 733;
			_la = this._input.LA(1);
			if (!(_la === SqlBaseParser.ALL || _la === SqlBaseParser.DISTINCT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectItem(): SelectItemContext {
		let _localctx: SelectItemContext = new SelectItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, SqlBaseParser.RULE_selectItem);
		let _la: number;
		try {
			this.state = 747;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
			case 1:
				_localctx = new SelectSingleContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 735;
				this.expression();
				this.state = 740;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 87, this._ctx) ) {
				case 1:
					{
					this.state = 737;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === SqlBaseParser.AS) {
						{
						this.state = 736;
						this.match(SqlBaseParser.AS);
						}
					}

					this.state = 739;
					this.identifier();
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new SelectAllContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 742;
				this.qualifiedName();
				this.state = 743;
				this.match(SqlBaseParser.T__0);
				this.state = 744;
				this.match(SqlBaseParser.ASTERISK);
				}
				break;

			case 3:
				_localctx = new SelectAllContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 746;
				this.match(SqlBaseParser.ASTERISK);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public relation(): RelationContext;
	public relation(_p: number): RelationContext;
	// @RuleVersion(0)
	public relation(_p?: number): RelationContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: RelationContext = new RelationContext(this._ctx, _parentState);
		let _prevctx: RelationContext = _localctx;
		let _startState: number = 46;
		this.enterRecursionRule(_localctx, 46, SqlBaseParser.RULE_relation, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new RelationDefaultContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 750;
			this.sampledRelation();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 770;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new JoinRelationContext(new RelationContext(_parentctx, _parentState));
					(_localctx as JoinRelationContext)._left = _prevctx;
					this.pushNewRecursionContext(_localctx, _startState, SqlBaseParser.RULE_relation);
					this.state = 752;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 766;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case SqlBaseParser.CROSS:
						{
						this.state = 753;
						this.match(SqlBaseParser.CROSS);
						this.state = 754;
						this.match(SqlBaseParser.JOIN);
						this.state = 755;
						(_localctx as JoinRelationContext)._right = this.sampledRelation();
						}
						break;
					case SqlBaseParser.JOIN:
					case SqlBaseParser.INNER:
					case SqlBaseParser.LEFT:
					case SqlBaseParser.RIGHT:
					case SqlBaseParser.FULL:
						{
						this.state = 756;
						this.joinType();
						this.state = 757;
						this.match(SqlBaseParser.JOIN);
						this.state = 758;
						(_localctx as JoinRelationContext)._rightRelation = this.relation(0);
						this.state = 759;
						this.joinCriteria();
						}
						break;
					case SqlBaseParser.NATURAL:
						{
						this.state = 761;
						this.match(SqlBaseParser.NATURAL);
						this.state = 762;
						this.joinType();
						this.state = 763;
						this.match(SqlBaseParser.JOIN);
						this.state = 764;
						(_localctx as JoinRelationContext)._right = this.sampledRelation();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 772;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public joinType(): JoinTypeContext {
		let _localctx: JoinTypeContext = new JoinTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, SqlBaseParser.RULE_joinType);
		let _la: number;
		try {
			this.state = 788;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SqlBaseParser.JOIN:
			case SqlBaseParser.INNER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 774;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.INNER) {
					{
					this.state = 773;
					this.match(SqlBaseParser.INNER);
					}
				}

				}
				break;
			case SqlBaseParser.LEFT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 776;
				this.match(SqlBaseParser.LEFT);
				this.state = 778;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.OUTER) {
					{
					this.state = 777;
					this.match(SqlBaseParser.OUTER);
					}
				}

				}
				break;
			case SqlBaseParser.RIGHT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 780;
				this.match(SqlBaseParser.RIGHT);
				this.state = 782;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.OUTER) {
					{
					this.state = 781;
					this.match(SqlBaseParser.OUTER);
					}
				}

				}
				break;
			case SqlBaseParser.FULL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 784;
				this.match(SqlBaseParser.FULL);
				this.state = 786;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.OUTER) {
					{
					this.state = 785;
					this.match(SqlBaseParser.OUTER);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public joinCriteria(): JoinCriteriaContext {
		let _localctx: JoinCriteriaContext = new JoinCriteriaContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, SqlBaseParser.RULE_joinCriteria);
		let _la: number;
		try {
			this.state = 804;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SqlBaseParser.ON:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 790;
				this.match(SqlBaseParser.ON);
				this.state = 791;
				this.booleanExpression(0);
				}
				break;
			case SqlBaseParser.USING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 792;
				this.match(SqlBaseParser.USING);
				this.state = 793;
				this.match(SqlBaseParser.T__1);
				this.state = 794;
				this.identifier();
				this.state = 799;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SqlBaseParser.T__2) {
					{
					{
					this.state = 795;
					this.match(SqlBaseParser.T__2);
					this.state = 796;
					this.identifier();
					}
					}
					this.state = 801;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 802;
				this.match(SqlBaseParser.T__3);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sampledRelation(): SampledRelationContext {
		let _localctx: SampledRelationContext = new SampledRelationContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, SqlBaseParser.RULE_sampledRelation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 806;
			this.aliasedRelation();
			this.state = 813;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 98, this._ctx) ) {
			case 1:
				{
				this.state = 807;
				this.match(SqlBaseParser.TABLESAMPLE);
				this.state = 808;
				this.sampleType();
				this.state = 809;
				this.match(SqlBaseParser.T__1);
				this.state = 810;
				_localctx._percentage = this.expression();
				this.state = 811;
				this.match(SqlBaseParser.T__3);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sampleType(): SampleTypeContext {
		let _localctx: SampleTypeContext = new SampleTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, SqlBaseParser.RULE_sampleType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 815;
			_la = this._input.LA(1);
			if (!(((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (SqlBaseParser.SYSTEM - 137)) | (1 << (SqlBaseParser.BERNOULLI - 137)) | (1 << (SqlBaseParser.POISSONIZED - 137)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aliasedRelation(): AliasedRelationContext {
		let _localctx: AliasedRelationContext = new AliasedRelationContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, SqlBaseParser.RULE_aliasedRelation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 817;
			_localctx._relationP = this.relationPrimary();
			this.state = 825;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 101, this._ctx) ) {
			case 1:
				{
				this.state = 819;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.AS) {
					{
					this.state = 818;
					_localctx._as = this.match(SqlBaseParser.AS);
					}
				}

				this.state = 821;
				_localctx._alias = this.identifier();
				this.state = 823;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 100, this._ctx) ) {
				case 1:
					{
					this.state = 822;
					this.columnAliases();
					}
					break;
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public columnAliases(): ColumnAliasesContext {
		let _localctx: ColumnAliasesContext = new ColumnAliasesContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, SqlBaseParser.RULE_columnAliases);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 827;
			this.match(SqlBaseParser.T__1);
			this.state = 828;
			this.identifier();
			this.state = 833;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SqlBaseParser.T__2) {
				{
				{
				this.state = 829;
				this.match(SqlBaseParser.T__2);
				this.state = 830;
				this.identifier();
				}
				}
				this.state = 835;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 836;
			this.match(SqlBaseParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public relationPrimary(): RelationPrimaryContext {
		let _localctx: RelationPrimaryContext = new RelationPrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, SqlBaseParser.RULE_relationPrimary);
		let _la: number;
		try {
			this.state = 862;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 105, this._ctx) ) {
			case 1:
				_localctx = new TableNameContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 838;
				this.qualifiedName();
				}
				break;

			case 2:
				_localctx = new SubqueryRelationContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 839;
				this.match(SqlBaseParser.T__1);
				this.state = 840;
				this.query();
				this.state = 841;
				this.match(SqlBaseParser.T__3);
				}
				break;

			case 3:
				_localctx = new UnnestContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 843;
				this.match(SqlBaseParser.UNNEST);
				this.state = 844;
				this.match(SqlBaseParser.T__1);
				this.state = 845;
				this.expression();
				this.state = 850;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SqlBaseParser.T__2) {
					{
					{
					this.state = 846;
					this.match(SqlBaseParser.T__2);
					this.state = 847;
					this.expression();
					}
					}
					this.state = 852;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 853;
				this.match(SqlBaseParser.T__3);
				this.state = 856;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 104, this._ctx) ) {
				case 1:
					{
					this.state = 854;
					this.match(SqlBaseParser.WITH);
					this.state = 855;
					this.match(SqlBaseParser.ORDINALITY);
					}
					break;
				}
				}
				break;

			case 4:
				_localctx = new ParenthesizedRelationContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 858;
				this.match(SqlBaseParser.T__1);
				this.state = 859;
				this.relation(0);
				this.state = 860;
				this.match(SqlBaseParser.T__3);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, SqlBaseParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 864;
			this.booleanExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public booleanExpression(): BooleanExpressionContext;
	public booleanExpression(_p: number): BooleanExpressionContext;
	// @RuleVersion(0)
	public booleanExpression(_p?: number): BooleanExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: BooleanExpressionContext = new BooleanExpressionContext(this._ctx, _parentState);
		let _prevctx: BooleanExpressionContext = _localctx;
		let _startState: number = 64;
		this.enterRecursionRule(_localctx, 64, SqlBaseParser.RULE_booleanExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 870;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SqlBaseParser.T__1:
			case SqlBaseParser.T__4:
			case SqlBaseParser.ADD:
			case SqlBaseParser.NO:
			case SqlBaseParser.EXISTS:
			case SqlBaseParser.NULL:
			case SqlBaseParser.TRUE:
			case SqlBaseParser.FALSE:
			case SqlBaseParser.SUBSTRING:
			case SqlBaseParser.POSITION:
			case SqlBaseParser.TINYINT:
			case SqlBaseParser.SMALLINT:
			case SqlBaseParser.INTEGER:
			case SqlBaseParser.DATE:
			case SqlBaseParser.TIME:
			case SqlBaseParser.TIMESTAMP:
			case SqlBaseParser.INTERVAL:
			case SqlBaseParser.YEAR:
			case SqlBaseParser.MONTH:
			case SqlBaseParser.DAY:
			case SqlBaseParser.HOUR:
			case SqlBaseParser.MINUTE:
			case SqlBaseParser.SECOND:
			case SqlBaseParser.ZONE:
			case SqlBaseParser.CURRENT_DATE:
			case SqlBaseParser.CURRENT_TIME:
			case SqlBaseParser.CURRENT_TIMESTAMP:
			case SqlBaseParser.LOCALTIME:
			case SqlBaseParser.LOCALTIMESTAMP:
			case SqlBaseParser.EXTRACT:
			case SqlBaseParser.CASE:
			case SqlBaseParser.FILTER:
			case SqlBaseParser.OVER:
			case SqlBaseParser.PARTITION:
			case SqlBaseParser.RANGE:
			case SqlBaseParser.ROWS:
			case SqlBaseParser.PRECEDING:
			case SqlBaseParser.FOLLOWING:
			case SqlBaseParser.CURRENT:
			case SqlBaseParser.ROW:
			case SqlBaseParser.SCHEMA:
			case SqlBaseParser.VIEW:
			case SqlBaseParser.REPLACE:
			case SqlBaseParser.GRANT:
			case SqlBaseParser.REVOKE:
			case SqlBaseParser.PRIVILEGES:
			case SqlBaseParser.PUBLIC:
			case SqlBaseParser.OPTION:
			case SqlBaseParser.EXPLAIN:
			case SqlBaseParser.ANALYZE:
			case SqlBaseParser.FORMAT:
			case SqlBaseParser.TYPE:
			case SqlBaseParser.TEXT:
			case SqlBaseParser.GRAPHVIZ:
			case SqlBaseParser.LOGICAL:
			case SqlBaseParser.DISTRIBUTED:
			case SqlBaseParser.CAST:
			case SqlBaseParser.TRY_CAST:
			case SqlBaseParser.SHOW:
			case SqlBaseParser.TABLES:
			case SqlBaseParser.SCHEMAS:
			case SqlBaseParser.CATALOGS:
			case SqlBaseParser.COLUMNS:
			case SqlBaseParser.COLUMN:
			case SqlBaseParser.USE:
			case SqlBaseParser.PARTITIONS:
			case SqlBaseParser.FUNCTIONS:
			case SqlBaseParser.TO:
			case SqlBaseParser.SYSTEM:
			case SqlBaseParser.BERNOULLI:
			case SqlBaseParser.POISSONIZED:
			case SqlBaseParser.TABLESAMPLE:
			case SqlBaseParser.ARRAY:
			case SqlBaseParser.MAP:
			case SqlBaseParser.SET:
			case SqlBaseParser.RESET:
			case SqlBaseParser.SESSION:
			case SqlBaseParser.DATA:
			case SqlBaseParser.START:
			case SqlBaseParser.TRANSACTION:
			case SqlBaseParser.COMMIT:
			case SqlBaseParser.ROLLBACK:
			case SqlBaseParser.WORK:
			case SqlBaseParser.ISOLATION:
			case SqlBaseParser.LEVEL:
			case SqlBaseParser.SERIALIZABLE:
			case SqlBaseParser.REPEATABLE:
			case SqlBaseParser.COMMITTED:
			case SqlBaseParser.UNCOMMITTED:
			case SqlBaseParser.READ:
			case SqlBaseParser.WRITE:
			case SqlBaseParser.ONLY:
			case SqlBaseParser.CALL:
			case SqlBaseParser.INPUT:
			case SqlBaseParser.OUTPUT:
			case SqlBaseParser.CASCADE:
			case SqlBaseParser.RESTRICT:
			case SqlBaseParser.INCLUDING:
			case SqlBaseParser.EXCLUDING:
			case SqlBaseParser.PROPERTIES:
			case SqlBaseParser.NORMALIZE:
			case SqlBaseParser.NFD:
			case SqlBaseParser.NFC:
			case SqlBaseParser.NFKD:
			case SqlBaseParser.NFKC:
			case SqlBaseParser.IF:
			case SqlBaseParser.NULLIF:
			case SqlBaseParser.COALESCE:
			case SqlBaseParser.PLUS:
			case SqlBaseParser.MINUS:
			case SqlBaseParser.STRING:
			case SqlBaseParser.BINARY_LITERAL:
			case SqlBaseParser.INTEGER_VALUE:
			case SqlBaseParser.DECIMAL_VALUE:
			case SqlBaseParser.IDENTIFIER:
			case SqlBaseParser.DIGIT_IDENTIFIER:
			case SqlBaseParser.QUOTED_IDENTIFIER:
			case SqlBaseParser.BACKQUOTED_IDENTIFIER:
			case SqlBaseParser.DOUBLE_PRECISION:
				{
				_localctx = new BooleanDefaultContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 867;
				this.predicated();
				}
				break;
			case SqlBaseParser.NOT:
				{
				_localctx = new LogicalNotContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 868;
				this.match(SqlBaseParser.NOT);
				this.state = 869;
				this.booleanExpression(3);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 880;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 878;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 107, this._ctx) ) {
					case 1:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SqlBaseParser.RULE_booleanExpression);
						this.state = 872;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 873;
						(_localctx as LogicalBinaryContext)._operator = this.match(SqlBaseParser.AND);
						this.state = 874;
						(_localctx as LogicalBinaryContext)._right = this.booleanExpression(3);
						}
						break;

					case 2:
						{
						_localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SqlBaseParser.RULE_booleanExpression);
						this.state = 875;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 876;
						(_localctx as LogicalBinaryContext)._operator = this.match(SqlBaseParser.OR);
						this.state = 877;
						(_localctx as LogicalBinaryContext)._right = this.booleanExpression(2);
						}
						break;
					}
					}
				}
				this.state = 882;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public predicated(): PredicatedContext {
		let _localctx: PredicatedContext = new PredicatedContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, SqlBaseParser.RULE_predicated);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 883;
			_localctx._valueExpression = this.valueExpression(0);
			this.state = 885;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 109, this._ctx) ) {
			case 1:
				{
				this.state = 884;
				this.predicate(_localctx._valueExpression);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public predicate(value: ParserRuleContext): PredicateContext {
		let _localctx: PredicateContext = new PredicateContext(this._ctx, this.state, value);
		this.enterRule(_localctx, 68, SqlBaseParser.RULE_predicate);
		let _la: number;
		try {
			this.state = 948;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 118, this._ctx) ) {
			case 1:
				_localctx = new ComparisonContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 887;
				this.comparisonOperator();
				this.state = 888;
				(_localctx as ComparisonContext)._right = this.valueExpression(0);
				}
				break;

			case 2:
				_localctx = new QuantifiedComparisonContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 890;
				this.comparisonOperator();
				this.state = 891;
				this.comparisonQuantifier();
				this.state = 892;
				this.match(SqlBaseParser.T__1);
				this.state = 893;
				this.query();
				this.state = 894;
				this.match(SqlBaseParser.T__3);
				}
				break;

			case 3:
				_localctx = new BetweenContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 897;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.NOT) {
					{
					this.state = 896;
					this.match(SqlBaseParser.NOT);
					}
				}

				this.state = 899;
				this.match(SqlBaseParser.BETWEEN);
				this.state = 900;
				(_localctx as BetweenContext)._lower = this.valueExpression(0);
				this.state = 901;
				this.match(SqlBaseParser.AND);
				this.state = 902;
				(_localctx as BetweenContext)._upper = this.valueExpression(0);
				}
				break;

			case 4:
				_localctx = new InListContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 905;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.NOT) {
					{
					this.state = 904;
					this.match(SqlBaseParser.NOT);
					}
				}

				this.state = 907;
				this.match(SqlBaseParser.IN);
				this.state = 908;
				this.match(SqlBaseParser.T__1);
				this.state = 909;
				this.expression();
				this.state = 914;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SqlBaseParser.T__2) {
					{
					{
					this.state = 910;
					this.match(SqlBaseParser.T__2);
					this.state = 911;
					this.expression();
					}
					}
					this.state = 916;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 917;
				this.match(SqlBaseParser.T__3);
				}
				break;

			case 5:
				_localctx = new InSubqueryContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 920;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.NOT) {
					{
					this.state = 919;
					this.match(SqlBaseParser.NOT);
					}
				}

				this.state = 922;
				this.match(SqlBaseParser.IN);
				this.state = 923;
				this.match(SqlBaseParser.T__1);
				this.state = 924;
				this.query();
				this.state = 925;
				this.match(SqlBaseParser.T__3);
				}
				break;

			case 6:
				_localctx = new LikeContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 928;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.NOT) {
					{
					this.state = 927;
					this.match(SqlBaseParser.NOT);
					}
				}

				this.state = 930;
				this.match(SqlBaseParser.LIKE);
				this.state = 931;
				(_localctx as LikeContext)._pattern = this.valueExpression(0);
				this.state = 934;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 115, this._ctx) ) {
				case 1:
					{
					this.state = 932;
					this.match(SqlBaseParser.ESCAPE);
					this.state = 933;
					(_localctx as LikeContext)._escape = this.valueExpression(0);
					}
					break;
				}
				}
				break;

			case 7:
				_localctx = new NullPredicateContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 936;
				this.match(SqlBaseParser.IS);
				this.state = 938;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.NOT) {
					{
					this.state = 937;
					this.match(SqlBaseParser.NOT);
					}
				}

				this.state = 940;
				this.match(SqlBaseParser.NULL);
				}
				break;

			case 8:
				_localctx = new DistinctFromContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 941;
				this.match(SqlBaseParser.IS);
				this.state = 943;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.NOT) {
					{
					this.state = 942;
					this.match(SqlBaseParser.NOT);
					}
				}

				this.state = 945;
				this.match(SqlBaseParser.DISTINCT);
				this.state = 946;
				this.match(SqlBaseParser.FROM);
				this.state = 947;
				(_localctx as DistinctFromContext)._right = this.valueExpression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public valueExpression(): ValueExpressionContext;
	public valueExpression(_p: number): ValueExpressionContext;
	// @RuleVersion(0)
	public valueExpression(_p?: number): ValueExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ValueExpressionContext = new ValueExpressionContext(this._ctx, _parentState);
		let _prevctx: ValueExpressionContext = _localctx;
		let _startState: number = 70;
		this.enterRecursionRule(_localctx, 70, SqlBaseParser.RULE_valueExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 954;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SqlBaseParser.T__1:
			case SqlBaseParser.T__4:
			case SqlBaseParser.ADD:
			case SqlBaseParser.NO:
			case SqlBaseParser.EXISTS:
			case SqlBaseParser.NULL:
			case SqlBaseParser.TRUE:
			case SqlBaseParser.FALSE:
			case SqlBaseParser.SUBSTRING:
			case SqlBaseParser.POSITION:
			case SqlBaseParser.TINYINT:
			case SqlBaseParser.SMALLINT:
			case SqlBaseParser.INTEGER:
			case SqlBaseParser.DATE:
			case SqlBaseParser.TIME:
			case SqlBaseParser.TIMESTAMP:
			case SqlBaseParser.INTERVAL:
			case SqlBaseParser.YEAR:
			case SqlBaseParser.MONTH:
			case SqlBaseParser.DAY:
			case SqlBaseParser.HOUR:
			case SqlBaseParser.MINUTE:
			case SqlBaseParser.SECOND:
			case SqlBaseParser.ZONE:
			case SqlBaseParser.CURRENT_DATE:
			case SqlBaseParser.CURRENT_TIME:
			case SqlBaseParser.CURRENT_TIMESTAMP:
			case SqlBaseParser.LOCALTIME:
			case SqlBaseParser.LOCALTIMESTAMP:
			case SqlBaseParser.EXTRACT:
			case SqlBaseParser.CASE:
			case SqlBaseParser.FILTER:
			case SqlBaseParser.OVER:
			case SqlBaseParser.PARTITION:
			case SqlBaseParser.RANGE:
			case SqlBaseParser.ROWS:
			case SqlBaseParser.PRECEDING:
			case SqlBaseParser.FOLLOWING:
			case SqlBaseParser.CURRENT:
			case SqlBaseParser.ROW:
			case SqlBaseParser.SCHEMA:
			case SqlBaseParser.VIEW:
			case SqlBaseParser.REPLACE:
			case SqlBaseParser.GRANT:
			case SqlBaseParser.REVOKE:
			case SqlBaseParser.PRIVILEGES:
			case SqlBaseParser.PUBLIC:
			case SqlBaseParser.OPTION:
			case SqlBaseParser.EXPLAIN:
			case SqlBaseParser.ANALYZE:
			case SqlBaseParser.FORMAT:
			case SqlBaseParser.TYPE:
			case SqlBaseParser.TEXT:
			case SqlBaseParser.GRAPHVIZ:
			case SqlBaseParser.LOGICAL:
			case SqlBaseParser.DISTRIBUTED:
			case SqlBaseParser.CAST:
			case SqlBaseParser.TRY_CAST:
			case SqlBaseParser.SHOW:
			case SqlBaseParser.TABLES:
			case SqlBaseParser.SCHEMAS:
			case SqlBaseParser.CATALOGS:
			case SqlBaseParser.COLUMNS:
			case SqlBaseParser.COLUMN:
			case SqlBaseParser.USE:
			case SqlBaseParser.PARTITIONS:
			case SqlBaseParser.FUNCTIONS:
			case SqlBaseParser.TO:
			case SqlBaseParser.SYSTEM:
			case SqlBaseParser.BERNOULLI:
			case SqlBaseParser.POISSONIZED:
			case SqlBaseParser.TABLESAMPLE:
			case SqlBaseParser.ARRAY:
			case SqlBaseParser.MAP:
			case SqlBaseParser.SET:
			case SqlBaseParser.RESET:
			case SqlBaseParser.SESSION:
			case SqlBaseParser.DATA:
			case SqlBaseParser.START:
			case SqlBaseParser.TRANSACTION:
			case SqlBaseParser.COMMIT:
			case SqlBaseParser.ROLLBACK:
			case SqlBaseParser.WORK:
			case SqlBaseParser.ISOLATION:
			case SqlBaseParser.LEVEL:
			case SqlBaseParser.SERIALIZABLE:
			case SqlBaseParser.REPEATABLE:
			case SqlBaseParser.COMMITTED:
			case SqlBaseParser.UNCOMMITTED:
			case SqlBaseParser.READ:
			case SqlBaseParser.WRITE:
			case SqlBaseParser.ONLY:
			case SqlBaseParser.CALL:
			case SqlBaseParser.INPUT:
			case SqlBaseParser.OUTPUT:
			case SqlBaseParser.CASCADE:
			case SqlBaseParser.RESTRICT:
			case SqlBaseParser.INCLUDING:
			case SqlBaseParser.EXCLUDING:
			case SqlBaseParser.PROPERTIES:
			case SqlBaseParser.NORMALIZE:
			case SqlBaseParser.NFD:
			case SqlBaseParser.NFC:
			case SqlBaseParser.NFKD:
			case SqlBaseParser.NFKC:
			case SqlBaseParser.IF:
			case SqlBaseParser.NULLIF:
			case SqlBaseParser.COALESCE:
			case SqlBaseParser.STRING:
			case SqlBaseParser.BINARY_LITERAL:
			case SqlBaseParser.INTEGER_VALUE:
			case SqlBaseParser.DECIMAL_VALUE:
			case SqlBaseParser.IDENTIFIER:
			case SqlBaseParser.DIGIT_IDENTIFIER:
			case SqlBaseParser.QUOTED_IDENTIFIER:
			case SqlBaseParser.BACKQUOTED_IDENTIFIER:
			case SqlBaseParser.DOUBLE_PRECISION:
				{
				_localctx = new ValueExpressionDefaultContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 951;
				this.primaryExpression(0);
				}
				break;
			case SqlBaseParser.PLUS:
			case SqlBaseParser.MINUS:
				{
				_localctx = new ArithmeticUnaryContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 952;
				(_localctx as ArithmeticUnaryContext)._operator = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === SqlBaseParser.PLUS || _la === SqlBaseParser.MINUS)) {
					(_localctx as ArithmeticUnaryContext)._operator = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 953;
				this.valueExpression(4);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 970;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 121, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 968;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 120, this._ctx) ) {
					case 1:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SqlBaseParser.RULE_valueExpression);
						this.state = 956;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 957;
						(_localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & ((1 << (SqlBaseParser.ASTERISK - 192)) | (1 << (SqlBaseParser.SLASH - 192)) | (1 << (SqlBaseParser.PERCENT - 192)))) !== 0))) {
							(_localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 958;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(4);
						}
						break;

					case 2:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SqlBaseParser.RULE_valueExpression);
						this.state = 959;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 960;
						(_localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === SqlBaseParser.PLUS || _la === SqlBaseParser.MINUS)) {
							(_localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 961;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(3);
						}
						break;

					case 3:
						{
						_localctx = new ConcatenationContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ConcatenationContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SqlBaseParser.RULE_valueExpression);
						this.state = 962;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 963;
						this.match(SqlBaseParser.CONCAT);
						this.state = 964;
						(_localctx as ConcatenationContext)._right = this.valueExpression(2);
						}
						break;

					case 4:
						{
						_localctx = new AtTimeZoneContext(new ValueExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SqlBaseParser.RULE_valueExpression);
						this.state = 965;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 966;
						this.match(SqlBaseParser.AT);
						this.state = 967;
						this.timeZoneSpecifier();
						}
						break;
					}
					}
				}
				this.state = 972;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 121, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public primaryExpression(): PrimaryExpressionContext;
	public primaryExpression(_p: number): PrimaryExpressionContext;
	// @RuleVersion(0)
	public primaryExpression(_p?: number): PrimaryExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, _parentState);
		let _prevctx: PrimaryExpressionContext = _localctx;
		let _startState: number = 72;
		this.enterRecursionRule(_localctx, 72, SqlBaseParser.RULE_primaryExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1179;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 144, this._ctx) ) {
			case 1:
				{
				_localctx = new NullLiteralContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 974;
				this.match(SqlBaseParser.NULL);
				}
				break;

			case 2:
				{
				_localctx = new IntervalLiteralContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 975;
				this.interval();
				}
				break;

			case 3:
				{
				_localctx = new TypeConstructorContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 976;
				this.identifier();
				this.state = 977;
				this.match(SqlBaseParser.STRING);
				}
				break;

			case 4:
				{
				_localctx = new TypeConstructorContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 979;
				this.match(SqlBaseParser.DOUBLE_PRECISION);
				this.state = 980;
				this.match(SqlBaseParser.STRING);
				}
				break;

			case 5:
				{
				_localctx = new NumericLiteralContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 981;
				this.number();
				}
				break;

			case 6:
				{
				_localctx = new BooleanLiteralContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 982;
				this.booleanValue();
				}
				break;

			case 7:
				{
				_localctx = new StringLiteralContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 983;
				this.match(SqlBaseParser.STRING);
				}
				break;

			case 8:
				{
				_localctx = new BinaryLiteralContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 984;
				this.match(SqlBaseParser.BINARY_LITERAL);
				}
				break;

			case 9:
				{
				_localctx = new ParameterContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 985;
				this.match(SqlBaseParser.T__4);
				}
				break;

			case 10:
				{
				_localctx = new PositionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 986;
				this.match(SqlBaseParser.POSITION);
				this.state = 987;
				this.match(SqlBaseParser.T__1);
				this.state = 988;
				this.valueExpression(0);
				this.state = 989;
				this.match(SqlBaseParser.IN);
				this.state = 990;
				this.valueExpression(0);
				this.state = 991;
				this.match(SqlBaseParser.T__3);
				}
				break;

			case 11:
				{
				_localctx = new ImplicitRowConstructorContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 993;
				this.match(SqlBaseParser.T__1);
				this.state = 994;
				this.expression();
				this.state = 999;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SqlBaseParser.T__2) {
					{
					{
					this.state = 995;
					this.match(SqlBaseParser.T__2);
					this.state = 996;
					this.expression();
					}
					}
					this.state = 1001;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1002;
				this.match(SqlBaseParser.T__3);
				}
				break;

			case 12:
				{
				_localctx = new RowConstructorContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1004;
				this.match(SqlBaseParser.ROW);
				this.state = 1005;
				this.match(SqlBaseParser.T__1);
				this.state = 1006;
				this.expression();
				this.state = 1011;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SqlBaseParser.T__2) {
					{
					{
					this.state = 1007;
					this.match(SqlBaseParser.T__2);
					this.state = 1008;
					this.expression();
					}
					}
					this.state = 1013;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1014;
				this.match(SqlBaseParser.T__3);
				}
				break;

			case 13:
				{
				_localctx = new FunctionCallContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1016;
				this.qualifiedName();
				this.state = 1017;
				this.match(SqlBaseParser.T__1);
				this.state = 1018;
				this.match(SqlBaseParser.ASTERISK);
				this.state = 1019;
				this.match(SqlBaseParser.T__3);
				this.state = 1021;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 124, this._ctx) ) {
				case 1:
					{
					this.state = 1020;
					this.filter();
					}
					break;
				}
				this.state = 1024;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 125, this._ctx) ) {
				case 1:
					{
					this.state = 1023;
					this.over();
					}
					break;
				}
				}
				break;

			case 14:
				{
				_localctx = new FunctionCallContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1026;
				this.qualifiedName();
				this.state = 1027;
				this.match(SqlBaseParser.T__1);
				this.state = 1039;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SqlBaseParser.T__1) | (1 << SqlBaseParser.T__4) | (1 << SqlBaseParser.ADD) | (1 << SqlBaseParser.ALL) | (1 << SqlBaseParser.DISTINCT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SqlBaseParser.NOT - 32)) | (1 << (SqlBaseParser.NO - 32)) | (1 << (SqlBaseParser.EXISTS - 32)) | (1 << (SqlBaseParser.NULL - 32)) | (1 << (SqlBaseParser.TRUE - 32)) | (1 << (SqlBaseParser.FALSE - 32)) | (1 << (SqlBaseParser.SUBSTRING - 32)) | (1 << (SqlBaseParser.POSITION - 32)) | (1 << (SqlBaseParser.TINYINT - 32)) | (1 << (SqlBaseParser.SMALLINT - 32)) | (1 << (SqlBaseParser.INTEGER - 32)) | (1 << (SqlBaseParser.DATE - 32)) | (1 << (SqlBaseParser.TIME - 32)) | (1 << (SqlBaseParser.TIMESTAMP - 32)) | (1 << (SqlBaseParser.INTERVAL - 32)) | (1 << (SqlBaseParser.YEAR - 32)) | (1 << (SqlBaseParser.MONTH - 32)) | (1 << (SqlBaseParser.DAY - 32)) | (1 << (SqlBaseParser.HOUR - 32)) | (1 << (SqlBaseParser.MINUTE - 32)) | (1 << (SqlBaseParser.SECOND - 32)) | (1 << (SqlBaseParser.ZONE - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (SqlBaseParser.CURRENT_DATE - 64)) | (1 << (SqlBaseParser.CURRENT_TIME - 64)) | (1 << (SqlBaseParser.CURRENT_TIMESTAMP - 64)) | (1 << (SqlBaseParser.LOCALTIME - 64)) | (1 << (SqlBaseParser.LOCALTIMESTAMP - 64)) | (1 << (SqlBaseParser.EXTRACT - 64)) | (1 << (SqlBaseParser.CASE - 64)) | (1 << (SqlBaseParser.FILTER - 64)) | (1 << (SqlBaseParser.OVER - 64)) | (1 << (SqlBaseParser.PARTITION - 64)) | (1 << (SqlBaseParser.RANGE - 64)) | (1 << (SqlBaseParser.ROWS - 64)) | (1 << (SqlBaseParser.PRECEDING - 64)) | (1 << (SqlBaseParser.FOLLOWING - 64)) | (1 << (SqlBaseParser.CURRENT - 64)) | (1 << (SqlBaseParser.ROW - 64)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (SqlBaseParser.SCHEMA - 99)) | (1 << (SqlBaseParser.VIEW - 99)) | (1 << (SqlBaseParser.REPLACE - 99)) | (1 << (SqlBaseParser.GRANT - 99)) | (1 << (SqlBaseParser.REVOKE - 99)) | (1 << (SqlBaseParser.PRIVILEGES - 99)) | (1 << (SqlBaseParser.PUBLIC - 99)) | (1 << (SqlBaseParser.OPTION - 99)) | (1 << (SqlBaseParser.EXPLAIN - 99)) | (1 << (SqlBaseParser.ANALYZE - 99)) | (1 << (SqlBaseParser.FORMAT - 99)) | (1 << (SqlBaseParser.TYPE - 99)) | (1 << (SqlBaseParser.TEXT - 99)) | (1 << (SqlBaseParser.GRAPHVIZ - 99)) | (1 << (SqlBaseParser.LOGICAL - 99)) | (1 << (SqlBaseParser.DISTRIBUTED - 99)) | (1 << (SqlBaseParser.CAST - 99)) | (1 << (SqlBaseParser.TRY_CAST - 99)) | (1 << (SqlBaseParser.SHOW - 99)) | (1 << (SqlBaseParser.TABLES - 99)) | (1 << (SqlBaseParser.SCHEMAS - 99)) | (1 << (SqlBaseParser.CATALOGS - 99)) | (1 << (SqlBaseParser.COLUMNS - 99)) | (1 << (SqlBaseParser.COLUMN - 99)) | (1 << (SqlBaseParser.USE - 99)) | (1 << (SqlBaseParser.PARTITIONS - 99)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (SqlBaseParser.FUNCTIONS - 131)) | (1 << (SqlBaseParser.TO - 131)) | (1 << (SqlBaseParser.SYSTEM - 131)) | (1 << (SqlBaseParser.BERNOULLI - 131)) | (1 << (SqlBaseParser.POISSONIZED - 131)) | (1 << (SqlBaseParser.TABLESAMPLE - 131)) | (1 << (SqlBaseParser.ARRAY - 131)) | (1 << (SqlBaseParser.MAP - 131)) | (1 << (SqlBaseParser.SET - 131)) | (1 << (SqlBaseParser.RESET - 131)) | (1 << (SqlBaseParser.SESSION - 131)) | (1 << (SqlBaseParser.DATA - 131)) | (1 << (SqlBaseParser.START - 131)) | (1 << (SqlBaseParser.TRANSACTION - 131)) | (1 << (SqlBaseParser.COMMIT - 131)) | (1 << (SqlBaseParser.ROLLBACK - 131)) | (1 << (SqlBaseParser.WORK - 131)) | (1 << (SqlBaseParser.ISOLATION - 131)) | (1 << (SqlBaseParser.LEVEL - 131)) | (1 << (SqlBaseParser.SERIALIZABLE - 131)) | (1 << (SqlBaseParser.REPEATABLE - 131)) | (1 << (SqlBaseParser.COMMITTED - 131)) | (1 << (SqlBaseParser.UNCOMMITTED - 131)) | (1 << (SqlBaseParser.READ - 131)))) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & ((1 << (SqlBaseParser.WRITE - 163)) | (1 << (SqlBaseParser.ONLY - 163)) | (1 << (SqlBaseParser.CALL - 163)) | (1 << (SqlBaseParser.INPUT - 163)) | (1 << (SqlBaseParser.OUTPUT - 163)) | (1 << (SqlBaseParser.CASCADE - 163)) | (1 << (SqlBaseParser.RESTRICT - 163)) | (1 << (SqlBaseParser.INCLUDING - 163)) | (1 << (SqlBaseParser.EXCLUDING - 163)) | (1 << (SqlBaseParser.PROPERTIES - 163)) | (1 << (SqlBaseParser.NORMALIZE - 163)) | (1 << (SqlBaseParser.NFD - 163)) | (1 << (SqlBaseParser.NFC - 163)) | (1 << (SqlBaseParser.NFKD - 163)) | (1 << (SqlBaseParser.NFKC - 163)) | (1 << (SqlBaseParser.IF - 163)) | (1 << (SqlBaseParser.NULLIF - 163)) | (1 << (SqlBaseParser.COALESCE - 163)) | (1 << (SqlBaseParser.PLUS - 163)) | (1 << (SqlBaseParser.MINUS - 163)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (SqlBaseParser.STRING - 196)) | (1 << (SqlBaseParser.BINARY_LITERAL - 196)) | (1 << (SqlBaseParser.INTEGER_VALUE - 196)) | (1 << (SqlBaseParser.DECIMAL_VALUE - 196)) | (1 << (SqlBaseParser.IDENTIFIER - 196)) | (1 << (SqlBaseParser.DIGIT_IDENTIFIER - 196)) | (1 << (SqlBaseParser.QUOTED_IDENTIFIER - 196)) | (1 << (SqlBaseParser.BACKQUOTED_IDENTIFIER - 196)) | (1 << (SqlBaseParser.DOUBLE_PRECISION - 196)))) !== 0)) {
					{
					this.state = 1029;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === SqlBaseParser.ALL || _la === SqlBaseParser.DISTINCT) {
						{
						this.state = 1028;
						this.setQuantifier();
						}
					}

					this.state = 1031;
					this.expression();
					this.state = 1036;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SqlBaseParser.T__2) {
						{
						{
						this.state = 1032;
						this.match(SqlBaseParser.T__2);
						this.state = 1033;
						this.expression();
						}
						}
						this.state = 1038;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1041;
				this.match(SqlBaseParser.T__3);
				this.state = 1043;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 129, this._ctx) ) {
				case 1:
					{
					this.state = 1042;
					this.filter();
					}
					break;
				}
				this.state = 1046;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 130, this._ctx) ) {
				case 1:
					{
					this.state = 1045;
					this.over();
					}
					break;
				}
				}
				break;

			case 15:
				{
				_localctx = new LambdaContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1048;
				this.identifier();
				this.state = 1049;
				this.match(SqlBaseParser.T__5);
				this.state = 1050;
				this.expression();
				}
				break;

			case 16:
				{
				_localctx = new LambdaContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1052;
				this.match(SqlBaseParser.T__1);
				this.state = 1053;
				this.identifier();
				this.state = 1058;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SqlBaseParser.T__2) {
					{
					{
					this.state = 1054;
					this.match(SqlBaseParser.T__2);
					this.state = 1055;
					this.identifier();
					}
					}
					this.state = 1060;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1061;
				this.match(SqlBaseParser.T__3);
				this.state = 1062;
				this.match(SqlBaseParser.T__5);
				this.state = 1063;
				this.expression();
				}
				break;

			case 17:
				{
				_localctx = new SubqueryExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1065;
				this.match(SqlBaseParser.T__1);
				this.state = 1066;
				this.query();
				this.state = 1067;
				this.match(SqlBaseParser.T__3);
				}
				break;

			case 18:
				{
				_localctx = new ExistsContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1069;
				this.match(SqlBaseParser.EXISTS);
				this.state = 1070;
				this.match(SqlBaseParser.T__1);
				this.state = 1071;
				this.query();
				this.state = 1072;
				this.match(SqlBaseParser.T__3);
				}
				break;

			case 19:
				{
				_localctx = new SimpleCaseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1074;
				this.match(SqlBaseParser.CASE);
				this.state = 1075;
				this.valueExpression(0);
				this.state = 1077;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1076;
					this.whenClause();
					}
					}
					this.state = 1079;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === SqlBaseParser.WHEN);
				this.state = 1083;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.ELSE) {
					{
					this.state = 1081;
					this.match(SqlBaseParser.ELSE);
					this.state = 1082;
					(_localctx as SimpleCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 1085;
				this.match(SqlBaseParser.END);
				}
				break;

			case 20:
				{
				_localctx = new SearchedCaseContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1087;
				this.match(SqlBaseParser.CASE);
				this.state = 1089;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1088;
					this.whenClause();
					}
					}
					this.state = 1091;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === SqlBaseParser.WHEN);
				this.state = 1095;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.ELSE) {
					{
					this.state = 1093;
					this.match(SqlBaseParser.ELSE);
					this.state = 1094;
					(_localctx as SearchedCaseContext)._elseExpression = this.expression();
					}
				}

				this.state = 1097;
				this.match(SqlBaseParser.END);
				}
				break;

			case 21:
				{
				_localctx = new CastContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1099;
				this.match(SqlBaseParser.CAST);
				this.state = 1100;
				this.match(SqlBaseParser.T__1);
				this.state = 1101;
				this.expression();
				this.state = 1102;
				this.match(SqlBaseParser.AS);
				this.state = 1103;
				this.type(0);
				this.state = 1104;
				this.match(SqlBaseParser.T__3);
				}
				break;

			case 22:
				{
				_localctx = new CastContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1106;
				this.match(SqlBaseParser.TRY_CAST);
				this.state = 1107;
				this.match(SqlBaseParser.T__1);
				this.state = 1108;
				this.expression();
				this.state = 1109;
				this.match(SqlBaseParser.AS);
				this.state = 1110;
				this.type(0);
				this.state = 1111;
				this.match(SqlBaseParser.T__3);
				}
				break;

			case 23:
				{
				_localctx = new ArrayConstructorContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1113;
				this.match(SqlBaseParser.ARRAY);
				this.state = 1114;
				this.match(SqlBaseParser.T__6);
				this.state = 1123;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SqlBaseParser.T__1) | (1 << SqlBaseParser.T__4) | (1 << SqlBaseParser.ADD))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SqlBaseParser.NOT - 32)) | (1 << (SqlBaseParser.NO - 32)) | (1 << (SqlBaseParser.EXISTS - 32)) | (1 << (SqlBaseParser.NULL - 32)) | (1 << (SqlBaseParser.TRUE - 32)) | (1 << (SqlBaseParser.FALSE - 32)) | (1 << (SqlBaseParser.SUBSTRING - 32)) | (1 << (SqlBaseParser.POSITION - 32)) | (1 << (SqlBaseParser.TINYINT - 32)) | (1 << (SqlBaseParser.SMALLINT - 32)) | (1 << (SqlBaseParser.INTEGER - 32)) | (1 << (SqlBaseParser.DATE - 32)) | (1 << (SqlBaseParser.TIME - 32)) | (1 << (SqlBaseParser.TIMESTAMP - 32)) | (1 << (SqlBaseParser.INTERVAL - 32)) | (1 << (SqlBaseParser.YEAR - 32)) | (1 << (SqlBaseParser.MONTH - 32)) | (1 << (SqlBaseParser.DAY - 32)) | (1 << (SqlBaseParser.HOUR - 32)) | (1 << (SqlBaseParser.MINUTE - 32)) | (1 << (SqlBaseParser.SECOND - 32)) | (1 << (SqlBaseParser.ZONE - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (SqlBaseParser.CURRENT_DATE - 64)) | (1 << (SqlBaseParser.CURRENT_TIME - 64)) | (1 << (SqlBaseParser.CURRENT_TIMESTAMP - 64)) | (1 << (SqlBaseParser.LOCALTIME - 64)) | (1 << (SqlBaseParser.LOCALTIMESTAMP - 64)) | (1 << (SqlBaseParser.EXTRACT - 64)) | (1 << (SqlBaseParser.CASE - 64)) | (1 << (SqlBaseParser.FILTER - 64)) | (1 << (SqlBaseParser.OVER - 64)) | (1 << (SqlBaseParser.PARTITION - 64)) | (1 << (SqlBaseParser.RANGE - 64)) | (1 << (SqlBaseParser.ROWS - 64)) | (1 << (SqlBaseParser.PRECEDING - 64)) | (1 << (SqlBaseParser.FOLLOWING - 64)) | (1 << (SqlBaseParser.CURRENT - 64)) | (1 << (SqlBaseParser.ROW - 64)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (SqlBaseParser.SCHEMA - 99)) | (1 << (SqlBaseParser.VIEW - 99)) | (1 << (SqlBaseParser.REPLACE - 99)) | (1 << (SqlBaseParser.GRANT - 99)) | (1 << (SqlBaseParser.REVOKE - 99)) | (1 << (SqlBaseParser.PRIVILEGES - 99)) | (1 << (SqlBaseParser.PUBLIC - 99)) | (1 << (SqlBaseParser.OPTION - 99)) | (1 << (SqlBaseParser.EXPLAIN - 99)) | (1 << (SqlBaseParser.ANALYZE - 99)) | (1 << (SqlBaseParser.FORMAT - 99)) | (1 << (SqlBaseParser.TYPE - 99)) | (1 << (SqlBaseParser.TEXT - 99)) | (1 << (SqlBaseParser.GRAPHVIZ - 99)) | (1 << (SqlBaseParser.LOGICAL - 99)) | (1 << (SqlBaseParser.DISTRIBUTED - 99)) | (1 << (SqlBaseParser.CAST - 99)) | (1 << (SqlBaseParser.TRY_CAST - 99)) | (1 << (SqlBaseParser.SHOW - 99)) | (1 << (SqlBaseParser.TABLES - 99)) | (1 << (SqlBaseParser.SCHEMAS - 99)) | (1 << (SqlBaseParser.CATALOGS - 99)) | (1 << (SqlBaseParser.COLUMNS - 99)) | (1 << (SqlBaseParser.COLUMN - 99)) | (1 << (SqlBaseParser.USE - 99)) | (1 << (SqlBaseParser.PARTITIONS - 99)))) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (SqlBaseParser.FUNCTIONS - 131)) | (1 << (SqlBaseParser.TO - 131)) | (1 << (SqlBaseParser.SYSTEM - 131)) | (1 << (SqlBaseParser.BERNOULLI - 131)) | (1 << (SqlBaseParser.POISSONIZED - 131)) | (1 << (SqlBaseParser.TABLESAMPLE - 131)) | (1 << (SqlBaseParser.ARRAY - 131)) | (1 << (SqlBaseParser.MAP - 131)) | (1 << (SqlBaseParser.SET - 131)) | (1 << (SqlBaseParser.RESET - 131)) | (1 << (SqlBaseParser.SESSION - 131)) | (1 << (SqlBaseParser.DATA - 131)) | (1 << (SqlBaseParser.START - 131)) | (1 << (SqlBaseParser.TRANSACTION - 131)) | (1 << (SqlBaseParser.COMMIT - 131)) | (1 << (SqlBaseParser.ROLLBACK - 131)) | (1 << (SqlBaseParser.WORK - 131)) | (1 << (SqlBaseParser.ISOLATION - 131)) | (1 << (SqlBaseParser.LEVEL - 131)) | (1 << (SqlBaseParser.SERIALIZABLE - 131)) | (1 << (SqlBaseParser.REPEATABLE - 131)) | (1 << (SqlBaseParser.COMMITTED - 131)) | (1 << (SqlBaseParser.UNCOMMITTED - 131)) | (1 << (SqlBaseParser.READ - 131)))) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & ((1 << (SqlBaseParser.WRITE - 163)) | (1 << (SqlBaseParser.ONLY - 163)) | (1 << (SqlBaseParser.CALL - 163)) | (1 << (SqlBaseParser.INPUT - 163)) | (1 << (SqlBaseParser.OUTPUT - 163)) | (1 << (SqlBaseParser.CASCADE - 163)) | (1 << (SqlBaseParser.RESTRICT - 163)) | (1 << (SqlBaseParser.INCLUDING - 163)) | (1 << (SqlBaseParser.EXCLUDING - 163)) | (1 << (SqlBaseParser.PROPERTIES - 163)) | (1 << (SqlBaseParser.NORMALIZE - 163)) | (1 << (SqlBaseParser.NFD - 163)) | (1 << (SqlBaseParser.NFC - 163)) | (1 << (SqlBaseParser.NFKD - 163)) | (1 << (SqlBaseParser.NFKC - 163)) | (1 << (SqlBaseParser.IF - 163)) | (1 << (SqlBaseParser.NULLIF - 163)) | (1 << (SqlBaseParser.COALESCE - 163)) | (1 << (SqlBaseParser.PLUS - 163)) | (1 << (SqlBaseParser.MINUS - 163)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (SqlBaseParser.STRING - 196)) | (1 << (SqlBaseParser.BINARY_LITERAL - 196)) | (1 << (SqlBaseParser.INTEGER_VALUE - 196)) | (1 << (SqlBaseParser.DECIMAL_VALUE - 196)) | (1 << (SqlBaseParser.IDENTIFIER - 196)) | (1 << (SqlBaseParser.DIGIT_IDENTIFIER - 196)) | (1 << (SqlBaseParser.QUOTED_IDENTIFIER - 196)) | (1 << (SqlBaseParser.BACKQUOTED_IDENTIFIER - 196)) | (1 << (SqlBaseParser.DOUBLE_PRECISION - 196)))) !== 0)) {
					{
					this.state = 1115;
					this.expression();
					this.state = 1120;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SqlBaseParser.T__2) {
						{
						{
						this.state = 1116;
						this.match(SqlBaseParser.T__2);
						this.state = 1117;
						this.expression();
						}
						}
						this.state = 1122;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1125;
				this.match(SqlBaseParser.T__7);
				}
				break;

			case 24:
				{
				_localctx = new ColumnReferenceContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1126;
				this.identifier();
				}
				break;

			case 25:
				{
				_localctx = new SpecialDateTimeFunctionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1127;
				(_localctx as SpecialDateTimeFunctionContext)._name = this.match(SqlBaseParser.CURRENT_DATE);
				}
				break;

			case 26:
				{
				_localctx = new SpecialDateTimeFunctionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1128;
				(_localctx as SpecialDateTimeFunctionContext)._name = this.match(SqlBaseParser.CURRENT_TIME);
				this.state = 1132;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 138, this._ctx) ) {
				case 1:
					{
					this.state = 1129;
					this.match(SqlBaseParser.T__1);
					this.state = 1130;
					(_localctx as SpecialDateTimeFunctionContext)._precision = this.match(SqlBaseParser.INTEGER_VALUE);
					this.state = 1131;
					this.match(SqlBaseParser.T__3);
					}
					break;
				}
				}
				break;

			case 27:
				{
				_localctx = new SpecialDateTimeFunctionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1134;
				(_localctx as SpecialDateTimeFunctionContext)._name = this.match(SqlBaseParser.CURRENT_TIMESTAMP);
				this.state = 1138;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 139, this._ctx) ) {
				case 1:
					{
					this.state = 1135;
					this.match(SqlBaseParser.T__1);
					this.state = 1136;
					(_localctx as SpecialDateTimeFunctionContext)._precision = this.match(SqlBaseParser.INTEGER_VALUE);
					this.state = 1137;
					this.match(SqlBaseParser.T__3);
					}
					break;
				}
				}
				break;

			case 28:
				{
				_localctx = new SpecialDateTimeFunctionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1140;
				(_localctx as SpecialDateTimeFunctionContext)._name = this.match(SqlBaseParser.LOCALTIME);
				this.state = 1144;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 140, this._ctx) ) {
				case 1:
					{
					this.state = 1141;
					this.match(SqlBaseParser.T__1);
					this.state = 1142;
					(_localctx as SpecialDateTimeFunctionContext)._precision = this.match(SqlBaseParser.INTEGER_VALUE);
					this.state = 1143;
					this.match(SqlBaseParser.T__3);
					}
					break;
				}
				}
				break;

			case 29:
				{
				_localctx = new SpecialDateTimeFunctionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1146;
				(_localctx as SpecialDateTimeFunctionContext)._name = this.match(SqlBaseParser.LOCALTIMESTAMP);
				this.state = 1150;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 141, this._ctx) ) {
				case 1:
					{
					this.state = 1147;
					this.match(SqlBaseParser.T__1);
					this.state = 1148;
					(_localctx as SpecialDateTimeFunctionContext)._precision = this.match(SqlBaseParser.INTEGER_VALUE);
					this.state = 1149;
					this.match(SqlBaseParser.T__3);
					}
					break;
				}
				}
				break;

			case 30:
				{
				_localctx = new SubstringContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1152;
				this.match(SqlBaseParser.SUBSTRING);
				this.state = 1153;
				this.match(SqlBaseParser.T__1);
				this.state = 1154;
				this.valueExpression(0);
				this.state = 1155;
				this.match(SqlBaseParser.FROM);
				this.state = 1156;
				this.valueExpression(0);
				this.state = 1159;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.FOR) {
					{
					this.state = 1157;
					this.match(SqlBaseParser.FOR);
					this.state = 1158;
					this.valueExpression(0);
					}
				}

				this.state = 1161;
				this.match(SqlBaseParser.T__3);
				}
				break;

			case 31:
				{
				_localctx = new NormalizeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1163;
				this.match(SqlBaseParser.NORMALIZE);
				this.state = 1164;
				this.match(SqlBaseParser.T__1);
				this.state = 1165;
				this.valueExpression(0);
				this.state = 1168;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SqlBaseParser.T__2) {
					{
					this.state = 1166;
					this.match(SqlBaseParser.T__2);
					this.state = 1167;
					this.normalForm();
					}
				}

				this.state = 1170;
				this.match(SqlBaseParser.T__3);
				}
				break;

			case 32:
				{
				_localctx = new ExtractContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1172;
				this.match(SqlBaseParser.EXTRACT);
				this.state = 1173;
				this.match(SqlBaseParser.T__1);
				this.state = 1174;
				this.identifier();
				this.state = 1175;
				this.match(SqlBaseParser.FROM);
				this.state = 1176;
				this.valueExpression(0);
				this.state = 1177;
				this.match(SqlBaseParser.T__3);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1191;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 146, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1189;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 145, this._ctx) ) {
					case 1:
						{
						_localctx = new SubscriptContext(new PrimaryExpressionContext(_parentctx, _parentState));
						(_localctx as SubscriptContext)._value = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SqlBaseParser.RULE_primaryExpression);
						this.state = 1181;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 1182;
						this.match(SqlBaseParser.T__6);
						this.state = 1183;
						(_localctx as SubscriptContext)._index = this.valueExpression(0);
						this.state = 1184;
						this.match(SqlBaseParser.T__7);
						}
						break;

					case 2:
						{
						_localctx = new DereferenceContext(new PrimaryExpressionContext(_parentctx, _parentState));
						(_localctx as DereferenceContext)._base = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, SqlBaseParser.RULE_primaryExpression);
						this.state = 1186;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 1187;
						this.match(SqlBaseParser.T__0);
						this.state = 1188;
						(_localctx as DereferenceContext)._fieldName = this.identifier();
						}
						break;
					}
					}
				}
				this.state = 1193;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 146, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public timeZoneSpecifier(): TimeZoneSpecifierContext {
		let _localctx: TimeZoneSpecifierContext = new TimeZoneSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, SqlBaseParser.RULE_timeZoneSpecifier);
		try {
			this.state = 1200;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 147, this._ctx) ) {
			case 1:
				_localctx = new TimeZoneIntervalContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1194;
				this.match(SqlBaseParser.TIME);
				this.state = 1195;
				this.match(SqlBaseParser.ZONE);
				this.state = 1196;
				this.interval();
				}
				break;

			case 2:
				_localctx = new TimeZoneStringContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1197;
				this.match(SqlBaseParser.TIME);
				this.state = 1198;
				this.match(SqlBaseParser.ZONE);
				this.state = 1199;
				this.match(SqlBaseParser.STRING);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comparisonOperator(): ComparisonOperatorContext {
		let _localctx: ComparisonOperatorContext = new ComparisonOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, SqlBaseParser.RULE_comparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1202;
			_la = this._input.LA(1);
			if (!(((((_la - 184)) & ~0x1F) === 0 && ((1 << (_la - 184)) & ((1 << (SqlBaseParser.EQ - 184)) | (1 << (SqlBaseParser.NEQ - 184)) | (1 << (SqlBaseParser.LT - 184)) | (1 << (SqlBaseParser.LTE - 184)) | (1 << (SqlBaseParser.GT - 184)) | (1 << (SqlBaseParser.GTE - 184)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comparisonQuantifier(): ComparisonQuantifierContext {
		let _localctx: ComparisonQuantifierContext = new ComparisonQuantifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, SqlBaseParser.RULE_comparisonQuantifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1204;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SqlBaseParser.ALL) | (1 << SqlBaseParser.SOME) | (1 << SqlBaseParser.ANY))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public booleanValue(): BooleanValueContext {
		let _localctx: BooleanValueContext = new BooleanValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, SqlBaseParser.RULE_booleanValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1206;
			_la = this._input.LA(1);
			if (!(_la === SqlBaseParser.TRUE || _la === SqlBaseParser.FALSE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interval(): IntervalContext {
		let _localctx: IntervalContext = new IntervalContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, SqlBaseParser.RULE_interval);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1208;
			this.match(SqlBaseParser.INTERVAL);
			this.state = 1210;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SqlBaseParser.PLUS || _la === SqlBaseParser.MINUS) {
				{
				this.state = 1209;
				_localctx._sign = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === SqlBaseParser.PLUS || _la === SqlBaseParser.MINUS)) {
					_localctx._sign = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 1212;
			this.match(SqlBaseParser.STRING);
			this.state = 1213;
			_localctx._from = this.intervalField();
			this.state = 1216;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 149, this._ctx) ) {
			case 1:
				{
				this.state = 1214;
				this.match(SqlBaseParser.TO);
				this.state = 1215;
				_localctx._to = this.intervalField();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public intervalField(): IntervalFieldContext {
		let _localctx: IntervalFieldContext = new IntervalFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, SqlBaseParser.RULE_intervalField);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1218;
			_la = this._input.LA(1);
			if (!(((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (SqlBaseParser.YEAR - 57)) | (1 << (SqlBaseParser.MONTH - 57)) | (1 << (SqlBaseParser.DAY - 57)) | (1 << (SqlBaseParser.HOUR - 57)) | (1 << (SqlBaseParser.MINUTE - 57)) | (1 << (SqlBaseParser.SECOND - 57)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public type(): TypeContext;
	public type(_p: number): TypeContext;
	// @RuleVersion(0)
	public type(_p?: number): TypeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TypeContext = new TypeContext(this._ctx, _parentState);
		let _prevctx: TypeContext = _localctx;
		let _startState: number = 86;
		this.enterRecursionRule(_localctx, 86, SqlBaseParser.RULE_type, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1262;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 153, this._ctx) ) {
			case 1:
				{
				this.state = 1221;
				this.match(SqlBaseParser.ARRAY);
				this.state = 1222;
				this.match(SqlBaseParser.LT);
				this.state = 1223;
				this.type(0);
				this.state = 1224;
				this.match(SqlBaseParser.GT);
				}
				break;

			case 2:
				{
				this.state = 1226;
				this.match(SqlBaseParser.MAP);
				this.state = 1227;
				this.match(SqlBaseParser.LT);
				this.state = 1228;
				this.type(0);
				this.state = 1229;
				this.match(SqlBaseParser.T__2);
				this.state = 1230;
				this.type(0);
				this.state = 1231;
				this.match(SqlBaseParser.GT);
				}
				break;

			case 3:
				{
				this.state = 1233;
				this.match(SqlBaseParser.ROW);
				this.state = 1234;
				this.match(SqlBaseParser.T__1);
				this.state = 1235;
				this.identifier();
				this.state = 1236;
				this.type(0);
				this.state = 1243;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SqlBaseParser.T__2) {
					{
					{
					this.state = 1237;
					this.match(SqlBaseParser.T__2);
					this.state = 1238;
					this.identifier();
					this.state = 1239;
					this.type(0);
					}
					}
					this.state = 1245;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1246;
				this.match(SqlBaseParser.T__3);
				}
				break;

			case 4:
				{
				this.state = 1248;
				this.baseType();
				this.state = 1260;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 152, this._ctx) ) {
				case 1:
					{
					this.state = 1249;
					this.match(SqlBaseParser.T__1);
					this.state = 1250;
					this.typeParameter();
					this.state = 1255;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SqlBaseParser.T__2) {
						{
						{
						this.state = 1251;
						this.match(SqlBaseParser.T__2);
						this.state = 1252;
						this.typeParameter();
						}
						}
						this.state = 1257;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1258;
					this.match(SqlBaseParser.T__3);
					}
					break;
				}
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1268;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 154, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new TypeContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, SqlBaseParser.RULE_type);
					this.state = 1264;
					if (!(this.precpred(this._ctx, 5))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
					}
					this.state = 1265;
					this.match(SqlBaseParser.ARRAY);
					}
					}
				}
				this.state = 1270;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 154, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameter(): TypeParameterContext {
		let _localctx: TypeParameterContext = new TypeParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, SqlBaseParser.RULE_typeParameter);
		try {
			this.state = 1273;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SqlBaseParser.INTEGER_VALUE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1271;
				this.match(SqlBaseParser.INTEGER_VALUE);
				}
				break;
			case SqlBaseParser.ADD:
			case SqlBaseParser.NO:
			case SqlBaseParser.SUBSTRING:
			case SqlBaseParser.POSITION:
			case SqlBaseParser.TINYINT:
			case SqlBaseParser.SMALLINT:
			case SqlBaseParser.INTEGER:
			case SqlBaseParser.DATE:
			case SqlBaseParser.TIME:
			case SqlBaseParser.TIMESTAMP:
			case SqlBaseParser.INTERVAL:
			case SqlBaseParser.YEAR:
			case SqlBaseParser.MONTH:
			case SqlBaseParser.DAY:
			case SqlBaseParser.HOUR:
			case SqlBaseParser.MINUTE:
			case SqlBaseParser.SECOND:
			case SqlBaseParser.ZONE:
			case SqlBaseParser.FILTER:
			case SqlBaseParser.OVER:
			case SqlBaseParser.PARTITION:
			case SqlBaseParser.RANGE:
			case SqlBaseParser.ROWS:
			case SqlBaseParser.PRECEDING:
			case SqlBaseParser.FOLLOWING:
			case SqlBaseParser.CURRENT:
			case SqlBaseParser.ROW:
			case SqlBaseParser.SCHEMA:
			case SqlBaseParser.VIEW:
			case SqlBaseParser.REPLACE:
			case SqlBaseParser.GRANT:
			case SqlBaseParser.REVOKE:
			case SqlBaseParser.PRIVILEGES:
			case SqlBaseParser.PUBLIC:
			case SqlBaseParser.OPTION:
			case SqlBaseParser.EXPLAIN:
			case SqlBaseParser.ANALYZE:
			case SqlBaseParser.FORMAT:
			case SqlBaseParser.TYPE:
			case SqlBaseParser.TEXT:
			case SqlBaseParser.GRAPHVIZ:
			case SqlBaseParser.LOGICAL:
			case SqlBaseParser.DISTRIBUTED:
			case SqlBaseParser.SHOW:
			case SqlBaseParser.TABLES:
			case SqlBaseParser.SCHEMAS:
			case SqlBaseParser.CATALOGS:
			case SqlBaseParser.COLUMNS:
			case SqlBaseParser.COLUMN:
			case SqlBaseParser.USE:
			case SqlBaseParser.PARTITIONS:
			case SqlBaseParser.FUNCTIONS:
			case SqlBaseParser.TO:
			case SqlBaseParser.SYSTEM:
			case SqlBaseParser.BERNOULLI:
			case SqlBaseParser.POISSONIZED:
			case SqlBaseParser.TABLESAMPLE:
			case SqlBaseParser.ARRAY:
			case SqlBaseParser.MAP:
			case SqlBaseParser.SET:
			case SqlBaseParser.RESET:
			case SqlBaseParser.SESSION:
			case SqlBaseParser.DATA:
			case SqlBaseParser.START:
			case SqlBaseParser.TRANSACTION:
			case SqlBaseParser.COMMIT:
			case SqlBaseParser.ROLLBACK:
			case SqlBaseParser.WORK:
			case SqlBaseParser.ISOLATION:
			case SqlBaseParser.LEVEL:
			case SqlBaseParser.SERIALIZABLE:
			case SqlBaseParser.REPEATABLE:
			case SqlBaseParser.COMMITTED:
			case SqlBaseParser.UNCOMMITTED:
			case SqlBaseParser.READ:
			case SqlBaseParser.WRITE:
			case SqlBaseParser.ONLY:
			case SqlBaseParser.CALL:
			case SqlBaseParser.INPUT:
			case SqlBaseParser.OUTPUT:
			case SqlBaseParser.CASCADE:
			case SqlBaseParser.RESTRICT:
			case SqlBaseParser.INCLUDING:
			case SqlBaseParser.EXCLUDING:
			case SqlBaseParser.PROPERTIES:
			case SqlBaseParser.NFD:
			case SqlBaseParser.NFC:
			case SqlBaseParser.NFKD:
			case SqlBaseParser.NFKC:
			case SqlBaseParser.IF:
			case SqlBaseParser.NULLIF:
			case SqlBaseParser.COALESCE:
			case SqlBaseParser.IDENTIFIER:
			case SqlBaseParser.DIGIT_IDENTIFIER:
			case SqlBaseParser.QUOTED_IDENTIFIER:
			case SqlBaseParser.BACKQUOTED_IDENTIFIER:
			case SqlBaseParser.TIME_WITH_TIME_ZONE:
			case SqlBaseParser.TIMESTAMP_WITH_TIME_ZONE:
			case SqlBaseParser.DOUBLE_PRECISION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1272;
				this.type(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public baseType(): BaseTypeContext {
		let _localctx: BaseTypeContext = new BaseTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, SqlBaseParser.RULE_baseType);
		try {
			this.state = 1279;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SqlBaseParser.TIME_WITH_TIME_ZONE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1275;
				this.match(SqlBaseParser.TIME_WITH_TIME_ZONE);
				}
				break;
			case SqlBaseParser.TIMESTAMP_WITH_TIME_ZONE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1276;
				this.match(SqlBaseParser.TIMESTAMP_WITH_TIME_ZONE);
				}
				break;
			case SqlBaseParser.DOUBLE_PRECISION:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1277;
				this.match(SqlBaseParser.DOUBLE_PRECISION);
				}
				break;
			case SqlBaseParser.ADD:
			case SqlBaseParser.NO:
			case SqlBaseParser.SUBSTRING:
			case SqlBaseParser.POSITION:
			case SqlBaseParser.TINYINT:
			case SqlBaseParser.SMALLINT:
			case SqlBaseParser.INTEGER:
			case SqlBaseParser.DATE:
			case SqlBaseParser.TIME:
			case SqlBaseParser.TIMESTAMP:
			case SqlBaseParser.INTERVAL:
			case SqlBaseParser.YEAR:
			case SqlBaseParser.MONTH:
			case SqlBaseParser.DAY:
			case SqlBaseParser.HOUR:
			case SqlBaseParser.MINUTE:
			case SqlBaseParser.SECOND:
			case SqlBaseParser.ZONE:
			case SqlBaseParser.FILTER:
			case SqlBaseParser.OVER:
			case SqlBaseParser.PARTITION:
			case SqlBaseParser.RANGE:
			case SqlBaseParser.ROWS:
			case SqlBaseParser.PRECEDING:
			case SqlBaseParser.FOLLOWING:
			case SqlBaseParser.CURRENT:
			case SqlBaseParser.ROW:
			case SqlBaseParser.SCHEMA:
			case SqlBaseParser.VIEW:
			case SqlBaseParser.REPLACE:
			case SqlBaseParser.GRANT:
			case SqlBaseParser.REVOKE:
			case SqlBaseParser.PRIVILEGES:
			case SqlBaseParser.PUBLIC:
			case SqlBaseParser.OPTION:
			case SqlBaseParser.EXPLAIN:
			case SqlBaseParser.ANALYZE:
			case SqlBaseParser.FORMAT:
			case SqlBaseParser.TYPE:
			case SqlBaseParser.TEXT:
			case SqlBaseParser.GRAPHVIZ:
			case SqlBaseParser.LOGICAL:
			case SqlBaseParser.DISTRIBUTED:
			case SqlBaseParser.SHOW:
			case SqlBaseParser.TABLES:
			case SqlBaseParser.SCHEMAS:
			case SqlBaseParser.CATALOGS:
			case SqlBaseParser.COLUMNS:
			case SqlBaseParser.COLUMN:
			case SqlBaseParser.USE:
			case SqlBaseParser.PARTITIONS:
			case SqlBaseParser.FUNCTIONS:
			case SqlBaseParser.TO:
			case SqlBaseParser.SYSTEM:
			case SqlBaseParser.BERNOULLI:
			case SqlBaseParser.POISSONIZED:
			case SqlBaseParser.TABLESAMPLE:
			case SqlBaseParser.ARRAY:
			case SqlBaseParser.MAP:
			case SqlBaseParser.SET:
			case SqlBaseParser.RESET:
			case SqlBaseParser.SESSION:
			case SqlBaseParser.DATA:
			case SqlBaseParser.START:
			case SqlBaseParser.TRANSACTION:
			case SqlBaseParser.COMMIT:
			case SqlBaseParser.ROLLBACK:
			case SqlBaseParser.WORK:
			case SqlBaseParser.ISOLATION:
			case SqlBaseParser.LEVEL:
			case SqlBaseParser.SERIALIZABLE:
			case SqlBaseParser.REPEATABLE:
			case SqlBaseParser.COMMITTED:
			case SqlBaseParser.UNCOMMITTED:
			case SqlBaseParser.READ:
			case SqlBaseParser.WRITE:
			case SqlBaseParser.ONLY:
			case SqlBaseParser.CALL:
			case SqlBaseParser.INPUT:
			case SqlBaseParser.OUTPUT:
			case SqlBaseParser.CASCADE:
			case SqlBaseParser.RESTRICT:
			case SqlBaseParser.INCLUDING:
			case SqlBaseParser.EXCLUDING:
			case SqlBaseParser.PROPERTIES:
			case SqlBaseParser.NFD:
			case SqlBaseParser.NFC:
			case SqlBaseParser.NFKD:
			case SqlBaseParser.NFKC:
			case SqlBaseParser.IF:
			case SqlBaseParser.NULLIF:
			case SqlBaseParser.COALESCE:
			case SqlBaseParser.IDENTIFIER:
			case SqlBaseParser.DIGIT_IDENTIFIER:
			case SqlBaseParser.QUOTED_IDENTIFIER:
			case SqlBaseParser.BACKQUOTED_IDENTIFIER:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1278;
				this.identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whenClause(): WhenClauseContext {
		let _localctx: WhenClauseContext = new WhenClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, SqlBaseParser.RULE_whenClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1281;
			this.match(SqlBaseParser.WHEN);
			this.state = 1282;
			_localctx._condition = this.expression();
			this.state = 1283;
			this.match(SqlBaseParser.THEN);
			this.state = 1284;
			_localctx._result = this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public filter(): FilterContext {
		let _localctx: FilterContext = new FilterContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, SqlBaseParser.RULE_filter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1286;
			this.match(SqlBaseParser.FILTER);
			this.state = 1287;
			this.match(SqlBaseParser.T__1);
			this.state = 1288;
			this.match(SqlBaseParser.WHERE);
			this.state = 1289;
			this.booleanExpression(0);
			this.state = 1290;
			this.match(SqlBaseParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public over(): OverContext {
		let _localctx: OverContext = new OverContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, SqlBaseParser.RULE_over);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1292;
			this.match(SqlBaseParser.OVER);
			this.state = 1293;
			this.match(SqlBaseParser.T__1);
			this.state = 1304;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SqlBaseParser.PARTITION) {
				{
				this.state = 1294;
				this.match(SqlBaseParser.PARTITION);
				this.state = 1295;
				this.match(SqlBaseParser.BY);
				this.state = 1296;
				_localctx._expression = this.expression();
				_localctx._partition.push(_localctx._expression);
				this.state = 1301;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SqlBaseParser.T__2) {
					{
					{
					this.state = 1297;
					this.match(SqlBaseParser.T__2);
					this.state = 1298;
					_localctx._expression = this.expression();
					_localctx._partition.push(_localctx._expression);
					}
					}
					this.state = 1303;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1316;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SqlBaseParser.ORDER) {
				{
				this.state = 1306;
				this.match(SqlBaseParser.ORDER);
				this.state = 1307;
				this.match(SqlBaseParser.BY);
				this.state = 1308;
				this.sortItem();
				this.state = 1313;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SqlBaseParser.T__2) {
					{
					{
					this.state = 1309;
					this.match(SqlBaseParser.T__2);
					this.state = 1310;
					this.sortItem();
					}
					}
					this.state = 1315;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1319;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SqlBaseParser.RANGE || _la === SqlBaseParser.ROWS) {
				{
				this.state = 1318;
				this.windowFrame();
				}
			}

			this.state = 1321;
			this.match(SqlBaseParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public windowFrame(): WindowFrameContext {
		let _localctx: WindowFrameContext = new WindowFrameContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, SqlBaseParser.RULE_windowFrame);
		try {
			this.state = 1339;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 162, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1323;
				_localctx._frameType = this.match(SqlBaseParser.RANGE);
				this.state = 1324;
				_localctx._start = this.frameBound();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1325;
				_localctx._frameType = this.match(SqlBaseParser.ROWS);
				this.state = 1326;
				_localctx._start = this.frameBound();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1327;
				_localctx._frameType = this.match(SqlBaseParser.RANGE);
				this.state = 1328;
				this.match(SqlBaseParser.BETWEEN);
				this.state = 1329;
				_localctx._start = this.frameBound();
				this.state = 1330;
				this.match(SqlBaseParser.AND);
				this.state = 1331;
				_localctx._end = this.frameBound();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1333;
				_localctx._frameType = this.match(SqlBaseParser.ROWS);
				this.state = 1334;
				this.match(SqlBaseParser.BETWEEN);
				this.state = 1335;
				_localctx._start = this.frameBound();
				this.state = 1336;
				this.match(SqlBaseParser.AND);
				this.state = 1337;
				_localctx._end = this.frameBound();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public frameBound(): FrameBoundContext {
		let _localctx: FrameBoundContext = new FrameBoundContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, SqlBaseParser.RULE_frameBound);
		let _la: number;
		try {
			this.state = 1350;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 163, this._ctx) ) {
			case 1:
				_localctx = new UnboundedFrameContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1341;
				this.match(SqlBaseParser.UNBOUNDED);
				this.state = 1342;
				(_localctx as UnboundedFrameContext)._boundType = this.match(SqlBaseParser.PRECEDING);
				}
				break;

			case 2:
				_localctx = new UnboundedFrameContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1343;
				this.match(SqlBaseParser.UNBOUNDED);
				this.state = 1344;
				(_localctx as UnboundedFrameContext)._boundType = this.match(SqlBaseParser.FOLLOWING);
				}
				break;

			case 3:
				_localctx = new CurrentRowBoundContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1345;
				this.match(SqlBaseParser.CURRENT);
				this.state = 1346;
				this.match(SqlBaseParser.ROW);
				}
				break;

			case 4:
				_localctx = new BoundedFrameContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1347;
				this.expression();
				this.state = 1348;
				(_localctx as BoundedFrameContext)._boundType = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === SqlBaseParser.PRECEDING || _la === SqlBaseParser.FOLLOWING)) {
					(_localctx as BoundedFrameContext)._boundType = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public explainOption(): ExplainOptionContext {
		let _localctx: ExplainOptionContext = new ExplainOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, SqlBaseParser.RULE_explainOption);
		let _la: number;
		try {
			this.state = 1356;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SqlBaseParser.FORMAT:
				_localctx = new ExplainFormatContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1352;
				this.match(SqlBaseParser.FORMAT);
				this.state = 1353;
				(_localctx as ExplainFormatContext)._value = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === SqlBaseParser.TEXT || _la === SqlBaseParser.GRAPHVIZ)) {
					(_localctx as ExplainFormatContext)._value = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			case SqlBaseParser.TYPE:
				_localctx = new ExplainTypeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1354;
				this.match(SqlBaseParser.TYPE);
				this.state = 1355;
				(_localctx as ExplainTypeContext)._value = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === SqlBaseParser.LOGICAL || _la === SqlBaseParser.DISTRIBUTED)) {
					(_localctx as ExplainTypeContext)._value = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public transactionMode(): TransactionModeContext {
		let _localctx: TransactionModeContext = new TransactionModeContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, SqlBaseParser.RULE_transactionMode);
		let _la: number;
		try {
			this.state = 1363;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SqlBaseParser.ISOLATION:
				_localctx = new IsolationLevelContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1358;
				this.match(SqlBaseParser.ISOLATION);
				this.state = 1359;
				this.match(SqlBaseParser.LEVEL);
				this.state = 1360;
				this.levelOfIsolation();
				}
				break;
			case SqlBaseParser.READ:
				_localctx = new TransactionAccessModeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1361;
				this.match(SqlBaseParser.READ);
				this.state = 1362;
				(_localctx as TransactionAccessModeContext)._accessMode = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === SqlBaseParser.WRITE || _la === SqlBaseParser.ONLY)) {
					(_localctx as TransactionAccessModeContext)._accessMode = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public levelOfIsolation(): LevelOfIsolationContext {
		let _localctx: LevelOfIsolationContext = new LevelOfIsolationContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, SqlBaseParser.RULE_levelOfIsolation);
		try {
			this.state = 1372;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 166, this._ctx) ) {
			case 1:
				_localctx = new ReadUncommittedContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1365;
				this.match(SqlBaseParser.READ);
				this.state = 1366;
				this.match(SqlBaseParser.UNCOMMITTED);
				}
				break;

			case 2:
				_localctx = new ReadCommittedContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1367;
				this.match(SqlBaseParser.READ);
				this.state = 1368;
				this.match(SqlBaseParser.COMMITTED);
				}
				break;

			case 3:
				_localctx = new RepeatableReadContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1369;
				this.match(SqlBaseParser.REPEATABLE);
				this.state = 1370;
				this.match(SqlBaseParser.READ);
				}
				break;

			case 4:
				_localctx = new SerializableContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1371;
				this.match(SqlBaseParser.SERIALIZABLE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public callArgument(): CallArgumentContext {
		let _localctx: CallArgumentContext = new CallArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, SqlBaseParser.RULE_callArgument);
		try {
			this.state = 1379;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 167, this._ctx) ) {
			case 1:
				_localctx = new PositionalArgumentContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1374;
				this.expression();
				}
				break;

			case 2:
				_localctx = new NamedArgumentContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1375;
				this.identifier();
				this.state = 1376;
				this.match(SqlBaseParser.T__8);
				this.state = 1377;
				this.expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public privilege(): PrivilegeContext {
		let _localctx: PrivilegeContext = new PrivilegeContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, SqlBaseParser.RULE_privilege);
		try {
			this.state = 1385;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SqlBaseParser.SELECT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1381;
				this.match(SqlBaseParser.SELECT);
				}
				break;
			case SqlBaseParser.DELETE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1382;
				this.match(SqlBaseParser.DELETE);
				}
				break;
			case SqlBaseParser.INSERT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1383;
				this.match(SqlBaseParser.INSERT);
				}
				break;
			case SqlBaseParser.ADD:
			case SqlBaseParser.NO:
			case SqlBaseParser.SUBSTRING:
			case SqlBaseParser.POSITION:
			case SqlBaseParser.TINYINT:
			case SqlBaseParser.SMALLINT:
			case SqlBaseParser.INTEGER:
			case SqlBaseParser.DATE:
			case SqlBaseParser.TIME:
			case SqlBaseParser.TIMESTAMP:
			case SqlBaseParser.INTERVAL:
			case SqlBaseParser.YEAR:
			case SqlBaseParser.MONTH:
			case SqlBaseParser.DAY:
			case SqlBaseParser.HOUR:
			case SqlBaseParser.MINUTE:
			case SqlBaseParser.SECOND:
			case SqlBaseParser.ZONE:
			case SqlBaseParser.FILTER:
			case SqlBaseParser.OVER:
			case SqlBaseParser.PARTITION:
			case SqlBaseParser.RANGE:
			case SqlBaseParser.ROWS:
			case SqlBaseParser.PRECEDING:
			case SqlBaseParser.FOLLOWING:
			case SqlBaseParser.CURRENT:
			case SqlBaseParser.ROW:
			case SqlBaseParser.SCHEMA:
			case SqlBaseParser.VIEW:
			case SqlBaseParser.REPLACE:
			case SqlBaseParser.GRANT:
			case SqlBaseParser.REVOKE:
			case SqlBaseParser.PRIVILEGES:
			case SqlBaseParser.PUBLIC:
			case SqlBaseParser.OPTION:
			case SqlBaseParser.EXPLAIN:
			case SqlBaseParser.ANALYZE:
			case SqlBaseParser.FORMAT:
			case SqlBaseParser.TYPE:
			case SqlBaseParser.TEXT:
			case SqlBaseParser.GRAPHVIZ:
			case SqlBaseParser.LOGICAL:
			case SqlBaseParser.DISTRIBUTED:
			case SqlBaseParser.SHOW:
			case SqlBaseParser.TABLES:
			case SqlBaseParser.SCHEMAS:
			case SqlBaseParser.CATALOGS:
			case SqlBaseParser.COLUMNS:
			case SqlBaseParser.COLUMN:
			case SqlBaseParser.USE:
			case SqlBaseParser.PARTITIONS:
			case SqlBaseParser.FUNCTIONS:
			case SqlBaseParser.TO:
			case SqlBaseParser.SYSTEM:
			case SqlBaseParser.BERNOULLI:
			case SqlBaseParser.POISSONIZED:
			case SqlBaseParser.TABLESAMPLE:
			case SqlBaseParser.ARRAY:
			case SqlBaseParser.MAP:
			case SqlBaseParser.SET:
			case SqlBaseParser.RESET:
			case SqlBaseParser.SESSION:
			case SqlBaseParser.DATA:
			case SqlBaseParser.START:
			case SqlBaseParser.TRANSACTION:
			case SqlBaseParser.COMMIT:
			case SqlBaseParser.ROLLBACK:
			case SqlBaseParser.WORK:
			case SqlBaseParser.ISOLATION:
			case SqlBaseParser.LEVEL:
			case SqlBaseParser.SERIALIZABLE:
			case SqlBaseParser.REPEATABLE:
			case SqlBaseParser.COMMITTED:
			case SqlBaseParser.UNCOMMITTED:
			case SqlBaseParser.READ:
			case SqlBaseParser.WRITE:
			case SqlBaseParser.ONLY:
			case SqlBaseParser.CALL:
			case SqlBaseParser.INPUT:
			case SqlBaseParser.OUTPUT:
			case SqlBaseParser.CASCADE:
			case SqlBaseParser.RESTRICT:
			case SqlBaseParser.INCLUDING:
			case SqlBaseParser.EXCLUDING:
			case SqlBaseParser.PROPERTIES:
			case SqlBaseParser.NFD:
			case SqlBaseParser.NFC:
			case SqlBaseParser.NFKD:
			case SqlBaseParser.NFKC:
			case SqlBaseParser.IF:
			case SqlBaseParser.NULLIF:
			case SqlBaseParser.COALESCE:
			case SqlBaseParser.IDENTIFIER:
			case SqlBaseParser.DIGIT_IDENTIFIER:
			case SqlBaseParser.QUOTED_IDENTIFIER:
			case SqlBaseParser.BACKQUOTED_IDENTIFIER:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1384;
				this.identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedName(): QualifiedNameContext {
		let _localctx: QualifiedNameContext = new QualifiedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, SqlBaseParser.RULE_qualifiedName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1387;
			this.identifier();
			this.state = 1392;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 169, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1388;
					this.match(SqlBaseParser.T__0);
					this.state = 1389;
					this.identifier();
					}
					}
				}
				this.state = 1394;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 169, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, SqlBaseParser.RULE_identifier);
		try {
			this.state = 1400;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SqlBaseParser.IDENTIFIER:
				_localctx = new UnquotedIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1395;
				this.match(SqlBaseParser.IDENTIFIER);
				}
				break;
			case SqlBaseParser.QUOTED_IDENTIFIER:
				_localctx = new QuotedIdentifierAlternativeContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1396;
				this.quotedIdentifier();
				}
				break;
			case SqlBaseParser.ADD:
			case SqlBaseParser.NO:
			case SqlBaseParser.SUBSTRING:
			case SqlBaseParser.POSITION:
			case SqlBaseParser.TINYINT:
			case SqlBaseParser.SMALLINT:
			case SqlBaseParser.INTEGER:
			case SqlBaseParser.DATE:
			case SqlBaseParser.TIME:
			case SqlBaseParser.TIMESTAMP:
			case SqlBaseParser.INTERVAL:
			case SqlBaseParser.YEAR:
			case SqlBaseParser.MONTH:
			case SqlBaseParser.DAY:
			case SqlBaseParser.HOUR:
			case SqlBaseParser.MINUTE:
			case SqlBaseParser.SECOND:
			case SqlBaseParser.ZONE:
			case SqlBaseParser.FILTER:
			case SqlBaseParser.OVER:
			case SqlBaseParser.PARTITION:
			case SqlBaseParser.RANGE:
			case SqlBaseParser.ROWS:
			case SqlBaseParser.PRECEDING:
			case SqlBaseParser.FOLLOWING:
			case SqlBaseParser.CURRENT:
			case SqlBaseParser.ROW:
			case SqlBaseParser.SCHEMA:
			case SqlBaseParser.VIEW:
			case SqlBaseParser.REPLACE:
			case SqlBaseParser.GRANT:
			case SqlBaseParser.REVOKE:
			case SqlBaseParser.PRIVILEGES:
			case SqlBaseParser.PUBLIC:
			case SqlBaseParser.OPTION:
			case SqlBaseParser.EXPLAIN:
			case SqlBaseParser.ANALYZE:
			case SqlBaseParser.FORMAT:
			case SqlBaseParser.TYPE:
			case SqlBaseParser.TEXT:
			case SqlBaseParser.GRAPHVIZ:
			case SqlBaseParser.LOGICAL:
			case SqlBaseParser.DISTRIBUTED:
			case SqlBaseParser.SHOW:
			case SqlBaseParser.TABLES:
			case SqlBaseParser.SCHEMAS:
			case SqlBaseParser.CATALOGS:
			case SqlBaseParser.COLUMNS:
			case SqlBaseParser.COLUMN:
			case SqlBaseParser.USE:
			case SqlBaseParser.PARTITIONS:
			case SqlBaseParser.FUNCTIONS:
			case SqlBaseParser.TO:
			case SqlBaseParser.SYSTEM:
			case SqlBaseParser.BERNOULLI:
			case SqlBaseParser.POISSONIZED:
			case SqlBaseParser.TABLESAMPLE:
			case SqlBaseParser.ARRAY:
			case SqlBaseParser.MAP:
			case SqlBaseParser.SET:
			case SqlBaseParser.RESET:
			case SqlBaseParser.SESSION:
			case SqlBaseParser.DATA:
			case SqlBaseParser.START:
			case SqlBaseParser.TRANSACTION:
			case SqlBaseParser.COMMIT:
			case SqlBaseParser.ROLLBACK:
			case SqlBaseParser.WORK:
			case SqlBaseParser.ISOLATION:
			case SqlBaseParser.LEVEL:
			case SqlBaseParser.SERIALIZABLE:
			case SqlBaseParser.REPEATABLE:
			case SqlBaseParser.COMMITTED:
			case SqlBaseParser.UNCOMMITTED:
			case SqlBaseParser.READ:
			case SqlBaseParser.WRITE:
			case SqlBaseParser.ONLY:
			case SqlBaseParser.CALL:
			case SqlBaseParser.INPUT:
			case SqlBaseParser.OUTPUT:
			case SqlBaseParser.CASCADE:
			case SqlBaseParser.RESTRICT:
			case SqlBaseParser.INCLUDING:
			case SqlBaseParser.EXCLUDING:
			case SqlBaseParser.PROPERTIES:
			case SqlBaseParser.NFD:
			case SqlBaseParser.NFC:
			case SqlBaseParser.NFKD:
			case SqlBaseParser.NFKC:
			case SqlBaseParser.IF:
			case SqlBaseParser.NULLIF:
			case SqlBaseParser.COALESCE:
				_localctx = new UnquotedIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1397;
				this.nonReserved();
				}
				break;
			case SqlBaseParser.BACKQUOTED_IDENTIFIER:
				_localctx = new BackQuotedIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1398;
				this.match(SqlBaseParser.BACKQUOTED_IDENTIFIER);
				}
				break;
			case SqlBaseParser.DIGIT_IDENTIFIER:
				_localctx = new DigitIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1399;
				this.match(SqlBaseParser.DIGIT_IDENTIFIER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public quotedIdentifier(): QuotedIdentifierContext {
		let _localctx: QuotedIdentifierContext = new QuotedIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, SqlBaseParser.RULE_quotedIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1402;
			this.match(SqlBaseParser.QUOTED_IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, SqlBaseParser.RULE_number);
		try {
			this.state = 1406;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SqlBaseParser.DECIMAL_VALUE:
				_localctx = new DecimalLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1404;
				this.match(SqlBaseParser.DECIMAL_VALUE);
				}
				break;
			case SqlBaseParser.INTEGER_VALUE:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1405;
				this.match(SqlBaseParser.INTEGER_VALUE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nonReserved(): NonReservedContext {
		let _localctx: NonReservedContext = new NonReservedContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, SqlBaseParser.RULE_nonReserved);
		try {
			this.state = 1497;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SqlBaseParser.SHOW:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1408;
				this.match(SqlBaseParser.SHOW);
				}
				break;
			case SqlBaseParser.TABLES:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1409;
				this.match(SqlBaseParser.TABLES);
				}
				break;
			case SqlBaseParser.COLUMNS:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1410;
				this.match(SqlBaseParser.COLUMNS);
				}
				break;
			case SqlBaseParser.COLUMN:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1411;
				this.match(SqlBaseParser.COLUMN);
				}
				break;
			case SqlBaseParser.PARTITIONS:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1412;
				this.match(SqlBaseParser.PARTITIONS);
				}
				break;
			case SqlBaseParser.FUNCTIONS:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1413;
				this.match(SqlBaseParser.FUNCTIONS);
				}
				break;
			case SqlBaseParser.SCHEMAS:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1414;
				this.match(SqlBaseParser.SCHEMAS);
				}
				break;
			case SqlBaseParser.CATALOGS:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1415;
				this.match(SqlBaseParser.CATALOGS);
				}
				break;
			case SqlBaseParser.SESSION:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1416;
				this.match(SqlBaseParser.SESSION);
				}
				break;
			case SqlBaseParser.ADD:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1417;
				this.match(SqlBaseParser.ADD);
				}
				break;
			case SqlBaseParser.FILTER:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1418;
				this.match(SqlBaseParser.FILTER);
				}
				break;
			case SqlBaseParser.OVER:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1419;
				this.match(SqlBaseParser.OVER);
				}
				break;
			case SqlBaseParser.PARTITION:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1420;
				this.match(SqlBaseParser.PARTITION);
				}
				break;
			case SqlBaseParser.RANGE:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1421;
				this.match(SqlBaseParser.RANGE);
				}
				break;
			case SqlBaseParser.ROWS:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1422;
				this.match(SqlBaseParser.ROWS);
				}
				break;
			case SqlBaseParser.PRECEDING:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1423;
				this.match(SqlBaseParser.PRECEDING);
				}
				break;
			case SqlBaseParser.FOLLOWING:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 1424;
				this.match(SqlBaseParser.FOLLOWING);
				}
				break;
			case SqlBaseParser.CURRENT:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 1425;
				this.match(SqlBaseParser.CURRENT);
				}
				break;
			case SqlBaseParser.ROW:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 1426;
				this.match(SqlBaseParser.ROW);
				}
				break;
			case SqlBaseParser.MAP:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 1427;
				this.match(SqlBaseParser.MAP);
				}
				break;
			case SqlBaseParser.ARRAY:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 1428;
				this.match(SqlBaseParser.ARRAY);
				}
				break;
			case SqlBaseParser.TINYINT:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 1429;
				this.match(SqlBaseParser.TINYINT);
				}
				break;
			case SqlBaseParser.SMALLINT:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 1430;
				this.match(SqlBaseParser.SMALLINT);
				}
				break;
			case SqlBaseParser.INTEGER:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 1431;
				this.match(SqlBaseParser.INTEGER);
				}
				break;
			case SqlBaseParser.DATE:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 1432;
				this.match(SqlBaseParser.DATE);
				}
				break;
			case SqlBaseParser.TIME:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 1433;
				this.match(SqlBaseParser.TIME);
				}
				break;
			case SqlBaseParser.TIMESTAMP:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 1434;
				this.match(SqlBaseParser.TIMESTAMP);
				}
				break;
			case SqlBaseParser.INTERVAL:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 1435;
				this.match(SqlBaseParser.INTERVAL);
				}
				break;
			case SqlBaseParser.ZONE:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 1436;
				this.match(SqlBaseParser.ZONE);
				}
				break;
			case SqlBaseParser.YEAR:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 1437;
				this.match(SqlBaseParser.YEAR);
				}
				break;
			case SqlBaseParser.MONTH:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 1438;
				this.match(SqlBaseParser.MONTH);
				}
				break;
			case SqlBaseParser.DAY:
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 1439;
				this.match(SqlBaseParser.DAY);
				}
				break;
			case SqlBaseParser.HOUR:
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 1440;
				this.match(SqlBaseParser.HOUR);
				}
				break;
			case SqlBaseParser.MINUTE:
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 1441;
				this.match(SqlBaseParser.MINUTE);
				}
				break;
			case SqlBaseParser.SECOND:
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 1442;
				this.match(SqlBaseParser.SECOND);
				}
				break;
			case SqlBaseParser.EXPLAIN:
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 1443;
				this.match(SqlBaseParser.EXPLAIN);
				}
				break;
			case SqlBaseParser.ANALYZE:
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 1444;
				this.match(SqlBaseParser.ANALYZE);
				}
				break;
			case SqlBaseParser.FORMAT:
				this.enterOuterAlt(_localctx, 38);
				{
				this.state = 1445;
				this.match(SqlBaseParser.FORMAT);
				}
				break;
			case SqlBaseParser.TYPE:
				this.enterOuterAlt(_localctx, 39);
				{
				this.state = 1446;
				this.match(SqlBaseParser.TYPE);
				}
				break;
			case SqlBaseParser.TEXT:
				this.enterOuterAlt(_localctx, 40);
				{
				this.state = 1447;
				this.match(SqlBaseParser.TEXT);
				}
				break;
			case SqlBaseParser.GRAPHVIZ:
				this.enterOuterAlt(_localctx, 41);
				{
				this.state = 1448;
				this.match(SqlBaseParser.GRAPHVIZ);
				}
				break;
			case SqlBaseParser.LOGICAL:
				this.enterOuterAlt(_localctx, 42);
				{
				this.state = 1449;
				this.match(SqlBaseParser.LOGICAL);
				}
				break;
			case SqlBaseParser.DISTRIBUTED:
				this.enterOuterAlt(_localctx, 43);
				{
				this.state = 1450;
				this.match(SqlBaseParser.DISTRIBUTED);
				}
				break;
			case SqlBaseParser.TABLESAMPLE:
				this.enterOuterAlt(_localctx, 44);
				{
				this.state = 1451;
				this.match(SqlBaseParser.TABLESAMPLE);
				}
				break;
			case SqlBaseParser.SYSTEM:
				this.enterOuterAlt(_localctx, 45);
				{
				this.state = 1452;
				this.match(SqlBaseParser.SYSTEM);
				}
				break;
			case SqlBaseParser.BERNOULLI:
				this.enterOuterAlt(_localctx, 46);
				{
				this.state = 1453;
				this.match(SqlBaseParser.BERNOULLI);
				}
				break;
			case SqlBaseParser.POISSONIZED:
				this.enterOuterAlt(_localctx, 47);
				{
				this.state = 1454;
				this.match(SqlBaseParser.POISSONIZED);
				}
				break;
			case SqlBaseParser.USE:
				this.enterOuterAlt(_localctx, 48);
				{
				this.state = 1455;
				this.match(SqlBaseParser.USE);
				}
				break;
			case SqlBaseParser.TO:
				this.enterOuterAlt(_localctx, 49);
				{
				this.state = 1456;
				this.match(SqlBaseParser.TO);
				}
				break;
			case SqlBaseParser.SET:
				this.enterOuterAlt(_localctx, 50);
				{
				this.state = 1457;
				this.match(SqlBaseParser.SET);
				}
				break;
			case SqlBaseParser.RESET:
				this.enterOuterAlt(_localctx, 51);
				{
				this.state = 1458;
				this.match(SqlBaseParser.RESET);
				}
				break;
			case SqlBaseParser.VIEW:
				this.enterOuterAlt(_localctx, 52);
				{
				this.state = 1459;
				this.match(SqlBaseParser.VIEW);
				}
				break;
			case SqlBaseParser.REPLACE:
				this.enterOuterAlt(_localctx, 53);
				{
				this.state = 1460;
				this.match(SqlBaseParser.REPLACE);
				}
				break;
			case SqlBaseParser.IF:
				this.enterOuterAlt(_localctx, 54);
				{
				this.state = 1461;
				this.match(SqlBaseParser.IF);
				}
				break;
			case SqlBaseParser.NULLIF:
				this.enterOuterAlt(_localctx, 55);
				{
				this.state = 1462;
				this.match(SqlBaseParser.NULLIF);
				}
				break;
			case SqlBaseParser.COALESCE:
				this.enterOuterAlt(_localctx, 56);
				{
				this.state = 1463;
				this.match(SqlBaseParser.COALESCE);
				}
				break;
			case SqlBaseParser.NFD:
			case SqlBaseParser.NFC:
			case SqlBaseParser.NFKD:
			case SqlBaseParser.NFKC:
				this.enterOuterAlt(_localctx, 57);
				{
				this.state = 1464;
				this.normalForm();
				}
				break;
			case SqlBaseParser.POSITION:
				this.enterOuterAlt(_localctx, 58);
				{
				this.state = 1465;
				this.match(SqlBaseParser.POSITION);
				}
				break;
			case SqlBaseParser.NO:
				this.enterOuterAlt(_localctx, 59);
				{
				this.state = 1466;
				this.match(SqlBaseParser.NO);
				}
				break;
			case SqlBaseParser.DATA:
				this.enterOuterAlt(_localctx, 60);
				{
				this.state = 1467;
				this.match(SqlBaseParser.DATA);
				}
				break;
			case SqlBaseParser.START:
				this.enterOuterAlt(_localctx, 61);
				{
				this.state = 1468;
				this.match(SqlBaseParser.START);
				}
				break;
			case SqlBaseParser.TRANSACTION:
				this.enterOuterAlt(_localctx, 62);
				{
				this.state = 1469;
				this.match(SqlBaseParser.TRANSACTION);
				}
				break;
			case SqlBaseParser.COMMIT:
				this.enterOuterAlt(_localctx, 63);
				{
				this.state = 1470;
				this.match(SqlBaseParser.COMMIT);
				}
				break;
			case SqlBaseParser.ROLLBACK:
				this.enterOuterAlt(_localctx, 64);
				{
				this.state = 1471;
				this.match(SqlBaseParser.ROLLBACK);
				}
				break;
			case SqlBaseParser.WORK:
				this.enterOuterAlt(_localctx, 65);
				{
				this.state = 1472;
				this.match(SqlBaseParser.WORK);
				}
				break;
			case SqlBaseParser.ISOLATION:
				this.enterOuterAlt(_localctx, 66);
				{
				this.state = 1473;
				this.match(SqlBaseParser.ISOLATION);
				}
				break;
			case SqlBaseParser.LEVEL:
				this.enterOuterAlt(_localctx, 67);
				{
				this.state = 1474;
				this.match(SqlBaseParser.LEVEL);
				}
				break;
			case SqlBaseParser.SERIALIZABLE:
				this.enterOuterAlt(_localctx, 68);
				{
				this.state = 1475;
				this.match(SqlBaseParser.SERIALIZABLE);
				}
				break;
			case SqlBaseParser.REPEATABLE:
				this.enterOuterAlt(_localctx, 69);
				{
				this.state = 1476;
				this.match(SqlBaseParser.REPEATABLE);
				}
				break;
			case SqlBaseParser.COMMITTED:
				this.enterOuterAlt(_localctx, 70);
				{
				this.state = 1477;
				this.match(SqlBaseParser.COMMITTED);
				}
				break;
			case SqlBaseParser.UNCOMMITTED:
				this.enterOuterAlt(_localctx, 71);
				{
				this.state = 1478;
				this.match(SqlBaseParser.UNCOMMITTED);
				}
				break;
			case SqlBaseParser.READ:
				this.enterOuterAlt(_localctx, 72);
				{
				this.state = 1479;
				this.match(SqlBaseParser.READ);
				}
				break;
			case SqlBaseParser.WRITE:
				this.enterOuterAlt(_localctx, 73);
				{
				this.state = 1480;
				this.match(SqlBaseParser.WRITE);
				}
				break;
			case SqlBaseParser.ONLY:
				this.enterOuterAlt(_localctx, 74);
				{
				this.state = 1481;
				this.match(SqlBaseParser.ONLY);
				}
				break;
			case SqlBaseParser.CALL:
				this.enterOuterAlt(_localctx, 75);
				{
				this.state = 1482;
				this.match(SqlBaseParser.CALL);
				}
				break;
			case SqlBaseParser.GRANT:
				this.enterOuterAlt(_localctx, 76);
				{
				this.state = 1483;
				this.match(SqlBaseParser.GRANT);
				}
				break;
			case SqlBaseParser.REVOKE:
				this.enterOuterAlt(_localctx, 77);
				{
				this.state = 1484;
				this.match(SqlBaseParser.REVOKE);
				}
				break;
			case SqlBaseParser.PRIVILEGES:
				this.enterOuterAlt(_localctx, 78);
				{
				this.state = 1485;
				this.match(SqlBaseParser.PRIVILEGES);
				}
				break;
			case SqlBaseParser.PUBLIC:
				this.enterOuterAlt(_localctx, 79);
				{
				this.state = 1486;
				this.match(SqlBaseParser.PUBLIC);
				}
				break;
			case SqlBaseParser.OPTION:
				this.enterOuterAlt(_localctx, 80);
				{
				this.state = 1487;
				this.match(SqlBaseParser.OPTION);
				}
				break;
			case SqlBaseParser.SUBSTRING:
				this.enterOuterAlt(_localctx, 81);
				{
				this.state = 1488;
				this.match(SqlBaseParser.SUBSTRING);
				}
				break;
			case SqlBaseParser.SCHEMA:
				this.enterOuterAlt(_localctx, 82);
				{
				this.state = 1489;
				this.match(SqlBaseParser.SCHEMA);
				}
				break;
			case SqlBaseParser.CASCADE:
				this.enterOuterAlt(_localctx, 83);
				{
				this.state = 1490;
				this.match(SqlBaseParser.CASCADE);
				}
				break;
			case SqlBaseParser.RESTRICT:
				this.enterOuterAlt(_localctx, 84);
				{
				this.state = 1491;
				this.match(SqlBaseParser.RESTRICT);
				}
				break;
			case SqlBaseParser.INPUT:
				this.enterOuterAlt(_localctx, 85);
				{
				this.state = 1492;
				this.match(SqlBaseParser.INPUT);
				}
				break;
			case SqlBaseParser.OUTPUT:
				this.enterOuterAlt(_localctx, 86);
				{
				this.state = 1493;
				this.match(SqlBaseParser.OUTPUT);
				}
				break;
			case SqlBaseParser.INCLUDING:
				this.enterOuterAlt(_localctx, 87);
				{
				this.state = 1494;
				this.match(SqlBaseParser.INCLUDING);
				}
				break;
			case SqlBaseParser.EXCLUDING:
				this.enterOuterAlt(_localctx, 88);
				{
				this.state = 1495;
				this.match(SqlBaseParser.EXCLUDING);
				}
				break;
			case SqlBaseParser.PROPERTIES:
				this.enterOuterAlt(_localctx, 89);
				{
				this.state = 1496;
				this.match(SqlBaseParser.PROPERTIES);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public normalForm(): NormalFormContext {
		let _localctx: NormalFormContext = new NormalFormContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, SqlBaseParser.RULE_normalForm);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1499;
			_la = this._input.LA(1);
			if (!(((((_la - 177)) & ~0x1F) === 0 && ((1 << (_la - 177)) & ((1 << (SqlBaseParser.NFD - 177)) | (1 << (SqlBaseParser.NFC - 177)) | (1 << (SqlBaseParser.NFKD - 177)) | (1 << (SqlBaseParser.NFKC - 177)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 12:
			return this.queryTerm_sempred(_localctx as QueryTermContext, predIndex);

		case 23:
			return this.relation_sempred(_localctx as RelationContext, predIndex);

		case 32:
			return this.booleanExpression_sempred(_localctx as BooleanExpressionContext, predIndex);

		case 35:
			return this.valueExpression_sempred(_localctx as ValueExpressionContext, predIndex);

		case 36:
			return this.primaryExpression_sempred(_localctx as PrimaryExpressionContext, predIndex);

		case 43:
			return this.type_sempred(_localctx as TypeContext, predIndex);
		}
		return true;
	}
	private queryTerm_sempred(_localctx: QueryTermContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);

		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private relation_sempred(_localctx: RelationContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private booleanExpression_sempred(_localctx: BooleanExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 2);

		case 4:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private valueExpression_sempred(_localctx: ValueExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.precpred(this._ctx, 3);

		case 6:
			return this.precpred(this._ctx, 2);

		case 7:
			return this.precpred(this._ctx, 1);

		case 8:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}
	private primaryExpression_sempred(_localctx: PrimaryExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 9:
			return this.precpred(this._ctx, 11);

		case 10:
			return this.precpred(this._ctx, 9);
		}
		return true;
	}
	private type_sempred(_localctx: TypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 11:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 3;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xD6\u05E0\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x03\x02\x03\x02\x03\x02\x07\x02\x82\n\x02\f\x02\x0E" +
		"\x02\x85\v\x02\x03\x02\x05\x02\x88\n\x02\x03\x02\x03\x02\x03\x03\x03\x03" +
		"\x03\x03\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05" +
		"\x9F\n\x05\x03\x05\x03\x05\x03\x05\x05\x05\xA4\n\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x05\x05\xAA\n\x05\x03\x05\x03\x05\x05\x05\xAE\n\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x05\x05\xBC\n\x05\x03\x05\x03\x05\x03\x05\x05\x05\xC1" +
		"\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\xC7\n\x05\x03\x05\x05\x05" +
		"\xCA\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\xD1\n\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05\xD8\n\x05\f\x05\x0E\x05\xDB" +
		"\v\x05\x03\x05\x03\x05\x03\x05\x05\x05\xE0\n\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x05\x05\xE6\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05" +
		"\x05\xED\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x05\x05\xF6\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x05\x05\u0112\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\u011D\n\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05\u0126\n\x05\f\x05\x0E\x05" +
		"\u0129\v\x05\x05\x05\u012B\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x07\x05\u0133\n\x05\f\x05\x0E\x05\u0136\v\x05\x03\x05\x03\x05" +
		"\x05\x05\u013A\n\x05\x03\x05\x03\x05\x05\x05\u013E\n\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\u0146\n\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x05\x05\u014C\n\x05\x03\x05\x03\x05\x03\x05\x07\x05\u0151" +
		"\n\x05\f\x05\x0E\x05\u0154\v\x05\x03\x05\x03\x05\x05\x05\u0158\n\x05\x03" +
		"\x05\x03\x05\x05\x05\u015C\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x05\x05\u0164\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05\u016A" +
		"\n\x05\f\x05\x0E\x05\u016D\v\x05\x03\x05\x03\x05\x05\x05\u0171\n\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x05\x05\u0180\n\x05\x03\x05\x03\x05\x05\x05" +
		"\u0184\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\u018A\n\x05\x03\x05" +
		"\x03\x05\x05\x05\u018E\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\u0194" +
		"\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x07\x05\u01B0\n\x05\f\x05\x0E\x05\u01B3\v\x05\x05\x05\u01B5\n\x05\x03" +
		"\x05\x03\x05\x05\x05\u01B9\n\x05\x03\x05\x03\x05\x05\x05\u01BD\n\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\u01C5\n\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05\u01CC\n\x05\f\x05\x0E\x05\u01CF" +
		"\v\x05\x05\x05\u01D1\n\x05\x03\x05\x03\x05\x05\x05\u01D5\n\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05\u01E5\n\x05\f\x05\x0E\x05\u01E8" +
		"\v\x05\x05\x05\u01EA\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x05\x05\u01F2\n\x05\x03\x06\x05\x06\u01F5\n\x06\x03\x06\x03\x06\x03" +
		"\x07\x03\x07\x05\x07\u01FB\n\x07\x03\x07\x03\x07\x03\x07\x07\x07\u0200" +
		"\n\x07\f\x07\x0E\x07\u0203\v\x07\x03\b\x03\b\x05\b\u0207\n\b\x03\t\x03" +
		"\t\x03\t\x03\n\x03\n\x03\n\x03\n\x05\n\u0210\n\n\x03\v\x03\v\x03\v\x03" +
		"\v\x07\v\u0216\n\v\f\v\x0E\v\u0219\v\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03" +
		"\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\u0227\n\r\f\r\x0E\r\u022A" +
		"\v\r\x05\r\u022C\n\r\x03\r\x03\r\x05\r\u0230\n\r\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0238\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x05\x0E\u023E\n\x0E\x03\x0E\x07\x0E\u0241\n\x0E\f\x0E\x0E\x0E\u0244" +
		"\v\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F" +
		"\u024D\n\x0F\f\x0F\x0E\x0F\u0250\v\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x05\x0F\u0256\n\x0F\x03\x10\x03\x10\x05\x10\u025A\n\x10\x03\x10\x03\x10" +
		"\x05\x10\u025E\n\x10\x03\x11\x03\x11\x05\x11\u0262\n\x11\x03\x11\x03\x11" +
		"\x03\x11\x07\x11\u0267\n\x11\f\x11\x0E\x11\u026A\v\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x07\x11\u0270\n\x11\f\x11\x0E\x11\u0273\v\x11\x05\x11" +
		"\u0275\n\x11\x03\x11\x03\x11\x05\x11\u0279\n\x11\x03\x11\x03\x11\x03\x11" +
		"\x05\x11\u027E\n\x11\x03\x11\x03\x11\x05\x11\u0282\n\x11\x03\x12\x05\x12" +
		"\u0285\n\x12\x03\x12\x03\x12\x03\x12\x07\x12\u028A\n\x12\f\x12\x0E\x12" +
		"\u028D\v\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\u0295" +
		"\n\x13\f\x13\x0E\x13\u0298\v\x13\x05\x13\u029A\n\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x07\x13\u02A2\n\x13\f\x13\x0E\x13\u02A5\v" +
		"\x13\x05\x13\u02A7\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x07\x13\u02B0\n\x13\f\x13\x0E\x13\u02B3\v\x13\x03\x13\x03\x13" +
		"\x05\x13\u02B7\n\x13\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14\u02BD\n\x14" +
		"\f\x14\x0E\x14\u02C0\v\x14\x05\x14\u02C2\n\x14\x03\x14\x03\x14\x05\x14" +
		"\u02C6\n\x14\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\u02CC\n\x15\f\x15" +
		"\x0E\x15\u02CF\v\x15\x05\x15\u02D1\n\x15\x03\x15\x03\x15\x05\x15\u02D5" +
		"\n\x15\x03\x16\x03\x16\x05\x16\u02D9\n\x16\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x05\x18\u02E4\n\x18\x03\x18" +
		"\x05\x18\u02E7\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u02EE" +
		"\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x05\x19\u0301\n\x19\x07\x19\u0303\n\x19\f\x19\x0E\x19\u0306\v\x19\x03" +
		"\x1A\x05\x1A\u0309\n\x1A\x03\x1A\x03\x1A\x05\x1A\u030D\n\x1A\x03\x1A\x03" +
		"\x1A\x05\x1A\u0311\n\x1A\x03\x1A\x03\x1A\x05\x1A\u0315\n\x1A\x05\x1A\u0317" +
		"\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B" +
		"\u0320\n\x1B\f\x1B\x0E\x1B\u0323\v\x1B\x03\x1B\x03\x1B\x05\x1B\u0327\n" +
		"\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0330" +
		"\n\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x05\x1E\u0336\n\x1E\x03\x1E\x03" +
		"\x1E\x05\x1E\u033A\n\x1E\x05\x1E\u033C\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x07\x1F\u0342\n\x1F\f\x1F\x0E\x1F\u0345\v\x1F\x03\x1F\x03\x1F\x03" +
		" \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x07 \u0353\n \f \x0E \u0356" +
		"\v \x03 \x03 \x03 \x05 \u035B\n \x03 \x03 \x03 \x03 \x05 \u0361\n \x03" +
		"!\x03!\x03\"\x03\"\x03\"\x03\"\x05\"\u0369\n\"\x03\"\x03\"\x03\"\x03\"" +
		"\x03\"\x03\"\x07\"\u0371\n\"\f\"\x0E\"\u0374\v\"\x03#\x03#\x05#\u0378" +
		"\n#\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x05$\u0384\n$\x03" +
		"$\x03$\x03$\x03$\x03$\x03$\x05$\u038C\n$\x03$\x03$\x03$\x03$\x03$\x07" +
		"$\u0393\n$\f$\x0E$\u0396\v$\x03$\x03$\x03$\x05$\u039B\n$\x03$\x03$\x03" +
		"$\x03$\x03$\x03$\x05$\u03A3\n$\x03$\x03$\x03$\x03$\x05$\u03A9\n$\x03$" +
		"\x03$\x05$\u03AD\n$\x03$\x03$\x03$\x05$\u03B2\n$\x03$\x03$\x03$\x05$\u03B7" +
		"\n$\x03%\x03%\x03%\x03%\x05%\u03BD\n%\x03%\x03%\x03%\x03%\x03%\x03%\x03" +
		"%\x03%\x03%\x03%\x03%\x03%\x07%\u03CB\n%\f%\x0E%\u03CE\v%\x03&\x03&\x03" +
		"&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03" +
		"&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x07&\u03E8\n&\f&\x0E&\u03EB\v&\x03" +
		"&\x03&\x03&\x03&\x03&\x03&\x03&\x07&\u03F4\n&\f&\x0E&\u03F7\v&\x03&\x03" +
		"&\x03&\x03&\x03&\x03&\x03&\x05&\u0400\n&\x03&\x05&\u0403\n&\x03&\x03&" +
		"\x03&\x05&\u0408\n&\x03&\x03&\x03&\x07&\u040D\n&\f&\x0E&\u0410\v&\x05" +
		"&\u0412\n&\x03&\x03&\x05&\u0416\n&\x03&\x05&\u0419\n&\x03&\x03&\x03&\x03" +
		"&\x03&\x03&\x03&\x03&\x07&\u0423\n&\f&\x0E&\u0426\v&\x03&\x03&\x03&\x03" +
		"&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x06&\u0438" +
		"\n&\r&\x0E&\u0439\x03&\x03&\x05&\u043E\n&\x03&\x03&\x03&\x03&\x06&\u0444" +
		"\n&\r&\x0E&\u0445\x03&\x03&\x05&\u044A\n&\x03&\x03&\x03&\x03&\x03&\x03" +
		"&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03" +
		"&\x03&\x07&\u0461\n&\f&\x0E&\u0464\v&\x05&\u0466\n&\x03&\x03&\x03&\x03" +
		"&\x03&\x03&\x03&\x05&\u046F\n&\x03&\x03&\x03&\x03&\x05&\u0475\n&\x03&" +
		"\x03&\x03&\x03&\x05&\u047B\n&\x03&\x03&\x03&\x03&\x05&\u0481\n&\x03&\x03" +
		"&\x03&\x03&\x03&\x03&\x03&\x05&\u048A\n&\x03&\x03&\x03&\x03&\x03&\x03" +
		"&\x03&\x05&\u0493\n&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x05" +
		"&\u049E\n&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x07&\u04A8\n&\f&\x0E" +
		"&\u04AB\v&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u04B3\n\'\x03(\x03" +
		"(\x03)\x03)\x03*\x03*\x03+\x03+\x05+\u04BD\n+\x03+\x03+\x03+\x03+\x05" +
		"+\u04C3\n+\x03,\x03,\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03" +
		"-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x07-\u04DC\n" +
		"-\f-\x0E-\u04DF\v-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x07-\u04E8\n-\f" +
		"-\x0E-\u04EB\v-\x03-\x03-\x05-\u04EF\n-\x05-\u04F1\n-\x03-\x03-\x07-\u04F5" +
		"\n-\f-\x0E-\u04F8\v-\x03.\x03.\x05.\u04FC\n.\x03/\x03/\x03/\x03/\x05/" +
		"\u0502\n/\x030\x030\x030\x030\x030\x031\x031\x031\x031\x031\x031\x032" +
		"\x032\x032\x032\x032\x032\x032\x072\u0516\n2\f2\x0E2\u0519\v2\x052\u051B" +
		"\n2\x032\x032\x032\x032\x032\x072\u0522\n2\f2\x0E2\u0525\v2\x052\u0527" +
		"\n2\x032\x052\u052A\n2\x032\x032\x033\x033\x033\x033\x033\x033\x033\x03" +
		"3\x033\x033\x033\x033\x033\x033\x033\x033\x053\u053E\n3\x034\x034\x03" +
		"4\x034\x034\x034\x034\x034\x034\x054\u0549\n4\x035\x035\x035\x035\x05" +
		"5\u054F\n5\x036\x036\x036\x036\x036\x056\u0556\n6\x037\x037\x037\x037" +
		"\x037\x037\x037\x057\u055F\n7\x038\x038\x038\x038\x038\x058\u0566\n8\x03" +
		"9\x039\x039\x039\x059\u056C\n9\x03:\x03:\x03:\x07:\u0571\n:\f:\x0E:\u0574" +
		"\v:\x03;\x03;\x03;\x03;\x03;\x05;\u057B\n;\x03<\x03<\x03=\x03=\x05=\u0581" +
		"\n=\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03" +
		">\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03" +
		">\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03" +
		">\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03" +
		">\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03" +
		">\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03" +
		">\x03>\x03>\x03>\x03>\x03>\x05>\u05DC\n>\x03?\x03?\x03?\x02\x02\b\x1A" +
		"0BHJX@\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
		"\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02" +
		"(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02" +
		"D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02" +
		"`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02" +
		"|\x02\x02\x16\x03\x02\xAD\xAE\x04\x02\r\r!!\x04\x02\x10\x10\xC8\xC8\x03" +
		"\x02\xAF\xB0\x03\x02\x87\x88\x03\x02/0\x03\x02,-\x04\x02\x10\x10\x13\x13" +
		"\x03\x02\x8B\x8D\x03\x02\xC0\xC1\x03\x02\xC2\xC4\x03\x02\xBA\xBF\x03\x02" +
		"\x10\x12\x03\x02)*\x03\x02;@\x03\x02]^\x03\x02wx\x03\x02yz\x03\x02\xA5" +
		"\xA6\x03\x02\xB3\xB6\x02\u070B\x02~\x03\x02\x02\x02\x04\x8B\x03\x02\x02" +
		"\x02\x06\x8E\x03\x02\x02\x02\b\u01F1\x03\x02\x02\x02\n\u01F4\x03\x02\x02" +
		"\x02\f\u01F8\x03\x02\x02\x02\x0E\u0206\x03\x02\x02\x02\x10\u0208\x03\x02" +
		"\x02\x02\x12\u020B\x03\x02\x02\x02\x14\u0211\x03\x02\x02\x02\x16\u021C" +
		"\x03\x02\x02\x02\x18\u0220\x03\x02\x02\x02\x1A\u0231\x03\x02\x02\x02\x1C" +
		"\u0255\x03\x02\x02\x02\x1E\u0257\x03\x02\x02\x02 \u025F\x03\x02\x02\x02" +
		"\"\u0284\x03\x02\x02\x02$\u02B6\x03\x02\x02\x02&\u02C5\x03\x02\x02\x02" +
		"(\u02D4\x03\x02\x02\x02*\u02D6\x03\x02\x02\x02,\u02DF\x03\x02\x02\x02" +
		".\u02ED\x03\x02\x02\x020\u02EF\x03\x02\x02\x022\u0316\x03\x02\x02\x02" +
		"4\u0326\x03\x02\x02\x026\u0328\x03\x02\x02\x028\u0331\x03\x02\x02\x02" +
		":\u0333\x03\x02\x02\x02<\u033D\x03\x02\x02\x02>\u0360\x03\x02\x02\x02" +
		"@\u0362\x03\x02\x02\x02B\u0368\x03\x02\x02\x02D\u0375\x03\x02\x02\x02" +
		"F\u03B6\x03\x02\x02\x02H\u03BC\x03\x02\x02\x02J\u049D\x03\x02\x02\x02" +
		"L\u04B2\x03\x02\x02\x02N\u04B4\x03\x02\x02\x02P\u04B6\x03\x02\x02\x02" +
		"R\u04B8\x03\x02\x02\x02T\u04BA\x03\x02\x02\x02V\u04C4\x03\x02\x02\x02" +
		"X\u04F0\x03\x02\x02\x02Z\u04FB\x03\x02\x02\x02\\\u0501\x03\x02\x02\x02" +
		"^\u0503\x03\x02\x02\x02`\u0508\x03\x02\x02\x02b\u050E\x03\x02\x02\x02" +
		"d\u053D\x03\x02\x02\x02f\u0548\x03\x02\x02\x02h\u054E\x03\x02\x02\x02" +
		"j\u0555\x03\x02\x02\x02l\u055E\x03\x02\x02\x02n\u0565\x03\x02\x02\x02" +
		"p\u056B\x03\x02\x02\x02r\u056D\x03\x02\x02\x02t\u057A\x03\x02\x02\x02" +
		"v\u057C\x03\x02\x02\x02x\u0580\x03\x02\x02\x02z\u05DB\x03\x02\x02\x02" +
		"|\u05DD\x03\x02\x02\x02~\x83\x05\b\x05\x02\x7F\x80\x07\xD4\x02\x02\x80" +
		"\x82\x05\b\x05\x02\x81\x7F\x03\x02\x02\x02\x82\x85\x03\x02\x02\x02\x83" +
		"\x81\x03\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84\x87\x03\x02\x02\x02\x85" +
		"\x83\x03\x02\x02\x02\x86\x88\x07\xD4\x02\x02\x87\x86\x03\x02\x02\x02\x87" +
		"\x88\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89\x8A\x07\x02\x02\x03\x8A" +
		"\x03\x03\x02\x02\x02\x8B\x8C\x05\b\x05\x02\x8C\x8D\x07\x02\x02\x03\x8D" +
		"\x05\x03\x02\x02\x02\x8E\x8F\x05@!\x02\x8F\x90\x07\x02\x02\x03\x90\x07" +
		"\x03\x02\x02\x02\x91\u01F2\x05\n\x06\x02\x92\x93\x07\x83\x02\x02\x93\u01F2" +
		"\x05t;\x02\x94\x95\x07\x83\x02\x02\x95\x96\x05t;\x02\x96\x97\x07\x03\x02" +
		"\x02\x97\x98\x05t;\x02\x98\u01F2\x03\x02\x02\x02\x99\x9A\x07d\x02\x02" +
		"\x9A\x9E\x07e\x02\x02\x9B\x9C\x07\xB7\x02\x02\x9C\x9D\x07\"\x02\x02\x9D" +
		"\x9F\x07$\x02\x02\x9E\x9B\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F" +
		"\xA0\x03\x02\x02\x02\xA0\xA3\x05r:\x02\xA1\xA2\x07a\x02\x02\xA2\xA4\x05" +
		"\x14\v\x02\xA3\xA1\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\u01F2\x03" +
		"\x02\x02\x02\xA5\xA6\x07\x86\x02\x02\xA6\xA9\x07e\x02\x02\xA7\xA8\x07" +
		"\xB7\x02\x02\xA8\xAA\x07$\x02\x02\xA9\xA7\x03\x02\x02\x02\xA9\xAA\x03" +
		"\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xAD\x05r:\x02\xAC\xAE\t\x02\x02" +
		"\x02\xAD\xAC\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE\u01F2\x03\x02" +
		"\x02\x02\xAF\xB0\x07\x8F\x02\x02\xB0\xB1\x07e\x02\x02\xB1\xB2\x05r:\x02" +
		"\xB2\xB3\x07\x90\x02\x02\xB3\xB4\x07\x8A\x02\x02\xB4\xB5\x05t;\x02\xB5" +
		"\u01F2\x03\x02\x02\x02\xB6\xB7\x07d\x02\x02\xB7\xBB\x07f\x02\x02\xB8\xB9" +
		"\x07\xB7\x02\x02\xB9\xBA\x07\"\x02\x02\xBA\xBC\x07$\x02\x02\xBB\xB8\x03" +
		"\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD\xC0\x05" +
		"r:\x02\xBE\xBF\x07a\x02\x02\xBF\xC1\x05\x14\v\x02\xC0\xBE\x03\x02\x02" +
		"\x02\xC0\xC1\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\xC3\x07\x0F\x02" +
		"\x02\xC3\xC9\x05\n\x06\x02\xC4\xC6\x07a\x02\x02\xC5\xC7\x07#\x02\x02\xC6" +
		"\xC5\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\xC8\x03\x02\x02\x02\xC8" +
		"\xCA\x07\x98\x02\x02\xC9\xC4\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA" +
		"\u01F2\x03\x02\x02\x02\xCB\xCC\x07d\x02\x02\xCC\xD0\x07f\x02\x02\xCD\xCE" +
		"\x07\xB7\x02\x02\xCE\xCF\x07\"\x02\x02\xCF\xD1\x07$\x02\x02\xD0\xCD\x03" +
		"\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD3\x05" +
		"r:\x02\xD3\xD4\x07\x04\x02\x02\xD4\xD9\x05\x0E\b\x02\xD5\xD6\x07\x05\x02" +
		"\x02\xD6\xD8\x05\x0E\b\x02\xD7\xD5\x03\x02\x02\x02\xD8\xDB\x03\x02\x02" +
		"\x02\xD9\xD7\x03\x02\x02\x02\xD9\xDA\x03\x02\x02\x02\xDA\xDC\x03\x02\x02" +
		"\x02\xDB\xD9\x03\x02\x02\x02\xDC\xDF\x07\x06\x02\x02\xDD\xDE\x07a\x02" +
		"\x02\xDE\xE0\x05\x14\v\x02\xDF\xDD\x03\x02\x02\x02\xDF\xE0\x03\x02\x02" +
		"\x02\xE0\u01F2\x03\x02\x02\x02\xE1\xE2\x07\x86\x02\x02\xE2\xE5\x07f\x02" +
		"\x02\xE3\xE4\x07\xB7\x02\x02\xE4\xE6\x07$\x02\x02\xE5\xE3\x03\x02\x02" +
		"\x02\xE5\xE6\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\u01F2\x05r:\x02" +
		"\xE8\xE9\x07i\x02\x02\xE9\xEA\x07k\x02\x02\xEA\xEC\x05r:\x02\xEB\xED\x05" +
		"<\x1F\x02\xEC\xEB\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\xEE\x03" +
		"\x02\x02\x02\xEE\xEF\x05\n\x06\x02\xEF\u01F2\x03\x02\x02\x02\xF0\xF1\x07" +
		"j\x02\x02\xF1\xF2\x07\r\x02\x02\xF2\xF5\x05r:\x02\xF3\xF4\x07\x14\x02" +
		"\x02\xF4\xF6\x05B\"\x02\xF5\xF3\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02" +
		"\xF6\u01F2\x03\x02\x02\x02\xF7\xF8\x07\x8F\x02\x02\xF8\xF9\x07f\x02\x02" +
		"\xF9\xFA\x05r:\x02\xFA\xFB\x07\x90\x02\x02\xFB\xFC\x07\x8A\x02\x02\xFC" +
		"\xFD\x05r:\x02\xFD\u01F2\x03\x02\x02\x02\xFE\xFF\x07\x8F\x02\x02\xFF\u0100" +
		"\x07f\x02\x02\u0100\u0101\x05r:\x02\u0101\u0102\x07\x90\x02\x02\u0102" +
		"\u0103\x07\x82\x02\x02\u0103\u0104\x05t;\x02\u0104\u0105\x07\x8A\x02\x02" +
		"\u0105\u0106\x05t;\x02\u0106\u01F2\x03\x02\x02\x02\u0107\u0108\x07\x8F" +
		"\x02\x02\u0108\u0109\x07f\x02\x02\u0109\u010A\x05r:\x02\u010A\u010B\x07" +
		"\x0E\x02\x02\u010B\u010C\x07\x82\x02\x02\u010C\u010D\x05\x10\t\x02\u010D" +
		"\u01F2\x03\x02\x02\x02\u010E\u0111\x07d\x02\x02\u010F\u0110\x07\x1F\x02" +
		"\x02\u0110\u0112\x07h\x02\x02\u0111\u010F\x03\x02\x02\x02\u0111\u0112" +
		"\x03\x02\x02\x02\u0112\u0113\x03\x02\x02\x02\u0113\u0114\x07g\x02\x02" +
		"\u0114\u0115\x05r:\x02\u0115\u0116\x07\x0F\x02\x02\u0116\u0117\x05\n\x06" +
		"\x02\u0117\u01F2\x03\x02\x02\x02\u0118\u0119\x07\x86\x02\x02\u0119\u011C" +
		"\x07g\x02\x02\u011A\u011B\x07\xB7\x02\x02\u011B\u011D\x07$\x02\x02\u011C" +
		"\u011A\x03\x02\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D\u011E\x03\x02" +
		"\x02\x02\u011E\u01F2\x05r:\x02\u011F\u0120\x07\xA7\x02\x02\u0120\u0121" +
		"\x05r:\x02\u0121\u012A\x07\x04\x02\x02\u0122\u0127\x05n8\x02\u0123\u0124" +
		"\x07\x05\x02\x02\u0124\u0126\x05n8\x02\u0125\u0123\x03\x02\x02\x02\u0126" +
		"\u0129\x03\x02\x02\x02\u0127\u0125\x03\x02\x02\x02\u0127\u0128\x03\x02" +
		"\x02\x02\u0128\u012B\x03\x02\x02\x02\u0129\u0127\x03\x02\x02\x02\u012A" +
		"\u0122\x03\x02\x02\x02\u012A\u012B\x03\x02\x02\x02\u012B\u012C\x03\x02" +
		"\x02\x02\u012C\u012D\x07\x06\x02\x02\u012D\u01F2\x03\x02\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\u012E\u0139\x07n\x02\x02\u012F\u0134\x05p9\x02\u0130\u0131\x07\x05\x02" +
		"\x02\u0131\u0133\x05p9\x02\u0132\u0130\x03\x02\x02\x02\u0133\u0136\x03" +
		"\x02\x02\x02\u0134\u0132\x03\x02\x02\x02\u0134\u0135\x03\x02\x02\x02\u0135" +
		"\u013A\x03\x02\x02\x02\u0136\u0134\x03\x02\x02\x02\u0137\u0138\x07\x10" +
		"\x02\x02\u0138\u013A\x07p\x02\x02\u0139\u012F\x03\x02\x02\x02\u0139\u0137" +
		"\x03\x02\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B\u013D\x07V\x02\x02" +
		"\u013C\u013E\x07f\x02\x02\u013D\u013C\x03\x02\x02\x02\u013D\u013E\x03" +
		"\x02\x02\x02\u013E\u013F\x03\x02\x02\x02\u013F\u0140\x05r:\x02\u0140\u0141" +
		"\x07\x8A\x02\x02\u0141\u0145\x05t;\x02\u0142\u0143\x07a\x02\x02\u0143" +
		"\u0144\x07n\x02\x02\u0144\u0146\x07r\x02\x02\u0145\u0142\x03\x02\x02\x02" +
		"\u0145\u0146\x03\x02\x02\x02\u0146\u01F2\x03\x02\x02\x02\u0147\u014B\x07" +
		"o\x02\x02\u0148\u0149\x07n\x02\x02\u0149\u014A\x07r\x02\x02\u014A\u014C" +
		"\x073\x02\x02\u014B\u0148\x03\x02\x02\x02\u014B\u014C\x03\x02\x02\x02" +
		"\u014C\u0157\x03\x02\x02\x02\u014D\u0152\x05p9\x02\u014E\u014F\x07\x05" +
		"\x02\x02\u014F\u0151\x05p9\x02\u0150\u014E\x03\x02\x02\x02\u0151\u0154" +
		"\x03\x02\x02\x02\u0152\u0150\x03\x02\x02\x02\u0152\u0153\x03\x02\x02\x02" +
		"\u0153\u0158\x03\x02\x02\x02\u0154\u0152\x03\x02\x02\x02\u0155\u0156\x07" +
		"\x10\x02\x02\u0156\u0158\x07p\x02\x02\u0157\u014D\x03\x02\x02\x02\u0157" +
		"\u0155\x03\x02\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159\u015B\x07V\x02" +
		"\x02\u015A\u015C\x07f\x02\x02\u015B\u015A\x03\x02\x02\x02\u015B\u015C" +
		"\x03\x02\x02\x02\u015C\u015D\x03\x02\x02\x02\u015D\u015E\x05r:\x02\u015E" +
		"\u015F\x07\r\x02\x02\u015F\u0160\x05t;\x02\u0160\u01F2\x03\x02\x02\x02" +
		"\u0161\u0163\x07s\x02\x02\u0162\u0164\x07t\x02\x02\u0163\u0162\x03\x02" +
		"\x02\x02\u0163\u0164\x03\x02\x02\x02\u0164\u0170\x03\x02\x02\x02\u0165" +
		"\u0166\x07\x04\x02\x02\u0166\u016B\x05h5\x02\u0167\u0168\x07\x05\x02\x02" +
		"\u0168\u016A\x05h5\x02\u0169\u0167\x03\x02\x02\x02\u016A\u016D\x03\x02" +
		"\x02\x02\u016B\u0169\x03\x02\x02\x02\u016B\u016C\x03\x02\x02\x02\u016C" +
		"\u016E\x03\x02\x02\x02\u016D\u016B\x03\x02\x02\x02\u016E\u016F\x07\x06" +
		"\x02\x02\u016F\u0171\x03\x02\x02\x02\u0170\u0165\x03\x02\x02\x02\u0170" +
		"\u0171\x03\x02\x02\x02\u0171\u0172\x03\x02\x02\x02\u0172\u01F2\x05\b\x05" +
		"\x02\u0173\u0174\x07}\x02\x02\u0174\u0175\x07d\x02\x02\u0175\u0176\x07" +
		"f\x02\x02\u0176\u01F2\x05r:\x02\u0177\u0178\x07}\x02\x02\u0178\u0179\x07" +
		"d\x02\x02\u0179\u017A\x07g\x02\x02\u017A\u01F2\x05r:\x02\u017B\u017C\x07" +
		"}\x02\x02\u017C\u017F\x07~\x02\x02\u017D\u017E\t\x03\x02\x02\u017E\u0180" +
		"\x05r:\x02\u017F\u017D\x03\x02\x02\x02\u017F\u0180\x03\x02\x02\x02\u0180" +
		"\u0183\x03\x02\x02\x02\u0181\u0182\x07&\x02\x02\u0182\u0184\x07\xC6\x02" +
		"\x02\u0183\u0181\x03\x02\x02\x02\u0183\u0184\x03\x02\x02\x02\u0184\u01F2" +
		"\x03\x02\x02\x02\u0185\u0186\x07}\x02\x02\u0186\u0189\x07\x7F\x02\x02" +
		"\u0187\u0188\t\x03\x02\x02\u0188\u018A\x05t;\x02\u0189\u0187\x03\x02\x02" +
		"\x02\u0189\u018A\x03\x02\x02\x02\u018A\u018D\x03\x02\x02\x02\u018B\u018C" +
		"\x07&\x02\x02\u018C\u018E\x07\xC6\x02\x02\u018D\u018B\x03\x02\x02\x02" +
		"\u018D\u018E\x03\x02\x02\x02\u018E\u01F2\x03\x02\x02\x02\u018F\u0190\x07" +
		"}\x02\x02\u0190\u0193\x07\x80\x02\x02\u0191\u0192\x07&\x02\x02\u0192\u0194" +
		"\x07\xC6\x02\x02\u0193\u0191\x03\x02\x02\x02\u0193\u0194\x03\x02\x02\x02" +
		"\u0194\u01F2\x03\x02\x02\x02\u0195\u0196\x07}\x02\x02\u0196\u0197\x07" +
		"\x81\x02\x02\u0197\u0198\t\x03\x02\x02\u0198\u01F2\x05r:\x02\u0199\u019A" +
		"\x07m\x02\x02\u019A\u01F2\x05r:\x02\u019B\u019C\x070\x02\x02\u019C\u01F2" +
		"\x05r:\x02\u019D\u019E\x07}\x02\x02\u019E\u01F2\x07\x85\x02\x02\u019F" +
		"\u01A0\x07}\x02\x02\u01A0\u01F2\x07\x97\x02\x02\u01A1\u01A2\x07\x95\x02" +
		"\x02\u01A2\u01A3\x07\x97\x02\x02\u01A3\u01A4\x05r:\x02\u01A4\u01A5\x07" +
		"\xBA\x02\x02\u01A5\u01A6\x05@!\x02\u01A6\u01F2\x03\x02\x02\x02\u01A7\u01A8" +
		"\x07\x96\x02\x02\u01A8\u01A9\x07\x97\x02\x02\u01A9\u01F2\x05r:\x02\u01AA" +
		"\u01AB\x07\x99\x02\x02\u01AB\u01B4\x07\x9A\x02\x02\u01AC\u01B1\x05j6\x02" +
		"\u01AD\u01AE\x07\x05\x02\x02\u01AE\u01B0\x05j6\x02\u01AF\u01AD\x03\x02" +
		"\x02\x02\u01B0\u01B3\x03\x02\x02\x02\u01B1\u01AF\x03\x02\x02\x02\u01B1" +
		"\u01B2\x03\x02\x02\x02\u01B2\u01B5\x03\x02\x02\x02\u01B3\u01B1\x03\x02" +
		"\x02\x02\u01B4\u01AC\x03\x02\x02\x02\u01B4\u01B5\x03\x02\x02\x02\u01B5" +
		"\u01F2\x03\x02\x02\x02\u01B6\u01B8\x07\x9B\x02\x02\u01B7\u01B9\x07\x9D" +
		"\x02\x02\u01B8\u01B7\x03\x02\x02\x02\u01B8\u01B9\x03\x02\x02\x02\u01B9" +
		"\u01F2\x03\x02\x02\x02\u01BA\u01BC\x07\x9C\x02\x02\u01BB\u01BD\x07\x9D" +
		"\x02\x02\u01BC\u01BB\x03\x02\x02\x02\u01BC\u01BD\x03\x02\x02\x02\u01BD" +
		"\u01F2\x03\x02\x02\x02\u01BE\u01BF\x07}\x02\x02\u01BF\u01C0\x07\x84\x02" +
		"\x02\u01C0\u01C1\t\x03\x02\x02\u01C1\u01C4\x05r:\x02\u01C2\u01C3\x07\x14" +
		"\x02\x02\u01C3\u01C5\x05B\"\x02\u01C4\u01C2\x03\x02\x02\x02\u01C4\u01C5" +
		"\x03\x02\x02\x02\u01C5\u01D0\x03\x02\x02\x02\u01C6\u01C7\x07\x1B\x02\x02" +
		"\u01C7\u01C8\x07\x16\x02\x02\u01C8\u01CD\x05\x1E\x10\x02\u01C9\u01CA\x07" +
		"\x05\x02\x02\u01CA\u01CC\x05\x1E\x10\x02\u01CB\u01C9\x03\x02\x02\x02\u01CC" +
		"\u01CF\x03\x02\x02\x02\u01CD\u01CB\x03\x02\x02\x02\u01CD\u01CE\x03\x02" +
		"\x02\x02\u01CE\u01D1\x03\x02\x02\x02\u01CF\u01CD\x03\x02\x02\x02\u01D0" +
		"\u01C6\x03\x02\x02\x02\u01D0\u01D1\x03\x02\x02\x02\u01D1\u01D4\x03\x02" +
		"\x02\x02\u01D2\u01D3\x07\x1D\x02\x02\u01D3\u01D5\t\x04\x02\x02\u01D4\u01D2" +
		"\x03\x02\x02\x02\u01D4\u01D5\x03\x02\x02\x02\u01D5\u01F2\x03\x02\x02\x02" +
		"\u01D6\u01D7\x07\xA8\x02\x02\u01D7\u01D8\x05t;\x02\u01D8\u01D9\x07\r\x02" +
		"\x02\u01D9\u01DA\x05\b\x05\x02\u01DA\u01F2\x03\x02\x02\x02\u01DB\u01DC" +
		"\x07\xA9\x02\x02\u01DC\u01DD\x07\xA8\x02\x02\u01DD\u01F2\x05t;\x02\u01DE" +
		"\u01DF\x07\xAA\x02\x02\u01DF\u01E9\x05t;\x02\u01E0\u01E1\x07U\x02\x02" +
		"\u01E1\u01E6\x05@!\x02\u01E2\u01E3\x07\x05\x02\x02\u01E3\u01E5\x05@!\x02" +
		"\u01E4\u01E2\x03\x02\x02\x02\u01E5\u01E8\x03\x02\x02\x02\u01E6\u01E4\x03" +
		"\x02\x02\x02\u01E6\u01E7\x03\x02\x02\x02\u01E7\u01EA\x03\x02\x02\x02\u01E8" +
		"\u01E6\x03\x02\x02\x02\u01E9\u01E0\x03\x02\x02\x02\u01E9\u01EA\x03\x02" +
		"\x02\x02\u01EA\u01F2\x03\x02\x02\x02\u01EB\u01EC\x07m\x02\x02\u01EC\u01ED" +
		"\x07\xAB\x02\x02\u01ED\u01F2\x05t;\x02\u01EE\u01EF\x07m\x02\x02\u01EF" +
		"\u01F0\x07\xAC\x02\x02\u01F0\u01F2\x05t;\x02\u01F1\x91\x03\x02\x02\x02" +
		"\u01F1\x92\x03\x02\x02\x02\u01F1\x94\x03\x02\x02\x02\u01F1\x99\x03\x02" +
		"\x02\x02\u01F1\xA5\x03\x02\x02\x02\u01F1\xAF\x03\x02\x02\x02\u01F1\xB6" +
		"\x03\x02\x02\x02\u01F1\xCB\x03\x02\x02\x02\u01F1\xE1\x03\x02\x02\x02\u01F1" +
		"\xE8\x03\x02\x02\x02\u01F1\xF0\x03\x02\x02\x02\u01F1\xF7\x03\x02\x02\x02" +
		"\u01F1\xFE\x03\x02\x02\x02\u01F1\u0107\x03\x02\x02\x02\u01F1\u010E\x03" +
		"\x02\x02\x02\u01F1\u0118\x03\x02\x02\x02\u01F1\u011F\x03\x02\x02\x02\u01F1" +
		"\u012E\x03\x02\x02\x02\u01F1\u0147\x03\x02\x02\x02\u01F1\u0161\x03\x02" +
		"\x02\x02\u01F1\u0173\x03\x02\x02\x02\u01F1\u0177\x03\x02\x02\x02\u01F1" +
		"\u017B\x03\x02\x02\x02\u01F1\u0185\x03\x02\x02\x02\u01F1\u018F\x03\x02" +
		"\x02\x02\u01F1\u0195\x03\x02\x02\x02\u01F1\u0199\x03\x02\x02\x02\u01F1" +
		"\u019B\x03\x02\x02\x02\u01F1\u019D\x03\x02\x02\x02\u01F1\u019F\x03\x02" +
		"\x02\x02\u01F1\u01A1\x03\x02\x02\x02\u01F1\u01A7\x03\x02\x02\x02\u01F1" +
		"\u01AA\x03\x02\x02\x02\u01F1\u01B6\x03\x02\x02\x02\u01F1\u01BA\x03\x02" +
		"\x02\x02\u01F1\u01BE\x03\x02\x02\x02\u01F1\u01D6\x03\x02\x02\x02\u01F1" +
		"\u01DB\x03\x02\x02\x02\u01F1\u01DE\x03\x02\x02\x02\u01F1\u01EB\x03\x02" +
		"\x02\x02\u01F1\u01EE\x03\x02\x02\x02\u01F2\t\x03\x02\x02\x02\u01F3\u01F5" +
		"\x05\f\x07\x02\u01F4\u01F3\x03\x02\x02\x02\u01F4\u01F5\x03\x02\x02\x02" +
		"\u01F5\u01F6\x03\x02\x02\x02\u01F6\u01F7\x05\x18\r\x02\u01F7\v\x03\x02" +
		"\x02\x02\u01F8\u01FA\x07a\x02\x02\u01F9\u01FB\x07b\x02\x02\u01FA\u01F9" +
		"\x03\x02\x02\x02\u01FA\u01FB\x03\x02\x02\x02\u01FB\u01FC\x03\x02\x02\x02" +
		"\u01FC\u0201\x05*\x16\x02\u01FD\u01FE\x07\x05\x02\x02\u01FE\u0200\x05" +
		"*\x16\x02\u01FF\u01FD\x03\x02\x02\x02\u0200\u0203\x03\x02\x02\x02\u0201" +
		"\u01FF\x03\x02\x02\x02\u0201\u0202\x03\x02\x02\x02\u0202\r\x03\x02\x02" +
		"\x02\u0203\u0201\x03\x02\x02\x02\u0204\u0207\x05\x10\t\x02\u0205\u0207" +
		"\x05\x12\n\x02\u0206\u0204\x03\x02\x02\x02\u0206\u0205\x03\x02\x02\x02" +
		"\u0207\x0F\x03\x02\x02\x02\u0208\u0209\x05t;\x02\u0209\u020A\x05X-\x02" +
		"\u020A\x11\x03\x02\x02\x02\u020B\u020C\x07&\x02\x02\u020C\u020F\x05r:" +
		"\x02\u020D\u020E\t\x05\x02\x02\u020E\u0210\x07\xB1\x02\x02\u020F\u020D" +
		"\x03\x02\x02\x02\u020F\u0210\x03\x02\x02\x02\u0210\x13\x03\x02\x02\x02" +
		"\u0211\u0212\x07\x04\x02\x02\u0212\u0217\x05\x16\f\x02\u0213\u0214\x07" +
		"\x05\x02\x02\u0214\u0216\x05\x16\f\x02\u0215\u0213\x03\x02\x02\x02\u0216" +
		"\u0219\x03\x02\x02\x02\u0217\u0215\x03\x02\x02\x02\u0217\u0218\x03\x02" +
		"\x02\x02\u0218\u021A\x03\x02\x02\x02\u0219\u0217\x03\x02\x02\x02\u021A" +
		"\u021B\x07\x06\x02\x02\u021B\x15\x03\x02\x02\x02\u021C\u021D\x05t;\x02" +
		"\u021D\u021E\x07\xBA\x02\x02\u021E\u021F\x05@!\x02\u021F\x17\x03\x02\x02" +
		"\x02\u0220\u022B\x05\x1A\x0E\x02\u0221\u0222\x07\x1B\x02\x02\u0222\u0223" +
		"\x07\x16\x02\x02\u0223\u0228\x05\x1E\x10\x02\u0224\u0225\x07\x05\x02\x02" +
		"\u0225\u0227\x05\x1E\x10\x02\u0226\u0224\x03\x02\x02\x02\u0227\u022A\x03" +
		"\x02\x02\x02\u0228\u0226\x03\x02\x02\x02\u0228\u0229\x03\x02\x02\x02\u0229" +
		"\u022C\x03\x02\x02\x02\u022A\u0228\x03\x02\x02\x02\u022B\u0221\x03\x02" +
		"\x02\x02\u022B\u022C\x03\x02\x02\x02\u022C\u022F\x03\x02\x02\x02\u022D" +
		"\u022E\x07\x1D\x02\x02\u022E\u0230\t\x04\x02\x02\u022F\u022D\x03\x02\x02" +
		"\x02\u022F\u0230\x03\x02\x02\x02\u0230\x19\x03\x02\x02\x02\u0231\u0232" +
		"\b\x0E\x01\x02\u0232\u0233\x05\x1C\x0F\x02\u0233\u0242\x03\x02\x02\x02" +
		"\u0234\u0235\f\x04\x02\x02\u0235\u0237\x07\x89\x02\x02\u0236\u0238\x05" +
		",\x17\x02\u0237\u0236\x03\x02\x02\x02\u0237\u0238\x03\x02\x02\x02\u0238" +
		"\u0239\x03\x02\x02\x02\u0239\u0241\x05\x1A\x0E\x05\u023A\u023B\f\x03\x02" +
		"\x02\u023B\u023D\t\x06\x02\x02\u023C\u023E\x05,\x17\x02\u023D\u023C\x03" +
		"\x02\x02\x02\u023D\u023E\x03\x02\x02\x02\u023E\u023F\x03\x02\x02\x02\u023F" +
		"\u0241\x05\x1A\x0E\x04\u0240\u0234\x03\x02\x02\x02\u0240\u023A\x03\x02" +
		"\x02\x02\u0241\u0244\x03\x02\x02\x02\u0242\u0240\x03\x02\x02\x02\u0242" +
		"\u0243\x03\x02\x02\x02\u0243\x1B\x03\x02\x02\x02\u0244\u0242\x03\x02\x02" +
		"\x02\u0245\u0256\x05 \x11\x02\u0246\u0247\x07f\x02\x02\u0247\u0256\x05" +
		"r:\x02\u0248\u0249\x07c\x02\x02\u0249\u024E\x05@!\x02\u024A\u024B\x07" +
		"\x05\x02\x02\u024B\u024D\x05@!\x02\u024C\u024A\x03\x02\x02\x02\u024D\u0250" +
		"\x03\x02\x02\x02\u024E\u024C\x03\x02\x02\x02\u024E\u024F\x03\x02\x02\x02" +
		"\u024F\u0256\x03\x02\x02\x02\u0250\u024E\x03\x02\x02\x02\u0251\u0252\x07" +
		"\x04\x02\x02\u0252\u0253\x05\x18\r\x02\u0253\u0254\x07\x06\x02\x02\u0254" +
		"\u0256\x03\x02\x02\x02\u0255\u0245\x03\x02\x02\x02\u0255\u0246\x03\x02" +
		"\x02\x02\u0255\u0248\x03\x02\x02\x02\u0255\u0251\x03\x02\x02\x02\u0256" +
		"\x1D\x03\x02\x02\x02\u0257\u0259\x05@!\x02\u0258\u025A\t\x07\x02\x02\u0259" +
		"\u0258\x03\x02\x02\x02\u0259\u025A\x03\x02\x02\x02\u025A\u025D\x03\x02" +
		"\x02\x02\u025B\u025C\x07+\x02\x02\u025C\u025E\t\b\x02\x02\u025D\u025B" +
		"\x03\x02\x02\x02\u025D\u025E\x03\x02\x02\x02\u025E\x1F\x03\x02\x02\x02" +
		"\u025F\u0261\x07\f\x02\x02\u0260\u0262\x05,\x17\x02\u0261\u0260\x03\x02" +
		"\x02\x02\u0261\u0262\x03\x02\x02\x02\u0262\u0263\x03\x02\x02\x02\u0263" +
		"\u0268\x05.\x18\x02\u0264\u0265\x07\x05\x02\x02\u0265\u0267\x05.\x18\x02" +
		"\u0266\u0264\x03\x02\x02\x02\u0267\u026A\x03\x02\x02\x02\u0268\u0266\x03" +
		"\x02\x02\x02\u0268\u0269\x03\x02\x02\x02\u0269\u0274\x03\x02\x02\x02\u026A" +
		"\u0268\x03\x02\x02\x02\u026B\u026C\x07\r\x02\x02\u026C\u0271\x050\x19" +
		"\x02\u026D\u026E\x07\x05\x02\x02\u026E\u0270\x050\x19\x02\u026F\u026D" +
		"\x03\x02\x02\x02\u0270\u0273\x03\x02\x02\x02\u0271\u026F\x03\x02\x02\x02" +
		"\u0271\u0272\x03\x02\x02\x02\u0272\u0275\x03\x02\x02\x02\u0273\u0271\x03" +
		"\x02\x02\x02\u0274\u026B\x03\x02\x02\x02\u0274\u0275\x03\x02\x02\x02\u0275" +
		"\u0278\x03\x02\x02\x02\u0276\u0277\x07\x14\x02\x02\u0277\u0279\x05B\"" +
		"\x02\u0278\u0276\x03\x02\x02\x02\u0278\u0279\x03\x02\x02\x02\u0279\u027D" +
		"\x03\x02\x02\x02\u027A\u027B\x07\x15\x02\x02\u027B\u027C\x07\x16\x02\x02" +
		"\u027C\u027E\x05\"\x12\x02\u027D\u027A\x03\x02\x02\x02\u027D\u027E\x03" +
		"\x02\x02\x02\u027E\u0281\x03\x02\x02\x02\u027F\u0280\x07\x1C\x02\x02\u0280" +
		"\u0282\x05B\"\x02\u0281\u027F\x03\x02\x02\x02\u0281\u0282\x03\x02\x02" +
		"\x02\u0282!\x03\x02\x02\x02\u0283\u0285\x05,\x17\x02\u0284\u0283\x03\x02" +
		"\x02\x02\u0284\u0285\x03\x02\x02\x02\u0285\u0286\x03\x02\x02\x02\u0286" +
		"\u028B\x05$\x13\x02\u0287\u0288\x07\x05\x02\x02\u0288\u028A\x05$\x13\x02" +
		"\u0289\u0287\x03\x02\x02\x02\u028A\u028D\x03\x02\x02\x02\u028B\u0289\x03" +
		"\x02\x02\x02\u028B\u028C\x03\x02\x02\x02\u028C#\x03\x02\x02\x02\u028D" +
		"\u028B\x03\x02\x02\x02\u028E\u02B7\x05&\x14\x02\u028F\u0290\x07\x1A\x02" +
		"\x02\u0290\u0299\x07\x04\x02\x02\u0291\u0296\x05r:\x02\u0292\u0293\x07" +
		"\x05\x02\x02\u0293\u0295\x05r:\x02\u0294\u0292\x03\x02\x02\x02\u0295\u0298" +
		"\x03\x02\x02\x02\u0296\u0294\x03\x02\x02\x02\u0296\u0297\x03\x02\x02\x02" +
		"\u0297\u029A\x03\x02\x02\x02\u0298\u0296\x03\x02\x02\x02\u0299\u0291\x03" +
		"\x02\x02\x02\u0299\u029A\x03\x02\x02\x02\u029A\u029B\x03\x02\x02\x02\u029B" +
		"\u02B7\x07\x06\x02\x02\u029C\u029D\x07\x19\x02\x02\u029D\u02A6\x07\x04" +
		"\x02\x02\u029E\u02A3\x05r:\x02\u029F\u02A0\x07\x05\x02\x02\u02A0\u02A2" +
		"\x05r:\x02\u02A1\u029F\x03\x02\x02\x02\u02A2\u02A5\x03\x02\x02\x02\u02A3" +
		"\u02A1\x03\x02\x02\x02\u02A3\u02A4\x03\x02\x02\x02\u02A4\u02A7\x03\x02" +
		"\x02\x02\u02A5\u02A3\x03\x02\x02\x02\u02A6\u029E\x03\x02\x02\x02\u02A6" +
		"\u02A7\x03\x02\x02\x02\u02A7\u02A8\x03\x02\x02\x02\u02A8\u02B7\x07\x06" +
		"\x02\x02\u02A9\u02AA\x07\x17\x02\x02\u02AA\u02AB\x07\x18\x02\x02\u02AB" +
		"\u02AC\x07\x04\x02\x02\u02AC\u02B1\x05(\x15\x02\u02AD\u02AE\x07\x05\x02" +
		"\x02\u02AE\u02B0\x05(\x15\x02\u02AF\u02AD\x03\x02\x02\x02\u02B0\u02B3" +
		"\x03\x02\x02\x02\u02B1\u02AF\x03\x02\x02\x02\u02B1\u02B2\x03\x02\x02\x02" +
		"\u02B2\u02B4\x03\x02\x02\x02\u02B3\u02B1\x03\x02\x02\x02\u02B4\u02B5\x07" +
		"\x06\x02\x02\u02B5\u02B7\x03\x02\x02\x02\u02B6\u028E\x03\x02\x02\x02\u02B6" +
		"\u028F\x03\x02\x02\x02\u02B6\u029C\x03\x02\x02\x02\u02B6\u02A9\x03\x02" +
		"\x02\x02\u02B7%\x03\x02\x02\x02\u02B8\u02C1\x07\x04\x02\x02\u02B9\u02BE" +
		"\x05@!\x02\u02BA\u02BB\x07\x05\x02\x02\u02BB\u02BD\x05@!\x02\u02BC\u02BA" +
		"\x03\x02\x02\x02\u02BD\u02C0\x03\x02\x02\x02\u02BE\u02BC\x03\x02\x02\x02" +
		"\u02BE\u02BF\x03\x02\x02\x02\u02BF\u02C2\x03\x02\x02\x02\u02C0\u02BE\x03" +
		"\x02\x02\x02\u02C1\u02B9\x03\x02\x02\x02\u02C1\u02C2\x03\x02\x02\x02\u02C2" +
		"\u02C3\x03\x02\x02\x02\u02C3\u02C6\x07\x06\x02\x02\u02C4\u02C6\x05@!\x02" +
		"\u02C5\u02B8\x03\x02\x02\x02\u02C5\u02C4\x03\x02\x02\x02\u02C6\'\x03\x02" +
		"\x02\x02\u02C7\u02D0\x07\x04\x02\x02\u02C8\u02CD\x05r:\x02\u02C9\u02CA" +
		"\x07\x05\x02\x02\u02CA\u02CC\x05r:\x02\u02CB\u02C9\x03\x02\x02\x02\u02CC" +
		"\u02CF\x03\x02\x02\x02\u02CD\u02CB\x03\x02\x02\x02\u02CD\u02CE\x03\x02" +
		"\x02\x02\u02CE\u02D1\x03\x02\x02\x02\u02CF\u02CD\x03\x02\x02\x02\u02D0" +
		"\u02C8\x03\x02\x02\x02\u02D0\u02D1\x03\x02\x02\x02\u02D1\u02D2\x03\x02" +
		"\x02\x02\u02D2\u02D5\x07\x06\x02\x02\u02D3\u02D5\x05r:\x02\u02D4\u02C7" +
		"\x03\x02\x02\x02\u02D4\u02D3\x03\x02\x02\x02\u02D5)\x03\x02\x02\x02\u02D6" +
		"\u02D8\x05t;\x02\u02D7\u02D9\x05<\x1F\x02\u02D8\u02D7\x03\x02\x02\x02" +
		"\u02D8\u02D9\x03\x02\x02\x02\u02D9\u02DA\x03\x02\x02\x02\u02DA\u02DB\x07" +
		"\x0F\x02\x02\u02DB\u02DC\x07\x04\x02\x02\u02DC\u02DD\x05\n\x06\x02\u02DD" +
		"\u02DE\x07\x06\x02\x02\u02DE+\x03\x02\x02\x02\u02DF\u02E0\t\t\x02\x02" +
		"\u02E0-\x03\x02\x02\x02\u02E1\u02E6\x05@!\x02\u02E2\u02E4\x07\x0F\x02" +
		"\x02\u02E3\u02E2\x03\x02\x02\x02\u02E3\u02E4\x03\x02\x02\x02\u02E4\u02E5" +
		"\x03\x02\x02\x02\u02E5\u02E7\x05t;\x02\u02E6\u02E3\x03\x02\x02\x02\u02E6" +
		"\u02E7\x03\x02\x02\x02\u02E7\u02EE\x03\x02\x02\x02\u02E8\u02E9\x05r:\x02" +
		"\u02E9\u02EA\x07\x03\x02\x02\u02EA\u02EB\x07\xC2\x02\x02\u02EB\u02EE\x03" +
		"\x02\x02\x02\u02EC\u02EE\x07\xC2\x02\x02\u02ED\u02E1\x03\x02\x02\x02\u02ED" +
		"\u02E8\x03\x02\x02\x02\u02ED\u02EC\x03\x02\x02\x02\u02EE/\x03\x02\x02" +
		"\x02\u02EF\u02F0\b\x19\x01\x02\u02F0\u02F1\x056\x1C\x02\u02F1\u0304\x03" +
		"\x02\x02\x02\u02F2\u0300\f\x04\x02\x02\u02F3\u02F4\x07N\x02\x02\u02F4" +
		"\u02F5\x07M\x02\x02\u02F5\u0301\x056\x1C\x02\u02F6\u02F7\x052\x1A\x02" +
		"\u02F7\u02F8\x07M\x02\x02\u02F8\u02F9\x050\x19\x02\u02F9\u02FA\x054\x1B" +
		"\x02\u02FA\u0301\x03\x02\x02\x02\u02FB\u02FC\x07T\x02\x02\u02FC\u02FD" +
		"\x052\x1A\x02\u02FD\u02FE\x07M\x02\x02\u02FE\u02FF\x056\x1C\x02\u02FF" +
		"\u0301\x03\x02\x02\x02\u0300\u02F3\x03\x02\x02\x02\u0300\u02F6\x03\x02" +
		"\x02\x02\u0300\u02FB\x03\x02\x02\x02\u0301\u0303\x03\x02\x02\x02\u0302" +
		"\u02F2\x03\x02\x02\x02\u0303\u0306\x03\x02\x02\x02\u0304\u0302\x03\x02" +
		"\x02\x02\u0304\u0305\x03\x02\x02\x02\u03051\x03\x02\x02\x02\u0306\u0304" +
		"\x03\x02\x02\x02\u0307\u0309\x07P\x02\x02\u0308\u0307\x03\x02\x02\x02" +
		"\u0308\u0309\x03\x02\x02\x02\u0309\u0317\x03\x02\x02\x02\u030A\u030C\x07" +
		"Q\x02\x02\u030B\u030D\x07O\x02\x02\u030C\u030B\x03\x02\x02\x02\u030C\u030D" +
		"\x03\x02\x02\x02\u030D\u0317\x03\x02\x02\x02\u030E\u0310\x07R\x02\x02" +
		"\u030F\u0311\x07O\x02\x02\u0310\u030F\x03\x02\x02\x02\u0310\u0311\x03" +
		"\x02\x02\x02\u0311\u0317\x03\x02\x02\x02\u0312\u0314\x07S\x02\x02\u0313" +
		"\u0315\x07O\x02\x02\u0314\u0313\x03\x02\x02\x02\u0314\u0315\x03\x02\x02" +
		"\x02\u0315\u0317\x03\x02\x02\x02\u0316\u0308\x03\x02\x02\x02\u0316\u030A" +
		"\x03\x02\x02\x02\u0316\u030E\x03\x02\x02\x02\u0316\u0312\x03\x02\x02\x02" +
		"\u03173\x03\x02\x02\x02\u0318\u0319\x07V\x02\x02\u0319\u0327\x05B\"\x02" +
		"\u031A\u031B\x07U\x02\x02\u031B\u031C\x07\x04\x02\x02\u031C\u0321\x05" +
		"t;\x02\u031D\u031E\x07\x05\x02\x02\u031E\u0320\x05t;\x02\u031F\u031D\x03" +
		"\x02\x02\x02\u0320\u0323\x03\x02\x02\x02\u0321\u031F\x03\x02\x02\x02\u0321" +
		"\u0322\x03\x02\x02\x02\u0322\u0324\x03\x02\x02\x02\u0323\u0321\x03\x02" +
		"\x02\x02\u0324\u0325\x07\x06\x02\x02\u0325\u0327\x03\x02\x02\x02\u0326" +
		"\u0318\x03\x02\x02\x02\u0326\u031A\x03\x02\x02\x02\u03275\x03\x02\x02" +
		"\x02\u0328\u032F\x05:\x1E\x02\u0329\u032A\x07\x8E\x02\x02\u032A\u032B" +
		"\x058\x1D\x02\u032B\u032C\x07\x04\x02\x02\u032C\u032D\x05@!\x02\u032D" +
		"\u032E\x07\x06\x02\x02\u032E\u0330\x03\x02\x02\x02\u032F\u0329\x03\x02" +
		"\x02\x02\u032F\u0330\x03\x02\x02\x02\u03307\x03\x02\x02\x02\u0331\u0332" +
		"\t\n\x02\x02\u03329\x03\x02\x02\x02\u0333\u033B\x05> \x02\u0334\u0336" +
		"\x07\x0F\x02\x02\u0335\u0334\x03\x02\x02\x02\u0335\u0336\x03\x02\x02\x02" +
		"\u0336\u0337\x03\x02\x02\x02\u0337\u0339\x05t;\x02\u0338\u033A\x05<\x1F" +
		"\x02\u0339\u0338\x03\x02\x02\x02\u0339\u033A\x03\x02\x02\x02\u033A\u033C" +
		"\x03\x02\x02\x02\u033B\u0335\x03\x02\x02\x02\u033B\u033C\x03\x02\x02\x02" +
		"\u033C;\x03\x02\x02\x02\u033D\u033E\x07\x04\x02\x02\u033E\u0343\x05t;" +
		"\x02\u033F\u0340\x07\x05\x02\x02\u0340\u0342\x05t;\x02\u0341\u033F\x03" +
		"\x02\x02\x02\u0342\u0345\x03\x02\x02\x02\u0343\u0341\x03\x02\x02\x02\u0343" +
		"\u0344\x03\x02\x02\x02\u0344\u0346\x03\x02\x02\x02\u0345\u0343\x03\x02" +
		"\x02\x02\u0346\u0347\x07\x06\x02\x02\u0347=\x03\x02\x02\x02\u0348\u0361" +
		"\x05r:\x02\u0349\u034A\x07\x04\x02\x02\u034A\u034B\x05\n\x06\x02\u034B" +
		"\u034C\x07\x06\x02\x02\u034C\u0361\x03\x02\x02\x02\u034D\u034E\x07\x91" +
		"\x02\x02\u034E\u034F\x07\x04\x02\x02\u034F\u0354\x05@!\x02\u0350\u0351" +
		"\x07\x05\x02\x02\u0351\u0353\x05@!\x02\u0352\u0350\x03\x02\x02\x02\u0353" +
		"\u0356\x03\x02\x02\x02\u0354\u0352\x03\x02\x02\x02\u0354\u0355\x03\x02" +
		"\x02\x02\u0355\u0357\x03\x02\x02\x02\u0356\u0354\x03\x02\x02\x02\u0357" +
		"\u035A\x07\x06\x02\x02\u0358\u0359\x07a\x02\x02\u0359\u035B\x07\x92\x02" +
		"\x02\u035A\u0358\x03\x02\x02\x02\u035A\u035B\x03\x02\x02\x02\u035B\u0361" +
		"\x03\x02\x02\x02\u035C\u035D\x07\x04\x02\x02\u035D\u035E\x050\x19\x02" +
		"\u035E\u035F\x07\x06\x02\x02\u035F\u0361\x03\x02\x02\x02\u0360\u0348\x03" +
		"\x02\x02\x02\u0360\u0349\x03\x02\x02\x02\u0360\u034D\x03\x02\x02\x02\u0360" +
		"\u035C\x03\x02\x02\x02\u0361?\x03\x02\x02\x02\u0362\u0363\x05B\"\x02\u0363" +
		"A\x03\x02\x02\x02\u0364\u0365\b\"\x01\x02\u0365\u0369\x05D#\x02\u0366" +
		"\u0367\x07\"\x02\x02\u0367\u0369\x05B\"\x05\u0368\u0364\x03\x02\x02\x02" +
		"\u0368\u0366\x03\x02\x02\x02\u0369\u0372\x03\x02\x02\x02\u036A\u036B\f" +
		"\x04\x02\x02\u036B\u036C\x07 \x02\x02\u036C\u0371\x05B\"\x05\u036D\u036E" +
		"\f\x03\x02\x02\u036E\u036F\x07\x1F\x02\x02\u036F\u0371\x05B\"\x04\u0370" +
		"\u036A\x03\x02\x02\x02\u0370\u036D\x03\x02\x02\x02\u0371\u0374\x03\x02" +
		"\x02\x02\u0372\u0370\x03\x02\x02\x02\u0372\u0373\x03\x02\x02\x02\u0373" +
		"C\x03\x02\x02\x02\u0374\u0372\x03\x02\x02\x02\u0375\u0377\x05H%\x02\u0376" +
		"\u0378\x05F$\x02\u0377\u0376\x03\x02\x02\x02\u0377\u0378\x03\x02\x02\x02" +
		"\u0378E\x03\x02\x02\x02\u0379\u037A\x05N(\x02\u037A\u037B\x05H%\x02\u037B" +
		"\u03B7\x03\x02\x02\x02\u037C\u037D\x05N(\x02\u037D\u037E\x05P)\x02\u037E" +
		"\u037F\x07\x04\x02\x02\u037F\u0380\x05\n\x06\x02\u0380\u0381\x07\x06\x02" +
		"\x02\u0381\u03B7\x03\x02\x02\x02\u0382\u0384\x07\"\x02\x02\u0383\u0382" +
		"\x03\x02\x02\x02\u0383\u0384\x03\x02\x02\x02\u0384\u0385\x03\x02\x02\x02" +
		"\u0385\u0386\x07%\x02\x02\u0386\u0387\x05H%\x02\u0387\u0388\x07 \x02\x02" +
		"\u0388\u0389\x05H%\x02\u0389\u03B7\x03\x02\x02\x02\u038A\u038C\x07\"\x02" +
		"\x02\u038B\u038A\x03\x02\x02\x02\u038B\u038C\x03\x02\x02\x02\u038C\u038D" +
		"\x03\x02\x02\x02\u038D\u038E\x07!\x02\x02\u038E\u038F\x07\x04\x02\x02" +
		"\u038F\u0394\x05@!\x02\u0390\u0391\x07\x05\x02\x02\u0391\u0393\x05@!\x02" +
		"\u0392\u0390\x03\x02\x02\x02\u0393\u0396\x03\x02\x02\x02\u0394\u0392\x03" +
		"\x02\x02\x02\u0394\u0395\x03\x02\x02\x02\u0395\u0397\x03\x02\x02\x02\u0396" +
		"\u0394\x03\x02\x02\x02\u0397\u0398\x07\x06\x02\x02\u0398\u03B7\x03\x02" +
		"\x02\x02\u0399\u039B\x07\"\x02\x02\u039A\u0399\x03\x02\x02\x02\u039A\u039B" +
		"\x03\x02\x02\x02\u039B\u039C\x03\x02\x02\x02\u039C\u039D\x07!\x02\x02" +
		"\u039D\u039E\x07\x04\x02\x02\u039E\u039F\x05\n\x06\x02\u039F\u03A0\x07" +
		"\x06\x02\x02\u03A0\u03B7\x03\x02\x02\x02\u03A1\u03A3\x07\"\x02\x02\u03A2" +
		"\u03A1\x03\x02\x02\x02\u03A2\u03A3\x03\x02\x02\x02\u03A3\u03A4\x03\x02" +
		"\x02\x02\u03A4\u03A5\x07&\x02\x02\u03A5\u03A8\x05H%\x02\u03A6\u03A7\x07" +
		".\x02\x02\u03A7\u03A9\x05H%\x02\u03A8\u03A6\x03\x02\x02\x02\u03A8\u03A9" +
		"\x03\x02\x02\x02\u03A9\u03B7\x03\x02\x02\x02\u03AA\u03AC\x07\'\x02\x02" +
		"\u03AB\u03AD\x07\"\x02\x02\u03AC\u03AB\x03\x02\x02\x02\u03AC\u03AD\x03" +
		"\x02\x02\x02\u03AD\u03AE\x03\x02\x02\x02\u03AE\u03B7\x07(\x02\x02\u03AF" +
		"\u03B1\x07\'\x02\x02\u03B0\u03B2\x07\"\x02\x02\u03B1\u03B0\x03\x02\x02" +
		"\x02\u03B1\u03B2\x03\x02\x02\x02\u03B2\u03B3\x03\x02\x02\x02\u03B3\u03B4" +
		"\x07\x13\x02\x02\u03B4\u03B5\x07\r\x02\x02\u03B5\u03B7\x05H%\x02\u03B6" +
		"\u0379\x03\x02\x02\x02\u03B6\u037C\x03\x02\x02\x02\u03B6\u0383\x03\x02" +
		"\x02\x02\u03B6\u038B\x03\x02\x02\x02\u03B6\u039A\x03\x02\x02\x02\u03B6" +
		"\u03A2\x03\x02\x02\x02\u03B6\u03AA\x03\x02\x02\x02\u03B6\u03AF\x03\x02" +
		"\x02\x02\u03B7G\x03\x02\x02\x02\u03B8\u03B9\b%\x01\x02\u03B9\u03BD\x05" +
		"J&\x02\u03BA\u03BB\t\v\x02\x02\u03BB\u03BD\x05H%\x06\u03BC\u03B8\x03\x02" +
		"\x02\x02\u03BC\u03BA\x03\x02\x02\x02\u03BD\u03CC\x03\x02\x02\x02\u03BE" +
		"\u03BF\f\x05\x02\x02\u03BF\u03C0\t\f\x02\x02\u03C0\u03CB\x05H%\x06\u03C1" +
		"\u03C2\f\x04\x02\x02\u03C2\u03C3\t\v\x02\x02\u03C3\u03CB\x05H%\x05\u03C4" +
		"\u03C5\f\x03\x02\x02\u03C5\u03C6\x07\xC5\x02\x02\u03C6\u03CB\x05H%\x04" +
		"\u03C7\u03C8\f\x07\x02\x02\u03C8\u03C9\x07\x1E\x02\x02\u03C9\u03CB\x05" +
		"L\'\x02\u03CA\u03BE\x03\x02\x02\x02\u03CA\u03C1\x03\x02\x02\x02\u03CA" +
		"\u03C4\x03\x02\x02\x02\u03CA\u03C7\x03\x02\x02\x02\u03CB\u03CE\x03\x02" +
		"\x02\x02\u03CC\u03CA\x03\x02\x02\x02\u03CC\u03CD\x03\x02\x02\x02\u03CD" +
		"I\x03\x02\x02\x02\u03CE\u03CC\x03\x02\x02\x02\u03CF\u03D0\b&\x01\x02\u03D0" +
		"\u049E";
	private static readonly _serializedATNSegment2: string =
		"\x07(\x02\x02\u03D1\u049E\x05T+\x02\u03D2\u03D3\x05t;\x02\u03D3\u03D4" +
		"\x07\xC6\x02\x02\u03D4\u049E\x03\x02\x02\x02\u03D5\u03D6\x07\xD0\x02\x02" +
		"\u03D6\u049E\x07\xC6\x02\x02\u03D7\u049E\x05x=\x02\u03D8\u049E\x05R*\x02" +
		"\u03D9\u049E\x07\xC6\x02\x02\u03DA\u049E\x07\xC7\x02\x02\u03DB\u049E\x07" +
		"\x07\x02\x02\u03DC\u03DD\x072\x02\x02\u03DD\u03DE\x07\x04\x02\x02\u03DE" +
		"\u03DF\x05H%\x02\u03DF\u03E0\x07!\x02\x02\u03E0\u03E1\x05H%\x02\u03E1" +
		"\u03E2\x07\x06\x02\x02\u03E2\u049E\x03\x02\x02\x02\u03E3\u03E4\x07\x04" +
		"\x02\x02\u03E4\u03E9\x05@!\x02\u03E5\u03E6\x07\x05\x02\x02\u03E6\u03E8" +
		"\x05@!\x02\u03E7\u03E5\x03\x02\x02\x02\u03E8\u03EB\x03\x02\x02\x02\u03E9" +
		"\u03E7\x03\x02\x02\x02\u03E9\u03EA\x03\x02\x02\x02\u03EA\u03EC\x03\x02" +
		"\x02\x02\u03EB\u03E9\x03\x02\x02\x02\u03EC\u03ED\x07\x06\x02\x02\u03ED" +
		"\u049E\x03\x02\x02\x02\u03EE\u03EF\x07`\x02\x02\u03EF\u03F0\x07\x04\x02" +
		"\x02\u03F0\u03F5\x05@!\x02\u03F1\u03F2\x07\x05\x02\x02\u03F2\u03F4\x05" +
		"@!\x02\u03F3\u03F1\x03\x02\x02\x02\u03F4\u03F7\x03\x02\x02\x02\u03F5\u03F3" +
		"\x03\x02\x02\x02\u03F5\u03F6\x03\x02\x02\x02\u03F6\u03F8\x03\x02\x02\x02" +
		"\u03F7\u03F5\x03\x02\x02\x02\u03F8\u03F9\x07\x06\x02\x02\u03F9\u049E\x03" +
		"\x02\x02\x02\u03FA\u03FB\x05r:\x02\u03FB\u03FC\x07\x04\x02\x02\u03FC\u03FD" +
		"\x07\xC2\x02\x02\u03FD\u03FF\x07\x06\x02\x02\u03FE\u0400\x05`1\x02\u03FF" +
		"\u03FE\x03\x02\x02\x02\u03FF\u0400\x03\x02\x02\x02\u0400\u0402\x03\x02" +
		"\x02\x02\u0401\u0403\x05b2\x02\u0402\u0401\x03\x02\x02\x02\u0402\u0403" +
		"\x03\x02\x02\x02\u0403\u049E\x03\x02\x02\x02\u0404\u0405\x05r:\x02\u0405" +
		"\u0411\x07\x04\x02\x02\u0406\u0408\x05,\x17\x02\u0407\u0406\x03\x02\x02" +
		"\x02\u0407\u0408\x03\x02\x02\x02\u0408\u0409\x03\x02\x02\x02\u0409\u040E" +
		"\x05@!\x02\u040A\u040B\x07\x05\x02\x02\u040B\u040D\x05@!\x02\u040C\u040A" +
		"\x03\x02\x02\x02\u040D\u0410\x03\x02\x02\x02\u040E\u040C\x03\x02\x02\x02" +
		"\u040E\u040F\x03\x02\x02\x02\u040F\u0412\x03\x02\x02\x02\u0410\u040E\x03" +
		"\x02\x02\x02\u0411\u0407\x03\x02\x02\x02\u0411\u0412\x03\x02\x02\x02\u0412" +
		"\u0413\x03\x02\x02\x02\u0413\u0415\x07\x06\x02\x02\u0414\u0416\x05`1\x02" +
		"\u0415\u0414\x03\x02\x02\x02\u0415\u0416\x03\x02\x02\x02\u0416\u0418\x03" +
		"\x02\x02\x02\u0417\u0419\x05b2\x02\u0418\u0417\x03\x02\x02\x02\u0418\u0419" +
		"\x03\x02\x02\x02\u0419\u049E\x03\x02\x02\x02\u041A\u041B\x05t;\x02\u041B" +
		"\u041C\x07\b\x02\x02\u041C\u041D\x05@!\x02\u041D\u049E\x03\x02\x02\x02" +
		"\u041E\u041F\x07\x04\x02\x02\u041F\u0424\x05t;\x02\u0420\u0421\x07\x05" +
		"\x02\x02\u0421\u0423\x05t;\x02\u0422\u0420\x03\x02\x02\x02\u0423\u0426" +
		"\x03\x02\x02\x02\u0424\u0422\x03\x02\x02\x02\u0424\u0425\x03\x02\x02\x02" +
		"\u0425\u0427\x03\x02\x02\x02\u0426\u0424\x03\x02\x02\x02\u0427\u0428\x07" +
		"\x06\x02\x02\u0428\u0429\x07\b\x02\x02\u0429\u042A\x05@!\x02\u042A\u049E" +
		"\x03\x02\x02\x02\u042B\u042C\x07\x04\x02\x02\u042C\u042D\x05\n\x06\x02" +
		"\u042D\u042E\x07\x06\x02\x02\u042E\u049E\x03\x02\x02\x02\u042F\u0430\x07" +
		"$\x02\x02\u0430\u0431\x07\x04\x02\x02\u0431\u0432\x05\n\x06\x02\u0432" +
		"\u0433\x07\x06\x02\x02\u0433\u049E\x03\x02\x02\x02\u0434\u0435\x07H\x02" +
		"\x02\u0435\u0437\x05H%\x02\u0436\u0438\x05^0\x02\u0437\u0436\x03\x02\x02" +
		"\x02\u0438\u0439\x03\x02\x02\x02\u0439\u0437\x03\x02\x02\x02\u0439\u043A" +
		"\x03\x02\x02\x02\u043A\u043D\x03\x02\x02\x02\u043B\u043C\x07K\x02\x02" +
		"\u043C\u043E\x05@!\x02\u043D\u043B\x03\x02\x02\x02\u043D\u043E\x03\x02" +
		"\x02\x02\u043E\u043F\x03\x02\x02\x02\u043F\u0440\x07L\x02\x02\u0440\u049E" +
		"\x03\x02\x02\x02\u0441\u0443\x07H\x02\x02\u0442\u0444\x05^0\x02\u0443" +
		"\u0442\x03\x02\x02\x02\u0444\u0445\x03\x02\x02\x02\u0445\u0443\x03\x02" +
		"\x02\x02\u0445\u0446\x03\x02\x02\x02\u0446\u0449\x03\x02\x02\x02\u0447" +
		"\u0448\x07K\x02\x02\u0448\u044A\x05@!\x02\u0449\u0447\x03\x02\x02\x02" +
		"\u0449\u044A\x03\x02\x02\x02\u044A\u044B\x03\x02\x02\x02\u044B\u044C\x07" +
		"L\x02\x02\u044C\u049E\x03\x02\x02\x02\u044D\u044E\x07{\x02\x02\u044E\u044F" +
		"\x07\x04\x02\x02\u044F\u0450\x05@!\x02\u0450\u0451\x07\x0F\x02\x02\u0451" +
		"\u0452\x05X-\x02\u0452\u0453\x07\x06\x02\x02\u0453\u049E\x03\x02\x02\x02" +
		"\u0454\u0455\x07|\x02\x02\u0455\u0456\x07\x04\x02\x02\u0456\u0457\x05" +
		"@!\x02\u0457\u0458\x07\x0F\x02\x02\u0458\u0459\x05X-\x02\u0459\u045A\x07" +
		"\x06\x02\x02\u045A\u049E\x03\x02\x02\x02\u045B\u045C\x07\x93\x02\x02\u045C" +
		"\u0465\x07\t\x02\x02\u045D\u0462\x05@!\x02\u045E\u045F\x07\x05\x02\x02" +
		"\u045F\u0461\x05@!\x02\u0460\u045E\x03\x02\x02\x02\u0461\u0464\x03\x02" +
		"\x02\x02\u0462\u0460\x03\x02\x02\x02\u0462\u0463\x03\x02\x02\x02\u0463" +
		"\u0466\x03\x02\x02\x02\u0464\u0462\x03\x02\x02\x02\u0465\u045D\x03\x02" +
		"\x02\x02\u0465\u0466\x03\x02\x02\x02\u0466\u0467\x03\x02\x02\x02\u0467" +
		"\u049E\x07\n\x02\x02\u0468\u049E\x05t;\x02\u0469\u049E\x07B\x02\x02\u046A" +
		"\u046E\x07C\x02\x02\u046B\u046C\x07\x04\x02\x02\u046C\u046D\x07\xC8\x02" +
		"\x02\u046D\u046F\x07\x06\x02\x02\u046E\u046B\x03\x02\x02\x02\u046E\u046F" +
		"\x03\x02\x02\x02\u046F\u049E\x03\x02\x02\x02\u0470\u0474\x07D\x02\x02" +
		"\u0471\u0472\x07\x04\x02\x02\u0472\u0473\x07\xC8\x02\x02\u0473\u0475\x07" +
		"\x06\x02\x02\u0474\u0471\x03\x02\x02\x02\u0474\u0475\x03\x02\x02\x02\u0475" +
		"\u049E\x03\x02\x02\x02\u0476\u047A\x07E\x02\x02\u0477\u0478\x07\x04\x02" +
		"\x02\u0478\u0479\x07\xC8\x02\x02\u0479\u047B\x07\x06\x02\x02\u047A\u0477" +
		"\x03\x02\x02\x02\u047A\u047B\x03\x02\x02\x02\u047B\u049E\x03\x02\x02\x02" +
		"\u047C\u0480\x07F\x02\x02\u047D\u047E\x07\x04\x02\x02\u047E\u047F\x07" +
		"\xC8\x02\x02\u047F\u0481\x07\x06\x02\x02\u0480\u047D\x03\x02\x02\x02\u0480" +
		"\u0481\x03\x02\x02\x02\u0481\u049E\x03\x02\x02\x02\u0482\u0483\x071\x02" +
		"\x02\u0483\u0484\x07\x04\x02\x02\u0484\u0485\x05H%\x02\u0485\u0486\x07" +
		"\r\x02\x02\u0486\u0489\x05H%\x02\u0487\u0488\x073\x02\x02\u0488\u048A" +
		"\x05H%\x02\u0489\u0487\x03\x02\x02\x02\u0489\u048A\x03\x02\x02\x02\u048A" +
		"\u048B\x03\x02\x02\x02\u048B\u048C\x07\x06\x02\x02\u048C\u049E\x03\x02" +
		"\x02\x02\u048D\u048E\x07\xB2\x02\x02\u048E\u048F\x07\x04\x02\x02\u048F" +
		"\u0492\x05H%\x02\u0490\u0491\x07\x05\x02\x02\u0491\u0493\x05|?\x02\u0492" +
		"\u0490\x03\x02\x02\x02\u0492\u0493\x03\x02\x02\x02\u0493\u0494\x03\x02" +
		"\x02\x02\u0494\u0495\x07\x06\x02\x02\u0495\u049E\x03\x02\x02\x02\u0496" +
		"\u0497\x07G\x02\x02\u0497\u0498\x07\x04\x02\x02\u0498\u0499\x05t;\x02" +
		"\u0499\u049A\x07\r\x02\x02\u049A\u049B\x05H%\x02\u049B\u049C\x07\x06\x02" +
		"\x02\u049C\u049E\x03\x02\x02\x02\u049D\u03CF\x03\x02\x02\x02\u049D\u03D1" +
		"\x03\x02\x02\x02\u049D\u03D2\x03\x02\x02\x02\u049D\u03D5\x03\x02\x02\x02" +
		"\u049D\u03D7\x03\x02\x02\x02\u049D\u03D8\x03\x02\x02\x02\u049D\u03D9\x03" +
		"\x02\x02\x02\u049D\u03DA\x03\x02\x02\x02\u049D\u03DB\x03\x02\x02\x02\u049D" +
		"\u03DC\x03\x02\x02\x02\u049D\u03E3\x03\x02\x02\x02\u049D\u03EE\x03\x02" +
		"\x02\x02\u049D\u03FA\x03\x02\x02\x02\u049D\u0404\x03\x02\x02\x02\u049D" +
		"\u041A\x03\x02\x02\x02\u049D\u041E\x03\x02\x02\x02\u049D\u042B\x03\x02" +
		"\x02\x02\u049D\u042F\x03\x02\x02\x02\u049D\u0434\x03\x02\x02\x02\u049D" +
		"\u0441\x03\x02\x02\x02\u049D\u044D\x03\x02\x02\x02\u049D\u0454\x03\x02" +
		"\x02\x02\u049D\u045B\x03\x02\x02\x02\u049D\u0468\x03\x02\x02\x02\u049D" +
		"\u0469\x03\x02\x02\x02\u049D\u046A\x03\x02\x02\x02\u049D\u0470\x03\x02" +
		"\x02\x02\u049D\u0476\x03\x02\x02\x02\u049D\u047C\x03\x02\x02\x02\u049D" +
		"\u0482\x03\x02\x02\x02\u049D\u048D\x03\x02\x02\x02\u049D\u0496\x03\x02" +
		"\x02\x02\u049E\u04A9\x03\x02\x02\x02\u049F\u04A0\f\r\x02\x02\u04A0\u04A1" +
		"\x07\t\x02\x02\u04A1\u04A2\x05H%\x02\u04A2\u04A3\x07\n\x02\x02\u04A3\u04A8" +
		"\x03\x02\x02\x02\u04A4\u04A5\f\v\x02\x02\u04A5\u04A6\x07\x03\x02\x02\u04A6" +
		"\u04A8\x05t;\x02\u04A7\u049F\x03\x02\x02\x02\u04A7\u04A4\x03\x02\x02\x02" +
		"\u04A8\u04AB\x03\x02\x02\x02\u04A9\u04A7\x03\x02\x02\x02\u04A9\u04AA\x03" +
		"\x02\x02\x02\u04AAK\x03\x02\x02\x02\u04AB\u04A9\x03\x02\x02\x02\u04AC" +
		"\u04AD\x078\x02\x02\u04AD\u04AE\x07A\x02\x02\u04AE\u04B3\x05T+\x02\u04AF" +
		"\u04B0\x078\x02\x02\u04B0\u04B1\x07A\x02\x02\u04B1\u04B3\x07\xC6\x02\x02" +
		"\u04B2\u04AC\x03\x02\x02\x02\u04B2\u04AF\x03\x02\x02\x02\u04B3M\x03\x02" +
		"\x02\x02\u04B4\u04B5\t\r\x02\x02\u04B5O\x03\x02\x02\x02\u04B6\u04B7\t" +
		"\x0E\x02\x02\u04B7Q\x03\x02\x02\x02\u04B8\u04B9\t\x0F\x02\x02\u04B9S\x03" +
		"\x02\x02\x02\u04BA\u04BC\x07:\x02\x02\u04BB\u04BD\t\v\x02\x02\u04BC\u04BB" +
		"\x03\x02\x02\x02\u04BC\u04BD\x03\x02\x02\x02\u04BD\u04BE\x03\x02\x02\x02" +
		"\u04BE\u04BF\x07\xC6\x02\x02\u04BF\u04C2\x05V,\x02\u04C0\u04C1\x07\x8A" +
		"\x02\x02\u04C1\u04C3\x05V,\x02\u04C2\u04C0\x03\x02\x02\x02\u04C2\u04C3" +
		"\x03\x02\x02\x02\u04C3U\x03\x02\x02\x02\u04C4\u04C5\t\x10\x02\x02\u04C5" +
		"W\x03\x02\x02\x02\u04C6\u04C7\b-\x01\x02\u04C7\u04C8\x07\x93\x02\x02\u04C8" +
		"\u04C9\x07\xBC\x02\x02\u04C9\u04CA\x05X-\x02\u04CA\u04CB\x07\xBE\x02\x02" +
		"\u04CB\u04F1\x03\x02\x02\x02\u04CC\u04CD\x07\x94\x02\x02\u04CD\u04CE\x07" +
		"\xBC\x02\x02\u04CE\u04CF\x05X-\x02\u04CF\u04D0\x07\x05\x02\x02\u04D0\u04D1" +
		"\x05X-\x02\u04D1\u04D2\x07\xBE\x02\x02\u04D2\u04F1\x03\x02\x02\x02\u04D3" +
		"\u04D4\x07`\x02\x02\u04D4\u04D5\x07\x04\x02\x02\u04D5\u04D6\x05t;\x02" +
		"\u04D6\u04DD\x05X-\x02\u04D7\u04D8\x07\x05\x02\x02\u04D8\u04D9\x05t;\x02" +
		"\u04D9\u04DA\x05X-\x02\u04DA\u04DC\x03\x02\x02\x02\u04DB\u04D7\x03\x02" +
		"\x02\x02\u04DC\u04DF\x03\x02\x02\x02\u04DD\u04DB\x03\x02\x02\x02\u04DD" +
		"\u04DE\x03\x02\x02\x02\u04DE\u04E0\x03\x02\x02\x02\u04DF\u04DD\x03\x02" +
		"\x02\x02\u04E0\u04E1\x07\x06\x02\x02\u04E1\u04F1\x03\x02\x02\x02\u04E2" +
		"\u04EE\x05\\/\x02\u04E3\u04E4\x07\x04\x02\x02\u04E4\u04E9\x05Z.\x02\u04E5" +
		"\u04E6\x07\x05\x02\x02\u04E6\u04E8\x05Z.\x02\u04E7\u04E5\x03\x02\x02\x02" +
		"\u04E8\u04EB\x03\x02\x02\x02\u04E9\u04E7\x03\x02\x02\x02\u04E9\u04EA\x03" +
		"\x02\x02\x02\u04EA\u04EC\x03\x02\x02\x02\u04EB\u04E9\x03\x02\x02\x02\u04EC" +
		"\u04ED\x07\x06\x02\x02\u04ED\u04EF\x03\x02\x02\x02\u04EE\u04E3\x03\x02" +
		"\x02\x02\u04EE\u04EF\x03\x02\x02\x02\u04EF\u04F1\x03\x02\x02\x02\u04F0" +
		"\u04C6\x03\x02\x02\x02\u04F0\u04CC\x03\x02\x02\x02\u04F0\u04D3\x03\x02" +
		"\x02\x02\u04F0\u04E2\x03\x02\x02\x02\u04F1\u04F6\x03\x02\x02\x02\u04F2" +
		"\u04F3\f\x07\x02\x02\u04F3\u04F5\x07\x93\x02\x02\u04F4\u04F2\x03\x02\x02" +
		"\x02\u04F5\u04F8\x03\x02\x02\x02\u04F6\u04F4\x03\x02\x02\x02\u04F6\u04F7" +
		"\x03\x02\x02\x02\u04F7Y\x03\x02\x02\x02\u04F8\u04F6\x03\x02\x02\x02\u04F9" +
		"\u04FC\x07\xC8\x02\x02\u04FA\u04FC\x05X-\x02\u04FB\u04F9\x03\x02\x02\x02" +
		"\u04FB\u04FA\x03\x02\x02\x02\u04FC[\x03\x02\x02\x02\u04FD\u0502\x07\xCE" +
		"\x02\x02\u04FE\u0502\x07\xCF\x02\x02\u04FF\u0502\x07\xD0\x02\x02\u0500" +
		"\u0502\x05t;\x02\u0501\u04FD\x03\x02\x02\x02\u0501\u04FE\x03\x02\x02\x02" +
		"\u0501\u04FF\x03\x02\x02\x02\u0501\u0500\x03\x02\x02\x02\u0502]\x03\x02" +
		"\x02\x02\u0503\u0504\x07I\x02\x02\u0504\u0505\x05@!\x02\u0505\u0506\x07" +
		"J\x02\x02\u0506\u0507\x05@!\x02\u0507_\x03\x02\x02\x02\u0508\u0509\x07" +
		"W\x02\x02\u0509\u050A\x07\x04\x02\x02\u050A\u050B\x07\x14\x02\x02\u050B" +
		"\u050C\x05B\"\x02\u050C\u050D\x07\x06\x02\x02\u050Da\x03\x02\x02\x02\u050E" +
		"\u050F\x07X\x02\x02\u050F\u051A\x07\x04\x02\x02\u0510\u0511\x07Y\x02\x02" +
		"\u0511\u0512\x07\x16\x02\x02\u0512\u0517\x05@!\x02\u0513\u0514\x07\x05" +
		"\x02\x02\u0514\u0516\x05@!\x02\u0515\u0513\x03\x02\x02\x02\u0516\u0519" +
		"\x03\x02\x02\x02\u0517\u0515\x03\x02\x02\x02\u0517\u0518\x03\x02\x02\x02" +
		"\u0518\u051B\x03\x02\x02\x02\u0519\u0517\x03\x02\x02\x02\u051A\u0510\x03" +
		"\x02\x02\x02\u051A\u051B\x03\x02\x02\x02\u051B\u0526\x03\x02\x02\x02\u051C" +
		"\u051D\x07\x1B\x02\x02\u051D\u051E\x07\x16\x02\x02\u051E\u0523\x05\x1E" +
		"\x10\x02\u051F\u0520\x07\x05\x02\x02\u0520\u0522\x05\x1E\x10\x02\u0521" +
		"\u051F\x03\x02\x02\x02\u0522\u0525\x03\x02\x02\x02\u0523\u0521\x03\x02" +
		"\x02\x02\u0523\u0524\x03\x02\x02\x02\u0524\u0527\x03\x02\x02\x02\u0525" +
		"\u0523\x03\x02\x02\x02\u0526\u051C\x03\x02\x02\x02\u0526\u0527\x03\x02" +
		"\x02\x02\u0527\u0529\x03\x02\x02\x02\u0528\u052A\x05d3\x02\u0529\u0528" +
		"\x03\x02\x02\x02\u0529\u052A\x03\x02\x02\x02\u052A\u052B\x03\x02\x02\x02" +
		"\u052B\u052C\x07\x06\x02\x02\u052Cc\x03\x02\x02\x02\u052D\u052E\x07Z\x02" +
		"\x02\u052E\u053E\x05f4\x02\u052F\u0530\x07[\x02\x02\u0530\u053E\x05f4" +
		"\x02\u0531\u0532\x07Z\x02\x02\u0532\u0533\x07%\x02\x02\u0533\u0534\x05" +
		"f4\x02\u0534\u0535\x07 \x02\x02\u0535\u0536\x05f4\x02\u0536\u053E\x03" +
		"\x02\x02\x02\u0537\u0538\x07[\x02\x02\u0538\u0539\x07%\x02\x02\u0539\u053A" +
		"\x05f4\x02\u053A\u053B\x07 \x02\x02\u053B\u053C\x05f4\x02\u053C\u053E" +
		"\x03\x02\x02\x02\u053D\u052D\x03\x02\x02\x02\u053D\u052F\x03\x02\x02\x02" +
		"\u053D\u0531\x03\x02\x02\x02\u053D\u0537\x03\x02\x02\x02\u053Ee\x03\x02" +
		"\x02\x02\u053F\u0540\x07\\\x02\x02\u0540\u0549\x07]\x02\x02\u0541\u0542" +
		"\x07\\\x02\x02\u0542\u0549\x07^\x02\x02\u0543\u0544\x07_\x02\x02\u0544" +
		"\u0549\x07`\x02\x02\u0545\u0546\x05@!\x02\u0546\u0547\t\x11\x02\x02\u0547" +
		"\u0549\x03\x02\x02\x02\u0548\u053F\x03\x02\x02\x02\u0548\u0541\x03\x02" +
		"\x02\x02\u0548\u0543\x03\x02\x02\x02\u0548\u0545\x03\x02\x02\x02\u0549" +
		"g\x03\x02\x02\x02\u054A\u054B\x07u\x02\x02\u054B\u054F\t\x12\x02\x02\u054C" +
		"\u054D\x07v\x02\x02\u054D\u054F\t\x13\x02\x02\u054E\u054A\x03\x02\x02" +
		"\x02\u054E\u054C\x03\x02\x02\x02\u054Fi\x03\x02\x02\x02\u0550\u0551\x07" +
		"\x9E\x02\x02\u0551\u0552\x07\x9F\x02\x02\u0552\u0556\x05l7\x02\u0553\u0554" +
		"\x07\xA4\x02\x02\u0554\u0556\t\x14\x02\x02\u0555\u0550\x03\x02\x02\x02" +
		"\u0555\u0553\x03\x02\x02\x02\u0556k\x03\x02\x02\x02\u0557\u0558\x07\xA4" +
		"\x02\x02\u0558\u055F\x07\xA3\x02\x02\u0559\u055A\x07\xA4\x02\x02\u055A" +
		"\u055F\x07\xA2\x02\x02\u055B\u055C\x07\xA1\x02\x02\u055C\u055F\x07\xA4" +
		"\x02\x02\u055D\u055F\x07\xA0\x02\x02\u055E\u0557\x03\x02\x02\x02\u055E" +
		"\u0559\x03\x02\x02\x02\u055E\u055B\x03\x02\x02\x02\u055E\u055D\x03\x02" +
		"\x02\x02\u055Fm\x03\x02\x02\x02\u0560\u0566\x05@!\x02\u0561\u0562\x05" +
		"t;\x02\u0562\u0563\x07\v\x02\x02\u0563\u0564\x05@!\x02\u0564\u0566\x03" +
		"\x02\x02\x02\u0565\u0560\x03\x02\x02\x02\u0565\u0561\x03\x02\x02\x02\u0566" +
		"o\x03\x02\x02\x02\u0567\u056C\x07\f\x02\x02\u0568\u056C\x07j\x02\x02\u0569" +
		"\u056C\x07i\x02\x02\u056A\u056C\x05t;\x02\u056B\u0567\x03\x02\x02\x02" +
		"\u056B\u0568\x03\x02\x02\x02\u056B\u0569\x03\x02\x02\x02\u056B\u056A\x03" +
		"\x02\x02\x02\u056Cq\x03\x02\x02\x02\u056D\u0572\x05t;\x02\u056E\u056F" +
		"\x07\x03\x02\x02\u056F\u0571\x05t;\x02\u0570\u056E\x03\x02\x02\x02\u0571" +
		"\u0574\x03\x02\x02\x02\u0572\u0570\x03\x02\x02\x02\u0572\u0573\x03\x02" +
		"\x02\x02\u0573s\x03\x02\x02\x02\u0574\u0572\x03\x02\x02\x02\u0575\u057B" +
		"\x07\xCA\x02\x02\u0576\u057B\x05v<\x02\u0577\u057B\x05z>\x02\u0578\u057B" +
		"\x07\xCD\x02\x02\u0579\u057B\x07\xCB\x02\x02\u057A\u0575\x03\x02\x02\x02" +
		"\u057A\u0576\x03\x02\x02\x02\u057A\u0577\x03\x02\x02\x02\u057A\u0578\x03" +
		"\x02\x02\x02\u057A\u0579\x03\x02\x02\x02\u057Bu\x03\x02\x02\x02\u057C" +
		"\u057D\x07\xCC\x02\x02\u057Dw\x03\x02\x02\x02\u057E\u0581\x07\xC9\x02" +
		"\x02\u057F\u0581\x07\xC8\x02\x02\u0580\u057E\x03\x02\x02\x02\u0580\u057F" +
		"\x03\x02\x02\x02\u0581y\x03\x02\x02\x02\u0582\u05DC\x07}\x02\x02\u0583" +
		"\u05DC\x07~\x02\x02\u0584\u05DC\x07\x81\x02\x02\u0585\u05DC\x07\x82\x02" +
		"\x02\u0586\u05DC\x07\x84\x02\x02\u0587\u05DC\x07\x85\x02\x02\u0588\u05DC" +
		"\x07\x7F\x02\x02\u0589\u05DC\x07\x80\x02\x02\u058A\u05DC\x07\x97\x02\x02" +
		"\u058B\u05DC\x07\x0E\x02\x02\u058C\u05DC\x07W\x02\x02\u058D\u05DC\x07" +
		"X\x02\x02\u058E\u05DC\x07Y\x02\x02\u058F\u05DC\x07Z\x02\x02\u0590\u05DC" +
		"\x07[\x02\x02\u0591\u05DC\x07]\x02\x02\u0592\u05DC\x07^\x02\x02\u0593" +
		"\u05DC\x07_\x02\x02\u0594\u05DC\x07`\x02\x02\u0595\u05DC\x07\x94\x02\x02" +
		"\u0596\u05DC\x07\x93\x02\x02\u0597\u05DC\x074\x02\x02\u0598\u05DC\x07" +
		"5\x02\x02\u0599\u05DC\x076\x02\x02\u059A\u05DC\x077\x02\x02\u059B\u05DC" +
		"\x078\x02\x02\u059C\u05DC\x079\x02\x02\u059D\u05DC\x07:\x02\x02\u059E" +
		"\u05DC\x07A\x02\x02\u059F\u05DC\x07;\x02\x02\u05A0\u05DC\x07<\x02\x02" +
		"\u05A1\u05DC\x07=\x02\x02\u05A2\u05DC\x07>\x02\x02\u05A3\u05DC\x07?\x02" +
		"\x02\u05A4\u05DC\x07@\x02\x02\u05A5\u05DC\x07s\x02\x02\u05A6\u05DC\x07" +
		"t\x02\x02\u05A7\u05DC\x07u\x02\x02\u05A8\u05DC\x07v\x02\x02\u05A9\u05DC" +
		"\x07w\x02\x02\u05AA\u05DC\x07x\x02\x02\u05AB\u05DC\x07y\x02\x02\u05AC" +
		"\u05DC\x07z\x02\x02\u05AD\u05DC\x07\x8E\x02\x02\u05AE\u05DC\x07\x8B\x02" +
		"\x02\u05AF\u05DC\x07\x8C\x02\x02\u05B0\u05DC\x07\x8D\x02\x02\u05B1\u05DC" +
		"\x07\x83\x02\x02\u05B2\u05DC\x07\x8A\x02\x02\u05B3\u05DC\x07\x95\x02\x02" +
		"\u05B4\u05DC\x07\x96\x02\x02\u05B5\u05DC\x07g\x02\x02\u05B6\u05DC\x07" +
		"h\x02\x02\u05B7\u05DC\x07\xB7\x02\x02\u05B8\u05DC\x07\xB8\x02\x02\u05B9" +
		"\u05DC\x07\xB9\x02\x02\u05BA\u05DC\x05|?\x02\u05BB\u05DC\x072\x02\x02" +
		"\u05BC\u05DC\x07#\x02\x02\u05BD\u05DC\x07\x98\x02\x02\u05BE\u05DC\x07" +
		"\x99\x02\x02\u05BF\u05DC\x07\x9A\x02\x02\u05C0\u05DC\x07\x9B\x02\x02\u05C1" +
		"\u05DC\x07\x9C\x02\x02\u05C2\u05DC\x07\x9D\x02\x02\u05C3\u05DC\x07\x9E" +
		"\x02\x02\u05C4\u05DC\x07\x9F\x02\x02\u05C5\u05DC\x07\xA0\x02\x02\u05C6" +
		"\u05DC\x07\xA1\x02\x02\u05C7\u05DC\x07\xA2\x02\x02\u05C8\u05DC\x07\xA3" +
		"\x02\x02\u05C9\u05DC\x07\xA4\x02\x02\u05CA\u05DC\x07\xA5\x02\x02\u05CB" +
		"\u05DC\x07\xA6\x02\x02\u05CC\u05DC\x07\xA7\x02\x02\u05CD\u05DC\x07n\x02" +
		"\x02\u05CE\u05DC\x07o\x02\x02\u05CF\u05DC\x07p\x02\x02\u05D0\u05DC\x07" +
		"q\x02\x02\u05D1\u05DC\x07r\x02\x02\u05D2\u05DC\x071\x02\x02\u05D3\u05DC" +
		"\x07e\x02\x02\u05D4\u05DC\x07\xAD\x02\x02\u05D5\u05DC\x07\xAE\x02\x02" +
		"\u05D6\u05DC\x07\xAB\x02\x02\u05D7\u05DC\x07\xAC\x02\x02\u05D8\u05DC\x07" +
		"\xAF\x02\x02\u05D9\u05DC\x07\xB0\x02\x02\u05DA\u05DC\x07\xB1\x02\x02\u05DB" +
		"\u0582\x03\x02\x02\x02\u05DB\u0583\x03\x02\x02\x02\u05DB\u0584\x03\x02" +
		"\x02\x02\u05DB\u0585\x03\x02\x02\x02\u05DB\u0586\x03\x02\x02\x02\u05DB" +
		"\u0587\x03\x02\x02\x02\u05DB\u0588\x03\x02\x02\x02\u05DB\u0589\x03\x02" +
		"\x02\x02\u05DB\u058A\x03\x02\x02\x02\u05DB\u058B\x03\x02\x02\x02\u05DB" +
		"\u058C\x03\x02\x02\x02\u05DB\u058D\x03\x02\x02\x02\u05DB\u058E\x03\x02" +
		"\x02\x02\u05DB\u058F\x03\x02\x02\x02\u05DB\u0590\x03\x02\x02\x02\u05DB" +
		"\u0591\x03\x02\x02\x02\u05DB\u0592\x03\x02\x02\x02\u05DB\u0593\x03\x02" +
		"\x02\x02\u05DB\u0594\x03\x02\x02\x02\u05DB\u0595\x03\x02\x02\x02\u05DB" +
		"\u0596\x03\x02\x02\x02\u05DB\u0597\x03\x02\x02\x02\u05DB\u0598\x03\x02" +
		"\x02\x02\u05DB\u0599\x03\x02\x02\x02\u05DB\u059A\x03\x02\x02\x02\u05DB" +
		"\u059B\x03\x02\x02\x02\u05DB\u059C\x03\x02\x02\x02\u05DB\u059D\x03\x02" +
		"\x02\x02\u05DB\u059E\x03\x02\x02\x02\u05DB\u059F\x03\x02\x02\x02\u05DB" +
		"\u05A0\x03\x02\x02\x02\u05DB\u05A1\x03\x02\x02\x02\u05DB\u05A2\x03\x02" +
		"\x02\x02\u05DB\u05A3\x03\x02\x02\x02\u05DB\u05A4\x03\x02\x02\x02\u05DB" +
		"\u05A5\x03\x02\x02\x02\u05DB\u05A6\x03\x02\x02\x02\u05DB\u05A7\x03\x02" +
		"\x02\x02\u05DB\u05A8\x03\x02\x02\x02\u05DB\u05A9\x03\x02\x02\x02\u05DB" +
		"\u05AA\x03\x02\x02\x02\u05DB\u05AB\x03\x02\x02\x02\u05DB\u05AC\x03\x02" +
		"\x02\x02\u05DB\u05AD\x03\x02\x02\x02\u05DB\u05AE\x03\x02\x02\x02\u05DB" +
		"\u05AF\x03\x02\x02\x02\u05DB\u05B0\x03\x02\x02\x02\u05DB\u05B1\x03\x02" +
		"\x02\x02\u05DB\u05B2\x03\x02\x02\x02\u05DB\u05B3\x03\x02\x02\x02\u05DB" +
		"\u05B4\x03\x02\x02\x02\u05DB\u05B5\x03\x02\x02\x02\u05DB\u05B6\x03\x02" +
		"\x02\x02\u05DB\u05B7\x03\x02\x02\x02\u05DB\u05B8\x03\x02\x02\x02\u05DB" +
		"\u05B9\x03\x02\x02\x02\u05DB\u05BA\x03\x02\x02\x02\u05DB\u05BB\x03\x02" +
		"\x02\x02\u05DB\u05BC\x03\x02\x02\x02\u05DB\u05BD\x03\x02\x02\x02\u05DB" +
		"\u05BE\x03\x02\x02\x02\u05DB\u05BF\x03\x02\x02\x02\u05DB\u05C0\x03\x02" +
		"\x02\x02\u05DB\u05C1\x03\x02\x02\x02\u05DB\u05C2\x03\x02\x02\x02\u05DB" +
		"\u05C3\x03\x02\x02\x02\u05DB\u05C4\x03\x02\x02\x02\u05DB\u05C5\x03\x02" +
		"\x02\x02\u05DB\u05C6\x03\x02\x02\x02\u05DB\u05C7\x03\x02\x02\x02\u05DB" +
		"\u05C8\x03\x02\x02\x02\u05DB\u05C9\x03\x02\x02\x02\u05DB\u05CA\x03\x02" +
		"\x02\x02\u05DB\u05CB\x03\x02\x02\x02\u05DB\u05CC\x03\x02\x02\x02\u05DB" +
		"\u05CD\x03\x02\x02\x02\u05DB\u05CE\x03\x02\x02\x02\u05DB\u05CF\x03\x02" +
		"\x02\x02\u05DB\u05D0\x03\x02\x02\x02\u05DB\u05D1\x03\x02\x02\x02\u05DB" +
		"\u05D2\x03\x02\x02\x02\u05DB\u05D3\x03\x02\x02\x02\u05DB\u05D4\x03\x02" +
		"\x02\x02\u05DB\u05D5\x03\x02\x02\x02\u05DB\u05D6\x03\x02\x02\x02\u05DB" +
		"\u05D7\x03\x02\x02\x02\u05DB\u05D8\x03\x02\x02\x02\u05DB\u05D9\x03\x02" +
		"\x02\x02\u05DB\u05DA\x03\x02\x02\x02\u05DC{\x03\x02\x02\x02\u05DD\u05DE" +
		"\t\x15\x02\x02\u05DE}\x03\x02\x02\x02\xAF\x83\x87\x9E\xA3\xA9\xAD\xBB" +
		"\xC0\xC6\xC9\xD0\xD9\xDF\xE5\xEC\xF5\u0111\u011C\u0127\u012A\u0134\u0139" +
		"\u013D\u0145\u014B\u0152\u0157\u015B\u0163\u016B\u0170\u017F\u0183\u0189" +
		"\u018D\u0193\u01B1\u01B4\u01B8\u01BC\u01C4\u01CD\u01D0\u01D4\u01E6\u01E9" +
		"\u01F1\u01F4\u01FA\u0201\u0206\u020F\u0217\u0228\u022B\u022F\u0237\u023D" +
		"\u0240\u0242\u024E\u0255\u0259\u025D\u0261\u0268\u0271\u0274\u0278\u027D" +
		"\u0281\u0284\u028B\u0296\u0299\u02A3\u02A6\u02B1\u02B6\u02BE\u02C1\u02C5" +
		"\u02CD\u02D0\u02D4\u02D8\u02E3\u02E6\u02ED\u0300\u0304\u0308\u030C\u0310" +
		"\u0314\u0316\u0321\u0326\u032F\u0335\u0339\u033B\u0343\u0354\u035A\u0360" +
		"\u0368\u0370\u0372\u0377\u0383\u038B\u0394\u039A\u03A2\u03A8\u03AC\u03B1" +
		"\u03B6\u03BC\u03CA\u03CC\u03E9\u03F5\u03FF\u0402\u0407\u040E\u0411\u0415" +
		"\u0418\u0424\u0439\u043D\u0445\u0449\u0462\u0465\u046E\u0474\u047A\u0480" +
		"\u0489\u0492\u049D\u04A7\u04A9\u04B2\u04BC\u04C2\u04DD\u04E9\u04EE\u04F0" +
		"\u04F6\u04FB\u0501\u0517\u051A\u0523\u0526\u0529\u053D\u0548\u054E\u0555" +
		"\u055E\u0565\u056B\u0572\u057A\u0580\u05DB";
	public static readonly _serializedATN: string = Utils.join(
		[
			SqlBaseParser._serializedATNSegment0,
			SqlBaseParser._serializedATNSegment1,
			SqlBaseParser._serializedATNSegment2,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SqlBaseParser.__ATN) {
			SqlBaseParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SqlBaseParser._serializedATN));
		}

		return SqlBaseParser.__ATN;
	}

}

export class MultiStatementContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public EOF(): TerminalNode { return this.getToken(SqlBaseParser.EOF, 0); }
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SqlBaseParser.SEMICOLON);
		} else {
			return this.getToken(SqlBaseParser.SEMICOLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_multiStatement; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterMultiStatement) {
			listener.enterMultiStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitMultiStatement) {
			listener.exitMultiStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitMultiStatement) {
			return visitor.visitMultiStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleStatementContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public EOF(): TerminalNode { return this.getToken(SqlBaseParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_singleStatement; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterSingleStatement) {
			listener.enterSingleStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitSingleStatement) {
			listener.exitSingleStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitSingleStatement) {
			return visitor.visitSingleStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public EOF(): TerminalNode { return this.getToken(SqlBaseParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_singleExpression; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterSingleExpression) {
			listener.enterSingleExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitSingleExpression) {
			listener.exitSingleExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitSingleExpression) {
			return visitor.visitSingleExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_statement; }
	public copyFrom(ctx: StatementContext): void {
		super.copyFrom(ctx);
	}
}
export class StatementDefaultContext extends StatementContext {
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterStatementDefault) {
			listener.enterStatementDefault(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitStatementDefault) {
			listener.exitStatementDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitStatementDefault) {
			return visitor.visitStatementDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UseContext extends StatementContext {
	public _schema!: IdentifierContext;
	public _catalog!: IdentifierContext;
	public USE(): TerminalNode { return this.getToken(SqlBaseParser.USE, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterUse) {
			listener.enterUse(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitUse) {
			listener.exitUse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitUse) {
			return visitor.visitUse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateSchemaContext extends StatementContext {
	public CREATE(): TerminalNode { return this.getToken(SqlBaseParser.CREATE, 0); }
	public SCHEMA(): TerminalNode { return this.getToken(SqlBaseParser.SCHEMA, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.IF, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.NOT, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.EXISTS, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.WITH, 0); }
	public tableProperties(): TablePropertiesContext | undefined {
		return this.tryGetRuleContext(0, TablePropertiesContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterCreateSchema) {
			listener.enterCreateSchema(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitCreateSchema) {
			listener.exitCreateSchema(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitCreateSchema) {
			return visitor.visitCreateSchema(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropSchemaContext extends StatementContext {
	public DROP(): TerminalNode { return this.getToken(SqlBaseParser.DROP, 0); }
	public SCHEMA(): TerminalNode { return this.getToken(SqlBaseParser.SCHEMA, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.IF, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.EXISTS, 0); }
	public CASCADE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.CASCADE, 0); }
	public RESTRICT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.RESTRICT, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterDropSchema) {
			listener.enterDropSchema(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitDropSchema) {
			listener.exitDropSchema(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitDropSchema) {
			return visitor.visitDropSchema(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RenameSchemaContext extends StatementContext {
	public ALTER(): TerminalNode { return this.getToken(SqlBaseParser.ALTER, 0); }
	public SCHEMA(): TerminalNode { return this.getToken(SqlBaseParser.SCHEMA, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public RENAME(): TerminalNode { return this.getToken(SqlBaseParser.RENAME, 0); }
	public TO(): TerminalNode { return this.getToken(SqlBaseParser.TO, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterRenameSchema) {
			listener.enterRenameSchema(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitRenameSchema) {
			listener.exitRenameSchema(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitRenameSchema) {
			return visitor.visitRenameSchema(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateTableAsSelectContext extends StatementContext {
	public CREATE(): TerminalNode { return this.getToken(SqlBaseParser.CREATE, 0); }
	public TABLE(): TerminalNode { return this.getToken(SqlBaseParser.TABLE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public AS(): TerminalNode { return this.getToken(SqlBaseParser.AS, 0); }
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.IF, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.NOT, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.EXISTS, 0); }
	public WITH(): TerminalNode[];
	public WITH(i: number): TerminalNode;
	public WITH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SqlBaseParser.WITH);
		} else {
			return this.getToken(SqlBaseParser.WITH, i);
		}
	}
	public tableProperties(): TablePropertiesContext | undefined {
		return this.tryGetRuleContext(0, TablePropertiesContext);
	}
	public DATA(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.DATA, 0); }
	public NO(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.NO, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterCreateTableAsSelect) {
			listener.enterCreateTableAsSelect(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitCreateTableAsSelect) {
			listener.exitCreateTableAsSelect(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitCreateTableAsSelect) {
			return visitor.visitCreateTableAsSelect(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateTableContext extends StatementContext {
	public CREATE(): TerminalNode { return this.getToken(SqlBaseParser.CREATE, 0); }
	public TABLE(): TerminalNode { return this.getToken(SqlBaseParser.TABLE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public tableElement(): TableElementContext[];
	public tableElement(i: number): TableElementContext;
	public tableElement(i?: number): TableElementContext | TableElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TableElementContext);
		} else {
			return this.getRuleContext(i, TableElementContext);
		}
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.IF, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.NOT, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.EXISTS, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.WITH, 0); }
	public tableProperties(): TablePropertiesContext | undefined {
		return this.tryGetRuleContext(0, TablePropertiesContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterCreateTable) {
			listener.enterCreateTable(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitCreateTable) {
			listener.exitCreateTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitCreateTable) {
			return visitor.visitCreateTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropTableContext extends StatementContext {
	public DROP(): TerminalNode { return this.getToken(SqlBaseParser.DROP, 0); }
	public TABLE(): TerminalNode { return this.getToken(SqlBaseParser.TABLE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.IF, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.EXISTS, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterDropTable) {
			listener.enterDropTable(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitDropTable) {
			listener.exitDropTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitDropTable) {
			return visitor.visitDropTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InsertIntoContext extends StatementContext {
	public INSERT(): TerminalNode { return this.getToken(SqlBaseParser.INSERT, 0); }
	public INTO(): TerminalNode { return this.getToken(SqlBaseParser.INTO, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public columnAliases(): ColumnAliasesContext | undefined {
		return this.tryGetRuleContext(0, ColumnAliasesContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterInsertInto) {
			listener.enterInsertInto(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitInsertInto) {
			listener.exitInsertInto(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitInsertInto) {
			return visitor.visitInsertInto(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DeleteContext extends StatementContext {
	public DELETE(): TerminalNode { return this.getToken(SqlBaseParser.DELETE, 0); }
	public FROM(): TerminalNode { return this.getToken(SqlBaseParser.FROM, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public WHERE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.WHERE, 0); }
	public booleanExpression(): BooleanExpressionContext | undefined {
		return this.tryGetRuleContext(0, BooleanExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterDelete) {
			listener.enterDelete(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitDelete) {
			listener.exitDelete(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitDelete) {
			return visitor.visitDelete(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RenameTableContext extends StatementContext {
	public _from!: QualifiedNameContext;
	public _to!: QualifiedNameContext;
	public ALTER(): TerminalNode { return this.getToken(SqlBaseParser.ALTER, 0); }
	public TABLE(): TerminalNode { return this.getToken(SqlBaseParser.TABLE, 0); }
	public RENAME(): TerminalNode { return this.getToken(SqlBaseParser.RENAME, 0); }
	public TO(): TerminalNode { return this.getToken(SqlBaseParser.TO, 0); }
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterRenameTable) {
			listener.enterRenameTable(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitRenameTable) {
			listener.exitRenameTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitRenameTable) {
			return visitor.visitRenameTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RenameColumnContext extends StatementContext {
	public _tableName!: QualifiedNameContext;
	public _from!: IdentifierContext;
	public _to!: IdentifierContext;
	public ALTER(): TerminalNode { return this.getToken(SqlBaseParser.ALTER, 0); }
	public TABLE(): TerminalNode { return this.getToken(SqlBaseParser.TABLE, 0); }
	public RENAME(): TerminalNode { return this.getToken(SqlBaseParser.RENAME, 0); }
	public COLUMN(): TerminalNode { return this.getToken(SqlBaseParser.COLUMN, 0); }
	public TO(): TerminalNode { return this.getToken(SqlBaseParser.TO, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterRenameColumn) {
			listener.enterRenameColumn(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitRenameColumn) {
			listener.exitRenameColumn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitRenameColumn) {
			return visitor.visitRenameColumn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddColumnContext extends StatementContext {
	public _tableName!: QualifiedNameContext;
	public _column!: ColumnDefinitionContext;
	public ALTER(): TerminalNode { return this.getToken(SqlBaseParser.ALTER, 0); }
	public TABLE(): TerminalNode { return this.getToken(SqlBaseParser.TABLE, 0); }
	public ADD(): TerminalNode { return this.getToken(SqlBaseParser.ADD, 0); }
	public COLUMN(): TerminalNode { return this.getToken(SqlBaseParser.COLUMN, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public columnDefinition(): ColumnDefinitionContext {
		return this.getRuleContext(0, ColumnDefinitionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterAddColumn) {
			listener.enterAddColumn(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitAddColumn) {
			listener.exitAddColumn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitAddColumn) {
			return visitor.visitAddColumn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CreateViewContext extends StatementContext {
	public CREATE(): TerminalNode { return this.getToken(SqlBaseParser.CREATE, 0); }
	public VIEW(): TerminalNode { return this.getToken(SqlBaseParser.VIEW, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public AS(): TerminalNode { return this.getToken(SqlBaseParser.AS, 0); }
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public OR(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.OR, 0); }
	public REPLACE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.REPLACE, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterCreateView) {
			listener.enterCreateView(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitCreateView) {
			listener.exitCreateView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitCreateView) {
			return visitor.visitCreateView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DropViewContext extends StatementContext {
	public DROP(): TerminalNode { return this.getToken(SqlBaseParser.DROP, 0); }
	public VIEW(): TerminalNode { return this.getToken(SqlBaseParser.VIEW, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.IF, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.EXISTS, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterDropView) {
			listener.enterDropView(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitDropView) {
			listener.exitDropView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitDropView) {
			return visitor.visitDropView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CallContext extends StatementContext {
	public CALL(): TerminalNode { return this.getToken(SqlBaseParser.CALL, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public callArgument(): CallArgumentContext[];
	public callArgument(i: number): CallArgumentContext;
	public callArgument(i?: number): CallArgumentContext | CallArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CallArgumentContext);
		} else {
			return this.getRuleContext(i, CallArgumentContext);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterCall) {
			listener.enterCall(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitCall) {
			listener.exitCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitCall) {
			return visitor.visitCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GrantContext extends StatementContext {
	public _grantee!: IdentifierContext;
	public GRANT(): TerminalNode[];
	public GRANT(i: number): TerminalNode;
	public GRANT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SqlBaseParser.GRANT);
		} else {
			return this.getToken(SqlBaseParser.GRANT, i);
		}
	}
	public ON(): TerminalNode { return this.getToken(SqlBaseParser.ON, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public TO(): TerminalNode { return this.getToken(SqlBaseParser.TO, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public privilege(): PrivilegeContext[];
	public privilege(i: number): PrivilegeContext;
	public privilege(i?: number): PrivilegeContext | PrivilegeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrivilegeContext);
		} else {
			return this.getRuleContext(i, PrivilegeContext);
		}
	}
	public ALL(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.ALL, 0); }
	public PRIVILEGES(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.PRIVILEGES, 0); }
	public TABLE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.TABLE, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.WITH, 0); }
	public OPTION(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.OPTION, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterGrant) {
			listener.enterGrant(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitGrant) {
			listener.exitGrant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitGrant) {
			return visitor.visitGrant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RevokeContext extends StatementContext {
	public _grantee!: IdentifierContext;
	public REVOKE(): TerminalNode { return this.getToken(SqlBaseParser.REVOKE, 0); }
	public ON(): TerminalNode { return this.getToken(SqlBaseParser.ON, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public FROM(): TerminalNode { return this.getToken(SqlBaseParser.FROM, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public privilege(): PrivilegeContext[];
	public privilege(i: number): PrivilegeContext;
	public privilege(i?: number): PrivilegeContext | PrivilegeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrivilegeContext);
		} else {
			return this.getRuleContext(i, PrivilegeContext);
		}
	}
	public ALL(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.ALL, 0); }
	public PRIVILEGES(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.PRIVILEGES, 0); }
	public GRANT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.GRANT, 0); }
	public OPTION(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.OPTION, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.FOR, 0); }
	public TABLE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.TABLE, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterRevoke) {
			listener.enterRevoke(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitRevoke) {
			listener.exitRevoke(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitRevoke) {
			return visitor.visitRevoke(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExplainContext extends StatementContext {
	public EXPLAIN(): TerminalNode { return this.getToken(SqlBaseParser.EXPLAIN, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public ANALYZE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.ANALYZE, 0); }
	public explainOption(): ExplainOptionContext[];
	public explainOption(i: number): ExplainOptionContext;
	public explainOption(i?: number): ExplainOptionContext | ExplainOptionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExplainOptionContext);
		} else {
			return this.getRuleContext(i, ExplainOptionContext);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterExplain) {
			listener.enterExplain(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitExplain) {
			listener.exitExplain(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitExplain) {
			return visitor.visitExplain(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowCreateTableContext extends StatementContext {
	public SHOW(): TerminalNode { return this.getToken(SqlBaseParser.SHOW, 0); }
	public CREATE(): TerminalNode { return this.getToken(SqlBaseParser.CREATE, 0); }
	public TABLE(): TerminalNode { return this.getToken(SqlBaseParser.TABLE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterShowCreateTable) {
			listener.enterShowCreateTable(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitShowCreateTable) {
			listener.exitShowCreateTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitShowCreateTable) {
			return visitor.visitShowCreateTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowCreateViewContext extends StatementContext {
	public SHOW(): TerminalNode { return this.getToken(SqlBaseParser.SHOW, 0); }
	public CREATE(): TerminalNode { return this.getToken(SqlBaseParser.CREATE, 0); }
	public VIEW(): TerminalNode { return this.getToken(SqlBaseParser.VIEW, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterShowCreateView) {
			listener.enterShowCreateView(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitShowCreateView) {
			listener.exitShowCreateView(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitShowCreateView) {
			return visitor.visitShowCreateView(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowTablesContext extends StatementContext {
	public _pattern!: Token;
	public SHOW(): TerminalNode { return this.getToken(SqlBaseParser.SHOW, 0); }
	public TABLES(): TerminalNode { return this.getToken(SqlBaseParser.TABLES, 0); }
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.LIKE, 0); }
	public FROM(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.FROM, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.IN, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.STRING, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterShowTables) {
			listener.enterShowTables(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitShowTables) {
			listener.exitShowTables(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitShowTables) {
			return visitor.visitShowTables(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowSchemasContext extends StatementContext {
	public _pattern!: Token;
	public SHOW(): TerminalNode { return this.getToken(SqlBaseParser.SHOW, 0); }
	public SCHEMAS(): TerminalNode { return this.getToken(SqlBaseParser.SCHEMAS, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.LIKE, 0); }
	public FROM(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.FROM, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.IN, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.STRING, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterShowSchemas) {
			listener.enterShowSchemas(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitShowSchemas) {
			listener.exitShowSchemas(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitShowSchemas) {
			return visitor.visitShowSchemas(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowCatalogsContext extends StatementContext {
	public _pattern!: Token;
	public SHOW(): TerminalNode { return this.getToken(SqlBaseParser.SHOW, 0); }
	public CATALOGS(): TerminalNode { return this.getToken(SqlBaseParser.CATALOGS, 0); }
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.LIKE, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.STRING, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterShowCatalogs) {
			listener.enterShowCatalogs(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitShowCatalogs) {
			listener.exitShowCatalogs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitShowCatalogs) {
			return visitor.visitShowCatalogs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowColumnsContext extends StatementContext {
	public SHOW(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.SHOW, 0); }
	public COLUMNS(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.COLUMNS, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public FROM(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.FROM, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.IN, 0); }
	public DESCRIBE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.DESCRIBE, 0); }
	public DESC(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.DESC, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterShowColumns) {
			listener.enterShowColumns(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitShowColumns) {
			listener.exitShowColumns(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitShowColumns) {
			return visitor.visitShowColumns(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowFunctionsContext extends StatementContext {
	public SHOW(): TerminalNode { return this.getToken(SqlBaseParser.SHOW, 0); }
	public FUNCTIONS(): TerminalNode { return this.getToken(SqlBaseParser.FUNCTIONS, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterShowFunctions) {
			listener.enterShowFunctions(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitShowFunctions) {
			listener.exitShowFunctions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitShowFunctions) {
			return visitor.visitShowFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowSessionContext extends StatementContext {
	public SHOW(): TerminalNode { return this.getToken(SqlBaseParser.SHOW, 0); }
	public SESSION(): TerminalNode { return this.getToken(SqlBaseParser.SESSION, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterShowSession) {
			listener.enterShowSession(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitShowSession) {
			listener.exitShowSession(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitShowSession) {
			return visitor.visitShowSession(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetSessionContext extends StatementContext {
	public SET(): TerminalNode { return this.getToken(SqlBaseParser.SET, 0); }
	public SESSION(): TerminalNode { return this.getToken(SqlBaseParser.SESSION, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public EQ(): TerminalNode { return this.getToken(SqlBaseParser.EQ, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterSetSession) {
			listener.enterSetSession(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitSetSession) {
			listener.exitSetSession(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitSetSession) {
			return visitor.visitSetSession(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ResetSessionContext extends StatementContext {
	public RESET(): TerminalNode { return this.getToken(SqlBaseParser.RESET, 0); }
	public SESSION(): TerminalNode { return this.getToken(SqlBaseParser.SESSION, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterResetSession) {
			listener.enterResetSession(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitResetSession) {
			listener.exitResetSession(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitResetSession) {
			return visitor.visitResetSession(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StartTransactionContext extends StatementContext {
	public START(): TerminalNode { return this.getToken(SqlBaseParser.START, 0); }
	public TRANSACTION(): TerminalNode { return this.getToken(SqlBaseParser.TRANSACTION, 0); }
	public transactionMode(): TransactionModeContext[];
	public transactionMode(i: number): TransactionModeContext;
	public transactionMode(i?: number): TransactionModeContext | TransactionModeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TransactionModeContext);
		} else {
			return this.getRuleContext(i, TransactionModeContext);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterStartTransaction) {
			listener.enterStartTransaction(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitStartTransaction) {
			listener.exitStartTransaction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitStartTransaction) {
			return visitor.visitStartTransaction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CommitContext extends StatementContext {
	public COMMIT(): TerminalNode { return this.getToken(SqlBaseParser.COMMIT, 0); }
	public WORK(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.WORK, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterCommit) {
			listener.enterCommit(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitCommit) {
			listener.exitCommit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitCommit) {
			return visitor.visitCommit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RollbackContext extends StatementContext {
	public ROLLBACK(): TerminalNode { return this.getToken(SqlBaseParser.ROLLBACK, 0); }
	public WORK(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.WORK, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterRollback) {
			listener.enterRollback(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitRollback) {
			listener.exitRollback(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitRollback) {
			return visitor.visitRollback(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShowPartitionsContext extends StatementContext {
	public _limit!: Token;
	public SHOW(): TerminalNode { return this.getToken(SqlBaseParser.SHOW, 0); }
	public PARTITIONS(): TerminalNode { return this.getToken(SqlBaseParser.PARTITIONS, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public FROM(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.FROM, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.IN, 0); }
	public WHERE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.WHERE, 0); }
	public booleanExpression(): BooleanExpressionContext | undefined {
		return this.tryGetRuleContext(0, BooleanExpressionContext);
	}
	public ORDER(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.ORDER, 0); }
	public BY(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.BY, 0); }
	public sortItem(): SortItemContext[];
	public sortItem(i: number): SortItemContext;
	public sortItem(i?: number): SortItemContext | SortItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SortItemContext);
		} else {
			return this.getRuleContext(i, SortItemContext);
		}
	}
	public LIMIT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.LIMIT, 0); }
	public INTEGER_VALUE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.INTEGER_VALUE, 0); }
	public ALL(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.ALL, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterShowPartitions) {
			listener.enterShowPartitions(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitShowPartitions) {
			listener.exitShowPartitions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitShowPartitions) {
			return visitor.visitShowPartitions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PrepareContext extends StatementContext {
	public PREPARE(): TerminalNode { return this.getToken(SqlBaseParser.PREPARE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public FROM(): TerminalNode { return this.getToken(SqlBaseParser.FROM, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterPrepare) {
			listener.enterPrepare(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitPrepare) {
			listener.exitPrepare(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitPrepare) {
			return visitor.visitPrepare(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DeallocateContext extends StatementContext {
	public DEALLOCATE(): TerminalNode { return this.getToken(SqlBaseParser.DEALLOCATE, 0); }
	public PREPARE(): TerminalNode { return this.getToken(SqlBaseParser.PREPARE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterDeallocate) {
			listener.enterDeallocate(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitDeallocate) {
			listener.exitDeallocate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitDeallocate) {
			return visitor.visitDeallocate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExecuteContext extends StatementContext {
	public EXECUTE(): TerminalNode { return this.getToken(SqlBaseParser.EXECUTE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public USING(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.USING, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterExecute) {
			listener.enterExecute(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitExecute) {
			listener.exitExecute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitExecute) {
			return visitor.visitExecute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DescribeInputContext extends StatementContext {
	public DESCRIBE(): TerminalNode { return this.getToken(SqlBaseParser.DESCRIBE, 0); }
	public INPUT(): TerminalNode { return this.getToken(SqlBaseParser.INPUT, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterDescribeInput) {
			listener.enterDescribeInput(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitDescribeInput) {
			listener.exitDescribeInput(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitDescribeInput) {
			return visitor.visitDescribeInput(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DescribeOutputContext extends StatementContext {
	public DESCRIBE(): TerminalNode { return this.getToken(SqlBaseParser.DESCRIBE, 0); }
	public OUTPUT(): TerminalNode { return this.getToken(SqlBaseParser.OUTPUT, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterDescribeOutput) {
			listener.enterDescribeOutput(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitDescribeOutput) {
			listener.exitDescribeOutput(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitDescribeOutput) {
			return visitor.visitDescribeOutput(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryContext extends ParserRuleContext {
	public queryNoWith(): QueryNoWithContext {
		return this.getRuleContext(0, QueryNoWithContext);
	}
	public presto_with(): Presto_withContext | undefined {
		return this.tryGetRuleContext(0, Presto_withContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_query; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterQuery) {
			listener.enterQuery(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitQuery) {
			listener.exitQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitQuery) {
			return visitor.visitQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Presto_withContext extends ParserRuleContext {
	public WITH(): TerminalNode { return this.getToken(SqlBaseParser.WITH, 0); }
	public namedQuery(): NamedQueryContext[];
	public namedQuery(i: number): NamedQueryContext;
	public namedQuery(i?: number): NamedQueryContext | NamedQueryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NamedQueryContext);
		} else {
			return this.getRuleContext(i, NamedQueryContext);
		}
	}
	public RECURSIVE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.RECURSIVE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_presto_with; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterPresto_with) {
			listener.enterPresto_with(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitPresto_with) {
			listener.exitPresto_with(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitPresto_with) {
			return visitor.visitPresto_with(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableElementContext extends ParserRuleContext {
	public columnDefinition(): ColumnDefinitionContext | undefined {
		return this.tryGetRuleContext(0, ColumnDefinitionContext);
	}
	public likeClause(): LikeClauseContext | undefined {
		return this.tryGetRuleContext(0, LikeClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_tableElement; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterTableElement) {
			listener.enterTableElement(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitTableElement) {
			listener.exitTableElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitTableElement) {
			return visitor.visitTableElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_columnDefinition; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterColumnDefinition) {
			listener.enterColumnDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitColumnDefinition) {
			listener.exitColumnDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitColumnDefinition) {
			return visitor.visitColumnDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LikeClauseContext extends ParserRuleContext {
	public _optionType!: Token;
	public LIKE(): TerminalNode { return this.getToken(SqlBaseParser.LIKE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public PROPERTIES(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.PROPERTIES, 0); }
	public INCLUDING(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.INCLUDING, 0); }
	public EXCLUDING(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.EXCLUDING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_likeClause; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterLikeClause) {
			listener.enterLikeClause(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitLikeClause) {
			listener.exitLikeClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitLikeClause) {
			return visitor.visitLikeClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TablePropertiesContext extends ParserRuleContext {
	public tableProperty(): TablePropertyContext[];
	public tableProperty(i: number): TablePropertyContext;
	public tableProperty(i?: number): TablePropertyContext | TablePropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TablePropertyContext);
		} else {
			return this.getRuleContext(i, TablePropertyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_tableProperties; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterTableProperties) {
			listener.enterTableProperties(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitTableProperties) {
			listener.exitTableProperties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitTableProperties) {
			return visitor.visitTableProperties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TablePropertyContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public EQ(): TerminalNode { return this.getToken(SqlBaseParser.EQ, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_tableProperty; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterTableProperty) {
			listener.enterTableProperty(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitTableProperty) {
			listener.exitTableProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitTableProperty) {
			return visitor.visitTableProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryNoWithContext extends ParserRuleContext {
	public _limit!: Token;
	public queryTerm(): QueryTermContext {
		return this.getRuleContext(0, QueryTermContext);
	}
	public ORDER(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.ORDER, 0); }
	public BY(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.BY, 0); }
	public sortItem(): SortItemContext[];
	public sortItem(i: number): SortItemContext;
	public sortItem(i?: number): SortItemContext | SortItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SortItemContext);
		} else {
			return this.getRuleContext(i, SortItemContext);
		}
	}
	public LIMIT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.LIMIT, 0); }
	public INTEGER_VALUE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.INTEGER_VALUE, 0); }
	public ALL(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.ALL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_queryNoWith; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterQueryNoWith) {
			listener.enterQueryNoWith(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitQueryNoWith) {
			listener.exitQueryNoWith(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitQueryNoWith) {
			return visitor.visitQueryNoWith(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryTermContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_queryTerm; }
	public copyFrom(ctx: QueryTermContext): void {
		super.copyFrom(ctx);
	}
}
export class QueryTermDefaultContext extends QueryTermContext {
	public queryPrimary(): QueryPrimaryContext {
		return this.getRuleContext(0, QueryPrimaryContext);
	}
	constructor(ctx: QueryTermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterQueryTermDefault) {
			listener.enterQueryTermDefault(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitQueryTermDefault) {
			listener.exitQueryTermDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitQueryTermDefault) {
			return visitor.visitQueryTermDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetOperationContext extends QueryTermContext {
	public _left!: QueryTermContext;
	public _operator!: Token;
	public _right!: QueryTermContext;
	public queryTerm(): QueryTermContext[];
	public queryTerm(i: number): QueryTermContext;
	public queryTerm(i?: number): QueryTermContext | QueryTermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QueryTermContext);
		} else {
			return this.getRuleContext(i, QueryTermContext);
		}
	}
	public INTERSECT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.INTERSECT, 0); }
	public setQuantifier(): SetQuantifierContext | undefined {
		return this.tryGetRuleContext(0, SetQuantifierContext);
	}
	public UNION(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.UNION, 0); }
	public EXCEPT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.EXCEPT, 0); }
	constructor(ctx: QueryTermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterSetOperation) {
			listener.enterSetOperation(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitSetOperation) {
			listener.exitSetOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitSetOperation) {
			return visitor.visitSetOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryPrimaryContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_queryPrimary; }
	public copyFrom(ctx: QueryPrimaryContext): void {
		super.copyFrom(ctx);
	}
}
export class QueryPrimaryDefaultContext extends QueryPrimaryContext {
	public querySpecification(): QuerySpecificationContext {
		return this.getRuleContext(0, QuerySpecificationContext);
	}
	constructor(ctx: QueryPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterQueryPrimaryDefault) {
			listener.enterQueryPrimaryDefault(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitQueryPrimaryDefault) {
			listener.exitQueryPrimaryDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitQueryPrimaryDefault) {
			return visitor.visitQueryPrimaryDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TableContext extends QueryPrimaryContext {
	public TABLE(): TerminalNode { return this.getToken(SqlBaseParser.TABLE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(ctx: QueryPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterTable) {
			listener.enterTable(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitTable) {
			listener.exitTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitTable) {
			return visitor.visitTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InlineTableContext extends QueryPrimaryContext {
	public VALUES(): TerminalNode { return this.getToken(SqlBaseParser.VALUES, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: QueryPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterInlineTable) {
			listener.enterInlineTable(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitInlineTable) {
			listener.exitInlineTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitInlineTable) {
			return visitor.visitInlineTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubqueryContext extends QueryPrimaryContext {
	public queryNoWith(): QueryNoWithContext {
		return this.getRuleContext(0, QueryNoWithContext);
	}
	constructor(ctx: QueryPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterSubquery) {
			listener.enterSubquery(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitSubquery) {
			listener.exitSubquery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitSubquery) {
			return visitor.visitSubquery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SortItemContext extends ParserRuleContext {
	public _ordering!: Token;
	public _nullOrdering!: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public NULLS(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.NULLS, 0); }
	public ASC(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.ASC, 0); }
	public DESC(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.DESC, 0); }
	public FIRST(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.FIRST, 0); }
	public LAST(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.LAST, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_sortItem; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterSortItem) {
			listener.enterSortItem(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitSortItem) {
			listener.exitSortItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitSortItem) {
			return visitor.visitSortItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuerySpecificationContext extends ParserRuleContext {
	public _where!: BooleanExpressionContext;
	public _having!: BooleanExpressionContext;
	public SELECT(): TerminalNode { return this.getToken(SqlBaseParser.SELECT, 0); }
	public selectItem(): SelectItemContext[];
	public selectItem(i: number): SelectItemContext;
	public selectItem(i?: number): SelectItemContext | SelectItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SelectItemContext);
		} else {
			return this.getRuleContext(i, SelectItemContext);
		}
	}
	public setQuantifier(): SetQuantifierContext | undefined {
		return this.tryGetRuleContext(0, SetQuantifierContext);
	}
	public FROM(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.FROM, 0); }
	public relation(): RelationContext[];
	public relation(i: number): RelationContext;
	public relation(i?: number): RelationContext | RelationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RelationContext);
		} else {
			return this.getRuleContext(i, RelationContext);
		}
	}
	public WHERE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.WHERE, 0); }
	public GROUP(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.GROUP, 0); }
	public BY(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.BY, 0); }
	public groupBy(): GroupByContext | undefined {
		return this.tryGetRuleContext(0, GroupByContext);
	}
	public HAVING(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.HAVING, 0); }
	public booleanExpression(): BooleanExpressionContext[];
	public booleanExpression(i: number): BooleanExpressionContext;
	public booleanExpression(i?: number): BooleanExpressionContext | BooleanExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BooleanExpressionContext);
		} else {
			return this.getRuleContext(i, BooleanExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_querySpecification; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterQuerySpecification) {
			listener.enterQuerySpecification(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitQuerySpecification) {
			listener.exitQuerySpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitQuerySpecification) {
			return visitor.visitQuerySpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupByContext extends ParserRuleContext {
	public groupingElement(): GroupingElementContext[];
	public groupingElement(i: number): GroupingElementContext;
	public groupingElement(i?: number): GroupingElementContext | GroupingElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GroupingElementContext);
		} else {
			return this.getRuleContext(i, GroupingElementContext);
		}
	}
	public setQuantifier(): SetQuantifierContext | undefined {
		return this.tryGetRuleContext(0, SetQuantifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_groupBy; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterGroupBy) {
			listener.enterGroupBy(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitGroupBy) {
			listener.exitGroupBy(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitGroupBy) {
			return visitor.visitGroupBy(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupingElementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_groupingElement; }
	public copyFrom(ctx: GroupingElementContext): void {
		super.copyFrom(ctx);
	}
}
export class SingleGroupingSetContext extends GroupingElementContext {
	public groupingExpressions(): GroupingExpressionsContext {
		return this.getRuleContext(0, GroupingExpressionsContext);
	}
	constructor(ctx: GroupingElementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterSingleGroupingSet) {
			listener.enterSingleGroupingSet(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitSingleGroupingSet) {
			listener.exitSingleGroupingSet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitSingleGroupingSet) {
			return visitor.visitSingleGroupingSet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RollupContext extends GroupingElementContext {
	public ROLLUP(): TerminalNode { return this.getToken(SqlBaseParser.ROLLUP, 0); }
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
		}
	}
	constructor(ctx: GroupingElementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterRollup) {
			listener.enterRollup(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitRollup) {
			listener.exitRollup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitRollup) {
			return visitor.visitRollup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CubeContext extends GroupingElementContext {
	public CUBE(): TerminalNode { return this.getToken(SqlBaseParser.CUBE, 0); }
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
		}
	}
	constructor(ctx: GroupingElementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterCube) {
			listener.enterCube(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitCube) {
			listener.exitCube(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitCube) {
			return visitor.visitCube(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultipleGroupingSetsContext extends GroupingElementContext {
	public GROUPING(): TerminalNode { return this.getToken(SqlBaseParser.GROUPING, 0); }
	public SETS(): TerminalNode { return this.getToken(SqlBaseParser.SETS, 0); }
	public groupingSet(): GroupingSetContext[];
	public groupingSet(i: number): GroupingSetContext;
	public groupingSet(i?: number): GroupingSetContext | GroupingSetContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GroupingSetContext);
		} else {
			return this.getRuleContext(i, GroupingSetContext);
		}
	}
	constructor(ctx: GroupingElementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterMultipleGroupingSets) {
			listener.enterMultipleGroupingSets(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitMultipleGroupingSets) {
			listener.exitMultipleGroupingSets(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitMultipleGroupingSets) {
			return visitor.visitMultipleGroupingSets(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupingExpressionsContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_groupingExpressions; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterGroupingExpressions) {
			listener.enterGroupingExpressions(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitGroupingExpressions) {
			listener.exitGroupingExpressions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitGroupingExpressions) {
			return visitor.visitGroupingExpressions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupingSetContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_groupingSet; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterGroupingSet) {
			listener.enterGroupingSet(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitGroupingSet) {
			listener.exitGroupingSet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitGroupingSet) {
			return visitor.visitGroupingSet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedQueryContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	public AS(): TerminalNode { return this.getToken(SqlBaseParser.AS, 0); }
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public columnAliases(): ColumnAliasesContext | undefined {
		return this.tryGetRuleContext(0, ColumnAliasesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_namedQuery; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterNamedQuery) {
			listener.enterNamedQuery(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitNamedQuery) {
			listener.exitNamedQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitNamedQuery) {
			return visitor.visitNamedQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetQuantifierContext extends ParserRuleContext {
	public DISTINCT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.DISTINCT, 0); }
	public ALL(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.ALL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_setQuantifier; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterSetQuantifier) {
			listener.enterSetQuantifier(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitSetQuantifier) {
			listener.exitSetQuantifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitSetQuantifier) {
			return visitor.visitSetQuantifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectItemContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_selectItem; }
	public copyFrom(ctx: SelectItemContext): void {
		super.copyFrom(ctx);
	}
}
export class SelectSingleContext extends SelectItemContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.AS, 0); }
	constructor(ctx: SelectItemContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterSelectSingle) {
			listener.enterSelectSingle(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitSelectSingle) {
			listener.exitSelectSingle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitSelectSingle) {
			return visitor.visitSelectSingle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SelectAllContext extends SelectItemContext {
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	public ASTERISK(): TerminalNode { return this.getToken(SqlBaseParser.ASTERISK, 0); }
	constructor(ctx: SelectItemContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterSelectAll) {
			listener.enterSelectAll(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitSelectAll) {
			listener.exitSelectAll(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitSelectAll) {
			return visitor.visitSelectAll(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_relation; }
	public copyFrom(ctx: RelationContext): void {
		super.copyFrom(ctx);
	}
}
export class JoinRelationContext extends RelationContext {
	public _left!: RelationContext;
	public _right!: SampledRelationContext;
	public _rightRelation!: RelationContext;
	public relation(): RelationContext[];
	public relation(i: number): RelationContext;
	public relation(i?: number): RelationContext | RelationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RelationContext);
		} else {
			return this.getRuleContext(i, RelationContext);
		}
	}
	public CROSS(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.CROSS, 0); }
	public JOIN(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.JOIN, 0); }
	public joinType(): JoinTypeContext | undefined {
		return this.tryGetRuleContext(0, JoinTypeContext);
	}
	public joinCriteria(): JoinCriteriaContext | undefined {
		return this.tryGetRuleContext(0, JoinCriteriaContext);
	}
	public NATURAL(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.NATURAL, 0); }
	public sampledRelation(): SampledRelationContext | undefined {
		return this.tryGetRuleContext(0, SampledRelationContext);
	}
	constructor(ctx: RelationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterJoinRelation) {
			listener.enterJoinRelation(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitJoinRelation) {
			listener.exitJoinRelation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitJoinRelation) {
			return visitor.visitJoinRelation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RelationDefaultContext extends RelationContext {
	public sampledRelation(): SampledRelationContext {
		return this.getRuleContext(0, SampledRelationContext);
	}
	constructor(ctx: RelationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterRelationDefault) {
			listener.enterRelationDefault(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitRelationDefault) {
			listener.exitRelationDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitRelationDefault) {
			return visitor.visitRelationDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinTypeContext extends ParserRuleContext {
	public INNER(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.INNER, 0); }
	public LEFT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.LEFT, 0); }
	public OUTER(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.OUTER, 0); }
	public RIGHT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.RIGHT, 0); }
	public FULL(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.FULL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_joinType; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterJoinType) {
			listener.enterJoinType(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitJoinType) {
			listener.exitJoinType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitJoinType) {
			return visitor.visitJoinType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinCriteriaContext extends ParserRuleContext {
	public ON(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.ON, 0); }
	public booleanExpression(): BooleanExpressionContext | undefined {
		return this.tryGetRuleContext(0, BooleanExpressionContext);
	}
	public USING(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.USING, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_joinCriteria; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterJoinCriteria) {
			listener.enterJoinCriteria(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitJoinCriteria) {
			listener.exitJoinCriteria(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitJoinCriteria) {
			return visitor.visitJoinCriteria(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SampledRelationContext extends ParserRuleContext {
	public _percentage!: ExpressionContext;
	public aliasedRelation(): AliasedRelationContext {
		return this.getRuleContext(0, AliasedRelationContext);
	}
	public TABLESAMPLE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.TABLESAMPLE, 0); }
	public sampleType(): SampleTypeContext | undefined {
		return this.tryGetRuleContext(0, SampleTypeContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_sampledRelation; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterSampledRelation) {
			listener.enterSampledRelation(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitSampledRelation) {
			listener.exitSampledRelation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitSampledRelation) {
			return visitor.visitSampledRelation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SampleTypeContext extends ParserRuleContext {
	public BERNOULLI(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.BERNOULLI, 0); }
	public SYSTEM(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.SYSTEM, 0); }
	public POISSONIZED(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.POISSONIZED, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_sampleType; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterSampleType) {
			listener.enterSampleType(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitSampleType) {
			listener.exitSampleType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitSampleType) {
			return visitor.visitSampleType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AliasedRelationContext extends ParserRuleContext {
	public _relationP!: RelationPrimaryContext;
	public _as!: Token;
	public _alias!: IdentifierContext;
	public relationPrimary(): RelationPrimaryContext {
		return this.getRuleContext(0, RelationPrimaryContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public columnAliases(): ColumnAliasesContext | undefined {
		return this.tryGetRuleContext(0, ColumnAliasesContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_aliasedRelation; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterAliasedRelation) {
			listener.enterAliasedRelation(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitAliasedRelation) {
			listener.exitAliasedRelation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitAliasedRelation) {
			return visitor.visitAliasedRelation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnAliasesContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_columnAliases; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterColumnAliases) {
			listener.enterColumnAliases(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitColumnAliases) {
			listener.exitColumnAliases(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitColumnAliases) {
			return visitor.visitColumnAliases(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationPrimaryContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_relationPrimary; }
	public copyFrom(ctx: RelationPrimaryContext): void {
		super.copyFrom(ctx);
	}
}
export class TableNameContext extends RelationPrimaryContext {
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(ctx: RelationPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterTableName) {
			listener.enterTableName(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitTableName) {
			listener.exitTableName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitTableName) {
			return visitor.visitTableName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubqueryRelationContext extends RelationPrimaryContext {
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	constructor(ctx: RelationPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterSubqueryRelation) {
			listener.enterSubqueryRelation(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitSubqueryRelation) {
			listener.exitSubqueryRelation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitSubqueryRelation) {
			return visitor.visitSubqueryRelation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnnestContext extends RelationPrimaryContext {
	public UNNEST(): TerminalNode { return this.getToken(SqlBaseParser.UNNEST, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public WITH(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.WITH, 0); }
	public ORDINALITY(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.ORDINALITY, 0); }
	constructor(ctx: RelationPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterUnnest) {
			listener.enterUnnest(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitUnnest) {
			listener.exitUnnest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitUnnest) {
			return visitor.visitUnnest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesizedRelationContext extends RelationPrimaryContext {
	public relation(): RelationContext {
		return this.getRuleContext(0, RelationContext);
	}
	constructor(ctx: RelationPrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterParenthesizedRelation) {
			listener.enterParenthesizedRelation(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitParenthesizedRelation) {
			listener.exitParenthesizedRelation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitParenthesizedRelation) {
			return visitor.visitParenthesizedRelation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_expression; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_booleanExpression; }
	public copyFrom(ctx: BooleanExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class BooleanDefaultContext extends BooleanExpressionContext {
	public predicated(): PredicatedContext {
		return this.getRuleContext(0, PredicatedContext);
	}
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterBooleanDefault) {
			listener.enterBooleanDefault(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitBooleanDefault) {
			listener.exitBooleanDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitBooleanDefault) {
			return visitor.visitBooleanDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalNotContext extends BooleanExpressionContext {
	public NOT(): TerminalNode { return this.getToken(SqlBaseParser.NOT, 0); }
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterLogicalNot) {
			listener.enterLogicalNot(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitLogicalNot) {
			listener.exitLogicalNot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitLogicalNot) {
			return visitor.visitLogicalNot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalBinaryContext extends BooleanExpressionContext {
	public _left!: BooleanExpressionContext;
	public _operator!: Token;
	public _right!: BooleanExpressionContext;
	public booleanExpression(): BooleanExpressionContext[];
	public booleanExpression(i: number): BooleanExpressionContext;
	public booleanExpression(i?: number): BooleanExpressionContext | BooleanExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BooleanExpressionContext);
		} else {
			return this.getRuleContext(i, BooleanExpressionContext);
		}
	}
	public AND(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.OR, 0); }
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterLogicalBinary) {
			listener.enterLogicalBinary(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitLogicalBinary) {
			listener.exitLogicalBinary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitLogicalBinary) {
			return visitor.visitLogicalBinary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PredicatedContext extends ParserRuleContext {
	public _valueExpression!: ValueExpressionContext;
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	public predicate(): PredicateContext | undefined {
		return this.tryGetRuleContext(0, PredicateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_predicated; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterPredicated) {
			listener.enterPredicated(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitPredicated) {
			listener.exitPredicated(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitPredicated) {
			return visitor.visitPredicated(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PredicateContext extends ParserRuleContext {
	public value: ParserRuleContext;
	constructor(parent: ParserRuleContext | undefined, invokingState: number, value: ParserRuleContext) {
		super(parent, invokingState);
		this.value = value;
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_predicate; }
	public copyFrom(ctx: PredicateContext): void {
		super.copyFrom(ctx);
		this.value = ctx.value;
	}
}
export class ComparisonContext extends PredicateContext {
	public _right!: ValueExpressionContext;
	public comparisonOperator(): ComparisonOperatorContext {
		return this.getRuleContext(0, ComparisonOperatorContext);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState, ctx.value);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterComparison) {
			listener.enterComparison(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitComparison) {
			listener.exitComparison(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitComparison) {
			return visitor.visitComparison(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class QuantifiedComparisonContext extends PredicateContext {
	public comparisonOperator(): ComparisonOperatorContext {
		return this.getRuleContext(0, ComparisonOperatorContext);
	}
	public comparisonQuantifier(): ComparisonQuantifierContext {
		return this.getRuleContext(0, ComparisonQuantifierContext);
	}
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState, ctx.value);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterQuantifiedComparison) {
			listener.enterQuantifiedComparison(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitQuantifiedComparison) {
			listener.exitQuantifiedComparison(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitQuantifiedComparison) {
			return visitor.visitQuantifiedComparison(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BetweenContext extends PredicateContext {
	public _lower!: ValueExpressionContext;
	public _upper!: ValueExpressionContext;
	public BETWEEN(): TerminalNode { return this.getToken(SqlBaseParser.BETWEEN, 0); }
	public AND(): TerminalNode { return this.getToken(SqlBaseParser.AND, 0); }
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.NOT, 0); }
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState, ctx.value);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterBetween) {
			listener.enterBetween(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitBetween) {
			listener.exitBetween(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitBetween) {
			return visitor.visitBetween(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InListContext extends PredicateContext {
	public IN(): TerminalNode { return this.getToken(SqlBaseParser.IN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.NOT, 0); }
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState, ctx.value);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterInList) {
			listener.enterInList(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitInList) {
			listener.exitInList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitInList) {
			return visitor.visitInList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InSubqueryContext extends PredicateContext {
	public IN(): TerminalNode { return this.getToken(SqlBaseParser.IN, 0); }
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.NOT, 0); }
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState, ctx.value);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterInSubquery) {
			listener.enterInSubquery(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitInSubquery) {
			listener.exitInSubquery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitInSubquery) {
			return visitor.visitInSubquery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LikeContext extends PredicateContext {
	public _pattern!: ValueExpressionContext;
	public _escape!: ValueExpressionContext;
	public LIKE(): TerminalNode { return this.getToken(SqlBaseParser.LIKE, 0); }
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.NOT, 0); }
	public ESCAPE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.ESCAPE, 0); }
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState, ctx.value);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterLike) {
			listener.enterLike(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitLike) {
			listener.exitLike(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitLike) {
			return visitor.visitLike(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NullPredicateContext extends PredicateContext {
	public IS(): TerminalNode { return this.getToken(SqlBaseParser.IS, 0); }
	public NULL(): TerminalNode { return this.getToken(SqlBaseParser.NULL, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.NOT, 0); }
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState, ctx.value);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterNullPredicate) {
			listener.enterNullPredicate(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitNullPredicate) {
			listener.exitNullPredicate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitNullPredicate) {
			return visitor.visitNullPredicate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DistinctFromContext extends PredicateContext {
	public _right!: ValueExpressionContext;
	public IS(): TerminalNode { return this.getToken(SqlBaseParser.IS, 0); }
	public DISTINCT(): TerminalNode { return this.getToken(SqlBaseParser.DISTINCT, 0); }
	public FROM(): TerminalNode { return this.getToken(SqlBaseParser.FROM, 0); }
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.NOT, 0); }
	constructor(ctx: PredicateContext) {
		super(ctx.parent, ctx.invokingState, ctx.value);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterDistinctFrom) {
			listener.enterDistinctFrom(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitDistinctFrom) {
			listener.exitDistinctFrom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitDistinctFrom) {
			return visitor.visitDistinctFrom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_valueExpression; }
	public copyFrom(ctx: ValueExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ValueExpressionDefaultContext extends ValueExpressionContext {
	public primaryExpression(): PrimaryExpressionContext {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	constructor(ctx: ValueExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterValueExpressionDefault) {
			listener.enterValueExpressionDefault(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitValueExpressionDefault) {
			listener.exitValueExpressionDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitValueExpressionDefault) {
			return visitor.visitValueExpressionDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AtTimeZoneContext extends ValueExpressionContext {
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	public AT(): TerminalNode { return this.getToken(SqlBaseParser.AT, 0); }
	public timeZoneSpecifier(): TimeZoneSpecifierContext {
		return this.getRuleContext(0, TimeZoneSpecifierContext);
	}
	constructor(ctx: ValueExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterAtTimeZone) {
			listener.enterAtTimeZone(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitAtTimeZone) {
			listener.exitAtTimeZone(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitAtTimeZone) {
			return visitor.visitAtTimeZone(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArithmeticUnaryContext extends ValueExpressionContext {
	public _operator!: Token;
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.MINUS, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.PLUS, 0); }
	constructor(ctx: ValueExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterArithmeticUnary) {
			listener.enterArithmeticUnary(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitArithmeticUnary) {
			listener.exitArithmeticUnary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitArithmeticUnary) {
			return visitor.visitArithmeticUnary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArithmeticBinaryContext extends ValueExpressionContext {
	public _left!: ValueExpressionContext;
	public _operator!: Token;
	public _right!: ValueExpressionContext;
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	public ASTERISK(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.ASTERISK, 0); }
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.SLASH, 0); }
	public PERCENT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.PERCENT, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.MINUS, 0); }
	constructor(ctx: ValueExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterArithmeticBinary) {
			listener.enterArithmeticBinary(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitArithmeticBinary) {
			listener.exitArithmeticBinary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitArithmeticBinary) {
			return visitor.visitArithmeticBinary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConcatenationContext extends ValueExpressionContext {
	public _left!: ValueExpressionContext;
	public _right!: ValueExpressionContext;
	public CONCAT(): TerminalNode { return this.getToken(SqlBaseParser.CONCAT, 0); }
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	constructor(ctx: ValueExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterConcatenation) {
			listener.enterConcatenation(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitConcatenation) {
			listener.exitConcatenation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitConcatenation) {
			return visitor.visitConcatenation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_primaryExpression; }
	public copyFrom(ctx: PrimaryExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class NullLiteralContext extends PrimaryExpressionContext {
	public NULL(): TerminalNode { return this.getToken(SqlBaseParser.NULL, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterNullLiteral) {
			listener.enterNullLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitNullLiteral) {
			listener.exitNullLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitNullLiteral) {
			return visitor.visitNullLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntervalLiteralContext extends PrimaryExpressionContext {
	public interval(): IntervalContext {
		return this.getRuleContext(0, IntervalContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterIntervalLiteral) {
			listener.enterIntervalLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitIntervalLiteral) {
			listener.exitIntervalLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitIntervalLiteral) {
			return visitor.visitIntervalLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeConstructorContext extends PrimaryExpressionContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public STRING(): TerminalNode { return this.getToken(SqlBaseParser.STRING, 0); }
	public DOUBLE_PRECISION(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.DOUBLE_PRECISION, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterTypeConstructor) {
			listener.enterTypeConstructor(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitTypeConstructor) {
			listener.exitTypeConstructor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitTypeConstructor) {
			return visitor.visitTypeConstructor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumericLiteralContext extends PrimaryExpressionContext {
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterNumericLiteral) {
			listener.enterNumericLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitNumericLiteral) {
			listener.exitNumericLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitNumericLiteral) {
			return visitor.visitNumericLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanLiteralContext extends PrimaryExpressionContext {
	public booleanValue(): BooleanValueContext {
		return this.getRuleContext(0, BooleanValueContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterBooleanLiteral) {
			listener.enterBooleanLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitBooleanLiteral) {
			listener.exitBooleanLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitBooleanLiteral) {
			return visitor.visitBooleanLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringLiteralContext extends PrimaryExpressionContext {
	public STRING(): TerminalNode { return this.getToken(SqlBaseParser.STRING, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterStringLiteral) {
			listener.enterStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitStringLiteral) {
			listener.exitStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitStringLiteral) {
			return visitor.visitStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BinaryLiteralContext extends PrimaryExpressionContext {
	public BINARY_LITERAL(): TerminalNode { return this.getToken(SqlBaseParser.BINARY_LITERAL, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterBinaryLiteral) {
			listener.enterBinaryLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitBinaryLiteral) {
			listener.exitBinaryLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitBinaryLiteral) {
			return visitor.visitBinaryLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParameterContext extends PrimaryExpressionContext {
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterParameter) {
			listener.enterParameter(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitParameter) {
			listener.exitParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitParameter) {
			return visitor.visitParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PositionContext extends PrimaryExpressionContext {
	public POSITION(): TerminalNode { return this.getToken(SqlBaseParser.POSITION, 0); }
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	public IN(): TerminalNode { return this.getToken(SqlBaseParser.IN, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterPosition) {
			listener.enterPosition(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitPosition) {
			listener.exitPosition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitPosition) {
			return visitor.visitPosition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ImplicitRowConstructorContext extends PrimaryExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterImplicitRowConstructor) {
			listener.enterImplicitRowConstructor(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitImplicitRowConstructor) {
			listener.exitImplicitRowConstructor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitImplicitRowConstructor) {
			return visitor.visitImplicitRowConstructor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RowConstructorContext extends PrimaryExpressionContext {
	public ROW(): TerminalNode { return this.getToken(SqlBaseParser.ROW, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterRowConstructor) {
			listener.enterRowConstructor(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitRowConstructor) {
			listener.exitRowConstructor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitRowConstructor) {
			return visitor.visitRowConstructor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionCallContext extends PrimaryExpressionContext {
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public ASTERISK(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.ASTERISK, 0); }
	public filter(): FilterContext | undefined {
		return this.tryGetRuleContext(0, FilterContext);
	}
	public over(): OverContext | undefined {
		return this.tryGetRuleContext(0, OverContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public setQuantifier(): SetQuantifierContext | undefined {
		return this.tryGetRuleContext(0, SetQuantifierContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LambdaContext extends PrimaryExpressionContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterLambda) {
			listener.enterLambda(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitLambda) {
			listener.exitLambda(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitLambda) {
			return visitor.visitLambda(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubqueryExpressionContext extends PrimaryExpressionContext {
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterSubqueryExpression) {
			listener.enterSubqueryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitSubqueryExpression) {
			listener.exitSubqueryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitSubqueryExpression) {
			return visitor.visitSubqueryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExistsContext extends PrimaryExpressionContext {
	public EXISTS(): TerminalNode { return this.getToken(SqlBaseParser.EXISTS, 0); }
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterExists) {
			listener.enterExists(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitExists) {
			listener.exitExists(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitExists) {
			return visitor.visitExists(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SimpleCaseContext extends PrimaryExpressionContext {
	public _elseExpression!: ExpressionContext;
	public CASE(): TerminalNode { return this.getToken(SqlBaseParser.CASE, 0); }
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	public END(): TerminalNode { return this.getToken(SqlBaseParser.END, 0); }
	public whenClause(): WhenClauseContext[];
	public whenClause(i: number): WhenClauseContext;
	public whenClause(i?: number): WhenClauseContext | WhenClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WhenClauseContext);
		} else {
			return this.getRuleContext(i, WhenClauseContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.ELSE, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterSimpleCase) {
			listener.enterSimpleCase(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitSimpleCase) {
			listener.exitSimpleCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitSimpleCase) {
			return visitor.visitSimpleCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SearchedCaseContext extends PrimaryExpressionContext {
	public _elseExpression!: ExpressionContext;
	public CASE(): TerminalNode { return this.getToken(SqlBaseParser.CASE, 0); }
	public END(): TerminalNode { return this.getToken(SqlBaseParser.END, 0); }
	public whenClause(): WhenClauseContext[];
	public whenClause(i: number): WhenClauseContext;
	public whenClause(i?: number): WhenClauseContext | WhenClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WhenClauseContext);
		} else {
			return this.getRuleContext(i, WhenClauseContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.ELSE, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterSearchedCase) {
			listener.enterSearchedCase(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitSearchedCase) {
			listener.exitSearchedCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitSearchedCase) {
			return visitor.visitSearchedCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CastContext extends PrimaryExpressionContext {
	public CAST(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.CAST, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public AS(): TerminalNode { return this.getToken(SqlBaseParser.AS, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public TRY_CAST(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.TRY_CAST, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterCast) {
			listener.enterCast(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitCast) {
			listener.exitCast(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitCast) {
			return visitor.visitCast(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrayConstructorContext extends PrimaryExpressionContext {
	public ARRAY(): TerminalNode { return this.getToken(SqlBaseParser.ARRAY, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterArrayConstructor) {
			listener.enterArrayConstructor(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitArrayConstructor) {
			listener.exitArrayConstructor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitArrayConstructor) {
			return visitor.visitArrayConstructor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubscriptContext extends PrimaryExpressionContext {
	public _value!: PrimaryExpressionContext;
	public _index!: ValueExpressionContext;
	public primaryExpression(): PrimaryExpressionContext {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterSubscript) {
			listener.enterSubscript(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitSubscript) {
			listener.exitSubscript(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitSubscript) {
			return visitor.visitSubscript(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ColumnReferenceContext extends PrimaryExpressionContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterColumnReference) {
			listener.enterColumnReference(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitColumnReference) {
			listener.exitColumnReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitColumnReference) {
			return visitor.visitColumnReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DereferenceContext extends PrimaryExpressionContext {
	public _base!: PrimaryExpressionContext;
	public _fieldName!: IdentifierContext;
	public primaryExpression(): PrimaryExpressionContext {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterDereference) {
			listener.enterDereference(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitDereference) {
			listener.exitDereference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitDereference) {
			return visitor.visitDereference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SpecialDateTimeFunctionContext extends PrimaryExpressionContext {
	public _name!: Token;
	public _precision!: Token;
	public CURRENT_DATE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.CURRENT_DATE, 0); }
	public CURRENT_TIME(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.CURRENT_TIME, 0); }
	public INTEGER_VALUE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.INTEGER_VALUE, 0); }
	public CURRENT_TIMESTAMP(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.CURRENT_TIMESTAMP, 0); }
	public LOCALTIME(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.LOCALTIME, 0); }
	public LOCALTIMESTAMP(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.LOCALTIMESTAMP, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterSpecialDateTimeFunction) {
			listener.enterSpecialDateTimeFunction(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitSpecialDateTimeFunction) {
			listener.exitSpecialDateTimeFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitSpecialDateTimeFunction) {
			return visitor.visitSpecialDateTimeFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubstringContext extends PrimaryExpressionContext {
	public SUBSTRING(): TerminalNode { return this.getToken(SqlBaseParser.SUBSTRING, 0); }
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	public FROM(): TerminalNode { return this.getToken(SqlBaseParser.FROM, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.FOR, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterSubstring) {
			listener.enterSubstring(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitSubstring) {
			listener.exitSubstring(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitSubstring) {
			return visitor.visitSubstring(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NormalizeContext extends PrimaryExpressionContext {
	public NORMALIZE(): TerminalNode { return this.getToken(SqlBaseParser.NORMALIZE, 0); }
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	public normalForm(): NormalFormContext | undefined {
		return this.tryGetRuleContext(0, NormalFormContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterNormalize) {
			listener.enterNormalize(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitNormalize) {
			listener.exitNormalize(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitNormalize) {
			return visitor.visitNormalize(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExtractContext extends PrimaryExpressionContext {
	public EXTRACT(): TerminalNode { return this.getToken(SqlBaseParser.EXTRACT, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public FROM(): TerminalNode { return this.getToken(SqlBaseParser.FROM, 0); }
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterExtract) {
			listener.enterExtract(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitExtract) {
			listener.exitExtract(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitExtract) {
			return visitor.visitExtract(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeZoneSpecifierContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_timeZoneSpecifier; }
	public copyFrom(ctx: TimeZoneSpecifierContext): void {
		super.copyFrom(ctx);
	}
}
export class TimeZoneIntervalContext extends TimeZoneSpecifierContext {
	public TIME(): TerminalNode { return this.getToken(SqlBaseParser.TIME, 0); }
	public ZONE(): TerminalNode { return this.getToken(SqlBaseParser.ZONE, 0); }
	public interval(): IntervalContext {
		return this.getRuleContext(0, IntervalContext);
	}
	constructor(ctx: TimeZoneSpecifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterTimeZoneInterval) {
			listener.enterTimeZoneInterval(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitTimeZoneInterval) {
			listener.exitTimeZoneInterval(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitTimeZoneInterval) {
			return visitor.visitTimeZoneInterval(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TimeZoneStringContext extends TimeZoneSpecifierContext {
	public TIME(): TerminalNode { return this.getToken(SqlBaseParser.TIME, 0); }
	public ZONE(): TerminalNode { return this.getToken(SqlBaseParser.ZONE, 0); }
	public STRING(): TerminalNode { return this.getToken(SqlBaseParser.STRING, 0); }
	constructor(ctx: TimeZoneSpecifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterTimeZoneString) {
			listener.enterTimeZoneString(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitTimeZoneString) {
			listener.exitTimeZoneString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitTimeZoneString) {
			return visitor.visitTimeZoneString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonOperatorContext extends ParserRuleContext {
	public EQ(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.EQ, 0); }
	public NEQ(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.NEQ, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.LT, 0); }
	public LTE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.LTE, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.GT, 0); }
	public GTE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.GTE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_comparisonOperator; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterComparisonOperator) {
			listener.enterComparisonOperator(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitComparisonOperator) {
			listener.exitComparisonOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitComparisonOperator) {
			return visitor.visitComparisonOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonQuantifierContext extends ParserRuleContext {
	public ALL(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.ALL, 0); }
	public SOME(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.SOME, 0); }
	public ANY(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.ANY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_comparisonQuantifier; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterComparisonQuantifier) {
			listener.enterComparisonQuantifier(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitComparisonQuantifier) {
			listener.exitComparisonQuantifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitComparisonQuantifier) {
			return visitor.visitComparisonQuantifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanValueContext extends ParserRuleContext {
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_booleanValue; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterBooleanValue) {
			listener.enterBooleanValue(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitBooleanValue) {
			listener.exitBooleanValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitBooleanValue) {
			return visitor.visitBooleanValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntervalContext extends ParserRuleContext {
	public _sign!: Token;
	public _from!: IntervalFieldContext;
	public _to!: IntervalFieldContext;
	public INTERVAL(): TerminalNode { return this.getToken(SqlBaseParser.INTERVAL, 0); }
	public STRING(): TerminalNode { return this.getToken(SqlBaseParser.STRING, 0); }
	public intervalField(): IntervalFieldContext[];
	public intervalField(i: number): IntervalFieldContext;
	public intervalField(i?: number): IntervalFieldContext | IntervalFieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntervalFieldContext);
		} else {
			return this.getRuleContext(i, IntervalFieldContext);
		}
	}
	public TO(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.TO, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_interval; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterInterval) {
			listener.enterInterval(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitInterval) {
			listener.exitInterval(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitInterval) {
			return visitor.visitInterval(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntervalFieldContext extends ParserRuleContext {
	public YEAR(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.YEAR, 0); }
	public MONTH(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.MONTH, 0); }
	public DAY(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.DAY, 0); }
	public HOUR(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.HOUR, 0); }
	public MINUTE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.MINUTE, 0); }
	public SECOND(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.SECOND, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_intervalField; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterIntervalField) {
			listener.enterIntervalField(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitIntervalField) {
			listener.exitIntervalField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitIntervalField) {
			return visitor.visitIntervalField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public ARRAY(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.ARRAY, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.GT, 0); }
	public MAP(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.MAP, 0); }
	public ROW(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.ROW, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public baseType(): BaseTypeContext | undefined {
		return this.tryGetRuleContext(0, BaseTypeContext);
	}
	public typeParameter(): TypeParameterContext[];
	public typeParameter(i: number): TypeParameterContext;
	public typeParameter(i?: number): TypeParameterContext | TypeParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeParameterContext);
		} else {
			return this.getRuleContext(i, TypeParameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_type; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParameterContext extends ParserRuleContext {
	public INTEGER_VALUE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.INTEGER_VALUE, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_typeParameter; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterTypeParameter) {
			listener.enterTypeParameter(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitTypeParameter) {
			listener.exitTypeParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitTypeParameter) {
			return visitor.visitTypeParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BaseTypeContext extends ParserRuleContext {
	public TIME_WITH_TIME_ZONE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.TIME_WITH_TIME_ZONE, 0); }
	public TIMESTAMP_WITH_TIME_ZONE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.TIMESTAMP_WITH_TIME_ZONE, 0); }
	public DOUBLE_PRECISION(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.DOUBLE_PRECISION, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_baseType; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterBaseType) {
			listener.enterBaseType(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitBaseType) {
			listener.exitBaseType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitBaseType) {
			return visitor.visitBaseType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhenClauseContext extends ParserRuleContext {
	public _condition!: ExpressionContext;
	public _result!: ExpressionContext;
	public WHEN(): TerminalNode { return this.getToken(SqlBaseParser.WHEN, 0); }
	public THEN(): TerminalNode { return this.getToken(SqlBaseParser.THEN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_whenClause; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterWhenClause) {
			listener.enterWhenClause(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitWhenClause) {
			listener.exitWhenClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitWhenClause) {
			return visitor.visitWhenClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FilterContext extends ParserRuleContext {
	public FILTER(): TerminalNode { return this.getToken(SqlBaseParser.FILTER, 0); }
	public WHERE(): TerminalNode { return this.getToken(SqlBaseParser.WHERE, 0); }
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_filter; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterFilter) {
			listener.enterFilter(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitFilter) {
			listener.exitFilter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitFilter) {
			return visitor.visitFilter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OverContext extends ParserRuleContext {
	public _expression!: ExpressionContext;
	public _partition: ExpressionContext[] = [];
	public OVER(): TerminalNode { return this.getToken(SqlBaseParser.OVER, 0); }
	public PARTITION(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.PARTITION, 0); }
	public BY(): TerminalNode[];
	public BY(i: number): TerminalNode;
	public BY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SqlBaseParser.BY);
		} else {
			return this.getToken(SqlBaseParser.BY, i);
		}
	}
	public ORDER(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.ORDER, 0); }
	public sortItem(): SortItemContext[];
	public sortItem(i: number): SortItemContext;
	public sortItem(i?: number): SortItemContext | SortItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SortItemContext);
		} else {
			return this.getRuleContext(i, SortItemContext);
		}
	}
	public windowFrame(): WindowFrameContext | undefined {
		return this.tryGetRuleContext(0, WindowFrameContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_over; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterOver) {
			listener.enterOver(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitOver) {
			listener.exitOver(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitOver) {
			return visitor.visitOver(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WindowFrameContext extends ParserRuleContext {
	public _frameType!: Token;
	public _start!: FrameBoundContext;
	public _end!: FrameBoundContext;
	public RANGE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.RANGE, 0); }
	public frameBound(): FrameBoundContext[];
	public frameBound(i: number): FrameBoundContext;
	public frameBound(i?: number): FrameBoundContext | FrameBoundContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FrameBoundContext);
		} else {
			return this.getRuleContext(i, FrameBoundContext);
		}
	}
	public ROWS(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.ROWS, 0); }
	public BETWEEN(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.BETWEEN, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.AND, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_windowFrame; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterWindowFrame) {
			listener.enterWindowFrame(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitWindowFrame) {
			listener.exitWindowFrame(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitWindowFrame) {
			return visitor.visitWindowFrame(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FrameBoundContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_frameBound; }
	public copyFrom(ctx: FrameBoundContext): void {
		super.copyFrom(ctx);
	}
}
export class UnboundedFrameContext extends FrameBoundContext {
	public _boundType!: Token;
	public UNBOUNDED(): TerminalNode { return this.getToken(SqlBaseParser.UNBOUNDED, 0); }
	public PRECEDING(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.PRECEDING, 0); }
	public FOLLOWING(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.FOLLOWING, 0); }
	constructor(ctx: FrameBoundContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterUnboundedFrame) {
			listener.enterUnboundedFrame(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitUnboundedFrame) {
			listener.exitUnboundedFrame(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitUnboundedFrame) {
			return visitor.visitUnboundedFrame(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CurrentRowBoundContext extends FrameBoundContext {
	public CURRENT(): TerminalNode { return this.getToken(SqlBaseParser.CURRENT, 0); }
	public ROW(): TerminalNode { return this.getToken(SqlBaseParser.ROW, 0); }
	constructor(ctx: FrameBoundContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterCurrentRowBound) {
			listener.enterCurrentRowBound(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitCurrentRowBound) {
			listener.exitCurrentRowBound(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitCurrentRowBound) {
			return visitor.visitCurrentRowBound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BoundedFrameContext extends FrameBoundContext {
	public _boundType!: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public PRECEDING(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.PRECEDING, 0); }
	public FOLLOWING(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.FOLLOWING, 0); }
	constructor(ctx: FrameBoundContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterBoundedFrame) {
			listener.enterBoundedFrame(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitBoundedFrame) {
			listener.exitBoundedFrame(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitBoundedFrame) {
			return visitor.visitBoundedFrame(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExplainOptionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_explainOption; }
	public copyFrom(ctx: ExplainOptionContext): void {
		super.copyFrom(ctx);
	}
}
export class ExplainFormatContext extends ExplainOptionContext {
	public _value!: Token;
	public FORMAT(): TerminalNode { return this.getToken(SqlBaseParser.FORMAT, 0); }
	public TEXT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.TEXT, 0); }
	public GRAPHVIZ(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.GRAPHVIZ, 0); }
	constructor(ctx: ExplainOptionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterExplainFormat) {
			listener.enterExplainFormat(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitExplainFormat) {
			listener.exitExplainFormat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitExplainFormat) {
			return visitor.visitExplainFormat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExplainTypeContext extends ExplainOptionContext {
	public _value!: Token;
	public TYPE(): TerminalNode { return this.getToken(SqlBaseParser.TYPE, 0); }
	public LOGICAL(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.LOGICAL, 0); }
	public DISTRIBUTED(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.DISTRIBUTED, 0); }
	constructor(ctx: ExplainOptionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterExplainType) {
			listener.enterExplainType(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitExplainType) {
			listener.exitExplainType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitExplainType) {
			return visitor.visitExplainType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TransactionModeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_transactionMode; }
	public copyFrom(ctx: TransactionModeContext): void {
		super.copyFrom(ctx);
	}
}
export class IsolationLevelContext extends TransactionModeContext {
	public ISOLATION(): TerminalNode { return this.getToken(SqlBaseParser.ISOLATION, 0); }
	public LEVEL(): TerminalNode { return this.getToken(SqlBaseParser.LEVEL, 0); }
	public levelOfIsolation(): LevelOfIsolationContext {
		return this.getRuleContext(0, LevelOfIsolationContext);
	}
	constructor(ctx: TransactionModeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterIsolationLevel) {
			listener.enterIsolationLevel(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitIsolationLevel) {
			listener.exitIsolationLevel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitIsolationLevel) {
			return visitor.visitIsolationLevel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TransactionAccessModeContext extends TransactionModeContext {
	public _accessMode!: Token;
	public READ(): TerminalNode { return this.getToken(SqlBaseParser.READ, 0); }
	public ONLY(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.ONLY, 0); }
	public WRITE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.WRITE, 0); }
	constructor(ctx: TransactionModeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterTransactionAccessMode) {
			listener.enterTransactionAccessMode(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitTransactionAccessMode) {
			listener.exitTransactionAccessMode(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitTransactionAccessMode) {
			return visitor.visitTransactionAccessMode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LevelOfIsolationContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_levelOfIsolation; }
	public copyFrom(ctx: LevelOfIsolationContext): void {
		super.copyFrom(ctx);
	}
}
export class ReadUncommittedContext extends LevelOfIsolationContext {
	public READ(): TerminalNode { return this.getToken(SqlBaseParser.READ, 0); }
	public UNCOMMITTED(): TerminalNode { return this.getToken(SqlBaseParser.UNCOMMITTED, 0); }
	constructor(ctx: LevelOfIsolationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterReadUncommitted) {
			listener.enterReadUncommitted(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitReadUncommitted) {
			listener.exitReadUncommitted(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitReadUncommitted) {
			return visitor.visitReadUncommitted(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ReadCommittedContext extends LevelOfIsolationContext {
	public READ(): TerminalNode { return this.getToken(SqlBaseParser.READ, 0); }
	public COMMITTED(): TerminalNode { return this.getToken(SqlBaseParser.COMMITTED, 0); }
	constructor(ctx: LevelOfIsolationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterReadCommitted) {
			listener.enterReadCommitted(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitReadCommitted) {
			listener.exitReadCommitted(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitReadCommitted) {
			return visitor.visitReadCommitted(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RepeatableReadContext extends LevelOfIsolationContext {
	public REPEATABLE(): TerminalNode { return this.getToken(SqlBaseParser.REPEATABLE, 0); }
	public READ(): TerminalNode { return this.getToken(SqlBaseParser.READ, 0); }
	constructor(ctx: LevelOfIsolationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterRepeatableRead) {
			listener.enterRepeatableRead(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitRepeatableRead) {
			listener.exitRepeatableRead(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitRepeatableRead) {
			return visitor.visitRepeatableRead(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SerializableContext extends LevelOfIsolationContext {
	public SERIALIZABLE(): TerminalNode { return this.getToken(SqlBaseParser.SERIALIZABLE, 0); }
	constructor(ctx: LevelOfIsolationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterSerializable) {
			listener.enterSerializable(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitSerializable) {
			listener.exitSerializable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitSerializable) {
			return visitor.visitSerializable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CallArgumentContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_callArgument; }
	public copyFrom(ctx: CallArgumentContext): void {
		super.copyFrom(ctx);
	}
}
export class PositionalArgumentContext extends CallArgumentContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: CallArgumentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterPositionalArgument) {
			listener.enterPositionalArgument(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitPositionalArgument) {
			listener.exitPositionalArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitPositionalArgument) {
			return visitor.visitPositionalArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NamedArgumentContext extends CallArgumentContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: CallArgumentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterNamedArgument) {
			listener.enterNamedArgument(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitNamedArgument) {
			listener.exitNamedArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitNamedArgument) {
			return visitor.visitNamedArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrivilegeContext extends ParserRuleContext {
	public SELECT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.SELECT, 0); }
	public DELETE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.DELETE, 0); }
	public INSERT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.INSERT, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_privilege; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterPrivilege) {
			listener.enterPrivilege(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitPrivilege) {
			listener.exitPrivilege(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitPrivilege) {
			return visitor.visitPrivilege(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_qualifiedName; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterQualifiedName) {
			listener.enterQualifiedName(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitQualifiedName) {
			listener.exitQualifiedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitQualifiedName) {
			return visitor.visitQualifiedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_identifier; }
	public copyFrom(ctx: IdentifierContext): void {
		super.copyFrom(ctx);
	}
}
export class UnquotedIdentifierContext extends IdentifierContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.IDENTIFIER, 0); }
	public nonReserved(): NonReservedContext | undefined {
		return this.tryGetRuleContext(0, NonReservedContext);
	}
	constructor(ctx: IdentifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterUnquotedIdentifier) {
			listener.enterUnquotedIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitUnquotedIdentifier) {
			listener.exitUnquotedIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitUnquotedIdentifier) {
			return visitor.visitUnquotedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class QuotedIdentifierAlternativeContext extends IdentifierContext {
	public quotedIdentifier(): QuotedIdentifierContext {
		return this.getRuleContext(0, QuotedIdentifierContext);
	}
	constructor(ctx: IdentifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterQuotedIdentifierAlternative) {
			listener.enterQuotedIdentifierAlternative(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitQuotedIdentifierAlternative) {
			listener.exitQuotedIdentifierAlternative(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitQuotedIdentifierAlternative) {
			return visitor.visitQuotedIdentifierAlternative(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BackQuotedIdentifierContext extends IdentifierContext {
	public BACKQUOTED_IDENTIFIER(): TerminalNode { return this.getToken(SqlBaseParser.BACKQUOTED_IDENTIFIER, 0); }
	constructor(ctx: IdentifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterBackQuotedIdentifier) {
			listener.enterBackQuotedIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitBackQuotedIdentifier) {
			listener.exitBackQuotedIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitBackQuotedIdentifier) {
			return visitor.visitBackQuotedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DigitIdentifierContext extends IdentifierContext {
	public DIGIT_IDENTIFIER(): TerminalNode { return this.getToken(SqlBaseParser.DIGIT_IDENTIFIER, 0); }
	constructor(ctx: IdentifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterDigitIdentifier) {
			listener.enterDigitIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitDigitIdentifier) {
			listener.exitDigitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitDigitIdentifier) {
			return visitor.visitDigitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuotedIdentifierContext extends ParserRuleContext {
	public QUOTED_IDENTIFIER(): TerminalNode { return this.getToken(SqlBaseParser.QUOTED_IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_quotedIdentifier; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterQuotedIdentifier) {
			listener.enterQuotedIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitQuotedIdentifier) {
			listener.exitQuotedIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitQuotedIdentifier) {
			return visitor.visitQuotedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_number; }
	public copyFrom(ctx: NumberContext): void {
		super.copyFrom(ctx);
	}
}
export class DecimalLiteralContext extends NumberContext {
	public DECIMAL_VALUE(): TerminalNode { return this.getToken(SqlBaseParser.DECIMAL_VALUE, 0); }
	constructor(ctx: NumberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterDecimalLiteral) {
			listener.enterDecimalLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitDecimalLiteral) {
			listener.exitDecimalLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitDecimalLiteral) {
			return visitor.visitDecimalLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntegerLiteralContext extends NumberContext {
	public INTEGER_VALUE(): TerminalNode { return this.getToken(SqlBaseParser.INTEGER_VALUE, 0); }
	constructor(ctx: NumberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterIntegerLiteral) {
			listener.enterIntegerLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitIntegerLiteral) {
			listener.exitIntegerLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitIntegerLiteral) {
			return visitor.visitIntegerLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NonReservedContext extends ParserRuleContext {
	public SHOW(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.SHOW, 0); }
	public TABLES(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.TABLES, 0); }
	public COLUMNS(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.COLUMNS, 0); }
	public COLUMN(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.COLUMN, 0); }
	public PARTITIONS(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.PARTITIONS, 0); }
	public FUNCTIONS(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.FUNCTIONS, 0); }
	public SCHEMAS(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.SCHEMAS, 0); }
	public CATALOGS(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.CATALOGS, 0); }
	public SESSION(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.SESSION, 0); }
	public ADD(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.ADD, 0); }
	public FILTER(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.FILTER, 0); }
	public OVER(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.OVER, 0); }
	public PARTITION(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.PARTITION, 0); }
	public RANGE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.RANGE, 0); }
	public ROWS(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.ROWS, 0); }
	public PRECEDING(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.PRECEDING, 0); }
	public FOLLOWING(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.FOLLOWING, 0); }
	public CURRENT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.CURRENT, 0); }
	public ROW(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.ROW, 0); }
	public MAP(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.MAP, 0); }
	public ARRAY(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.ARRAY, 0); }
	public TINYINT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.TINYINT, 0); }
	public SMALLINT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.SMALLINT, 0); }
	public INTEGER(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.INTEGER, 0); }
	public DATE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.DATE, 0); }
	public TIME(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.TIME, 0); }
	public TIMESTAMP(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.TIMESTAMP, 0); }
	public INTERVAL(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.INTERVAL, 0); }
	public ZONE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.ZONE, 0); }
	public YEAR(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.YEAR, 0); }
	public MONTH(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.MONTH, 0); }
	public DAY(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.DAY, 0); }
	public HOUR(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.HOUR, 0); }
	public MINUTE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.MINUTE, 0); }
	public SECOND(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.SECOND, 0); }
	public EXPLAIN(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.EXPLAIN, 0); }
	public ANALYZE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.ANALYZE, 0); }
	public FORMAT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.FORMAT, 0); }
	public TYPE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.TYPE, 0); }
	public TEXT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.TEXT, 0); }
	public GRAPHVIZ(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.GRAPHVIZ, 0); }
	public LOGICAL(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.LOGICAL, 0); }
	public DISTRIBUTED(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.DISTRIBUTED, 0); }
	public TABLESAMPLE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.TABLESAMPLE, 0); }
	public SYSTEM(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.SYSTEM, 0); }
	public BERNOULLI(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.BERNOULLI, 0); }
	public POISSONIZED(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.POISSONIZED, 0); }
	public USE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.USE, 0); }
	public TO(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.TO, 0); }
	public SET(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.SET, 0); }
	public RESET(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.RESET, 0); }
	public VIEW(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.VIEW, 0); }
	public REPLACE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.REPLACE, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.IF, 0); }
	public NULLIF(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.NULLIF, 0); }
	public COALESCE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.COALESCE, 0); }
	public normalForm(): NormalFormContext | undefined {
		return this.tryGetRuleContext(0, NormalFormContext);
	}
	public POSITION(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.POSITION, 0); }
	public NO(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.NO, 0); }
	public DATA(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.DATA, 0); }
	public START(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.START, 0); }
	public TRANSACTION(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.TRANSACTION, 0); }
	public COMMIT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.COMMIT, 0); }
	public ROLLBACK(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.ROLLBACK, 0); }
	public WORK(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.WORK, 0); }
	public ISOLATION(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.ISOLATION, 0); }
	public LEVEL(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.LEVEL, 0); }
	public SERIALIZABLE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.SERIALIZABLE, 0); }
	public REPEATABLE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.REPEATABLE, 0); }
	public COMMITTED(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.COMMITTED, 0); }
	public UNCOMMITTED(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.UNCOMMITTED, 0); }
	public READ(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.READ, 0); }
	public WRITE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.WRITE, 0); }
	public ONLY(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.ONLY, 0); }
	public CALL(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.CALL, 0); }
	public GRANT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.GRANT, 0); }
	public REVOKE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.REVOKE, 0); }
	public PRIVILEGES(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.PRIVILEGES, 0); }
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.PUBLIC, 0); }
	public OPTION(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.OPTION, 0); }
	public SUBSTRING(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.SUBSTRING, 0); }
	public SCHEMA(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.SCHEMA, 0); }
	public CASCADE(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.CASCADE, 0); }
	public RESTRICT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.RESTRICT, 0); }
	public INPUT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.INPUT, 0); }
	public OUTPUT(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.OUTPUT, 0); }
	public INCLUDING(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.INCLUDING, 0); }
	public EXCLUDING(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.EXCLUDING, 0); }
	public PROPERTIES(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.PROPERTIES, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_nonReserved; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterNonReserved) {
			listener.enterNonReserved(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitNonReserved) {
			listener.exitNonReserved(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitNonReserved) {
			return visitor.visitNonReserved(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NormalFormContext extends ParserRuleContext {
	public NFD(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.NFD, 0); }
	public NFC(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.NFC, 0); }
	public NFKD(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.NFKD, 0); }
	public NFKC(): TerminalNode | undefined { return this.tryGetToken(SqlBaseParser.NFKC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SqlBaseParser.RULE_normalForm; }
	// @Override
	public enterRule(listener: SqlBaseListener): void {
		if (listener.enterNormalForm) {
			listener.enterNormalForm(this);
		}
	}
	// @Override
	public exitRule(listener: SqlBaseListener): void {
		if (listener.exitNormalForm) {
			listener.exitNormalForm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SqlBaseVisitor<Result>): Result {
		if (visitor.visitNormalForm) {
			return visitor.visitNormalForm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


