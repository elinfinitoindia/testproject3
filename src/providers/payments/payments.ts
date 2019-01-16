import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PaymentsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PaymentsProvider Provider');
  }

  // send payment requests to the server
  sendPaymentRequests(data){
    return this.http.post('api', data);
  }

  // get payment history
  getPaymentHistory(data){
    return this.http.post('api' , data);
  }

  // get the actual balance 
  getBalance(){

  }





}
