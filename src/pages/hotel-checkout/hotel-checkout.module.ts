import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotelCheckoutPage } from './hotel-checkout';

@NgModule({
  declarations: [
    HotelCheckoutPage,
  ],
  imports: [
    IonicPageModule.forChild(HotelCheckoutPage),
  ],
})
export class HotelCheckoutPageModule {}
