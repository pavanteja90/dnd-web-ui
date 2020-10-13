import { Component } from "@angular/core";
import { ConfigService } from '@projekt/core';

@Component({
	selector: 'footer',
	templateUrl: './footer.component.html'
})
export class FooterComponent {
	constructor(public configService: ConfigService) { }
}