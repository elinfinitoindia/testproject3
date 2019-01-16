import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppMinimize } from '@ionic-native/app-minimize';
import { SharedProvider } from '../providers/shared/shared';
import {TabsPage} from '../pages/tabs/tabs';
import {Device} from '@ionic-native/device';
import { Network } from '@ionic-native/network';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { App } from 'ionic-angular';

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
  rootPage: string = "TabsPage";
  @ViewChild(Nav) nav: Nav;
 
  public counter = 0;

  constructor(
    private platform: Platform,
    private appMinimize: AppMinimize,
    private sharedService: SharedProvider,
    private splashscreen: SplashScreen,
    private device:Device,
    private network:Network , 
    private uniqueDeviceID: UniqueDeviceID,
    public app: App)
  {

    platform.ready().then(() => {
      this.platform.registerBackButtonAction(() => {
        let nav = app.getActiveNavs()[0];
        if (nav.canGoBack()) {
          nav.pop();
        }
        else if (this.nav.getActiveChildNavs()[0]
          .getSelected().root === 'HomePage') {
          if (this.counter == 0) {
            this.counter++;
            this.sharedService.createToast('Press back again to exit the applicaiton')
            setTimeout(() => { this.counter = 0 }, 3000)
          } else {
            this.appMinimize.minimize();
          }
        }
        else {
          this.nav.setRoot('TabsPage');
        }
      }, 100);
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

    // stop connect watch
    
    console.log(this.device.uuid);
    console.log(this.device.model);
    console.log(this.device.manufacturer);

    this.sharedService.onConnect();
    this.sharedService.onDisconnect();
    var status = localStorage.getItem('nT');
    console.log(status);
    this.uniqueDeviceID.get()
      .then((uuid: any) => console.log(uuid))
      .catch((error: any) => console.log(error));

  }

  // the pages that will show tabs require tabcomponent.
  pages: PageInterface[] = [
    { title: 'Home', name: 'TabsPage', component: 'TabsPage', tabComponent: 'HomePage', index: 0, icon: 'home' },
    { title: 'Stores', name: 'StoresPage', component: 'StoresPage', icon: 'md-basket' },
    { title: 'Brands', name: 'BrandsPage', component: 'BrandsPage', icon: 'md-briefcase' },
    { title: 'Category', name: 'CategoriesPage', component: 'CategoriesPage', icon: 'md-archive' },
    { title: 'Deals', name: 'TabsPage', component: 'TabsPage', tabComponent: 'DealsPage', index: 1, icon: 'md-flame' },
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

    // If tabs page is already active just change the tab index
    if (this.nav.getActiveChildNavs().length && page.index != undefined) {
      this.nav.getActiveChildNavs()[0].select(page.index);
    } else {
      // Tabs are not active, so reset the root page 
      // In this case: moving to or from SpecialPage
      this.nav.setRoot(page.name, params);
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
