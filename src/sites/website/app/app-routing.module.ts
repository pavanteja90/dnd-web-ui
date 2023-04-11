import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@projekt/core';
import {
	ContactUsComponent,
	FemaleMenuComponent,
	HomeComponent,
	MaleMenuComponent,
	PromosComponent,
	StoreMenuComponent,
} from './components';
import { ComingSoonComponent } from './containers';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'home',
	},
	{
		path: 'contact-us',
		component: ContactUsComponent,
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: 'Contact us',
				description:
					'Do you want to make a booking with us? Do you want to check what service will suit your skin type or hair type? Or do you want to have a chat about something else? Irrespective of what your query is, we love to hear from you!',
			},
		},
	},
	{
		path: 'services',
		redirectTo: 'menu',
	},
	{
		path: 'services/male',
		component: MaleMenuComponent,
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: 'Male Services',
				description:
					'List of services we offer for our male patrons. You can make an appointment online from our website or contact the store.',
			},
		},
	},
	{
		path: 'services/female',
		component: FemaleMenuComponent,
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: 'Female Services',
				description:
					'List of services we offer for our female patrons. You can make an appointment online from our website or contact the store.',
			},
		},
	},
	{
		path: 'offers',
		component: PromosComponent,
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: 'Offers',
				description:
					'We know you love discounts. We love them too! Checkout the offers that we have currently for our customers here.',
			},
		},
	},
	{
		path: 'menu',
		component: StoreMenuComponent,
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: 'Menu',
				description:
					'List of services we offer for all our patrons. You can make an appointment online from our website or contact the store.',
			},
		},
	},
	{
		path: 'home',
		component: HomeComponent,
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: 'Home',
				description:
					'Diana & Dapper is a group of unisex salon and spas located in Hyderabad. We provide makeup, facials, hair dressing, manicure, pedicure, and bridal services. We currently have a store in Sainikpuri and are planning to open a new salon in Malkajgiri. Swing by and let us work our magic to bring the inner beauty in you to life.',
			},
		},
	},
	{
		path: 'coming-soon',
		component: ComingSoonComponent,
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: 'Upcoming Salon',
				description:
					'Yes, you heard it right! We are opening a new salon in Malkajgiri. Our list of services at Malkajgiri include, but are not limited to, makeup, facials, hair dressing, manicure, pedicure, and bridal services. Swing by and let us work our magic to bring the inner beauty in you to life.',
			},
		},
	},
	{
		path: '**',
		redirectTo: 'home',
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
