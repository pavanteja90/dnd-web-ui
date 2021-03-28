import { Component } from '@angular/core';
import { ConfigService } from '@projekt/core';
@Component({
	selector: 'home',
	templateUrl: 'home.component.html'
})

export class HomeComponent {
	bitmoji: string = `assets/img/bitmoji/` + this.configService.config.custom.home.bitmoji;
	public slides = [
		{ src: "assets/img/swiper/1.jpeg", alt: "Women's Section" },
		{ src: "assets/img/swiper/2.jpeg", alt: "Entrance" },
		{ src: "assets/img/swiper/3.jpeg", alt: "Men's Section" },
		{ src: "assets/img/swiper/4.jpeg", alt: "Men's Pedicure" }
	];

	constructor(private configService: ConfigService) { }
}