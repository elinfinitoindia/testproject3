import { Component, EventEmitter, Output, trigger, transition, animate, keyframes, style } from '@angular/core';
import { SharedProvider } from '../../providers/shared/shared';
import { NavController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { Login} from '../../models/login';
import {FormsModule} from '@angular/forms';
import { User } from '../../models/user';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'login',
  templateUrl: 'login.html',
  animations: [
    trigger("fadeInOut", [
      transition(
        ":enter", // :enter is alias to 'void => *'
        animate(
          "2000ms ease-out",
          keyframes([
            style({
              transform: "scale(0)",
              opacity: 1
            }),
            style({
              transform: "scale(1)",
              opacity: 1
            })
          ])
        )
      ),
      transition(":leave", [
        // :leave is alias to '* => void'
        animate(2000, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class LoginComponent {

  text: string;
  public res;
  public login;
  @Output() loginStatus = new EventEmitter();

  public userId: BehaviorSubject<any> = new BehaviorSubject<any>("");
  constructor(private sharedService: SharedProvider, private navCtrl: NavController, private loginService:LoginProvider) {
    this.login = new Login();
  }

  loginWithEmail() {
  //   this.loginService.loginWithEmail(this.login).subscribe((res: any) => {
  //     this.userId.emit(res.userId);
  // })
    this.userId.next("1232215");
    localStorage.setItem('userId', '1234562455');
    this.loginService.setState(1232215);
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
