
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
    path: 'pres-total',
    loadChildren: () => import('./pres-total/pres-total.module').then( m => m.PresTotalPageModule)
  },
  {
    path: 'presupuesto',
    loadChildren: () => import('./presupuesto/presupuesto.module').then( m => m.PresupuestoPageModule)
  },
    path: 'flujo',
    loadChildren: () => import('./flujo/flujo.module').then( m => m.FlujoPageModule)
  },
  {
    path: 'costo-opera',
    loadChildren: () => import('./costo-opera/costo-opera.module').then( m => m.CostoOperaPageModule)
  },  
  {
    path: 'simulacion',
    loadChildren: () => import('./simulacion/simulacion.module').then( m => m.SimulacionPageModule)
  },
  {
    path:'**',
    redirectTo:'detalles'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistasPageRoutingModule {}
