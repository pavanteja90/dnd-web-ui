import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { UtilService } from './util.service';
import { MetaService } from './meta.service';

@Injectable({ providedIn: 'root' })
export class MetaGuard extends MetaService implements CanActivate {

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		let defaults = {
			title: this.config.site.title,
			description: this.config.site.description,
			'og:image': this.config.site.logo,
			'og:type': 'website',
			'og:locale': this.config.site.locale
		};
		let metaData = route.data?.meta;
		if (metaData || !this.getTitle().includes(defaults.title)) {
			let metadataOptions = UtilService.deepMerge(defaults, metaData);
			this.setMetaTags(metadataOptions);
		}
		return true;
	}
}
