import { Component } from '@angular/core';
import { ConfigService } from '@projekt/core';
@Component({
	selector: 'home',
	templateUrl: 'home.component.html'
})

export class HomeComponent {
	bitmoji: string = `assets/img/bitmoji/` + this.configService.config.custom.home.bitmoji;
	public images = [
		{ path: "assets/img/carousel/1.jpg", alt: "Sainikpuri salon image 1" },
		{ path: "assets/img/carousel/2.jpg", alt: "Sainikpuri salon image 2" },
		{ path: "assets/img/carousel/3.jpg", alt: "Sainikpuri salon image 3" },
		{ path: "assets/img/carousel/4.jpg", alt: "Sainikpuri salon image 4" },
		{ path: "assets/img/carousel/5.jpg", alt: "Sainikpuri salon image 5" },
		{ path: "assets/img/carousel/6.jpg", alt: "Sainikpuri salon image 6" },
		{ path: "assets/img/carousel/7.jpg", alt: "Sainikpuri salon image 7" },
		{ path: "assets/img/carousel/8.jpg", alt: "Sainikpuri salon image 8" }
	];

	public promotions = [
		{ path: "assets/img/promotions/current/1.gif", alt: "30% off promotion" }
	];

	constructor(private configService: ConfigService) { }
}