import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarCheckoutAddPassengerPage } from './car-checkout-add-passenger';

@NgModule({
  declarations: [
    CarCheckoutAddPassengerPage,
  ],
  imports: [
    IonicPageModule.forChild(CarCheckoutAddPassengerPage),
  ],
})
export class CarCheckoutAddPassengerPageModule {}
