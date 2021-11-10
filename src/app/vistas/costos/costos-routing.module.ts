import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CostosPage } from './costos.page';

const routes: Routes = [
  {
    path: '',
    component: CostosPage
  },
  {
    path: 'costos-directos',
    loadChildren: () => import('./costos-directos/costos-directos.module').then( m => m.CostosDirectosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CostosPageRoutingModule {}
