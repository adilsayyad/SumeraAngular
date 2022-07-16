import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../../app-routing.module';
import { AppComponent } from '../../app.component';
import { CountryListComponent } from '../COUNTRY/country-list/country-list.component';

import { FormsModule } from '@angular/forms';
import { CityListComponent } from '../CITYI/City List/city-list.component';
import { AddCityComponent } from '../CITYI/Add-City/add-city.component';
import { HomeComponent } from '../../home/home.component';
import { AddCountryComponent } from '../COUNTRY/Country Add/add-country/add-country.component';
import { AirlineListComponent } from '../Airlines/Airline-List/airline-list/airline-list.component';
import { AddAirlineComponent } from '../Airlines/Add-Airline/add-airline/add-airline.component';
import { AfterloginComponent } from '../Afterlogin/afterlogin/afterlogin.component';
import { EditListComponent } from '../CITYI/Edit-List/edit-list/edit-list.component';
import { EditCountryComponent } from '../COUNTRY/Edit-Country/edit-country/edit-country.component';
import { HolidayComponent } from '../Holidays/holiday/holiday.component';
import { PackageComponent } from '../Holidays/package/package/package.component';



import { AddLocationComponent } from '../location/add-location/add-location.component';
import { EditLocationComponent } from '../location/edit-location/edit-location.component';
import { ListLocationComponent } from '../location/list-location/list-location.component';
import { AddHolidayBookingComponent } from './add-holiday-booking/add-holiday-booking.component';
import { EditHolidayBookingComponent } from './edit-holiday-booking/edit-holiday-booking.component';
import { ListHolidayBookingComponent } from './list-holiday-booking/list-holiday-booking.component';






@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    AddCountryComponent,
    CityListComponent,
    AddCityComponent,
    HomeComponent,
    AirlineListComponent,
    AddAirlineComponent,
    AfterloginComponent,
    EditListComponent,
    EditCountryComponent,
    HolidayComponent,
    PackageComponent,
    AddLocationComponent,
    EditLocationComponent,
    ListLocationComponent,
    ListHolidayBookingComponent,
    EditHolidayBookingComponent,
    AddHolidayBookingComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
