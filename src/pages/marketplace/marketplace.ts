import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MarketplacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-marketplace',
  templateUrl: 'marketplace.html',
})
export class MarketplacePage {

  public name:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = 'New Year'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarketplacePage');
  }

}
