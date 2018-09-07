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
import { IonicPage, NavController, NavParams, Slides, Platform } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public googlePlus: GooglePlus, private loginservice: LoginProvider, public sharedService: SharedProvider, private socialSharing: SocialSharing, private platform: Platform, private appMinimize: AppMinimize) {

    this.platform.registerBackButtonAction(() => {
      console.log('appminimze event fired');
      this.appMinimize.minimize();
    });

  }

  ionViewDidLoad() {
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


  // login() {
  //   this.googlePlus.login({})
  //     .then(res => {
  //       console.log(res);
  //       this.displayName = res.displayName;
  //       this.email = res.email;
  //       this.familyName = res.familyName;
  //       this.givenName = res.givenName;
  //       this.userId = res.userId;
  //       this.imageUrl = res.imageUrl;
  //       this.isLoggedIn = true;
  //     })
  //     .catch(err => console.error(err));
  // }

  login() {
    // this.loginservice.login(res => {
    //   this.data = res;
    //   this.isLoggedIn = true;
    // });

    // this.socialSharing.share("Check this app, alot of daily updated offers, good cashback and many more", null, null, 'http://elinfinitoindia.in').then(() => {
    //   console.log('share open');
    // });

    // var data = {
    //   message: 'hi! Install this app to get daily cashbacks, do not forget ot enter my passcode to get cashbacks',
    //   subject: null,
    //   image: null,
    //   link: 'http://elinfinitoindia.in'
    // }


    // this.sharedService.shareApp(data);
    // this.sharedService.setUsername('HI');

    this.sharedService.createToast('hello i hjjhhgfhj');



    // plugins have updated and we are greatness 


  }



  /* 
    logout() {
      this.googlePlus.logout()
        .then(res => {
          console.log(res);
          this.displayName = "";
          this.email = "";
          this.familyName = "";
          this.givenName = "";
          this.userId = "";
          this.imageUrl = "";
  
          this.isLoggedIn = false;
        })
        .catch(err => console.error(err));
    } */

}
