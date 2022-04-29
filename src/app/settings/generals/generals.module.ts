import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from '@ngx-translate/core'
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GeneralsPageRoutingModule } from './generals-routing.module';

import { GeneralsPage } from './generals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ReactiveFormsModule,
    GeneralsPageRoutingModule
  ],
  declarations: [GeneralsPage]
})
export class GeneralsPageModule {}
