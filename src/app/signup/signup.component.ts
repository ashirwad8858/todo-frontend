import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiCallingServiceService } from '../api-Service/api-calling-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUp: FormGroup ;
  constructor(private api:ApiCallingServiceService) { }

  ngOnInit(): void {
    this.signUp = new FormGroup(
      {
        name : new FormControl(null,Validators.required),
        email : new FormControl(null,Validators.required),
        age : new FormControl(null),
        password:new FormControl(null,Validators.required)

      }
    )
  }

  onsubmit(){
    if(this.signUp.valid){

      const formData = new FormData()
      formData.append('name',this.signUp.get('name')?.value)
      formData.append('email',this.signUp.get('email')?.value)
      formData.append('age',this.signUp.get('age')?.value)
      formData.append('password',this.signUp.get('password')?.value)

      this.api.signup('users',formData).subscribe(
        (data:any)=>{
          console.log(data)
        },(err)=>{
          console.log(err.error.message)
        }
      )

    }


  }



}
