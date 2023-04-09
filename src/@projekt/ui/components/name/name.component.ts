import { Component, Input } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Component({
	selector: 'name',
	templateUrl: 'name.component.html',
})
export class NameComponent {
	@Input() formGroup: UntypedFormGroup;
}
