import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from 'src/app/Componant/Model/City.Model';
import { CitiesService } from 'src/app/Services/City Service/cities.service';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {

  

    cityDetails : City ={
      id:0,
      name:'',
      countryRefId: 0
    };
    constructor(private route:ActivatedRoute, private cityService:CitiesService,private router:Router) { }
  
    ngOnInit(): void {
      this.route.paramMap.subscribe({
        next:(params)=>{
         const id= params.get('id');
        console.log("your id" + id);
         if(id)
         {
          this.cityService.getCity(id)
          .subscribe({
            next:(response)=>{
              console.log("your id" + id);

              this.cityDetails =response;
            }
          });
         }
        }
      })
    }
  
   UpdateCity()
   {
    this.cityService.updateCity(this.cityDetails)
      .subscribe({
        next:(response)=>
        {
          console.log("errror");
          this.router.navigate(['city'])
        }
      });
   }
  
   deleteCity(id:number)
   {
    this.cityService.deleteCity(id)
    .subscribe({
      next:(response)=>{
        alert("City Deleted Successfully");
        this.router.navigate(['city']);
      }
    })
   }
  
  }

