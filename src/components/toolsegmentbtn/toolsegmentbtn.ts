import { Component, Input, Output, EventEmitter, ElementRef, Renderer } from '@angular/core';

/**
 * Generated class for the ToolsegmentbtnComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'toolsegmentbtn',
  templateUrl: 'toolsegmentbtn.html'
})
export class ToolsegmentbtnComponent {
  text: string;
  segments = '0';
  @Output() tabsindex = new EventEmitter();
  // @Input('scrollArea') scrollArea: any;
  // @Input('headerHeight') headerHeight: number;
 
  newHeaderHeight: any;
 
  constructor(public element: ElementRef, public renderer: Renderer) {
    console.log('Hello ToolsegmentbtnComponent Component');
    this.text = 'Hello World';
    console.log(this.segments);
  }
 
  ngAfterViewInit(){
 
   
 
  }
 
  resizeHeader(ev){
 
    
 
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');

  }

  selectTab(indx) {
    this.segments = indx;
    this.tabsindex.emit(indx);

  }

  slideindexs(index) {
    this.segments = index.toString();
  }
}
