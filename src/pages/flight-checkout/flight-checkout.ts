import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FlightCheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flight-checkout',
  templateUrl: 'flight-checkout.html',
})
export class FlightCheckoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlightCheckoutPage');
  }
  
  addPassenger() {
    this.navCtrl.push('FlightCheckoutAddPassengerPage');
  }

  addContact() {
    this.navCtrl.push('FlightCheckoutAddContactPage');
  }

  addPayment() {
    this.navCtrl.push('FlightCheckoutAddPaymentPage');
  }

  doBuy() {
    this.navCtrl.push('FlightCheckoutThanksPage');
  }
}
