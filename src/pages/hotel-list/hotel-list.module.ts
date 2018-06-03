import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotelListPage } from './hotel-list';

import { HotelService } from './../../providers/hotel/hotel-service';

@NgModule({
  declarations: [
    HotelListPage,
  ],
  imports: [
    IonicPageModule.forChild(HotelListPage),
  ],
  providers: [
    HotelService
  ]
})
export class HotelListPageModule {}
