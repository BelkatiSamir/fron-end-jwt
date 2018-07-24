import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthenticationService {
  private host: string = 'http://localhost:8080';
  constructor(private _http: HttpClient) { }


  login(user) {
    return this._http.post(this.host+"/login",user, {observe: 'response'});
  }
}
