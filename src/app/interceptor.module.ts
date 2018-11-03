import { Injectable, NgModule} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/finally';


@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
  constructor(){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    // var getToken = this.sharedService.GetToken()?this.sharedService.GetToken():'notoken';
     //const dupReq =req;
    //  const dupReq = req.clone({ headers: req.headers.set('Authorization', getToken) });
    //  const dupReq = req.clone({ headers: req.headers.set('Authorization', "test") });
     
     
     req.clone({ headers: req.headers.set('Access-Control-Allow-Origin', '*') });//req; //req.clone({ headers: req.headers.set('Authorization', this.sharedService.GetToken()) });
    //  set('Authorization', this.sharedService.GetToken())
    let handleObs: Observable<HttpEvent<any>> = next.handle(req);
  
    return handleObs.do(()=>{}).finally(()=>{
  
    });
  }
};
@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpsRequestInterceptor, multi: true }
  ]
})
export class InterceptorModule { }