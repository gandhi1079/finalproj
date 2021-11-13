import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { CheckStudentStatusComponent } from './check-student-status/check-student-status.component';
import { InstituteHomePageComponent } from './institute-home-page/institute-home-page.component';
import { StudentApplicationFormComponent } from './student-application-form/student-application-form.component';
import { StudentHomePageComponent } from './student-home-page/student-home-page.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { InstituteLoginComponent } from './institute-login/institute-login.component';
import { Scheme1Component } from './scheme1/scheme1.component';
import { Scheme2Component } from './scheme2/scheme2.component';
import { Scheme3Component } from './scheme3/scheme3.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { HomeComponent } from './home/home.component';
import { LoginOptionsComponent } from './login-options/login-options.component';
import { NewRegistrationOptionsComponent } from './new-registration-options/new-registration-options.component';
import { StateNodalOfficerHomeComponent } from './state-nodal-officer-home/state-nodal-officer-home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MinistryHomeComponent } from './ministry-home/ministry-home.component';
import { CheckInstituteStatusComponent } from './check-institute-status/check-institute-status.component';
import { InstituteRegistrationComponent } from './institute-registration/institute-registration.component';
import { ScholarshipComponent } from './scholarship/scholarship.component';
import { InstituteApplicationFormComponent } from './institute-application-form/institute-application-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    CheckStudentStatusComponent,
    InstituteHomePageComponent,
    StudentApplicationFormComponent,
    StudentHomePageComponent,
    StudentRegistrationComponent,
    InstituteLoginComponent,
    Scheme1Component,
    Scheme2Component,
    Scheme3Component,
    StudentLoginComponent,
    HomeComponent,
    LoginOptionsComponent,
    StateNodalOfficerHomeComponent,
    AboutUsComponent,
    MinistryHomeComponent,
    CheckInstituteStatusComponent,
    NewRegistrationOptionsComponent,
    InstituteRegistrationComponent,
    ScholarshipComponent,
    InstituteApplicationFormComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
