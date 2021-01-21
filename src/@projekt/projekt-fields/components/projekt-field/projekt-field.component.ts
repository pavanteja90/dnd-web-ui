import { Component, Input } from "@angular/core";
import { FormControl } from '@angular/forms';

@Component({
	selector: "pr-field",
	templateUrl: "./projekt-field.component.html"
})
export class ProjektFieldComponent {
	@Input() type: string;
	@Input() label: string;
	@Input() formControl: FormControl;
	@Input() placeholder: string;
	@Input() prefix: string;
	@Input() suffix: string;
	@Input() hint: string;
}