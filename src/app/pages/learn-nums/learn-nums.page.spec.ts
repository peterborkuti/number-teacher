import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { LearnNumsPage } from './learn-nums.page';
import { Component } from '@angular/core';
import { ProbdbService } from 'src/app/services/core/probdb.service';
import { of } from 'rxjs';
import { TeacherComponent } from './teacher/teacher.component';


@Component({selector: 'teacher', template: ''})
class TeacherStubComponent{
  newQuestion() {}
}

describe('LearnNumsPage', () => {
  let component: LearnNumsPage;
  let teacherComponent = new TeacherStubComponent();
  let fixture: ComponentFixture<LearnNumsPage>;
  let probdbService: ProbdbService = <ProbdbService>{
    watchName: () => of('PROBDBNAME')
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherStubComponent, LearnNumsPage ],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
      ],
      providers: [
        {provide: ProbdbService, useValue: probdbService},
        {provide: TeacherComponent, useValue: teacherComponent}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LearnNumsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows probdb name as icon-title', () => {
    const title: HTMLElement = fixture.nativeElement.querySelector('ion-title');
    expect(title.textContent).toContain('PROBDBNAME');
  })

  it('generates new question after page load', () => {
    //should be truthy
    component.teacherComponent = TestBed.inject(TeacherComponent);
    spyOn(teacherComponent, 'newQuestion');

    component.ionViewDidEnter();

    expect(teacherComponent.newQuestion).toHaveBeenCalled();
  })
});
