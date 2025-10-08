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
			firstName: ['', Validators.required],
			lastName: ['', Validators.required],
			mobilePhone: ['', Validators.compose([SiteFormBuilder.mobile])],
			emailAddress: ['', Validators.email],
			message: ['', Validators.required]
		});
	}

	createName = (): FormGroup => this.group({
		firstName: ['', Validators.required],
		middleNames: [''],
		lastName: ['', Validators.required]
	})
}