import { Component, trigger, transition, animate, keyframes, style } from '@angular/core';
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
  animations: [
    trigger('fadeInOut', [
      transition(':enter',    // :enter is alias to 'void => *'
        animate('700ms ease-out', keyframes([
          style({
            transform: 'scale(0)',
            opacity: 1,
          }),
          style({
            transform: 'scale(1)',
            opacity: 1,
          })
        ]))),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(500, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class LoginPage {
  public res;
  public isLoggedIn;
  public btnStatus:boolean = true;
  public noteditable;
  public userDetails:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private loginService: LoginProvider, private sharedService: SharedProvider) {
    this.noteditable = true;
    
  }

  ionViewDidLoad() {
    // checking if user is loggedIn, getting value from localStorage;
   this.isLoggedIn =  this.sharedService.checkLoginStatus();
    console.log('ionViewDidLoad LoginPage');
  }

  loginWithGoogle() {
    this.loginService.login(a => {
      this.res = a;
      this.sharedService.setToken(this.res.accessToken);
    });
  }

  gotoRegister() {
    this.isLoggedIn = false;
    this.navCtrl.push('RegisterPage');
  }

  editDetails(){
  this.btnStatus = false;
  this.noteditable = false;
}


saveDetails(){
  this.btnStatus = true;
  this.noteditable = false;
}
 

loginWithEmail(){
  // setting the login status in localStorage;
  this.sharedService.setLoginStatus(true);
  // this.navCtrl.setRoot('HomePage');
}


logOut(){
  this.sharedService.setLoginStatus(false);
  this.sharedService.clearToken();
  
}


}
