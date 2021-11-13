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
  //miFormulario: FormGroup;
  constructor() { }
  // constructor() { }

  ngOnInit() {
    //this.leer();
    // this.miFormulario = this.fb.group({
    //   Impuestos: [this.CostoOp.Impuestos || 0, [Validators.required, Validators.max(1000000)]],
    //   Alimentación: [this.CostoOp.Alimentación|| 0, [Validators.required, Validators.max(1000000)]],
    //   ServiciodeLuz: [this.CostoOp.ServiciodeLuz|| 0, [Validators.required, Validators.max(1000000)]],
    //   ServiciodeAgua:[this.CostoOp.ServiciodeAgua || 0, [Validators.required, Validators.max(1000000)]],
    //   ServiciodeGas: [this.CostoOp.ServiciodeGas || 0, [Validators.required, Validators.max(1000000)]],
    //   ServiciodeTelefono:[this.CostoOp.ServiciodeTelefono|| 0, [Validators.required, Validators.max(1000000)]],
    //   ServiciodeInternet:[this.CostoOp.ServiciodeInternet || 0, [Validators.required, Validators.max(1000000)]],
    //   Alquiler: [this.CostoOp.Alquiler|| 0, [Validators.required, Validators.max(1000000)]],
    //   Transporte: [this.CostoOp.Transporte || 0, [Validators.required, Validators.max(1000000)]],
    //   MaterialdeEscritorio: [this.CostoOp.MaterialdeEscritorio|| 0, [Validators.required, Validators.max(1000000)]],
    //   PagoaEmpleados: [this.CostoOp.PagoaEmpleados || 0, [Validators.required, Validators.max(1000000)]],
    //   Promoción:[this.CostoOp.Promoción || 0, [Validators.required, Validators.max(1000000)]],
    //   Mantenimiento: [this.CostoOp.Mantenimiento || 0, [Validators.required, Validators.max(1000000)]],
    //   Vestimenta: [this.CostoOp.Vestimenta|| 0, [Validators.required, Validators.max(1000000)]],
    //   Salud: [this.CostoOp.Salud || 0, [Validators.required, Validators.max(1000000)]],
    //   total: [this.CostoOp.total || 0, [Validators.required, Validators.max(1000000)]]
      
      
    // })
  }
  // sumar():number{
  //   return Number(this.miFormulario.get('Impuestos').value) + Number(this.miFormulario.get('Alimentación').value)
  //    +Number(this.miFormulario.get('ServiciodeLuz').value) +Number(this.miFormulario.get('ServiciodeAgua').value) +
  //   Number(this.miFormulario.get(' ServiciodeGas').value) +Number(this.miFormulario.get('ServiciodeTelefono').value) 
  //   +Number(this.miFormulario.get('ServiciodeInternet').value) +Number(this.miFormulario.get(' Alquiler').value) 
  //   +Number(this.miFormulario.get('Transporte').value) +Number(this.miFormulario.get('MaterialdeEscritorio').value) 
  //   +Number(this.miFormulario.get(' PagoaEmpleados').value) +Number(this.miFormulario.get('Promoción').value) 
  //   +Number(this.miFormulario.get('Mantenimiento').value) +Number(this.miFormulario.get('Vestimenta').value) 
  //   +Number(this.miFormulario.get('Salud').value) +Number(this.miFormulario.get('total').value) 
  // }
  // leer() {
  //   const valorLocal = localStorage.getItem('CostoOp');
  //   if (valorLocal) {
  //     this.CostoOp = JSON.parse(valorLocal);
  //   }
  // }

}
