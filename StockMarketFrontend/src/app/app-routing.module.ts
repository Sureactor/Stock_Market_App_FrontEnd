import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';
import { ManageCompaniesComponent } from './manage-companies/manage-companies.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { CompanyServiceService } from './company-service.service';

const routes: Routes = [{path:'admin', component:AdminLandingPageComponent},
{path:'admin/companies', component:ManageCompaniesComponent, resolve:{comp:CompanyServiceService}},
{path:'admin/companies/editCompany',component:EditCompanyComponent}] 
// children:[];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
