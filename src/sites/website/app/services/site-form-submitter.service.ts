import { Injectable } from '@angular/core';
import {
	UntypedFormBuilder,
	UntypedFormControl,
	UntypedFormGroup,
	ValidatorFn,
	Validators,
} from '@angular/forms';

@Injectable()
export class SiteFormBuilder extends UntypedFormBuilder {
	static mobile: ValidatorFn = (
		control: UntypedFormControl
	): { [key: string]: boolean } => {
		if (control?.value && control.value.length !== 10) {
			return { invalidMobile: true };
		}
		return null;
	};

	createContactForm = (): UntypedFormGroup => {
		return this.group({
			name: this.createName(),
			mobilePhone: [
				undefined,
				Validators.compose([SiteFormBuilder.mobile]),
			],
			emailAddress: [undefined, Validators.email],
			message: [undefined, Validators.required],
		});
	};

	createName = (): UntypedFormGroup =>
		this.group({
			firstName: [undefined, Validators.required],
			middleNames: [undefined],
			lastName: [undefined, Validators.required],
		});
}
