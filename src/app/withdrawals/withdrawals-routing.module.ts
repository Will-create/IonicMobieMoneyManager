import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WithdrawalsPage } from './withdrawals.page';

const routes: Routes = [
  {
    path: '',
    component: WithdrawalsPage
  },
  {
    path: 'shortforms',
    loadChildren: () => import('./shortforms/shortforms.module').then( m => m.ShortformsPageModule)
  },
  {
    path: 'longforms',
    loadChildren: () => import('./longforms/longforms.module').then( m => m.LongformsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WithdrawalsPageRoutingModule {}
