import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {

   institutecodePattern = "^[A-Z]{2}[0-9]{4}$";
 aadharnoPattern="^[0-9]{12}$";
  bankifsccodePattern="^[A-Z]{5}[0-9]{7}$";
  bankaccnoPattern="^[0-9]{12}$";
  pincodePattern="^[0-9]{6}$";
  emailidPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  mobilenoPattern="^[0-9]{10}$";
  setpsedPattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";


 

get name()
{
  return this.contactform.get('name');
}
get mname()
{
  return this.contactform.get('mname');
}
get motname()
{
  return this.contactform.get('motname');
}
get lname()
{
  return this.contactform.get('lname');
}
get institutecode(){
  return this.contactform.get('institutecode');
}
get aadharnumber(){
  return this.contactform.get('aadharnumber');
}
get bankifsccode(){
  return this.contactform.get('bankifsccode');
}
get bankaccountnumber(){
  return this.contactform.get('bankaccountnumber');
}
get bankname(){
  return this.contactform.get('bankname');
}
get city(){
  return this.contactform.get('city');
}
get pincode(){
  return this.contactform.get('pincode');
}
get state(){
  return this.contactform.get('state');
}
get district(){
  return this.contactform.get('district');
}
get gender(){
  return this.contactform.get('gender');
}
get emailid(){
  return this.contactform.get('emailid');
}
get mobilenumber(){
  return this.contactform.get('mobilenumber');
}
get password(){
  return this.contactform.get('password');
}
get confirmpswd(){
  return this.contactform.get('confirmpswd');
}
message!:string;
data = false;    
contactform!: FormGroup;    
    

  constructor(private formbuider:FormBuilder,private route: Router,private loginService:StudentService) { }

  ngOnInit() {
    this.contactform=this.formbuider.group ({
      name: ['',Validators.required],
     // mname: new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z]*$")]),
     // motname: new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z]*$")]),
      //lname: new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z]*$")]),
      institutecode:['',[Validators.required,Validators.pattern(this.institutecodePattern)]],
      aadharnumber:['',[Validators.required,Validators.pattern(this.aadharnoPattern)]],
      bankifsccode:['',[Validators.required,Validators.pattern(this.bankifsccodePattern)]],
      bankaccountnumber:['',[Validators.required,Validators.pattern(this.bankaccnoPattern)]],
      bankname:['',Validators.required],
     // city: new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z -]*$")]),
     // pincode: new FormControl("",[Validators.required,Validators.patter(this.pincodePattern)]),
      //state: new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z -]*$")]),
      //district: new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z.]*$")]),
     gender:['',Validators.required],
      emailid:['',[Validators.required,Validators.pattern(this.emailidPattern)]],
       mobilenumber:['',[Validators.required,Validators.pattern(this.mobilenoPattern)]],
       password:['',[Validators.required,Validators.pattern(this.setpsedPattern)]],
       confirmpswd:['',[Validators.required,Validators.pattern(this.setpsedPattern)]],
       dob:['',[Validators.required]],
       
     });
  }
  // submitform(){
  //   console.log(this.contactform.value);
  // }
  RegisterUser()    
  {    
  this.loginService.Register(this.contactform.value).subscribe(    
    (data)=>    
    {    
      console.log(data);
       
      this.contactform.reset();    
      this.message="Registered Successfully"
      //this.router.navigateByUrl('Login')
    },
    error=>{
      console.log(error.message)
      this.message="User already exists"
    }
    );    
  }    


  
}