import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Product} from '../models/product.model'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent{
  
  //to recieve data from parent as input
  @Input() productObj:Product; //input inducates to take info from parent comp

  //create a custom event
  @Output() myEvent=new EventEmitter()

  sendProductToParent(productTitle){
    //emit data to parent
    this.myEvent.emit(productTitle);
  }

}
