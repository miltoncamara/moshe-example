import { LocationService } from './../../providers/location/location-service';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocationSearchPage } from './location-search';
import { ApiService } from '../../providers/api/api-service';

@NgModule({
  declarations: [
    LocationSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(LocationSearchPage),
  ],
  providers: [
    ApiService,
    LocationService
  ]
})
export class LocationSearchPageModule {}
