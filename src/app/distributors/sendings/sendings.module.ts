import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendingsPageRoutingModule } from './sendings-routing.module';

import { SendingsPage } from './sendings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendingsPageRoutingModule
  ],
  declarations: [SendingsPage]
})
export class SendingsPageModule {}
