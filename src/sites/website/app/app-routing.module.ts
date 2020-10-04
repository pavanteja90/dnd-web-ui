import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComingSoonComponent } from './containers';

const routes: Routes = [
	{
		path: '', redirectTo: 'coming-soon', pathMatch: 'full'
	}, {
		path: 'coming-soon',
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
