import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { SliderComponent } from '../../components/slider/slider';
import { ToolsegmentbtnComponent } from '../../components/toolsegmentbtn/toolsegmentbtn';
import { OffersProvider } from '../../providers/offers/offers';
import { SharedProvider } from '../../providers/shared/shared';

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

  @ViewChild(SliderComponent)
  private sliderComponent: SliderComponent;

  @ViewChild(ToolsegmentbtnComponent)
  private segmentComponent: ToolsegmentbtnComponent;


  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient: HttpClient , private offersService:OffersProvider , private sharedService: SharedProvider ) {
  }

  ionViewDidLoad() {
   this.offersService.getCategories().subscribe(res=>{
     this.categories = res;
   }, err=>{
     this.sharedService.createToast('Unable to load Categories');
   })
  }

  slideChangeByTab(tabsindex) {
    this.sliderComponent.pageSlider.slideTo(tabsindex);
  }

  // this method is used to change the slides on tabs changes
  changetab(index) {
    this.segmentComponent.segments = index;
  }

}
