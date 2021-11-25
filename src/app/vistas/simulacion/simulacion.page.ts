import { Component, OnInit, AfterContentInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { PresupuestoService } from '../services/presupuesto.service';
import { SimulacionService } from '../services/simulacion.service';
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
  label:Label[] = [];
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
  exito:number = 0;
  fracaso: number = 0;
  array: number[] = [];
  iteraciones: Label[] = [];
    public barChartData: ChartDataSets[] = [
    
  ];

  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  miFormulario: FormGroup;
  miFormulario2: FormGroup;
  resultados: any = "0";
  resultadosSim: any = [0,0,0,0];
  apFlag: boolean = false;
  titulo: string = "Resultados de la simulacion"

  proyecto: any = {
    invInicial: 0,
    ganancias:0,
    salarios:0,
    gastosBasicos:0
  }
  anhos: any = {
    anhosDelProyecto:0
  }
  constructor(private fb: FormBuilder, private simularService: SimulacionService, private presupuestoService: PresupuestoService,
    private simulacionService:SimulacionService) {
    
   }

  ngOnInit() {
    //this.cargarDatos();
    //this.getDatosPresupuesto();
  }
  
  ngAfterContentInit(): void {
    this.norma = [-3.0,-2.9,-2.8,-2.7,-2.6,-2.5,-2.4,-2.3,-2.2,-2.1,-2.0,-1.9,-1.8,-1.7,-1.6,-1.5,-1.4,-1.3,-1.2,-1.1,-1.0,-0.9,-0.8,-0.7,-0.6,-0.5,-0.4,-0.3,-0.2,-0.1,0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0,1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9,2.0,2.1,2.2,2.3,2.4,2.5,2.6,2.7,2.8,2.9,3.0];
    this.simularVan();
    this.realizarNormalizacionDeDatos();
    this.barChartData = [
      { data: this.arreglo2, label: 'Series A' },
    ];
    this.barChartLabels = this.label;
  }

  // cargarDatos(){
  //   const servicios = JSON.parse(localStorage.getItem('ventasMes'));
  //   const inver = Number(localStorage.getItem('inver'));
  //   const costosop = JSON.parse(localStorage.getItem('CostoOp'));
  //   this.miFormulario = this.fb.group({
  //     invInicial:[inver, Validators.required],
  //     ganancias:[servicios.total,[Validators.required]],
  //     salarios:[costosop.PagoaEmpleados,[Validators.required]],      
  //     gastosBasicos:[this.sumarGastos(),[Validators.required]],      
  //   });

  //   this.miFormulario2 = this.fb.group({
  //     anhosDelProyecto:[this.anhos.anhosDelProyecto,[Validators.required]], 
  //   })
  // }
  // getDatosPresupuesto(){
  //   let pres = JSON.parse(localStorage.getItem('presupuesto'));
  //   console.log(pres);
  // }
  // sumarGastos(): number{
  //   const local = localStorage.getItem('CostoOp');
  //   if(local){
  //     const localob = JSON.parse(local);
  //     return localob.ServiciodeLuz + localob.ServiciodeAgua + localob.ServiciodeGas + 
  //     localob.ServiciodeTelefono + localob.ServiciodeInternet;
  //   }
  // }

  simular() {
    this.apFlag = false;
    this.titulo = "Resultados de la simulacion";
    this.proyecto = {
      invInicial :this.miFormulario.get('invInicial').value,
      ganancias : this.miFormulario.get('ganancias').value,
      salarios:this.miFormulario.get('salarios').value,
      gastosBasicos: this.miFormulario.get('gastosBasicos').value,    
    } 
    //console.log(this.proyecto);
    this.resultadosSim = this.simularService.simular(this.miFormulario.get('invInicial').value, this.miFormulario.get('ganancias').value, 
      this.miFormulario.get('salarios').value, this.miFormulario.get('gastosBasicos').value);
    this.resultados =this.resultadosSim[0];
    /*this.resultados = this.simularService.simularAnhosParaRentable(this.miFormulario.get('invInicial').value, this.miFormulario.get('ganancias').value, 
      this.miFormulario.get('salarios').value, this.miFormulario.get('gastosBasicos').value);*/
  }

  toggle(){
    this.resultados = "";
    this.titulo = "Resultados sin simular";
    this.apFlag = !this.apFlag;
  }
  sinSimulacion(){
    this.resultados = "";
    var flujos = new Array();
    for (let i = 0; i < this.miFormulario2.get('anhosDelProyecto').value; i++) {      
      flujos.push(this.miFormulario.get('ganancias').value-(this.miFormulario.get('ganancias').value/4)-this.miFormulario.get('salarios').value
      -this.miFormulario.get('gastosBasicos').value);
    }  

    let van = this.simularService.van(this.miFormulario.get('invInicial').value, flujos, 0.03)

    /*if( van >= 0){
      this.resultados="Sin simular, si se realiza el proyecto durante "+ this.miFormulario2.get('anhosDelProyecto').value 
      + " años el proyecto sera rentable con un VAN de " + van;
    } else {
      this.resultados="Sin simular, si se realiza el proyecto durante "+ this.miFormulario2.get('anhosDelProyecto').value 
      +" años el proyecto no sera rentable con un VAN de "+ van;
    }  */
    this.resultados = van;  
  }
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40 ];
  }
  calcularVan(): number{
    const total  = JSON.parse(localStorage.getItem('ventasMes')).total;
    const costosA  = Number(localStorage.getItem('costosAnual'));
    const totalGas  = JSON.parse(localStorage.getItem('CostoOp')).total;
    return this.simulacionService.van2(0,0.1150,(total-costosA)-((totalGas-1000)*12)-60361);
  }
  // simularVan(){
  //   const {alta,media,baja} = JSON.parse(localStorage.getItem('ventasMes'));
  //   const totalGas = JSON.parse(localStorage.getItem('CostoOp')).total;

  //   // console.log(ingresos, costos)
  //   for(let j=0; j<10;j++){
  //     for(let i=0; i<100;i++){
  //       let ingresos = this.simulacionService.simularNuevo(Number(baja),Number(alta),Number(media));
  //       let costos = this.simulacionService.simularNuevo(536,1072,804);
  //       let simu = this.simulacionService.van2(0,0.1150,(ingresos-costos)-((totalGas-1000)*12)-60361);
  //       this.array.push(simu);
  //      this.iteraciones.push(`${i+1}`);
  //       if(simu > 0){
  //         this.exito ++;
  //       }else{ 
  //         this.fracaso ++;
  //       }
  //     }
  //   }
  // }
  simularVan(){
    const {alta,media,baja} = JSON.parse(localStorage.getItem('ventasMes'));
    const totalGas  = JSON.parse(localStorage.getItem('CostoOp')).total;
    const costosA  = Number(localStorage.getItem('costosAnual'));
    // console.log(ingresos, costos)
    for(let i=0; i<1000;i++){
      let ingresos = this.simulacionService.simularNuevo2(Number(baja),Number(alta),Number(media));
      //console.log(ingresos)
      let costos = this.simulacionService.simularNuevo2(536,1072,804);
      //console.log(costos)
      let simu = this.simulacionService.van2(0,0.1150,(ingresos-costos)-((totalGas-1000)*12)-60361);
      //let simu = this.simulacionService.van2(0,0.1150,77049.15);
      this.datos.push(simu);
      if(simu > 0){
        this.exito ++;
      }else{ 
        this.fracaso ++;
      }
      // console.log(ingresos);
      // //console.log(costos);
      //console.log(simu)
    }
   
  }

  hallarMedia(arreglo:number[]):number{
    let suma = 0;
    for(let dato of arreglo){
      suma += dato;
    }
    return suma/arreglo.length;
  }


  hallarDesviacion(arreglo:number[],normal:boolean):number{
    let res = 0;
    const media = this.hallarMedia(arreglo);
    for(let dato of arreglo){
      res += Math.pow(dato - media,2);
    }
      return Math.sqrt(res/(arreglo.length));
  }



  crearDatos(media:number, desviacion:number){
    for(let i=0; i<this.norma.length;i++){
      if(i === 0){
        this.arreglo.push((media+(this.norma[i]*desviacion)));
      }else{
        this.arreglo.push(this.arreglo[i-1]+(desviacion/10))
      }
    }    
  }
  
  normalizarDatos(arreglo:number[],media:number,desviacion:number){
    const e = 2.7182818284590452354;
    const pi = 3.14159265358979323846;
    for(let dato of arreglo){
      let normal = (1/(Math.sqrt(2*pi)*desviacion))*Math.pow(e,-((Math.pow(dato-media,2)/(2*desviacion*desviacion))));
      this.arreglo2.push(normal);
    }
    //console.log('normalizardatos',this.arreglo2);
  }
  convertirDatosenLabel(arreglo:number[]){
    for(let dato of arreglo){
      this.label.push(`${dato}`);
    }
   // console.log('labe',this.label)
  }
  
  realizarNormalizacionDeDatos(){
    this.media = this.hallarMedia(this.datos);
    this.desviacion = this.hallarDesviacion(this.datos,false);
    this.crearDatos(this.media,this.desviacion);
    this.normalizarDatos(this.arreglo,this.media,this.desviacion);
    this.convertirDatosenLabel(this.arreglo);
  }

  
  

}
