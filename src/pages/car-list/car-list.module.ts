import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarListPage } from './car-list';

@NgModule({
  declarations: [
    CarListPage,
  ],
  imports: [
    IonicPageModule.forChild(CarListPage),
  ],
})
export class CarListPageModule {}
