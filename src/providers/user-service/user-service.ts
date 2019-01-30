import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserServiceProvider {


  userId = window.sessionStorage.getItem ('userId');
  token = window.sessionStorage.getItem ('token');
  
  getLogin: any;
  getRegister: any;

  constructor(public http:HttpClient) {
    // this.getLogin(userinfo) {
    //   return this._http.post(this.api + "/login", userinfo)
    // }
    
    // this.getRegister(userinfo) {
    //   return this._http.post(this.api, userinfo)
    // }
  }

  register(user) {

    return  this.http.post("http://localhost:3000/api/appUsers", user)
  
   };

   login(user) {
    return this.http.post("http://localhost:3000/api/appUsers/login", user)
   };

}
