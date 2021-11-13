import { Injectable } from '@angular/core';
import { Detalle, CapitalOperativo } from '../../interfaces/capital';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {
  manoObra: Detalle[]=[];
  prima:Detalle[]=[];
  promocion:Detalle[]=[];
  operativos:Detalle[]=[];
  capOperativo:CapitalOperativo = {
    manoObra:[],
    promocion:[],
    prima:[],
    operativos:[],
    total:0
  }
  constructor() { }

  guardarLocal(){
    this.capOperativo = {
      manoObra:this.manoObra,
      promocion:this.promocion,
      prima:this.prima,
      operativos:this.operativos,
      total:0
    }
    const dato = JSON.stringify(this.capOperativo)
    localStorage.setItem('prueba',dato)
  }
}
