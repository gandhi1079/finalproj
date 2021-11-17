import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http';  
import {HttpHeaders} from '@angular/common/http';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

 

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
    this.Url='http://localhost:5000/api/student';
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    
    const headerSettings: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings);  
  }  

/*   sendstatus(message:boolean)
  {
    this.subject.next(message)
  } */
  recievedStatus():Observable<boolean>
  {
    return this.subject.asObservable();
  }
   Login(model : any){        
   return this.http.post<any>(this.Url+'/Login',JSON.stringify(model),this.httpOptions );  
  }  
   /* CreateUser(register:Register)  
   {  
    return this.http.post<Register[]>(this.Url + '/createcontact/', register, this.httpOptions)  
   }  */ 
   Register(register:Register)  
   {      
    return this.http.post<Register[]>(this.Url +'/register', register, this.httpOptions)  
   } 
  //  Studentapplicationstatus(aadharnumber:Number):Observable<any>
  //  {
  //      return this.http.get<any>(this.Url+'/status/'+aadharnumber)
  //  }
  //  Approvedbyinsitute(aadharnumber:Number,statusbystate:any): Observable<Stude> {
  //   return this.httpClient.put<Product>(this.apiServer +'/' + id, JSON.stringify(product), this.httpOptions)
    
  // }


  }


