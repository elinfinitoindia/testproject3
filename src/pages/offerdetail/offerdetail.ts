import { Component, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ModalController, AlertController } from 'ionic-angular';
import { Clipboard } from '@ionic-native/clipboard';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OffersProvider } from '../../providers/offers/offers';
import { SharedProvider } from '../../providers/shared/shared';
import { ErrormodalComponent} from '../../components/errormodal/errormodal';

/**
 * Generated class for the OfferdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
  })
};

@IonicPage()
@Component({
  selector: 'page-offerdetail',
  templateUrl: 'offerdetail.html',
})
export class OfferdetailPage implements AfterViewInit {

  public offerDetail;
  public id: any;
  testRadioOpen: boolean;
  testRadioResult;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private clipboard: Clipboard, private platform: Platform, private offerService: OffersProvider, private sharedService: SharedProvider, public modalCtrl: ModalController, private alertController: AlertController 
                                                                                                                                                                                                                                                                             ) {
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  ionViewDidLoad() {
    this.id = this.navParams.get('ID');
    // this.httpClient.get('http://192.168.225.52:5000/api/offers/' + this.id, httpOptions).subscribe((res) => {
    //   this.offerDetail = res;
    //   console.log(this.offerDetail);
    // });

    this.offerService.getOfferById(this.id).subscribe(res=>{
      this.offerDetail = res;
    }, err=>{
      this.sharedService.createToast('Unable to load offer details');
    })
    console.log('ionViewDidLoad OfferdetailPage');

  }

  ionViewDidEnter() {
  }

  ngAfterViewInit() {
  }

  insertView() {
    this.navCtrl.push('Dea');
  }

  reportProblem(){
    let alert = this.alertController.create();
    alert.setTitle('Report Problem');

    alert.addInput({
      type: 'radio',
      label: 'Link not working',
      value: '0',
      checked: true
    });
alert.addInput({
  type: 'radio',
  label: 'Coupon not working',
  value: '1',
  checked: false
});
alert.addInput({
  type: 'radio',
  label: 'Offer Expired',
  value: '2',
  checked: false
});
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.testRadioOpen = false;
        this.testRadioResult = data;
        console.log(this.testRadioResult
                         );
      }
    });
    alert.present();
  }
}
