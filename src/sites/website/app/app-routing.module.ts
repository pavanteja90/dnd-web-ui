import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';
import { AboutUsComponent, CareersComponent, ContactUsComponent, FemaleMenuComponent, HomeComponent, MaleMenuComponent, OfferedServicesComponent, ProductsComponent, PromosComponent, StoreMenuComponent } from './components';
import { ComingSoonComponent } from './containers';

const routes: Routes = [
	{
		path: '',
		canActivate: [MetaGuard],
		pathMatch: 'full',
		redirectTo: 'home'
	}, {
		path: 'coming-soon',
		canActivate: [MetaGuard],
		component: ComingSoonComponent,
		data: {
			meta: {
				title: "Coming Soon"
			}
		}
	}, {
		path: 'about-us',
		canActivate: [MetaGuard],
		component: AboutUsComponent,
		data: {
			meta: {
				title: "About us"
			}
		}
	}, {
		path: 'careers',
		canActivate: [MetaGuard],
		component: CareersComponent,
		data: {
			meta: {
				title: "Careers"
			}
		}
	}, {
		path: 'contact-us',
		canActivate: [MetaGuard],
		component: ContactUsComponent,
		data: {
			meta: {
				title: "Contact us"
			}
		}
	}, {
		path: 'services',
		canActivate: [MetaGuard],
		component: OfferedServicesComponent,
		data: {
			meta: {
				title: "Services"
			}
		}
	}, {
		path: 'services/male',
		canActivate: [MetaGuard],
		component: MaleMenuComponent,
		data: {
			meta: {
				title: "Services"
			}
		}
	}, {
		path: 'services/female',
		canActivate: [MetaGuard],
		component: FemaleMenuComponent,
		data: {
			meta: {
				title: "Services"
			}
		}
	}, {
		path: 'products',
		canActivate: [MetaGuard],
		component: ProductsComponent,
		data: {
			meta: {
				title: "Products"
			}
		}
	}, {
		path: 'promos',
		canActivate: [MetaGuard],
		component: PromosComponent,
		data: {
			meta: {
				title: "Promotions"
			}
		}
	}, {
		path: 'menu',
		canActivate: [MetaGuard],
		component: StoreMenuComponent,
		data: {
			meta: {
				title: "Menu"
			}
		}
	}, {
		path: 'home',
		canActivate: [MetaGuard],
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
