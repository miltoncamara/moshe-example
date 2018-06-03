import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlightAddPassengerPage } from './flight-add-passenger';
import { CounterInputComponent } from '../../components/counter-input/counter-input';

@NgModule({
  declarations: [
    FlightAddPassengerPage,
    CounterInputComponent,
  ],
  imports: [
    IonicPageModule.forChild(FlightAddPassengerPage),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FlightAddPassengerPageModule {}
