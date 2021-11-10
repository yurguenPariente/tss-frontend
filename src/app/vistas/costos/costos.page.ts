import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VentasMes } from 'src/app/interfaces/ventasMensuales';


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
  ventasMes: VentasMes = {
    alta:100,
    media:0,
    baja:0,
    enero:0,
    febrero:0,
    marzo:0,
    abril:0,
    mayo:0,
    junio:0,
    julio:0,
    agosto:0,
    septiembre:0,
    octubre:0,
    noviembre:0,
    diciembre:0,
    total: 0
  }
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
  miFormulario: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.leer();
    this.miFormulario= this.fb.group({
      tipo:["manufactura y servicios", Validators.required],
      altas:[this.ventasMes.alta,[Validators.required,Validators.max(1000000)]],
      medias:[this.ventasMes.media || 0,[Validators.required,Validators.max(1000000)]],
      bajas:[this.ventasMes.baja || 0,[Validators.required,Validators.max(1000000)]],
      Enero:[this.ventasMes.enero || "",[Validators.required]],
      Febrero:[this.ventasMes.febrero || "",[Validators.required]],
      Marzo:[this.ventasMes.marzo || "",[Validators.required]],
      Abril:[this.ventasMes.abril || "",[Validators.required]],
      Mayo:[this.ventasMes.mayo || "",[Validators.required]],
      Junio:[this.ventasMes.junio || "",[Validators.required]],
      Julio:[this.ventasMes.julio || "",[Validators.required]],
      Agosto:[this.ventasMes.agosto || "",[Validators.required]],
      Septiembre:[this.ventasMes.septiembre || "",[Validators.required]],
      Octubre:[this.ventasMes.octubre || "",[Validators.required]],
      Noviembre:[this.ventasMes.noviembre || "",[Validators.required]],
      Diciembre:[this.ventasMes.diciembre || "",[Validators.required]]
    })
    
  }
  
  sumar():number{
    return Number(this.miFormulario.get('Enero').value) + Number(this.miFormulario.get('Febrero').value)+ Number(this.miFormulario.get('Marzo').value)+
    Number(this.miFormulario.get('Abril').value) + Number(this.miFormulario.get('Mayo').value) + Number(this.miFormulario.get('Junio').value) +
    Number(this.miFormulario.get('Julio').value) + Number(this.miFormulario.get('Agosto').value) + Number(this.miFormulario.get('Septiembre').value) + 
    Number(this.miFormulario.get('Octubre').value) + Number(this.miFormulario.get('Noviembre').value) + Number(this.miFormulario.get('Diciembre').value)
  }

  guardar(){
    this.ventasMes = {
        alta :this.miFormulario.get('altas').value,
        media : this.miFormulario.get('medias').value,
        baja:this.miFormulario.get('bajas').value,
        enero: this.miFormulario.get('Enero').value,
        febrero: this.miFormulario.get('Febrero').value,
        marzo:this.miFormulario.get('Marzo').value,
        abril: this.miFormulario.get('Abril').value,
        mayo: this.miFormulario.get('Mayo').value,
        junio: this.miFormulario.get('Junio').value,
        julio:this.miFormulario.get('Julio').value,
        agosto: this.miFormulario.get('Agosto').value,
        septiembre: this.miFormulario.get('Septiembre').value,
        octubre: this.miFormulario.get('Octubre').value,
        noviembre: this.miFormulario.get('Noviembre').value,
        diciembre: this.miFormulario.get('Diciembre').value,
        total: this.sumar()
    }
    localStorage.setItem('ventasMes',JSON.stringify(this.ventasMes));
    
  }

  leer(){
    const valorLocal = localStorage.getItem('ventasMes');
    if(valorLocal){
      this.ventasMes = JSON.parse(valorLocal);
    }
  }
}
