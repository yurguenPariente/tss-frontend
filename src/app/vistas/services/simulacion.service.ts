import { Injectable } from '@angular/core';
import { Label } from 'ng2-charts';
@Injectable({
  providedIn: 'root'
})
export class SimulacionService {
  array: number[] = [];
  ite: Label[] = [];
  constructor() { }

  simular(invInicial, gananciasPrimerAnho, sueldos, gastosGen) {
    var rentables = 0;
    var perdidas = 0;
    var flujos = new Array();
    var r = 0.0;
    var van = 0.0;
    for (let i = 0; i < 1000; i++) {
      var ganancias = gananciasPrimerAnho;
      var impuestos = ganancias/4;
      var salarios = sueldos;
      var gastosGenerales = gastosGen;

      for (let j = 0; j < 8; j++) {
        r = Math.random();

        flujos.push(ganancias-impuestos-salarios-gastosGenerales);

        ganancias = this.calculoIngresos(r,ganancias);
        impuestos = ganancias/4;
        salarios = this.calculoSalarios(r, salarios);
        gastosGenerales = this.calculoGastosGenerales(r, gastosGenerales);        
      }
      van += this.van(invInicial, flujos, 0.03)/1000;
      if (this.van(invInicial, flujos, 0.03) >= 0) {
        rentables++;
      } else {
        perdidas++;
      }
      
      flujos = [];
    }
    /*console.log("Despues de ejecutar la simulacion 1000 veces se obtuvo los siguientes resultados");
    console.log("Veces que el proyecto fue rentable: "+rentables+ "("+Math.ceil(rentables / 10)+"%).");
    console.log("Veces que el proyecto no fue rentable: "+perdidas+ "("+ Math.ceil(perdidas / 10)+"%).");*/

    /*return ("Veces que el proyecto fue rentable: "+rentables+ "("+Math.ceil(rentables / 10)+"%).")+  
    "Veces que el proyecto no fue rentable: "+perdidas+ "("+ Math.ceil(perdidas / 10)+"%).";*/
    return [van,rentables, Math.ceil(rentables / 10), perdidas, Math.ceil(perdidas / 10)];    
  }

  simularAnhosParaRentable(invInicial, gananciasPrimerAnho, sueldos, gastosGen) {
    var flujos = new Array();
    var r = 0.0;

    var anhosParaBeneficio = 0;
    var ganancias = gananciasPrimerAnho;
    var impuestos = ganancias/4;
    var salarios = sueldos;
    var gastosGenerales = gastosGen;
    var flag = true;

    while(flag) {
      r = Math.random();

      flujos.push(ganancias-impuestos-salarios-gastosGenerales);

      ganancias = this.calculoIngresos(r,ganancias);
      impuestos = ganancias/4;
      salarios = this.calculoSalarios(r, salarios);
      gastosGenerales = this.calculoGastosGenerales(r, gastosGenerales);     

      if (this.van(invInicial, flujos, 0.03) >= 0 || anhosParaBeneficio > 100) {
        flag = false;
      } 
      anhosParaBeneficio++;
    }
    return ("Se necesitan en promedio "+anhosParaBeneficio+" años para que el proyecto sea rentable")

  }

  calculoIngresos(r, ganancias){
    let res = 0.0;
    if (r < 0.759999){
      let raiz = Math.sqrt((4*r+0.000021754)/52631.57894);
      res = (2.0300+raiz)/(2)*ganancias; 
    } else {
      let raiz = Math.sqrt((Math.pow(340000,2)+(666666.66664*(-173399.00001-r)))); 
      res = (-340000+raiz)/(2*(-166666.66666))*ganancias;
    }
    return res;
  }

  calculoSalarios(r, salarios){
    let res = 0.0;
        if(r < 0.5){
            let raiz = Math.sqrt(Math.pow(-101000,2)-4*50000*(51005-r*10));
            res = (101000+raiz)/(2*50000)*salarios;
        } else {
            let raiz = Math.sqrt(Math.pow(103000,2)-4*(-50000)*(-53035-r*10));
            res = (-103000+raiz)/(2*-50000)*salarios;
        }
        //System.out.println("gastos salarios: "+res);
        return  res;
  }

  calculoGastosGenerales(r, gastosGenerales){
    let res = 0.0;
        if(r < 0.5){
            let raiz = (Math.sqrt(2)* Math.sqrt(r))/50;
            res = (2+raiz)/(2)*gastosGenerales;
        } else {
            let raiz = Math.sqrt(-20000*r+20000);
            res =  (-10200+raiz)/(2*-5000)*gastosGenerales;
        }
        //System.out.println("gastos generales: "+res);
        return res;
  }

  van(inicial, flujos, descuento) {
    var van = -inicial;
    for (let i = 0; i < flujos.length; i++) {
      van += flujos[i] / Math.pow(descuento + 1, i + 1);
    }
  
    return van;
  }

  van2(inicial,interes,flujoA){
    let van = -inicial;
    for(let i=0; i<36 ; i++){
      van += (flujoA/12) / Math.pow(1+(interes/12),i+1);
    }
    return van-150970;
  }

  simularNuevo(a: number, b:number, c:number):number{
    const comparativa = (c-a)/(b-a);
    let res = 0;
    for(let i=0; i< 12; i++){
      let r = Math.random();
      if(r <= comparativa){
        res += a + (c-a)*Math.sqrt(r);
      }else{
        res += b-((b-c)*Math.sqrt(1-r));
      }
    }
    return res;
  }

  hallarMedia(){

  }

  hallarDesviacion(){
    
  }

  normalizarDatos(){

  }
  
}
