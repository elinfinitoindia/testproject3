import { Component } from '@angular/core';

/**
 * Generated class for the AdscardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'adscard',
  templateUrl: 'adscard.html'
})
export class AdscardComponent {

  text: string;

  constructor() {
    console.log('Hello AdscardComponent Component');
    this.text = 'Hello World';
  }

}
