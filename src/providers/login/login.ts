import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus';
/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  constructor(public http: HttpClient, public googlePlus: GooglePlus) {
    console.log('Hello LoginProvider Provider');
  }


  login(callback) {
    this.googlePlus.login({})
      .then(res => {
        callback(res);
      })
  }

}
