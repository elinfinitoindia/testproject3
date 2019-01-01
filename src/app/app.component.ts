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

  constructor(private platform: Platform, private appMinimize: AppMinimize, private sharedService: SharedProvider, private splashscreen: SplashScreen) {

    platform.ready().then(() => {
      // this.splashscreen.hide();
    });
    this.initializeApp();
  }

  initializeApp() {
  
    if (this.sharedService.getToken() != null || this.sharedService.getToken() != undefined) {
      var a =
        { title: 'Login', name: 'LoginPage', component: 'LoginPage', icon: 'md-power' }

      this.pages.push(a);

    }
    else {
      var a =
        { title: 'Profile', name: 'LoginPage', component: 'LoginPage', icon: 'md-power' }

      this.pages.push(a);
    }
  }

  // the pages that will show tabs require tabcomponent.
  pages: PageInterface[] = [
    { title: 'Home', name: 'tabs-page', component: 'TabsPage', tabComponent: 'HomePage', index: 0, icon: 'home' },
    { title: 'Stores', name: 'StoresPage', component: 'StoresPage', icon: 'md-basket' },
    { title: 'Brands', name: 'BrandsPage', component: 'BrandsPage', icon: 'md-briefcase' },
    { title: 'Category', name: 'CategoriesPage', component: 'CategoriesPage', icon: 'md-archive' },
    // { title: 'Deals', name: 'tabs-page', component: 'TabsPage', tabComponent: 'DealsPage', index: 1, icon: 'md-flame' },
    { title: 'My Account', name: 'ProfilePage', component: 'ProfilePage', icon: 'md-person' },
    // { title: 'Login', name: 'LoginPage', component: 'LoginPage', icon: 'md-power' },
    { title: 'Share', name: 'SharePage', component: 'SharePage', icon: 'md-share' }
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
    }
    else {
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
