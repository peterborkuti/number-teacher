import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LearnNumsPage } from './learn-nums.page';

describe('LearnNumsPage', () => {
  let component: LearnNumsPage;
  let fixture: ComponentFixture<LearnNumsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnNumsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LearnNumsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
