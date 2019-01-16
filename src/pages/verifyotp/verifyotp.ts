import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { SharedProvider } from '../../providers/shared/shared';

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
  public otp;
public email;
  constructor(public navCtrl: NavController, public navParams: NavParams, private loginService: LoginProvider, private sharedService: SharedProvider) {

  }

  ionViewDidLoad() {
    this.status = true;
    console.log('ionViewDidLoad VerifyotpPage');
  }

  verifyOtp() {
    this.loginService.verifyOtp(this.otp).subscribe(res => {
      console.log(res);
      if (res == "verfiy otp") {
        this.navCtrl.push('PasswordchangePage', {
          changePassword: "false"
        })
      }
      else {
        this.sharedService.createToast('Otp not verified');
      }
    }, err => {
      console.log(err);
    })
  }

  sendOtp() {
   
    this.loginService.sendOtp(this.email).subscribe(res=>{
      console.log(res);
      this.status = false;
    },err=>{
      this.sharedService.createToast("Unable to send otp");
    })
  
  }

  resendOtp() {
    this.status = true;
  }
}
