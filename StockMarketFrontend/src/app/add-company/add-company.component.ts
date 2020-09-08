import { Component, OnInit } from '@angular/core';
import { Company } from '../Company';
import { CompanyServiceService } from '../company-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
  is:false;
  company:Company;
  isShow:boolean;
  constructor(private service:CompanyServiceService,private route:Router,private activatedRoute:ActivatedRoute) {
    this.company = new Company();
   }

  ngOnInit(): void {
  }

  addEntry(){
    let obs = this.service.manageCompany("http://localhost:8080/admin/company/add","POST",this.company);
    console.log(this.company.ceo);
    obs.subscribe((res:Response)=>{
      this.service.flag=1;
      this.service.addedCompany = this.company;
      console.log("added");
      console.log(this.company);
      this.isShow = true;
      this.route.navigate(['companies/viewCompany'],{relativeTo: this.activatedRoute});
    });
  }

}
