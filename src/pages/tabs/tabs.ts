import { MarketplacePage } from './../marketplace/marketplace';
import { DealsPage } from './../deals/deals';
import { HomePage } from './../home/home';
import { IonicPage } from 'ionic-angular';
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

  constructor() {

  }
}
