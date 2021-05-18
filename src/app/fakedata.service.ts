import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './models/posts.model';

@Injectable({
  providedIn: 'root'
})
export class FakedataService {

  //inject HttpClient object
  constructor(private hc:HttpClient) { }

  getPosts():Observable<Post[]>{
    return this.hc.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPostById(id):Observable<Post>{
    return this.hc.get<Post>('https://jsonplaceholder.typicode.com/posts/'+id);
  }

  getUsers():Observable<any>{
    return this.hc.get<any>('https://reqres.in/api/users?page=2');
  }

 getUnknown():Observable<object>{
    return this.hc.get<object>('https://reqres.in/api/unknown');
  }

  getUsers2():Observable<object[]>{
    return this.hc.get<object[]>('https://jsonplaceholder.typicode.com/users');
  }
}
