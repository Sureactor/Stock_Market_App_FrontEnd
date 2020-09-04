import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';
import { ManageCompaniesComponent } from './manage-companies/manage-companies.component';
import { CompanyServiceService } from './company-service.service';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddCompanyComponent } from './add-company/add-company.component';
import { AddStockExchangeComponent } from './add-stock-exchange/add-stock-exchange.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ViewStockExchangeComponent } from './view-stock-exchange/view-stock-exchange.component';
import { StockExchangeComponent } from './stock-exchange/stock-exchange.component';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLandingPageComponent,
    ManageCompaniesComponent,
    EditCompanyComponent,
    AddCompanyComponent,
    AddStockExchangeComponent,
    PageNotFoundComponent,
    HomeComponent,
    ViewStockExchangeComponent,
    StockExchangeComponent,
    UserLandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [CompanyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
