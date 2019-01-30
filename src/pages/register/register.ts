import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider} from '../../providers/user-service/user-service';
import { HomePage } from '../home/home';

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
  //  results;

  constructor(public _user: UserServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  getRegister() {
    console.log(this.register)
    this._user.getRegister(this.register)
    .subscribe((response: any) => {
      // this.results = response;
      window.sessionStorage.setItem('token', response.token);
      window.sessionStorage.setItem('userId', response.userId);
      console.log(response)
      this.navCtrl.setRoot(HomePage)
    });
    
  }

  


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
