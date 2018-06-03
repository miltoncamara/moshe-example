import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FlightCheckoutAddContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flight-checkout-add-contact',
  templateUrl: 'flight-checkout-add-contact.html',
})
export class FlightCheckoutAddContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlightCheckoutAddContactPage');
  }

  addContact() {
    this.navCtrl.pop();
  }
}
