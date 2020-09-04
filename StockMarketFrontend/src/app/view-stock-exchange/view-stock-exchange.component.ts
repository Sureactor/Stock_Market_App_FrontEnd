import { Component, OnInit } from '@angular/core';
import { StockExchange } from '../StockExchange';
import { StockexchangeServiceService } from '../stockexchange-service.service'

@Component({
  selector: 'app-view-stock-exchange',
  templateUrl: './view-stock-exchange.component.html',
  styleUrls: ['./view-stock-exchange.component.css']
})
export class ViewStockExchangeComponent implements OnInit {
  response: any;
  x: number=1;
  res: StockExchange[];
  constructor(private service: StockexchangeServiceService)
  {
    let obs = this.service.showSE('http://localhost:8081/admin/stockexchange/get/8')
    obs.subscribe((response) => { this.response = response; console.log(this.response); });
    /*obs.subscribe((data: any) => {
      console.log(data);
      this.res = data.data;
    });*/
  }
  ngOnInit(): void {
    
  }
}
