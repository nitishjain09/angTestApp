import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  n:number=50;
  r:number=0.5;
  
  today= new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
