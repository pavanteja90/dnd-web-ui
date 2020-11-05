import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProjektDateComponent, ProjektFieldComponent, ProjektNumberComponent, ProjektSelectComponent, ProjektTextComponent } from './components';
import { NumberOnlyDirective } from './directives';

@NgModule({
	declarations: [
		ProjektFieldComponent,
		ProjektDateComponent,
		ProjektNumberComponent,
		ProjektSelectComponent,
		ProjektTextComponent,
		NumberOnlyDirective
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
