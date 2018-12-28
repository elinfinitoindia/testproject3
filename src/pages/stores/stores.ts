import { Component, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SliderComponent } from '../../components/slider/slider';
import { ToolsegmentbtnComponent } from '../../components/toolsegmentbtn/toolsegmentbtn';
import { OffersProvider } from '../../providers/offers/offers';
import { SharedProvider } from '../../providers/shared/shared';

/**
 * Generated class for the StoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stores',
  templateUrl: 'stores.html',
})
export class StoresPage {
  @ViewChild(SliderComponent)
  private sliderComponent: SliderComponent;

  @ViewChild(ToolsegmentbtnComponent)
  private segmentComponent: ToolsegmentbtnComponent;

  @Output() selectedTabIndex = new EventEmitter()
  @Input() tabindex;
  @Output() slideindex = new EventEmitter();

  public stores:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams , private offerService: OffersProvider, private sharedService: SharedProvider) {
   
  }

  ionViewDidLoad() {
   this.offerService.getStores().subscribe(res=>{
     this.stores = res;
   }, err=>{
     this.sharedService.createToast('Unable to load Stores');
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
