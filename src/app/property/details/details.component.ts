import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public propertyId:number;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.propertyId=this.route.snapshot.params['id'];
  }

}
