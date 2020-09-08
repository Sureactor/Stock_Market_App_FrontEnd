import { Component, OnInit } from '@angular/core';
import { Company } from '../Company';
import { CompanyServiceService } from '../company-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit {
  company:Company;
  val:number;
  tempCompany:Company;
  isValid:boolean;
  constructor(private service:CompanyServiceService,private route:Router,private activatedRoute:ActivatedRoute) { 
    
    this.company = this.service.company[this.service.currentIndex];
    console.log(this.company);
    this.tempCompany = new Company();
    Object.assign(this.tempCompany,this.company); 
    console.log("Company "+this.company);
  }

  ngOnInit(): void {
    
  }

  isCompanyId(value){
    if(this.tempCompany.companyId != this.company.companyId){
      if(this.isValid!=true){
       this.isValid=true;
       this.val=0;
      }
       this.service.updateColor[0] = true;
    }
    else{
      if(this.isValid==true && this.val==0){
        this.isValid = false;
      }
      this.service.updateColor[0] = false;
    }
  }
  isCeo(value){
    if(this.tempCompany.ceo != this.company.ceo){
      if(this.isValid!=true){
       this.isValid=true;
       this.val=1;
      }
       this.service.updateColor[1] = true;
    }
    else{
      if(this.isValid==true && this.val==1){
        this.isValid = false;
      }
      this.service.updateColor[1] = false;
    }
  }
  isBrief(value){
    if(this.tempCompany.brief != this.company.brief){
      if(this.isValid!=true){
       this.isValid=true;
       this.val=2;
      }
       this.service.updateColor[2] = true;
    }
    else{
      if(this.isValid==true && this.val==2){
        this.isValid = false;
      }
      this.service.updateColor[2] = false;
    }
  }
  isCode(value){
    if(this.tempCompany.code != this.company.code){
      if(this.isValid!=true){
       this.isValid=true;
       this.val=3;
      }
       this.service.updateColor[3] = true;
    }
    else{
      if(this.isValid==true && this.val==3){
        this.isValid = false;
      }
      this.service.updateColor[3] = false;
    }
  }
  isName(value){
    if(this.tempCompany.name != this.company.name){
      if(this.isValid!=true){
       this.isValid=true;
       this.val=4;
      }
       this.service.updateColor[4] = true;
    }
    else{
      if(this.isValid==true && this.val==4){
        this.isValid = false;
      }
      this.service.updateColor[4] = false;
    }
  }
  isContactId(value){
    if(this.tempCompany.contactId != this.company.contactId){
      if(this.isValid!=true){
       this.isValid=true;
       this.val=5;
      }
       this.service.updateColor[5] = true;
    }
    else{
      if(this.isValid==true && this.val==5){
        this.isValid = false;
      }
      this.service.updateColor[5] = false;
    }
  }
  isSectorId(value){
    if(this.tempCompany.sectorId != this.company.sectorId){
      if(this.isValid!=true){
       this.isValid=true;
       this.val=6;
      }
       this.service.updateColor[6] = true;
    }
    else{
      if(this.isValid==true && this.val==6){
        this.isValid = false;
      }
      this.service.updateColor[6] = false;
    }
  }
  isStockExchangeId(value){
    if(this.tempCompany.stockExchangeId != this.company.stockExchangeId){
      if(this.isValid!=true){
       this.isValid=true;
       this.val=7;
      }
       this.service.updateColor[7] = true;
    }
    else{
      if(this.isValid==true && this.val==7){
        this.isValid = false;
      }
      this.service.updateColor[7] = false;
    }
  }
  isUpdated(value){
    if(JSON.stringify(this.tempCompany) === JSON.stringify(this.company))
      {
        this.isValid = false;
        console.log("false");
        console.log(JSON.stringify(this.tempCompany));
        console.log(JSON.stringify(this.company));
      }
      else{
      this.isValid = true;
      console.log(JSON.stringify(this.tempCompany));
        console.log(JSON.stringify(this.company));
      console.log("true");
      }
  }

  updateEntries(){
    this.service.updatedCompany = this.company;
    let obs = this.service.manageCompany("http://localhost:8080/admin/company/update","PUT",this.company);
    obs.subscribe((res:Response)=>{
      this.service.flag=2;
      this.route.navigate(['../viewCompany'],{relativeTo: this.activatedRoute})
    })
  }

}
