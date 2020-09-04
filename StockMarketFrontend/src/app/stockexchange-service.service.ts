import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StockExchange } from './StockExchange';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
@Injectable({ 
  providedIn: 'root'
})
export class StockexchangeServiceService {
  stockexchange: Array<StockExchange>;
  private addurl: string;
  private viewurl: string;

  constructor(private http: HttpClient)
  {
    this.addurl = 'http://localhost:8081/admin/stockexchange/Add';
    this.viewurl = 'http://localhost:8081/admin/stockexchange/get';
  }
  public getAllStockExchange(): Observable<StockExchange[]> {
    return this.http.get<StockExchange[]>(this.viewurl);
  }

  public addStockExchange(se: StockExchange) {
    return this.http.post<StockExchange>(this.addurl, se);
  }
}
