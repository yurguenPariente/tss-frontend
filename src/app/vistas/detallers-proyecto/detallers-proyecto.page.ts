import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detallers-proyecto',
  templateUrl: './detallers-proyecto.page.html',
  styleUrls: ['./detallers-proyecto.page.scss'],
})
export class DetallersProyectoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  guardarDatos(nom: HTMLInputElement, rep: HTMLInputElement, dir: HTMLInputElement, nit: HTMLInputElement) {
    console.log("Nombre del proyecto: "+nom.value+" , representante legal: "+rep.value+" ,direccion: "+dir.value+" ,NIT: "+nit.value);    
  }
}
