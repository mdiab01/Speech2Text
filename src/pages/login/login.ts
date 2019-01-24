import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username;
  password;
  showfailed = false;

  constructor( public _user: UserServiceProvider, 
    public navCtrl: NavController, public navParams: NavParams) {
    this.username = '';
    this.password = '';
  }

  login () {
     
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
