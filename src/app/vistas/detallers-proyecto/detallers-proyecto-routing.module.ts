import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallersProyectoPage } from './detallers-proyecto.page';

const routes: Routes = [
  {
    path: '',
    component: DetallersProyectoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallersProyectoPageRoutingModule {}
