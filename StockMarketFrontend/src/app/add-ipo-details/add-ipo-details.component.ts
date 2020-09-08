import { Component, OnInit } from '@angular/core';
import{IPO} from "../IPO1";
import {IposerviceService} from '../iposervice.service';
import {CompanyServiceService} from '../company-service.service';

import {MatSnackBar} from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-ipo-details',
  templateUrl: './add-ipo-details.component.html',
  styleUrls: ['./add-ipo-details.component.css']
})
export class AddIpoDetailsComponent implements OnInit {
  is:false;
  ipo:IPO;
  closeDate:Date;
  openDate:Date;

  constructor(private service:IposerviceService,private service2:CompanyServiceService,private _snackBar: MatSnackBar,private route:Router,private activatedRoute:ActivatedRoute) {
    this.ipo= new IPO()
   }
   openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  ngOnInit(): void {
    this.service.updateColor.fill(false);
  }


  add(){
    console.log(this.closeDate);
    let cd = this.service.formatDate(this.closeDate.toDateString());
    let od = this.service.formatDate(this.openDate.toDateString());
    this.ipo.closeTime = cd;
    this.ipo.openTime = od;
    console.log(this.ipo);
    if(this.service.checkOpenDate(this.ipo.closeTime,this.ipo.openTime)){
    this.ipo.company.companyId = this.service.selectedCompany;
    let obs =this.service2.manageCompany("http://localhost:8080/admin/company/ipo/add","POST",this.ipo);
    obs.subscribe((res:Response)=>{
      console.log(res);
      this.service.addedIPO = this.ipo;
      this.service.flag = 1;
      this.route.navigate(['../update/showIpo'],{relativeTo: this.activatedRoute})
    });}
    else{
      this.openSnackBar("Close date is behind open date.","");
    }
  }
}
