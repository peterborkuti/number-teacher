import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpeechSettingsComponent } from './speech-settings.component';
import { ASpeech, DummySpeech } from 'src/app/services/speech.service';
import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';

describe('SpeechSettingsComponent', () => {
  const storageName = '_' + Math.random();

  let component: SpeechSettingsComponent;
  let fixture: ComponentFixture<SpeechSettingsComponent>;
  let storage: Storage;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeechSettingsComponent ],
      imports: [
        IonicStorageModule.forRoot({
          name: storageName,
          driverOrder: ['localstorage']
        })
      ],
      providers: [
        {provide: ASpeech, useValue: new DummySpeech()}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SpeechSettingsComponent);
    storage = TestBed.inject(Storage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  afterEach((done) => {
    storage.clear().then(() => done());
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
