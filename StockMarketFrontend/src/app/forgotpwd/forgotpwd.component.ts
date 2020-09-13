import { Component, OnInit } from '@angular/core';
import {usermodel} from "src/app/usermodel";
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { FormGroup, FormControl } from '@angular/forms';
import { NgForm }   from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forgotpwd',
  templateUrl: './forgotpwd.component.html',
  styleUrls: ['./forgotpwd.component.css']
})
export class ForgotpwdComponent implements OnInit {

  user = new usermodel();
  fetch: any;
  message=null;
  flag= false;
  passwordflag=false;
  emailflag=false;
  constructor(private http:HttpClient,private route: ActivatedRoute, private router: Router,) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    //console.log(this.admin);
    this.fetch=this.http.post("http://localhost:8080/user/forgotpassword",this.user)
 .subscribe((res:any)=>{
   if(res==true)
   {
     this.message="Check you email id for OTP";
     this.flag=true;
     this.emailflag=false;
   }
   else{
    this.message="Email id not registered";
   } 
  }
  )
}

onClickMe()
{
  this.fetch=this.http.post("http://localhost:8080/user/gettoken",this.user)
  .subscribe((res:any)=>{
    if(res==true)
    {
      this.message="Correct otp";
     // this.router.navigate(['/userupdatepwd']);
     this.passwordflag=true;
     this.flag=false;
   }
    else{
     this.message="incorrect otp";
    } 
   }
   ) 
}


onClickUpdate()
{
  console.log("hellother");
  if(this.user.password==this.user.updated)
  {
    this.fetch=this.http.post("http://localhost:8080/user/forgot",this.user)
    .subscribe((res:any)=>{
      if(res==true)
      {
        this.message="Password updated";
       this.router.navigate(['/userlogin']);
     }
      else{
       this.message="password not updated ";
      } 
     }
     ) 
  }
  else
        this.message="Passwords do not match";
}
}
