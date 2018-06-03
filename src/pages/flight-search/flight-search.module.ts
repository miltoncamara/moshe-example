import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { FlightSearchPage } from './flight-search';
import { DatepickerPage } from '../datepicker/datepicker';
import { CounterInputComponent } from '../../components/counter-input/counter-input';

@NgModule({
  declarations: [
    FlightSearchPage
  ],
  imports: [
    IonicPageModule.forChild(FlightSearchPage),
    TranslateModule.forChild()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FlightSearchPageModule {}
