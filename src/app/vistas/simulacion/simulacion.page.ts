import { Component, OnInit, AfterContentInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { PresupuestoService } from '../services/presupuesto.service';
import { SimulacionService } from '../services/simulacion.service';
import { PdfService } from '../services/pdf.service';
@Component({
  selector: 'app-simulacion',
  templateUrl: './simulacion.page.html',
  styleUrls: ['./simulacion.page.scss'],
})
export class SimulacionPage implements OnInit, AfterContentInit {
  datos:number[] = [];
  norma: number[] = [];
  arreglo:number[] = [];
  arreglo2:number[] = [];
  ingresos:number[] = [];
  costos: number [] = [];
  label:Label[] = [];
  van:number = 0;
  tirO:number = 0;
  labelTir: Label[] = [];
  iteraciones: Label[] = [];
  mediaTir: number;
  desviacionTir: number;
  tirs: number[] = [];
  normaTir: number [] = [];
  arregloTirs: number[] =[];
  exito:number = 0;
  fracaso: number = 0;
  media:number = 0;
  desviacion:number = 0;
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  public barChartData: ChartDataSets[] = [];
  public barChartData2: ChartDataSets[] =[];
  public barChartData4: ChartDataSets[] =[];
  public barChartLabels3: Label[] = [];
  public barChartLabels2: Label[] = [];
  public barChartLabels: Label[] = [];
  public barChartData3: ChartDataSets[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  titulo: string = "Resultados de la simulacion"

  
  constructor( private pdfService:PdfService,
    private simulacionService:SimulacionService) {
    
   }

  ngOnInit() {
    //this.cargarDatos();
    //this.getDatosPresupuesto();
  }

  descargarPdf(){
    this.pdfService.downloadPDF();
  }
  
  ngAfterContentInit(): void {
    this.norma = [-3.0,-2.9,-2.8,-2.7,-2.6,-2.5,-2.4,-2.3,-2.2,-2.1,-2.0,-1.9,-1.8,-1.7,-1.6,-1.5,-1.4,-1.3,-1.2,-1.1,-1.0,-0.9,-0.8,-0.7,-0.6,-0.5,-0.4,-0.3,-0.2,-0.1,0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0,1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9,2.0,2.1,2.2,2.3,2.4,2.5,2.6,2.7,2.8,2.9,3.0];
    this.simularVan();
    this.realizarNormalizacionDeDatos();
    this.realizarNormalizacionTir();
    this.barChartData = [
      { data: this.arreglo2, label: 'VAN' },
    ];
    this.barChartData2 = [
      {data: this.ingresos, label: 'Ingresos'}
    ];
    this.barChartData3 = [
      { data: this.costos, label:'Costos'}
    ];
    this.barChartData4 = [
      { data: this.arregloTirs, label:'TIR'}
    ];
    this.barChartLabels = this.label;
    this.barChartLabels2 = this.iteraciones;
    this.barChartLabels3 = this.labelTir;
  }


 
 
  
 

  
  calcularVan(): number{
    if(localStorage.getItem('ventasMes') && localStorage.getItem('costosAnual') && localStorage.getItem('CostoOp')){

      const total  = JSON.parse(localStorage.getItem('ventasMes')).total;
      const costosA  = Number(localStorage.getItem('costosAnual'));
      const totalGas  = JSON.parse(localStorage.getItem('CostoOp')).total;
      //this.calcularTir(total, costosA,totalGas);
      const van = this.simulacionService.van2(0,0.1150,(total-costosA)-((totalGas)*12)-60361);
      this.van = van;
      return van;
    }
  }
  calcularTir(){ 
    if(localStorage.getItem('ventasMes') && localStorage.getItem('costosAnual') && localStorage.getItem('CostoOp')){
      const total  = JSON.parse(localStorage.getItem('ventasMes')).total;
      const costosA  = Number(localStorage.getItem('costosAnual'));
      const totalGas  = JSON.parse(localStorage.getItem('CostoOp')).total;   
      //this.tir = this.simulacionService.tir((total-costosA)-((totalGas-1000)*12)-60361);      
      const tir = this.simulacionService.tir((total-costosA)-((totalGas)*12)-60361);
      this.tirO = Number(tir);
      return tir;
    }   
    // El primer valor es la inversion inicial 
  }
 
  simularVan(){
    if(localStorage.getItem('ventasMes') && localStorage.getItem('costosAnual') && localStorage.getItem('CostoOp')){

      const {alta,media,baja} = JSON.parse(localStorage.getItem('ventasMes'));
      const totalGas  = JSON.parse(localStorage.getItem('CostoOp')).total;
      const costosA  = Number(localStorage.getItem('costosAnual'));
      for(let i=0; i<1000;i++){
        let ingresos = this.simulacionService.simularNuevo2(Number(baja),Number(alta),Number(media));
        let costos = this.simulacionService.simularNuevo2(536,1072,804);
        let simu = this.simulacionService.van2(0,0.1150,(ingresos-costos)-((totalGas)*12)-60361);
        let tir = this.simulacionService.tir((ingresos-costos)-((totalGas)*12)-60361);
        this.tirs.push(Number(tir));
        this.ingresos.push(ingresos);
        this.costos.push(costos);
        this.iteraciones.push(`${i+1}`);
        this.datos.push(simu);
        if(simu > 0){
          this.exito ++;
        }else{ 
          this.fracaso ++;
        }
      }   
    }
  }

  hallarMedia(arreglo:number[]):number{
    let suma = 0;
    for(let dato of arreglo){
      suma += dato;
    }
    return suma/arreglo.length;
  }


  hallarDesviacion(arreglo:number[]):number{
    let res = 0;
    const media = this.hallarMedia(arreglo);
    for(let dato of arreglo){
      res += Math.pow(dato - media,2);
    }
      return Math.sqrt(res/(arreglo.length));
  }



  crearDatos(media:number, desviacion:number,arreglo:number[]){
    for(let i=0; i<this.norma.length;i++){
      if(i === 0){
        arreglo.push((media+(this.norma[i]*desviacion)));
      }else{
        arreglo.push(arreglo[i-1]+(desviacion/10))
      }
    }    
  }
  
  normalizarDatos(arreglo:number[],media:number,desviacion:number,arregloG:number[]){
    const e = 2.7182818284590452354;
    const pi = 3.14159265358979323846;
    for(let dato of arreglo){
      let normal = (1/(Math.sqrt(2*pi)*desviacion))*Math.pow(e,-((Math.pow(dato-media,2)/(2*desviacion*desviacion))));
      arregloG.push(normal);
    }
    //console.log('normalizardatos',this.arreglo2);
  }
  convertirDatosenLabel(arreglo:number[],arregloG:Label[]){
    for(let dato of arreglo){
      arregloG.push(`${dato}`);
    }
   // console.log('labe',this.label)
  }
  
  realizarNormalizacionDeDatos(){
    this.media = this.hallarMedia(this.datos);
    this.desviacion = this.hallarDesviacion(this.datos);
    this.crearDatos(this.media,this.desviacion,this.arreglo);
    this.normalizarDatos(this.arreglo,this.media,this.desviacion,this.arreglo2);
    this.convertirDatosenLabel(this.arreglo,this.label);
  }
  realizarNormalizacionTir(){
    this.mediaTir = this.hallarMedia(this.tirs);
    this.desviacionTir = this.hallarDesviacion(this.tirs);
    this.crearDatos(this.mediaTir,this.desviacionTir,this.normaTir);
    this.normalizarDatos(this.normaTir,this.mediaTir,this.desviacionTir,this.arregloTirs);
    this.convertirDatosenLabel(this.normaTir,this.labelTir);
  }    

  generarInforme(){
    let res = "";
    if(this.van>0){
      res += "El VAN Original es MAYOR a 0 por lo que el negocio puede ser interesante. "
    }else{
      res += "El VAN Original es MENOR a 0 por lo que el negocio no es interesante. "
    }
    if(this.tirO > 11.50 ){
      res += "El TIR Original es MAYOR a la tasa de referencia descuento (11.50 %) por lo que el negocio puede ser factible. "
    }else{
      res += "El TIR Original es MENOR a la tasa de referencia descuento (11.50 %) por lo que el negocio no es factible. "
    }
    return res;
  }
  generarInformeSimu(){
    let res = "";
    if(this.exito > this.fracaso){
      res +=`La simulacion dio como resultado una mayor cantidad de exitos (${this.exito}) que fracasos (${this.fracaso}) por lo que el negocio es
      interesante. `
    }else{
      res += `La simulacion dio como resultado una mayor cantidad de fracasos (${this.fracaso}) que exitos (${this.exito}) por lo que el negocio no es
      interesante. `
    }
    if(this.media>0){
      res += "Asi mismo la media de los resultados del VAN es MAYOR a 0 por lo que el negocio es interesante. "
    }else{
      res += "Asi mismo la media de los resultados del VAN es MENOR a 0 por lo que el negocio no es interesante. "
    }
    if(this.desviacion>this.media){
      res += "Tambien se encontro que la desviacion estandar de los resultados del VAN es muy grande por lo que el negocio es riesgoso. "
    }
    if(this.mediaTir>11.50){
      res += "Finalmente se detecto que la media de los resultados del TIR es MAYOR que la tasa de referencia de descuento (11.50 %) entonces el negocio es interesante, "
    }else{
      res += "Finalmente se detecto que la media de los resultados del TIR es MENOR que la tasa de referencia de descuento (11.50 %) entonces el negocio no es interesante, "
    }
    if(this.desviacionTir>this.mediaTir){
      res += "Tambien se encontro que la desviacion estandar de los resultados del TIR es muy grande por lo que la tasa de retorno es muy variable. "
    }
    return res;
  }

}
