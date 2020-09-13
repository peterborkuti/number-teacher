import { Component, OnInit } from '@angular/core';
import { ProbdbService } from 'src/app/services/core/probdb.service';
import { AnswerCheckerService } from 'src/app/services/core/answer-checker.service';

@Component({
  selector: 'teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss'],
})
export class TeacherComponent implements OnInit {

  question: string;
  answer: string;
  probs: number[][] = [[]]

  constructor(private probdbService: ProbdbService, private answerChecker: AnswerCheckerService) { }

  ngOnInit() {
    this.generateQuestion();
  }

  generateQuestion() {
    const digits = this.probdbService.getNumberToAsk();
    this.question = digits.join('');
    this.answer = '';
    this.probs = this.probdbService.getProbabilities();
  }

  checkAnswer() {
    const checked = this.answerChecker.check(this.question, ''+this.answer);
    checked.bads.forEach(c => this.probdbService.bad(c.exp, c.digit));
    checked.goods.forEach(c => this.probdbService.good(c.exp, c.digit));

    this.generateQuestion();
  }
}
