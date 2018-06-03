import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ApiService } from '../api/api-service';
import { LocationSearchRequest } from '../../models/request/location-request';

@Injectable()
export class LocationService {

    constructor(
        private _apiService: ApiService) {
        this._apiService.serviceUrl = 'location';
    }

    public findLocation(term: string) : Observable<LocationResponseData> {
        let locationRequest = new LocationSearchRequest();
        locationRequest.Keyword = term;
        console.log(locationRequest);
        return this._apiService.add<LocationResponseData>(locationRequest);
    }
}