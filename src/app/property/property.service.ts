import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Property } from '../property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  properti:Property;
  constructor() { }

  GetProperties():Property{
    return this.properti= 
    {id:1,name:"Silinda",price:14502,type:"House"},
    {id:1,name:"Silinda",price:14502,type:"House"}
  }
}
