import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/Services/LocationService/locations.service';
import { Locations } from '../../Model/Locations';

@Component({
  selector: 'app-list-location',
  templateUrl: './list-location.component.html',
  styleUrls: ['./list-location.component.css']
})
export class ListLocationComponent implements OnInit {

  locations :Locations [] = [];
  constructor(private LocationsService : LocationService) { }

  ngOnInit(): void {
this.LocationsService.getAllLocations()
.subscribe({
  next:(locations) => {
   
    this.locations = locations;
    console.log(locations);
  },
  error : (response) =>{
    console.log(response);
  }})
}}
