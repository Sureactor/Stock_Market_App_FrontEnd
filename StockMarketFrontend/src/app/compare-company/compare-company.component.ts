import { Component, OnInit } from '@angular/core';
import { Company } from '../Company';
import { CompanyServiceService } from '../company-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-compare-company',
  templateUrl: './compare-company.component.html',
  styleUrls: ['./compare-company.component.css']
})
export class CompareCompanyComponent implements OnInit {
  is:false;
  company:Array<Company>;
  isSame:boolean=false;

  value1:number;
  value2:number;
  constructor(private service:CompanyServiceService,private activatedRoute:ActivatedRoute,private route:Router) { 
    
  }

  ngOnInit(): void {
    this.company = this.activatedRoute.snapshot.data['com'];
        console.log(this.company);
        this.service.company = this.company;
        this.value1 = 21;
        this.value2= 22;
}

onValue2(value){
  this.value2=value;
}
onValue1(value){
    this.value1=value;
}

compare(){
  if(this.value1 === this.value2){
    this.isSame=true;
  }
  else{
    this.route.navigateByUrl('user/compareCompanies/compare');
  }
}
  

}
