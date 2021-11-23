import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SimulacionPageRoutingModule } from './simulacion-routing.module';
import { SimulacionPage } from './simulacion.page';
import { MaterialModule } from 'src/app/material/material.module';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SimulacionPageRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    ChartsModule

  ],
  declarations: [SimulacionPage]
})
export class SimulacionPageModule {}
