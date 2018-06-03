import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatepickerPage } from './datepicker';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
    declarations: [
        DatepickerPage,
    ],
    imports: [
        DirectivesModule,
        IonicPageModule.forChild(DatepickerPage),
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DatepickerPageModule { }
