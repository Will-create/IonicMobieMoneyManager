import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
 
import { IonicModule } from '@ionic/angular';

import { StatementPageRoutingModule } from './statement-routing.module';

import { StatementPage } from './statement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,  
    StatementPageRoutingModule
  ],
  declarations: [StatementPage]
})
export class StatementPageModule {}
