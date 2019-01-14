import { MarketplacePage } from './../marketplace/marketplace';
import { DealsPage } from './../deals/deals';
import { HomePage } from './../home/home';
import { IonicPage, Platform, NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';


@IonicPage(
  {
    name: 'TabsPage'
  }
)
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  HomePage: any = 'HomePage';
  DealsPage: any = "DealsPage";
  MarketplacePage: any = "MarketplacePage";
  myIndex:number;

  constructor(private platform: Platform, private navCtrl: NavController , private navParams:NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
  }
}
