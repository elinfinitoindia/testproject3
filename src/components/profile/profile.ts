import { Component, Output, EventEmitter } from '@angular/core';

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

  constructor() {
    console.log('Hello RegisterComponent Component');
    this.text = 'Hello World';
  }
  logOut
  (){
    this.logout.emit(true);
  }
}
