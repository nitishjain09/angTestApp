import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private hc:HttpClient) { }

  getUsersData():Observable<User[]>{
    return this.hc.get<User[]>('http://localhost:3000/users');
  }

  getUserDataById(id):Observable<User>{
    return this.hc.get<User>('http://localhost:3000/users/' + id);
  }
}
