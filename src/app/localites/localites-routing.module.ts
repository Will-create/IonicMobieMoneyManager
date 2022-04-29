import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalitesPage } from './localites.page';

const routes: Routes = [
  {
    path: '',
    component: LocalitesPage
  },
  {
    path: 'localites/details/:id/',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalitesPageRoutingModule {}
