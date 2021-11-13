import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CostoOp } from 'src/app/interfaces/CostoOper';

@Component({
  selector: 'app-costo-opera',
  templateUrl: './costo-opera.page.html',
  styleUrls: ['./costo-opera.page.scss'],
})
export class CostoOperaPage implements OnInit {
  CostoOp: CostoOp = {
    Impuestos: 0,
    Alimentación: 0,
    ServiciodeLuz: 0,
    ServiciodeAgua: 0,
    ServiciodeGas: 0,
    ServiciodeTelefono: 0,
    ServiciodeInternet: 0,
    Alquiler: 0,
    Transporte: 0,
    MaterialdeEscritorio: 0,
    PagoaEmpleados: 0,
    Promoción: 0,
    Mantenimiento: 0,
    Vestimenta: 0,
    Salud: 0,
    total: 0
  }
  miFormulario: FormGroup= this.fb.group({
    Impuestos: [ 0, [Validators.required, Validators.max(1000000)]],
    Alimentación: [0, [Validators.required, Validators.max(1000000)]],
   ServiciodeLuz: [ 0, [Validators.required, Validators.max(1000000)]],
    ServiciodeAgua:[ 0, [Validators.required, Validators.max(1000000)]],
   ServiciodeGas: [ 0, [Validators.required, Validators.max(1000000)]],
    ServiciodeTelefono:[ 0, [Validators.required, Validators.max(1000000)]],
    ServiciodeInternet:[ 0, [Validators.required, Validators.max(1000000)]],
    Alquiler: [0, [Validators.required, Validators.max(1000000)]],
    Transporte: [ 0, [Validators.required, Validators.max(1000000)]],
    MaterialdeEscritorio: [ 0, [Validators.required, Validators.max(1000000)]],
    PagoaEmpleados: [ 0, [Validators.required, Validators.max(1000000)]],
    Promoción:[ 0, [Validators.required, Validators.max(1000000)]],
    Mantenimiento: [ 0, [Validators.required, Validators.max(1000000)]],
    Vestimenta: [ 0, [Validators.required, Validators.max(1000000)]],
    Salud: [ 0, [Validators.required, Validators.max(1000000)]],
    total: [ 0, [Validators.required, Validators.max(1000000)]]
  })
  constructor(private fb: FormBuilder) { }
  // constructor() { }

  ngOnInit() {
    //this.leer();
    // this.miFormulario = 
      
      
     
  }
   sumar():number{
     return Number(this.miFormulario.get('Impuestos').value) + Number(this.miFormulario.get('Alimentación').value)+
     Number(this.miFormulario.get('ServiciodeLuz').value) +Number(this.miFormulario.get('ServiciodeAgua').value) +
     Number(this.miFormulario.get(' ServiciodeGas').value) +Number(this.miFormulario.get('ServiciodeTelefono').value) 
     +Number(this.miFormulario.get('ServiciodeInternet').value) +Number(this.miFormulario.get(' Alquiler').value) 
     +Number(this.miFormulario.get('Transporte').value) +Number(this.miFormulario.get('MaterialdeEscritorio').value) 
     +Number(this.miFormulario.get(' PagoaEmpleados').value) +Number(this.miFormulario.get('Promoción').value) 
     +Number(this.miFormulario.get('Mantenimiento').value) +Number(this.miFormulario.get('Vestimenta').value) 
     +Number(this.miFormulario.get('Salud').value)  
   }
 
  

}
