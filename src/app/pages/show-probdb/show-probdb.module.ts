import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowProbdbPageRoutingModule } from './show-probdb-routing.module';

import { ShowProbdbPage } from './show-probdb.page';
import { ComponentsModule } from '../components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ShowProbdbPageRoutingModule
  ],
  declarations: [ShowProbdbPage]
})
export class ShowProbdbPageModule {}
