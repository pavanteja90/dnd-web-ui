import { Component, EventEmitter, Output } from "@angular/core";

@Component({
	selector: 'mobile-menu',
	templateUrl: 'mobile-menu.component.html',
	styleUrls: ['mobile-menu.component.scss']
})
export class MobileMenuComponent {
	@Output() sidenavClose: EventEmitter<undefined> = new EventEmitter(undefined);

	onSidenavClose = (): void => this.sidenavClose.emit();
}