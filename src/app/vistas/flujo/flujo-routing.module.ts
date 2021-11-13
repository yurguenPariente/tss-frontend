import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlujoPage } from './flujo.page';

const routes: Routes = [
  {
    path: '',
    component: FlujoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlujoPageRoutingModule {}
