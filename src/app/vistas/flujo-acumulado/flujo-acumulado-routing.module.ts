import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlujoAcumuladoPage } from './flujo-acumulado.page';

const routes: Routes = [
  {
    path: '',
    component: FlujoAcumuladoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlujoAcumuladoPageRoutingModule {}
