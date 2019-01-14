import { Component, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the RegisterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'profile',
  templateUrl: 'profile.html'
})
export class ProfileComponent {

  text: string;
  @Output() logout = new EventEmitter();

  constructor(private navCtrl:NavController) {
    console.log('Hello RegisterComponent Component');
    this.text = 'Hello World';
  }
  logOut
  (){
    this.logout.emit(true);
  }

  changePassword(){
    this.navCtrl.push('PasswordchangePage', {
      changePassword: "true"
    })
  }
}
