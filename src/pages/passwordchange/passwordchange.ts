import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PasswordchangePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-passwordchange',
  templateUrl: 'passwordchange.html',
})
export class PasswordchangePage {

  public changePassword:boolean;
  public title:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.changePassword = true;
      this.title = "Change Password";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordchangePage');
  }

}
