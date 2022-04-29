import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { LocalitesPageRoutingModule } from './localites-routing.module';
import {Ng2SearchPipeModule} from 'ng2-search-filter'
import { LocalitesPage } from './localites.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    Ng2SearchPipeModule,
    LocalitesPageRoutingModule
  ],
  declarations: [LocalitesPage]
})
export class LocalitesPageModule {}
