import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, Router, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InterceptorInterceptor } from './interceptor.interceptor'
// import { AgmCoreModule } from '@agm/core';


const routes: Route[] = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'add', component: AddTaskComponent},
  {path: 'login', component: LoginComponent},
  // {path: 'favorite', component: TodoListComponent},
  // {path:'**', component: PageNotFoundComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    AddTaskComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyBIsQjYQuboWOg_1g1sAmOog54Afqhe-3E',
    //   libraries: ['places']
    // }),

    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
