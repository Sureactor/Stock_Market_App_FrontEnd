import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { IPO } from './IPO';

@Injectable({
  providedIn: 'root'
})
export class IposerviceService {
  updateColor:boolean[] = [false,false,false,false,false,false];
  flag:number;
  month:string[]=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  selectedCompany:number;
  addedIPO:IPO;
  constructor(private http:HttpClient) { }

  

  resolve(route:ActivatedRouteSnapshot,rstate:RouterStateSnapshot):Observable<any>{
    // return this.http.get("http://localhost:8081/user/company/getAll");
    let newsUrl = "http://localhost:8080/admin/company/getNameId"+"/"+this.selectedCompany;

    return this.http.get(newsUrl).pipe(
      map( (dataFromApi) => dataFromApi ),
      catchError( (err) => Observable.throw(err.json().error) )
    )
  }

  formatDate(date:string){
    let d:string[]=date.split(" ");
    let v:string="";
    let month = this.month.indexOf(d[1])+1;
    let day = d[2];
    let year = d[3];
    v+=year+'-'+day+'-'+month;
    console.log(v);
    return v;
  }

  checkYear(y1:number,y2:number){
    console.log(y1+" "+y2);
    return y1>y2;
  }
  checkMonth(m1:number,m2:number){
    console.log(m1+" "+m2);
    return m1>m2;
  }
  checkDay(d1:number,d2:number){
    console.log(d1+" "+d2);

    return d1>d2;
  }
  checkOpenDate(date1:string,date2:string){
    let d1:string[]= date1.split('-');
    let d2:string[]= date2.split('-');
    console.log(d1);
    console.log(d2);
    return this.checkYear(+d1[0],+d2[0]) || this.checkMonth(+d1[2],+d2[2]) || this.checkDay(+d1[1],+d2[1]);
  }
}
