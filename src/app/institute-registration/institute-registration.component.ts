import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import {Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InstituteService } from '../institute.service';


@Component({
  selector: 'app-institute-registration',
  templateUrl: './institute-registration.component.html',
  styleUrls: ['./institute-registration.component.css']
})
export class InstituteRegistrationComponent implements OnInit {
  institutecodePattern = "^[A-Z]{2}[0-9]{4}$";
  telephonePattern="^[0-9]{10}$";
   pincodePattern="^[0-9]{6}$";
   mobilenoPattern="^[0-9]{10}$";
   setpsedPattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";

  
 

  get institutename ()
  {
    return this.instituteform.get('institutename');
  }
  get institutecode()
  {
    return this.instituteform.get('institutecode');
  }
  get dicecode()
  {
    return this.instituteform.get('dicecode');
  }
  get prinicipalname ()
  {
    return this.instituteform.get(' prinicipalname');
  }
  get universityname ()
  {
    return this.instituteform.get('universityname');
  }
  get telephone ()
  {
    return this.instituteform.get('telephone');
  }
  get mobileno ()
  {
    return this.instituteform.get('mobileno');
  }
  get city()
  {
    return this.instituteform.get('city')
  }
  get district()
  {
    return this.instituteform.get('district');
  }
  get state ()
  {
    return this.instituteform.get('state');
  }
  get pincode()
  {
    return this.instituteform.get('pincode');
  }
  get password()
  {
    return this.instituteform.get('password');
  }
  get confirmpwd ()
  {
    return this.instituteform.get('confirmpwd');
  }

  message!:string;
  data = false;    
  instituteform!: FormGroup;    
      
  
    constructor(private formbuider:FormBuilder,private route: Router,private loginService:InstituteService) { }
  
    ngOnInit() {
      this.instituteform=this.formbuider.group ({
        institutename: ['',[Validators.required,Validators.pattern("^[a-zA-Z ]*$")]],
         institutecode:['',[Validators.required,Validators.pattern(this.institutecodePattern)]],
        dicecode:['',[Validators.required,Validators.pattern(this.institutecodePattern)]],
        prinicipalname: ['',[Validators.required,Validators.pattern("^[a-zA-Z ]*$")]],
        telephone:['',[Validators.required,Validators.pattern(this.telephonePattern)]],
        mobileno:['',[Validators.required,Validators.pattern(this.mobilenoPattern)]],
        universityname: ['',[Validators.required,Validators.pattern("^[a-zA-Z -]*$")]],
        city: ['',[Validators.required,Validators.pattern("^[a-zA-Z -]*$")]],
        pincode:['',[Validators.required,Validators.pattern(this.pincodePattern)]],
        state: ['',[Validators.required,Validators.pattern("^[a-zA-Z -]*$")]],
        district: ['',[Validators.required,Validators.pattern("^[a-zA-Z -]*$")]],
        password:['',[Validators.required,Validators.pattern(this.setpsedPattern)]],
        confirmpwd:['',[Validators.required,Validators.pattern(this.setpsedPattern)]]
         });
    }

  RegisterInsitute()    
  {    
  this.loginService.Register(this.instituteform.value).subscribe(    
    (data)=>    
    {    
      console.log(data);
       
      this.instituteform.reset();    
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