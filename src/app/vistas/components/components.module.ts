import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsumosComponent } from './insumos/insumos.component';
import { MaterialModule } from '../../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CapitalComponent } from './capital/capital.component';



@NgModule({
  declarations: [InsumosComponent, CapitalComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports:[InsumosComponent, CapitalComponent]
})
export class ComponentsModule { }
