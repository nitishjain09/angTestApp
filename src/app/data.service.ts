import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mobile } from './models/mobile.model';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  //inject HttpClient service object
  constructor(private hc:HttpClient) { }


    

      //to read all mobiles data
      getMobilesData():Observable<Mobile[]>{
        //http get
        return this.hc.get<Mobile[]>("http://localhost:3000/mobiles")
      }

      //to save/create new mobile
      createNewMobile(mobileObj):Observable<any>{
        return this.hc.post('http://localhost:3000/mobiles',mobileObj);
      }

      //update Mobile
      updateMobile(modifiedMobileObj):Observable<any>{
        return this.hc.put("http://localhost:3000/mobiles/"+modifiedMobileObj.id, modifiedMobileObj);
      }

      //delete mobile
      deleteMobile(id):Observable<any>{
        return this.hc.delete("http://localhost:3000/mobiles/"+id);
      }

}
