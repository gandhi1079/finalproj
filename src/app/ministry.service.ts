import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MinistryService {
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
    this.Url='http://localhost:5000/api/ministry';
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    
    const headerSettings: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings);  
  }  
  recievedStatus3():Observable<boolean>
  {
    return this.subject.asObservable();
  }
  Login(model : any){        
    return this.http.post<any>(this.Url+'/Login',JSON.stringify(model),this.httpOptions );  
   } 
   Studentapplicationinfo():Observable<any[]>
   {
       return this.http.get<any[]>(this.Url+'/studentlist')
   }
   Instituteapplicationinfo():Observable<any[]>
   {
       return this.http.get<any[]>(this.Url+'/intitutelist')
   }
}
 
