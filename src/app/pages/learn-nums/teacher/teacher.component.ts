import { Component, OnInit } from '@angular/core';
import { ProbdbService } from 'src/app/services/core/probdb.service';
import { AnswerCheckerService } from 'src/app/services/core/answer-checker.service';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { ASpeech } from 'src/app/services/speech.service';

@Component({
  selector: 'teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss'],
})
export class TeacherComponent implements OnInit {

  question: string;
  answer: string;
  probs: number[][] = [[]]

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
    this.probs = this.probdbService.getProbabilities();

    this.speechService.say(this.question);
  }

  checkAnswer() {
    const checked = this.answerChecker.check(this.question, ''+this.answer);
    checked.bads.forEach(c => this.probdbService.bad(c.exp, c.digit));
    checked.goods.forEach(c => this.probdbService.good(c.exp, c.digit));

    this.generateQuestion();
  }

  say() {
    this.speechService.say(this.question);
  }
}
