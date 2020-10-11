import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Property } from '../property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  
  constructor(private http:HttpClient) { }

  GetProperties(){ 
      return this.http.get('data/properti.json');
  }
}
