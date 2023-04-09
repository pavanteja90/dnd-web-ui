import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { ConfigService } from '@projekt/core';

@Component({
	selector: 'coming-soon',
	templateUrl: './coming-soon.component.html',
})
export class ComingSoonComponent {
	bitmoji: string =
		`assets/img/bitmoji/` +
		this.configService.config.custom.comingSoon.bitmoji;
	emailControl: UntypedFormControl = new UntypedFormControl(null);
	constructor(private configService: ConfigService) {}

	submit = (): void => {
		console.warn('Email Controls', this.emailControl);
	};
}
