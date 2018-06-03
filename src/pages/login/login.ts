import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { User } from '../../providers/providers';
import { MainPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  login: FormGroup;

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    });

    this.login = new FormGroup({
      email: new FormControl('miltomcamara@gmail.com', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      password: new FormControl('gomes123', Validators.required)
    });
  }

  // Attempt to login in through our User service
  doLogin() {
    this.navCtrl.setRoot(MainPage);
    // this.user.login(this.account).subscribe((resp) => {
    //   this.navCtrl.push(MainPage);
    // }, (err) => {
    //   this.navCtrl.push(MainPage);
    //   // Unable to log in
    //   let toast = this.toastCtrl.create({
    //     message: this.loginErrorString,
    //     duration: 3000,
    //     position: 'top'
    //   });
    //   toast.present();
    // });
  }

  goToSignup() {
    this.navCtrl.push('SignupPage');
  }

  goToForgotPassword() {
    this.navCtrl.push('ForgotPasswordPage');
  }

  doFacebookLogin() {

  }

  doGoogleLogin() {

  }
}
