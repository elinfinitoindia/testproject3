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
  @ViewChild('pageSlider') pageSlider: Slides


  public listcards: any = [];
  @Output() segme = new EventEmitter();
  @Input() tabindex;

  constructor() {
    console.log('Hello SliderComponent Component');
    this.text = 'Hello World';
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
  }


  changeWillSlide($event) {
    // this.segments = $event._snapIndex.toString();
    this.segme.emit($event._snapIndex.toString());
  }

  selectedtabs(tabsindex) {
    this.pageSlider.slideTo(tabsindex);
  }


}
