import { Component, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SliderComponent } from '../../components/slider/slider';
import { ToolsegmentbtnComponent } from '../../components/toolsegmentbtn/toolsegmentbtn';


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


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrandsPage');
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
