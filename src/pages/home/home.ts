import { ToolsegmentbtnComponent } from './../../components/toolsegmentbtn/toolsegmentbtn';
import { SliderComponent } from './../../components/slider/slider';
import { CardlistComponent } from './../../components/cardlist/cardlist';
import { ListComponent } from './../../components/list/list';
import { FabComponent } from './../../components/fab/fab';
import { OffercardsComponent } from './../../components/offercards/offercards';
import { Component, Output, ViewChild, EventEmitter, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public listcards: any = [];


  @ViewChild(SliderComponent)
  private sliderComponent: SliderComponent;

  @ViewChild(ToolsegmentbtnComponent)
  private segmentComponent: ToolsegmentbtnComponent;


  @Output() selectedTabIndex = new EventEmitter()
  @Input() tabindex;
  @Output() slideindex = new EventEmitter();

  public items: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.listcards = [{
      title: 'Prateek', desc: 'hi'
    },
    {
      title: 'Prateek', desc: 'hi'
    },
    {
      title: 'Prateek', desc: 'hi'
    },
    {
      title: 'Prateek', desc: 'hi'
    },
    {
      title: 'Prateek', desc: 'hi'
    },
    {
      title: 'Prateek', desc: 'hi'
    },
    {
      title: 'Prateek', desc: 'hi'
    },
    {
      title: 'Prateek', desc: 'hi'
    }
    ];

    this.items = [
      {
        title: 'Prateek'
      },
      {
        title: 'Prateek1'
      }
    ]


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
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
