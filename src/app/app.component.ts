import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/vistas', icon:'home'},
    { title: 'Detalles de la empresa', url: '/vistas/detalles', icon: 'mail' },
    { title: 'Presupuesto', url: '/vistas/presupuesto', icon: 'warning' },
    { title: 'Costos', url: '/vistas/costos', icon: 'paper-plane' },
    { title: 'Costos Directos', url: '/vistas/costos/costos-directos', icon: 'heart' },
    { title: 'Flujo', url: '/vistas/flujo/' },
    { title: 'Costos Opertaivos', url: '/vistas/costo-opera/' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  constructor() {}
}
