import { Component, OnInit } from '@angular/core';
import {usermodel} from "src/app/usermodel";
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { FormGroup, FormControl } from '@angular/forms';
import { NgForm }   from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  user = new usermodel();
  fetch: any;
  message=null;

  constructor(private http:HttpClient,private route: ActivatedRoute, private router: Router,) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    //console.log(this.admin);
    this.fetch=this.http.post("http://localhost:8080/user/login",this.user)
 .subscribe((res:any)=>{
   //console.log(res);
   if(res==true)
        this.router.navigate(['/user']);
   else 
   {
       this.router.navigate(['/userlogin']);
       this.message="Invalid Credentials";
 }
     }
   )
  }
}
