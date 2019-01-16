import { Component, EventEmitter, Output } from '@angular/core';
import { SharedProvider } from '../../providers/shared/shared';
import { NavController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { Login} from '../../models/login';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {

  text: string;
  public res;
  public login;
  @Output() loginStatus = new EventEmitter();

  constructor(private sharedService: SharedProvider, private navCtrl: NavController, private loginService:LoginProvider) {
    this.login = new Login();
  }

  loginWithEmail() {
    this.loginService.loginWithEmail(this.login).subscribe(res=>{
  
    console.log(res);
    })
  this.loginStatus.emit('true');
    // this.loginService.loginWithEmail(this.login).subscribe(res=>{
    //   console.log(res);
    // })
  }

  forgotPassword(){
    alert('email send');
    this.navCtrl.push('VerifyotpPage');
  }
  loginWithGoogle(){
    this.loginService.login(a => {
      this.res = a;
      this.sharedService.setToken(this.res.accessToken);
    });
  }

  gotoRegister(){
    this.navCtrl.push('RegisterPage');
  }
}
