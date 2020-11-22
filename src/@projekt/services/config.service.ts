import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { MetaLoader, MetaStaticLoader, PageTitlePositioning } from '@ngx-meta/core';
import { environment } from 'src/environments/environment';
import { Config } from '../models';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { UtilService } from './util.service';


@Injectable()
export class ConfigService {
	config: Config;
	static metaFactory(configService: ConfigService): MetaLoader {
		return new MetaStaticLoader({
			pageTitlePositioning: PageTitlePositioning.PrependPageTitle,
			pageTitleSeparator: ' | ',
			applicationName: configService.config.name,
			defaults: {
				title: configService.config.site.title,
				description: configService.config.site.description,
				'og:image': configService.config.site.logo,
				'og:type': 'website',
				'og:locale': configService.config.site.locale || 'en_US'
			}
		});
	}

	static init(http: HttpClient, configService: ConfigService, appConfig: Config) {
		configService.config = appConfig;
		return (): Promise<any> => {
			return new Promise<void>((resolve, reject) => {
				console.log("Config service initialised");
				//do your initialisation stuff here
				const configPath = `./assets/config/config.json`;
				http.get(configPath).pipe(
					map((config: Config) => {
						configService.config = { ...UtilService.deepMerge(configService.config, config) };
						resolve();
					}),
					catchError(() => {
						console.warn("An error occurred while loading config");
						reject();
						return of({});
					})
				).subscribe();
			});
		}
	}
}