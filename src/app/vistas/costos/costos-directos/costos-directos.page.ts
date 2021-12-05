import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../../modal/modal.page';
import { CostosService } from '../../services/costos.service';
import { Costo } from '../../../interfaces/costos';

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
export class CostosDirectosPage implements OnInit{
  totalVentas: number = 0;
  totalCosto: number = 0;
  mub:number = this.costosService.sumarMub();
  displayedColumns: string[] = ['producto', 'tipo', 'cantidad', 'unidad de venta','frecuencia','precio C','precio V'];
  dataSource = datos;
  isLinear = false;
  FormGroups: FormGroup[] = [];
  nombres: string[] = [];
  costos:number[] = [];
  constructor(public modalCtrl: ModalController, private _formBuilder: FormBuilder, private costosService:CostosService) { }
    
  ngOnInit() {
   this.modal();
  }

  modal(){
    const local = localStorage.getItem('servicios');
    if(!local){
      this.abrirModal();
    }else{
      this.nombres = local.split(',');
      this.crearGrupos();
    }
  }
  totales():boolean{
    if(localStorage.getItem('ventasMes') && localStorage.getItem('costosDirectos')){
      this.totalVentas = JSON.parse(localStorage.getItem('ventasMes')).total;
      this.mub = JSON.parse(localStorage.getItem('costosDirectos')).mubTotal*100; 
      return true;
    }else{
      return false;
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

  guardarLocal(){
    localStorage.setItem('costosAnual',this.costosAnual().toString())
  }
  guardarCostos(arreglo:number[]){
    const mayor = Math.max(...arreglo);
    const menor = Math.min(...arreglo);
    const medio = arreglo.find(num => num!==mayor && num!==menor);
    const costos: Costo = {
      alto:Math.round(mayor),
      medio:Math.round(medio),
      bajo:Math.round(menor)
    }
    localStorage.setItem('costosM',JSON.stringify(costos));
  }
  costosAnual(){
    const local  = localStorage.getItem('ventasMes');
    if(local){
      const {enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre} = JSON.parse(local);
      const num = (1-this.mub/100);
      const en = enero*num;
      const feb = febrero*num;
      const mar = marzo*num;
      const ab = abril*num;
      const may = mayo*num;
      const jun = junio*num;
      const jul = julio*num;
      const ago = agosto*num;
      const sep = septiembre*num;
      const oct = octubre*num;
      const nov = noviembre*num;
      const dic = diciembre*num;
      // return (enero*(1-this.mub/100)) + (febrero*(1-this.mub/100)) +(marzo*(1-this.mub/100)) +(abril*(1-this.mub/100)) +(mayo*(1-this.mub/100)) +(junio*(1-this.mub/100))+
      // (julio*(1-this.mub/100)) + (agosto*(1-this.mub/100)) +(septiembre*(1-this.mub/100)) +(octubre*(1-this.mub/100))+(noviembre*(1-this.mub/100)) +(diciembre*(1-this.mub/100))
      const arreglo = [...new Set([en,feb,mar,ab,may,jun,jul,ago,sep,oct,nov,dic])];
      this.guardarCostos(arreglo);
      return en+feb+mar+ab+may+jun+jul+ago+sep+oct+nov+dic;
    }
    
  }

}
