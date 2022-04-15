import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallingServiceService {

  constructor(private http:HttpClient) { }

  public signup(apiPath:string, data: FormData):Observable<any>{
    var object:any = {};
      data.forEach(function(value, key){
          object[key] = value;
      });
      var json = JSON.stringify(object);
      const options = {headers: {'Content-Type': 'application/json'}};
      var header = new HttpHeaders({
        'Content-Type': 'application/json'
      });

      // var promis = new Promise((resolve,reject)=>{
      //   this.http.post(environment.API_URL + apiPath,json).subscribe(
      //     (response:any)=>{
      //       if(response.status = '200'){
      //         resolve(response)

      //       }
      //     },(errors)=>{
      //       reject(errors.message)
      //     }
      //   )
      // })

      // return promis
    return this.http.post(environment.API_URL+apiPath,json)
  }

  public login(apiPath:string, data: FormData):Observable<any>{
    var object:any = {};
      data.forEach(function(value, key){
          object[key] = value;
      });
      var json = JSON.stringify(object);
      const options = {headers: {'Content-Type': 'application/json'}};
      var header = new HttpHeaders({
        'Content-Type': 'application/json'
      });
    return this.http.post(environment.API_URL+apiPath,json)
  }


  public addtask(apiPath:string, data: FormData):Observable<any>{
    var object:any = {};
      data.forEach(function(value, key){
          object[key] = value;
      });
      var json = JSON.stringify(object);

      return this .http.post(environment.API_URL+apiPath,json)
  }

}
