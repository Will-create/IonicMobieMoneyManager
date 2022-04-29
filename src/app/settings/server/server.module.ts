import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {TranslateModule} from '@ngx-translate/core';
import { ServerPageRoutingModule } from './server-routing.module';

import { ServerPage } from './server.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ReactiveFormsModule,
    ServerPageRoutingModule
  ],
  declarations: [ServerPage]
})
export class ServerPageModule {}
