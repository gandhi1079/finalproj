// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-scholarship',
//   templateUrl: './scholarship.component.html',
//   styleUrls: ['./scholarship.component.css']
// })
// export class ScholarshipComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

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
 prepercatngePattern="^[0-9.]$"
  


  Scholarship:FormGroup=new FormGroup({
  aadharno:new FormControl("",[Validators.required,Validators.pattern(this.aadharnoPattern)]),
  category:new FormControl("",Validators.required),
  religion:new FormControl("",Validators.required),
  anualincome: new FormControl("",[Validators.required,Validators.pattern("^[0-9]*$")]),
  currentcourse: new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z .-]*$")]),
  currentyear: new FormControl("",[Validators.required,Validators.pattern(this.currentyearPattern)]),
 universityname: new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z .-]*$")]),
 //courseclassdate:new FormControl("",Validators.required),
 previouscourse: new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z .-]*$")]),
 previousyear:new FormControl("",[Validators.required,Validators.pattern(this.previousyearPattern)]),
 // prepercatnge:new FormControl("",[Validators.required,Validators.pattern(this.prepercatngePattern)]),
  rollnumber:new FormControl("",[Validators.required,Validators.pattern(this.rollnumberPattern)]),
  boardname:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z .-]*$")]),
  tenthpassyear: new FormControl("",[Validators.required,Validators.pattern(this.previousyearPattern)]),
 // tenpercatnge:new FormControl("",[Validators.required,Validators.pattern("^[0-9.]$")]),
  twerollnumber: new FormControl("",[Validators.required,Validators.pattern(this.rollnumberPattern)]),
  boardname1: new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z .-]*$")]),
  twethpassyear : new FormControl("",[Validators.required,Validators.pattern(this.previousyearPattern)]),
 // twepercatnge:new FormControl("",[Validators.required,Validators.pattern("^[0-9.]$")]),
  admissionfees: new FormControl("",[Validators.required,Validators.pattern("^[0-9]*$")]),
 tutionfees: new FormControl("",[Validators.required,Validators.pattern("^[0-9]*$")]),
 otherfees: new FormControl("",[Validators.required,Validators.pattern("^[0-9]*$")]),
 fatocc: new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z .-]*$")]),
 motocc: new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z .-]*$")]),

  
});
get aadharno()
{
  return this.Scholarship.get('aadharno');
}
get category()
{
  return this.Scholarship.get('category');
}
get religion()
{
  return this.Scholarship.get('religion');
}
get anualincome()
{
  return this.Scholarship.get('anualincome');
}
get currentcourse()
{
  return this.Scholarship.get('currentcourse');
}
get currentyear()
{
  return this.Scholarship.get('currentyear');
}
get universityname(){
  return this.Scholarship.get('universityname');
}
get courseclassdate(){
  return this.Scholarship.get('courseclassdate');
}
get previouscourse(){
  return this.Scholarship.get('previouscourse');
}
get previousyear(){
  return this.Scholarship.get('previousyear');
}
get prepercatnge(){
  return this.Scholarship.get('prepercatnge');
}
get rollnumber(){
  return this.Scholarship.get('rollnumber');
}
get boardname(){
  return this.Scholarship.get('boardname');
}
get tenthpassyear(){
  return this.Scholarship.get('tenthpassyear');
}
get tenpercatnge(){
  return this.Scholarship.get('tenpercatnge');
}
get twerollnumber(){
  return this.Scholarship.get('twerollnumber');
}
get boardname1(){
  return this.Scholarship.get('boardname1');
}
get twethpassyear(){
  return this.Scholarship.get('twethpassyear');
}
get twepercatnge(){
  return this.Scholarship.get('twepercatnge');
}
get admissionfees()
{
  return this.Scholarship.get('admissionfees');
}
get tutionfees()
{
  return this.Scholarship.get('tutionfees');
}
get otherfees()
{
  return this.Scholarship.get('otherfees');
}

get fatocc(){
  return this.Scholarship.get('fatocc');
}
get motocc(){
  return this.Scholarship.get('motocc');
}



  constructor() { }

  ngOnInit(): void {
  }
  submitform(){
    console.log(this.Scholarship.value);
  }

}