import { Component, Input, ElementRef, Renderer } from '@angular/core';

/**
 * Generated class for the ShrinkingheaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'shrinkingheader',
  templateUrl: 'shrinkingheader.html'
})
export class ShrinkingheaderComponent {

  @Input('scrollArea') scrollArea: any;
  @Input('headerHeight') headerHeight: number;
 
  newHeaderHeight: any;
 
  constructor(public element: ElementRef, public renderer: Renderer) {
 
  }
 
  ngAfterViewInit(){
 
    this.renderer.setElementStyle(this.element.nativeElement, 'height', this.headerHeight + 'px');
 
    this.scrollArea.ionScroll.subscribe((ev) => {
      this.resizeHeader(ev);
    });
 
  }
 
  resizeHeader(ev){
    ev.domWrite(() => {
      this.newHeaderHeight = this.headerHeight - ev.scrollTop; 
      if(this.newHeaderHeight < 0){
        this.newHeaderHeight = 0;
      }  
      this.renderer.setElementStyle(this.element.nativeElement, 'background', 'transparent');
    });
 
  }

}
