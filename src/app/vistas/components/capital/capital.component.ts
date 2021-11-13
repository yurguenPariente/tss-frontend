import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Detalle } from '../../../interfaces/capital';
import { PresupuestoService } from '../../services/presupuesto.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.scss'],
})
export class CapitalComponent implements OnInit {
  @Input() aporte: boolean=true;
  @Input() inversion: boolean=true;
  @Input() indice: number = 0;
  @Input() tipo: string = '';
  miFormulario: FormGroup = this.fb.group({
    cantidad:[0],
    unidad:[''],
    aporte:[0],
    inversion:[0],
    detalle:['']
  });
  detalle: Detalle = {
    cantidad: 0,
    unidad:'',
    detalle:'',
    aporte:0,
    inversion:0
  }
  constructor(private fb:FormBuilder, private presupuestoService: PresupuestoService) { }

  ngOnInit() {}

  guardar(){
    const {cantidad,unidad,aporte,inversion,detalle} = this.miFormulario.value;
    this.detalle = {
      cantidad, unidad, aporte, inversion, detalle
    }
    switch (this.tipo) {
      case 'mano':
        if(this.presupuestoService.manoObra.length === 0){
          this.presupuestoService.manoObra.push(this.detalle);
        }else{
          this.presupuestoService.manoObra.splice(0,1,this.detalle);
        }
        break;
      case 'prima':
        if(this.indice > this.presupuestoService.prima.length){
          this.presupuestoService.prima.push(this.detalle);
        }else{
          this.presupuestoService.prima.splice(this.indice,1,this.detalle);
        }
        break;
      case 'promocion':
        if(this.indice > this.presupuestoService.promocion.length){
          this.presupuestoService.promocion.push(this.detalle);
        }else{
          this.presupuestoService.promocion.splice(this.indice,1,this.detalle);
        }
        break;
      case 'operativos':
        if(this.indice > this.presupuestoService.operativos.length){
          this.presupuestoService.operativos.push(this.detalle);
        }else{
          this.presupuestoService.operativos.splice(this.indice,1,this.detalle);
        }
      default:
        break;
    }
  }
 
}
