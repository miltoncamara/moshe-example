import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { counterRangeValidator } from '../../components/counter-input/counter-input';

@IonicPage()
@Component({
  selector: 'page-flight-add-passenger',
  templateUrl: 'flight-add-passenger.html',
})

export class FlightAddPassengerPage {
  passengersForm: any;
  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams) {
    this.passengersForm = new FormGroup({
      adult: new FormControl(1, counterRangeValidator(7, 1)),
      children: new FormControl(0, counterRangeValidator(5, 0)),
      baby: new FormControl(0, counterRangeValidator(5, 0))
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlightAddPassengerPage');
  }

  closeModal() {
    this.viewCtrl.dismiss(this.passengersForm);
  }
}
