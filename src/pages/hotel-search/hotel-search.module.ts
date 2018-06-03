import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotelSearchPage } from './hotel-search';

@NgModule({
  declarations: [
    HotelSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(HotelSearchPage),
  ],
})
export class HotelSearchPageModule {}
