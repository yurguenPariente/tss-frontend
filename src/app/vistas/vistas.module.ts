import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistasPageRoutingModule } from './vistas-routing.module';

import { VistasPage } from './vistas.page';
import { MaterialModule } from '../material/material.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistasPageRoutingModule,
    MaterialModule
  ],
  declarations: [VistasPage],
 
})
export class VistasPageModule {}
