import { Component, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
	selector: 'pr-field',
	templateUrl: './projekt-field.component.html',
})
export class ProjektFieldComponent {
	@Input() fieldName: string;
	@Input() type: string;
	@Input() label: string;
	@Input() formControl: UntypedFormControl;
	@Input() placeholder: string;
	@Input() prefix: string;
	@Input() suffix: string;
	@Input() hint: string;
}
