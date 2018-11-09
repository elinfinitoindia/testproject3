import { Component, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SliderComponent } from '../../components/slider/slider';
import { ToolsegmentbtnComponent } from '../../components/toolsegmentbtn/toolsegmentbtn';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoresPage');
  }
  slideChangeByTab(tabsindex) {
    this.sliderComponent.pageSlider.slideTo(tabsindex);
  }

  // this method is used to change the slides on tabs changes

  changetab(index) {
    this.segmentComponent.segments = index;
  }
}
