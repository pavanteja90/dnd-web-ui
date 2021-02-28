import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { SiteFormBuilder } from "../../services";

@Component({
	selector: 'contact-us',
	templateUrl: 'contact-us.component.html'
})
export class ContactUsComponent implements OnInit {
	form: FormGroup;
	constructor(private formBuilder: SiteFormBuilder) { }
	ngOnInit(): void {
		this.form = this.formBuilder.createContactForm();
	}

	submit = () => {
		console.warn("Submit Clicked");
	}
}