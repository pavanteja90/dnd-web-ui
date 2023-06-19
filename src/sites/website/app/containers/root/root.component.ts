import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavLink } from 'src/@projekt/ui/models';
/**
 * Icons website: https://icons8.com/
 * Emojis website: https://emojipedia.org/
 */
@Component({
	selector: 'app-root',
	templateUrl: './root.component.html',
	styleUrls: ['./root.component.scss'],
})
export class RootComponent implements OnInit, OnDestroy {
	isScrolled: boolean;
	private parent: HTMLElement;
	private targetEl: HTMLElement;
	links: NavLink[] = [
		{
			label: 'Home',
			routerLink: '/',
			icon: 'home',
		},
		{
			label: 'Services',
			routerLink: 'services',
			icon: 'miscellaneous_services',
			children: [
				{
					label: 'Male Services',
					routerLink: '/services/male',
					icon: 'male',
				},
				{
					label: 'Female Services',
					routerLink: '/services/female',
					icon: 'female',
				},
			],
		},
		{
			label: 'Packages',
			routerLink: 'packages',
			icon: 'inventory_2',
		},
		{
			label: 'Offers',
			routerLink: 'offers',
			icon: 'favorite',
		},
		{
			label: 'Contact us',
			routerLink: 'contact-us',
			icon: 'connect_without_contact',
		},
		// {
		// 	label: 'Coming soon',
		// 	routerLink: 'coming-soon',
		// 	icon: 'info',
		// },
	];

	ngOnInit(): void {
		this.parent = document.getElementById('parent');
		this.targetEl = document.getElementById('target');
		this.parent.addEventListener('scroll', this.setIsScrolledFlag);
	}

	private setIsScrolledFlag = () => {
		const viewportOffset = this.targetEl.getBoundingClientRect();
		this.isScrolled = viewportOffset.top <= -80;
	};

	ngOnDestroy(): void {
		this.parent.removeEventListener('scroll', this.setIsScrolledFlag);
	}
}
