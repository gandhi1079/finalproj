import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ScholarshipformService } from '../scholarshipform.service';

@Component({
  selector: 'app-scholarship',
  templateUrl: './scholarship.component.html',
  styleUrls: ['./scholarship.component.css']
})
export class ScholarshipComponent implements OnInit {
  currentyearPattern = "^[1-6]{1}$";
 aadharnoPattern="^[0-9]{12}$";
 previousyearPattern="^[0-9]{4}$";
 rollnumberPattern="^[A-Z]{2}[0-9]{6}$";
 
  

 get aadharnumber()
{
   return this.scholarshipform.get('aadharnumber');
  }
get category()
{
  return this.scholarshipform.get('category');
}
get religion()
{
  return this.scholarshipform.get('religion');
}
get annualincome()
{
  return this.scholarshipform.get('annualincome');
}
get currentcourse()
{
  return this.scholarshipform.get('currentcourse');
}
get currentyear()
{
  return this.scholarshipform.get('currentyear');
}
get universityname(){
  return this.scholarshipform.get('universityname');
}
//get courseclassdate(){
 // return this.Scholarship.get('courseclassdate');
//}
get previouscourse(){
  return this.scholarshipform.get('previouscourse');
}
get previousyear(){
  return this.scholarshipform.get('previousyear');
}
get previouspercentage(){
  return this.scholarshipform.get('previouspercentage');
}
get rollnumber(){
  return this.scholarshipform.get('rollnumber');
}
get tenthboardname(){
  return this.scholarshipform.get('tenthboardname');
}
get tenthpassyear(){
  return this.scholarshipform.get('tenthpassyear');
}
get tenthpercatnge(){
  return this.scholarshipform.get('tenthpercatnge');
}
get twelvethrollnumber(){
  return this.scholarshipform.get('twelvethrollnumber');
}
get twelvethboardname(){
  return this.scholarshipform.get('twelvethboardname');
}
get twelvethpassyear(){
  return this.scholarshipform.get('twelvethpassyear');
}
get twelvethpercatnge(){
  return this.scholarshipform.get('twelvethpercatnge');
}
get admissionfees()
{
  return this.scholarshipform.get('admissionfees');
}
get tutionfees()
{
  return this.scholarshipform.get('tutionfees');
}
get otherfees()
{
  return this.scholarshipform.get('otherfees');
}
get maritialstatus()
{
  return this.scholarshipform.get('maritialstatus');
}

get fatheroccupation(){
  return this.scholarshipform.get('fatheroccupation');
}
get motheroccupation(){
  return this.scholarshipform.get('motheroccupation');
}
get schlorship(){
  return this.scholarshipform.get('schlorship');
}

message!:string;
data = false;
//aadhar!:number|null;    
scholarshipform!: FormGroup;    
    

  constructor(private formbuider:FormBuilder,private route: Router,private Service:ScholarshipformService) { }


  
  ngOnInit() {
    //this.aadhar=parseInt(localStorage.getItem('aadharnumber'))
//console.log("in scholarship"+localStorage.getItem('aadharnumber'))
    this.scholarshipform=this.formbuider.group ({
    aadharnumber:['',[Validators.required,Validators.pattern(this.aadharnoPattern)]],
    // aadharnumber:[localStorage.getItem('aadharnumber')],
      category:['',Validators.required],
     religion:['',Validators.required],
      annualincome:['',Validators.required],
      currentcourse:['',Validators.required],
      currentyear: ['',Validators.required],
     universityname: ['',Validators.required],
     //courseclassdate:new FormControl("",Validators.required),
    previouscourse:['',Validators.required],
     previousyear:['',Validators.required],
    previouspercentage:['',Validators.required],
     rollnumber:['',[Validators.required,Validators.pattern(this.rollnumberPattern)]],
      tenthboardname:['',Validators.required],
      tenthpassyear:['',Validators.required],
     tenthpercatnge:['',Validators.required],
      twelvethrollnumber: ['',[Validators.required,Validators.pattern(this.rollnumberPattern)]],
      twelvethboardname: ['',Validators.required],
      twelvethpassyear :['',Validators.required],
    twelvethpercatnge:['',Validators.required],
      admissionfees: ['',Validators.required],
     tutionfees:['',Validators.required],
     otherfees: ['',Validators.required],
    maritialstatus: ['',Validators.required],
     fatheroccupation:['',Validators.required],
     motheroccupation: ['',Validators.required],
     schlorship: ['',Validators.required]
       
     });
  }
  // submitform(){
  //   console.log(this.contactform.value);
  // }
  
  submitform()    
  {  // console.log(this.scholarshipform.value)
   // this.scholarshipform.value.aadharnumber=localStorage.getItem('aadharnumber')
  this.Service.Register(this.scholarshipform.value).subscribe(    
    (data)=>    
    {    
     // console.log(this.scholarshipform.value)
      console.log(data);
      this.scholarshipform.reset();    
      this.message="Details Submitted Successfully"
      
    }); 
    
      
  }    

  

}