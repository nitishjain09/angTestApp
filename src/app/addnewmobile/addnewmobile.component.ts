import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Mobile } from '../models/mobile.model';

@Component({
  selector: 'app-addnewmobile',
  templateUrl: './addnewmobile.component.html',
  styleUrls: ['./addnewmobile.component.css']
})
export class AddnewmobileComponent implements OnInit {

  constructor(private dsObj:DataService, private routerObj:Router) { }

  ngOnInit(): void {
  }

  mobileModel=new Mobile('','','');

  onSubmitNewMobile(){
    this.dsObj.createNewMobile(this.mobileModel).subscribe(
      //bcoz observable is returned as response and it should be handled
      res=>{
        //navigate to viewmobiles comp
        this.routerObj.navigateByUrl('products/mobiles');
      },
      err=>{
        console.log('err in creating new mobile',err);
      }
    )
  }

}
