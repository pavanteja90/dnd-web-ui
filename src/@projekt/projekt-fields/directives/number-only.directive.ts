import { Directive, HostListener, Input } from '@angular/core';

@Directive({
	selector: '[numberOnly]'
})
export class NumberOnlyDirective {
	@Input() allowDecimal: boolean;
	@Input() allowCurrency: boolean;
	@Input() enablePasting: boolean;
	/** Array of additional numeric keyCodes allowed */
	@Input() allowKeyCodes: number[];

	@HostListener("keydown", ["$event"])
	onKeyDown(event: KeyboardEvent): void {
		// console.warn(event.keyCode);
		if (
			// Allow: Delete, Backspace, Tab, Escape, Enter
			[46, 8, 9, 27, 13].indexOf(event.keyCode) !== -1 ||
			event.keyCode === 190 && this.allowDecimal ||
			event.keyCode === 52 && this.allowCurrency ||
			(this.allowKeyCodes && this.allowKeyCodes.indexOf(event.keyCode) > -1) ||
			(event.keyCode === 65 && event.ctrlKey === true) || // Allow: Ctrl+A
			(event.keyCode === 67 && event.ctrlKey === true) || // Allow: Ctrl+C
			(event.keyCode === 86 && event.ctrlKey === true && this.enablePasting) || // Allow: Ctrl+V
			(event.keyCode === 88 && event.ctrlKey === true) || // Allow: Ctrl+X
			(event.keyCode === 65 && event.metaKey === true) || // Cmd+A (Mac)
			(event.keyCode === 67 && event.metaKey === true) || // Cmd+C (Mac)
			(event.keyCode === 86 && event.metaKey === true && this.enablePasting) || // Cmd+V (Mac)
			(event.keyCode === 88 && event.metaKey === true) || // Cmd+X (Mac)
			(event.keyCode >= 35 && event.keyCode <= 39) // Home, End, Left, Right
		) {
			return;  // let it happen, don't do anything
		}
		// Ensure that it is a number and stop the keypress
		// Need the final condition to remove the special characters click for iPhones because the keyCode for those characters is identical to key codes 0-9
		if (
			((event.shiftKey || (event.keyCode < 48 || event.keyCode > 57)) &&
			(event.keyCode < 96 || event.keyCode > 105)) || ('!@#$%^&*()>'.includes(event.key))
		) {
			event.preventDefault();
		}
	}

	@HostListener("contextmenu", ["$event"])
	onContextMenu(event: MouseEvent) {
		// Ensure that it is a right click of mouse event
		if (
			!this.enablePasting &&
			(("which" in event && event.which === 3) || // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
			("button" in event && event.button === 2)) // IE, Opera
		) {
			event.preventDefault();
		}
	}
}
