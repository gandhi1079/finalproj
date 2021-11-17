import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from '../register';
import { ScholarshipformService } from '../scholarshipform.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-check-student-status',
  templateUrl: './check-student-status.component.html',
  styleUrls: ['./check-student-status.component.css']
})
export class CheckStudentStatusComponent implements OnInit {

 // book:Re = new Book();
  //info:Register=new Info!();
  info!:any;
  constructor(private service:ScholarshipformService) { }
 // x:number|null=sessionStorage.getItem('aadharnumber')JSON.parse(localStorage.getItem('currentUser')!);
  ngOnInit(): void {
    
  
   this.service.Studentapplicationstatus(JSON.parse(sessionStorage.getItem('aadharnumber')!)).subscribe((res:any)=>{
     console.log(res);
      this.info=res;
     // console.log(this.info);

   })
  }

}
