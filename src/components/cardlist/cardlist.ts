import { Component } from '@angular/core';

/**
 * Generated class for the CardlistComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cardlist',
  templateUrl: 'cardlist.html'
})
export class CardlistComponent {

  text: string;
  public categories;

  constructor() {
    console.log('Hello CardlistComponent Component');
    this.text = 'Hello World';
    this.categories = [
      { 'title': 'Mohit', 'description': 'Hello how are you?' },
      { 'title': 'Prateek', 'description': 'Hello how are you?' },
      { 'title': 'Mohit1', 'description': 'Hello how are you?' },
      { 'title': 'Mohit2', 'description': 'Hello how are you?' },
      { 'title': 'Mohit3', 'description': 'Hello how are you?' },
      { 'title': 'Mohit6', 'description': 'Hello how are you?' },
    ];
  }

}
