import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserServiceProvider {
  login = {
    email: "",
    password: ""
   };

   register = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
   }

  userId = window.sessionStorage.getItem ('userId');
  token = window.sessionStorage.getItem ('token');
  
  // getLogin: any;
  // getRegister: any;

  constructor(public http:HttpClient) {
   
  }

  getRegister(user) {

    return  this.http.post("http://localhost:3000/api/appUsers", user)
  
   };

   getLogin(user) {
    return this.http.post("http://localhost:3000/api/appUsers/login", user)
   };

}
