import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'offercards',
  templateUrl: 'offercards.html'
})
export class OffercardsComponent {

  @Input() lists: any;
  @Input() type:string;
  text: string;
  public offers;

  constructor(private navCtrl:NavController, private navParams:NavParams) {
    console.log('Hello OffercardsComponent Component');
    this.text = 'Hello World';
    this.offers = [
      {'Name':'Prateek' , 'ID':'1'},
      {'Name':'Prateek5' , 'ID':'5'},
      {'Name':'Prateek4' , 'ID':'4'},
      {'Name':'Prateek5' , 'ID':'3'},
      {'Name':'Prateek4' , 'ID':'2'},
    ]
  }


  ngOnInit(){
  
    console.log(this.type);
  }

  getList(evnt) {
    console.log(evnt);
  //  this.navCtrl.push('OffercardlistPage',{
  //   id:evnt.ID,
  //   type:this.type
  //  })
  // }
    this.navCtrl.push('OfferdetailPage');
}

}
