import { Component, OnInit } from '@angular/core';
import { CompanyServiceService } from '../company-service.service';
import { IpoCompanyService} from '../ipo-company.service';
import { IPO } from '../IPO';
import { Router, ActivatedRoute } from '@angular/router';
import { IposerviceService} from '../iposervice.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-specific-ipo',
  templateUrl: './edit-specific-ipo.component.html',
  styleUrls: ['./edit-specific-ipo.component.css']
})
export class EditSpecificIpoComponent implements OnInit {
  ipo:IPO;
  tempIpo:IPO;
  isValid:boolean=false;
  isOpenDateValid:boolean;
  val:number;
  constructor(private service:IpoCompanyService,private service1:CompanyServiceService,private route:Router,private activatedRoute:ActivatedRoute,private service2:IposerviceService,private _snackBar: MatSnackBar) { 
    this.ipo = new IPO();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit(): void {
    
    this.ipo = this.service.ipos[this.service.currentIpo];
    this.tempIpo = new IPO();
    Object.assign(this.tempIpo,this.ipo);
    this.service2.updateColor.fill(false);
    var date = new Date();
    let st = this.service2.formatDate(date.toDateString());
    if(this.service2.checkOpenDate(this.ipo.openTime,st)){
      this.isOpenDateValid = true;
    }
    console.log(date);
  }

  isIpoId(value){
    if(this.tempIpo.ipoId != this.ipo.ipoId){
      if(this.isValid!=true){
       this.isValid=true;
       this.val=0;
      }
       this.service2.updateColor[0] = true;
    }
    else{
      if(this.isValid==true && this.val==0){
        this.isValid = false;
      }
      this.service1.updateColor[0] = false;
    }
  }
  isOpenTime(value){
    if(this.tempIpo.openTime != this.ipo.openTime){
      if(this.isValid!=true){
       this.isValid=true;
       this.val=1;
      }
       this.service2.updateColor[1] = true;
    }
    else{
      if(this.isValid==true && this.val==1){
        this.isValid = false;
      }
      this.service1.updateColor[1] = false;
    }
  }
  isCloseTime(value){
    if(this.tempIpo.closeTime != this.ipo.closeTime){
      if(this.isValid!=true){
       this.isValid=true;
       this.val=2;
      }
       this.service2.updateColor[2] = true;
    }
    else{
      if(this.isValid==true && this.val==2){
        this.isValid = false;
      }
      this.service1.updateColor[2] = false;
    }
  }
  isRemarks(value){
    if(this.tempIpo.remarks != this.ipo.remarks){
      if(this.isValid!=true){
       this.isValid=true;
       this.val=3;
      }
       this.service2.updateColor[3] = true;
    }
    else{
      if(this.isValid==true && this.val==3){
        this.isValid = false;
      }
      this.service1.updateColor[3] = false;
    }
  }
  isSharePrice(value){
    if(this.tempIpo.sharePrice != this.ipo.sharePrice){
      if(this.isValid!=true){
       this.isValid=true;
       this.val=4;
      }
       this.service2.updateColor[4] = true;
    }
    else{
      if(this.isValid==true && this.val==4){
        this.isValid = false;
      }
      this.service1.updateColor[4] = false;
    }
  }
  isTotalShares(value){
    if(this.tempIpo.totalShares != this.ipo.totalShares){
      if(this.isValid!=true){
       this.isValid=true;
       this.val=5;
      }
       this.service2.updateColor[5] = true;
    }
    else{
      if(this.isValid==true && this.val==5){
        this.isValid = false;
      }
      this.service1.updateColor[5] = false;
    }
  }
  
  updateEntries(){
    this.service.updateIpo = this.ipo;
    if(this.isOpenDateValid && !this.service2.checkOpenDate(this.ipo.closeTime,this.ipo.openTime)){
      this.openSnackBar("Can't Update the IPO as it has already ended","");
    }
    else{
    let obs = this.service1.manageCompany("http://localhost:8080/admin/company/ipo/update","PUT",this.ipo);
    obs.subscribe((res:Response)=>{
      this.service2.flag=2;
      this.route.navigate(['../showIpo'],{relativeTo: this.activatedRoute})
    })}
  }



}
