import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [] 
})

export class AppComponent {

  constructor(public dsObj:DataService){ }

  /*
  names:string[]=[];
  addName(name:string){
    this.names.push(name);
   // console.log(name)
  }

  status:boolean = false;
  changeStatus(){
    this.status = !this.status
  }
  */

  
}
