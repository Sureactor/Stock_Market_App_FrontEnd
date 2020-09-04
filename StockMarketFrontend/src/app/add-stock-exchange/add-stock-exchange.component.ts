import { Component, OnInit } from '@angular/core';
import { StockExchange } from '../StockExchange';
import { StockexchangeServiceService } from '../stockexchange-service.service'

@Component({
  selector: 'app-add-stock-exchange',
  templateUrl: './add-stock-exchange.component.html',
  styleUrls: ['./add-stock-exchange.component.css']
})
export class AddStockExchangeComponent implements OnInit
{
  stockexchange: StockExchange;
  stockexchange_arry: Array<StockExchange>;
  constructor(private service: StockexchangeServiceService)
  {
    this.stockexchange = new StockExchange();
  }

  ngOnInit(): void {
  }
  
  addStockExchange() {
    let obs = this.service.addSE('http://localhost:8081/admin/stockexchange/Add', this.stockexchange)
    console.log(this.stockexchange.brief);
    /*obs.subscribe((res: Response) => {
      console.log("added");
      this.isShow = true;
    });*/
  }
}
