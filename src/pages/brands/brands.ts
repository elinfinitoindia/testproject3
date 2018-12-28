import { Component, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SliderComponent } from '../../components/slider/slider';
import { ToolsegmentbtnComponent } from '../../components/toolsegmentbtn/toolsegmentbtn';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharedProvider } from '../../providers/shared/shared';
import { OffersProvider } from '../../providers/offers/offers';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@IonicPage()
@Component({
  selector: 'page-brands',
  templateUrl: 'brands.html',
})
export class BrandsPage {

  @ViewChild(SliderComponent)
  private sliderComponent: SliderComponent;

  @ViewChild(ToolsegmentbtnComponent)
  private segmentComponent: ToolsegmentbtnComponent;

  @Output() selectedTabIndex = new EventEmitter()
  @Input() tabindex;
  @Output() slideindex = new EventEmitter();
  public brandlist;

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient: HttpClient, private sharedService: SharedProvider, private offerService: OffersProvider) {

  }

  ionViewDidLoad() {
    this.offerService.getBrands().subscribe(res => {
      this.brandlist = res;
    }, err => {
      this.sharedService.createToast('Unable to load brands')
    })
  }

  // this method is used to change the selected tabs on slide change
  slideChangeByTab(tabsindex) {
    this.sliderComponent.pageSlider.slideTo(tabsindex);
  }

  // this method is used to change the slides on tabs changes
  changetab(index) {
    this.segmentComponent.segments = index;
  }

}