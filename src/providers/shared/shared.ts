import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SharedProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SharedProvider {

  constructor(public http: HttpClient) {
    console.log('Hello SharedProvider Provider');
  }


  setUsername(value) {
    localStorage.setItem('name', value);
  }

  getUsername() {
    localStorage.getItem('name');
  }

}
