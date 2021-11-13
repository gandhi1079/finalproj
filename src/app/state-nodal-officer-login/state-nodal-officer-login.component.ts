import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-state-nodal-officer-login',
  templateUrl: './state-nodal-officer-login.component.html',
  styleUrls: ['./state-nodal-officer-login.component.css']
})
export class StateNodalOfficerLoginComponent implements OnInit {

  

  ngOnInit(): void {
  }
  constructor(private router: Router) {

  }

 submit=  () => {
   this.router.navigateByUrl('/StateNodalHome');
 }

}
