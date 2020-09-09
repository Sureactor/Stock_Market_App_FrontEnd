import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { CompanyServiceService } from '../company-service.service';

@Component({
  selector: 'app-user-landing-page',
  templateUrl: './user-landing-page.component.html',
  styleUrls: ['./user-landing-page.component.css']
})
export class UserLandingPageComponent implements OnInit {
  is:false;
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
  IPO(){
    this.router.navigate(['viewIpo'],{relativeTo: this.activatedRoute});
  }
  
  compareCompany(){
    console.log("here");
    this.router.navigate(['company/comparechart'],{relativeTo: this.activatedRoute});
  }
  compareSector(){
    console.log("here");
    this.router.navigate(['company/comparesector'],{relativeTo: this.activatedRoute});
  }

}
