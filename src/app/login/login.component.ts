import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private routerObj:Router) { }

  ngOnInit(): void {
  }

  onLogin(ref){
    let userLoginObj=ref.value;

    //if username and password are admin, only then navigate to adminComponent
    if(userLoginObj.username != 'admin'){
      alert("Invalid username");
    }
    else if(userLoginObj.password != 'admin'){
      alert("Invalid password");
    }
    else{
      //save username in local storage
      localStorage.setItem("username",'admin');
      //navigate to admin component
      this.routerObj.navigateByUrl("/admin");
    }
  }
}
