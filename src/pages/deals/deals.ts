import { Component, ViewChild, trigger, transition, style, animate, keyframes } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, Content } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { OffersProvider } from '../../providers/offers/offers';
import { SharedProvider } from '../../providers/shared/shared';
import { map } from 'rxjs/operators/map';
import { useAnimation, animation } from '@angular/animations';
import { flyin } from '../../app/animation';



@IonicPage()
@Component({
  selector: 'page-deals',
  templateUrl: 'deals.html',
  animations: [flyin]

  

})
export class DealsPage {

  public offer:any = [];
  public title;
  public dailyDeals: any =[];
  public showBtn:boolean;

  @ViewChild(Content) content: Content;
  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, private httpClient: HttpClient , private sharedService: SharedProvider , private offerService: OffersProvider) {
  this.title = "Super Deals"
  this.showBtn = false;
  }

  ionViewDidLoad() {
    this.content.scrollToTop();
    console.log('ionViewDidLoad DealsPage');
    this.sharedService.showLoader();
  this.offerService.getBrands().pipe(
    map((response:any) => {
      let y = response.filter(x => x.isFav==true)
      console.log(y);
      return y;
  }))
  .subscribe(res => {
          this.dailyDeals = res;
          console.log(this.dailyDeals);
    this.sharedService.hideLoader();
          
  },err=>{
      this.sharedService.hideLoader();
  // this.sharedService.createToast('Unable to load Brands')
  });
  }


  ionViewWillEnter(){
   
  }

  ionViewWillLeave() {
    this.content.scrollToTop();
    console.log('view at the top');
  }


  ionViewDidEnter() {
    this.content.scrollToTop(300);
  }
 
  // show and hide button 
  scrollHandler(event){
    if(event.scrollTop > 500){
      console.log('show button');
      if(this.showBtn == false)
      this.showBtn = true;
    }
    else{
      this.showBtn = false;
    }
  }


  // scroll to top method form fab- button 
  scrollToTop(){
    
    this.content.scrollToTop(500);
  }
  


}
