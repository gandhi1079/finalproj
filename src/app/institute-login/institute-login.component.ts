import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkWithHref } from '@angular/router';
import { InstituteService } from '../institute.service';


@Component({
  selector: 'app-institute-login',
  templateUrl: './institute-login.component.html',
  styleUrls: ['./institute-login.component.css']
})
export class InstituteLoginComponent implements OnInit {

  model : any={};    

  errorMessage!:string;    
  constructor(private router:Router,private Service:InstituteService) { }    

  ngOnInit() {    
    sessionStorage.removeItem('institutecode');    
    sessionStorage.clear();    
  }    
  login(){    
       console.log(this.model);
       
    this.Service.Login(this.model).subscribe(
      (res) => {  

          console.log("Success");
          sessionStorage.setItem('InstituteCode',this.model.InstituteCode)
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

