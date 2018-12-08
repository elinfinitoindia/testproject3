import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal';

@Injectable()
export class NotificationProvider {

  constructor(public http: HttpClient, private oneSignal:OneSignal) {
    console.log('Hello NotificationProvider Provider');

    // this.oneSignal.startInit('c45b66d2-dbfc-4201-a829-f3bd12086360', '751321163972');
    // this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
    // this.oneSignal.handleNotificationReceived().subscribe(() => {
    //   // do something when notification is received
    // });

    // this.oneSignal.handleNotificationOpened().subscribe((res) => {

    // });

    // this.oneSignal.endInit();

  }


  recieveNotification(callback){
    // this.oneSignal.handleNotificationOpened().subscribe((res) => {
    //   callback(res);
    // });
  }

}
