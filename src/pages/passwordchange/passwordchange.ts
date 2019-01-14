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

      this.title = "Change Password";

  }

  ionViewDidLoad() {
    if (this.navParams.get('changePassword') == "true") {
      this.changePassword = true;
    }
    else {
      this.changePassword = false;
    }
    console.log('ionViewDidLoad PasswordchangePage');
  }

}
