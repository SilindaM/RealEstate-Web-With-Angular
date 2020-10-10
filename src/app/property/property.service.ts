import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Property } from '../property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  constructor(private http:HttpClient) { }

  GetProperties(): Observable<Property>{
    const url="properti.json";
    return this.http.get<Property>(url);
  }
}
