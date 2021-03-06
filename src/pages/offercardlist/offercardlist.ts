import { OffercardsComponent } from './../../components/offercards/offercards';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OffercardlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offercardlist',
  templateUrl: 'offercardlist.html',
})
export class OffercardlistPage {


  public lists: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lists = [
      { title: 'Prateek' },
      { title: 'Prasson' }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OffercardlistPage');
  }

}
