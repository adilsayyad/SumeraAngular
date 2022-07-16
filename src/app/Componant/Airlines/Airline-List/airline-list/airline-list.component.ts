import { Component, OnInit } from '@angular/core';
import { Airline } from 'src/app/Componant/Model/Airline';
import { AirlineService } from 'src/app/Services/Airline/airline.service';

@Component({
  selector: 'app-airline-list',
  templateUrl: './airline-list.component.html',
  styleUrls: ['./airline-list.component.css']
})
export class AirlineListComponent implements OnInit {

  airlines :Airline [] = [];
  constructor(private airlinesService : AirlineService) { }

  ngOnInit(): void {
this.airlinesService.getAllAirlines()
.subscribe({
  next:(airlines) => {
    console.log(airlines);
    this.airlines = airlines;
  },
  error:(response) =>{
    console.log(response);
  }})
}}


