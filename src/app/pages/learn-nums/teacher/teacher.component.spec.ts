import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeacherComponent } from './teacher.component';
import { DummySpeech, ASpeech } from 'src/app/services/speech.service';

describe('TeacherComponent', () => {
  let component: TeacherComponent;
  let fixture: ComponentFixture<TeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherComponent ],
      imports: [IonicModule.forRoot()],
      providers: [
        {provide: ASpeech, useValue: new DummySpeech()}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
