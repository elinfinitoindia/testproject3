import { Component, Input } from '@angular/core';

@Component({
  selector: 'offercards',
  templateUrl: 'offercards.html'
})
export class OffercardsComponent {

  @Input() lists: any;
  text: string;

  constructor() {
    console.log('Hello OffercardsComponent Component');
    this.text = 'Hello World';
  }


  getList(evnt) {
    console.log(evnt.currentTarget);
  }

}
