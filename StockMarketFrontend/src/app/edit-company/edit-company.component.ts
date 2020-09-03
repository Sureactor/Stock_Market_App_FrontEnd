import { Component, OnInit } from '@angular/core';
import { Company } from '../Company';
import { CompanyServiceService } from '../company-service.service';
import { CommaExpr } from '@angular/compiler';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit {
  company:Company;
  tempCompany:Company;
  isValid:boolean;
  constructor(private service:CompanyServiceService) { 
    
    this.company = this.service.company[this.service.currentIndex];
    this.tempCompany = new Company();
    Object.assign(this.tempCompany,this.company); 
    console.log("Company "+this.company);
  }

  ngOnInit(): void {
    
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
    let obs = this.service.manageCompany("http://localhost:8081/admin/company/update","PUT",this.company);
    obs.subscribe((res:Response)=>{
      console.log("completed");
    })
  }

}
