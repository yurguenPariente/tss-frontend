import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CostosDirectosPageRoutingModule } from './costos-directos-routing.module';
import { CostosDirectosPage } from './costos-directos.page';
import { MaterialModule } from '../../../material/material.module';
import { CostosPageModule } from '../costos.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CostosDirectosPageRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [CostosDirectosPage]
})
export class CostosDirectosPageModule {}
