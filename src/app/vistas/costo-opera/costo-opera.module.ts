import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CostoOperaPageRoutingModule } from './costo-opera-routing.module';

import { CostoOperaPage } from './costo-opera.page';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule,
    CostoOperaPageRoutingModule,
   ReactiveFormsModule
  ],
  declarations: [CostoOperaPage]
})
export class CostoOperaPageModule {}
