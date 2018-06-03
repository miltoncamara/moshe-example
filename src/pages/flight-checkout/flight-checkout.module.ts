import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlightCheckoutPage } from './flight-checkout';

@NgModule({
  declarations: [
    FlightCheckoutPage,
  ],
  imports: [
    IonicPageModule.forChild(FlightCheckoutPage),
  ],
})
export class FlightCheckoutPageModule {}
