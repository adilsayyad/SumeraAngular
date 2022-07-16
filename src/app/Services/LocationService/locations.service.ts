import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';
import { Locations } from 'src/app/Componant/Model/Locations';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  baseApiUrl:string = environment.baseApiUrl;

  constructor(private http:HttpClient) { } 

  getAllLocations():Observable<Locations[]>{
return this.http.get<Locations[]>(this.baseApiUrl + '/api/Locations')
  }

  addLocations(addLocationsRequest : Locations) :Observable<Locations>{
console.log("come");
    return this.http.post<Locations>(this.baseApiUrl +'/api/Locations',addLocationsRequest);
  }
  getLocations(id : string) :Observable<Locations>{

    return this.http.get<Locations>(this.baseApiUrl +'/api/Locations/'+id);
  }

  updateLocations(id : number, updateLocationsRequest:Locations) :Observable<Locations>{

    return this.http.put<Locations>(this.baseApiUrl+'/api/Locations/Update',updateLocationsRequest);
    }
  
  deleteLocations(id : number) :Observable<Locations>{ 
    return this.http.delete<Locations>(this.baseApiUrl +'/api/Locations/'+id);
    }
    
}
