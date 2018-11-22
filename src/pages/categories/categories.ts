import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  public categories;
  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient:HttpClient) {
  }

  ionViewDidLoad() {
    this.httpClient.get(' http://192.168.225.52:5001/api/category').subscribe(res=>{
      this.categories = res;
    })
    console.log('ionViewDidLoad CategoriesPage');
  }

}
