import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/product.model'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent{
  
  //to recieve data from parent as input
  @Input() productObj:Product; //input inducates to take info from parent comp

  //create a custom event
  @Output() myEvent=new EventEmitter();
  @Output() myEvent2=new EventEmitter(); 

  count:number=0;
  sendProductDetailsToParent(productTitle){
    //emit data to parent
    this.myEvent.emit(productTitle);
    this.count++;
  }

  removeProduct(productTitle){
    this.myEvent2.emit(productTitle);
    this.count--;
  }



}
