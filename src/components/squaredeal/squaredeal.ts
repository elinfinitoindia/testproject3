import { Component, Input } from '@angular/core';

/**
 * Generated class for the SquaredealComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'squaredeal',
  templateUrl: 'squaredeal.html'
})
export class SquaredealComponent {

  text: string;
  @Input() deals:any;

  constructor() {
    console.log('Hello SquaredealComponent Component');
    this.text = 'Hello World';
    
  }

}
