import { OffercardsComponent } from './../../components/offercards/offercards';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OffersProvider } from '../../providers/offers/offers';
import { SharedProvider } from '../../providers/shared/shared';


@IonicPage()
@Component({
  selector: 'page-offercardlist',
  templateUrl: 'offercardlist.html',
})
export class OffercardlistPage {


  public lists: any;
  public id;
  public type;
  public title: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private offerService: OffersProvider, private sharedService: SharedProvider) {
    this.id = this.navParams.get('id');
    this.type = this.navParams.get('type');
    this.title = this.navParams.get('name')
  }

  ionViewDidLoad() {
    if (this.type == 'Brands') {
      this.sharedService.showLoader();
      this.offerService.getByBrandId(this.id).subscribe(res => {
        this.lists = res;
        this.sharedService.hideLoader();
      }, err => {
        console.log(err);
        this.sharedService.hideLoader();
      });
    }
    else if (this.type == 'Category') {
      this.sharedService.showLoader();
      this.offerService.getByCategoryId(this.id).subscribe(res => {
        this.lists = res;
        this.sharedService.hideLoader()
      }, err => {
        console.log(err);
      }
      );
    }
    else if (this.type == 'Stores') {
      this.sharedService.showLoader()
      this.offerService.getOffersByStoreId(this.id).subscribe(res => {
        this.lists = res;
        this.sharedService.hideLoader()
      }, err => {
        console.log(err);
      })
    }

  }

  ionViewWillEnter() {
    // this.sharedService.hideLoader();
  }

  ionViewWillLeave() {
    console.log(this.navCtrl);
  }

  getOfferDetails(event){
    this.navCtrl.push('OfferdetailPage',{
      ID: event.ID
    })
  }

}
