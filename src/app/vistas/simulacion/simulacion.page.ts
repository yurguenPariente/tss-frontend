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
  
  constructor(private fb: FormBuilder, private simularService: SimulacionService, private presupuestoService: PresupuestoService) { }

  ngOnInit() {
    this.miFormulario = this.fb.group({
      invInicial:[this.proyecto.invInicial, Validators.required],
      ganancias:[this.proyecto.ganancias,[Validators.required]],
      salarios:[this.proyecto.salarios,[Validators.required]],      
      gastosBasicos:[this.proyecto.gastosBasicos,[Validators.required]],      
    })
    this.getDatosPresupuesto();
  }

  getDatosPresupuesto(){
    let pres = JSON.parse(localStorage.getItem('presupuesto'));
    console.log(pres);
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
  }

}
