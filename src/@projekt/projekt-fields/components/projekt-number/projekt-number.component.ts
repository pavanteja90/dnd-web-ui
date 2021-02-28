import { Component } from "@angular/core";
import { ProjektFieldComponent } from '../projekt-field';

@Component({
	selector: "pr-number",
	templateUrl: "./projekt-number.component.html"
})
export class ProjektNumberComponent extends ProjektFieldComponent {
	ngOnInit(): void {
		if (this.type === 'mobile') {
			this.prefix = !this.prefix ? 'mobile' : this.prefix;
			this.placeholder = !this.placeholder ? 'Enter your mobile number' : this.placeholder;
			this.label = !this.label ? 'Mobile Number' : this.label;
		}
	}
}