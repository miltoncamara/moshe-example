import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarCheckoutAddContactPage } from './car-checkout-add-contact';

@NgModule({
  declarations: [
    CarCheckoutAddContactPage,
  ],
  imports: [
    IonicPageModule.forChild(CarCheckoutAddContactPage),
  ],
})
export class CarCheckoutAddContactPageModule {}
