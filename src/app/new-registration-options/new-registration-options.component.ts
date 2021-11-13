import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-registration-options',
  templateUrl: './new-registration-options.component.html',
  styleUrls: ['./new-registration-options.component.css']
})
export class NewRegistrationOptionsComponent implements OnInit {

  constructor(private router: Router) {

  }

 ngOnInit(): void {
 }

 submit=  () => {
   this.router.navigateByUrl('/StudentRegistration');
 }

 submit1=  () => {
  this.router.navigateByUrl('/InstituteRegistration');
}
}
