import { Component, OnInit } from '@angular/core';
import { StockExchange } from '../StockExchange';
import { StockexchangeServiceService } from '../stockexchange-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stock-exchange',
  templateUrl: './stock-exchange.component.html',
  styleUrls: ['./stock-exchange.component.css']
})
export class StockExchangeComponent implements OnInit {
  //for viewing stockexchanges
  stockexchanges: StockExchange[];
  viewEnable: boolean = false;
  //end of viewing stockexchanges

  //for add stockexchange
  stockexchange: StockExchange;
  addEnable: boolean = false;
  //end add stockexchange

  toggle: boolean = true;
  isShowed() {
    this.toggle = this.toggle ? false : true;
  }

  constructor(private service: StockexchangeServiceService, private route: ActivatedRoute,
    private router: Router)
  {
    this.stockexchange = new StockExchange();
  }

  isViewEnabled() {
    this.viewEnable = !this.viewEnable;
  }

  isAddEnabled() {
    this.addEnable = !this.addEnable;
  }

  ngOnInit(): void
  {
    this.service.getAllStockExchange().subscribe(data => { this.stockexchanges = data; });
  }

  onSubmit() {
    this.service.addStockExchange(this.stockexchange).subscribe(result => this.gotoSEList());
  }

  gotoSEList() {
    this.router.navigateByUrl('/success');
  }
}
