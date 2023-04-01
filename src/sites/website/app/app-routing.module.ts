import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@projekt/core';
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
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: "Coming Soon"
			}
		}
	}, {
		path: 'about-us',
		component: AboutUsComponent,
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: "About us"
			}
		}
	}, {
		path: 'careers',
		component: CareersComponent,
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: "Careers"
			}
		}
	}, {
		path: 'contact-us',
		component: ContactUsComponent,
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: "Contact us"
			}
		}
	}, {
		path: 'services',
		component: OfferedServicesComponent,
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: "Services"
			}
		}
	}, {
		path: 'services/male',
		component: MaleMenuComponent,
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: "Male Services"
			}
		}
	}, {
		path: 'services/female',
		component: FemaleMenuComponent,
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: "Female Services"
			}
		}
	}, {
		path: 'products',
		component: ProductsComponent,
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: "Products"
			}
		}
	}, {
		path: 'promos',
		component: PromosComponent,
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: "Promotions"
			}
		}
	}, {
		path: 'menu',
		component: StoreMenuComponent,
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: "Menu"
			}
		}
	}, {
		path: 'home',
		component: HomeComponent,
		canActivate: [MetaGuard],
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
