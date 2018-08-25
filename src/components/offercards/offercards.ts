import { Component } from '@angular/core';

/**
 * Generated class for the OffercardsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'offercards',
  templateUrl: 'offercards.html'
})
export class OffercardsComponent {

  text: string;

  constructor() {
    console.log('Hello OffercardsComponent Component');
    this.text = 'Hello World';
  }

}
