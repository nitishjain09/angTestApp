import { Component, OnInit } from '@angular/core';
import { FakedataService } from '../fakedata.service';
import { Post } from '../models/posts.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  myPosts:Post[]=[];
  users;
  unknown:any;
  users2:object[]=[];

  //inject fakedata service object
  constructor(private fsObj:FakedataService) { }

  
  ngOnInit(): void {
    /*this.fsObj.getPosts().subscribe(
      postsData => {
        //assign posts
        this.myPosts=postsData;
      },
      err=>{
        console.log("err in getting posts data",err);
      }
    )*/

    /*this.fsObj.getUsers().subscribe(
      usersData=>{
        this.users=usersData;
      },
      err=>{
        console.log('err in getting users data',err);
      }
    )*/

    /*this.fsObj.getUnknown().subscribe(
      unknownData=>{
        this.unknown=unknownData;
      },
      err=>{
        console.log('Error!',err);
      }
    )*/

    this.fsObj.getUsers2().subscribe(
      users2Data=>{
        this.users2=users2Data;
      },
      err=>{
        console.log('err in getting users data',err);
      }
    )
  }

}
