import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LongformsPage } from './longforms.page';

const routes: Routes = [
  {
    path: '',
    component: LongformsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LongformsPageRoutingModule {}
