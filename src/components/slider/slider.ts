import { Component, ViewChild, EventEmitter, Input, Output } from '@angular/core';
import { Slides } from 'ionic-angular';

/**
 * Generated class for the SliderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'slider',
  templateUrl: 'slider.html'
})
export class SliderComponent {

  text: string;
  slide:any;
  @ViewChild('pageSlider') pageSlider: Slides
  @Input() listcards: any = [];
  @Output() segme = new EventEmitter();
  @Input() tabindex:any;
  @Output() scroll = new EventEmitter();

  public startIndex:number;
  public endIndex: number;

  constructor() {
    console.log('Hello SliderComponent Component');
    this.text = 'Hello World';
   
  }

  ngOnInit(){


  }

  ngAfterViewInit(): void {
    
  }
  changeWillSlide($event) {
    // this.segments = $event._snapIndex.toString();
    this.segme.emit($event._snapIndex.toString());
  }

  selectedtabs(tabsindex) {
    this.pageSlider.slideTo(tabsindex);
  }

  doInfinite(infiniteScroll) {
   console.log('Begin async operation');
   
  }

 
}
