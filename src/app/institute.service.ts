import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Instituteregister } from './instituteregister';

@Injectable({
  providedIn: 'root'
})
export class InstituteService {

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
    this.Url='http://localhost:5000/api/institute';
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
   Register(register:Instituteregister )  
   {      
    return this.http.post<Instituteregister []>(this.Url +'/register', register, this.httpOptions)  
   } 
}
