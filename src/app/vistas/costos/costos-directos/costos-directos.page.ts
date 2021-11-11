import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../../modal/modal.page';

interface CostosDirectos{
  nombre:string;
  tipo:string;
  cantidad:number;
  unidadDeVenta:string;
  frecuencia:string;
  precioV:number,
  precioC:number,
  totalC:number,
  totalV:number,
  mub:number
}
const datos: CostosDirectos[] = [
  {nombre:'',tipo:'',cantidad:0,unidadDeVenta:'',frecuencia:'',precioC:0,precioV:0,totalC:0,totalV:0,mub:0},
  {nombre:'',tipo:'',cantidad:0,unidadDeVenta:'',frecuencia:'',precioC:0,precioV:0,totalC:0,totalV:0,mub:0},
  {nombre:'',tipo:'',cantidad:0,unidadDeVenta:'',frecuencia:'',precioC:0,precioV:0,totalC:0,totalV:0,mub:0}
]

@Component({
  selector: 'app-costos-directos',
  templateUrl: './costos-directos.page.html',
  styleUrls: ['./costos-directos.page.scss'],
})
export class CostosDirectosPage implements OnInit {
  displayedColumns: string[] = ['producto', 'tipo', 'cantidad', 'unidad de venta','frecuencia','precio C','precio V'];
  dataSource = datos;
  isLinear = false;
  FormGroups: FormGroup[] = [];
  nombres: string[] = [];
  constructor(public modalCtrl: ModalController, private _formBuilder: FormBuilder) { }
    
  ngOnInit() {
    const local = localStorage.getItem('servicios');

    if(!local){
      this.abrirModal();
    }else{
      this.nombres = local.split(',');
      this.crearGrupos();
    }
    
  }

  crearGrupos(){
    for(let nom of this.nombres){
      this.FormGroups.push(
        this._formBuilder.group({
          name:['', Validators.required]
        })
      )
    }
  }

  async abrirModal(){
    const modal = await this.modalCtrl.create({
      component: ModalPage
    })
    await modal.present();
   
  }

}
