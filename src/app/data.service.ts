import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  //inject HttpClient service object
  constructor(private hc:HttpClient) { }


    


      getMobilesData():Observable<Product[]>{
        //http get
        return this.hc.get<Product[]>("http://localhost:3000/mobiles")
      }

}
