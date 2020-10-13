import { NgModule } from "@angular/core";
import { MaterialModule } from '../styles';
import { DesktopMenuComponent, MobileMenuComponent } from './components';

@NgModule({
	declarations: [
		DesktopMenuComponent,
		MobileMenuComponent
	],
	imports: [
		MaterialModule
	],
	exports: [
		DesktopMenuComponent,
		MobileMenuComponent
	]
})
export class UiModule { }