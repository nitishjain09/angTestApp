import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private routerObj:Router){}

  canActivate(): boolean{
    
    if(localStorage.getItem('username')==null){
      alert('Login to continue.');
      this.routerObj.navigateByUrl('login');
      return false;
    }
    else{
      return true;
    }
  }
  
}
