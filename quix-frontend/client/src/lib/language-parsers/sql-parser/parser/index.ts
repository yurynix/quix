import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { SqlBaseParser } from '../../presto-grammar-ts';
import { createTokenizer } from '../tokenizer/index';
import { PrestoListener } from './presto-listener';
import { PrestoErrorListener } from './errors-listener';
import { MultiStatementContext } from '../../presto-grammar-ts/lang/presto/SqlBaseParser';

export const createParser = (input: string): SqlBaseParser => {
  const tokenStream = createTokenizer(input);
  return new SqlBaseParser(tokenStream);
};

export const createPrestoSyntaxTree = (input: string): MultiStatementContext => {
  const parser = createParser(input);
  parser.removeErrorListeners();
  return parser.multiStatement();
};

export const parsePrestoSql = (input: string) => {
  const tree = createPrestoSyntaxTree(input);
  const prestoListener = new PrestoListener();
  ParseTreeWalker.DEFAULT.walk(prestoListener, tree);
  return prestoListener.parseResults();
};

export const getErrorsPrestoSql = (input: string) => {
  const parser = createParser(input);
  const listener = new PrestoErrorListener();
  parser.removeErrorListeners();
  parser.addErrorListener(listener);
  parser.multiStatement();
  return listener.getErrors();
};
