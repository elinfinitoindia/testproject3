import { Component, Input } from '@angular/core';

/**
 * Generated class for the ListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'list',
  templateUrl: 'list.html'
})
export class ListComponent {

  // @Input() items: any = [];
  public items: any;
  text: string;
  public categories: any;

  constructor() {
    console.log('Hello ListComponent Component');
    this.text = 'Hello World';

    this.items = [
      {
        title: 'Prateek'
      },
      {
        title: 'Prateek1'
      }
    ];

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
