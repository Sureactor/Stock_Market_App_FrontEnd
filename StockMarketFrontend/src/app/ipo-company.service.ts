import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { IposerviceService} from './iposervice.service'
import {IPO} from './IPO1';

@Injectable({
  providedIn: 'root'
})
export class IpoCompanyService {
  companyId:number;
  currentIpo:number;  
  ipos:IPO[];
  updateIpo:IPO;
  constructor(private http:HttpClient,private service:IposerviceService) {
    
   }

  resolve(route:ActivatedRouteSnapshot,rstate:RouterStateSnapshot):Observable<any>{
    // return this.http.get("http://localhost:8081/user/company/getAll");
    this.companyId = this.service.selectedCompany;
    let newsUrl = "http://localhost:8080/user/company/ipo/"+"/"+this.companyId;
    console.log(newsUrl);

    return this.http.get(newsUrl).pipe(
      map( (dataFromApi) => dataFromApi ),
      catchError( (err) => Observable.throw(err.json().error) )
    )
  }
}
