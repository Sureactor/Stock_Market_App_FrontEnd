import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';
import { ManageCompaniesComponent } from './manage-companies/manage-companies.component';
import { CompanyServiceService } from './company-service.service';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { CompanyNameService } from './company-name.service';
import { CompareCompanyComponent } from './compare-company/compare-company.component';

import { CompanyChartComponent } from './company-chart/company-chart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { ViewCompanyComponent } from './view-company/view-company.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { ImportChartComponent } from './import-chart/import-chart.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SliderModule } from 'angular-image-slider';
import { UpdateIPOComponent } from './update-ipo/update-ipo.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ShowIPOComponent } from './show-ipo/show-ipo.component';
import { AddIpoDetailsComponent } from './add-ipo-details/add-ipo-details.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { IposerviceService} from './iposervice.service';
import { MatNativeDateModule } from "@angular/material/core"
import {DateAdapter, MAT_DATE_FORMATS} from '@angular/material/core';
import { EditIPOComponent } from './edit-ipo/edit-ipo.component';
import { AddStockExchangeComponent } from './add-stock-exchange/add-stock-exchange.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ViewStockExchangeComponent } from './view-stock-exchange/view-stock-exchange.component';
import { StockExchangeComponent } from './stock-exchange/stock-exchange.component';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';
import { SuccessComponent } from './success/success.component';
import { ViewipoComponent } from './viewipo/viewipo.component';
import { AddipoComponent } from './addipo/addipo.component';
import { ViewchartComponent } from './viewchart/viewchart.component';
import { SectorchartComponent } from './sectorchart/sectorchart.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import {MatTooltipModule} from '@angular/material/tooltip';

import { IpoCompanyService} from './ipo-company.service';
import { EditSpecificIpoComponent } from './edit-specific-ipo/edit-specific-ipo.component';
declare var is:boolean;
const modules = [
  MatButtonModule,
  MatFormFieldModule,
];
@NgModule({
  declarations: [
    AppComponent,
    AdminLandingPageComponent,
    ManageCompaniesComponent,
    EditCompanyComponent,
    AddCompanyComponent,
    UserLandingPageComponent,
    CompareCompanyComponent,
    CompanyChartComponent,
    NavComponent,
    ViewCompanyComponent,
    DialogBoxComponent,
    ImportChartComponent,
    UpdateIPOComponent,
    HomeComponent,
    ShowIPOComponent,
    AddIpoDetailsComponent,
    EditIPOComponent,
    EditSpecificIpoComponent,
    AddStockExchangeComponent,
    PageNotFoundComponent,
    HomeComponent,
    ViewStockExchangeComponent,
    StockExchangeComponent,
    UserLandingPageComponent,
    SuccessComponent,
    ViewipoComponent,
    AddipoComponent,
    ViewchartComponent,
    SectorchartComponent,
    UserloginComponent,
    AdminloginComponent,
    UsersignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    NgbModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatSnackBarModule,
    SliderModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatDatepickerModule ,
    MatNativeDateModule ,
    MatTooltipModule
  ],
  exports:[MatFormFieldModule,MatInputModule,MatCardModule,MatDialogModule,MatSnackBarModule,SliderModule,MatAutocompleteModule,MatDatepickerModule,MatNativeDateModule,MatTooltipModule],
  providers: [CompanyServiceService,CompanyNameService,IposerviceService,IpoCompanyService],
  bootstrap: [AppComponent]
})
export class AppModule {
  is=false;
 }
