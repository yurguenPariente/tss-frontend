import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlujoAcumuladoPageRoutingModule } from './flujo-acumulado-routing.module';

import { FlujoAcumuladoPage } from './flujo-acumulado.page';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FlujoAcumuladoPageRoutingModule,
    MaterialModule
  ],
  declarations: [FlujoAcumuladoPage]
})
export class FlujoAcumuladoPageModule {}
