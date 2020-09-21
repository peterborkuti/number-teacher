import { Component, OnInit, ViewChild } from '@angular/core';
import { ProbdbService } from 'src/app/services/core/probdb.service';
import { AnswerCheckerService } from 'src/app/services/core/answer-checker.service';
import { ASpeech } from 'src/app/services/speech.service';
import { HintService, HintManager } from 'src/app/services/hint.service';
import { IonInput } from '@ionic/angular';


@Component({
  selector: 'teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss'],
})
export class TeacherComponent implements OnInit {
  @ViewChild('numberInput') numberInput: IonInput;

  question: string;
  answer: string;
  score = 100;

  wrongAnswer = true;
  answerIsEmpty = true;

  hint = '';

  private hintManager: HintManager;

  constructor(
    private probdbService: ProbdbService,
    private answerChecker: AnswerCheckerService,
    private speechService: ASpeech,
    private hintService: HintService) { }

  ngOnInit() {
    this.newQuestion();
  }

  newQuestion() {
    this.score = this.probdbService.getScore();
    const digits = this.probdbService.getNumberToAsk();
    this.question = digits.join('');
    this.answer = '';
    this.wrongAnswer = false;

    this.say(this.question);

    this.hintManager = this.hintService.newHint(this.question);
    this.hint = this.hintManager.getHint();

    setTimeout(() => this.numberInput.setFocus(), 0);
  }

  checkAnswer() {
    if (this.wrongAnswer) {
      this.newQuestion();

      return;
    }

    const checked = this.answerChecker.check(this.question, ''+this.answer);
    checked.bads.forEach(c => this.probdbService.bad(c.exp, c.digit));
    checked.goods.forEach(c => this.probdbService.good(c.exp, c.digit));

    this.wrongAnswer = checked.bads.length > 0;

    if (!this.wrongAnswer) {
      this.newQuestion();
    }

  }

  inputChanged(value: string) {
    this.answerIsEmpty = !value || value == ''; 
  }

  say(what: string) {
    this.speechService.say(what);
  }

  showHint() {
    this.hint = this.hintManager.nextHint();
  }
}
