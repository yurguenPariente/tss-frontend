import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { CostosService } from '../../services/costos.service';
import { Insumo, Producto } from '../../../interfaces/costosDirectos';

interface Option {
  value:number;
  viewValue:string;
}
@Component({
  selector: 'app-insumos',
  templateUrl: './insumos.component.html',
  styleUrls: ['./insumos.component.scss'],
})
export class InsumosComponent implements OnInit {
  @Input() indice:number = 0;

  opciones: Option[] = [
    {value:25,viewValue:'Diario'},
    {value:4,viewValue:'Semanal'},
    {value:2,viewValue:'Quincenal'},
    {value:1,viewValue:'Mensual'},
    {value:0.5,viewValue:'Bimentral'},
    {value:0.3333333333,viewValue:'Trimestral'},
    {value:0.1666666667,viewValue:'Semestral'},
  ];
  arreglo: number[]=[];
  totales: number[] = [];
  insumosArreglo: Insumo[] = [];
  insu: Insumo = {
    nombre: '',
    cantidad: 0,
    unidadesProducidas: 0,
    precioU: 0,
    total: 0
  }
  producto: Producto = {
    tipo: '',
    cantidad: 0,
    unidadVenta: '',
    frecuencia: 0,
    precioC: 0,
    precioV: 0,
    totalC: 0,
    totalV: 0,
    mub: 0,
    insumos: []
  }
  miFormulario: FormGroup = this.fb.group({
    cantidad2: new FormControl(1,Validators.required),
    tipo: new FormControl('', Validators.required),
    cantidad1: new FormControl(0,Validators.required),
    unidadV: new FormControl('', Validators.required),
    frecuencia: new FormControl(0,Validators.required),
    precioV: new FormControl(0, Validators.required),
    insumos: this.fb.array([
      this.fb.group({
        insumo:new FormControl('', Validators.required),
        cantidad:new FormControl(0,Validators.required),
        unidadesProd:new FormControl(0, Validators.required),
        precioU:new FormControl(0, Validators.required)
      })
    ])
  });;
  constructor(public fb: FormBuilder, private costosService:CostosService) { }

  ngOnInit() {
    if(localStorage.getItem('costosDirectos')){
      this.miFormulario = this.fb.group({
        cantidad2: new FormControl(1,Validators.required),
        tipo: new FormControl(JSON.parse(localStorage.getItem('costosDirectos')).productos[this.indice].tipo || '', Validators.required),
        cantidad1: new FormControl(JSON.parse(localStorage.getItem('costosDirectos')).productos[this.indice].cantidad||0,Validators.required),
        unidadV: new FormControl(JSON.parse(localStorage.getItem('costosDirectos')).productos[this.indice].unidadVenta||'', Validators.required),
        frecuencia: new FormControl(JSON.parse(localStorage.getItem('costosDirectos')).productos[this.indice].frecuencia || 0,Validators.required),
        precioV: new FormControl(JSON.parse(localStorage.getItem('costosDirectos')).productos[this.indice].precioV||0, Validators.required),
        insumos: this.fb.array([
          this.fb.group({
            insumo:new FormControl('', Validators.required),
            cantidad:new FormControl(0,Validators.required),
            unidadesProd:new FormControl(0, Validators.required),
            precioU:new FormControl(0, Validators.required)
          })
        ])
      });
    }
    this.leerLocal();
  }

  get insumos(): FormArray{
    return this.miFormulario.get('insumos') as FormArray;
  }

  modificarArreglo(){
    if(this.insumos.length > this.miFormulario.get('cantidad2').value){
      this.eliminar();
    }else{
      this.addInsumo();
    }

  }

  addInsumo(i?:string, canti?:number, unidad?:number, precioU?:number){
      const insumo = this.fb.group({
      insumo:new FormControl(i||'', Validators.required),
      cantidad:new FormControl(canti||0,Validators.required),
      unidadesProd:new FormControl(unidad||0, Validators.required),
      precioU:new FormControl(precioU||0, Validators.required)
    });
    this.insumos.push(insumo);
  }

  eliminar(){
    this.insumos.removeAt(this.insumos.length-1);
  }

  anadirTotal(indice: number): number{
    // return(this.insumos[indice].get('cantidad').value/this.insumos[indice].get('unidadesProd'))*this.insumos[indice].get('precioU');
    const cantidad = Number(this.insumos.value[indice].cantidad);
    const unidades = Number(this.insumos.value[indice].unidadesProd);
    const precio = Number(this.insumos.value[indice].precioU);
    return (cantidad/unidades)*precio;
  }

  guardarDatos(){
    let arreglo2: Insumo[]=[];
    for(let insumo of this.insumos.value){
      this.insu = {
        nombre: insumo.insumo,
        cantidad: insumo.cantidad,
        unidadesProducidas: insumo.unidadesProd,
        precioU: insumo.precioU,
        total: (insumo.cantidad/insumo.unidadesProd)*insumo.precioU
      }
      arreglo2.push(this.insu);
      this.totales.splice(this.indice,1,this.insu.total);
      console.log(this.totales);
    }
    this.insumosArreglo = arreglo2;
    this.guardarProducto();
    this.costosService.guardarProductos(this.producto, this.indice);
  }
  guardarProducto(){
    const {tipo, cantidad1,unidadV,frecuencia,precioV} = this.miFormulario.value;
    const totalC = (cantidad1*this.precioDeCompra()*frecuencia);
    const totalV =(cantidad1*precioV*frecuencia);
    this.producto = {
      tipo,
      cantidad: cantidad1,
      unidadVenta: unidadV,
      frecuencia,
      precioC: this.precioDeCompra(),
      precioV,
      totalC ,
      totalV ,
      mub: ((totalV-totalC)/totalV)*100,
      insumos:this.insumosArreglo
    }
  }

  precioDeCompra(): number{
    let res = 0;
    for(let total of this.totales){
      res += total;
    }
    return res;
  }

  leerLocal(){
    const local = JSON.parse(localStorage.getItem('costosDirectos'));
    if(local){
      this.producto = local.productos[this.indice];
      this.eliminar();
      for(let {nombre,cantidad,unidadesProducidas,precioU} of this.producto.insumos){
          this.addInsumo(nombre, cantidad, unidadesProducidas,precioU);
      }
    }
  }
}
