import { Component } from '@angular/core';
import { Redeem } from '../../models/redeem';
/**
 * Generated class for the RedeemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'redeem',
  templateUrl: 'redeem.html'
})
export class RedeemComponent {

  text: string;
  public redeem;

  constructor() {
    console.log('Hello RedeemComponent Component');
    this.text = 'Hello World';
    this.redeem = new Redeem();
  }

  redeemRequest() {
    console.log(this.redeem);
  }

}
