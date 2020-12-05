import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProjektDateComponent, ProjektFieldComponent, ProjektNumberComponent, ProjektSelectComponent, ProjektTextComponent } from './components';
import { NumberOnlyDirective } from './directives';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from '../styles';

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
		BrowserModule,
		MatInputModule,
		MatFormFieldModule,
		MaterialModule
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
