import { Component } from '@angular/core';

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
  public deals:any = [];

  constructor() {
    console.log('Hello SquaredealComponent Component');
    this.text = 'Hello World';
    this.deals = [{
      'name':'Prateek',
      'link':'http://elinfinitoindia.in'
    },
    {
      'name':'Prateek1',
      'link':'http://elinfinitoindia.in'
    },
    {
      'name':'Prateek2',
      'link':'http://elinfinitoindia.in'
    },
    {
      'name':'Prateek3',
      'link':'http://elinfinitoindia.in'
    },
    {
      'name':'Prateek4',
      'link':'http://elinfinitoindia.in'
    },
    {
      'name':'Prateek5',
      'link':'http://elinfinitoindia.in'
    },]
  }

}
