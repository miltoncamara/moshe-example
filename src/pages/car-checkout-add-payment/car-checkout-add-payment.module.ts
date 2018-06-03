import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarCheckoutAddPaymentPage } from './car-checkout-add-payment';

@NgModule({
  declarations: [
    CarCheckoutAddPaymentPage,
  ],
  imports: [
    IonicPageModule.forChild(CarCheckoutAddPaymentPage),
  ],
})
export class CarCheckoutAddPaymentPageModule {}
