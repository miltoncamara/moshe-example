import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AirResponseData } from './../../models/response/flight-response';

@Injectable()
export class FlightsAvailMock {
    AirResponseData: AirResponseData;

    constructor(private http: Http) {
    }

    findFlights() {
        return this.http.get('assets/mock/flight/flights-avail-response.json').map(res => res.json());
    }
}