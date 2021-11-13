import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresupuestoPageRoutingModule } from './presupuesto-routing.module';

import { PresupuestoPage } from './presupuesto.page';
import { MaterialModule } from '../../material/material.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresupuestoPageRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    ComponentsModule
  ],
  declarations: [PresupuestoPage]
})
export class PresupuestoPageModule {}
