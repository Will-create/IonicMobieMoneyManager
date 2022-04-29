import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {TranslateModule} from '@ngx-translate/core'
import { IonicModule } from '@ionic/angular';

import { ShortformsPageRoutingModule } from './shortforms-routing.module';

import { ShortformsPage } from './shortforms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ReactiveFormsModule,
    ShortformsPageRoutingModule
  ],
  declarations: [ShortformsPage]
})
export class ShortformsPageModule {}
