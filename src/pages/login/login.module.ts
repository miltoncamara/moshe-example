import { ShowHideInput } from './../../components/show-hide-password/show-hide-input';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ShowHidePasswordComponent } from './../../components/show-hide-password/show-hide-password';
import { LoginPage } from './login';

@NgModule({
  declarations: [
    LoginPage,
    ShowHidePasswordComponent,
    ShowHideInput
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    TranslateModule.forChild()
  ],
  exports: [
    LoginPage
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginPageModule { }
