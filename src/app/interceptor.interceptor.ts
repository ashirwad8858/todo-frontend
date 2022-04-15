import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'
@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  // let updateRes;
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let updateRes;
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json'
    // });
    if(localStorage.getItem('token') != '' && localStorage.getItem('token') != null){

      updateRes = request.clone({ headers: request.headers.set("Authorization", "Bearer "+localStorage.getItem('token'))});
    }else{
      updateRes = request
    }

    //
    // if(localStorage.getItem('token') != '' && localStorage.getItem('token') != null){

    //   // updateRes = request.clone({ headers: request.headers.set("Authorization", `Bearer ${localStorage.getItem('token')}`)});

    //   const headers = new HttpHeaders({
    //     'Authorization': `Bearer ${localStorage.getItem('token')}`,
    //   });
    //   updateRes = request.clone({ headers: headers })
    // }
    // else{
    //   const headers = new HttpHeaders({
    //     'Content-Type': 'application/json'
    //   });
    //   updateRes = request.clone({ headers: headers })


    // }

    return next.handle(updateRes).pipe(
      tap(
        event => {
          //logging the http response to browser's console in case of a success
          if (event instanceof HttpResponse) {
            if(event.headers.has('Authorization')) {
              localStorage.setItem('token', event.headers.get('Authorization') ||'');
              //console.log("Authorization header :", event.headers.get('Authorization'));
            }
            //console.log("api call success :", event);
            // window.alert(`Success: ${event.statusText}`);
          }
        },
        error => {
          //logging the http response to browser's console in case of a failuer
          //if (event instanceof HttpResponse) {
            //console.log("api call error :", event.status);
            //window.alert(`Error: ${event.status}`);

         // }
        }
      )
    );;
  }
}


// if (localStorage.getItem('token') != '' && localStorage.getItem('token') != null ) {
//   updateRes = request.clone({ headers: request.headers.set("Authorization", localStorage.getItem('token')) });
// } else {
//   updateRes = request;
// }
