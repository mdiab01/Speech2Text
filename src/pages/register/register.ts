import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider} from '../../providers/user-service/user-service';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  register = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
   }
   results;

  constructor(/*public _user: UserServiceProvider*/ public navCtrl: NavController, public navParams: NavParams) {
  }

  // getRegister() {
  //   this._user.getRegister(this.register)
  //   .subscribe((response: any) => {
  //     this.results = response;
  //     window.sessionStorage.setItem('token', response.token);
  //     window.sessionStorage.setItem('userId', response.userId);
  //   })
  // }

  toHome () {
    this.navCtrl.parent.select(2);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
