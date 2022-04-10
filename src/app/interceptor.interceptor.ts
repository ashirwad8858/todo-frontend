import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  // let updateRes;
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let updateRes;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    //
    if(localStorage.getItem('token') != '' && localStorage.getItem('token') != null){

      const headers = new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      });
      updateRes = request.clone({ headers: headers })
    }else{
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      updateRes = request.clone({ headers: headers })


    }

    return next.handle(updateRes);
  }
}


// if (localStorage.getItem('token') != '' && localStorage.getItem('token') != null ) {
//   updateRes = request.clone({ headers: request.headers.set("Authorization", localStorage.getItem('token')) });
// } else {
//   updateRes = request;
// }
