import { Component, OnInit } from '@angular/core';
import { Company } from '../Company';
import { Router, ActivatedRoute } from '@angular/router';
import { IposerviceService } from '../iposervice.service';
import { HttpClient } from '@angular/common/http';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-update-ipo',
  templateUrl: './update-ipo.component.html',
  styleUrls: ['./update-ipo.component.css']
})
export class UpdateIPOComponent implements OnInit {
  companyName:string[];
  companyId:number[];
  company:Company[];
  val:number;
  t:number;
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  constructor(private route:Router,private activatedRoute:ActivatedRoute,private service:IposerviceService,private http:HttpClient) {
      this.t=31;
   }

   changer(value){
     console.log(value);
     var s = value.value.split(" --> ");
     console.log(s);
     this.t = +s[1];
     console.log(this.t);
     this.val = this.t;
     this.service.selectedCompany = this.val;
   }

  ngOnInit(): void {
    
    this.companyName = this.activatedRoute.snapshot.data['co']
    console.log(this.companyName[0].split(" --> ")[1]);
    this.val = +this.companyName[0].split(" --> ")[1];
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  addIpoDetails(){
   
    console.log("servie ++++++++");
    console.log(this.service.selectedCompany);
    this.route.navigate(['../updateIPO/addIPO'],{relativeTo: this.activatedRoute})
  }

  showIpoDetails(){
    this.route.navigate(['../updateIPO/update'],{relativeTo: this.activatedRoute})
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.companyName.filter(option => option.toLowerCase().indexOf(filterValue)===0);
  }

}
