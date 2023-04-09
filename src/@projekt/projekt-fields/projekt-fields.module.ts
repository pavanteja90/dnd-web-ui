import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProjektDateComponent, ProjektFieldComponent, ProjektNumberComponent, ProjektSelectComponent, ProjektTextComponent } from './components';
import { NumberOnlyDirective } from './directives';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
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
