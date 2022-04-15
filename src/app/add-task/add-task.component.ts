import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiCallingServiceService } from '../api-Service/api-calling-service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit, OnChanges {
  task:FormGroup;


  //  task = new FormGroup({
  //    title : new FormControl(null),
  //    description: new FormControl(null),
  //    completed:new FormControl(false)

  //  });
  //  headers = new HttpHeaders({
  //   'Content-Type': 'application/json'
  // });
  constructor(private http:HttpClient,private api:ApiCallingServiceService) { }

  ngOnInit(): void {
    // this.authService.authState.subscribe((user) => {
    //   this.user = user;
    //   this.loggedIn = (user != null);
    // });
    this.task = new FormGroup({
      title:new FormControl(null,Validators.required),
      description:new FormControl(null,Validators.required)
    })


  }
  ngOnChanges(changes:SimpleChanges){
    console.log("onchanges call")
  }
  onsubmit(){
    var data = new FormData()

    data.append("title",this.task.get('title')?.value)
    data.append("description",this.task.get('description')?.value)
    // this.http.post('http://localhost:3000/tasks',{'title':'aaaa','description':'hjghgh '}).subscribe((res)=>{
    //   console.log(res);
    // },(err)=>{
    //   console.log(err)
    // })

    this.api.addtask('tasks',data).subscribe(
      (data)=>{
        console.log(data)
      },(err)=>{
        console.log(err);
      }
    )

  }

}
