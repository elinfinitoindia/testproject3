import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

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
  @Input() deals:any;

  constructor( private navCtrl: NavController) {
    console.log('Hello SquaredealComponent Component');
    this.text = 'Hello World';
    
  }

  getOfferDetail(event){
    this.navCtrl.push('OfferdetailPage',{
      id:event.ID,
      name:event.Name
    })
  }

}
