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
  resultados: string = "";

  proyecto: any = {
    invInicial: 0,
    ganancias:0,
    salarios:0,
    gastosBasicos:0
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
      
    this.proyecto = {
      invInicial :this.miFormulario.get('invInicial').value,
      ganancias : this.miFormulario.get('ganancias').value,
      salarios:this.miFormulario.get('salarios').value,
      gastosBasicos: this.miFormulario.get('gastosBasicos').value,    
    } 
    console.log(this.proyecto);
    this.resultados = this.simularService.simular(this.miFormulario.get('invInicial').value, this.miFormulario.get('ganancias').value, 
      this.miFormulario.get('salarios').value, this.miFormulario.get('gastosBasicos').value);
    /*this.resultados = this.simularService.simularAnhosParaRentable(this.miFormulario.get('invInicial').value, this.miFormulario.get('ganancias').value, 
      this.miFormulario.get('salarios').value, this.miFormulario.get('gastosBasicos').value);*/
  }

}
