import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearnNumsPageRoutingModule } from './learn-nums-routing.module';

import { LearnNumsPage } from './learn-nums.page';
import { TeacherComponent } from './teacher/teacher.component';
import { ProbdbMapComponent } from '../show-probdb/probdb-map/probdb-map.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearnNumsPageRoutingModule
  ],
  declarations: [LearnNumsPage, TeacherComponent, ProbdbMapComponent]
})
export class LearnNumsPageModule {}
