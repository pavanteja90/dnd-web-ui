import { Component } from '@angular/core';
import { ConfigService } from '@projekt/core';
@Component({
	selector: 'home',
	templateUrl: 'home.component.html'
})

export class HomeComponent {
	bitmoji: string = `assets/img/bitmoji/` + this.configService.config.custom.home.bitmoji;
	public images = [
		{ path: "assets/img/carousel/1.jpg" },
		{ path: "assets/img/carousel/2.jpg" },
		{ path: "assets/img/carousel/3.jpg" },
		{ path: "assets/img/carousel/4.jpg" },
		{ path: "assets/img/carousel/5.jpg" },
		{ path: "assets/img/carousel/6.jpg" },
		{ path: "assets/img/carousel/7.jpg" },
		{ path: "assets/img/carousel/8.jpg" }
	];

	public promotions = [
		{ path: "assets/img/promotions/current/1.gif", alt: "30% off promotion" }
	];

	constructor(private configService: ConfigService) { }
}