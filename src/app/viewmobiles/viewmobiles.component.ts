import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { Mobile } from '../models/mobile.model';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-viewmobiles',
  templateUrl: './viewmobiles.component.html',
  styleUrls: ['./viewmobiles.component.css']
})
export class ViewmobilesComponent implements OnInit {

  searchTerm:string;
  mobiles:Mobile[]=[];

  //mobiles = new Observable<Mobile[]>();
  constructor(private dsObj:DataService) { }

  ngOnInit(): void {
    
    this.dsObj.getMobilesData().subscribe(
      data=>{
        this.mobiles=data;
      },
      err=>{
        console.log('err is',err)
      }
    )
    

    //to use async_obj(Observable) without subscribing
    //this.mobiles = this.dsObj.getMobilesData();
  }

}
