import { Injectable } from '@angular/core';
import {CapitalOperativo, CapitalO, Efectivo, CapitalInversion, Presupuesto } from '../../interfaces/capital';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {
  manoObra: CapitalO={detalles:[],totalPropio:0,totalInvertido:0};
  prima: CapitalO={detalles:[],totalPropio:0,totalInvertido:0};
  promocion: CapitalO={detalles:[],totalPropio:0,totalInvertido:0};
  operativos: CapitalO={detalles:[],totalPropio:0,totalInvertido:0};
  infraestructura: CapitalO = {detalles:[],totalPropio:0,totalInvertido:0};
  maquinaria: CapitalO = {detalles:[],totalPropio:0,totalInvertido:0};
  legales: CapitalO = {detalles:[],totalPropio:0,totalInvertido:0};
  efectivo: Efectivo = {detalle:[], total:0};

  capOperativo:CapitalOperativo = {
    manoObra:this.manoObra,
    promocion:this.promocion,
    prima:this.prima,
    operativos: this.operativos,
  }

  capInversion: CapitalInversion = {
    infraestructura: this.infraestructura,
    legales: this.legales,
    maquinaria:this.maquinaria
  }

  presupuesto: Presupuesto = {
    efectivo: this.efectivo,
    capitalInversion:this.capInversion,
    capitalOperativo: this.capOperativo
  }

  constructor() { }

  guardarLocal(){
    this.sumarEfectivo();
    this.sumar(this.prima);
    this.sumar(this.promocion);
    this.sumar(this.operativos);
    this.sumar(this.infraestructura);
    this.sumar(this.maquinaria);
    this.sumar(this.legales);
    const dato = JSON.stringify(this.presupuesto)
    localStorage.setItem('presupuesto',dato)
  }

  sumar(tipo: CapitalO){
    let totalA: number = 0;
    let totalI: number = 0;
    for(let {aporte,inversion} of tipo.detalles){
      totalA += aporte;
      totalI += inversion;
    }
    tipo.totalInvertido = totalI;
    tipo.totalPropio = totalA;
  }

  sumarEfectivo(){
    let total:number = 0;
    for(let {aporte} of this.efectivo.detalle){
      total += aporte;
    }
    this.efectivo.total = total;
  }
}
