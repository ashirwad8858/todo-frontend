import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit, OnChanges {

   task = new FormGroup({
     title : new FormControl(null),
     description: new FormControl(null),
     completed:new FormControl(false)

   });
  //  headers = new HttpHeaders({
  //   'Content-Type': 'application/json'
  // });
  constructor(private http:HttpClient) { }

  ngOnInit(): void {

  }
  ngOnChanges(changes:SimpleChanges){
    console.log("onchanges call")
  }
  onSubmit(){
    var data = new FormData()

    data.append("title",this.task.get('title')?.value)
    data.append("description",this.task.get('description')?.value)
    this.http.post('http://localhost:3000/tasks',{'title':'aaaa','description':'hjghgh '}).subscribe((res)=>{
      console.log(res);
    },(err)=>{
      console.log(err)
    })
  }

}
