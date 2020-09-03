import { Component, OnInit, Input } from '@angular/core';
import { Company } from '../Company';
import { CompanyServiceService } from '../company-service.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-manage-companies',
  templateUrl: './manage-companies.component.html',
  styleUrls: ['./manage-companies.component.css']
})
export class ManageCompaniesComponent implements OnInit {
  company:Array<Company>;
  re:any;
  constructor(private service:CompanyServiceService,private activatedRoute:ActivatedRoute,private route:Router) {
      // this.route.data.map(data=>data.comp.json()).subscribe(res)=>{
      //   console.log(res);
      // this.re = this.service.manageCompany("http://localhost:8081/user/company/getAll");
      // this.re.subscribe((res:Response)=> {
      //   let st = JSON.stringify(res);
      //   this.company = <Company[]> JSON.parse(st);
      //   console.log(this.company);
      // })
      console.log(this.company);
      }

      ngOnInit(){
        this.company = this.activatedRoute.snapshot.data['comp'];
        console.log(this.company);
        this.service.company = this.company;
      }

      editCompany(index:number){
        this.service.currentIndex = index;
        console.log(index);
        this.route.navigateByUrl('admin/companies/editCompany')
      }

      deleteCompany(index:number){
          console.log("company ");
          console.log(this.company[0].companyId);
          console.log(index);
          // let ob = this.company[]
          let id = this.company[index].companyId;
          let obs = this.service.manageCompany("http://localhost:8080/admin/company/delete/"+id,"DELETE",index);
          obs.subscribe((res:Response)=>{
            this.company.splice(index,1);
          })

      }

      addCompany(){
        this.route.navigateByUrl("admin/companies/addCompany");
      }
   }

  




