import { RedeemComponent } from './../../components/redeem/redeem';
import { Component, ViewChild, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ModalController, ViewController, Keyboard } from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared';
import { GooglePlus } from '@ionic-native/google-plus';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',

})
export class ProfilePage {

  @ViewChild('pageSlider') pageSlider: Slides;
  tabs: any = '0';

  public profile: any = 'profiledetail';
  public title: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modal: ModalController, public viewCtrl: ViewController, public keyboard: Keyboard, private sharedService: SharedProvider, private googlePlus: GooglePlus) {
    this.title = "My Account";
  }

  ionViewCanEnter() {
  }

  changepassword() {
    // const modal = this.modal.create(CategoriesPage);
    // modal.present();
  }

  viewEarnings() {
    // this.navCtrl.push(EarningsPage);
  }


  selectTab(index) {
    if (this.keyboard.isOpen()) {
      this.keyboard.close();
    }
    this.pageSlider.slideTo(index);
  }


  changeWillSlide($event) {
    if (this.keyboard.isOpen()) {
      this.keyboard.close();
    }
    this.tabs = $event._snapIndex.toString();
  }



}
