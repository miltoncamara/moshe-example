import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarCheckoutPage } from './car-checkout';

@NgModule({
  declarations: [
    CarCheckoutPage,
  ],
  imports: [
    IonicPageModule.forChild(CarCheckoutPage),
  ],
})
export class CarCheckoutPageModule {}
