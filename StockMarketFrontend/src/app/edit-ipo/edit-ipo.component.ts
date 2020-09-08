import { Component, OnInit } from '@angular/core';
import {IPO} from '../IPO';
import { Router, ActivatedRoute } from '@angular/router';
import { IpoCompanyService} from '../ipo-company.service';
import { IposerviceService} from '../iposervice.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-ipo',
  templateUrl: './edit-ipo.component.html',
  styleUrls: ['./edit-ipo.component.css']
})
export class EditIPOComponent implements OnInit {
  ipo:IPO[];
  constructor(private route:Router,private activatedRoute:ActivatedRoute,private service:IpoCompanyService,private service1:IposerviceService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.ipo= this.activatedRoute.snapshot.data['c'];
    this.service.ipos = this.ipo;
    console.log(this.ipo);
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  update(value){
    let date = new Date();
    var date1= this.service1.formatDate(date.toDateString());
    if(this.service1.checkOpenDate(this.ipo[value].closeTime,date1)){
      this.service.currentIpo = value;
      this.route.navigate(['../update/updateSpecific'],{relativeTo: this.activatedRoute})
    }
    else{
      this.openSnackBar("Can't Update the IPO as it has already ended","");
    }
  }

}
