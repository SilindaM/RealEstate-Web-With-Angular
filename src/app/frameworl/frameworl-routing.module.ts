import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  AddPropertyComponent} from "../app.component/../property/add-property/add-property.component";
import {  PropertyListComponent} from "../app.component/../property/property-list/property-list.component";
import { DetailsComponent } from '../property/details/details.component';
import { ViewbuyComponent } from '../property/viewbuy/viewbuy.component';
import { ViewrentComponent } from '../property/viewrent/viewrent.component';

const routes: Routes = [
  {path:'',redirectTo:'listproperty',pathMatch:'full'},
  {path:'addproperty',component:AddPropertyComponent},
  {path:'listproperty',component:PropertyListComponent},
  {path:'buy',component:ViewbuyComponent},
  {path:'rent',component:ViewrentComponent},
  {path:'details/:id',component:DetailsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrameworlRoutingModule { }
