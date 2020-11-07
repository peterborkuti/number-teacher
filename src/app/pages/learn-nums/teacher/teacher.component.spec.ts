import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeacherComponent } from './teacher.component';
import { ASpeech } from 'src/app/services/speech.service';
import { FormsModule } from '@angular/forms';
import { ProbdbService } from 'src/app/services/core/probdb.service';
import { AnswerCheckerService } from 'src/app/services/core/answer-checker.service';
import { of } from 'rxjs';

describe('TeacherComponent', () => {
  const QUESTION = '12345';
  let component: TeacherComponent;
  let fixture: ComponentFixture<TeacherComponent>;
  const speechService =  <ASpeech>{
    say: (a,b) => void(0)
  };
  const probdbService = <ProbdbService>{
    getNumberToAsk: () => QUESTION.split('').map(c => +c),
    watchScore: () => of(0)
  };
  const answerCheckerService = <AnswerCheckerService>{};


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherComponent ],
      imports: [IonicModule.forRoot(), FormsModule],
      providers: [
        {provide: ASpeech, useValue: speechService},
        {provide: ProbdbService, useValue: probdbService},
        {provide: AnswerCheckerService, useValue: answerCheckerService},
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('generates question on init', () => {
    component.ngOnInit();
    expect(component.question).toBe(QUESTION);
  })

  it('empties answer on init', () => {
    component.answer ='ANYVALUE';
    component.ngOnInit();
    expect(component.answer).toBe('');
  })

  it('sets hint on init', () => {
    component.hint ='ANYVALUE';
    component.ngOnInit();
    expect(component.hint).toBe(Array(QUESTION.length).fill('?').join(''));
  })

  it('shows ? and 1 digit as hint when user clicks on hint button', () => {
    component.ngOnInit();
    expect(component.hint).toBe(Array(QUESTION.length).fill('?').join(''));

    component.showHint();

    const hint = component.hint;
    const displayedDigits = hint.split('').map((d,i) => [d,i]).filter(di => di[0] !== '?');


    expect(displayedDigits.length).toBe(1);
    expect(hint.length).toBe(QUESTION.length);

    const [digit, index] = displayedDigits[0];
    expect(hint[index]).toBe(digit);
  })

});

