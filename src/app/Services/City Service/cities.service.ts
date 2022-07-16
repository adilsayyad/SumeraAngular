import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from 'src/app/Componant/Model/City.Model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  baseApiUrl:string = environment.baseApiUrl;

  constructor(private http:HttpClient) { }

  getAllCities():Observable<City[]>{
return this.http.get<City[]>(this.baseApiUrl + '/api/Cities')
  }

   addCity(addCityRequest : City) :Observable<City>{

   return this.http.post<City>(this.baseApiUrl + '/api/Cities',addCityRequest);
   }
  getCity(id :string) :Observable<City>{

 return this.http.get<City>(this.baseApiUrl + '/api/Cities/'+id);
 }
 updateCity( updateCityRequest:City) :Observable<City>{

  return this.http.put<City>(this.baseApiUrl+'/api/Cities/',updateCityRequest);
  }

  deleteCity(id : number) :Observable<City>{

  return this.http.delete<City>(this.baseApiUrl + '/api/Cities/'+id);
  }
  

}
