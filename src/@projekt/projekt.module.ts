import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './styles/material.module';
import { UiModule } from './ui';
import { FieldsModule } from './projekt-fields';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		MaterialModule,
		UiModule,
		FieldsModule
	],
	exports: [
		MaterialModule,
		UiModule,
		FieldsModule
	],
	providers: [],
})
export class CoreModule { }
