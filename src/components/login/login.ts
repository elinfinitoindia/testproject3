import { Component, EventEmitter, Output } from '@angular/core';
import { SharedProvider } from '../../providers/shared/shared';
import { NavController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';

/**
 * Generated class for the LoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {

  text: string;
  public res;
  @Output() loginStatus = new EventEmitter();

  constructor(private sharedService: SharedProvider, private navCtrl: NavController, private loginService:LoginProvider) {
    console.log('Hello LoginComponent Component');
    this.text = 'Hello World';
  }

  loginwithEmail() {
    // setting the login status in localStorage;
    this.sharedService.setLoginStatus(true);
    this.loginStatus.emit('true');
    // this.navCtrl.setRoot('HomePage');
  }

  forgotPassword(){
    this.navCtrl.push('PasswordchangePage');
  }
  loginWithGoogle(){
    this.loginService.login(a => {
      this.res = a;
      this.sharedService.setToken(this.res.accessToken);
    });
  }
}
