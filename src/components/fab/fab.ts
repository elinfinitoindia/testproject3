import { Component } from '@angular/core';

/**
 * Generated class for the FabComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'fab',
  templateUrl: 'fab.html'
})
export class FabComponent {

  text: string;

  constructor() {
    console.log('Hello FabComponent Component');
    this.text = 'Hello World';
  }

}
