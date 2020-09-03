import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from './Company';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {
  company:Array<Company>;
  currentIndex:number;
  constructor(private http:HttpClient) {
    this.http = http;
   }

   
  getAllCompa(){
    let obs = this.manageCompany("http://localhost:8081/user/company/getAll","GET",null);
    obs.subscribe((res : Response) => {
      let st = JSON.stringify(res);
      this.company = <Company[]> JSON.parse(st);
      console.log(this.company);
    })
  } 
  
  manageCompany(url:string,method:string,data:any){
    switch(method){
      case "GET":
        return this.http.get(url);
      case "PUT":
        return this.http.put(url,data);
      case "POST":
        return this.http.post(url,data);
      case "DELETE":
        return this.http.delete(url);
    }
    
   }
  resolve(route:ActivatedRouteSnapshot,rstate:RouterStateSnapshot):Observable<any>{
    // return this.http.get("http://localhost:8081/user/company/getAll");
    let newsUrl = "http://localhost:8080/user/company/getAll";

    return this.http.get(newsUrl).pipe(
      map( (dataFromApi) => dataFromApi ),
      catchError( (err) => Observable.throw(err.json().error) )
    )
  }
  
  }
