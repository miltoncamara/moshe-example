import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ApiService } from '../api/api-service';

@Injectable()
export class HotelService {

    constructor(
        private _apiService: ApiService) {
        this._apiService.serviceUrl = 'hotel';
    }

    public getHotel() {
        return this._apiService.getAll();
    }
}