import { Component, OnInit } from '@angular/core';
import { Company } from '../Company';
import { CompanyServiceService } from '../company-service.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  company:Company;
  isShow:boolean;
  constructor(private service:CompanyServiceService) {
    this.company = new Company();
   }

  ngOnInit(): void {
  }

  addEntry(){
    let obs = this.service.manageCompany("http://localhost:8080/admin/company/add","POST",this.company);
    console.log(this.company.ceo);
    obs.subscribe((res:Response)=>{
      console.log("added");
      this.isShow = true;
    });
  }

}
