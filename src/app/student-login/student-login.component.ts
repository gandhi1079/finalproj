import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  aadharnumberpattern="^[0-9]{12}$";
  setpsedPattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";

  model : any={};    

  errorMessage!:string;    
  constructor(private router:Router,private Service:StudentService) { }    

  ngOnInit() {    
  //  this.model=new FormGroup({
  //    aadharnumber: new FormControl("",[Validators.required,Validators.pattern(this.aadharnumberpattern)]),
  //    password:new FormControl("",[Validators.required,Validators.pattern(this.setpsedPattern)])
  //  })
    // localStorage.removeItem('aadharnumber');    
    // localStorage.clear();    
  }    
  // login(){    
  //     // console.log(this.model.value);
       
  //   this.Service.Login(this.model.value).subscribe(
  //     (res) => {  

  //         console.log("Success");
  //        localStorage.setItem('aadharnumber',this.model.value.aadharnumber)
  //         //this.Service.sendstatus(true);
  //         this.Service.subject.next(true);
  //        // console.log(localStorage.getItem('aadharnumber'))
  //         this.router.navigate(['StudentHomePage']);     
           
  //     },    
  //     error => {    
  //       this.errorMessage = "Login Failed";    
  //     }
  //     );    
  // };    
  login(){    
    console.log(this.model);
    
 this.Service.Login(this.model).subscribe(
   (res) => {  

       console.log("Success");
       sessionStorage.setItem('aadharnumber',this.model.aadharnumber)
       //this.Service.sendstatus(true);
       this.Service.subject.next(true);
       this.router.navigate(['StudentHomePage']);     
        
   },    
   error => {    
     this.errorMessage = "Login Failed";    
   }
   );    
};  



}
