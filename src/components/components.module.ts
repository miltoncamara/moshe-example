import { NgModule } from '@angular/core';
import { ShowHidePasswordComponent } from './show-hide-password/show-hide-password';
import { CounterInputComponent } from './counter-input/counter-input';
@NgModule({
	declarations: [
		ShowHidePasswordComponent,
		CounterInputComponent],
	imports: [],
	exports: [
		ShowHidePasswordComponent,
		CounterInputComponent
	]
})
export class ComponentsModule { }
