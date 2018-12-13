import { Component, Input } from '@angular/core';
import { OffersProvider } from '../../providers/offers/offers';
import { NavController } from 'ionic-angular';
import { ɵSharedStylesHost } from '@angular/platform-browser';
import { SharedProvider } from '../../providers/shared/shared';

/**
 * Generated class for the CardlistComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cardlist',
  templateUrl: 'cardlist.html'
})
export class CardlistComponent {

  text: string;
  public categories;
  @Input() type:string;
  @Input() id:any;
  
  public lists:any=[];

  constructor(private offerProvider:OffersProvider , private navCtrl:NavController , private sharedService:SharedProvider , private offerService:OffersProvider) {
    console.log('Hello CardlistComponent Component');
    this.text = 'Hello World';
   
  }

  ionViewDidLoad(){
    if (this.type == 'Brands') {
      this.sharedService.showLoader();
      this.offerService.getByBrandId(this.id).subscribe(res => {
        this.lists = res;
        this.sharedService.hideLoader();
      }, err => {
        console.log(err);
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






  getOfferDetails(event){
        this.navCtrl.push('OfferdetailPage',{
          ID: event.ID
        })
      }
}
