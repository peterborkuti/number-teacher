import { Component, OnInit } from '@angular/core';
import { ProbdbService } from 'src/app/services/core/probdb.service';
import { AnswerCheckerService } from 'src/app/services/core/answer-checker.service';
import { ASpeech } from 'src/app/services/speech.service';

export function indexesInRandomOrder(n: number) {
  return Array(n).fill(0).map((v,i) => i).map(i => [Math.random(), i]).sort().map(i => i[1]);
}

@Component({
  selector: 'teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss'],
})
export class TeacherComponent implements OnInit {

  question: string;
  answer: string;

  wrongAnswer = true;

  hint = '';
  private hintIndexesIndex = 0;
  private hintIndexes: number[];

  constructor(
    private probdbService: ProbdbService,
    private answerChecker: AnswerCheckerService,
    private speechService: ASpeech) { }

  ngOnInit() {
    this.generateQuestion();
  }

  generateQuestion() {
    const digits = this.probdbService.getNumberToAsk();
    this.question = digits.join('');
    this.answer = '';
    this.wrongAnswer = false;

    this.speechService.say(this.question);
    this.hint = Array(this.question.length).fill('?').join('');
    this.hintIndexesIndex = 0;
    this.hintIndexes = indexesInRandomOrder(this.question.length);
  }

  checkAnswer() {
    if (this.wrongAnswer) {
      this.generateQuestion();

      return;
    }

    const checked = this.answerChecker.check(this.question, ''+this.answer);
    checked.bads.forEach(c => this.probdbService.bad(c.exp, c.digit));
    checked.goods.forEach(c => this.probdbService.good(c.exp, c.digit));

    this.wrongAnswer = checked.bads.length > 0;

    if (!this.wrongAnswer) {
      this.generateQuestion();
    }

  }

  sayQuestion() {
    this.speechService.say(this.question);
  }

  sayAnswer() {
    this.speechService.say(this.answer);
  }

  showHint() {
    const hint = Array(this.question.length).fill('?');

    const hintIndex = this.hintIndexes[this.hintIndexesIndex];
    this.hintIndexesIndex = (this.hintIndexesIndex >= this.hintIndexes.length - 1) ? 0 : this.hintIndexesIndex + 1;

    hint[hintIndex] = this.question[hintIndex];
    this.hint = hint.join('');
  }
}
