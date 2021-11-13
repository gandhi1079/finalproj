import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scheme3',
  templateUrl: './scheme3.component.html',
  styleUrls: ['./scheme3.component.css']
})
export class Scheme3Component implements OnInit {



  ngOnInit(): void {
  }

  constructor(private router: Router) {

  }

 submit=  () => {
   this.router.navigateByUrl('/Scholarship');
 }
}
