import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CompanyNameService {

  constructor(private http:HttpClient) { }

  resolve(route:ActivatedRouteSnapshot,rstate:RouterStateSnapshot):Observable<any>{
    // return this.http.get("http://localhost:8080/user/company/getAll");
    let newsUrl = "http://localhost:8080/admin/company/getNameId";

    return this.http.get(newsUrl).pipe(
      map( (dataFromApi) => dataFromApi ),
      catchError( (err) => Observable.throw(err.json().error) )
    )
  }
}
