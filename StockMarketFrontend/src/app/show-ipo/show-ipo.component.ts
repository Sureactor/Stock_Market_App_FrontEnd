import { Component, OnInit } from '@angular/core';
import { IPO } from '../IPO1';
import { IposerviceService} from '../iposervice.service';
import { IpoCompanyService} from '../ipo-company.service'

@Component({
  selector: 'app-show-ipo',
  templateUrl: './show-ipo.component.html',
  styleUrls: ['./show-ipo.component.css']
})
export class ShowIPOComponent implements OnInit {
  ipo:IPO;
  isValid:boolean[];
  is:false;
  constructor(private service:IposerviceService,private service1:IpoCompanyService) { }

  ngOnInit(): void {
    if(this.service.flag==1)
      this.ipo=this.service.addedIPO;
      else if(this.service.flag==2)
      {
        this.ipo=this.service1.updateIpo;
    this.isValid = this.service.updateColor;
      }
  }

}
