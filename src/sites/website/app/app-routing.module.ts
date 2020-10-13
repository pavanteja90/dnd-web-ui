import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';
import { ComingSoonComponent } from './containers';

const routes: Routes = [
	{
		path: '',
		canActivate: [MetaGuard],
		pathMatch: 'full',
		redirectTo: 'coming-soon'
	}, {
		path: 'coming-soon',
		canActivate: [MetaGuard],
		component: ComingSoonComponent,
	}, {
		path: '**',
		redirectTo: 'coming-soon'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
