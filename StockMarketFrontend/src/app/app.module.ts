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

@NgModule({
  declarations: [
    AppComponent,
    AdminLandingPageComponent,
    ManageCompaniesComponent,
    EditCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CompanyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
