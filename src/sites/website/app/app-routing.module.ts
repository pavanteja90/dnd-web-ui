import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent, CareersComponent, ContactUsComponent, FemaleMenuComponent, HomeComponent, MaleMenuComponent, OfferedServicesComponent, ProductsComponent, PromosComponent, StoreMenuComponent } from './components';
import { ComingSoonComponent } from './containers';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'home'
	}, {
		path: 'coming-soon',
		component: ComingSoonComponent,
		data: {
			meta: {
				title: "Coming Soon"
			}
		}
	}, {
		path: 'about-us',
		component: AboutUsComponent,
		data: {
			meta: {
				title: "About us"
			}
		}
	}, {
		path: 'careers',
		component: CareersComponent,
		data: {
			meta: {
				title: "Careers"
			}
		}
	}, {
		path: 'contact-us',
		component: ContactUsComponent,
		data: {
			meta: {
				title: "Contact us"
			}
		}
	}, {
		path: 'services',
		component: OfferedServicesComponent,
		data: {
			meta: {
				title: "Services"
			}
		}
	}, {
		path: 'services/male',
		component: MaleMenuComponent,
		data: {
			meta: {
				title: "Services"
			}
		}
	}, {
		path: 'services/female',
		component: FemaleMenuComponent,
		data: {
			meta: {
				title: "Services"
			}
		}
	}, {
		path: 'products',
		component: ProductsComponent,
		data: {
			meta: {
				title: "Products"
			}
		}
	}, {
		path: 'promos',
		component: PromosComponent,
		data: {
			meta: {
				title: "Promotions"
			}
		}
	}, {
		path: 'menu',
		component: StoreMenuComponent,
		data: {
			meta: {
				title: "Menu"
			}
		}
	}, {
		path: 'home',
		component: HomeComponent,
		data: {
			meta: {
				title: "Home"
			}
		}
	}, {
		path: '**',
		redirectTo: 'home'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
