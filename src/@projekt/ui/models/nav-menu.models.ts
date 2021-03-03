export interface NavLink {
	routerLink: string;
	label: string;
	icon?: string;
	children?: NavLink[]
}