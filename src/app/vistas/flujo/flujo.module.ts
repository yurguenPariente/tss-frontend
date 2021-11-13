import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlujoPageRoutingModule } from './flujo-routing.module';




import { FlujoPage } from './flujo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlujoPageRoutingModule
  
    
    
  ],
  declarations: [FlujoPage]
})
export class FlujoPageModule {}
