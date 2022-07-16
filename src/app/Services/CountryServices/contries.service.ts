import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Country } from '../../Componant/Model/Country.Model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContriesService {
  baseApiUrl:string = environment.baseApiUrl;

  constructor(private http:HttpClient) { } 

  getAllCountries():Observable<Country[]>{
return this.http.get<Country[]>(this.baseApiUrl + '/api/CountryDtoes')
  }

  addCountry(addCountryRequest : Country) :Observable<Country>{
console.log("come");
    return this.http.post<Country>(this.baseApiUrl +'/api/CountryDtoes',addCountryRequest);
  }
  getCountry(id : string) :Observable<Country>{

    return this.http.get<Country>(this.baseApiUrl +'/api/CountryDtoes/'+id);
  }

  updateCountry(id : number, updateCountryRequest:Country) :Observable<Country>{

    return this.http.put<Country>(this.baseApiUrl+'/api/CountryDtoes/Update',updateCountryRequest);
    }
  
  deleteCountry(id : number) :Observable<Country>{ 
    return this.http.delete<Country>(this.baseApiUrl +'/api/CountryDtoes/'+id);
    }
    
}
