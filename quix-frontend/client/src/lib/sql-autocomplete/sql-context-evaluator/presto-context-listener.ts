import { ParserRuleContext } from 'antlr4ts';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import {
  SqlBaseListener,
  SqlBaseParser,
} from '../../language-parsers/presto-grammar-ts';
import {
  ColumnReferenceContext,
  JoinCriteriaContext,
  NamedQueryContext,
  Presto_withContext,
  QueryNoWithContext,
  QueryPrimaryDefaultContext,
  QuerySpecificationContext,
  QueryTermDefaultContext,
  SelectSingleContext,
  TableNameContext,
  UnquotedIdentifierContext,
} from '../../language-parsers/presto-grammar-ts/lang/presto/SqlBaseParser';
import { ContextType } from './types';

export class PrestoContextListener implements SqlBaseListener {
  private identifier: string;
  private nodeFound: UnquotedIdentifierContext;
  private contextType: ContextType;
  private insidePrestoWithFlag: boolean;
  private readonly withNodes: NamedQueryContext[] = [];

  setIdentifier(value: string) {
    this.identifier = value;
  }

  getWithNodes() {
    return this.withNodes;
  }

  getNodeFound() {
    return this.nodeFound;
  }

  getContextType() {
    return (this.nodeFound && this.contextType) ?? ContextType.Undefined;
  }

  getQuerySpecificationNode() {
    let currentNode: ParserRuleContext = this.nodeFound;
    let querySpecificationNode: QuerySpecificationContext;

    while (currentNode && !querySpecificationNode) {
      switch (currentNode.ruleIndex) {
        case SqlBaseParser.RULE_querySpecification:
          querySpecificationNode = currentNode as QuerySpecificationContext;
          break;
        case SqlBaseParser.RULE_queryNoWith:
          const queryTerm = (currentNode as QueryNoWithContext).queryTerm();
          const queryPrimary = (queryTerm as QueryTermDefaultContext).queryPrimary();
          querySpecificationNode = (queryPrimary as QueryPrimaryDefaultContext).querySpecification();
          break;
        default:
          currentNode = currentNode.parent;
      }
    }

    return querySpecificationNode;
  }

  enterUnquotedIdentifier(ctx: UnquotedIdentifierContext) {
    if (ctx.text === this.identifier) {
      this.nodeFound = ctx;

      if (this.insidePrestoWithFlag) {
        this.withNodes.pop();
      }
    }
  }

  enterColumnReference(ctx: ColumnReferenceContext) {
    if (!this.nodeFound) {
      this.contextType = ContextType.Column;
    }
  }

  enterSelectSingle(ctx: SelectSingleContext) {
    if (!this.nodeFound) {
      this.contextType = ContextType.Column;
    }
  }

  enterJoinCriteria(ctx: JoinCriteriaContext) {
    if (!this.nodeFound) {
      this.contextType = ContextType.Column;
    }
  }

  enterTableName(ctx: TableNameContext) {
    if (!this.nodeFound) {
      this.contextType = ContextType.Table;
    }
  }

  enterPresto_with(ctx: Presto_withContext) {
    this.insidePrestoWithFlag = true;
  }

  exitPresto_with(ctx: Presto_withContext) {
    this.insidePrestoWithFlag = false;
  }

  enterNamedQuery(ctx: NamedQueryContext) {
    if (this.insidePrestoWithFlag) {
      this.withNodes.push(ctx);
    }
  }

  visitTerminal?: (/*@NotNull*/ node: TerminalNode) => void;
  visitErrorNode?: (/*@NotNull*/ node: ErrorNode) => void;
  enterEveryRule?: (/*@NotNull*/ ctx: ParserRuleContext) => void;
  exitEveryRule?: (/*@NotNull*/ ctx: ParserRuleContext) => void;
}
