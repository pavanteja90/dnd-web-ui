import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProjektDateComponent, ProjektFieldComponent, ProjektNumberComponent, ProjektSelectComponent, ProjektTextComponent } from './components';

@NgModule({
	declarations: [
		ProjektFieldComponent,
		ProjektDateComponent,
		ProjektNumberComponent,
		ProjektSelectComponent,
		ProjektTextComponent
	],
	imports: [
		BrowserModule
	],
	exports: [
		ProjektFieldComponent,
		ProjektDateComponent,
		ProjektNumberComponent,
		ProjektSelectComponent,
		ProjektTextComponent
	],
	providers: []
})
export class FieldsModule { }
