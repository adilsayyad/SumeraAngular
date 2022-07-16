import { Component, OnInit } from '@angular/core';
import { Country } from '../../Model/Country.Model';
import { ContriesService } from '../../../Services/CountryServices/contries.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
countries :Country [] = [];
  constructor(private ContriesService : ContriesService) { }

  ngOnInit(): void {
this.ContriesService.getAllCountries()
.subscribe({
  next:(countries) => {
    console.log(countries);
    this.countries = countries;
  },
  error : (response) =>{
    console.log(response);
  }})
}}
