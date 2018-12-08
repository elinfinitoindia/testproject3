import { Component, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SliderComponent } from '../../components/slider/slider';
import { ToolsegmentbtnComponent } from '../../components/toolsegmentbtn/toolsegmentbtn';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient:HttpClient) {
    this.brandlist =  [{
      'Name':'Praeek'},
      {
        'Name':'Prsdaeek',
      },
      {
        'Name':'Prsdaesdfdsfdsek',
      },{
        'Name':'Prdfgdfgdfsdaeek',
      },{
        'Name':'Prsdsdfdsfaeek',
      },{
        'Name':'Prsdfgdfgdaeek',
      },{
        'Name':'Prsdfgdfgdaeek',
      },{
        'Name':'Prsddgaeek',
      },{
        'Name':'Prsddfgdgfaeek',
      },{
        'Name':'Prsddfgdfgaeek',
      },
      {
        'Name':'Prsddfgdfgaeek',
      },
      {
        'Name':'Prsdddfgfgaeek',
      },
      {
        'Name':'Prssdsdddfgaeek',
      },
      {
        'Name':'Prsddfsdfgaeek',
      },
      {
        'Name':'Prsdfgddfgaeek',
      },
      {
        'Name':'Prsdfgddfgaeek',
      },
      {
        'Name':'Pdfgrsddfgaeek',
      },
      {
        'Name':'Prsddfdfgaeek',
      },
      {
        'Name':'Prsddfgdfgaeek',
      },
      {
        'Name':'Prsddfgsgdfgaeek',
      },
      {
        'Name':'Prshhggffgddfghfgdfgaeek',
      },
  ]
  }

  ionViewDidLoad() {
      this.httpClient.get('http://localhost:5001/api/brand',httpOptions).subscribe(res=>{
          this.brandlist  = res;
      })
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