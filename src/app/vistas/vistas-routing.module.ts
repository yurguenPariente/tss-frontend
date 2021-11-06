import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistasPage } from './vistas.page';

const routes: Routes = [
  {
    path: '',
    component: VistasPage
  },  {
    path: 'detallers-proyecto',
    loadChildren: () => import('./detallers-proyecto/detallers-proyecto.module').then( m => m.DetallersProyectoPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistasPageRoutingModule {}
