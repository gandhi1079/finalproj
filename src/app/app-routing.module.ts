import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CheckInstituteStatusComponent } from './check-institute-status/check-institute-status.component';
import { CheckStudentStatusComponent } from './check-student-status/check-student-status.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { InstituteApplicationFormComponent } from './institute-application-form/institute-application-form.component';
import { InstituteHomePageComponent } from './institute-home-page/institute-home-page.component';
import { InstituteLoginComponent } from './institute-login/institute-login.component';
import { InstituteRegistrationComponent } from './institute-registration/institute-registration.component';
import { LoginOptionsComponent } from './login-options/login-options.component';
import { MinistryHomeComponent } from './ministry-home/ministry-home.component';
import { MinistryLoginComponent } from './ministry-login/ministry-login.component';
import { NewRegistrationOptionsComponent } from './new-registration-options/new-registration-options.component';
import { Scheme1Component } from './scheme1/scheme1.component';
import { Scheme2Component } from './scheme2/scheme2.component';
import { Scheme3Component } from './scheme3/scheme3.component';
import { ScholarshipComponent } from './scholarship/scholarship.component';
import { StateNodalOfficerHomeComponent } from './state-nodal-officer-home/state-nodal-officer-home.component';
import { StateNodalOfficerLoginComponent } from './state-nodal-officer-login/state-nodal-officer-login.component';
import { StudentApplicationFormComponent } from './student-application-form/student-application-form.component';
import { StudentHomePageComponent } from './student-home-page/student-home-page.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';

const routes: Routes = [//{path: '', redirectTo:'/Home',pathMatch:'full'},
{path: 'Logout' , component: HomeComponent},
{path: 'StudentApplication', component: StudentApplicationFormComponent},
{path: 'InstituteApplication', component: InstituteApplicationFormComponent},
{path: 'ContactUs', component: ContactUsComponent},
{path: 'StudentRegistration', component: StudentRegistrationComponent},
{path: 'InstituteRegistration', component: InstituteRegistrationComponent},
{path: 'Home', component: HomeComponent},
{path: 'AboutUs', component: AboutUsComponent},
{path:'InstituteHomePage',component:InstituteHomePageComponent},
{path: 'MinistryLogin', component: MinistryLoginComponent},
{path: 'CheckInstituteStatus', component: CheckInstituteStatusComponent},
{path: 'Registration', component: NewRegistrationOptionsComponent,
children:[
{path: '', redirectTo:'/Registration/StudentRegistration',pathMatch:'full'},
{path: 'StudentRegistration', component: StudentRegistrationComponent},
{path: 'InstituteRegistration', component: InstituteRegistrationComponent}
]},
{path: 'Login', component: LoginOptionsComponent,
children:[
{path: '', redirectTo:'/Login/StudentLogin',pathMatch:'full'},
{path: 'StudentLogin', component: StudentLoginComponent},
{path: 'InstituteLogin', component: InstituteLoginComponent},
{path: 'StateNodalOfficerLogin', component: StateNodalOfficerLoginComponent},
{path: 'MinistryLogin', component: MinistryLoginComponent},
]},
{path:'Scheme1',component: Scheme1Component},
{path:'Scheme2',component: Scheme2Component},
{path:'Scheme3',component: Scheme3Component},
{path:'InstituteHomePage',component:InstituteHomePageComponent},
{path:'StudentHomePage',component:StudentHomePageComponent,
children:[{path:'Scheme1',component: Scheme1Component},
{path:'Scheme2',component: Scheme2Component},
{path:'Scheme3',component: Scheme3Component},
{path:'Scholarship',component: ScholarshipComponent},
{path: 'CheckStudentStatus', component: CheckStudentStatusComponent},
{path:'Studentprofile',component:StudentprofileComponent}]
},
{path:'StateNodalHome',component: StateNodalOfficerHomeComponent},
{path: 'MinistryHome', component: MinistryHomeComponent},
//{path: '**', redirectTo:'/Home',pathMatch:'full'}
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
