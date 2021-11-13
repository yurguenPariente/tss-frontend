import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Detalle, CapitalInversion } from '../../../interfaces/capital';
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
    unidad:'',
    detalle:'',
    aporte:0,
    inversion:0
  });

  detalle: Detalle = {
    cantidad: 0,
    unidad:'',
    detalle:'',
    aporte:0,
    inversion:0
  }
  constructor(private fb:FormBuilder, private presupuestoService: PresupuestoService) { }

  ngOnInit() {
    this.leerLocal();
  }

  guardar(){
    const {cantidad,unidad,aporte,inversion,detalle} = this.miFormulario.value;
    this.detalle = {
      cantidad, unidad, aporte, inversion, detalle
    }
    switch (this.tipo) {
      case 'mano':
        if(this.presupuestoService.manoObra.detalles.length === 0){
          this.presupuestoService.manoObra.detalles.push(this.detalle);
        }else{
          this.presupuestoService.manoObra.detalles.splice(0,1,this.detalle);
        }
        break;
      case 'prima':
        if(this.indice > this.presupuestoService.prima.detalles.length){
          this.presupuestoService.prima.detalles.push(this.detalle);
        }else{
          this.presupuestoService.prima.detalles.splice(this.indice,1,this.detalle);
        }
        break;
      case 'promocion':
        if(this.indice > this.presupuestoService.promocion.detalles.length){
          this.presupuestoService.promocion.detalles.push(this.detalle);
        }else{
          this.presupuestoService.promocion.detalles.splice(this.indice,1,this.detalle);
        }
        break;
      case 'operativos':
        if(this.indice > this.presupuestoService.operativos.detalles.length){
          this.presupuestoService.operativos.detalles.push(this.detalle);
        }else{
          this.presupuestoService.operativos.detalles.splice(this.indice,1,this.detalle);
        }
        break;
      case 'infra':
        if(this.indice > this.presupuestoService.infraestructura.detalles.length){
          this.presupuestoService.infraestructura.detalles.push(this.detalle);
        }else{
          this.presupuestoService.infraestructura.detalles.splice(this.indice,1,this.detalle);
        }
        break;
      case 'maqui':
        if(this.indice > this.presupuestoService.maquinaria.detalles.length){
          this.presupuestoService.maquinaria.detalles.push(this.detalle);
        }else{
          this.presupuestoService.maquinaria.detalles.splice(this.indice,1,this.detalle);
        }
        break;
      case 'legales':
        if(this.indice > this.presupuestoService.legales.detalles.length){
          this.presupuestoService.legales.detalles.push(this.detalle);
        }else{
          this.presupuestoService.legales.detalles.splice(this.indice,1,this.detalle);
        }
        break;
        default:
        break;
    }
  }
  
  leerLocal(){
    const local = localStorage.getItem('presupuesto');
    if(local){
      const objetoLocal = JSON.parse(local);
      switch (this.tipo) {
        case 'mano':
          if(objetoLocal.capitalOperativo.manoObra.detalles[this.indice]){
            this.miFormulario = this.fb.group({
              cantidad:[objetoLocal.capitalOperativo.manoObra.detalles[this.indice].cantidad || 0],
              unidad:[objetoLocal.capitalOperativo.manoObra.detalles[this.indice].unidad || ""],
              aporte:[objetoLocal.capitalOperativo.manoObra.detalles[this.indice].aporte || 0],
              inversion:[objetoLocal.capitalOperativo.manoObra.detalles[this.indice].inversion || 0],
              detalle:[objetoLocal.capitalOperativo.manoObra.detalles[this.indice].detalle || ""]
            });
          }
          break;
        case 'prima':
          if(objetoLocal.capitalOperativo.prima.detalle){
            this.miFormulario = this.fb.group({
              cantidad:[objetoLocal.capitalOperativo.prima.detalles[this.indice].cantidad || 0],
              unidad:[objetoLocal.capitalOperativo.prima.detalles[this.indice].unidad || ""],
              aporte:[objetoLocal.capitalOperativo.prima.detalles[this.indice].aporte || 0],
              inversion:[objetoLocal.capitalOperativo.prima.detalles[this.indice].inversion || 0],
              detalle:[objetoLocal.capitalOperativo.prima.detalles[this.indice].detalle || ""]
            });
          }
          break;
        case 'promocion':
          if(objetoLocal.capitalOperativo.promocion.detalles[this.indice]){
            this.miFormulario = this.fb.group({
              cantidad:[objetoLocal.capitalOperativo.promocion.detalles[this.indice].cantidad || 0],
              unidad:[objetoLocal.capitalOperativo.promocion.detalles[this.indice].unidad || ""],
              aporte:[objetoLocal.capitalOperativo.promocion.detalles[this.indice].aporte || 0],
              inversion:[objetoLocal.capitalOperativo.promocion.detalles[this.indice].inversion || 0],
              detalle:[objetoLocal.capitalOperativo.promocion.detalles[this.indice].detalle || ""]
            });
          }
          break;
        case 'operativos':
          if(objetoLocal.capitalOperativo.operativos.detalles[this.indice]){
            this.miFormulario = this.fb.group({
              cantidad:[objetoLocal.capitalOperativo.operativos.detalles[this.indice].cantidad || 0],
              unidad:[objetoLocal.capitalOperativo.operativos.detalles[this.indice].unidad || ""],
              aporte:[objetoLocal.capitalOperativo.operativos.detalles[this.indice].aporte || 0],
              inversion:[objetoLocal.capitalOperativo.operativos.detalles[this.indice].inversion || 0],
              detalle:[objetoLocal.capitalOperativo.operativos.detalles[this.indice].detalle || ""]
            });
          }
          break;
        case 'infra':
          if(objetoLocal.capitalInversion.infraestructura.detalles[this.indice]){
            this.miFormulario = this.fb.group({
              cantidad:[objetoLocal.capitalInversion.infraestructura.detalles[this.indice].cantidad || 0],
              unidad:[objetoLocal.capitalInversion.infraestructura.detalles[this.indice].unidad || ""],
              aporte:[objetoLocal.capitalInversion.infraestructura.detalles[this.indice].aporte || 0],
              inversion:[objetoLocal.capitalInversion.infraestructura.detalles[this.indice].inversion || 0],
              detalle:[objetoLocal.capitalInversion.infraestructura.detalles[this.indice].detalle || ""]
            });
          }
          break;
        case 'maqui':
          if(objetoLocal.capitalInversion.maquinaria.detalles[this.indice]){
            this.miFormulario = this.fb.group({
              cantidad:[objetoLocal.capitalInversion.maquinaria.detalles[this.indice].cantidad || 0],
              unidad:[objetoLocal.capitalInversion.maquinaria.detalles[this.indice].unidad || ""],
              aporte:[objetoLocal.capitalInversion.maquinaria.detalles[this.indice].aporte || 0],
              inversion:[objetoLocal.capitalInversion.maquinaria.detalles[this.indice].inversion || 0],
              detalle:[objetoLocal.capitalInversion.maquinaria.detalles[this.indice].detalle || ""]
            });
          }
          break;
        case 'legales':
          if(objetoLocal.capitalInversion.legales.detalles[this.indice]){
            this.miFormulario = this.fb.group({
              cantidad:[objetoLocal.capitalInversion.legales.detalles[this.indice].cantidad || 0],
              unidad:[objetoLocal.capitalInversion.legales.detalles[this.indice].unidad || ""],
              aporte:[objetoLocal.capitalInversion.legales.detalles[this.indice].aporte || 0],
              inversion:[objetoLocal.capitalInversion.legales.detalles[this.indice].inversion || 0],
              detalle:[objetoLocal.capitalInversion.legales.detalles[this.indice].detalle || ""]
            });
          }
          break;
          default:
          break;
      }
    }
  }

}
