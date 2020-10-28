import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule, NavController } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';

import { ShowProbdbPage } from './show-probdb.page';

describe('ShowProbdbPage', () => {
  const storageName = '_' + Math.random();

  let component: ShowProbdbPage;
  let fixture: ComponentFixture<ShowProbdbPage>;

  let storage: Storage;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowProbdbPage ],
      imports: [
        RouterTestingModule,
        IonicModule.forRoot(),
        IonicStorageModule.forRoot({
          name: storageName,
          driverOrder: ['localstorage']
        })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowProbdbPage);
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
