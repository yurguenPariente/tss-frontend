import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CostosDirectosPage } from './costos-directos.page';

const routes: Routes = [
  {
    path: '',
    component: CostosDirectosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CostosDirectosPageRoutingModule {}
