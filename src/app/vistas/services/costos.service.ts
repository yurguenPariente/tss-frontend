import { Injectable } from '@angular/core';
import { Insumo } from 'src/app/interfaces/costosDirectos';
import { Producto, CostosDirectos } from '../../interfaces/costosDirectos';

@Injectable({
  providedIn: 'root'
})
export class CostosService {

  constructor() { }

  arregloProductos: Producto[] = [];
  costosDirectos: CostosDirectos = {
    productos: this.arregloProductos,
    mubTotal : 0
  }

  Guardar(){
    this.costosDirectos.mubTotal = this.sumarMub();
    localStorage.setItem('costosDirectos', JSON.stringify(this.costosDirectos));
  }
  sumarMub(): number{
    console.log(this.arregloProductos)  
    let totalC: number = 0;
    let totalV: number = 0;
    for(let item of this.arregloProductos){
      totalC += item.totalC;
      totalV += item.totalV;
    }
    return (totalV-totalC)/totalV;
  }
  guardarProductos(producto: Producto, indice:number){
    if(this.arregloProductos.length > 0){
      this.arregloProductos.splice(indice,1,producto);
    }else{
      this.arregloProductos.push(producto);
    }
  }
}
