import { Component, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Clipboard } from '@ionic-native/clipboard';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * Generated class for the OfferdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
  })
};

@IonicPage()
@Component({
  selector: 'page-offerdetail',
  templateUrl: 'offerdetail.html',
})
export class OfferdetailPage implements AfterViewInit {

  public offers;

  constructor(public navCtrl: NavController, public navParams: NavParams, private clipboard: Clipboard, private platform: Platform, private httpClient:HttpClient) {
    // this.platform.registerBackButtonAction(() => {
    //   this.navCtrl.pop();

    // })
   
 

  }

  ionViewDidLoad() {
  
    this.httpClient.get('http://192.168.1.90:5000/api/offers', httpOptions).subscribe((res)=>{
      this.offers = res;
      console.log(this.offers);
 });
 
    console.log('ionViewDidLoad OfferdetailPage');

  }


  ionViewDidEnter() {
    // this.clipboard.copy('hi ');

    // alert('coupon copy');
  }

  ngAfterViewInit() {


  }

  insertView() {
    this.navCtrl.push('BrandsPage');
  }
}
