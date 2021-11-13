import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-state-nodal-officer-home',
  templateUrl: './state-nodal-officer-home.component.html',
  styleUrls: ['./state-nodal-officer-home.component.css']
})
export class StateNodalOfficerHomeComponent implements OnInit {



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
