import { Component, OnInit } from '@angular/core';
import { Dropdownmonth } from '../Dropdownmonth';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.css']
})
export class HolidayComponent implements OnInit {

  dropdownmonth : Dropdownmonth[] | undefined; 


   




  constructor() { }

  ngOnInit() {
    this.dropdownmonth = [
      {Month : ' Month of Travel (Optional)'},     
      {Month : ' July 2022'},
      {Month : ' August 2022'},
      {Month : ' September 2022'},
      {Month : ' October 2022'},
      {Month : ' November 2022'},
      {Month : ' December 2022'}
      
    ]

    }
  }


