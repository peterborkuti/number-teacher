import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';

import { LearnNumsPage } from './learn-nums.page';

describe('LearnNumsPage', () => {
  const storageName = '_' + Math.random();

  let component: LearnNumsPage;
  let fixture: ComponentFixture<LearnNumsPage>;

  let storage: Storage;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnNumsPage ],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        IonicStorageModule.forRoot({
          name: storageName,
          driverOrder: ['localstorage']
        })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LearnNumsPage);
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
