import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpeechSettingsComponent } from './speech-settings.component';
import { ASpeech, DummySpeech } from 'src/app/services/speech.service';

describe('SpeechSettingsComponent', () => {
  let component: SpeechSettingsComponent;
  let fixture: ComponentFixture<SpeechSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeechSettingsComponent ],
      imports: [IonicModule.forRoot()],
      providers: [
        {provide: ASpeech, useValue: new DummySpeech()}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SpeechSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
