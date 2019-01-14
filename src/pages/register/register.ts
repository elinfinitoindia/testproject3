import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginProvider } from '../../providers/login/login';
import {User } from '../../models/user';
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
 
  public user:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams , private http:HttpClient , private loginService:LoginProvider) {
    this.user = new User();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerUser(){
   this.loginService.registerWithEmail(this.user).subscribe(res=>{
     console.log(res);
   },
   err=>{
     console.log(err);
   })
  }

}
