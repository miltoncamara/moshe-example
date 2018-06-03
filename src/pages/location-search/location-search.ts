import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { LocationService } from '../../providers/location/location-service';

@IonicPage()
@Component({
  selector: 'page-location-search',
  templateUrl: 'location-search.html',
})
export class LocationSearchPage {
  private locationResponse: LocationResponseData;
  public locations: Location[] = [];

  constructor(
    private locationService: LocationService,
    private viewCtrl: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationSearchPage');
  }

  closeModal() {
    this.navCtrl.pop();
  }

  selectLocation(model) {
    this.viewCtrl.dismiss(model);
  }

  onInputLocation(event) {
    let term: String = event.srcElement.value;
    if (term.length >= 3) {
      this.locationService.findLocation(event.srcElement.value)
        .subscribe(data => {
          this.locations = data.Locations;
        });
    }
  }
}
