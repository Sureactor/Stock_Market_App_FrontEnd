import { Component, OnInit } from '@angular/core';
import { StockExchange } from '../StockExchange';
import { StockexchangeServiceService } from '../stockexchange-service.service'

@Component({
  selector: 'app-view-stock-exchange',
  templateUrl: './view-stock-exchange.component.html',
  styleUrls: ['./view-stock-exchange.component.css']
})
export class ViewStockExchangeComponent implements OnInit {
  stockexchanges: StockExchange[];

  constructor(private service: StockexchangeServiceService)
  { }

  ngOnInit(): void
  {
    this.service.getAllStockExchange().subscribe(data => { this.stockexchanges = data; });  
  }
}
