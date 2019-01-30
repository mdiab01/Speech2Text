import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
 login = {
  email: "",
  password: ""
 }
  // results;

  constructor( public _user: UserServiceProvider, 
    public navCtrl: NavController, public navParams: NavParams) {
   this.login
  }

  getLogin () {
    this._user.getLogin(this.login)
    .subscribe((response: any) => { 
      // this.results = response;
      window.sessionStorage.setItem('token', response.token);
      window.sessionStorage.setItem('userId', response.userId);
      this.navCtrl.setRoot(HomePage)
    })
  }

  toReg () {
    this.navCtrl.parent.select(2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
