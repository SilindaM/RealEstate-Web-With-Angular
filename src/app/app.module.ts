import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { FrameworlModule } from './frameworl/frameworl.module';
import { HttpClientModule } from "@angular/common/http";
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { ViewbuyComponent } from './property/viewbuy/viewbuy.component';
import { ViewrentComponent } from './property/viewrent/viewrent.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyListComponent,
    AddPropertyComponent,
    ViewbuyComponent,
    ViewrentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FrameworlModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
