import { SocialSharing } from '@ionic-native/social-sharing';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController, ToastController, Events, Platform } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';    

@Injectable()
export class SharedProvider {

  public loader: any;
  public mySubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor(public http: HttpClient, private socialShare: SocialSharing, private toastCtrl: ToastController, public loadingCtrl: LoadingController,
    private network: Network,
    private ev: Events,
    private platform: Platform) {


    console.log('Hello SharedProvider Provider');


  }

  setUsername(value) {
    localStorage.setItem('name', value);
  }

  setToken(value) {
    localStorage.setItem('Token', value);
  }

  getUsername() {
    localStorage.getItem('name');
  }

  getToken() {
    return localStorage.getItem('Token');
  }

  clearToken() {
    localStorage.setItem('Token', '');
  }


  // this method is used for sharing the application on different platforms shareAppService
  shareApp(data) {
    this.socialShare.share(data.message, data.subject, data.image, data.link).then(() => {
      console.log('share succesfull')
    });
  }


  // this method is used to generate toast

  createToast(data) {
    const toast = this.toastCtrl.create({
      message: data,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  showLoader() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    this.loader.present();
  }

  hideLoader() {
    this.loader.dismissAll();
  }

  checkLoginStatus() {
    return localStorage.getItem('isLogin');
  }

  setLoginStatus(data) {
    localStorage.setItem('isLogin', data);

  }

  sendErrorReports(data) {
    return this.http.post('api', data);
  }

  onConnect() {
    this.network.onConnect().subscribe((data) => {
      console.log('network connected!');
      // We just got a connection but we need to wait briefly
      // before we determine the connection type. Might need to wait.
      // prior to doing any api requests as wel
      setTimeout(() => {
        this.displayNetworkUpdate(data.type);
        this.mySubject.next(true);
      }, 1000);
    });
  }

  onDisconnect() {
    this.network.onDisconnect().subscribe((data) => {
      this.displayNetworkUpdate(data.type);
      this.mySubject.next(false);
      localStorage.setItem("nT", "false");
    });
  }

  displayNetworkUpdate(connectionState: string) {
    let networkType = this.network.type;
    this.createToast(`You are now ${connectionState} via ${networkType}`);

  }

  sendClicks(data) {
    return this.http.post('api', data);
  }
}
