import { Component, OnInit } from '@angular/core';
import {adminmodel} from "src/app/adminmodel";
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { FormGroup, FormControl } from '@angular/forms';
import { NgForm }   from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  admin = new adminmodel();
  fetch: any;
  message=null;

  constructor(private http:HttpClient,private route: ActivatedRoute, private router: Router,) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    //console.log(this.admin);
    this.fetch=this.http.post("http://localhost:8080/admin/login",this.admin)
 .subscribe((res:any)=>{
   //console.log(res);
   if(res==true)
        this.router.navigate(['/admin']);
   else 
   {
       this.router.navigate(['/adminlogin']);
       this.message="Invalid Credentials";
 }
     }
   )
  }
}
