import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  constructor(private http:HttpClient) { }

  ngOnInit(): void {

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
      // const options = {headers: {'Content-Type': 'application/json'}};
      // var header = new HttpHeaders({
      //   'Content-Type': 'application/json'
      // });
    this.http.post('http://localhost:3000/users/login',json).subscribe((res)=>{
      console.log(res);
      // localStorage.setItem('token',res)
    },(error)=>{
      console.log(error);

    })
  }
}
