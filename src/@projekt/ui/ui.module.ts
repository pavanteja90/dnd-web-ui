import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterialModule } from '../styles';
import { DesktopMenuComponent, MobileMenuComponent } from './components';

@NgModule({
	declarations: [
		DesktopMenuComponent,
		MobileMenuComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		MaterialModule
	],
	exports: [
		DesktopMenuComponent,
		MobileMenuComponent
	]
})
export class UiModule { }