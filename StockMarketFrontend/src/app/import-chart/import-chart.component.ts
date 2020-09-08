import { Component, OnInit } from '@angular/core';
import { CompanyServiceService } from '../company-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-import-chart',
  templateUrl: './import-chart.component.html',
  styleUrls: ['./import-chart.component.css']
})
export class ImportChartComponent implements OnInit {
  table:Array<string>=["COMPANY","STOCK"];
  file:File;
  ta:number;
  files:FileList;
  constructor(private service:CompanyServiceService,private route:Router,private activatedRoute:ActivatedRoute,private http:HttpClient,private _snackBar: MatSnackBar) { 
      this.ta=0;
      
  }

  ngOnInit(): void {
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  uploadFiles(){
    
    var fd = new FormData();
    fd.append("File", this.files.item(0));
    fd.append("Table",this.table[this.ta]);

    let obs = {
      "File": this.file,
      "Table":this.table[this.ta]
    }
    
    console.log(fd.get("File"));
    console.log(fd.get("Table"));
    
    let ob = this.service.manageCompany("http://localhost:8080/admin/company/addExcel","POST",fd);
    ob.subscribe((res:Response)=>{
      this.openSnackBar(this.files.item(0).name,"Added");
        this.route.navigate(['../'],{relativeTo: this.activatedRoute})
    },(err)=>{
      if(err == "attribute error")
        this.openSnackBar("Error Ocuured : Mismatch in attribute","The file ");
      else if(err == "company id")
        this.openSnackBar("Error Ocuured : trying to relate with an unknwn company ID","The file ");
    });
  }

  upload(files:FileList){
    this.files = files;}
    
  

  func(value){
    this.ta = value;
  }

}
