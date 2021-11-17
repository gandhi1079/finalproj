import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StateService } from '../state.service';
import { HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-state-nodal-officer-login',
  templateUrl: './state-nodal-officer-login.component.html',
  styleUrls: ['./state-nodal-officer-login.component.css']
})
export class StateNodalOfficerLoginComponent implements OnInit {

  
  model : any={};    

  errorMessage!:string;    
  constructor(private router:Router,private Service:StateService) { }    

  ngOnInit() {    
    sessionStorage.removeItem('Userid');    
    sessionStorage.clear();    
  }    
  login(){    
       console.log(this.model);
       
    this.Service.Login(this.model).subscribe(
      (res) => {  

          console.log("Success");
          sessionStorage.setItem('Userid',this.model.Userid)
          //this.Service.sendstatus(true);
          this.Service.subject.next(true);
          this.router.navigate(['InstituteHomePage']);     
           
      },    
      error => {    
        this.errorMessage = "Login Failed";    
      }
      );    
  };  
  

}
