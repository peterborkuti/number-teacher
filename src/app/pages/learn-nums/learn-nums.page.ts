import { Component, ViewChild } from '@angular/core';
import { ProbdbService } from 'src/app/services/core/probdb.service';
import { TeacherComponent } from './teacher/teacher.component';

@Component({
  selector: 'app-learn-nums',
  templateUrl: './learn-nums.page.html',
  styleUrls: ['./learn-nums.page.scss'],
})
export class LearnNumsPage {
  @ViewChild(TeacherComponent) teacherComponent: TeacherComponent;

  constructor(private service: ProbdbService) {}

  ionViewDidEnter() {
    this.teacherComponent && this.teacherComponent.newQuestion();
  }

}
