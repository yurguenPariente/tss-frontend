import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';

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
  })
  constructor(public fb: FormBuilder) { }

  ngOnInit() {
  }

  get insumos(): FormArray{
    return this.miFormulario.get('insumos') as FormArray;
  }

  modificarArreglo(){
    if(this.insumos.length > this.miFormulario.get('cantidad2').value){
      this.eliminar();
      console.log(this.insumos.value);
    }else{
      this.addInsumo();
      console.log(this.insumos.value);

    }

  }

  addInsumo(){

      const insumo = this.fb.group({
      insumo:new FormControl('', Validators.required),
      cantidad:new FormControl(0,Validators.required),
      unidadesProd:new FormControl(0, Validators.required),
      precioU:new FormControl(0, Validators.required)
    });
    this.insumos.push(insumo);
  }
  eliminar(){
    this.insumos.removeAt(this.insumos.length-1);
  }
}
