import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from './Company';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-admin-landing-page',
  templateUrl: './admin-landing-page.component.html',
  styleUrls: ['./admin-landing-page.component.css']
})
export class AdminLandingPageComponent implements OnInit {

  company:Array<Company>;
  
  constructor(private http:HttpClient) { 
    this.http = http;
  }

  ngOnInit(): void {
  }

  manageCompany(){
    let obs = this.http.get("http://localhost:8081/user/company/getAll");
    obs.subscribe((res : Response) => {
      console.log(res);
      let st = JSON.stringify(res);
      this.company = <Company[]> JSON.parse(st);
      console.log(this.company);
    })
      
  }

}
