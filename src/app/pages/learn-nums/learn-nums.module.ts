import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearnNumsPageRoutingModule } from './learn-nums-routing.module';

import { LearnNumsPage } from './learn-nums.page';
import { TeacherComponent } from './teacher/teacher.component';
import { ComponentsModule } from '../components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    LearnNumsPageRoutingModule
  ],
  declarations: [LearnNumsPage, TeacherComponent]
})
export class LearnNumsPageModule {}
