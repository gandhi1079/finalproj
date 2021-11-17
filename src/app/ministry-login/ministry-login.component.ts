import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MinistryService } from '../ministry.service';


@Component({
  selector: 'app-ministry-login',
  templateUrl: './ministry-login.component.html',
  styleUrls: ['./ministry-login.component.css']
})
export class MinistryLoginComponent implements OnInit {

  model : any={};    

  errorMessage!:string;    
  constructor(private router:Router,private Service:MinistryService) { } 

  ngOnInit(): void {

  }
   login(){    
    console.log(this.model);
    
 this.Service.Login(this.model).subscribe(
   (res) => {  

       console.log("Success");
       sessionStorage.setItem('userid',this.model.userid)
       //this.Service.sendstatus(true);
       this.Service.subject.next(true);
       this.router.navigate(['MinistryHome']);     
        
   },    
   error => {    
     this.errorMessage = "Login Failed";    
   }
   );    
};  


}
