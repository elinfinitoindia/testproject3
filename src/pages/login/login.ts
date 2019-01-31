import { keyframes, ViewChild, ViewContainerRef, ComponentFactoryResolver, } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Content } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { GooglePlus } from '@ionic-native/google-plus';
import { SharedProvider } from '../../providers/shared/shared';
import { flyin, slideIn, flyItems, animation } from '../../app/animation'
import { Component, AnimationTransitionEvent, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html",
  animations: [
    trigger('filterAnimation', [
      transition(':enter', [
        query('*', [
          style({ opacity: 0}),
          stagger(20, [
            animate('300ms ease-out',
             style({ opacity: 1,})),
          ]),
        ])
      ]),
      
      transition(':leave', [
        query('*', [
          animate('300ms ease-out', style({ opacity: 0 })),        
        ])
           
      ]),
    ]),
  ]

})
export class LoginPage {


  public res;
  public isLoggedIn: boolean = false;
  public btnStatus: boolean = true;
  public noteditable;
  public userDetails: any = [];
  public title: string;
  state: string;
  @ViewChild('content') content: Content;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loginService: LoginProvider,
    private sharedService: SharedProvider,
    private resolver: ComponentFactoryResolver
  ) {
      
        this.noteditable = true;

  }

  ionViewDidLoad() {
    // checking if user is loggedIn, getting value from localStorage;
    // this.isLoggedIn = this.sharedService.checkLoginStatus();
    console.log("ionViewDidLoad LoginPage");
    // this.isLoggedIn = this.sharedService.checkLoginStatus();
    if (this.sharedService.checkLoginStatus() == 'true') {

      this.isLoggedIn = true;
      this.title = 'Profile';
    }
    else {
      this.isLoggedIn = false;
      this.title = 'Login';
    }
    console.log(this.isLoggedIn);
  }

  loginWithGoogle() {
    this.loginService.login(a => {
      this.res = a;
      this.sharedService.setToken(this.res.accessToken);
    });
  }

  gotoRegister() {

    this.navCtrl.push("RegisterPage");
  }

  editDetails() {
    this.btnStatus = false;
    this.noteditable = false;
  }

  saveDetails() {
    this.btnStatus = true;
    this.noteditable = false;
  }

  loginWithEmail() {
    this.sharedService.setLoginStatus(true);
  }

  logOut($event) {
    this.content.scrollToTop(500);
    this.sharedService.setLoginStatus(false);
    this.sharedService.clearToken();
    this.isLoggedIn = false;
    this.title = 'Login';

  }
  displayCounter(count) {
    if (count == 'true') {
      this.isLoggedIn = true;
      this.title = 'Profile';
      this.sharedService.setLoginStatus('true');
    }
  }
 
  animationDone(event: AnimationTransitionEvent) {
    if (event.fromState === 'visible' && event.toState === 'hidden') {
      
    }
  }
}
