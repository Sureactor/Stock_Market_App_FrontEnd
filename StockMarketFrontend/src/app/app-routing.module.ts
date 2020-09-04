import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';
import { ManageCompaniesComponent } from './manage-companies/manage-companies.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { CompanyServiceService } from './company-service.service';
import { AddStockExchangeComponent } from './add-stock-exchange/add-stock-exchange.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ViewStockExchangeComponent } from './view-stock-exchange/view-stock-exchange.component';
import { StockExchangeComponent } from './stock-exchange/stock-exchange.component';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminLandingPageComponent },
  { path: 'user', component: UserLandingPageComponent},
  { path: '', redirectTo: '/home', pathMatch:'full' },
  { path: 'admin/companies', component:ManageCompaniesComponent, resolve:{comp:CompanyServiceService}},
  { path: 'admin/companies/editCompany',component:EditCompanyComponent},
  { path: 'admin/companies/addCompany', component: AddCompanyComponent },
  { path: 'admin/stockexchange', component: StockExchangeComponent },
  { path: 'admin/stockexchange/addStockExchange', component: AddStockExchangeComponent },
  { path: 'admin/stockexchange/viewStockExchange', component: ViewStockExchangeComponent },
  { path: '**', component: PageNotFoundComponent }
] 
// children:[];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
