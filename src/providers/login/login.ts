import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user';
import { Subject } from 'rxjs/Subject';


const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  })
}


@Injectable()
export class LoginProvider {

  public logindata;
  public apiUrl = "http://localhost:5000/api"
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
    return this.http.post("http://localhost:5000/api/users/Login", data, httpOptions);
  }

  registerWithEmail(data){
    return this.http.post("http://localhost:5000/api/users", data, httpOptions);
  }

  getUserDetails(data){
    return this.http.post('api', data, httpOptions);
  }


  // verfiy OTP Service

  verifyOtp(data){
    return this.http.post(this.apiUrl +"/VerifyOtp",data , httpOptions);
  }


  sendOtp(data){
    return this.http.post(this.apiUrl +"/users/ForgetPassword" + data , httpOptions);
  }
  // Create a payment request 
  // Get Payment Request Status On The History Page
  // Load user data 
  // Offer Error Detection
  // Offer Click Records
  // Ads Table Record
  // 

  private selectionFormatState = new Subject<any>();

  setState(state: any) {
    this.selectionFormatState.next(state);
  }

  getState(): Observable<any> {
    return this.selectionFormatState.asObservable();
  }

}