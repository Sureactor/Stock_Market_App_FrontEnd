import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../Company';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyServiceService } from '../company-service.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-admin-landing-page',
  templateUrl: './admin-landing-page.component.html',
  styleUrls: ['./admin-landing-page.component.css']
})
export class AdminLandingPageComponent implements OnInit {

  company:Array<Company>;
  service:CompanyServiceService;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  constructor(private breakpointObserver: BreakpointObserver,private http:HttpClient,private router:Router,private activatedRoute:ActivatedRoute,service:CompanyServiceService) { 
    this.http = http;
    this.router = router;
    this.activatedRoute=activatedRoute;
    
  }

  ngOnInit(): void {
  }
  import(){
    this.router.navigate(['import'],{relativeTo: this.activatedRoute});
  }
  getAllCompany(){
    this.router.navigate(['companies'],{relativeTo: this.activatedRoute});
  }

  updateIPO(){
    this.router.navigate(['updateIPO'],{relativeTo: this.activatedRoute});
  }
      
  }

  


