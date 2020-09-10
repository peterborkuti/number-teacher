import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowProbdbPageRoutingModule } from './show-probdb-routing.module';

import { ShowProbdbPage } from './show-probdb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowProbdbPageRoutingModule
  ],
  declarations: [ShowProbdbPage]
})
export class ShowProbdbPageModule {}
