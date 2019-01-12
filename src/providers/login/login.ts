import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus';


const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  })
}


@Injectable()
export class LoginProvider {

  public logindata;
  constructor(public http: HttpClient, public googlePlus: GooglePlus) {
    console.log('Hello LoginProvider Provider');
  }

  login(callback) {
    // this.googlePlus.login({})
    //   .then(res => {
    //     callback(res);
    //   })
  this.googlePlus.login({}).then(res=>{
    //  this.logindata =res;
    callback(res);
    })
  
  }

  logout(callback) {
    this.googlePlus.logout()
      .then(res => {
        callback(res);
      })
      .catch(err => console.error(err));
  }


  changePassword(data){
    return this.http.post('api', data, httpOptions);
  }

  forgotPassword(data){
    return this.http.post('api' , data , httpOptions);
  }

  loginWithEmail(data){
    return this.http.post('api', data, httpOptions);
  }

  registerWithEmail(data){
    return this.http.post('api', data, httpOptions);
  }

  // Create a payment request 
  // Get Payment Request Status On The History Page
  // Load user data 
  // Offer Error Detection
  // Offer Click Records
  // Ads Table Record
  // 

}