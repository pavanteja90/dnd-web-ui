import { NgModule } from "@angular/core";
import { DesktopMenuComponent, MobileMenuComponent } from './components';

@NgModule({
	declarations: [
		DesktopMenuComponent,
		MobileMenuComponent
	],
	imports: [],
	exports: [
		DesktopMenuComponent,
		MobileMenuComponent
	]
})
export class UiModule { }