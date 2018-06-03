import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FlightCheckoutAddPaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flight-checkout-add-payment',
  templateUrl: 'flight-checkout-add-payment.html',
})
export class FlightCheckoutAddPaymentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlightCheckoutAddPaymentPage');
  }

  addPayment() {
    this.navCtrl.pop();
  }
}
