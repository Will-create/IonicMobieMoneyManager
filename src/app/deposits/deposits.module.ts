import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { DepositsPageRoutingModule } from './deposits-routing.module';

import { DepositsPage } from './deposits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    DepositsPageRoutingModule
  ],
  declarations: [DepositsPage]
})
export class DepositsPageModule {}
