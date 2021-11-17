import { Component, OnInit } from '@angular/core';
import { InstituteService } from '../institute.service';

@Component({
  selector: 'app-check-institute-status',
  templateUrl: './check-institute-status.component.html',
  styleUrls: ['./check-institute-status.component.css']
})
export class CheckInstituteStatusComponent implements OnInit {

  info!:any;
  constructor(private service:InstituteService) { }
 // x:number|null=sessionStorage.getItem('aadharnumber')JSON.parse(localStorage.getItem('currentUser')!);
  ngOnInit(): void {
    
  
   this.service.Instituteapplicationstatus((sessionStorage.getItem('InstituteCode')!)).subscribe((res:any)=>{
     console.log(res);
      this.info=res;
     // console.log(this.info);
   })
  }

}
