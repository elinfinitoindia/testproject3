import { MarketplacePage } from './../marketplace/marketplace';
import { DealsPage } from './../deals/deals';
import { HomePage } from './../home/home';
import { IonicPage, Platform, NavController } from 'ionic-angular';
import { Component } from '@angular/core';


@IonicPage(
  {
    name: 'tabs-page'
  }
)
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  HomePage: any = 'HomePage';
  DealsPage: any = "DealsPage";
  MarketplacePage: any = "MarketplacePage";

  constructor(private platform: Platform, private navCtrl: NavController) {

  }
}
