import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from 'src/app/Componant/Model/Country.Model';
import { ContriesService } from 'src/app/Services/CountryServices/contries.service';

@Component({
  selector: 'app-edit-country',
  templateUrl: './edit-country.component.html',
  styleUrls: ['./edit-country.component.css']
})
export class EditCountryComponent implements OnInit {

  countryDetails : Country ={
    id : 0,
    name : '',
    code : ''
   
  };
  constructor(private route:ActivatedRoute, private countryService:ContriesService,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
     const id = params.get('id');
      console.log("your id" + id);
       if(id)
       {
        this.countryService.getCountry(id)
        .subscribe({
          next:(response)=>{
            console.log("your id" + id);

            this.countryDetails =response;
          }
        });
       }
      }
    })
  }

 UpdateCountry()
 {
  this.countryService.updateCountry(this.countryDetails.id , this.countryDetails)
    .subscribe({
      next:(response)=>
      {
        console.log("errror" + response);

        this.router.navigate(['countries'])
      }
    });
 }

 deleteCountry(id:number)
 {
  this.countryService.deleteCountry(id)
  .subscribe({
    next:(response)=>{
      alert("Country Deleted Successfully");
      console.log(response)
      this.router.navigate(['countries']);
    }
  })
 }

}

