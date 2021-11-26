import { Component, OnInit } from '@angular/core';
import {CapitalOperativo, CapitalO, Efectivo, CapitalInversion, Presupuesto } from '../../interfaces/capital';
import { SimulacionService } from '../services/simulacion.service';

@Component({
  selector: 'app-pres-total',
  templateUrl: './pres-total.page.html',
  styleUrls: ['./pres-total.page.scss'],
})
export class PresTotalPage implements OnInit {

  apFlag: boolean = false;
  piFlag: boolean = false;
  pres: Presupuesto;
  apPropio: number = 0;
  apInv: number = 0;

  constructor(private simulacionService: SimulacionService) { }

  ngOnInit() {
    this.getDatosPresupuesto();
    this.calcularTotalPropio();
    this.calcularTotalInvertido();
  }


  getDatosPresupuesto(){
    this.pres = JSON.parse(localStorage.getItem('presupuesto'));
    console.log(this.pres);
  }

  calcularTotalPropio(){
    this.apPropio = this.pres.efectivo.total + this.pres.capitalOperativo.manoObra.detalles[0].aporte + this.pres.capitalOperativo.operativos.totalPropio +
      this.pres.capitalOperativo.prima.totalPropio + this.pres.capitalOperativo.promocion.totalPropio + this.pres.capitalInversion.infraestructura.totalPropio
      +this.pres.capitalInversion.legales.totalPropio + this.pres.capitalInversion.maquinaria.totalPropio;
  }

  calcularTotalInvertido(){
    this.apInv = this.pres.capitalOperativo.manoObra.totalInvertido + this.pres.capitalOperativo.operativos.totalInvertido +
    this.pres.capitalOperativo.prima.totalInvertido + this.pres.capitalOperativo.promocion.totalInvertido + this.pres.capitalInversion.infraestructura.totalInvertido
    +this.pres.capitalInversion.legales.totalInvertido + this.pres.capitalInversion.maquinaria.totalInvertido;
  }
  procentajeApPropio(){
    return Math.round(this.apPropio/(this.apInv + this.apPropio - this.pres.efectivo.total)*100);
  }

  detallesAporte(){
    this.apFlag = !this.apFlag;
    console.log(this.apFlag);
  }
  detallesInv(){
    this.piFlag = !this.piFlag;
    console.log(this.piFlag);
  }
  sumar(){
    const inver = this.apInv + this.apPropio - this.pres.efectivo.total;
    localStorage.setItem('inver',inver.toString());
    localStorage.setItem('monto',(this.apInv - this.pres.efectivo.total).toString());
  }

}
