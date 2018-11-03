import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppMinimize } from '@ionic-native/app-minimize';
import { SharedProvider } from '../providers/shared/shared';



// this is the definition used for navigating between pages 
// and also used to allow tab as well as side menu
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

  // Rootpage is set to tabs page so that first page is tab page(tabs+sidemenu)
  // Implementation of lazy loading requires string as no component refrence is required.
  rootPage: string = "tabs-page";
  @ViewChild(Nav) nav: Nav;



  constructor(private platform: Platform, private appMinimize: AppMinimize, private sharedService: SharedProvider) {
    // this.platform.registerBackButtonAction(() => {
    //   this.appMinimize.minimize();
    // });
    this.initializeApp();
  }

  initializeApp() {
    this.platform.registerBackButtonAction(() => {
      // Catches the active view
      let nav = this.nav.getActiveChildNavs()[0];
      let activeView = this.nav.getActive();
      console.log(activeView);
      // Checks if can go back before show up the alert
      if (activeView.component.name === 'TabsPage') {
        this.nav.setRoot('tabs-page');
      }
      else if (activeView.component.name == "tabs-page") {
        this.sharedService.createToast('App will exit');
        this.appMinimize.minimize();
      }
      if (this.nav.canGoBack()) {
        this.nav.pop();
      }
      else {
        this.nav.setRoot('tabs-page');
      }

    });
  }

  // the pages that will show tabs require tabcomponent.
  pages: PageInterface[] = [
    { title: 'Home', name: 'tabs-page', component: 'TabsPage', tabComponent: 'HomePage', index: 0, icon: 'home' },
    { title: 'Stores', name: 'tabs-page', component: 'TabsPage', tabComponent: 'StoresPage', icon: 'md-basket' },
    { title: 'Deals', name: 'tabs-page', component: 'TabsPage', tabComponent: 'DealsPage', index: 1, icon: 'md-cash' },
    { title: 'Brands', name: 'BrandsPage', component: 'BrandsPage', icon: 'md-cash' },
    { title: 'My Account', name: 'ProfilePage', component: 'ProfilePage', icon: 'md-cash' },
    { title: 'Login', name: 'LoginPage', component: 'LoginPage', icon: 'md-cash' },
    { title: 'Detail', name: 'OfferdetailPage', component: 'OfferdetailPage', icon: 'md-cash' },
  ];

  openPage(page: PageInterface) {

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
      this.nav.setRoot(page.name, params).catch((err: any) => {
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
