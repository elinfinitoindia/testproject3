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
import { Component, Output, ViewChild, EventEmitter, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Platform, Refresher } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { SocialSharing } from '@ionic-native/social-sharing';
import { RefresherComponent } from './../../components/refresher/refresher';
import { HttpClient , HttpHeaders } from '@angular/common/http';
// import { OneSignal } from '@ionic-native/onesignal';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 export class Brand{
   Name:String;
   Logo:String
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


  @ViewChild(SliderComponent)
  private sliderComponent: SliderComponent;

  @ViewChild(ToolsegmentbtnComponent)
  private segmentComponent: ToolsegmentbtnComponent;

  @Output() selectedTabIndex = new EventEmitter()
  @Input() tabindex;
  @Output() slideindex = new EventEmitter();

  public data;
  public items: any = [];
  public brands = [];
  public category:any = [];
  public stores:any = [];
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public googlePlus: GooglePlus, private loginservice: LoginProvider, public sharedService: SharedProvider, private socialSharing: SocialSharing, private platform: Platform, private appMinimize: AppMinimize, private httpClient:HttpClient) {
  //   this.oneSignal.startInit('c45b66d2-dbfc-4201-a829-f3bd12086360', '751321163972');
  //   this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
  //   this.oneSignal.handleNotificationReceived().subscribe(() => {
  //     // do something when notification is received
  //   });

  //   this.oneSignal.handleNotificationOpened().subscribe(() => {

  //   });

  //   this.oneSignal.endInit();


  // }


  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*',
      })
    };

    this.httpClient.get('http://192.168.1.8:5000/api/brand',httpOptions).subscribe((res)=>{
    var Data=res as any;
      Data.forEach(element => {
        this.brands.push(element);
        console.log(this.brands);
      });
      console.log(this.brands);
    });

    this.httpClient.get('http://192.168.1.8:5000/api/category',httpOptions).subscribe((res)=>{
      this.category = res;
      console.log(this.brands);
    });

    this.httpClient.get('http://192.168.1.8:5000/api/stores',httpOptions).subscribe((res)=>{
      this.stores = res;
      console.log(this.brands);
    });
    
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
      this.googlePlus.login({})
        .then(res => {
          console.log(res);
          this.displayName = res.displayName;
          this.email = res.email;
          this.familyName = res.familyName;
          this.givenName = res.givenName;
          this.userId = res.userId;
          this.imageUrl = res.imageUrl;
  
          this.isLoggedIn = true;
        })
        .catch(err => console.error(err));
    }

  doRefresh() {
    alert('hii');
  }

}
