import { Component, OnInit } from '@angular/core';

import {usermodel} from "src/app/usermodel";
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { FormGroup, FormControl } from '@angular/forms';
import { NgForm }   from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})

export class UsersignupComponent implements OnInit {

  user = new usermodel();
  fetch: any;
  message=null;

  constructor(private http:HttpClient,private route: ActivatedRoute, private router: Router,) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    //console.log(this.admin);
    this.fetch=this.http.post("http://localhost:8081/user/signup",this.user)
 .subscribe((res:any)=>{
   //console.log(res);
   if(res==true)
        this.router.navigate(['/userlogin']);
   else 
   {
       this.router.navigate(['/usersignup']);
       this.message="Invalid Credentials";
 }
     }
   )
  }
}
