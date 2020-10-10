import { Component, Input, OnInit } from '@angular/core';
import { Property } from 'src/app/property';
import { PropertyService } from 'src/app/property/property.service';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  @Input() property_details:Property
  proporty:Array<Property>;
  constructor(private propertyservice:PropertyService) { }

  ngOnInit(): void {
     this.proporty=this.propertyservice.GetProperties();
  }
}
