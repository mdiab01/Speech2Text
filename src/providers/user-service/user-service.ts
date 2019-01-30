import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserServiceProvider {
  login = {
    email: "",
    password: ""
  }

  register = {
   first: "",
   last: "",
   email: "",
   password: ""
  }

  userId = window.sessionStorage.getItem ('userId');
  token = window.sessionStorage.getItem ('token');
  
  getLogin: any;
  getRegister: any;

  constructor(public _http:HttpClient) {
    this.getLogin(userinfo) {
      return this._http.post(this.api + "/login", userinfo)
    }
    
    this.getRegister(userinfo) {
      return this._http.post(this.api, userinfo)
    }
  }

}
