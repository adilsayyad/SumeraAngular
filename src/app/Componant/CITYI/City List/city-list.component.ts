import { Component, OnInit } from '@angular/core';
import { CitiesService } from 'src/app/Services/City Service/cities.service';
import { City } from 'src/app/Componant/Model/City.Model';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  cities :City [] = [];
  constructor(private citiesService : CitiesService) { }

  ngOnInit(): void {
this.citiesService.getAllCities()
.subscribe({
  next:(cities) => {
    console.log(cities);
    this.cities = cities;
  },
  error:(response) =>{
    console.log(response);
  }})
}}

