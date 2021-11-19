import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstituteService } from '../institute.service';
import { MinistryService } from '../ministry.service';
import { StateService } from '../state.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  message:boolean=false;
  message1:boolean=false;
  message2:boolean=false;
  message3:boolean=false;

  constructor(private service:StudentService,private router:Router,private service1:InstituteService,private service2:StateService,private service3:MinistryService) { }

  ngOnInit(): void {
    this.service.recievedStatus().subscribe((data)=>{
    this.message=data;});
    this.service1.recievedStatus1().subscribe((data)=>{
    this.message1=data;});
    this.service2.recievedStatus2().subscribe((data)=>{
    this.message2=data;});
    this.service3.recievedStatus3().subscribe((data)=>{
    this.message3=data;});
  }
 logout()
  {
    
    sessionStorage.removeItem('aadharnumber');
    
    sessionStorage.clear();
    this.service.subject.next(false);
    
    //this.message=false;
    this.router.navigate(['Login']); 
  } 
  logout1()
  {
    
    sessionStorage.removeItem('InstituteCode');
    sessionStorage.clear();
    this.service1.subject.next(false);
    //this.message=false;
    this.router.navigate(['Login']); 
  } 
  logout2()
  {
    
    sessionStorage.removeItem('Userid');
    sessionStorage.clear();
    this.service2.subject.next(false);
    //this.message=false;
    this.router.navigate(['Login']); 
  } 
  logout3()
  {
    
    sessionStorage.removeItem('Userid');
    sessionStorage.clear();
    this.service3.subject.next(false);
    //this.message=false;
    this.router.navigate(['Login']); 
  } 


}
