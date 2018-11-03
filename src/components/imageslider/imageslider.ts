import { Component } from '@angular/core';

/**
 * Generated class for the ImagesliderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'imageslider',
  templateUrl: 'imageslider.html'
})
export class ImagesliderComponent {

  text: string;

  constructor() {
    console.log('Hello ImagesliderComponent Component');
    this.text = 'Hello World';
  }

}
