import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepositsPage } from './deposits.page';

const routes: Routes = [
  {
    path: '',
    component: DepositsPage
  },
  {
    path: 'shortforms',
    loadChildren: () => import('./shortforms/shortforms.module').then( m => m.ShortformsPageModule)
  },
  {
    path: 'longforms',
    loadChildren: () => import('./longforms/longforms.module').then( m => m.LongformsPageModule)
  },
  {
    path: 'pending',
    loadChildren: () => import('./pending/pending.module').then( m => m.PendingPageModule)
  },
  {
    path: 'success',
    loadChildren: () => import('./success/success.module').then( m => m.SuccessPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepositsPageRoutingModule {}
