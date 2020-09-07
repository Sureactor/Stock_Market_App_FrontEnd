import { Component, OnInit } from '@angular/core';
import {ipo} from 'src/app/ipo';
import { IpoServiceService} from '../ipo-service.service'

@Component({
  selector: 'app-viewipo',
  templateUrl: './viewipo.component.html',
  styleUrls: ['./viewipo.component.css']
})
export class ViewipoComponent implements OnInit {

  ipos: ipo[];
  constructor(private service: IpoServiceService) { }

  ngOnInit(): void {
    this.service.getAllStockExchange().subscribe(data => { this.ipos = data; });  
  }

}
