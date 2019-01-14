import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VerifyotpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verifyotp',
  templateUrl: 'verifyotp.html',
})
export class VerifyotpPage {

  public status;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    this.status = true;
    console.log('ionViewDidLoad VerifyotpPage');
  }

  verifyOtp(){
    this.navCtrl.push('PasswordchangePage',{
      changePassword:"false"
    })
  }

  sendOtp(){
    this.status = false;
  }

  resendOtp(){
    this.status = true;
  }
}
