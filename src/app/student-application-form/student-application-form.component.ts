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

@Component({
  selector: 'app-student-application-form',
  templateUrl: './student-application-form.component.html',
  styleUrls: ['./student-application-form.component.css']
})
export class StudentApplicationFormComponent implements OnInit {

  info!:any[];
  constructor(private service:InstituteService) { }

  ngOnInit(): void {
    this.service.Studentapplicationinfo((sessionStorage.getItem('InstituteCode')!)).subscribe((res)=>{
      console.log(res);
      this.info=res;
      console.log(this.info);
    }
    )
  }
  
  }



