import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-institute-home-page',
  templateUrl: './institute-home-page.component.html',
  styleUrls: ['./institute-home-page.component.css']
})
export class InstituteHomePageComponent implements OnInit {

 
  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }
  // submit=  () => {
  //   this.router.navigateByUrl('/StudentApplication');
  // }
  // submit1=  () => {
  //   this.router.navigateByUrl('/CheckInstituteStatus');
  // }
  // submit2=  () => {
  //   this.router.navigateByUrl('/Home');
  // }

}
