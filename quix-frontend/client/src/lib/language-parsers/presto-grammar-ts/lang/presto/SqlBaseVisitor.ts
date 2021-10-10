// Generated from ./src/lib/language-parsers/presto-grammar-ts/lang/presto/SqlBase.g4 by ANTLR 4.9.0-SNAPSHOT
// @ts-nocheck

import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { TableNameContext } from "./SqlBaseParser";
import { SubqueryRelationContext } from "./SqlBaseParser";
import { UnnestContext } from "./SqlBaseParser";
import { ParenthesizedRelationContext } from "./SqlBaseParser";
import { JoinRelationContext } from "./SqlBaseParser";
import { RelationDefaultContext } from "./SqlBaseParser";
import { ComparisonContext } from "./SqlBaseParser";
import { QuantifiedComparisonContext } from "./SqlBaseParser";
import { BetweenContext } from "./SqlBaseParser";
import { InListContext } from "./SqlBaseParser";
import { InSubqueryContext } from "./SqlBaseParser";
import { LikeContext } from "./SqlBaseParser";
import { NullPredicateContext } from "./SqlBaseParser";
import { DistinctFromContext } from "./SqlBaseParser";
import { DecimalLiteralContext } from "./SqlBaseParser";
import { IntegerLiteralContext } from "./SqlBaseParser";
import { QueryTermDefaultContext } from "./SqlBaseParser";
import { SetOperationContext } from "./SqlBaseParser";
import { UnquotedIdentifierContext } from "./SqlBaseParser";
import { QuotedIdentifierAlternativeContext } from "./SqlBaseParser";
import { BackQuotedIdentifierContext } from "./SqlBaseParser";
import { DigitIdentifierContext } from "./SqlBaseParser";
import { ExplainFormatContext } from "./SqlBaseParser";
import { ExplainTypeContext } from "./SqlBaseParser";
import { SingleGroupingSetContext } from "./SqlBaseParser";
import { RollupContext } from "./SqlBaseParser";
import { CubeContext } from "./SqlBaseParser";
import { MultipleGroupingSetsContext } from "./SqlBaseParser";
import { ReadUncommittedContext } from "./SqlBaseParser";
import { ReadCommittedContext } from "./SqlBaseParser";
import { RepeatableReadContext } from "./SqlBaseParser";
import { SerializableContext } from "./SqlBaseParser";
import { ValueExpressionDefaultContext } from "./SqlBaseParser";
import { AtTimeZoneContext } from "./SqlBaseParser";
import { ArithmeticUnaryContext } from "./SqlBaseParser";
import { ArithmeticBinaryContext } from "./SqlBaseParser";
import { ConcatenationContext } from "./SqlBaseParser";
import { UnboundedFrameContext } from "./SqlBaseParser";
import { CurrentRowBoundContext } from "./SqlBaseParser";
import { BoundedFrameContext } from "./SqlBaseParser";
import { StatementDefaultContext } from "./SqlBaseParser";
import { UseContext } from "./SqlBaseParser";
import { CreateSchemaContext } from "./SqlBaseParser";
import { DropSchemaContext } from "./SqlBaseParser";
import { RenameSchemaContext } from "./SqlBaseParser";
import { CreateTableAsSelectContext } from "./SqlBaseParser";
import { CreateTableContext } from "./SqlBaseParser";
import { DropTableContext } from "./SqlBaseParser";
import { InsertIntoContext } from "./SqlBaseParser";
import { DeleteContext } from "./SqlBaseParser";
import { RenameTableContext } from "./SqlBaseParser";
import { RenameColumnContext } from "./SqlBaseParser";
import { AddColumnContext } from "./SqlBaseParser";
import { CreateViewContext } from "./SqlBaseParser";
import { DropViewContext } from "./SqlBaseParser";
import { CallContext } from "./SqlBaseParser";
import { GrantContext } from "./SqlBaseParser";
import { RevokeContext } from "./SqlBaseParser";
import { ExplainContext } from "./SqlBaseParser";
import { ShowCreateTableContext } from "./SqlBaseParser";
import { ShowCreateViewContext } from "./SqlBaseParser";
import { ShowTablesContext } from "./SqlBaseParser";
import { ShowSchemasContext } from "./SqlBaseParser";
import { ShowCatalogsContext } from "./SqlBaseParser";
import { ShowColumnsContext } from "./SqlBaseParser";
import { ShowFunctionsContext } from "./SqlBaseParser";
import { ShowSessionContext } from "./SqlBaseParser";
import { SetSessionContext } from "./SqlBaseParser";
import { ResetSessionContext } from "./SqlBaseParser";
import { StartTransactionContext } from "./SqlBaseParser";
import { CommitContext } from "./SqlBaseParser";
import { RollbackContext } from "./SqlBaseParser";
import { ShowPartitionsContext } from "./SqlBaseParser";
import { PrepareContext } from "./SqlBaseParser";
import { DeallocateContext } from "./SqlBaseParser";
import { ExecuteContext } from "./SqlBaseParser";
import { DescribeInputContext } from "./SqlBaseParser";
import { DescribeOutputContext } from "./SqlBaseParser";
import { TimeZoneIntervalContext } from "./SqlBaseParser";
import { TimeZoneStringContext } from "./SqlBaseParser";
import { QueryPrimaryDefaultContext } from "./SqlBaseParser";
import { TableContext } from "./SqlBaseParser";
import { InlineTableContext } from "./SqlBaseParser";
import { SubqueryContext } from "./SqlBaseParser";
import { NullLiteralContext } from "./SqlBaseParser";
import { IntervalLiteralContext } from "./SqlBaseParser";
import { TypeConstructorContext } from "./SqlBaseParser";
import { NumericLiteralContext } from "./SqlBaseParser";
import { BooleanLiteralContext } from "./SqlBaseParser";
import { StringLiteralContext } from "./SqlBaseParser";
import { BinaryLiteralContext } from "./SqlBaseParser";
import { ParameterContext } from "./SqlBaseParser";
import { PositionContext } from "./SqlBaseParser";
import { ImplicitRowConstructorContext } from "./SqlBaseParser";
import { RowConstructorContext } from "./SqlBaseParser";
import { FunctionCallContext } from "./SqlBaseParser";
import { LambdaContext } from "./SqlBaseParser";
import { SubqueryExpressionContext } from "./SqlBaseParser";
import { ExistsContext } from "./SqlBaseParser";
import { SimpleCaseContext } from "./SqlBaseParser";
import { SearchedCaseContext } from "./SqlBaseParser";
import { CastContext } from "./SqlBaseParser";
import { ArrayConstructorContext } from "./SqlBaseParser";
import { SubscriptContext } from "./SqlBaseParser";
import { ColumnReferenceContext } from "./SqlBaseParser";
import { DereferenceContext } from "./SqlBaseParser";
import { SpecialDateTimeFunctionContext } from "./SqlBaseParser";
import { SubstringContext } from "./SqlBaseParser";
import { NormalizeContext } from "./SqlBaseParser";
import { ExtractContext } from "./SqlBaseParser";
import { IsolationLevelContext } from "./SqlBaseParser";
import { TransactionAccessModeContext } from "./SqlBaseParser";
import { SelectSingleContext } from "./SqlBaseParser";
import { SelectAllContext } from "./SqlBaseParser";
import { BooleanDefaultContext } from "./SqlBaseParser";
import { LogicalNotContext } from "./SqlBaseParser";
import { LogicalBinaryContext } from "./SqlBaseParser";
import { PositionalArgumentContext } from "./SqlBaseParser";
import { NamedArgumentContext } from "./SqlBaseParser";
import { MultiStatementContext } from "./SqlBaseParser";
import { SingleStatementContext } from "./SqlBaseParser";
import { SingleExpressionContext } from "./SqlBaseParser";
import { StatementContext } from "./SqlBaseParser";
import { QueryContext } from "./SqlBaseParser";
import { Presto_withContext } from "./SqlBaseParser";
import { TableElementContext } from "./SqlBaseParser";
import { ColumnDefinitionContext } from "./SqlBaseParser";
import { LikeClauseContext } from "./SqlBaseParser";
import { TablePropertiesContext } from "./SqlBaseParser";
import { TablePropertyContext } from "./SqlBaseParser";
import { QueryNoWithContext } from "./SqlBaseParser";
import { QueryTermContext } from "./SqlBaseParser";
import { QueryPrimaryContext } from "./SqlBaseParser";
import { SortItemContext } from "./SqlBaseParser";
import { QuerySpecificationContext } from "./SqlBaseParser";
import { GroupByContext } from "./SqlBaseParser";
import { GroupingElementContext } from "./SqlBaseParser";
import { GroupingExpressionsContext } from "./SqlBaseParser";
import { GroupingSetContext } from "./SqlBaseParser";
import { NamedQueryContext } from "./SqlBaseParser";
import { SetQuantifierContext } from "./SqlBaseParser";
import { SelectItemContext } from "./SqlBaseParser";
import { RelationContext } from "./SqlBaseParser";
import { JoinTypeContext } from "./SqlBaseParser";
import { JoinCriteriaContext } from "./SqlBaseParser";
import { SampledRelationContext } from "./SqlBaseParser";
import { SampleTypeContext } from "./SqlBaseParser";
import { AliasedRelationContext } from "./SqlBaseParser";
import { ColumnAliasesContext } from "./SqlBaseParser";
import { RelationPrimaryContext } from "./SqlBaseParser";
import { ExpressionContext } from "./SqlBaseParser";
import { BooleanExpressionContext } from "./SqlBaseParser";
import { PredicatedContext } from "./SqlBaseParser";
import { PredicateContext } from "./SqlBaseParser";
import { ValueExpressionContext } from "./SqlBaseParser";
import { PrimaryExpressionContext } from "./SqlBaseParser";
import { TimeZoneSpecifierContext } from "./SqlBaseParser";
import { ComparisonOperatorContext } from "./SqlBaseParser";
import { ComparisonQuantifierContext } from "./SqlBaseParser";
import { BooleanValueContext } from "./SqlBaseParser";
import { IntervalContext } from "./SqlBaseParser";
import { IntervalFieldContext } from "./SqlBaseParser";
import { TypeContext } from "./SqlBaseParser";
import { TypeParameterContext } from "./SqlBaseParser";
import { BaseTypeContext } from "./SqlBaseParser";
import { WhenClauseContext } from "./SqlBaseParser";
import { FilterContext } from "./SqlBaseParser";
import { OverContext } from "./SqlBaseParser";
import { WindowFrameContext } from "./SqlBaseParser";
import { FrameBoundContext } from "./SqlBaseParser";
import { ExplainOptionContext } from "./SqlBaseParser";
import { TransactionModeContext } from "./SqlBaseParser";
import { LevelOfIsolationContext } from "./SqlBaseParser";
import { CallArgumentContext } from "./SqlBaseParser";
import { PrivilegeContext } from "./SqlBaseParser";
import { QualifiedNameContext } from "./SqlBaseParser";
import { IdentifierContext } from "./SqlBaseParser";
import { QuotedIdentifierContext } from "./SqlBaseParser";
import { NumberContext } from "./SqlBaseParser";
import { NonReservedContext } from "./SqlBaseParser";
import { NormalFormContext } from "./SqlBaseParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SqlBaseParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SqlBaseVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `tableName`
	 * labeled alternative in `SqlBaseParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableName?: (ctx: TableNameContext) => Result;

	/**
	 * Visit a parse tree produced by the `subqueryRelation`
	 * labeled alternative in `SqlBaseParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubqueryRelation?: (ctx: SubqueryRelationContext) => Result;

	/**
	 * Visit a parse tree produced by the `unnest`
	 * labeled alternative in `SqlBaseParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnnest?: (ctx: UnnestContext) => Result;

	/**
	 * Visit a parse tree produced by the `parenthesizedRelation`
	 * labeled alternative in `SqlBaseParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedRelation?: (ctx: ParenthesizedRelationContext) => Result;

	/**
	 * Visit a parse tree produced by the `joinRelation`
	 * labeled alternative in `SqlBaseParser.relation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinRelation?: (ctx: JoinRelationContext) => Result;

	/**
	 * Visit a parse tree produced by the `relationDefault`
	 * labeled alternative in `SqlBaseParser.relation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationDefault?: (ctx: RelationDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by the `comparison`
	 * labeled alternative in `SqlBaseParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparison?: (ctx: ComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by the `quantifiedComparison`
	 * labeled alternative in `SqlBaseParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantifiedComparison?: (ctx: QuantifiedComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by the `between`
	 * labeled alternative in `SqlBaseParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBetween?: (ctx: BetweenContext) => Result;

	/**
	 * Visit a parse tree produced by the `inList`
	 * labeled alternative in `SqlBaseParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInList?: (ctx: InListContext) => Result;

	/**
	 * Visit a parse tree produced by the `inSubquery`
	 * labeled alternative in `SqlBaseParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInSubquery?: (ctx: InSubqueryContext) => Result;

	/**
	 * Visit a parse tree produced by the `like`
	 * labeled alternative in `SqlBaseParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLike?: (ctx: LikeContext) => Result;

	/**
	 * Visit a parse tree produced by the `nullPredicate`
	 * labeled alternative in `SqlBaseParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullPredicate?: (ctx: NullPredicateContext) => Result;

	/**
	 * Visit a parse tree produced by the `distinctFrom`
	 * labeled alternative in `SqlBaseParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDistinctFrom?: (ctx: DistinctFromContext) => Result;

	/**
	 * Visit a parse tree produced by the `decimalLiteral`
	 * labeled alternative in `SqlBaseParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecimalLiteral?: (ctx: DecimalLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `integerLiteral`
	 * labeled alternative in `SqlBaseParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerLiteral?: (ctx: IntegerLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `queryTermDefault`
	 * labeled alternative in `SqlBaseParser.queryTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryTermDefault?: (ctx: QueryTermDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by the `setOperation`
	 * labeled alternative in `SqlBaseParser.queryTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetOperation?: (ctx: SetOperationContext) => Result;

	/**
	 * Visit a parse tree produced by the `unquotedIdentifier`
	 * labeled alternative in `SqlBaseParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `quotedIdentifierAlternative`
	 * labeled alternative in `SqlBaseParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuotedIdentifierAlternative?: (ctx: QuotedIdentifierAlternativeContext) => Result;

	/**
	 * Visit a parse tree produced by the `backQuotedIdentifier`
	 * labeled alternative in `SqlBaseParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBackQuotedIdentifier?: (ctx: BackQuotedIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `digitIdentifier`
	 * labeled alternative in `SqlBaseParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDigitIdentifier?: (ctx: DigitIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `explainFormat`
	 * labeled alternative in `SqlBaseParser.explainOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplainFormat?: (ctx: ExplainFormatContext) => Result;

	/**
	 * Visit a parse tree produced by the `explainType`
	 * labeled alternative in `SqlBaseParser.explainOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplainType?: (ctx: ExplainTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `singleGroupingSet`
	 * labeled alternative in `SqlBaseParser.groupingElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleGroupingSet?: (ctx: SingleGroupingSetContext) => Result;

	/**
	 * Visit a parse tree produced by the `rollup`
	 * labeled alternative in `SqlBaseParser.groupingElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRollup?: (ctx: RollupContext) => Result;

	/**
	 * Visit a parse tree produced by the `cube`
	 * labeled alternative in `SqlBaseParser.groupingElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCube?: (ctx: CubeContext) => Result;

	/**
	 * Visit a parse tree produced by the `multipleGroupingSets`
	 * labeled alternative in `SqlBaseParser.groupingElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultipleGroupingSets?: (ctx: MultipleGroupingSetsContext) => Result;

	/**
	 * Visit a parse tree produced by the `readUncommitted`
	 * labeled alternative in `SqlBaseParser.levelOfIsolation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReadUncommitted?: (ctx: ReadUncommittedContext) => Result;

	/**
	 * Visit a parse tree produced by the `readCommitted`
	 * labeled alternative in `SqlBaseParser.levelOfIsolation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReadCommitted?: (ctx: ReadCommittedContext) => Result;

	/**
	 * Visit a parse tree produced by the `repeatableRead`
	 * labeled alternative in `SqlBaseParser.levelOfIsolation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepeatableRead?: (ctx: RepeatableReadContext) => Result;

	/**
	 * Visit a parse tree produced by the `serializable`
	 * labeled alternative in `SqlBaseParser.levelOfIsolation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSerializable?: (ctx: SerializableContext) => Result;

	/**
	 * Visit a parse tree produced by the `valueExpressionDefault`
	 * labeled alternative in `SqlBaseParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by the `atTimeZone`
	 * labeled alternative in `SqlBaseParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtTimeZone?: (ctx: AtTimeZoneContext) => Result;

	/**
	 * Visit a parse tree produced by the `arithmeticUnary`
	 * labeled alternative in `SqlBaseParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `arithmeticBinary`
	 * labeled alternative in `SqlBaseParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `concatenation`
	 * labeled alternative in `SqlBaseParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConcatenation?: (ctx: ConcatenationContext) => Result;

	/**
	 * Visit a parse tree produced by the `unboundedFrame`
	 * labeled alternative in `SqlBaseParser.frameBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnboundedFrame?: (ctx: UnboundedFrameContext) => Result;

	/**
	 * Visit a parse tree produced by the `currentRowBound`
	 * labeled alternative in `SqlBaseParser.frameBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentRowBound?: (ctx: CurrentRowBoundContext) => Result;

	/**
	 * Visit a parse tree produced by the `boundedFrame`
	 * labeled alternative in `SqlBaseParser.frameBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoundedFrame?: (ctx: BoundedFrameContext) => Result;

	/**
	 * Visit a parse tree produced by the `statementDefault`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementDefault?: (ctx: StatementDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by the `use`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUse?: (ctx: UseContext) => Result;

	/**
	 * Visit a parse tree produced by the `createSchema`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateSchema?: (ctx: CreateSchemaContext) => Result;

	/**
	 * Visit a parse tree produced by the `dropSchema`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropSchema?: (ctx: DropSchemaContext) => Result;

	/**
	 * Visit a parse tree produced by the `renameSchema`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameSchema?: (ctx: RenameSchemaContext) => Result;

	/**
	 * Visit a parse tree produced by the `createTableAsSelect`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTableAsSelect?: (ctx: CreateTableAsSelectContext) => Result;

	/**
	 * Visit a parse tree produced by the `createTable`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTable?: (ctx: CreateTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `dropTable`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropTable?: (ctx: DropTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `insertInto`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsertInto?: (ctx: InsertIntoContext) => Result;

	/**
	 * Visit a parse tree produced by the `delete`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelete?: (ctx: DeleteContext) => Result;

	/**
	 * Visit a parse tree produced by the `renameTable`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameTable?: (ctx: RenameTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `renameColumn`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameColumn?: (ctx: RenameColumnContext) => Result;

	/**
	 * Visit a parse tree produced by the `addColumn`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddColumn?: (ctx: AddColumnContext) => Result;

	/**
	 * Visit a parse tree produced by the `createView`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateView?: (ctx: CreateViewContext) => Result;

	/**
	 * Visit a parse tree produced by the `dropView`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropView?: (ctx: DropViewContext) => Result;

	/**
	 * Visit a parse tree produced by the `call`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCall?: (ctx: CallContext) => Result;

	/**
	 * Visit a parse tree produced by the `grant`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGrant?: (ctx: GrantContext) => Result;

	/**
	 * Visit a parse tree produced by the `revoke`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRevoke?: (ctx: RevokeContext) => Result;

	/**
	 * Visit a parse tree produced by the `explain`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplain?: (ctx: ExplainContext) => Result;

	/**
	 * Visit a parse tree produced by the `showCreateTable`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowCreateTable?: (ctx: ShowCreateTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `showCreateView`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowCreateView?: (ctx: ShowCreateViewContext) => Result;

	/**
	 * Visit a parse tree produced by the `showTables`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowTables?: (ctx: ShowTablesContext) => Result;

	/**
	 * Visit a parse tree produced by the `showSchemas`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowSchemas?: (ctx: ShowSchemasContext) => Result;

	/**
	 * Visit a parse tree produced by the `showCatalogs`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowCatalogs?: (ctx: ShowCatalogsContext) => Result;

	/**
	 * Visit a parse tree produced by the `showColumns`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowColumns?: (ctx: ShowColumnsContext) => Result;

	/**
	 * Visit a parse tree produced by the `showFunctions`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowFunctions?: (ctx: ShowFunctionsContext) => Result;

	/**
	 * Visit a parse tree produced by the `showSession`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowSession?: (ctx: ShowSessionContext) => Result;

	/**
	 * Visit a parse tree produced by the `setSession`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetSession?: (ctx: SetSessionContext) => Result;

	/**
	 * Visit a parse tree produced by the `resetSession`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResetSession?: (ctx: ResetSessionContext) => Result;

	/**
	 * Visit a parse tree produced by the `startTransaction`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStartTransaction?: (ctx: StartTransactionContext) => Result;

	/**
	 * Visit a parse tree produced by the `commit`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommit?: (ctx: CommitContext) => Result;

	/**
	 * Visit a parse tree produced by the `rollback`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRollback?: (ctx: RollbackContext) => Result;

	/**
	 * Visit a parse tree produced by the `showPartitions`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowPartitions?: (ctx: ShowPartitionsContext) => Result;

	/**
	 * Visit a parse tree produced by the `prepare`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrepare?: (ctx: PrepareContext) => Result;

	/**
	 * Visit a parse tree produced by the `deallocate`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeallocate?: (ctx: DeallocateContext) => Result;

	/**
	 * Visit a parse tree produced by the `execute`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecute?: (ctx: ExecuteContext) => Result;

	/**
	 * Visit a parse tree produced by the `describeInput`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescribeInput?: (ctx: DescribeInputContext) => Result;

	/**
	 * Visit a parse tree produced by the `describeOutput`
	 * labeled alternative in `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescribeOutput?: (ctx: DescribeOutputContext) => Result;

	/**
	 * Visit a parse tree produced by the `timeZoneInterval`
	 * labeled alternative in `SqlBaseParser.timeZoneSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeZoneInterval?: (ctx: TimeZoneIntervalContext) => Result;

	/**
	 * Visit a parse tree produced by the `timeZoneString`
	 * labeled alternative in `SqlBaseParser.timeZoneSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeZoneString?: (ctx: TimeZoneStringContext) => Result;

	/**
	 * Visit a parse tree produced by the `queryPrimaryDefault`
	 * labeled alternative in `SqlBaseParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryPrimaryDefault?: (ctx: QueryPrimaryDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by the `table`
	 * labeled alternative in `SqlBaseParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTable?: (ctx: TableContext) => Result;

	/**
	 * Visit a parse tree produced by the `inlineTable`
	 * labeled alternative in `SqlBaseParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineTable?: (ctx: InlineTableContext) => Result;

	/**
	 * Visit a parse tree produced by the `subquery`
	 * labeled alternative in `SqlBaseParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubquery?: (ctx: SubqueryContext) => Result;

	/**
	 * Visit a parse tree produced by the `nullLiteral`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullLiteral?: (ctx: NullLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `intervalLiteral`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalLiteral?: (ctx: IntervalLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeConstructor`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeConstructor?: (ctx: TypeConstructorContext) => Result;

	/**
	 * Visit a parse tree produced by the `numericLiteral`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericLiteral?: (ctx: NumericLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `booleanLiteral`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanLiteral?: (ctx: BooleanLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `stringLiteral`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `binaryLiteral`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryLiteral?: (ctx: BinaryLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `parameter`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter?: (ctx: ParameterContext) => Result;

	/**
	 * Visit a parse tree produced by the `position`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPosition?: (ctx: PositionContext) => Result;

	/**
	 * Visit a parse tree produced by the `implicitRowConstructor`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplicitRowConstructor?: (ctx: ImplicitRowConstructorContext) => Result;

	/**
	 * Visit a parse tree produced by the `rowConstructor`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowConstructor?: (ctx: RowConstructorContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionCall`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by the `lambda`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambda?: (ctx: LambdaContext) => Result;

	/**
	 * Visit a parse tree produced by the `subqueryExpression`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubqueryExpression?: (ctx: SubqueryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `exists`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExists?: (ctx: ExistsContext) => Result;

	/**
	 * Visit a parse tree produced by the `simpleCase`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleCase?: (ctx: SimpleCaseContext) => Result;

	/**
	 * Visit a parse tree produced by the `searchedCase`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSearchedCase?: (ctx: SearchedCaseContext) => Result;

	/**
	 * Visit a parse tree produced by the `cast`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCast?: (ctx: CastContext) => Result;

	/**
	 * Visit a parse tree produced by the `arrayConstructor`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayConstructor?: (ctx: ArrayConstructorContext) => Result;

	/**
	 * Visit a parse tree produced by the `subscript`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubscript?: (ctx: SubscriptContext) => Result;

	/**
	 * Visit a parse tree produced by the `columnReference`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnReference?: (ctx: ColumnReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by the `dereference`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDereference?: (ctx: DereferenceContext) => Result;

	/**
	 * Visit a parse tree produced by the `specialDateTimeFunction`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecialDateTimeFunction?: (ctx: SpecialDateTimeFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `substring`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubstring?: (ctx: SubstringContext) => Result;

	/**
	 * Visit a parse tree produced by the `normalize`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNormalize?: (ctx: NormalizeContext) => Result;

	/**
	 * Visit a parse tree produced by the `extract`
	 * labeled alternative in `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtract?: (ctx: ExtractContext) => Result;

	/**
	 * Visit a parse tree produced by the `isolationLevel`
	 * labeled alternative in `SqlBaseParser.transactionMode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIsolationLevel?: (ctx: IsolationLevelContext) => Result;

	/**
	 * Visit a parse tree produced by the `transactionAccessMode`
	 * labeled alternative in `SqlBaseParser.transactionMode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransactionAccessMode?: (ctx: TransactionAccessModeContext) => Result;

	/**
	 * Visit a parse tree produced by the `selectSingle`
	 * labeled alternative in `SqlBaseParser.selectItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectSingle?: (ctx: SelectSingleContext) => Result;

	/**
	 * Visit a parse tree produced by the `selectAll`
	 * labeled alternative in `SqlBaseParser.selectItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectAll?: (ctx: SelectAllContext) => Result;

	/**
	 * Visit a parse tree produced by the `booleanDefault`
	 * labeled alternative in `SqlBaseParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanDefault?: (ctx: BooleanDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by the `logicalNot`
	 * labeled alternative in `SqlBaseParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalNot?: (ctx: LogicalNotContext) => Result;

	/**
	 * Visit a parse tree produced by the `logicalBinary`
	 * labeled alternative in `SqlBaseParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalBinary?: (ctx: LogicalBinaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `positionalArgument`
	 * labeled alternative in `SqlBaseParser.callArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPositionalArgument?: (ctx: PositionalArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by the `namedArgument`
	 * labeled alternative in `SqlBaseParser.callArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedArgument?: (ctx: NamedArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.multiStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiStatement?: (ctx: MultiStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.singleStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleStatement?: (ctx: SingleStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleExpression?: (ctx: SingleExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.query`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuery?: (ctx: QueryContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.presto_with`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPresto_with?: (ctx: Presto_withContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.tableElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableElement?: (ctx: TableElementContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.columnDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnDefinition?: (ctx: ColumnDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.likeClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLikeClause?: (ctx: LikeClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.tableProperties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableProperties?: (ctx: TablePropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.tableProperty`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableProperty?: (ctx: TablePropertyContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.queryNoWith`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryNoWith?: (ctx: QueryNoWithContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.queryTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryTerm?: (ctx: QueryTermContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.queryPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryPrimary?: (ctx: QueryPrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.sortItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSortItem?: (ctx: SortItemContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.querySpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuerySpecification?: (ctx: QuerySpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.groupBy`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupBy?: (ctx: GroupByContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.groupingElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupingElement?: (ctx: GroupingElementContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.groupingExpressions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupingExpressions?: (ctx: GroupingExpressionsContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.groupingSet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupingSet?: (ctx: GroupingSetContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.namedQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedQuery?: (ctx: NamedQueryContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.setQuantifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetQuantifier?: (ctx: SetQuantifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.selectItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectItem?: (ctx: SelectItemContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.relation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelation?: (ctx: RelationContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.joinType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinType?: (ctx: JoinTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.joinCriteria`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinCriteria?: (ctx: JoinCriteriaContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.sampledRelation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSampledRelation?: (ctx: SampledRelationContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.sampleType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSampleType?: (ctx: SampleTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.aliasedRelation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAliasedRelation?: (ctx: AliasedRelationContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.columnAliases`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnAliases?: (ctx: ColumnAliasesContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.relationPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationPrimary?: (ctx: RelationPrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanExpression?: (ctx: BooleanExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.predicated`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicated?: (ctx: PredicatedContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicate?: (ctx: PredicateContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueExpression?: (ctx: ValueExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.timeZoneSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeZoneSpecifier?: (ctx: TimeZoneSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.comparisonOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonOperator?: (ctx: ComparisonOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.comparisonQuantifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonQuantifier?: (ctx: ComparisonQuantifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.booleanValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanValue?: (ctx: BooleanValueContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.interval`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterval?: (ctx: IntervalContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.intervalField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalField?: (ctx: IntervalFieldContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.typeParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameter?: (ctx: TypeParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.baseType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBaseType?: (ctx: BaseTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.whenClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhenClause?: (ctx: WhenClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.filter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFilter?: (ctx: FilterContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.over`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOver?: (ctx: OverContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.windowFrame`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindowFrame?: (ctx: WindowFrameContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.frameBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrameBound?: (ctx: FrameBoundContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.explainOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplainOption?: (ctx: ExplainOptionContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.transactionMode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransactionMode?: (ctx: TransactionModeContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.levelOfIsolation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLevelOfIsolation?: (ctx: LevelOfIsolationContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.callArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallArgument?: (ctx: CallArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.privilege`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrivilege?: (ctx: PrivilegeContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.qualifiedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedName?: (ctx: QualifiedNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.quotedIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuotedIdentifier?: (ctx: QuotedIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.nonReserved`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonReserved?: (ctx: NonReservedContext) => Result;

	/**
	 * Visit a parse tree produced by `SqlBaseParser.normalForm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNormalForm?: (ctx: NormalFormContext) => Result;
}

