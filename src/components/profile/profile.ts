import { Component, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Profile } from '../../models/profile';
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
  public profile;
  public editFormStatus: boolean = true;
  public btnStatus: boolean = false;

  constructor(private navCtrl: NavController) {
    console.log('Hello RegisterComponent Component');
    this.text = 'Hello World';
    this.profile = new Profile();
  }

  logOut() {
    this.logout.emit(true);
  }

  changePassword() {
    this.navCtrl.push('PasswordchangePage', {
      changePassword: "true"
    })
  }

  editDetails() {
    this.editFormStatus = false;
    console.log(this.editFormStatus)
    this.btnStatus = true;
    
  }
  saveDetail(){
    this.editFormStatus = true;
    this.btnStatus = false;
  }
}
