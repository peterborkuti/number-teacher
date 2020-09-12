import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearnNumsPage } from './learn-nums.page';

const routes: Routes = [
  {
    path: '',
    component: LearnNumsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearnNumsPageRoutingModule {}
