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
  recievedStatus1():Observable<boolean>
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
   Studentapplicationinfo(institutecode:string):Observable<any[]>
   {
       return this.http.get<any[]>(this.Url+'/'+institutecode)
   }
   
   Instituteapplicationstatus(institutecode:any):Observable<any>
   {
       return this.http.get<any>(this.Url+'/status/'+institutecode)
   }
   instituteapproval(InstituteCode:string):Observable<any>{
    return this.http.get<any>(this.Url+'/Institute/'+InstituteCode,this.httpOptions)
  }
  //schloarship(Id:number):Observable<any>{
  //  return this.http.get<any>(this.Url+'/'+Id,this.httpOptions);

  update(InstituteCode:string,update:Instituteregister): Observable<any> {
      return this.http.put<any>(this.Url +'/update/' + InstituteCode,JSON.stringify(update),this.httpOptions)
  }
  }
//http://localhost:5000/api/institute/DE1659
