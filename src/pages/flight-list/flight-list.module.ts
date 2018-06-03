import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { PipesModule } from './../../pipes/pipes.module';

import { FlightsAvailMock } from './../../mocks/flight/flights';
import { FlightListPage } from './flight-list';

@NgModule({
  declarations: [
    FlightListPage,
  ],
  imports: [
    IonicModule,
    PipesModule,
    IonicPageModule.forChild(FlightListPage),
  ],
  providers: [
    FlightsAvailMock
  ]
})
export class FlightListPageModule {}
