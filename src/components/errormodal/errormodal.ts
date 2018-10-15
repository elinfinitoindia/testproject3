import { Component } from '@angular/core';

/**
 * Generated class for the ErrormodalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'errormodal',
  templateUrl: 'errormodal.html'
})
export class ErrormodalComponent {

  text: string;

  constructor() {
    console.log('Hello ErrormodalComponent Component');
    this.text = 'Hello World';
  }

}
