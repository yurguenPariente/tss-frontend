import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistasPage } from './vistas.page';

const routes: Routes = [
  {
    path: '',
    component: VistasPage
  },
  {
    path: 'detalles',
    loadChildren: () => import('./detallers-proyecto/detallers-proyecto.module').then( m => m.DetallersProyectoPageModule)
  },
  {
    path: 'costos',
    loadChildren: () => import('./costos/costos.module').then( m => m.CostosPageModule)
  },
  {
    path:'**',
    redirectTo:'detalles'
  },  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistasPageRoutingModule {}
