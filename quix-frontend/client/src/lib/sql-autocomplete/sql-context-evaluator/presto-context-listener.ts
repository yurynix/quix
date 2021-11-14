import {
  SqlBaseListener,
  SqlBaseParser,
} from '../../language-parsers/presto-grammar';
import { ContextType } from './types';

export class PrestoContextListener extends SqlBaseListener {
  private identifier: string;
  private nodeFound: any;
  private contextType: ContextType;
  private insidePrestoWithFlag: boolean;
  private missingJoin: boolean = false;
  private missingBy: boolean = false;
  private readonly fromAfterSelectErrorCase: boolean = false;
  private readonly withNodes: any[] = [];

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
    return (this.nodeFound && this.contextType) ?? ContextType.Keywords;
  }

  getQuerySpecificationNode() {
    let currentNode = this.nodeFound;
    let querySpecificationNode: any;

    while (currentNode && !querySpecificationNode) {
      switch (currentNode.ruleIndex) {
        case SqlBaseParser.RULE_querySpecification:
          querySpecificationNode = currentNode;
          break;
        case SqlBaseParser.RULE_queryNoWith:
          querySpecificationNode = currentNode
            .queryTerm()
            .queryPrimary()
            .querySpecification();
          break;
        default:
          currentNode = currentNode.parentCtx;
      }
    }

    return querySpecificationNode;
  }

  enterUnquotedIdentifier(ctx: any) {
    if (ctx.getText() === this.identifier) {
      this.nodeFound = ctx;

      if (this.insidePrestoWithFlag) {
        this.withNodes.pop();
      }
    }
  }

  enterQuerySpecification(ctx: any) {
    if (!this.nodeFound){
      console.log(ctx);
    }
  }

  enterColumnReference(ctx: any) {
    if (!this.nodeFound && !this.missingBy) {
      this.contextType = ContextType.Column;
    }
  }

  exitColumnReference(ctx: any) {
    if (!this.nodeFound) {
      this.contextType = ContextType.Keywords;
    }

    this.missingBy = false;
  }

  enterSelectSingle(ctx: any) {
    if (!this.nodeFound && !this.fromAfterSelectErrorCase) {
      this.contextType = ContextType.Column;
    }
  }

  exitSelectSingle(ctx: any) {
    if (!this.nodeFound) {
      this.contextType = ContextType.Keywords;
    } else if (ctx.parentCtx.children.length === 2) {
      this.contextType = ContextType.Keywords;
    }
  }

  enterJoinCriteria(ctx: any) {
    if (!this.nodeFound) {
      this.contextType = ContextType.Column;
    }
  }

  exitJoinCriteria(ctx: any) {
    if (!this.nodeFound) {
      this.contextType = ContextType.Keywords;
    }
  }

  enterJoinType(ctx: any) {
    if (!this.nodeFound) {
      this.missingJoin = this.missingChildrenExists(
        ctx.parentCtx,
        SqlBaseParser.JOIN
      );
    }
  }

  enterGroupBy(ctx: any) {
    if (!this.nodeFound) {
      this.missingBy = this.missingChildrenExists(
        ctx.parentCtx,
        SqlBaseParser.BY
      );
    }
  }

  enterSortItem(ctx: any) {
    if (!this.nodeFound) {
      this.missingBy = this.missingChildrenExists(
        ctx.parentCtx,
        SqlBaseParser.BY
      );
    }
  }

  enterTableName(ctx: any) {
    if (!this.nodeFound && !this.missingJoin) {
      this.contextType = ContextType.Table;
    }
  }

  exitTableName(ctx: any) {
    if (!this.nodeFound) {
      this.contextType = ContextType.Keywords;
    }

    this.missingJoin = false;
  }

  enterPresto_with(ctx: any) {
    this.insidePrestoWithFlag = true;
  }

  exitPresto_with(ctx: any) {
    this.insidePrestoWithFlag = false;
  }

  enterNamedQuery(ctx: any) {
    if (this.insidePrestoWithFlag) {
      this.withNodes.push(ctx);
    }
  }

  missingChildrenExists(ctx: any, symbolType: any) {
    return (
      ctx.children.find(
        (child: any) =>
          child
            .getText()
            .toLowerCase()
            .indexOf('missing') !== -1 && child.symbol.type === symbolType
      ) !== undefined
    );
  }
}
