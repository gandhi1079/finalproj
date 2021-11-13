import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ministry-login',
  templateUrl: './ministry-login.component.html',
  styleUrls: ['./ministry-login.component.css']
})
export class MinistryLoginComponent implements OnInit {

  

  ngOnInit(): void {
  }
  constructor(private router: Router) {

  }

 submit=  () => {
   this.router.navigateByUrl('/MinistryHome');
 }


}
