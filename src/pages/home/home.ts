import { OfferdetailPage } from './../offerdetail/offerdetail';
import { AppMinimize } from '@ionic-native/app-minimize';
import { SharedProvider } from './../../providers/shared/shared';
import { LoginProvider } from './../../providers/login/login';
import { ToolsegmentbtnComponent } from './../../components/toolsegmentbtn/toolsegmentbtn';
import { SliderComponent } from './../../components/slider/slider';
import { CardlistComponent } from './../../components/cardlist/cardlist';
import { ListComponent } from './../../components/list/list';
import { FabComponent } from './../../components/fab/fab';
import { OffercardsComponent } from './../../components/offercards/offercards';
import { Component, Output, ViewChild, EventEmitter, Input, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Platform, Refresher, Content, Events } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { SocialSharing } from '@ionic-native/social-sharing';
import { RefresherComponent } from './../../components/refresher/refresher';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BrandcardsComponent } from '../../components/brandcards/brandcards';
import { OneSignal } from '@ionic-native/onesignal';
import { NotificationProvider } from '../../providers/notification/notification';
import { filter, map } from 'rxjs/operators';
import { OffersProvider } from '../../providers/offers/offers';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { Network } from '@ionic-native/network';
import { Observable } from 'rxjs/Observable';
import { Cordova } from '@ionic-native/core';
// import { OneSignal } from '@ionic-native/onesignal';


declare var window: { KochavaTracker }
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage {

  displayName: any;
  email: any;
  familyName: any;
  givenName: any;
  userId: any;
  imageUrl: any;

  isLoggedIn: boolean = false;

  @ViewChild(Content)
  private content: Content;

  @ViewChild(SliderComponent)
  private sliderComponent: SliderComponent;

  @ViewChild(ToolsegmentbtnComponent)
  private segmentComponent: ToolsegmentbtnComponent;

  @ViewChild(BrandcardsComponent)
  private Brandcards: BrandcardsComponent
  @Output() selectedTabIndex = new EventEmitter()
  @Input() tabindex;
  @Output() slideindex = new EventEmitter();

  public data;
  public counter = 0;
  public items: any = [];
  public brands;
  public category: any = [];
  public stores: any = [];
  public offers;
  public isTrue: Boolean = true;
  public isFalse: Boolean = false;
  public DailyNav = 'OffercardlistPage';
  public listcards: any = [];
  public isConnected: boolean = true;
  public isRefresherEnabled: boolean = true;
  public topOffers: any = [];
  public flashSale: any = [];
  public newLaunches: any = [];



  constructor(public navCtrl: NavController, public navParams: NavParams, public googlePlus: GooglePlus, private loginservice: LoginProvider, public sharedService: SharedProvider, private socialSharing: SocialSharing, private platform: Platform, private appMinimize: AppMinimize, private httpClient: HttpClient, private oneSignal: OneSignal, private noftification: NotificationProvider, private offerProvider: OffersProvider, private inAppBrowser: InAppBrowser,
    private network: Network,
    private ev: Events) {

    console.dir(window)

    // this.oneSignal.startInit('c45b66d2-dbfc-4201-a829-f3bd12086360', '751321163972');
    // this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
    // this.oneSignal.handleNotificationReceived().subscribe(() => {
    //   // do something when notification is received
    // });

    //   this.noftification.recieveNotification(this.data);
    this.sharedService.mySubject.subscribe(res => {
      this.isConnected = res;
    })
    // var configMapObject = {}
    // configMapObject[window.KochavaTracker.PARAM_ANDROID_APP_GUID_STRING_KEY] = "kodemo-rgtlsve";

    // window.KochavaTracker.configure(configMapObject);



    // this.oneSignal.endInit();
  }



  ionViewDidLoad() {

    // checking if internet is onn

    if (this.isConnected == true) {
      this.sharedService.showLoader();

      // get the brands 
      this.offerProvider.getBrands().pipe(

        map((response: any) => {
          let y = response.filter(x => x.isFav == true)
          console.log(y);
          return y;
        }))
        .subscribe(res => {
          this.brands = res;
          console.log(this.brands);

        }, err => {

          // this.sharedService.createToast('Unable to load Brands')
        });

      
      // get categories 

      this.offerProvider.getCategories().pipe(
        map((response: any) => {
          let y = response.filter(x => x.isFav == true)
          console.log(y);
          return y;
        })).
        subscribe(res => {
          this.category = res;
          console.log(this.category);
          this.sharedService.hideLoader();
        }, err => {
          // this.sharedService.createToast('Unable to load categories');
          this.sharedService.hideLoader();
        }
      );
      
      // get ads 
      this.offerProvider.getAds().pipe(
        map((res: any) => {
          let y = res.filter(x => x.Category == "TO");
          console.log(y);
          return y;
        })).
        subscribe(res => {
          this.topOffers = res;
        }, err => {
          this.sharedService.createToast("");
        });

    }

    else {
      this.sharedService.createToast('Please connect to internet')
    }


    console.log('ionViewDidLoad HomePage');
    // const browser = this.inAppBrowser.create('https://www.hubfly.com', '_self', { location: 'no' });
  }

  // this method is used to change the selected tabs on slide change
  slideChangeByTab(tabsindex) {
    this.sliderComponent.pageSlider.slideTo(tabsindex);
  }

  // this method is used to change the slides on tabs changes

  changetab(index) {
    this.segmentComponent.segments = index;
  }

  ionViewWillLeave() {

  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }


  scrollHandler(event) {
    if (event.scrollTop < 10) {
      console.log('enabled button');
      if (this.isRefresherEnabled == false)
        this.isRefresherEnabled = true;
    }
    else {
      console.log('disabled button');
      this.isRefresherEnabled = false;
    }
  }
}
