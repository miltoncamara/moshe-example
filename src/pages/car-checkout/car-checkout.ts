import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CarCheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-car-checkout',
  templateUrl: 'car-checkout.html',
})
export class CarCheckoutPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  addPassenger() {
    this.navCtrl.push('CarCheckoutAddPassengerPage');
  }

  addContact() {
    this.navCtrl.push('CarCheckoutAddContactPage');
  }

  addPayment() {
    this.navCtrl.push('CarCheckoutAddPaymentPage');
  }

  doBuy() {
    this.navCtrl.push('CarCheckoutThanksPage');
  }
}
