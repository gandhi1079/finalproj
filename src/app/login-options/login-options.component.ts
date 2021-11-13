import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-options',
  templateUrl: './login-options.component.html',
  styleUrls: ['./login-options.component.css']
})
export class LoginOptionsComponent implements OnInit {

  

  ngOnInit(): void {
  }
  constructor(private router: Router) {

  }

 submit=  () => {
   this.router.navigateByUrl('/StudentLogin');
 }

 submit1=  () => {
  this.router.navigateByUrl('/InstituteLogin');
}

submit2=  () => {
  this.router.navigateByUrl('/StateNodalOfficerLogin');
}

submit3=  () => {
  this.router.navigateByUrl('/MinistryLogin');
}
}
