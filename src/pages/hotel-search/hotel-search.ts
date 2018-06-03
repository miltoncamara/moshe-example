import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-hotel-search',
  templateUrl: 'hotel-search.html',
})
export class HotelSearchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  doSearch() {
    this.navCtrl.push('HotelListPage')
  }
}
