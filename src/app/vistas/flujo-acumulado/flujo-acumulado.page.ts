import { AfterContentInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SimulacionService } from '../services/simulacion.service';
import { flujo } from 'src/app/interfaces/flujo';
export interface Opcion {
  nombre:string;
  valor:number
}


@Component({
  selector: 'app-flujo-acumulado',
  templateUrl: './flujo-acumulado.page.html',
  styleUrls: ['./flujo-acumulado.page.scss'],
})
export class FlujoAcumuladoPage implements OnInit, AfterContentInit {
    total: number = JSON.parse(localStorage.getItem('ventasMes')).total;
    costosA: number = Number(localStorage.getItem('costosAnual'));
    totalGas: number = JSON.parse(localStorage.getItem('CostoOp')).total;
    monto: number = Number(localStorage.getItem('monto'));
    apInv: number = Number(localStorage.getItem('apIn'));
    inicial:number =JSON.parse(localStorage.getItem('presupuesto')).efectivo.total;
    resultadoVan:number = 0;
    cuotas:number = 0;
    exito:number = 0;
    fracaso: number = 0;
    opciones: Opcion[] = [
      {nombre:'Mensual',valor:12},
      {nombre:'Bimensual', valor:6},
      {nombre:'Trimestral',valor:4},
      {nombre:'Cuatrimestral',valor:3},
      {nombre:'Semestral',valor:2},
      {nombre:'Anual',valor:1}
    ];
    miFormulario: FormGroup= this.fb.group({
      monto:[ 0, [ Validators.max(1000000)]],
      tipo:[ 0, [ Validators.max(1000000)]],
      tasa: [ 0, [ Validators.max(1000000)]],
      plazo: [ 0, [ Validators.max(1000000)]]
    })
    
    ELEMENT_DATA: Opcion[] = [
      {nombre:'Inversion Inicial',valor:this.apInv},
      {nombre:'Saldo Inicial',valor:this.monto+this.inicial},
      {nombre:'Ingresos',valor:this.total},
      {nombre:'Costos de produccion',valor:this.costosA},
      {nombre:'Utilidad bruta', valor:this.total-this.costosA},
      {nombre:'Costos fijos',valor:(this.totalGas)*12},
      {nombre:'Utilidad Neta',valor:(this.total-this.costosA)-((this.totalGas)*12)},
      {nombre:'Cuota',valor:this.cuotas},
      {nombre:'Flujo Acumulado',valor:(this.total-this.costosA)-((this.totalGas)*12)-this.cuotas}

      
  ];
  flujo: flujo = {
       
    monto:0,
    tipo:0,
    tasa: 0.1150,
    plazo:0
  }
  constructor(private simulacionService:SimulacionService,private fb:FormBuilder) { }

  ngAfterContentInit(): void {

  }

  ngOnInit() {
    
    this.leer();

    this.miFormulario = this.fb.group({
      monto:[this.monto, [Validators.required,Validators.max(1000000),]],
      tipo:[this.flujo.tipo, [Validators.required,Validators.max(1000000)]],
      tasa:[this.flujo.tasa*100, [Validators.required,Validators.max(1000000)]],
      plazo: [this.flujo.plazo,[Validators.required,Validators.max(1000000)]]
    });
    this.encontrarCuota()
  }
  guardar(){
    this.flujo = {
      monto: this.miFormulario.get('monto').value,
      tipo:this.miFormulario.get('tipo').value,
      tasa: this.miFormulario.get('tasa').value,
      plazo: this.miFormulario.get('plazo').value
    }
    localStorage.setItem('flujo',JSON.stringify(this.flujo));
    
  }
  leer(){
    const valorLocal = localStorage.getItem('flujo');
    if(valorLocal){
      this.flujo = JSON.parse(valorLocal);
    }
  }
  encontrarCuota(){
    const frecuencia =  this.miFormulario.get('tipo').value;
    const plazo = this.miFormulario.get('plazo').value;
    console.log( frecuencia +" "+plazo)
    let tiempo = 0;
    switch (frecuencia) {
      case 12:
        tiempo=30
        break;
      case 6:
        tiempo=60;
        break;
      case 4:
        tiempo=90;
        break;
      case 3:
        tiempo=120;
        break;
      case 2:
        tiempo=180;
        break;
      case 1:
        tiempo=360;
        break;   
      default:
        break;
    }
    const poliza = (0.00474*this.monto)*(tiempo/30)/12;
    const pago = this.monto*((0.1150/(360/tiempo)/(1-Math.pow((1+0.1150/(360/tiempo)),(-(360/tiempo)*((plazo-0)/12))))));
    const cuotas = Math.round(((pago+poliza)*12)-95);
    this.ELEMENT_DATA[7].valor= cuotas;
    this.ELEMENT_DATA[8].valor = (this.total-this.costosA)-((this.totalGas)*12)-cuotas;
  }
  

  displayedColumns: string[] = [' ', 'Total Anual'];
  dataSource = this.ELEMENT_DATA;

}
