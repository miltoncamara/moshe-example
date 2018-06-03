import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarSearchPage } from './car-search';

@NgModule({
  declarations: [
    CarSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(CarSearchPage),
  ],
})
export class CarSearchPageModule {}
