import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ministry-home',
  templateUrl: './ministry-home.component.html',
  styleUrls: ['./ministry-home.component.css']
})
export class MinistryHomeComponent implements OnInit {

  

  ngOnInit(): void {
  }

  constructor(private router: Router) {

  }

 submit=  () => {
   this.router.navigateByUrl('/StudentApplication');
 }

 submit1=  () => {
  this.router.navigateByUrl('/InstituteApplication');
}

}
