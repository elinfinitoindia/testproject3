import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { GooglePlus } from '@ionic-native/google-plus';
import { SharedProvider } from '../../providers/shared/shared';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
public res;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, private loginService:LoginProvider,private sharedService:SharedProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginWithGoogle(){
      this.loginService.login(a=>{
        this.res = a;
        this.sharedService.setToken(this.res.accessToken);
      });
    }  
  }
