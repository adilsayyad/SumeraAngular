import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CitiesService } from 'src/app/Services/City Service/cities.service';
import { City } from '../../Model/City.Model';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {

  addCityRequest : City ={
    id : 0,
    name : ' ',
    countryRefId :0
   
  }
  constructor(private cityService : CitiesService , private router : Router) {

   }

  ngOnInit(): void {
  }
   addCity () {
  console.log(this.addCityRequest);
  this.cityService.addCity(this.addCityRequest)
  .subscribe({
    next:(city) => {
      this.router.navigate(['city']);
      alert("City Added Successfully");

    }
  })
}
}
