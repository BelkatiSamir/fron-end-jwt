import { Component } from '@angular/core';
import {AuthenticationService} from './services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private _auth: AuthenticationService ,
              private router: Router
  ){}

  onlogout(){
   this._auth.logout();
   this.router.navigateByUrl('/login');
  }
}
