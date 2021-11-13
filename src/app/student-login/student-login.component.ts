import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  

  model : any={};    

  errorMessage!:string;    
  constructor(private router:Router,private Service:StudentService) { }    

  ngOnInit() {    
    sessionStorage.removeItem('Aadharnumber');    
    sessionStorage.clear();    
  }    
  login(){    
       console.log(this.model);
       
    this.Service.Login(this.model).subscribe(
      (res) => {  

          console.log("Success");
          sessionStorage.setItem('Aadharnumber',this.model.Aadharnumber)
          //this.Service.sendstatus(true);
          this.Service.subject.next(true);
          this.router.navigate(['Home']);     
           
      },    
      error => {    
        this.errorMessage = "Login Failed";    
      }
      );    
  };    


}
