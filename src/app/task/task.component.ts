import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiCallingServiceService } from '../api-Service/api-calling-service.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  task:FormGroup;
  constructor(private api:ApiCallingServiceService) { }

  ngOnInit(): void {

    this.task = new FormGroup({
      title:new FormControl(null,Validators.required),
      description:new FormControl(null,Validators.required)
    })
  }

  onsubmit(){

  }

}
