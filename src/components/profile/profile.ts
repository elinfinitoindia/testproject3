import { Component, Output, EventEmitter, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/profile';
import { flyin } from '../../app/animation';
import { LoginProvider } from '../../providers/login/login';

@Component({
  selector: 'profile',
  templateUrl: 'profile.html',
  animations:flyin
})
export class ProfileComponent {

  @Output() logout = new EventEmitter();
  public profile;
  public editFormStatus: boolean = true;
  public btnStatus: boolean = false;
  public userid;

  constructor(private navCtrl: NavController , private loginService:LoginProvider , private navParams : NavParams) {
    this.profile = new Profile();
    var id = localStorage.getItem('userId');
    console.log(id);
    
   
      // this.loginService.getState().subscribe((res) => {
      //   this.userid = res;
      // })
    
    
  }

  ionViewDidLoad() {
   
    
    // this.loginService.getUserDetails(this.userId).subscribe(res => {
    //   this.profile = res;
    // }) 
  }

  logOut() {
    this.logout.emit(true);
  }

  changePassword() {
    this.navCtrl.push('PasswordchangePage', {
      changePassword: "true"
    })
  }

  editDetails() {
    this.editFormStatus = false;
    console.log(this.editFormStatus)
    this.btnStatus = true;
    
  }
  saveDetail(){
    this.editFormStatus = true;
    this.btnStatus = false;
  }
}
