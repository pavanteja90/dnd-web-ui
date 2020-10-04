import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ComingSoonComponent, RootComponent } from './containers';
import { CoreModule } from "@projekt/core";

@NgModule({
	declarations: [
		RootComponent,
		ComingSoonComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		CoreModule
	],
	providers: [],
	bootstrap: [RootComponent]
})
export class AppModule { }
