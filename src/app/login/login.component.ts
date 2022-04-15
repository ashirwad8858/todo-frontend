import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { environment } from 'src/environments/environment';
import { ApiCallingServiceService } from '../api-Service/api-calling-service.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup = new FormGroup({
      email:new FormControl(null),
      password:new FormControl(null)
    })


  constructor(private http:HttpClient,private authService: SocialAuthService,private api:ApiCallingServiceService) { }

  ngOnInit(): void {

    console.log("on login")
  }

  onsubmit(){
     var formData = new FormData()
     formData.append("email",this.loginForm.value.email)
     formData.append("password",this.loginForm.value.password)
     var object:any = {};
      formData.forEach(function(value, key){
          object[key] = value;
      });
      var json = JSON.stringify(object);
    //   const options = {headers: {'Content-Type': 'application/json'}};
    //   var header = new HttpHeaders({
    //     'Content-Type': 'application/json'
    //   });
    // this.api.login('users/login',formData).subscribe((res:any)=>{
    //   console.log(res)
    //   localStorage.setItem('token',res.token)
    // },(err)=>{
    //   console.log(err.errors.message)
    // }
    // )
    this.http.post('http://localhost:3000/users/login',json).subscribe((res:any)=>{
      console.log(res);
      localStorage.setItem('token',res.token)
    },(error)=>{
      console.log(error);

    })
  }


  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID,{ux_mode:"redirect",redirect_uri:"http://localhost:4000/"}).then(
      (result)=>{
        console.log(result);
      }
    );
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }



}
