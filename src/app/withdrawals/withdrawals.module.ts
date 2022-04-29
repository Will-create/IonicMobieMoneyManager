import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { WithdrawalsPageRoutingModule } from './withdrawals-routing.module';

import { WithdrawalsPage } from './withdrawals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    WithdrawalsPageRoutingModule
  ],
  declarations: [WithdrawalsPage]
})
export class WithdrawalsPageModule {}
