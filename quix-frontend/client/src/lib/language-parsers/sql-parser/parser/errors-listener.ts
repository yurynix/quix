import { CommonToken } from 'antlr4ts';
import { ANTLRErrorListener } from 'antlr4ts/ANTLRErrorListener';

export interface IErrorAnnotation {
  row: number;
  column: number;
  text: string;
  type: string;
}

export class PrestoErrorListener implements ANTLRErrorListener<CommonToken> {
  private readonly annotations: IErrorAnnotation[] = [];

  getErrors = () => this.annotations;

  syntaxError(
    recognizer: any,
    offendingSymbol: any,
    line: number,
    charPositionInLine: number,
    msg: string,
    e: any
  ) {
    this.annotations.push({
      row: line - 1,
      column: charPositionInLine,
      text: msg,
      type: 'error',
    });
  }
}
