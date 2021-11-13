import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CostoOperaPageRoutingModule } from './costo-opera-routing.module';

import { CostoOperaPage } from './costo-opera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CostoOperaPageRoutingModule,
   // ReactiveFormsModule
  ],
  declarations: [CostoOperaPage]
})
export class CostoOperaPageModule {}
