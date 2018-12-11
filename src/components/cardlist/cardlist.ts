import { Component, Input } from '@angular/core';
import { OffersProvider } from '../../providers/offers/offers';
import { NavController } from 'ionic-angular';

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
  @Input() lists:any =[];

  constructor(private offerProvider:OffersProvider , private navCtrl:NavController) {
    console.log('Hello CardlistComponent Component');
    this.text = 'Hello World';
   
  }

  getOfferDetails(event){
        this.navCtrl.push('OfferdetailPage',{
          ID: event.ID
        })
      }
  

}
