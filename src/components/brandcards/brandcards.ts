import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

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

 @Input() navdata:string;
 @Input() type: string;
 @Input() view:boolean;
 @Input () isDeal:boolean;
 @Input () items:any;

  text: string;
  constructor(public navCtrl:NavController) {
    console.log('Hello BrandcardsComponent Component');
    this.text = 'Hello World';
    console.log(this.view);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.


    
  }

  ViewAll(){
    this.navCtrl.push(this.navdata);
  }



  getList(event){
    var ID = 'caa79e5e-988b-41eb-90f0-c86f6ed6b9c4';
    if(this.isDeal){
    this.navCtrl.push('OfferdetailPage');
    }
    else{
      if(this.type == "brands"){
        this.navCtrl.push('OffercardlistPage',{
          id:ID
      })
      }
     
    }
  }
}
