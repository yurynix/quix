import { TokensMap } from './tokensMap';
import { SqlBaseLexer } from '../../presto-grammar-ts';
import { last, mapValues } from 'lodash';
import { CommonToken } from '../types/index';
import { CharStreams, CommonTokenStream } from 'antlr4ts';

export const createTokenizer = (input: string) => {
  const stream = CharStreams.fromString(input);
  const lexer = new SqlBaseLexer(stream);
  const tokenizer = new CommonTokenStream(lexer);
  return tokenizer;
};

const generateTokens = (tokenizer: any) => {
  do {
    tokenizer.consume();
  } while (last<any>(tokenizer.tokens).type !== -1);

  return tokenizer.tokens as CommonToken[];
};

export function tokenize(input: string) {
  const tokenizer = createTokenizer(input);
  return generateTokens(tokenizer);
}

export interface GetIdentifersResult {
  identifiers: string[];
  strings: string[];
}

const TokenTypeToPropNameMap = new Map<TokensMap, keyof GetIdentifersResult>([
  [TokensMap.IDENTIFIER, 'identifiers'],
  [TokensMap.STRING, 'strings'],
]);

export function getIdentifiers(tokens: CommonToken[]): GetIdentifersResult {
  const res = { identifiers: {}, strings: {} };

  tokens.forEach((token) => {
    const prop = TokenTypeToPropNameMap.get(token.type);

    if (prop) {
      res[prop][token.text] = true;
    }
  });

  return mapValues(res, (t) => Object.keys(t)) as any;
}
