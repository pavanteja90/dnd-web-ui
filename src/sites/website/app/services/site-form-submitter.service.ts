import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Injectable()
export class SiteFormBuilder extends FormBuilder {
	static mobile: ValidatorFn = (control: FormControl): {[key: string]: boolean } => {
		if (control?.value && control.value.length !== 10) {
			return { invalidMobile: true };
		}
		return null;
	}

	createContactForm = (): FormGroup => {
		return this.group({
			name: this.createName(),
			mobilePhone: [undefined, Validators.compose([SiteFormBuilder.mobile])],
			emailAddress: [undefined, Validators.email],
			message: [undefined, Validators.required]
		});
	}

	createName = (): FormGroup => this.group({
		firstName: [undefined, Validators.required],
		middleNames: [undefined],
		lastName: [undefined, Validators.required]
	})
}