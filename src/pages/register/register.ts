import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions ={
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  })
}
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})






export class RegisterPage {
 
  public user = {
    mobile:'',
    email:'',
    password:''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams , private http:HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerUser(){
    this.http.post('http://192.168.225.52:5000/api/users', this.user, httpOptions).subscribe(res=>{
      console.log(res);
    })
  }

}
