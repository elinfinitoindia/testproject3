import { Component, ViewChild, trigger, transition, style, animate, keyframes } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, Content } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { OffersProvider } from '../../providers/offers/offers';
import { SharedProvider } from '../../providers/shared/shared';
import { map } from 'rxjs/operators/map';

/**
 * Generated class for the DealsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deals',
  templateUrl: 'deals.html',
  animations: [
  trigger('fadeInOut', [
    transition(':enter',    // :enter is alias to 'void => *'
     animate('700ms ease-out', keyframes([
        style({
          transform: 'scale(0)',
          opacity: 1,
        }),
       style({
         transform: 'scale(1)',
         opacity: 1,})
     ]))),
    transition(':leave', [   // :leave is alias to '* => void'
      animate(500, style({opacity:0})) 
    ])
  ])
]
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
  this.sharedService.createToast('Unable to load Brands')
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


  totop
  (){
  
  
    
  }
 
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
  


}
