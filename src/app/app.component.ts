import { HttpClient } from '@angular/common/http';
import { AfterContentInit, Component, DoCheck, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges,DoCheck, AfterContentInit {
  title = 'todo-frontend';
  constructor(private http:HttpClient){
    console.log("constructor call")
  }

  ngOnInit(): void {
    console.log("oninit call")
    console.log("app component")

      // this.http.get('http://localhost:3000/users').subscribe((res)=>{
      //   console.log(res);
      // })
  }

  ngOnChanges(changes:SimpleChanges){
    // console.log("onchanges call")
  }

  ngDoCheck(): void {
      // console.log("docheck called")
  }
  ngAfterContentInit(): void {
      // console.log("after content init")
  }

}
