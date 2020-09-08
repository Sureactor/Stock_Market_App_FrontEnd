import { Component, OnInit } from '@angular/core';
import {ipo} from "../ipo"
import { ActivatedRoute, Router } from '@angular/router';
import {IpoServiceService} from '../ipo-service.service'
@Component({
  selector: 'app-addipo',
  templateUrl: './addipo.component.html',
  styleUrls: ['./addipo.component.css']
})
export class AddipoComponent implements OnInit {
  ipos: ipo;
  is:false;
  message: string;
  constructor(private route: ActivatedRoute, private router: Router, private service: IpoServiceService)
  {
    this.ipos = new ipo();
  }

  onSubmit() {
    this.service.addStockExchange(this.ipos).subscribe(result => this.gotoSEList());
  }

  gotoSEList() {
    this.message=" Successfully inserted";
  }

  ngOnInit(): void {
  }

}
