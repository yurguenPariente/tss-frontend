import { Injectable } from '@angular/core';
import { Label } from 'ng2-charts';

import { irr } from 'financial'
@Injectable({
  providedIn: 'root'
})
export class SimulacionService {
  array: number[] = [];
  ite: Label[] = [];
  constructor() { }

  

  
  van2(inicial,interes,flujoA){
    let van = -inicial;
    const monto = Number(localStorage.getItem('monto'));
    for(let i=0; i<36 ; i++){
      van += (flujoA/12) / Math.pow(1+(interes/12),i+1);
    }
    return van-monto;
  }
  randomA(){
    const arreglo = [3,11,13,19,21,27,29,37,53,59,61,67,69,77,83,91];
    const random = Math.floor(Math.random() * (16 - 0) + 0);
    return arreglo[random];
    
  }
  randomXo(){
    const random = Math.floor(Math.random() * (70 - 20) + 20);
    return random%2===0? random+1: random;
  }
  
  simularNuevo2(a: number, b:number, c:number){
    let xo = this.randomXo();
    let xo2 = this.randomXo();
    const al = this.randomA();
    const al2 = this.randomA();
    const m = 100;
    let xi = 0;
    let xi2 =0;
    let res = 0;
    const comparativa = (c-a)/(b-a);
    let r = 0;
    let r2 = 0;
    for(let i=0; i< 12; i++){
      xi = (al*xo) % m;
      xi2 = (al2*xo2) % m;
      r2 = xi2 / (m-1);
      r = xi / (m-1);
      xo = xi;
      xo2 = xi2;
      if(r <= comparativa){
        res += a + (c-a)*Math.sqrt(r2);
      }else{
        res += b-((b-c)*Math.sqrt(1-r2));
      }
  }
  return res;
}
 

  tir(flujoA){
    
    const monto = Number(localStorage.getItem('monto'));
    const flujos: number[] = [];
    
    if(monto){
      flujos.push(-monto);
      //flujos.push(-150970);
      for(let i=0; i<36 ; i++){
        flujos.push(flujoA/12);
        //flujos.push(5062);
      }
      // Uso irr(flujos[])
      // Primer valor es la inversion inicial
      // los demas valores son los flujos totales (Ganancias - Gastos)
      //console.log("TIR: "+(irr(flujos)*100).toFixed(2)+"%");
      //console.log(flujos)
      return ((irr(flujos)*100*12).toFixed(2));
    }
    
    
  }

  
}
