import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresTotalPageRoutingModule } from './pres-total-routing.module';

import { PresTotalPage } from './pres-total.page';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresTotalPageRoutingModule,
    MaterialModule
  ],
  declarations: [PresTotalPage]
})
export class PresTotalPageModule {}
