import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { EmailService } from '../../services';

@Component({
	selector: 'contact-us',
	templateUrl: 'contact-us.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactUsComponent implements OnInit {
	form: FormGroup;
	constructor(public cd: ChangeDetectorRef) {}
	ngOnInit(): void {
		this.form = new FormGroup({
			firstName: new FormControl('', Validators.required),
			lastName: new FormControl('', Validators.required),
			mobilePhone: new FormControl('', Validators.minLength(10)),
			emailAddress: new FormControl('', Validators.email),
			message: new FormControl('', Validators.required),
		});
		setTimeout(() => {
			this.cd.detectChanges();
		}, 100);
	}

	submit = () => {
		console.warn('Submit Clicked');
		console.log(this.form.value);
		// this.emailService.sendEmail(this.form.value);
	};
}
