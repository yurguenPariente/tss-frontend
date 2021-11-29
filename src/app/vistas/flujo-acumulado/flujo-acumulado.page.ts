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
    resultadoVan:number = 0;
    exito:number = 0;
    fracaso: number = 0;
    
    ELEMENT_DATA: Opcion[] = [
      {nombre:'Inversion Inicial',valor:200},
      {nombre:'Saldo Inicial',valor:500},
      {nombre:'Ingresos',valor:this.total},
      {nombre:'Costos de produccion',valor:this.costosA},
      {nombre:'Utilidad bruta', valor:this.total-this.costosA},
      {nombre:'Costos fijos',valor:(this.totalGas)*12},
      {nombre:'Utilidad Neta',valor:(this.total-this.costosA)-((this.totalGas)*12)},
      {nombre:'Cuota',valor:60361},
      {nombre:'Flujo Acumulado',valor:(this.total-this.costosA)-((this.totalGas)*12)-60361}

      
  ];
  flujo: flujo = {
       
    monto:0,
    tipo:0,
    tasa: 0,
    plazo:0
  }
  miFormulario: FormGroup= this.fb.group({
    monto:[ 0, [ Validators.max(1000000)]],
    tipo:[ 0, [ Validators.max(1000000)]],
    tasa: [ 0, [ Validators.max(1000000)]],
    plazo: [ 0, [ Validators.max(1000000)]]
  })
  
  constructor(private simulacionService:SimulacionService,private fb:FormBuilder) { }

  ngAfterContentInit(): void {

  }

  ngOnInit() {
    this.leer();
    this.miFormulario = this.fb.group({
   
   
      monto:[this.flujo.monto, [Validators.required,Validators.max(1000000)]],
      tipo:[this.flujo.tipo, [Validators.required,Validators.max(1000000)]],
      tasa:[this.flujo.tasa, [Validators.required,Validators.max(1000000)]],
    
    plazo: [this.flujo.plazo,[Validators.required,Validators.max(1000000)]]


    })
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
  
  

  displayedColumns: string[] = [' ', 'Total Anual'];
  dataSource = this.ELEMENT_DATA;

}
