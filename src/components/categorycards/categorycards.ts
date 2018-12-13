import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the CategorycardsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'categorycards',
  templateUrl: 'categorycards.html'
})
export class CategorycardsComponent {

  text: string;
  @Input() items:any = [];
  @Input() navdata: string;
  @Input() type: string;
  @Input() view: boolean;
  @Input() isDeal: boolean;
  

  constructor(private navCtrl:NavController) {
    console.log('Hello CategorycardsComponent Component');
    this.text = 'Category';
  }

  ViewAll() {
    this.navCtrl.push(this.navdata);
  }

}
