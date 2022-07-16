import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from 'src/app/Componant/Model/Country.Model';
import { ContriesService } from 'src/app/Services/CountryServices/contries.service';


@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit {

  addCountryRequest: Country = {
    id: 0,
    name:'',
    code: ''


  }
  constructor(private countryService : ContriesService , private router : Router) {

   }

  ngOnInit(): void {
  }
  addCountry(){
console.log(this.addCountryRequest);
this.countryService.addCountry(this.addCountryRequest)
.subscribe({
  next:(country) => {
  this.router.navigate(['countries']);
  }
})
  }

}
