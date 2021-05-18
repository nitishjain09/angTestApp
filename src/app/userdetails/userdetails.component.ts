import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakedataService } from '../fakedata.service';
import { Post } from '../models/posts.model';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  postObj:Post;

  constructor(private ar:ActivatedRoute, private fsObj:FakedataService) { }

  ngOnInit(): void {
    //get id from url
    let id = this.ar.snapshot.params.id;

    //get data of post with current id
    this.fsObj.getPostById(id).subscribe(
      obj=>{
        this.postObj = obj;
      },
      err=>{
        console.log("Error!"+err);
      }
    )
  }

}
