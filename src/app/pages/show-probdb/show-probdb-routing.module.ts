import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowProbdbPage } from './show-probdb.page';

const routes: Routes = [
  {
    path: '',
    component: ShowProbdbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowProbdbPageRoutingModule {}
