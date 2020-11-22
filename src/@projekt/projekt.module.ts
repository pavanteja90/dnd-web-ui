import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { MaterialModule } from './styles/material.module';
import { UiModule } from './ui';
import { FieldsModule } from './projekt-fields';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfigService, UtilService } from './services';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Config } from './models';

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
	]
})
export class CoreModule {
	static forRoot(appConfig: Partial<Config>): ModuleWithProviders<CoreModule> {
		return {
			ngModule: CoreModule,
			providers: [
				UtilService,
				ConfigService,
				{
					provide: Config,
					useValue: appConfig
				},
				{ provide: APP_INITIALIZER, useFactory: ConfigService.init, deps: [HttpClient, ConfigService, Config], multi: true }
			]
		}
	}
}
