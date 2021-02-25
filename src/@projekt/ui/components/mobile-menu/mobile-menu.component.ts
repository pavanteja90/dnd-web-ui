import { Component, EventEmitter, Input, Output } from "@angular/core";
import { NavLink } from "../../models";

@Component({
	selector: 'mobile-menu',
	templateUrl: 'mobile-menu.component.html',
	styleUrls: ['mobile-menu.component.scss']
})
export class MobileMenuComponent {
	@Input() links: NavLink[];
	@Output() sidenavClose: EventEmitter<undefined> = new EventEmitter(undefined);
	onSidenavClose = (): void => this.sidenavClose.emit();
}