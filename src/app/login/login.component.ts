import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mode:number = 0 ;
  constructor(
               private _auth: AuthenticationService ,
               private _route: Router

             ) { }

  ngOnInit() {
  }

  onLogin(user) {
    this._auth.login(user).subscribe(resp =>{
      let jwt=resp.headers.get('authorization');
      this._auth.saveToken(jwt);
      this._route.navigateByUrl('/tasks');
    },
      err=>{
       this.mode = 1;
      })
  }
  onregister() {

  }

}
