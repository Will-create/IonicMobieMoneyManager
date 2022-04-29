import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsPage } from './settings.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsPage
  },
  {
    path: 'generals',
    loadChildren: () => import('./generals/generals.module').then( m => m.GeneralsPageModule)
  },
  {
    path: 'server',
    loadChildren: () => import('./server/server.module').then( m => m.ServerPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsPageRoutingModule {}
