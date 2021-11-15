import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class ScholarshipformService {
  

  public subject=new Subject<boolean>();
  Url :string;  
  token! : string;  
  header : any;  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      
    })}

  constructor(private http : HttpClient) {   

    //this.Url = 'http://localhost:14812/api/Login/';  
    this.Url='http://localhost:5000/api/scholarship';
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    
    const headerSettings: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings);  
  }  




  Register(register:Register)  
   {      
    return this.http.post<Register[]>(this.Url +'/register', register, this.httpOptions)  
   } 
}
