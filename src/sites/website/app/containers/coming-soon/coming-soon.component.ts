import { Component } from '@angular/core';
import { ConfigService } from '@projekt/core';

@Component({
	selector: 'coming-soon',
	templateUrl: './coming-soon.component.html'
})
export class ComingSoonComponent {
	bitmoji: string = `assets/img/bitmoji/` + this.configService.config.custom.comingSoon.bitmoji;
	constructor(private configService: ConfigService) { }
}
