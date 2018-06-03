import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { SecurityContext } from './../../models/request/auth-request';
import { FlightSearchRequest, AirSearchData } from './../../models/request/flight-request';

@Injectable()
export class FlightService {
    private apiUrl: string = 'https://rcitravelbr.azure-api.net/v1/api/searchflight';
    private options: RequestOptions;

    constructor(private http: Http) {
        this.options = new RequestOptions();
        this.options.headers = new Headers();
        this.options.headers.set('Ocp-Apim-Subscription-Key','9bfb71e718c84386bb907b9f46e89d51');
    }

    public findFlights(request: FlightSearchRequest) {
        return this.http.post(this.apiUrl, { SecurityContext: request.SecurityContext, SearchData: request.SearchData }, this.options).map(res => res.json());
    }
}