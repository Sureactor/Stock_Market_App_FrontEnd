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
    this.router.navigate(['IPO'],{relativeTo: this.activatedRoute})
  }
  

}
