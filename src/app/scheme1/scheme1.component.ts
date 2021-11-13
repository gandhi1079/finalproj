import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scheme1',
  templateUrl: './scheme1.component.html',
  styleUrls: ['./scheme1.component.css']
})
export class Scheme1Component implements OnInit {

  

  ngOnInit(): void {
  }
  constructor(private router: Router) {

  }

 submit=  () => {
   this.router.navigateByUrl('/Scholarship');
 }
}
