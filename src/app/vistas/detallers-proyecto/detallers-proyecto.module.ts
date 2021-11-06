import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallersProyectoPageRoutingModule } from './detallers-proyecto-routing.module';

import { DetallersProyectoPage } from './detallers-proyecto.page';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallersProyectoPageRoutingModule,
    MaterialModule
  ],
  declarations: [DetallersProyectoPage]
})
export class DetallersProyectoPageModule {}
