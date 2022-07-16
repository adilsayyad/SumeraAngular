import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Airline } from 'src/app/Componant/Model/Airline';
import { City } from 'src/app/Componant/Model/City.Model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AirlineService {


  baseApiUrl:string = environment.baseApiUrl;

  constructor(private http:HttpClient) { }

  getAllAirlines():Observable<Airline[]>{
return this.http.get<Airline[]>(this.baseApiUrl + '/api/Airlines')


  }
  addAirline(addAirlineRequest : Airline) :Observable<Airline>{

    return this.http.post<Airline>(this.baseApiUrl + '/api/Airlines',addAirlineRequest);
    }
  //  getAirline(id : string) :Observable<Airline>{
 
  // return this.http.get<Airline>(this.baseApiUrl + '/api/Airlines'+id);
  // }
  getAllDropDown():Observable<City[]>{
    return this.http.get<City[]>(this.baseApiUrl + '/api/Dropdowns')
    
    
      }

}
