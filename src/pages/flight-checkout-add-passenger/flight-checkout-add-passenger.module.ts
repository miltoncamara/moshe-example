import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlightCheckoutAddPassengerPage } from './flight-checkout-add-passenger';

@NgModule({
  declarations: [
    FlightCheckoutAddPassengerPage,
  ],
  imports: [
    IonicPageModule.forChild(FlightCheckoutAddPassengerPage),
  ],
})
export class FlightCheckoutAddPassengerPageModule {}
