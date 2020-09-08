import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';
import { Company } from '../Company';
import { CompanyServiceService } from '../company-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CdkTableModule} from '@angular/cdk/table';
import {DataSource} from '@angular/cdk/table';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import {MatDialogModule} from '@angular/material/dialog';


@Component({
  selector: 'app-manage-companies',
  templateUrl: './manage-companies.component.html',
  styleUrls: ['./manage-companies.component.css']
})
export class ManageCompaniesComponent implements OnInit {
  company:Array<Company>;
  re:any;
  temp:Array<Company>;
  displayedColumns:Array<string>;
  is:"<button  mat-mini-fab color='accent' aria-label=''><mat-icon>plus_one</mat-icon></button>"
  
  @Output() data: EventEmitter<any> = new EventEmitter<any>();
  constructor(private service:CompanyServiceService,private activatedRoute:ActivatedRoute,private route:Router/*private dialog:MatDialogModule*/) {
      
      this.displayedColumns = ['No.','companyId', 'name', 'contactId', 'sectorId','stockExchangeId','action'];
      console.log(this.company);
      }

     
      ngOnInit(){
        this.company = this.activatedRoute.snapshot.data['comp'];
        console.log(this.company);
        this.temp=this.company;
        this.service.company = this.company;
        this.data.emit(true);
      }

      editCompany(index:number){
        this.service.currentIndex = index;
        console.log(index);
        this.route.navigate(['../editCompany'],{relativeTo: this.activatedRoute})
      }

      changer(value){
        console.log("here");
      }
      // openDialog(): void {
      //   const dialogRef = this.dialog.open(DialogBoxComponent, {
      //     width: '250px',
      //   });
    
      //   dialogRef.afterClosed().subscribe(result => {
      //     console.log('The dialog was closed');
      //   });
      // }
    

      deleteCompany(index:number){
        //  this.openDialog();
          console.log("company ");
          console.log(this.company[0].companyId);
          console.log(index);
          // // let ob = this.company[]
          // let id = this.company[index].companyId;
          // let obs = this.service.manageCompany("http://localhost:8080/admin/company/delete/"+id,"DELETE",index);
          // obs.subscribe((res:Response)=>{
          //   this.company.splice(index,1);
          // })

      }

      addCompany(){
        this.route.navigate(['../addCompany'],{relativeTo: this.activatedRoute});
      }
   }
   