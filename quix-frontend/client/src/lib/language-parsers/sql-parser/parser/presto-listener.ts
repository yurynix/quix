import { ParserRuleContext } from 'antlr4ts';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { SqlBaseListener } from '../../presto-grammar-ts';
import {
  AliasedRelationContext,
  ColumnReferenceContext,
  DereferenceContext,
  NamedQueryContext,
  SelectSingleContext,
  StringLiteralContext,
  TableNameContext,
  TypeConstructorContext,
} from '../../presto-grammar-ts/lang/presto/SqlBaseParser';
// import { ContextNode, Terminal } from './types';

export class PrestoListener implements SqlBaseListener {
  private readonly strings: Set<string> = new Set();
  private readonly tables: Set<string> = new Set();
  private readonly columns: Set<string> = new Set();
  private readonly subQueries: Set<string> = new Set();
  private readonly tableAlias: Set<string> = new Set();

  private allowColumnReference = true;

  parseResults() {
    const strings = [...this.strings];
    const columns = [...this.columns];
    const subQueries = [...this.subQueries];
    for (const sq of subQueries) {
      this.tables.delete(sq);
    }
    const tables = [...this.tables];
    const tableAlias = [...this.tableAlias];

    return { strings, tables, columns, subQueries, tableAlias };
  }

  enterStringLiteral(ctx: StringLiteralContext) {
    this.strings.add(ctx.text);
  }

  // enterStringLiteral(ctx: ContextNode & { children: [Terminal] }) {
  //   this.strings.add(ctx.children[0].symbol.text);
  // }

  enterTableName(ctx: TableNameContext) {
    this.tables.add(ctx.qualifiedName().text);
  }

  // enterTableName(ctx: ContextNode) {
  //   this.tables.add((ctx as any).qualifiedName().getText());
  // }

  enterColumnReference(ctx: ColumnReferenceContext) {
    if (this.allowColumnReference) {
      this.columns.add(ctx.start.text);
    }
  }

  // enterColumnReference(ctx: ContextNode) {
  //   if (this.allowColumnReference) {
  //     this.columns.add(ctx.start.text);
  //   }
  // }

  enterDereference(ctx: DereferenceContext) {
    this.columns.add(ctx.text);
    this.allowColumnReference = false;
  }

  // enterDereference(ctx: ContextNode) {
  //   this.columns.add((ctx as any).getText());
  //   this.allowColumnReference = false;
  // }

  exitDereference(ctx: DereferenceContext) {
    this.allowColumnReference = true;
  }

  // exitDereference(ctx: ContextNode) {
  //   this.allowColumnReference = true;
  // }

  enterNamedQuery(ctx: NamedQueryContext) {
    this.subQueries.add(ctx.identifier().text);
  }

  // enterNamedQuery(ctx: ContextNode) {
  //   this.subQueries.add((ctx as any).identifier().getText());
  // }

  enterAliasedRelation(ctx: AliasedRelationContext) {
    if (ctx._alias) {
      this.tableAlias.add(ctx._alias.text);
    }
  }

  // enterAliasedRelation(ctx: any) {
  //   if (ctx.alias) {
  //     this.tableAlias.add(ctx.alias.getText());
  //   }
  // }

  enterSelectSingle(ctx: SelectSingleContext) {
    const identifier = ctx.identifier();
    if (identifier) {
      this.columns.add(identifier.text);
    }
  }

  // enterSelectSingle(ctx: any) {
  //   const identifier = ctx.identifier();
  //   if (identifier) {
  //     this.columns.add(identifier.getText());
  //   }
  // }

  enterTypeConstructor(ctx: TypeConstructorContext) {
    this.strings.add(ctx.STRING().text);
  }

  // enterTypeConstructor(ctx: any) {
  //   this.strings.add(ctx.STRING().getText());
  // }

  visitTerminal?: (/*@NotNull*/ node: TerminalNode) => void;
  visitErrorNode?: (/*@NotNull*/ node: ErrorNode) => void;
  enterEveryRule?: (/*@NotNull*/ ctx: ParserRuleContext) => void;
  exitEveryRule?: (/*@NotNull*/ ctx: ParserRuleContext) => void;
}
