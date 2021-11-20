import { Component, OnInit } from '@angular/core';
import { Scholarshipform } from '../scholarshipform';
import { ScholarshipformService } from '../scholarshipform.service';
import { StateService } from '../state.service';

@Component({
  selector: 'app-student-application-form-state',
  templateUrl: './student-application-form-state.component.html',
  styleUrls: ['./student-application-form-state.component.css']
})
export class StudentApplicationFormStateComponent implements OnInit {

  info!:any[];
  constructor(private service:StateService,private service1:ScholarshipformService) { }

  ngOnInit(): void {
    this.service.Studentapplicationinfo().subscribe((res)=>{
      console.log(res);
      this.info=res;
      console.log(this.info);
    })
    
  }
  approve(id:number){
  
    this.service1.schloarship(id).subscribe((data)=>{
      console.log(data);
      data.statusbystate="approved"
      this.service1.update(id,data).subscribe((res)=>{
        console.log(res);
        this.ngOnInit();
      })
    })
  }
  reject(id:number){
    this.service1.schloarship(id).subscribe((data)=>{
      console.log(data);
      data.statusbystate="rejected"
      this.service1.update(id,data).subscribe((res)=>{
        console.log(res);
        this.ngOnInit();
      })
    })
  }

}
