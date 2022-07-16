import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Airline } from 'src/app/Componant/Model/Airline';
import { AirlineService } from 'src/app/Services/Airline/airline.service';

@Component({
  selector: 'app-add-airline',
  templateUrl: './add-airline.component.html',
  styleUrls: ['./add-airline.component.css']
})
export class AddAirlineComponent implements OnInit {

  addAirlineRequest : Airline ={
    id:0,
    code : ' ',
    name:'',
    short_name:'',
    city_ref_id:0,
    pincode:'',
    logo:'',
    address1:'',
    address2:'',
    address3: '',
    telephone:'',
    telephone2:'',
    email:'',
    email2: ' ',
   
  }
  constructor(private airlineService : AirlineService , private router : Router) {

   }

  ngOnInit(): void {
  }
  addAirline () {
  console.log(this.addAirlineRequest);
  this.airlineService.addAirline(this.addAirlineRequest)
  .subscribe({
    next:(Airline) => {
      this.router.navigate(['airline']);
    }
  })
}
}


