import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HotelDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hotel-details',
  templateUrl: 'hotel-details.html',
})
export class HotelDetailsPage {
  public hotel: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
      this.hotel = this.navParams.get('hotel');
  }

  selectHotel() {
    this.navCtrl.push("");
  }
}
