import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Property } from '../property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  
  public  url="assets/data/properties.json";
  constructor(private http:HttpClient) { }

  GetProperties():Observable <Property>{ 
      return this.http.get<Property>(this.url);
  }
}
33