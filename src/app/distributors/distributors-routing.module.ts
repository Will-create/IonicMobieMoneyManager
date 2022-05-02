import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistributorsPage } from './distributors.page';

const routes: Routes = [
  {
    path: '',
    component: DistributorsPage
  },
  {
    path: 'sendings',
    loadChildren: () => import('./sendings/sendings.module').then( m => m.SendingsPageModule)
  },
  {
    path: 'receivings',
    loadChildren: () => import('./receivings/receivings.module').then( m => m.ReceivingsPageModule)
  },
  {
    path: 'pending',
    loadChildren: () => import('./pending/pending.module').then( m => m.PendingPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DistributorsPageRoutingModule {}
