import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlightCheckoutAddPaymentPage } from './flight-checkout-add-payment';

@NgModule({
  declarations: [
    FlightCheckoutAddPaymentPage,
  ],
  imports: [
    IonicPageModule.forChild(FlightCheckoutAddPaymentPage),
  ],
})
export class FlightCheckoutAddPaymentPageModule {}
