import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ipo } from './ipo';

import { Observable } from 'rxjs';
@Injectable({ 
  providedIn: 'root'
})
export class IpoServiceService {
  stockexchange: Array<ipo>;
  private addurl: string;
  private viewurl: string;

  constructor(private http: HttpClient)
  {
    this.addurl = 'http://localhost:8080/admin/company/ipo/add';
    this.viewurl = 'http://localhost:8080/user/company/ipolatest';
  }
  public getAllStockExchange(): Observable<ipo[]> {
    return this.http.get<ipo[]>(this.viewurl);
  }

  public addStockExchange(i: ipo) {
    console.log("inside add stock");
    return this.http.post<ipo>(this.addurl, i);
  }
}