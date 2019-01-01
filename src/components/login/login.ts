import { Component, EventEmitter, Output } from '@angular/core';
import { SharedProvider } from '../../providers/shared/shared';

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
  @Output() loginStatus = new EventEmitter();

  constructor(private sharedService:SharedProvider) {
    console.log('Hello LoginComponent Component');
    this.text = 'Hello World';
  }

  loginwithEmail() {
    // setting the login status in localStorage;
    this.sharedService.setLoginStatus(true);
    this.loginStatus.emit('true');
    // this.navCtrl.setRoot('HomePage');
  }

}
