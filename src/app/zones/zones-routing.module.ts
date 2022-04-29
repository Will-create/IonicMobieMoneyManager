import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZonesPage } from './zones.page';

const routes: Routes = [
  {
    path: '',
    component: ZonesPage
  },
  {
    path: 'zones/details/:id/',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZonesPageRoutingModule {}
