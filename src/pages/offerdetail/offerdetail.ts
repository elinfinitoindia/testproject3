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

  public offerDetail;
  public id: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private clipboard: Clipboard, private platform: Platform, private httpClient: HttpClient) {
   
   
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   
  
  }

  ionViewDidLoad() {
    this.id = this.navParams.get('ID');
    this.httpClient.get('http://192.168.225.52:5000/api/offers/' + this.id, httpOptions).subscribe((res) => {
      this.offerDetail = res;
      console.log(this.offerDetail);
    });
    console.log('ionViewDidLoad OfferdetailPage');

  }


  ionViewDidEnter() {
  }

  ngAfterViewInit() {


  }

  insertView() {
    this.navCtrl.push('Dea');
  }
}
