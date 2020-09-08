import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockExchange } from '../StockExchange';
import { StockexchangeServiceService } from '../stockexchange-service.service'

@Component({
  selector: 'app-add-stock-exchange',
  templateUrl: './add-stock-exchange.component.html',
  styleUrls: ['./add-stock-exchange.component.css']
})
export class AddStockExchangeComponent implements OnInit
{
  is:false;
  stockexchange: StockExchange;

  constructor(private route: ActivatedRoute, private router: Router, private service: StockexchangeServiceService)
  {
    this.stockexchange = new StockExchange();
  }

  onSubmit() {
    this.service.addStockExchange(this.stockexchange).subscribe(result => this.gotoSEList());
  }

  gotoSEList() {
    this.router.navigate(['/admin/stockexchange/viewStockExchange']);
  }

  ngOnInit(): void {
  }
}
