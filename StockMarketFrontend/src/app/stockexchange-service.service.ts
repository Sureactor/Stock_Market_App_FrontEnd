import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StockExchange } from './StockExchange';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StockexchangeServiceService {
  stockexchange :Array<StockExchange>;
  constructor(private http: HttpClient)
  {
    this.http = http;
  }
  showSE(url: string)
  {
    return this.http.get(url);
    /*return this.http.get(url).pipe(
      map((data: StockExchange[]) => {
        return data;
      }), catchError(error => {
        return throwError('Something went wrong!');
      })
    );*/
  }
  addSE(url: string, data: any)
  {
    return this.http.post(url, data);
  }
}
