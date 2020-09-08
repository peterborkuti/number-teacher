import { Injectable } from '@angular/core';
import { CheckedAnswer } from './checked-answers';

@Injectable({
  providedIn: 'root'
})
export class AnswerCheckerService {

  constructor() { }

  check(question: string, answer: string) {
    if (answer.length == question.length) {
      return this.checkSameLength(question, answer);
    }
    else if (answer.length < question.length) {
      return this.checkDifferentLength(question, answer);
    }
    else {
      return this.checkDifferentLength(answer, question);
    }
  }

  checkDifferentLength(longer: string, shorter: string) {
    const checked = this.checkSameLength(longer.substr(-(shorter.length)), shorter);

    const badAnswer = longer.substring(0, longer.length - shorter.length);
    const bads = badAnswer.split('').map((c,i) => ({digit: +c, exp: longer.length - i - 1}));

    checked.bads = checked.bads.concat(bads);

    return checked;
  }

  checkSameLength(question: string, answer: string):
    {goods: CheckedAnswer[], bads:CheckedAnswer[]}
  {
    const maxExponent = question.length - 1;
    const qas = question.split('').map((c,i) => ({q: +c, a: +(answer[i]), exponent: maxExponent - i}));
    const goods = qas.filter(qa => qa.a == qa.q).map(qa => ({digit: qa.a, exp: qa.exponent}));
    const badPairs = qas.filter(qa => qa.a != qa.q)
      .map(qa => ([
        {digit: qa.a, exp: qa.exponent},
        {digit: qa.q, exp: qa.exponent}]));
    const bads = [].concat(...badPairs); //flattening

    return {goods: goods, bads: bads};
  }
}
