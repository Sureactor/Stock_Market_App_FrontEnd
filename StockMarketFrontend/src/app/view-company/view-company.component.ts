import { Component, OnInit } from '@angular/core';
import { Company } from '../Company';
import { CompanyServiceService } from '../company-service.service';
@Component({
  selector: 'app-view-company',
  templateUrl: './view-company.component.html',
  styleUrls: ['./view-company.component.css']
})
export class ViewCompanyComponent implements OnInit {
  company:Company;
  isValid:boolean[];
  constructor(private service:CompanyServiceService) { 
    if(this.service.flag == 1)
      this.company = this.service.addedCompany;
    else if(this.service.flag == 2) {
      this.company = this.service.updatedCompany;
      this.isValid = this.service.updateColor;
    }
  }

  ngOnInit(): void {
  }

}
