import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PresupuestoService } from '../services/presupuesto.service';
import { SimulacionService } from '../services/simulacion.service';

@Component({
  selector: 'app-simulacion',
  templateUrl: './simulacion.page.html',
  styleUrls: ['./simulacion.page.scss'],
})
export class SimulacionPage implements OnInit {

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
  constructor(private fb: FormBuilder, private simularService: SimulacionService, private presupuestoService: PresupuestoService) {
    
   }

  ngOnInit() {
    this.cargarDatos();
    this.getDatosPresupuesto();
  }

  cargarDatos(){
    const servicios = JSON.parse(localStorage.getItem('ventasMes'));
    const inver = Number(localStorage.getItem('inver'));
    const costosop = JSON.parse(localStorage.getItem('CostoOp'));
    this.miFormulario = this.fb.group({
      invInicial:[inver, Validators.required],
      ganancias:[servicios.total,[Validators.required]],
      salarios:[costosop.PagoaEmpleados,[Validators.required]],      
      gastosBasicos:[this.sumarGastos(),[Validators.required]],      
    });

    this.miFormulario2 = this.fb.group({
      anhosDelProyecto:[this.anhos.anhosDelProyecto,[Validators.required]], 
    })
  }
  getDatosPresupuesto(){
    let pres = JSON.parse(localStorage.getItem('presupuesto'));
    console.log(pres);
  }
  sumarGastos(): number{
    const local = localStorage.getItem('CostoOp');
    if(local){
      const localob = JSON.parse(local);
      return localob.ServiciodeLuz + localob.ServiciodeAgua + localob.ServiciodeGas + 
      localob.ServiciodeTelefono + localob.ServiciodeInternet;
    }
  }

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
}
