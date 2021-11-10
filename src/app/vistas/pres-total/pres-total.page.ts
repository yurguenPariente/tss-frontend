import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pres-total',
  templateUrl: './pres-total.page.html',
  styleUrls: ['./pres-total.page.scss'],
})
export class PresTotalPage implements OnInit {

  apFlag: boolean = false;
  piFlag: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  detallesAporte(){
    this.apFlag = !this.apFlag;
    console.log(this.apFlag);
  }
  detallesInv(){
    this.piFlag = !this.piFlag;
    console.log(this.piFlag);
  }

}
