import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeacherComponent } from './teacher.component';
import { ASpeech } from 'src/app/services/speech.service';
import { FormsModule } from '@angular/forms';
import { ProbdbService } from 'src/app/services/core/probdb.service';
import { AnswerCheckerService } from 'src/app/services/core/answer-checker.service';
import { of } from 'rxjs';
import { HintService } from 'src/app/services/hint.service';
import { CheckedAnswer } from 'src/app/services/core/checked-answers';
import { By } from '@angular/platform-browser';



describe('TeacherComponent', () => {
  const QUESTION = '12345';
  let component: TeacherComponent;
  let fixture: ComponentFixture<TeacherComponent>;
  const speechService =  <ASpeech>{
    say: (a,b) => void(0)
  };
  const probdbService = <ProbdbService>{
    getNumberToAsk: () => QUESTION.split('').map(c => +c),
    watchScore: () => of(0),
    bad: (exp: number, digit: number) => void(0),
    good: (exp: number, digit: number) => void(0)
  };
  const answerCheckerService = <AnswerCheckerService><unknown>{
    check: (question: string, answer: string) => ({goods: [], bads: []})
  };

  const hintService = <HintService>{
    newHint: (question) => () => 'HINT'
  }

  const getButton = (name='hint'): HTMLButtonElement =>
    fixture.nativeElement.querySelector(`ion-button[name="${name}"]`);

  const getInput = (): HTMLInputElement =>
    fixture.nativeElement.querySelector('input');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherComponent ],
      imports: [IonicModule.forRoot(), FormsModule],
      providers: [
        {provide: ASpeech, useValue: speechService},
        {provide: ProbdbService, useValue: probdbService},
        {provide: AnswerCheckerService, useValue: answerCheckerService},
        {provide: HintService, useValue: hintService}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  describe('Basics', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('empties answer on newQuestion', () => {
      component.answer ='ANYVALUE';
      component.newQuestion();
      expect(component.answer).toBe('');
    })

    it('newQuestion calls probdbservice.getNumberToAsk, says this number and creates an appropriate hint', () => {
      spyOn(speechService, 'say');
      spyOn(hintService, 'newHint').and.callThrough();

      component.newQuestion();

      expect(component.question).toBe(QUESTION);
      expect(speechService.say).toHaveBeenCalledWith(QUESTION);
      expect(hintService.newHint).toHaveBeenCalledWith(QUESTION);
    })

    it('focused the input field after newQuestion', fakeAsync(() => {
      component.newQuestion();
      tick();
      fixture.detectChanges();
      tick();

      const input = getInput();
      const focused = fixture.debugElement.query(By.css(':focus'));
      if (focused == null) {
        pending('Browser window should be focused for this test.');
      }
      else {
        expect(focused.nativeElement).toBe(input);
      }
    }))
  })

  describe('Hint', () => {
    it('sets hint to ?...? on newQuestion and button is enabled', () => {
      const hintButton = getButton();
      expect(hintButton.textContent).toBe('');

      component.newQuestion();
      fixture.detectChanges();

      expect(hintButton).not.toBeNull();
      expect(hintButton.disabled).toBeFalsy();
      expect(hintButton.textContent).toBe("?".repeat(QUESTION.length));
    })

    it('shows hint when user clicks on hint button', () => {
      const hintButton = getButton();
      expect(hintButton.textContent).toBe('');
      expect(component.hint).toBe('')

      component.newQuestion();
      component.showHint();

      fixture.detectChanges();

      expect(hintButton.textContent).toContain('HINT');
    })


  })

  describe('SayQuestionButton', () => {
    it('says question when user clicks on say button', () => {
      const hintButton = getButton('say');
      spyOn(speechService, 'say');
      component.newQuestion();

      hintButton.click();
      fixture.detectChanges();

      expect(speechService.say).toHaveBeenCalledWith(QUESTION);
    })

  })

  const setUpAnswer = fakeAsync((answer: string) => {
    component.newQuestion();
    const input = getInput();

    input.valueAsNumber = +answer;

    input.dispatchEvent(new Event('input'));

    tick();

    fixture.detectChanges();

    const checkButton = getButton('check');
    checkButton.click();
    fixture.detectChanges();
  })

  describe('Answer', () => {
    it('shows answer on disabled hint button when answer is wrong', () => {
      component.newQuestion();
      fixture.detectChanges();
      const hintButton = getButton();

      spyOn(answerCheckerService, 'check').and.returnValue({goods: [], bads: [new CheckedAnswer()]});
      setUpAnswer('11111');

      expect(hintButton.textContent).toContain(QUESTION);
      expect(hintButton.disabled).toBeTruthy();
    })


    it('sayAnswer and new buttons are in DOM only after answer is wrong', () => {
      component.newQuestion();
      fixture.detectChanges();

      expect(getButton('sayAnswer')).toBeNull();
      expect(getButton('new')).toBeNull();

      spyOn(answerCheckerService, 'check').and.returnValue({goods: [], bads: [new CheckedAnswer()]});
      setUpAnswer('11111');

      expect(getButton('sayAnswer')).not.toBeNull();
      expect(getButton('new')).not.toBeNull();
    })

  })


});
