import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HotelService } from './../../providers/hotel/hotel-service';

@IonicPage()
@Component({
  selector: 'page-hotel-list',
  templateUrl: 'hotel-list.html',
})
export class HotelListPage {
  public hotels: any;

  constructor(
    public hotelService: HotelService,
    public navCtrl: NavController, 
    public navParams: NavParams) {
    this.hotelService.getHotel().subscribe(data => {
      this.hotels = data;
    });    
  }

  viewHotel(hotel: any) {
    this.navCtrl.push('HotelDetailsPage', { hotel: hotel});
  }
}
