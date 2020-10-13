import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { MaterialModule } from './styles/material.module';
import { UiModule } from './ui';
import { FieldsModule } from './projekt-fields';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfigService } from './services';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		MaterialModule,
		UiModule,
		FieldsModule,
		HttpClientModule
	],
	exports: [
		MaterialModule,
		UiModule,
		FieldsModule
	],
	providers: [
		ConfigService,
		{ provide: APP_INITIALIZER, useFactory: ConfigService.init, deps: [ConfigService, HttpClient], multi: true }
	],
})
export class CoreModule { }
