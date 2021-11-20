// import { Component, OnInit } from '@angular/core';
// import { InstituteService } from '../institute.service';

// @Component({
//   selector: 'app-student-application-form',
//   templateUrl: './student-application-form.component.html',
//   styleUrls: ['./student-application-form.component.css']
// })
// export class StudentApplicationFormComponent implements OnInit {

//   info!:any[];
//   constructor(private service:InstituteService) { }

//   ngOnInit(): void {
//     this.service.Studentapplicationinfo((sessionStorage.getItem('InstituteCode')!)).subscribe((res)=>{
//       console.log(res);
//       this.info=res;
//       console.log(this.info);
//     }
//     )
//   }
  
//   }










import { Component, OnInit } from '@angular/core';
import { InstituteService } from '../institute.service';
import { Scholarshipform } from '../scholarshipform';
import { ScholarshipformService } from '../scholarshipform.service';

@Component({
  selector: 'app-student-application-form',
  templateUrl: './student-application-form.component.html',
  styleUrls: ['./student-application-form.component.css']
})
export class StudentApplicationFormComponent implements OnInit {

  info!:any[];
  
  constructor(private service:InstituteService, private service1:ScholarshipformService) { }

  ngOnInit(): void {
    this.service.Studentapplicationinfo((sessionStorage.getItem('InstituteCode')!)).subscribe((res)=>{
      console.log(res);
      this.info=res;
      console.log(this.info);
    })
    
  }
  
  approve(id:number){
  
    this.service1.schloarship(id).subscribe((data)=>{
      console.log(data);
      data.statusbyinstitute="approved"
      this.service1.update(id,data).subscribe((res)=>{
        console.log(res);
        this.ngOnInit();
      })
    })
  }
  reject(id:number){
    this.service1.schloarship(id).subscribe((data)=>{
      console.log(data);
      data.statusbyinstitute="rejected"
      this.service1.update(id,data).subscribe((res)=>{
        console.log(res);
        this.ngOnInit();
      })
    })
  }
}

  
  



