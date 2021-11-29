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
    Alimentacion: 0,
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
    Impuestos: [ 0, [ Validators.max(1000000)]],
    Alimentacion: [0, [ Validators.max(1000000)]],
   ServiciodeLuz: [ 0, [ Validators.max(1000000)]],
    ServiciodeAgua:[ 0, [ Validators.max(1000000)]],
   ServiciodeGas: [ 0, [ Validators.max(1000000)]],
    ServiciodeTelefono:[ 0, [ Validators.max(1000000)]],
    ServiciodeInternet:[ 0, [ Validators.max(1000000)]],
    Alquiler: [0, [ Validators.max(1000000)]],
    Transporte: [ 0, [ Validators.max(1000000)]],
    MaterialdeEscritorio: [ 0, [ Validators.max(1000000)]],
    PagoaEmpleados: [ 0,  [Validators.max(1000000)]],
    Promoción:[ 0, [ Validators.max(1000000)]],
    Mantenimiento: [ 0, [ Validators.max(1000000)]],
    Vestimenta: [ 0, [ Validators.max(1000000)]],
    Salud: [ 0, [ Validators.max(1000000)]],
    total: [ 0, [ Validators.max(1000000)]]
  });
  constructor(private fb: FormBuilder) { }
  // constructor() { }

  ngOnInit() {

    this.leer();
    this.miFormulario = this.fb.group({
   
    Impuestos:[this.CostoOp.Impuestos, [Validators.required,Validators.max(1000000)]],
    Alimentacion: [this.CostoOp.Alimentacion,[Validators.required,Validators.max(1000000)]],
   ServiciodeLuz: [this.CostoOp.ServiciodeLuz,[Validators.required,Validators.max(1000000)]],
    ServiciodeAgua: [this.CostoOp.ServiciodeAgua,[Validators.required,Validators.max(1000000)]],
   ServiciodeGas: [this.CostoOp.ServiciodeGas,[Validators.required,Validators.max(1000000)]],
    ServiciodeTelefono: [this.CostoOp.ServiciodeTelefono,[Validators.required,Validators.max(1000000)]],
    ServiciodeInternet: [this.CostoOp.ServiciodeInternet,[Validators.required,Validators.max(1000000)]],
    Alquiler: [this.CostoOp.Alquiler,[Validators.required,Validators.max(1000000)]],
    Transporte: [this.CostoOp.Transporte,[Validators.required,Validators.max(1000000)]],
    MaterialdeEscritorio: [this.CostoOp.MaterialdeEscritorio,[Validators.required,Validators.max(1000000)]],
    PagoaEmpleados: [this.CostoOp.PagoaEmpleados,[Validators.required,Validators.max(1000000)]],
    Promoción: [this.CostoOp.Promoción,[Validators.required,Validators.max(1000000)]],
    Mantenimiento: [this.CostoOp.Mantenimiento,[Validators.required,Validators.max(1000000)]],
    Vestimenta: [this.CostoOp.Vestimenta,[Validators.required,Validators.max(1000000)]],
    Salud: [this.CostoOp. Salud,[Validators.required,Validators.max(1000000)]],
    total: [this.CostoOp.total,[Validators.required,Validators.max(1000000)]]


    })

  }
   sumar():number{
     return Number(this.miFormulario.get('Impuestos').value) + Number(this.miFormulario.get('Alimentacion').value)+
     Number(this.miFormulario.get('ServiciodeLuz').value) +Number(this.miFormulario.get('ServiciodeAgua').value) +
     Number(this.miFormulario.get('ServiciodeGas').value) +Number(this.miFormulario.get('ServiciodeTelefono').value) 
     +Number(this.miFormulario.get('ServiciodeInternet').value) +Number(this.miFormulario.get('Alquiler').value) 
     +Number(this.miFormulario.get('Transporte').value) +Number(this.miFormulario.get('MaterialdeEscritorio').value) 
     +Number(this.miFormulario.get('PagoaEmpleados').value) +Number(this.miFormulario.get('Promoción').value) 
     +Number(this.miFormulario.get('Mantenimiento').value) +Number(this.miFormulario.get('Vestimenta').value) 
     +Number(this.miFormulario.get('Salud').value)  
   }
   
   leer(){
     const local = localStorage.getItem('CostoOp');
     if(local){
      const {Impuestos, Alimentacion, ServiciodeLuz,ServiciodeAgua,ServiciodeGas,ServiciodeTelefono,ServiciodeInternet,
      Alquiler,Transporte, MaterialdeEscritorio,PagoaEmpleados,Promoción,Mantenimiento,Vestimenta,Salud,total} =  JSON.parse(local);
      this.miFormulario = this.fb.group({
        Impuestos: [ Impuestos, [ Validators.max(1000000)]],
        Alimentacion: [Alimentacion, [ Validators.max(1000000)]],
       ServiciodeLuz: [ ServiciodeLuz, [ Validators.max(1000000)]],
        ServiciodeAgua:[ ServiciodeAgua, [ Validators.max(1000000)]],
       ServiciodeGas: [ ServiciodeGas, [ Validators.max(1000000)]],
        ServiciodeTelefono:[ ServiciodeTelefono, [ Validators.max(1000000)]],
        ServiciodeInternet:[ ServiciodeInternet, [ Validators.max(1000000)]],
        Alquiler: [Alquiler, [ Validators.max(1000000)]],
        Transporte: [ Transporte, [ Validators.max(1000000)]],
        MaterialdeEscritorio: [ MaterialdeEscritorio, [ Validators.max(1000000)]],
        PagoaEmpleados: [ PagoaEmpleados,  [Validators.max(1000000)]],
        Promoción:[ Promoción, [ Validators.max(1000000)]],
        Mantenimiento: [ Mantenimiento, [ Validators.max(1000000)]],
        Vestimenta: [ Vestimenta, [ Validators.max(1000000)]],
        Salud: [ Salud, [ Validators.max(1000000)]],
        total: [ total, [ Validators.max(1000000)]]
      });
      
     }
   }
   guardar(){
    this.CostoOp = {
        
        Impuestos: this.miFormulario.get('Impuestos').value,
    Alimentacion: this.miFormulario.get('Alimentacion').value,
   ServiciodeLuz:this.miFormulario.get('ServiciodeLuz').value,
    ServiciodeAgua:this.miFormulario.get('ServiciodeAgua').value,
   ServiciodeGas: this.miFormulario.get('ServiciodeGas').value,
    ServiciodeTelefono:this.miFormulario.get('ServiciodeTelefono').value,
    ServiciodeInternet:this.miFormulario.get('ServiciodeInternet').value,
    Alquiler: this.miFormulario.get('Alquiler').value,
    Transporte: this.miFormulario.get('Transporte').value,
    MaterialdeEscritorio: this.miFormulario.get('MaterialdeEscritorio').value,
    PagoaEmpleados: this.miFormulario.get('PagoaEmpleados').value,
    Promoción:this.miFormulario.get('Promoción').value,
    Mantenimiento: this.miFormulario.get('Mantenimiento').value,
    Vestimenta: this.miFormulario.get('Vestimenta').value,
    Salud: this.miFormulario.get('Salud').value,
    
        total: this.sumar()
    }
    localStorage.setItem('CostoOp',JSON.stringify(this.CostoOp));
    
  }
  leer(){
    const valorLocal = localStorage.getItem('CostoOp');
    if(valorLocal){
      this.CostoOp = JSON.parse(valorLocal);
    }
  }

}
