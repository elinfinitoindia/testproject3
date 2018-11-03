import { Component } from '@angular/core';

/**
 * Generated class for the AdsliderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'adslider',
  templateUrl: 'adslider.html'
})
export class AdsliderComponent {

  text: string;

  constructor() {
    console.log('Hello AdsliderComponent Component');
    this.text = 'Hello World';
  }

}
