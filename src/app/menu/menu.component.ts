import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  message:boolean=false;
  

  constructor(private service:StudentService,private router:Router) { }

  ngOnInit(): void {
    this.service.recievedStatus().subscribe((data)=>{
      this.message=data;

      });
  }
 logout()
  {
    console.log("hi");
    sessionStorage.removeItem('aadharnumber');
    sessionStorage.clear();
    this.service.subject.next(false);
    //this.message=false;
    this.router.navigate(['Home']); 
  } 

}
