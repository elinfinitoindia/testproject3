import { OffercardsComponent } from './../../components/offercards/offercards';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { OffersProvider } from '../../providers/offers/offers';
import { SharedProvider } from '../../providers/shared/shared';


@IonicPage()
@Component({
  selector: 'page-offercardlist',
  templateUrl: 'offercardlist.html',
})
export class OffercardlistPage {


  public lists: any = [];
  public id;
  public type;
  public title: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private offerService: OffersProvider, private sharedService: SharedProvider , private platform:Platform) {
    this.id = this.navParams.get('id');
    this.type = this.navParams.get('type');
    this.title = this.navParams.get('name')
  let backAction =   platform.registerBackButtonAction(()=>{
    console.log("second");
    
      this.navCtrl.pop();
      backAction();
    }, 2)
  }

  ionViewDidLoad() {
    if (this.type == 'Brands') {
     
      this.offerService.getByBrandId(this.id).subscribe(res => {
        if(res == ""){
          this.sharedService.createToast('No offers are avaliable');
        }
        else{
          this.lists = res;
        }
      }, err => {
        this.sharedService.createToast('Unable to load offers');
      });
     
      
    }
    else if (this.type == 'Category') {
     
      this.offerService.getByCategoryId(this.id).subscribe(res => {
        if(res == ""){
          this.sharedService.createToast('No offers are avaliable');
        }
        else{
          this.lists = res;
        }
      }, err => {
        this.sharedService.createToast('Unable to load offers');
      }
     
      );
     
    }
    else if (this.type == 'Stores') {
      this.sharedService.showLoader()
      this.offerService.getOffersByStoreId(this.id).subscribe(res => {
        if(res == ""){
          this.sharedService.createToast('No offers are avaliable');
        }
        else{
          this.lists = res;
        }
        
        this.sharedService.hideLoader()
      }, err => {
        this.sharedService.createToast('Unable to load offers');
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
