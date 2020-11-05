import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ModuleWithComponentFactories, ModuleWithProviders, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ComingSoonComponent, FooterComponent, RootComponent } from './containers';
import { ConfigService, CoreModule } from "@projekt/core";

import { MetaModule, MetaLoader } from '@ngx-meta/core';

@NgModule({
	declarations: [
		RootComponent,
		ComingSoonComponent,
		FooterComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		CoreModule,
		MetaModule.forRoot({ provide: MetaLoader, useFactory: ConfigService.metaFactory, deps: [ConfigService] })
	],
	providers: [],
	bootstrap: [RootComponent]
})
export class AppModule { }
