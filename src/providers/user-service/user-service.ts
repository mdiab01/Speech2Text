import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserServiceProvider {
  password: string;
  username: string;
  loggedIn: boolean;

  constructor() {
    this.loggedIn = false;
  }

}
