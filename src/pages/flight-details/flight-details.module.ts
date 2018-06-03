import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlightDetailsPage } from './flight-details';

@NgModule({
  declarations: [
    FlightDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(FlightDetailsPage),
  ],
})
export class FlightDetailsPageModule {}
