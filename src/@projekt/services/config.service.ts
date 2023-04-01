import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Config } from '../models';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { UtilService } from './util.service';


@Injectable({ providedIn: 'root'})
export class ConfigService {
	config: Config;

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