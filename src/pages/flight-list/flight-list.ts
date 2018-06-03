import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FlightSearchRequest } from './../../models/request/flight-request';
import { FlightSearchResponse } from '../../models/response/flight-response';
import { FlightService } from './../../providers/flights/flight-service';
import { FlightsAvailMock } from '../../mocks/flight/flights';

@IonicPage()
@Component({
  selector: 'page-flight-list',
  templateUrl: 'flight-list.html',
})
export class FlightListPage {
  private flightSearchRequest: FlightSearchRequest;
  private flightDataResponse: FlightSearchResponse[];

  constructor(
    private flighService: FlightsAvailMock,
    private navCtrl: NavController,
    private navParams: NavParams) {
    this.flightSearchRequest = navParams.data;
    this.flighService.findFlights().subscribe(data => {
      this.flightDataResponse = data;
    });
  }

  doCheckout() {
    this.navCtrl.push('FlightCheckoutPage');
  }
}
