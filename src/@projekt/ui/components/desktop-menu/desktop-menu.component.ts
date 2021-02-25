import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { NavLink } from "../../models";

@Component({
	selector: "desktop-menu",
	templateUrl: "./desktop-menu.component.html",
	styleUrls: ["desktop-menu.component.scss"]
})
export class DesktopMenuComponent {
	constructor(private router: Router) { }
	@Input() links: NavLink[];
	isActive = (base: string): boolean => this.router.url.includes(`/${base}`);
}