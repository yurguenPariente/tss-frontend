import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

interface Option {
  value:string;
  viewValue:string;
}
@Component({
  selector: 'app-insumos',
  templateUrl: './insumos.component.html',
  styleUrls: ['./insumos.component.scss'],
})
export class InsumosComponent implements OnInit {
  opciones: Option[] = [
    {value:'25',viewValue:'Diario'},
    {value:'4',viewValue:'Semanal'},
    {value:'2',viewValue:'Quincenal'},
    {value:'1',viewValue:'Mensual'},
    {value:'0,5',viewValue:'Bimentral'},
    {value:'0,3333333333',viewValue:'Trimestral'},
    {value:'0,1666666667',viewValue:'Semestral'},
  ];
  arreglo: number[]=[];
  miFormulario: FormGroup = this.fb.group({
    cantidad2: new FormControl('',[Validators.required])
  })
  constructor(public fb: FormBuilder) { }

  ngOnInit() {}

  llenarArreglo(){
    this.arreglo = Array(this.miFormulario.get('cantidad2').value).fill(1);
  }
}
