import { OffercardsComponent } from './../../components/offercards/offercards';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OffersProvider } from '../../providers/offers/offers';


@IonicPage()
@Component({
  selector: 'page-offercardlist',
  templateUrl: 'offercardlist.html',
})
export class OffercardlistPage {


  public lists: any;
  public id;
  constructor(public navCtrl: NavController, public navParams: NavParams, private offerService:OffersProvider) {
    this.id = this.navParams.get('id');
  }

  ionViewDidLoad() {
   this.offerService.getByBrandId(this.id).subscribe(res=>{
     this.lists = res;
   })
  }

}
