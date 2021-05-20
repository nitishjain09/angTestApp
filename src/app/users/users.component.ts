import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { Subscription } from 'rxjs';
 
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  mySubs:Subscription;
  usersData:User[] = [];
  constructor(private udObj:UserdataService, private routerObj:Router) { }

  ngOnInit(): void {
    this.mySubs = this.udObj.getUsersData().subscribe(
      data => {
        this.usersData = data;
      },
      err => {
        console.log("Error in getting usersData! "+err);
      }
    )
  }

  onClickShowMore(id){ 
    this.routerObj.navigateByUrl('userdetails/'+id);
  }

  ngOnDestroy(){
    this.mySubs.unsubscribe();
  }

}
