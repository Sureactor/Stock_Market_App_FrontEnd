import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {NavigationExtras} from  '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  user(){
      this.route.navigateByUrl('userlogin');
  }

  admin(){
      this.route.navigateByUrl('adminlogin');
  }

}
