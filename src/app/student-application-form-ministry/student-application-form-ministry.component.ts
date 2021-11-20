import { Component, OnInit } from '@angular/core';
import { MinistryService } from '../ministry.service';
import { Scholarshipform } from '../scholarshipform';
import { ScholarshipformService } from '../scholarshipform.service';

@Component({
  selector: 'app-student-application-form-ministry',
  templateUrl: './student-application-form-ministry.component.html',
  styleUrls: ['./student-application-form-ministry.component.css']
})
export class StudentApplicationFormMinistryComponent implements OnInit {

  info!:any[];
  constructor(private service:MinistryService,private service1:ScholarshipformService) { }

  ngOnInit(): void {
    this.service.Studentapplicationinfo().subscribe((res)=>{
      console.log(res);
      this.info=res;
      console.log(this.info);
    });
    
  }
  approve(id:number){
  
    this.service1.schloarship(id).subscribe((data)=>{
      console.log(data);
      data.statusbyministry="approved"
      this.service1.update(id,data).subscribe((res)=>{
        console.log(res);
        this.ngOnInit();
      })
    })
  }
  reject(id:number){
    this.service1.schloarship(id).subscribe((data)=>{
      console.log(data);
      data.statusbyministry="rejected"
      this.service1.update(id,data).subscribe((res)=>{
        console.log(res);
        this.ngOnInit();
      })
    })
  }
}

