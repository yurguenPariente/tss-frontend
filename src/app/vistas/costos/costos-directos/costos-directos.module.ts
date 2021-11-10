import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CostosDirectosPageRoutingModule } from './costos-directos-routing.module';

import { CostosDirectosPage } from './costos-directos.page';
import { MaterialModule } from '../../../material/material.module';
import { VistasPageModule } from '../../vistas.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CostosDirectosPageRoutingModule,
    MaterialModule
  ],
  declarations: [CostosDirectosPage]
})
export class CostosDirectosPageModule {}
