import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ComingSoonComponent, FooterComponent, RootComponent } from './containers';
import { ConfigService, CoreModule, FieldsModule } from "@projekt/core";
import { MetaModule, MetaLoader } from '@ngx-meta/core';
import { AboutUsComponent, CareersComponent, ContactUsComponent, OfferedServicesComponent, ProductsComponent, PromosComponent, StartupDialogComponent, StoreMenuComponent } from './components';
import { appConfig } from './app-config';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { SiteFormBuilder } from './services';

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
		StoreMenuComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		AppRoutingModule,
		MetaModule.forRoot({ provide: MetaLoader, useFactory: ConfigService.metaFactory, deps: [ConfigService] }),
		CoreModule.forRoot(appConfig),
		FieldsModule
	],
	providers: [
		SiteFormBuilder,
		{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'standard' } }
	],
	bootstrap: [RootComponent]
})
export class AppModule { }
