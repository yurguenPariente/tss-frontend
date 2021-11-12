import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CostosPageRoutingModule } from './costos-routing.module';

import { CostosPage } from './costos.page';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CostosPageRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [CostosPage]

})
export class CostosPageModule {}
