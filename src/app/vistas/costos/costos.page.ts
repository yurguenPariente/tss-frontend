import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Option {
  value:string;
  viewValue:string
}

@Component({
  selector: 'app-costos',
  templateUrl: './costos.page.html',
  styleUrls: ['./costos.page.scss'],
})
export class CostosPage implements OnInit {
  options: Option[] = [
    {
      value:'manufactura y servicios',
      viewValue:'Manufactura y Servicios'
    },
    {
      value:'pecuario',
      viewValue:'Pecuario'
    },
    {
      value:'ganadero',
      viewValue:'Ganadero'
    }
  ]
  meses: string[] = [
    "Enero", "Febrero", "Marzo", "Abril","Mayo", "Junio", "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
  ]
  miFormulario: FormGroup = this.fb.group({
    tipo:["manufactura y servicios", Validators.required],
    altas:[0,[Validators.required,Validators.max(1000000)]],
    medias:[0,[Validators.required,Validators.max(1000000)]],
    bajas:[0,[Validators.required,Validators.max(1000000)]],
    Enero:["",[Validators.required]],
    Febrero:["",[Validators.required]],
    Marzo:["",[Validators.required]],
    Abril:["",[Validators.required]],
    Mayo:["",[Validators.required]],
    Junio:["",[Validators.required]],
    Julio:["",[Validators.required]],
    Agosto:["",[Validators.required]],
    Septiembre:["",[Validators.required]],
    Octubre:["",[Validators.required]],
    Noviembre:["",[Validators.required]],
    Diciembre:["",[Validators.required]]
  })
  tipo:string = '';
  alta:number = this.miFormulario.get('altas').value;
  media:number = this.miFormulario.get('medias').value;
  baja:number = this.miFormulario.get('bajas').value;
  // enero:number = this.miFormulario.get('Enero').value;
  // febrero:number = this.miFormulario.get('Febrero').value;
  // marzo:number = this.miFormulario.get('Marzo').value;
  // abril:number = this.miFormulario.get('Abril').value;
  // mayo:number = this.miFormulario.get('Mayo').value;
  // junio:number = this.miFormulario.get('Junio').value;
  // julio:number = this.miFormulario.get('Julio').value;
  // agosto:number = this.miFormulario.get('Agosto').value;;
  // septiembre:number = this.miFormulario.get('Septiembre').value;
  // octubre:number = this.miFormulario.get('Octubre').value;
  // noviembre:number = this.miFormulario.get('Noviembre').value;
  // diciembre:number = this.miFormulario.get('Diciembre').value;
  // total: number = this.miFormulario.get('Enero').value + this.miFormulario.get('Febrero').value+ this.miFormulario.get('Marzo').value+
  // this.miFormulario.get('Abril').value + this.miFormulario.get('Mayo').value + this.miFormulario.get('Junio').value +
  // this.miFormulario.get('Julio').value + this.miFormulario.get('Agosto').value + this.miFormulario.get('Septiembre').value + 
  // this.miFormulario.get('Octubre').value + this.miFormulario.get('Noviembre').value + this.miFormulario.get('Diciembre').value
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  
  sumar():number{
    return Number(this.miFormulario.get('Enero').value) + Number(this.miFormulario.get('Febrero').value)+ Number(this.miFormulario.get('Marzo').value)+
    Number(this.miFormulario.get('Abril').value) + Number(this.miFormulario.get('Mayo').value) + Number(this.miFormulario.get('Junio').value) +
    Number(this.miFormulario.get('Julio').value) + Number(this.miFormulario.get('Agosto').value) + Number(this.miFormulario.get('Septiembre').value) + 
    Number(this.miFormulario.get('Octubre').value) + Number(this.miFormulario.get('Noviembre').value) + Number(this.miFormulario.get('Diciembre').value)
  }

}
