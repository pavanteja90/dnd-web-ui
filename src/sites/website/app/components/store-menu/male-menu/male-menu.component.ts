import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { catchError, map } from 'rxjs/operators';
import { ServiceSectionInterface } from '../../../models/service.model';
import { ServicesListInterface } from '../../../models/service.model';
import { of } from 'rxjs';

@Component({
	selector: 'male-menu',
	templateUrl: 'male-menu.component.html',
	styleUrls: ['male-menu.component.scss'],
})
export class MaleMenuComponent implements OnInit {
	servicesDisplayedColumns: string[] = ['title', 'price']
	maleServices: ServiceSectionInterface;

	constructor(public http: HttpClient) {}

	ngOnInit() {
		const servicesPath = `./assets/data/services.json`;
		this.http
			.get(servicesPath)
			.pipe(
				map((services: ServicesListInterface) => {
					this.maleServices = services.maleServices;
				}),
				catchError(() => {
					console.warn(
						'An error occurred while fetching male services list'
					);
					return of({});
				})
			)
			.subscribe();
	}

	// applyFilter(event: Event) {
	// 	const filterValue = (event.target as HTMLInputElement).value;
	// 	this.dataSource.filter = filterValue.trim().toLowerCase();
	// }
}
