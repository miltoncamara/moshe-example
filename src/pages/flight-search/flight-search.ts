import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, SegmentButton, ModalController } from 'ionic-angular';

import * as moment from 'moment';
import 'moment/locale/pt-br';

import { DatepickerPage } from '../datepicker/datepicker';
import { FlightSearchRequest } from '../../models/request/flight-request';
import { Observer } from 'rxjs/Observer';

@IonicPage()
@Component({
  selector: 'page-flight-search',
  templateUrl: 'flight-search.html',
})

export class FlightSearchPage {
  public isRoundTrip: Observable<Boolean>;
  public formFlightSearch: FormGroup;

  private segment: string = 'round-trip';
  private flightSearchRequest: FlightSearchRequest;
  private departureDate: any;
  private arrivalDate: any;
  private fromLocation: string;
  private toLocation: string;
  private isRountTripObserver: Observer<Boolean>;
  private departureDay: any;
  private departureMonth: any;
  private departureYear: any;
  private departureText: any;
  private returnDay: any;
  private returnMonth: any;
  private returnYear: any;
  private returnText: any;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public navParams: NavParams) {

    this.isRoundTrip = new Observable(observer => this.isRountTripObserver = observer);

    this.flightSearchRequest = new FlightSearchRequest();
    this.flightSearchRequest.SearchData.AirSearchData.NumberADTs = 1;
    this.fromLocation = 'SAO';
    this.toLocation = 'NYC';
    this.departureDate = moment();
    this.departureText = this.departureDate.format('DD [de] MMM');

    this.formFlightSearch = new FormGroup({
      origin: new FormControl(this.fromLocation, Validators.compose([
        Validators.required,
        Validators.maxLength(25),
        Validators.minLength(3)
      ])),
      destination: new FormControl(this.toLocation, Validators.compose([
        Validators.required,
        Validators.maxLength(25),
        Validators.minLength(3)
      ])),
      dateTravel: new FormControl(this.departureDate.format('DD [de] MMM')),
      passengers: new FormControl('1 Adulto')
    });

    this.isRoundTrip.subscribe(data => {
      if (data) {
        this.formFlightSearch.patchValue({ dateTravel: `${this.departureText} até ${this.returnText}` });
      } else {
        this.formFlightSearch.patchValue({ dateTravel: `${this.departureText}` });
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlightSearchPage');
  }

  onSegmentChanged(segmentButton: SegmentButton) {
    this.segment = segmentButton.value;
    if (this.segment == 'one-way') {
      this.isRountTripObserver.next(false);
    }
  }

  onSegmentSelected(segmentButton: SegmentButton) {
    // console.log('Segment selected', segmentButton.value);
  }

  openAddPassengers() {
    const page = this;
    const modalPassengers = this.modalCtrl.create('FlightAddPassengerPage');
    modalPassengers.onDidDismiss(data => {
      page.addPassengerData(data);
    });
    modalPassengers.present();
  }

  private addPassengerData(passengerForm): void {
    let adt: number = passengerForm.value['adult'] || 1;
    let child: number = passengerForm.value['children'] || 0;
    let babies: number = passengerForm.value['baby'] || 0;
    const passengers = adt + child + babies;
    this.formFlightSearch.patchValue({ passengers: `${passengers} passageiro(s)` });
    this.flightSearchRequest.SearchData.AirSearchData.NumberADTs = adt;
    this.flightSearchRequest.SearchData.AirSearchData.NumberCHDs = child;
    this.flightSearchRequest.SearchData.AirSearchData.NumberINFs = babies;
  }

  openDatePickerPage() {
    const page = this;
    const modalSelectDate = this.modalCtrl.create('DatepickerPage', { isRoundTrip: this.isRoundTrip });
    modalSelectDate.onDidDismiss(data => {
      this.departureDay = data.initialDate.format('D');
      this.departureMonth = data.initialDate.format('M');
      this.departureYear = data.initialDate.format('YYYY');
      this.departureText = data.initialDate.format('DD [de] MMM');

      // this.flightSearchRequest.SearchData.AirSearchData.CityPairsRequest = [];
      // this.flightSearchRequest.SearchData.AirSearchData.CityPairsRequest.push(new CityPairsRequest({ "Origin": "GRU", "Destination": "MCO", "DepartureDate": { "Day": departureDay, "Month": departureMonth, "Year": departureYear } }));
      // console.log(this.flightSearchRequest);

      if (data.endDate) {
        this.returnDay = data.endDate.format('D');
        this.returnMonth = data.endDate.format('M');
        this.returnYear = data.endDate.format('YYYY');
        this.returnText = data.endDate.format('DD [de] MMM');

        this.formFlightSearch.patchValue({ dateTravel: `${this.departureText}` });
      }

      this.formFlightSearch.patchValue({ dateTravel: `${this.departureText} até ${this.returnText}` });
    });

    modalSelectDate.present();
  }

  openLocationSearchPageIda() {
    const page = this;
    const modalLocationSearch = this.modalCtrl.create('LocationSearchPage');
    modalLocationSearch.onDidDismiss(data => {
      this.formFlightSearch.patchValue({ origin: `${data.c}` });
    });
    modalLocationSearch.present();
  }

  openLocationSearchPageVolta() {
    const page = this;
    const modalLocationSearch = this.modalCtrl.create('LocationSearchPage');
    modalLocationSearch.onDidDismiss(data => {
      this.formFlightSearch.patchValue({ destination: `${data.c}` });
    });
    modalLocationSearch.present();
  }


  doSearch() {
    this.navCtrl.push('FlightListPage')
  }
}
