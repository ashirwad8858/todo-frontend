import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, Router, RouterModule } from '@angular/router';

import { ApiCallingServiceService } from './api-Service/api-calling-service.service';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { LoginComponent } from './login/login.component';
import { InterceptorInterceptor } from './interceptor.interceptor'
// import { AgmCoreModule } from '@agm/core';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';
import { SignupComponent } from './signup/signup.component';


import { MyLibModule } from 'my-lib';

const routes: Route[] = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'add', component: AddTaskComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  // {path:'**', component: PageNotFoundComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    AddTaskComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SocialLoginModule,
    MyLibModule,
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
    },
    // 256616726562-k30et49plkt5jthundee9s6n2uce2oq4.apps.googleusercontent.com
    // 611366558857-isa9lifif1hqopm6m9v4pha1lv7qvi52.apps.googleusercontent.com mycode
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              // '611366558857-c9ogofd7cpn74shn8iir57njdfcaqkjr.apps.googleusercontent.com'
              "611366558857-0dkfqu5ua6fbh81c4v445648aa3jst1l.apps.googleusercontent.com"
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('clientId')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    },
    ApiCallingServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
