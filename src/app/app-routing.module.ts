import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  }, 
  {
    path:'',
    redirectTo:'vistas',
    pathMatch: 'full'
  },
  {
    path: 'vistas',
    loadChildren: () => import('./vistas/vistas.module').then( m => m.VistasPageModule)
  },
  {
    path: 'detalles',
    loadChildren: () => import('./vistas/detallers-proyecto/detallers-proyecto.module').then( m => m.DetallersProyectoPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
