import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { InjectionToken, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ComingSoonComponent, FooterComponent, RootComponent } from './containers';
import { CoreModule, FieldsModule } from "@projekt/core";
import { AboutUsComponent, CareersComponent, ContactUsComponent, FemaleMenuComponent, HomeComponent, MaleMenuComponent, OfferedServicesComponent, ProductsComponent, PromosComponent, StartupDialogComponent, StoreMenuComponent } from './components';
import { appConfig } from './app-config';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SiteFormBuilder } from './services';
import { MatFormFieldDefaultOptions } from '@angular/material/form-field';

const MAT_FORM_FIELD_DEFAULT_OPTIONS: InjectionToken<MatFormFieldDefaultOptions> = new InjectionToken('MAT_FORM_FIELD_DEFAULT_OPTIONS');
@NgModule({
	declarations: [
		// Containers
		RootComponent,
		ComingSoonComponent,
		FooterComponent,
		// Components
		AboutUsComponent,
		CareersComponent,
		ContactUsComponent,
		OfferedServicesComponent,
		ProductsComponent,
		PromosComponent,
		StartupDialogComponent,
		StoreMenuComponent,
		MaleMenuComponent,
		FemaleMenuComponent,
		HomeComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		AppRoutingModule,
		CoreModule.forRoot(appConfig),
		FieldsModule,
	],
	providers: [
		SiteFormBuilder,
		{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'standard' } },
	],
	bootstrap: [RootComponent]
})
export class AppModule { }
