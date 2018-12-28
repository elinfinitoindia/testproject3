import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the OffersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


const httpOptions ={
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  })
}

const apiUrl = 'http://192.168.225.52:5000/';

@Injectable()
export class OffersProvider {

  constructor(public http: HttpClient) {
    console.log('Hello OffersProvider Provider');
  }

  
  // get all brands 
  public getBrands():Observable<any>{
    return this.http.get(apiUrl+'api/brand',httpOptions);
  }

  public getCategories(){
    return this.http.get(apiUrl+'api/category', httpOptions);
  }

  public getStores(){
    return this.http.get(apiUrl+'api/stores',httpOptions);
  }

  public getOfferById(id){
    return this.http.get(apiUrl+'api/offers/'+id,httpOptions);
  }

  public getOffersByStoreId(id):Observable<any>{
    return  this.http.get(apiUrl+'api/offers/GetByStoreId/'+id, httpOptions);
  }
  
  public getByBrandId(id){
    return this.http.get(apiUrl+'api/offers/GetByBrandId/'+id, httpOptions);
  }
  
  public getByCategoryId(id){
    return  this.http.get(apiUrl+'api/offers/GetByCategories/'+id, httpOptions);
  }

  public GetFavouriteByUserId(id){
    return this.http.get(apiUrl+'api/offers/GetFavouriteByUserId'+id,httpOptions);
  }

  public getAllDeals(){
    return this.http.get(apiUrl+'api/deals',httpOptions);
  }
}
