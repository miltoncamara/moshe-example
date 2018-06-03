import { NgModule } from '@angular/core';
import { PadNumberPipe } from './pad-number/pad-number';
import { MinutesInHoursPipe } from './minutes-in-hours/minutes-in-hours';
@NgModule({
	declarations: [
		PadNumberPipe,
		MinutesInHoursPipe
	],
	imports: [],
	exports: [
		PadNumberPipe,
		MinutesInHoursPipe
	]
})
export class PipesModule { }
