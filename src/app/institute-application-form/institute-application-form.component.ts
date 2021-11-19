import { Component, OnInit } from '@angular/core';
import { InstituteService } from '../institute.service';
import { Instituteregister } from '../instituteregister';
import { StateService } from '../state.service';

@Component({
  selector: 'app-institute-application-form',
  templateUrl: './institute-application-form.component.html',
  styleUrls: ['./institute-application-form.component.css']
})
export class InstituteApplicationFormComponent implements OnInit {

  info!:any[];
  constructor(private service:StateService,private service1:InstituteService) { }

  ngOnInit(): void {
    this.service.Instituteapplicationinfo().subscribe((res)=>{
    //  console.log(res);
      this.info=res;
    //  console.log(this.info);
      this.ngOnInit();
    }
    )
  }
  approve(institutecode:string){
    // instituteapprove.statusbystate="approved";
    // this.service1.update(instituteapprove.institutecode,instituteapprove).subscribe((data)=>{
    //   console.log(data,"approved");}
   // )
   this.service1.instituteapproval(institutecode).subscribe((data)=>{
    console.log(data);
    data.statusbystate="approved"
    this.service1.update(institutecode,data).subscribe((res)=>{
      console.log(res);
      this.ngOnInit();
    })
  })
}  
    
  
  reject(institutecode:string){
    this.service1.instituteapproval(institutecode).subscribe((data)=>{
      console.log(data);
      data.statusbystate="rejected"
      this.service1.update(institutecode,data).subscribe((res)=>{
        console.log(res);
        this.ngOnInit();
      })
    })
  }

}
