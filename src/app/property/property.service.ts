import { Injectable } from '@angular/core';
import { Property } from '../property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
   properties:Array<Property>
  constructor() { }

  GetProperties(): Array<Property>{
  return  this.properties= [
      {id:1,name:"Silinda",price:145802,type:"House"},
      {id:2,name:"Likazi",price:14502,type:"Mkhukhu"},
      {id:3,name:"Nelspruit",price:4000,type:"Flat"},
      {id:4,name:"Kamagugu",price:87400,type:"House"}

]
}
}
