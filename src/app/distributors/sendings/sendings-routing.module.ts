import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendingsPage } from './sendings.page';

const routes: Routes = [
  {
    path: '',
    component: SendingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendingsPageRoutingModule {}
