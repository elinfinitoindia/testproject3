import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

export interface PageInterface {
  title: string;
  name: string;
  tabComponent?: any;
  component: any;
  index?: number;
  icon: string;
}

@Component({
  templateUrl: 'app.html'
})





export class MyApp {
  rootPage: string = "tabs-page";
  @ViewChild(Nav) nav: Nav;



  pages: PageInterface[] = [
    { title: 'Home', name: 'TabsPage', component: 'TabsPage', tabComponent: 'HomePage', index: 0, icon: 'home' },
    { title: 'Stores', name: 'TabsPage', component: 'TabsPage', tabComponent: 'StoresPage', index: 1, icon: 'md-basket' },
    { title: 'Deals', name: 'TabsPage', component: 'TabsPage', tabComponent: 'DealsPage', index: 2, icon: 'md-cash' },
    { title: 'Brands', name: 'BrandsPage', component: 'BrandsPage', icon: 'md-cash' },
  ];

  openPage(page: PageInterface) {
    const animationsOptions = {
      animation: 'md-transition',
      duration: 1000
    }
    let params = {};

    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }

    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNavs().length && page.index != undefined) {
      this.nav.getActiveChildNavs()[0].select(page.index);
    } else {
      // Tabs are not active, so reset the root page 
      // In this case: moving to or from SpecialPage
      this.nav.setRoot(page.name, animationsOptions).catch((err: any) => {
        console.log(`Didn't set nav root: ${err}`);
      });
    }
  }

  isActive(page: PageInterface) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNavs()[0];

    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }

    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.name) {
      return 'primary';
    }
    return;
  }


}
