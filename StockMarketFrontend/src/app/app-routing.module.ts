import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';
import { ManageCompaniesComponent } from './manage-companies/manage-companies.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';
import { CompanyServiceService } from './company-service.service';
import { CompareCompanyComponent } from './compare-company/compare-company.component';
import { NavComponent } from './nav/nav.component';
import { ViewCompanyComponent } from './view-company/view-company.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { ImportChartComponent } from './import-chart/import-chart.component';
import { UpdateIPOComponent } from './update-ipo/update-ipo.component';
import { HomeComponent } from './home/home.component';
import { CompanyNameService } from './company-name.service';
import { ShowIPOComponent } from './show-ipo/show-ipo.component';
import { AddIpoDetailsComponent } from './add-ipo-details/add-ipo-details.component';
import { EditIPOComponent } from './edit-ipo/edit-ipo.component';
import { IpoCompanyService} from './ipo-company.service';
import { EditSpecificIpoComponent } from './edit-specific-ipo/edit-specific-ipo.component';
import { AddStockExchangeComponent } from './add-stock-exchange/add-stock-exchange.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewStockExchangeComponent } from './view-stock-exchange/view-stock-exchange.component';
import { StockExchangeComponent } from './stock-exchange/stock-exchange.component';
import { SuccessComponent } from './success/success.component'
import { ViewipoComponent } from './viewipo/viewipo.component';
import { SectorchartComponent } from './sectorchart/sectorchart.component';
import { ViewchartComponent } from './viewchart/viewchart.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
// { path: '', redirectTo: '/home', pathMatch:'full' },
const routes: Routes = [
{path:'home', component:HomeComponent},
{ path: '', redirectTo: '/home', pathMatch:'full' },
{path:'adminlogin', component:AdminloginComponent},
{path:'userlogin', component:UserloginComponent},
{path:'usersignup', component:UsersignupComponent},
  {path:'admin', component:AdminLandingPageComponent,
  children:[
    {path:'companies', component:ManageCompaniesComponent, resolve:{comp:CompanyServiceService}},
    {path:'editCompany',component:EditCompanyComponent},
    {path:'addCompany',component:AddCompanyComponent},
    {path:'viewCompany', component:ViewCompanyComponent},
    {path:'companies/delete',component:DialogBoxComponent},
    {path:'import',component:ImportChartComponent},
    {path:'updateIPO',component:UpdateIPOComponent,resolve:{co:CompanyNameService}},
    {path:'updateIPO/addIPO',component:AddIpoDetailsComponent},
    {path:'updateIPO/update',component:EditIPOComponent,resolve:{c:IpoCompanyService}},
    {path:'updateIPO/update/updateSpecific',component:EditSpecificIpoComponent},
    {path:'updateIPO/update/showIpo',component:ShowIPOComponent},
    { path:'stockexchange', component: StockExchangeComponent },
    { path:'success', component: SuccessComponent },
  { path: 'stockexchange/addStockExchange', component: AddStockExchangeComponent },
  { path: 'stockexchange/viewStockExchange', component: ViewStockExchangeComponent }
  ]
},



{path:'user',component:UserLandingPageComponent,
children:[
  {path:'IPO',component:UpdateIPOComponent,resolve:{co:CompanyNameService}},
  {path:'IPO/showIPO',component:ShowIPOComponent},
  // {path: 'company/comparechart',component: ViewchartComponent},
  {path: 'company/comparechart',component: ViewchartComponent},
  {path: 'company/comparesector',component: SectorchartComponent},
  {path: 'viewIpo',component: ViewipoComponent}
]
},
{path:'user/compareCompanies',component:CompareCompanyComponent,resolve:{com:CompanyServiceService}}
// {path:'user/compareCompanies/compare',component:CompanyChartComponent},
// { path: '**', component: PageNotFoundComponent }
] 



// children:[];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
