import { Component } from '@angular/core';

/**
 * Generated class for the HistoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'history',
  templateUrl: 'history.html'
})
export class HistoryComponent {

  text: string;
  public items;

  constructor() {
    console.log('Hello HistoryComponent Component');
    this.text = 'Hello World';
 this.items = [
      {
        'name':'Prateek',
        'status':'true',
      },
      {
        'name': 'Prateek1',
        'status': 'false',
      },
      {
        'name': 'Prateek2',
        'status': 'true',
      },
      {
        'name':'Prateek3',
        'status':'true',
      }
    ]
   console.log(this.items);
  }



}
