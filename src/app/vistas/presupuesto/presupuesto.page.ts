import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PresupuestoService } from '../services/presupuesto.service';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.page.html',
  styleUrls: ['./presupuesto.page.scss'],
})
export class PresupuestoPage implements OnInit {

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

  ngOnInit() {
  }
  guardar(){
    this.presupuestoService.guardarLocal();
  }
  sumarTotal1():number{
    return this.form1.get('aporteEfectivo').value + this.form1.get('aporteEntidad').value + this.form1.get('aporteOtros').value
  }
}
