import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute, private router:Router) { }
  navegar(){
    this.router.navigateByUrl('/folder/vistas')
  }
  ngOnInit() {
     //this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
