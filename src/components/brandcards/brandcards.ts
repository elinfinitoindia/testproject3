import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SharedProvider } from '../../providers/shared/shared';

/**
 * Generated class for the BrandcardsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'brandcards',
  templateUrl: 'brandcards.html'
})
export class BrandcardsComponent {

  @Input() navdata: string;
  @Input() type: string;
  @Input() view: boolean;
  @Input() isDeal: boolean;
  @Input() items: any;

  text: string;
  constructor(public navCtrl: NavController, private sharedProvider: SharedProvider) {
    console.log('Hello BrandcardsComponent Component');
    this.text = 'Hello World';
    console.log(this.view);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  ViewAll() {
    this.navCtrl.push(this.navdata);
  }

  getList(event) {
    this.sharedProvider.createToast(event.Name);
    console.log(event);
    if (this.isDeal) {
      this.navCtrl.push('OfferdetailPage');
    }
    else {
      setTimeout(() => {
        this.navCtrl.push('OffercardlistPage', {
          id: event.ID,
          type: this.type,
          name: event.Name
        })
      }, 1000);
    }
  }

}
