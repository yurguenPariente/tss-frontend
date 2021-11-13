import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PresupuestoService } from '../services/presupuesto.service';
import { DetalleEfectivo } from '../../interfaces/capital';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.page.html',
  styleUrls: ['./presupuesto.page.scss'],
})
export class PresupuestoPage implements OnInit {
  detalle: DetalleEfectivo = {
    detalle:'',
    procedencia:'',
    aporte:0
  };

  form1: FormGroup = this.fb.group({
    detalleEfectivo:[''],
    procedenciaEfectivo:[''],
    aporteEfectivo:[0],
    detalleEntidad:[''],
    procedenciaEntidad:[''],
    aporteEntidad:[0],
    detalleOtros:[''],
    procedenciaOtros:[''],
    aporteOtros:[0]
  })

  constructor(private fb: FormBuilder, private presupuestoService:PresupuestoService) { }

  guardarEfectivo(){
    const {detalleEfectivo,procedenciaEfectivo,aporteEfectivo,detalleEntidad,
      procedenciaEntidad,aporteEntidad,detalleOtros,procedenciaOtros,aporteOtros  } = this.form1.value;
      this.presupuestoService.efectivo.detalle = [];
      this.enviarDetallesEfectivo(detalleEfectivo,procedenciaEfectivo,aporteEfectivo);
      this.enviarDetallesEfectivo(detalleEntidad,procedenciaEntidad,aporteEntidad);
      this.enviarDetallesEfectivo(detalleOtros,procedenciaOtros,aporteOtros);
  }

  enviarDetallesEfectivo(dato1: string, dato2: string, dato3:number){
    this.detalle = {
      detalle: dato1,
      procedencia: dato2,
      aporte: dato3
    }
    this.presupuestoService.efectivo.detalle.push(this.detalle);
  }
  ngOnInit() {
    this.leerLocal();
  }
  guardar(){
    this.presupuestoService.guardarLocal();
  }
  leerLocal(){
    const local = localStorage.getItem('presupuesto');
    if(local){
      const objectlocal = JSON.parse(local);
      this.form1 = this.fb.group({
        detalleEfectivo:[objectlocal.efectivo.detalle[0].detalle],
        procedenciaEfectivo:[objectlocal.efectivo.detalle[0].procedencia],
        aporteEfectivo:[objectlocal.efectivo.detalle[0].aporte],
        detalleEntidad:[objectlocal.efectivo.detalle[1].detalle],
        procedenciaEntidad:[objectlocal.efectivo.detalle[1].procedencia],
        aporteEntidad:[objectlocal.efectivo.detalle[1].aporte],
        detalleOtros:[objectlocal.efectivo.detalle[2].detalle],
        procedenciaOtros:[objectlocal.efectivo.detalle[2].procedencia],
        aporteOtros:[objectlocal.efectivo.detalle[2].aporte]
      })
    }
  }
  sumarTotal1():number{
    return this.form1.get('aporteEfectivo').value + this.form1.get('aporteEntidad').value + this.form1.get('aporteOtros').value
  }
}
