import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearnNumsPageRoutingModule } from './learn-nums-routing.module';

import { LearnNumsPage } from './learn-nums.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearnNumsPageRoutingModule
  ],
  declarations: [LearnNumsPage]
})
export class LearnNumsPageModule {}
