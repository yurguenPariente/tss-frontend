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
    this.obtenerDatos();
    this.miFormulario= this.fb.group({
      nombre:[this.proyecto.nombre, Validators.required],
      representante:[this.proyecto.representante,[Validators.required]],
      direccion:[this.proyecto.direccion,[Validators.required]],      
      nit:[this.proyecto.nit,[Validators.required]],      
    })
  }

  obtenerDatos(){
    var datos:Proyecto = JSON.parse(localStorage.getItem("detallesProyecto")); 
    console.log("datos "+datos);
    if(datos){
      try {
        /*this.proyecto.nombre = datos.nombre;
        this.proyecto.direccion = datos.direccion;
        this.proyecto.nit = datos.nit;
        this.proyecto.representante = datos.representante;*/
        this.proyecto = datos;
       
        
      } catch (error) {
        
      }
    }
    
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
    localStorage.setItem('detallesProyecto',JSON.stringify(this.proyecto));
  }
}
