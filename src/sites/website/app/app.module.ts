import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ComingSoonComponent, FooterComponent, RootComponent } from './containers';
import { ConfigService, CoreModule, FieldsModule } from "@projekt/core";
import { AboutUsComponent, CareersComponent, ContactUsComponent, FemaleMenuComponent, HomeComponent, MaleMenuComponent, OfferedServicesComponent, ProductsComponent, PromosComponent, StartupDialogComponent, StoreMenuComponent } from './components';
import { appConfig } from './app-config';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { SiteFormBuilder } from './services';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

export const DEFAULT_SWIPER_OPTIONS: SwiperConfigInterface = {
	// a11y: { enabled: true },
	autoplay: {
		delay: 4000,
		disableOnInteraction: true
	},
	direction: 'horizontal',
	slidesPerView: 1,
	keyboard: true,
	mousewheel: true,
	loop: true,
	scrollbar: false,
	navigation: true,
	speed: 300
};

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
		SwiperModule
	],
	providers: [
		SiteFormBuilder,
		{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'standard' } },
		{ provide: SWIPER_CONFIG, useValue: DEFAULT_SWIPER_OPTIONS }
	],
	bootstrap: [RootComponent]
})
export class AppModule { }
