import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfterloginComponent } from './Componant/Afterlogin/afterlogin/afterlogin.component';
import { AddAirlineComponent } from './Componant/Airlines/Add-Airline/add-airline/add-airline.component';
import { AirlineListComponent } from './Componant/Airlines/Airline-List/airline-list/airline-list.component';
import { AddCityComponent } from './Componant/CITYI/Add-City/add-city.component';

import { CityListComponent } from './Componant/CITYI/City List/city-list.component';
import { EditListComponent } from './Componant/CITYI/Edit-List/edit-list/edit-list.component';
import { AddCountryComponent } from './Componant/COUNTRY/Country Add/add-country/add-country.component';
import { CountryListComponent } from './Componant/COUNTRY/country-list/country-list.component';
import { EditCountryComponent } from './Componant/COUNTRY/Edit-Country/edit-country/edit-country.component';
import { HolidayComponent } from './Componant/Holidays/holiday/holiday.component';
import { PackageComponent } from './Componant/Holidays/package/package/package.component';
import { ListLocationComponent } from './Componant/location/list-location/list-location.component';


import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  }
  ,
  {
    path:'',
    component:CountryListComponent
  }
  ,
  {
    path:'countries',
    component:CountryListComponent
  }
  ,
  {
    path:'countries-add',
    component:AddCountryComponent
  },
  {
    path:'countries/edit/:id',
    component:EditCountryComponent
  },


  {
    path:'city',
    component:CityListComponent
  },
  {
    path:'cities-add',
    component:AddCityComponent
  },
    {
    path:'city/edit/:id',
    component:EditListComponent
  },
  {
    path:'airlines',
    component:AirlineListComponent
  },
  {
    path:'airlines-add',
    component:AddAirlineComponent
  },
  {
    path:'afterlogin',
    component:AfterloginComponent
  },
  {
    path:'holiday',
    component:HolidayComponent
  },
  {
    path:'Package',
    component:PackageComponent
  },
  {
    path:'location',
    component:ListLocationComponent
  }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
