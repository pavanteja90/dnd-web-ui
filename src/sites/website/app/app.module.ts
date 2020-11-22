import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ModuleWithComponentFactories, ModuleWithProviders, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ComingSoonComponent, FooterComponent, RootComponent } from './containers';
import { ConfigService, CoreModule } from "@projekt/core";

import { MetaModule, MetaLoader } from '@ngx-meta/core';
import { AboutUsComponent, CareersComponent, ContactUsComponent, OfferedServicesComponent, ProductsComponent, PromosComponent, StoreMenuComponent } from './components';
import { appConfig } from './app-config';

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
		StoreMenuComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		MetaModule.forRoot({ provide: MetaLoader, useFactory: ConfigService.metaFactory, deps: [ConfigService] }),
		CoreModule.forRoot(appConfig)
	],
	providers: [],
	bootstrap: [RootComponent]
})
export class AppModule { }
