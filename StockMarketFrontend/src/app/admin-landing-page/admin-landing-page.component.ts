import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../Company';
import { ThrowStmt } from '@angular/compiler';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyServiceService } from '../company-service.service';

@Component({
  selector: 'app-admin-landing-page',
  templateUrl: './admin-landing-page.component.html',
  styleUrls: ['./admin-landing-page.component.css']
})
export class AdminLandingPageComponent implements OnInit {

  company:Array<Company>;
  service:CompanyServiceService;
  constructor(private http:HttpClient,private router:Router,private activatedRoute:ActivatedRoute,service:CompanyServiceService) { 
    this.http = http;
    this.router = router;
    this.activatedRoute=activatedRoute;
  }

  ngOnInit(): void {
  }

  getAllCompany(){
    this.router.navigateByUrl('/admin/companies');
  }
      
  }

  


