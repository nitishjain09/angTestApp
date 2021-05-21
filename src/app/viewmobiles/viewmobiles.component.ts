import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Mobile } from '../models/mobile.model';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-viewmobiles',
  templateUrl: './viewmobiles.component.html',
  styleUrls: ['./viewmobiles.component.css']
})
export class ViewmobilesComponent implements OnInit {

  mobiles:Mobile[]=[];
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
  }

}
