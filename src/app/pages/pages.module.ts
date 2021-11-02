import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PagesRoutingModule } from './pages-routing.module';
import { MaterialModule } from '../material/material.module';
import { InicioComponent } from './inicio/inicio.component';



@NgModule({
  declarations: [InicioComponent],
  imports: [
    CommonModule,
    MaterialModule,
    IonicModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
