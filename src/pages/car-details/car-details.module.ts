import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarDetailsPage } from './car-details';

@NgModule({
  declarations: [
    CarDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CarDetailsPage),
  ],
})
export class CarDetailsPageModule {}
