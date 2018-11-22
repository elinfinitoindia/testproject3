import { SocialSharing } from '@ionic-native/social-sharing';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Toast } from '@ionic-native/toast';
/*
  Generated class for the SharedProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SharedProvider {

  constructor(public http: HttpClient, private socialShare: SocialSharing, private toast: Toast) {
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
    this.toast.show(data, '5000', 'center').subscribe(
      toast => {
        console.log(toast);
      }
    );
  }




}
