import { Component } from '@angular/core';
@Component({
	selector: 'home',
	templateUrl: 'home.component.html',
})
export class HomeComponent {
	public images = [
		{ path: 'assets/img/carousel/1.webp', alt: 'Sainikpuri salon image 1' },
		{ path: 'assets/img/carousel/2.webp', alt: 'Sainikpuri salon image 2' },
		{ path: 'assets/img/carousel/3.webp', alt: 'Sainikpuri salon image 3' },
		{ path: 'assets/img/carousel/4.webp', alt: 'Sainikpuri salon image 4' },
		{ path: 'assets/img/carousel/5.webp', alt: 'Sainikpuri salon image 5' },
		{ path: 'assets/img/carousel/6.webp', alt: 'Sainikpuri salon image 6' },
		{ path: 'assets/img/carousel/7.webp', alt: 'Sainikpuri salon image 7' },
		{ path: 'assets/img/carousel/8.webp', alt: 'Sainikpuri salon image 8' },
	];
}
