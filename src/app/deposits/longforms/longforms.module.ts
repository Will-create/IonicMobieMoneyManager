import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LongformsPageRoutingModule } from './longforms-routing.module';

import { LongformsPage } from './longforms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LongformsPageRoutingModule
  ],
  declarations: [LongformsPage]
})
export class LongformsPageModule {}
