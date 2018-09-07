import { Component, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Clipboard } from '@ionic-native/clipboard';

/**
 * Generated class for the OfferdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offerdetail',
  templateUrl: 'offerdetail.html',
})
export class OfferdetailPage implements AfterViewInit {

  constructor(public navCtrl: NavController, public navParams: NavParams, private clipboard: Clipboard) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfferdetailPage');

  }


  ionViewDidEnter() {
    // this.clipboard.copy('hi ');

    // alert('coupon copy');
  }

  ngAfterViewInit() {
   

  }
}
