import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-hotel-checkout',
  templateUrl: 'hotel-checkout.html',
})
export class HotelCheckoutPage {
  public hotel: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
      this.hotel = this.navParams.get('hotel');
  }

  doBuy() {
    this.navCtrl.push('HotelCheckoutThanksPage');
  }
}
