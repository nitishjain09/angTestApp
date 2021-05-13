import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  data:any;
  getData(){
    return this.data;
  }

  setData(value){
    this.data = value;
  }
}
