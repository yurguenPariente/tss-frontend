import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresTotalPage } from './pres-total.page';

const routes: Routes = [
  {
    path: '',
    component: PresTotalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresTotalPageRoutingModule {}
