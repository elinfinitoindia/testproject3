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
import { IonicPage, NavController, NavParams, Slides, Platform, Refresher, Content } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { SocialSharing } from '@ionic-native/social-sharing';
import { RefresherComponent } from './../../components/refresher/refresher';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BrandcardsComponent } from '../../components/brandcards/brandcards';
import { OneSignal } from '@ionic-native/onesignal';
import { NotificationProvider } from '../../providers/notification/notification';
// import { OneSignal } from '@ionic-native/onesignal';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

export class Brand {
  Name: String;
  Logo: String
}

const httpOptions={
  headers:new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  })
}



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage {



  public listcards: any = [];
  displayName: any;
  email: any;
  familyName: any;
  givenName: any;
  userId: any;
  imageUrl: any;

  isLoggedIn: boolean = false;

  @ViewChild(Content)
  private content:Content;

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
  public items: any = [];
  public brands: any = [];
  public category: any = [];
  public stores: any = [];
  public offers;
  public isTrue:Boolean = true;
  public isFalse:Boolean = false;
  public DailyNav = 'OffercardlistPage';
 

  constructor(public navCtrl: NavController, public navParams: NavParams, public googlePlus: GooglePlus, private loginservice: LoginProvider, public sharedService: SharedProvider, private socialSharing: SocialSharing, private platform: Platform, private appMinimize: AppMinimize, private httpClient: HttpClient,private oneSignal:OneSignal,private noftification:NotificationProvider) {
      // this.oneSignal.startInit('c45b66d2-dbfc-4201-a829-f3bd12086360', '751321163972');
      // this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
      // this.oneSignal.handleNotificationReceived().subscribe(() => {
      //   // do something when notification is received
      // });

      //   this.noftification.recieveNotification(this.data);

      // this.oneSignal.endInit();
  }

  ionViewDidLoad() {
    this.httpClient.get('http://192.168.225.52:5000/api/brand',httpOptions).subscribe(res=>{
      this.brands = res;
    })
    this.httpClient.get('http://192.168.225.52:5000/api/category',httpOptions).subscribe(res=>{
      this.category = res;
    })
    console.log('ionViewDidLoad HomePage');
  }

  // this method is used to change the selected tabs on slide change
  slideChangeByTab(tabsindex) {
    this.sliderComponent.pageSlider.slideTo(tabsindex);
  }

  // this method is used to change the slides on tabs changes

  changetab(index) {
    this.segmentComponent.segments = index;
  }

  login() {

    this.navCtrl.push('OffercardlistPage');
    // this.loginservice.login(a=>{
    //   this.data = a;
    //   this.sharedService.setToken(this.data.accessToken);
    // });
  }     
  
  logOut(){
    this.googlePlus.logout()
    .then(res => {
      this.sharedService.clearToken();
    })
    .catch(err => console.error(err));
}
  
  doRefresh() {
    alert('hii');
  }


}
