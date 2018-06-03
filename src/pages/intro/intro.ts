import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {
  lastSlide = false;
  @ViewChild('slider') slider: Slides;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

  skipIntro() {
    //this.lastSlide = true;
    //this.slider.slideTo(this.slider.length());
    this.navCtrl.setRoot('WelcomePage');
  }

  ionViewWillEnter() {
  }

  onSlideChanged() {
    this.lastSlide = this.slider.isEnd();
  }

  goToLogin() {
    this.navCtrl.push('Entrar');
  }

  goToSignup() {
    this.navCtrl.push('SignupPage');
  }
}
