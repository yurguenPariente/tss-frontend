import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsumosComponent } from './insumos/insumos.component';
import { MaterialModule } from '../../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [InsumosComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports:[InsumosComponent]
})
export class ComponentsModule { }
