import { Component } from '@angular/core';
import { ConfigService } from '@projekt/core';

@Component({
	selector: 'home',
	templateUrl: 'home.component.html'
})

export class HomeComponent {
	bitmoji: string = `assets/img/bitmoji/` + this.configService.config.custom.home.bitmoji;
	constructor(private configService: ConfigService) { }
}