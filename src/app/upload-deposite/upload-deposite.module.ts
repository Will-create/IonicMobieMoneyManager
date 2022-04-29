import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
 
import { IonicModule } from '@ionic/angular';

import { UploadDepositePageRoutingModule } from './upload-deposite-routing.module';

import { UploadDepositePage } from './upload-deposite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,   
    UploadDepositePageRoutingModule
  ],
  declarations: [UploadDepositePage]
})
export class UploadDepositePageModule {}
 