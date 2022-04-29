import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core'
import { IonicModule } from '@ionic/angular';

import { PendingPageRoutingModule } from './pending-routing.module';

import { PendingPage } from './pending.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    PendingPageRoutingModule
  ],
  declarations: [PendingPage]
})
export class PendingPageModule {}
