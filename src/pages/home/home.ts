import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad HomePage');
  }
  
  goFlightSearch() {
    this.navCtrl.push('FlightSearchPage');
  }

  goSearchCar() {
    this.navCtrl.push("CarSearchPage");
  }

  goHotelList() {
    this.navCtrl.push("HotelSearchPage");
  }
}
