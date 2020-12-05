import { Component, OnInit } from "@angular/core";
import { ProjektFieldComponent } from '../projekt-field';

@Component({
	selector: "pr-text",
	templateUrl: "./projekt-text.component.html"
})
export class ProjektTextComponent extends ProjektFieldComponent implements OnInit {
	ngOnInit(): void {
		if (this.type === 'email') {
			this.prefix = !this.prefix ? 'email' : this.prefix;
			this.placeholder = !this.placeholder ? 'Enter your email address' : this.placeholder;
			this.label = !this.label ? 'Email Address' : this.label;
		}
	}
}