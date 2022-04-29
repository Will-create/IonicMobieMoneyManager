import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { ZonesPageRoutingModule } from './zones-routing.module';
import {Ng2SearchPipeModule}  from 'ng2-search-filter'
import { ZonesPage } from './zones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    Ng2SearchPipeModule,
    ZonesPageRoutingModule
  ],
  declarations: [ZonesPage]
})
export class ZonesPageModule {}
