import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CheckInstituteStatusComponent } from './check-institute-status/check-institute-status.component';
import { CheckStudentStatusComponent } from './check-student-status/check-student-status.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { InstituteApplicationFormMinistryComponent } from './institute-application-form-ministry/institute-application-form-ministry.component';
import { InstituteApplicationFormComponent } from './institute-application-form/institute-application-form.component';
import { InstituteHomePageComponent } from './institute-home-page/institute-home-page.component';
import { InstituteHomeComponent } from './institute-home/institute-home.component';
import { InstituteLoginComponent } from './institute-login/institute-login.component';
import { InstituteRegistrationComponent } from './institute-registration/institute-registration.component';
import { LoginOptionsComponent } from './login-options/login-options.component';
import { MinistryHomePageComponent } from './ministry-home-page/ministry-home-page.component';
import { MinistryHomeComponent } from './ministry-home/ministry-home.component';
import { MinistryLoginComponent } from './ministry-login/ministry-login.component';
import { NewRegistrationOptionsComponent } from './new-registration-options/new-registration-options.component';
import { SchemeComponent } from './scheme/scheme.component';
import { Scheme1Component } from './scheme1/scheme1.component';
import { Scheme2Component } from './scheme2/scheme2.component';
import { Scheme3Component } from './scheme3/scheme3.component';
import { ScholarshipComponent } from './scholarship/scholarship.component';
import { StateHomePageComponent } from './state-home-page/state-home-page.component';
import { StateNodalOfficerHomeComponent } from './state-nodal-officer-home/state-nodal-officer-home.component';
import { StateNodalOfficerLoginComponent } from './state-nodal-officer-login/state-nodal-officer-login.component';
import { StudentApplicationFormMinistryComponent } from './student-application-form-ministry/student-application-form-ministry.component';
import { StudentApplicationFormStateComponent } from './student-application-form-state/student-application-form-state.component';
import { StudentApplicationFormComponent } from './student-application-form/student-application-form.component';
import { StudentHomePageComponent } from './student-home-page/student-home-page.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';

const routes: Routes = [{path: '', redirectTo:'/Home',pathMatch:'full'},
{path: 'Logout' , component: HomeComponent},
{path: 'ContactUs', component: ContactUsComponent},
{path: 'Home', component: HomeComponent},
{path: 'AboutUs', component: AboutUsComponent},
{path: 'Registration', component: NewRegistrationOptionsComponent,
children:[
{path: '', redirectTo:'/Registration/StudentRegistration',pathMatch:'full'},
{path: 'StudentRegistration', component: StudentRegistrationComponent},
{path: 'InstituteRegistration', component: InstituteRegistrationComponent}
]},
{path: 'Login', component: LoginOptionsComponent,
children:
[{path: '', redirectTo:'/Login/StudentLogin',pathMatch:'full'},
{path: 'StudentLogin', component: StudentLoginComponent},
{path: 'InstituteLogin', component: InstituteLoginComponent},
{path: 'StateNodalOfficerLogin', component: StateNodalOfficerLoginComponent},
{path: 'MinistryLogin', component: MinistryLoginComponent},
]},
// {path:'Scheme1',component: Scheme1Component},
// {path:'Scheme2',component: Scheme2Component},
// {path:'Scheme3',component: Scheme3Component},
{path:'InstituteHomePage',component:InstituteHomePageComponent,
children:
[{path:'',redirectTo:'/InstituteHomePage/InstituteHome', pathMatch:'full'},
{path: 'StudentApplication', component: StudentApplicationFormComponent},
{path: 'CheckInstituteStatus', component: CheckInstituteStatusComponent},
{path:'InstituteHome',component:InstituteHomeComponent}
]},
{path:'StudentHomePage',component:StudentHomePageComponent,
children:
[{path:'',redirectTo:'/StudentHomePage/StudentHome', pathMatch:'full'},
{path:'StudentHome',component:StudentHomeComponent},
{path:'Scheme',component:SchemeComponent,
children:
[{path:'',redirectTo:'/StudentHomePage/Scheme/Scheme1', pathMatch:'full'},
{path:'Scheme1',component: Scheme1Component},
{path:'Scheme2',component: Scheme2Component},
{path:'Scheme3',component: Scheme3Component}]},
{path:'Scholarship',component: ScholarshipComponent},
{path: 'CheckStudentStatus', component: CheckStudentStatusComponent},
{path:'Studentprofile',component:StudentprofileComponent}]
},
{path:'StateNodalHome',component: StateNodalOfficerHomeComponent,
children:
[{path:'',redirectTo:'/StateNodalHome/StateHome', pathMatch:'full'},
{path: 'InstituteApplication1', component: InstituteApplicationFormComponent},
{path: 'StudentApplication1', component: StudentApplicationFormStateComponent},
{path:'StateHome',component:StateHomePageComponent}
]},
{path: 'MinistryHome', component: MinistryHomeComponent,
children:
[{path:'',redirectTo:'/MinistryHome/MinistryHomePage', pathMatch:'full'},
{path: 'InstituteApplication2', component: InstituteApplicationFormMinistryComponent},
{path: 'StudentApplication2', component: StudentApplicationFormMinistryComponent},
{path:'MinistryHomePage',component: MinistryHomePageComponent}
]},
{path: '**', redirectTo:'/Home',pathMatch:'full'}
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
