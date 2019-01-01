import { SocialSharing } from '@ionic-native/social-sharing';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from 'ionic-angular';
/*
  Generated class for the SharedProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SharedProvider {

  public loader:any;



  constructor(public http: HttpClient, private socialShare: SocialSharing, private toastCtrl: ToastController, public loadingCtrl: LoadingController) {
    console.log('Hello SharedProvider Provider');
  
  }


  setUsername(value) {
    localStorage.setItem('name', value);
  }

  setToken(value){
    localStorage.setItem('Token',value);
  }

  getUsername() {
    localStorage.getItem('name');
  }

  getToken(){
   return  localStorage.getItem('Token');
  }

  clearToken(){
    localStorage.setItem('Token','');
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

  hideLoader(){
    this.loader.dismissAll();
  }

  checkLoginStatus(){
    return localStorage.getItem('isLogin');
  }

  setLoginStatus(data){
    localStorage.setItem('isLogin', data);
   
    
  }
}
