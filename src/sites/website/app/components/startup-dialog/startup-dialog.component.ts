import { Component, Inject, OnInit } from '@angular/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';

@Component({
	selector: 'startup-dialog',
	templateUrl: 'startup-dialog.component.html'
})

export class StartupDialogComponent implements OnInit {
	constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

	ngOnInit(): void { }
}