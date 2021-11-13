import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-home-page',
  templateUrl: './student-home-page.component.html',
  styleUrls: ['./student-home-page.component.css']
})
export class StudentHomePageComponent implements OnInit {

  

  ngOnInit(): void {
  }

  constructor(private router: Router) {

  }

 submit=  () => {
   this.router.navigateByUrl('/Scheme1');
 }

 submit1=  () => {
  this.router.navigateByUrl('/Scheme2');
}

submit2=  () => {
  this.router.navigateByUrl('/Scheme3');
}

submit4=  () => {
  this.router.navigateByUrl('/Home');
}

submit5=  () => {
  this.router.navigateByUrl('/CheckStudentStatus');
}

}
