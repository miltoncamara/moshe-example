import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlightCheckoutAddContactPage } from './flight-checkout-add-contact';

@NgModule({
  declarations: [
    FlightCheckoutAddContactPage,
  ],
  imports: [
    IonicPageModule.forChild(FlightCheckoutAddContactPage),
  ],
})
export class FlightCheckoutAddContactPageModule {}
