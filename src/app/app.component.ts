import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/vistas', icon:'home'},
    { title: 'Detalles de la empresa', url: '/vistas/detalles', icon: 'share' },
    { title: 'Presupuesto', url: '/vistas/presupuesto', icon: 'heart' },
    { title: 'Costos', url: '/vistas/costos', icon: 'flag' },
    { title: 'Costos Directos', url: '/vistas/costos/costos-directos', icon: 'send' },
    //{ title: 'Flujo', url: '/vistas/flujo/', icon:'laptop' },
    { title: 'Flujo', url: '/vistas/flujo-acumulado/', icon:'laptop' },
    { title: 'Costos Operativos', url: '/vistas/costo-opera/', icon:'business' },
  ];
  constructor() {}
}
