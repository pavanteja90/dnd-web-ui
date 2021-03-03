import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterialModule } from '../styles';
import { DesktopMenuComponent, MobileMenuComponent, NameComponent } from './components';

@NgModule({
	declarations: [
		DesktopMenuComponent,
		MobileMenuComponent,
		NameComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		MaterialModule
	],
	exports: [
		DesktopMenuComponent,
		MobileMenuComponent,
		NameComponent
	]
})
export class UiModule { }