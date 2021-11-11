import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyecto } from 'src/app/proyecto';

@Component({
  selector: 'app-detallers-proyecto',
  templateUrl: './detallers-proyecto.page.html',
  styleUrls: ['./detallers-proyecto.page.scss'],
})
export class DetallersProyectoPage implements OnInit {

  miFormulario: FormGroup;

  proyecto: Proyecto = {
    nombre:'',
    representante:'',
    direccion:'',
    nit:'',
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.miFormulario= this.fb.group({
      nombre:[this.proyecto.nombre, Validators.required],
      representante:[this.proyecto.representante,[Validators.required]],
      direccion:[this.proyecto.direccion,[Validators.required]],      
      nit:[this.proyecto.nit,[Validators.required]],      
    })
  }

  guardarDatos() {
    //console.log("Nombre del proyecto: "+nom.value+" , representante legal: "+rep.value+" ,direccion: "+dir.value+" ,NIT: "+nit.value);   
    this.proyecto = {
      nombre :this.miFormulario.get('nombre').value,
      representante : this.miFormulario.get('representante').value,
      direccion:this.miFormulario.get('direccion').value,
      nit: this.miFormulario.get('nit').value,    
    } 
    console.log(this.proyecto)
  }
}
