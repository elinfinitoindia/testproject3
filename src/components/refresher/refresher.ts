import { Component, Output, EventEmitter } from '@angular/core';
import { Refresher } from 'ionic-angular';

/**
 * Generated class for the RefresherComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'refresher',
  templateUrl: 'refresher.html'
})
export class RefresherComponent {

  text: string;
  @Output() refresh = new EventEmitter();


  constructor() {
    console.log('Hello RefresherComponent Component');
    this.text = 'Hello World';
  }


  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.refresh.emit(refresher);
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

}
