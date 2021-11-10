import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  nombres: string[] = [];
  numbers:number[]=[];
  items: FormArray;
  constructor(public modalCtrl: ModalController, private fb:FormBuilder) { }
  // miFormulario: FormGroup = this.fb.group({
  //   cantidad:[1,[Validators.required, Validators.min(1)]],
  //   servicios:this.fb.array([this.createItem()])
  // })
  form = new FormGroup({
    cantidad: new FormControl(1,Validators.required),
    servicios: new FormArray([
      new FormControl('',[Validators.required]),
    ]),
  });

  get services(): FormArray {
    return this.form.get('servicios') as FormArray;
  }

  addServicio() {
    this.services.push(new FormControl('',[Validators.required]));
  }

  async close(){
    await this.modalCtrl.dismiss();
  }
  
  pasar(){
    for(let i=0;i<this.form.get('servicios').value.length;i++){
      let valor = this.form.get('servicios').get(`${i}`).value;
      console.log(valor)
      this.nombres.push(valor)
    }
  }
 
  ngOnInit() {
    this.numbers = Array(1).fill(4)    
  }

  cargarCampos(){
    this.numbers = Array(this.form.get('cantidad').value).fill(4);
    const longitud = this.form.get('servicios').value.length;
    if(this.numbers.length>= longitud ){
      this.addServicio();
      console.log(this.form.get('servicios').value)
    }else{
      console.log(longitud)
      this.services.removeAt(longitud-1);
      console.log(this.form.get('servicios').value)
    }
  }
  guardar(){
    this.pasar();
    localStorage.setItem('servicios',this.nombres.toString());
    this.close();
  }

}
