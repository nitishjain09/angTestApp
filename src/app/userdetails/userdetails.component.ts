import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FakedataService } from '../fakedata.service';
import { Post } from '../models/posts.model';
import { User } from '../models/user.model';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit, OnDestroy {

  postObj:Post;
  userObj:User;
  mySubs: Subscription;

  constructor(private ar:ActivatedRoute, private udObj:UserdataService) { }

  ngOnInit(): void {
    
    //get id from url
    let id = this.ar.snapshot.params.id;

    /*
    //get data of post with current id
    this.fsObj.getPostById(id).subscribe(
      obj=>{
        this.postObj = obj;
      },
      err=>{
        console.log("Error!"+err);
      }
    )
   */

    this.mySubs = this.udObj.getUserDataById(id).subscribe(
      obj => {
        this.userObj = obj;
      },
      err=>{
        console.log("Error in getting user data! " + err);
      }
    )
    
  }

  ngOnDestroy(){
    //console.log('Destroyed!');
    this.mySubs.unsubscribe();
  }


}
