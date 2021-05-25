import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Mobile } from 'src/app/models/mobile.model';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {

  mobiles:Mobile[]=[];
  editMobileIndex;
  editMobileObj=new Mobile('','','');
  editMobileStatus:boolean=false;
  searchTerm1:string;

  constructor(private dsObj:DataService, private routerObj:Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.dsObj.getMobilesData().subscribe(
      res=>{
        this.mobiles=res;
      },
      err=>{
        console.log("err in reading products",err);
      }
    )
  }

  //to edit mobile
  editMobile(mobileObj,idx){
    this.editMobileObj=mobileObj;
    this.editMobileIndex=idx;
    this.editMobileStatus=true;

    //console.log(mobileObj);
  }

  //save mobile after edit
  saveMobile(modifiedMobileObj){
    this.editMobileStatus=false;

    modifiedMobileObj.id=this.editMobileObj["id"];
    modifiedMobileObj.productImage=this.editMobileObj["productImage"];

    this.dsObj.updateMobile(modifiedMobileObj).subscribe(
      res=>{
        console.log('Update success' , res);
      },
      err=>{
        console.log('err in update', err);
      }
    )
    //console.log(modifiedMobileObj);
  }

  //delete mobile
  deleteMobile(mobileObj){
    if(confirm('Are you sure you want to delete?')){
      this.dsObj.deleteMobile(mobileObj.id).subscribe(
        res=>{
          //console.log('Delete success. Res is ', res);
          alert('Delete Success!')
          this.getUsers();
        },
        err=>{
          console.log('error in delete', err);
        }
      )
    }
  }

}
