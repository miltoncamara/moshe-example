import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FlightCheckoutAddPassengerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flight-checkout-add-passenger',
  templateUrl: 'flight-checkout-add-passenger.html',
})
export class FlightCheckoutAddPassengerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlightCheckoutAddPassengerPage');
  }

  addPassenger() {
    this.navCtrl.pop();
  }
}
