import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowProbdbPage } from './show-probdb.page';

describe('ShowProbdbPage', () => {
  let component: ShowProbdbPage;
  let fixture: ComponentFixture<ShowProbdbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowProbdbPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowProbdbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
