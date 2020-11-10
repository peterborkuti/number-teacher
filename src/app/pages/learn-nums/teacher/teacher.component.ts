import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ProbdbService } from 'src/app/services/core/probdb.service';
import { AnswerCheckerService } from 'src/app/services/core/answer-checker.service';
import { ASpeech } from 'src/app/services/speech.service';
import { HintService, HintFunction } from 'src/app/services/hint.service';
import { IonInput } from '@ionic/angular';


@Component({
  selector: 'teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss'],
})
export class TeacherComponent {
  @ViewChild('numberInput') numberInput: IonInput;

  question: string;
  answer: string;

  wrongAnswer = false;
  answerIsEmpty = true;

  hint = '';

  hintFunction: HintFunction;

  constructor(
    public probdbService: ProbdbService,
    private answerChecker: AnswerCheckerService,
    private speechService: ASpeech,
    private hintService: HintService) { }

  public newQuestion() {
    const digits = this.probdbService.getNumberToAsk();
    this.question = digits.join('');
    this.answer = '';
    this.wrongAnswer = false;

    this.say(this.question);

    this.hintFunction = this.hintService.newHint(this.question);
    this.hint = "?".repeat(this.question.length);

    setTimeout(() => this.numberInput.setFocus(), 0);
  }

  checkAnswer() {
    const checked = this.answerChecker.check(this.question, ''+this.answer);
    checked.bads.forEach(c => this.probdbService.bad(c.exp, c.digit));
    checked.goods.forEach(c => this.probdbService.good(c.exp, c.digit));

    this.wrongAnswer = checked.bads.length > 0;

    if (!this.wrongAnswer) {
      this.newQuestion();
    }
    else {
      this.hint = this.question;
    }
  }

  inputChanged(value: string) {
    this.answerIsEmpty = !value || value == ''; 
  }

  say(what: string) {
    this.speechService.say(what);
  }

  showHint() {
    this.hint = this.hintFunction();
  }
}
