import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PropertyCardComponent } from './property-card/property-card.component';
import { FrameworlRoutingModule } from './frameworl-routing.module';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, PropertyCardComponent],
  imports: [
    CommonModule,
    FrameworlRoutingModule
  ],
  exports: [HeaderComponent, FooterComponent,PropertyCardComponent]
})
export class FrameworlModule { }
