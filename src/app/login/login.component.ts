import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mode:number = 0 ;
  constructor(private _auth: AuthenticationService) { }

  ngOnInit() {
  }

  onLogin(user) {
    this._auth.login(user).subscribe(resp =>{
      let jwt=resp.headers.get('authorization');
      console.log(jwt);
    },
      err=>{
       this.mode = 1;
      })
  }
  onregister() {

  }

}
