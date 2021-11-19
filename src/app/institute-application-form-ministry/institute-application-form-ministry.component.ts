import { Component, OnInit } from '@angular/core';
import { InstituteService } from '../institute.service';
import { MinistryService } from '../ministry.service';

@Component({
  selector: 'app-institute-application-form-ministry',
  templateUrl: './institute-application-form-ministry.component.html',
  styleUrls: ['./institute-application-form-ministry.component.css']
})
export class InstituteApplicationFormMinistryComponent implements OnInit {

  info!:any[];
  constructor(private service:MinistryService,private service1:InstituteService) { }

  ngOnInit(): void {
    this.service.Instituteapplicationinfo().subscribe((res)=>{
      console.log(res);
      this.info=res;
      console.log(this.info);
      this.ngOnInit();
    })
  }
  approve(institutecode:string){
    // instituteapprove.statusbystate="approved";
    // this.service1.update(instituteapprove.institutecode,instituteapprove).subscribe((data)=>{
    //   console.log(data,"approved");}
   // )
   this.service1.instituteapproval(institutecode).subscribe((data)=>{
    console.log(data);
    data.statusbyministry="approved"
    this.service1.update(institutecode,data).subscribe((res)=>{
      console.log(res);
      this.ngOnInit();
    })
  })
}  
    
  
  reject(institutecode:string){
    this.service1.instituteapproval(institutecode).subscribe((data)=>{
      console.log(data);
      data.statusbyministry="rejected"
      this.service1.update(institutecode,data).subscribe((res)=>{
        console.log(res);
        this.ngOnInit();
      })
    })
  }

}
