import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MATERIAL_SANITY_CHECKS, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
// import { MatRippleModule } from '@angular/material/ripple';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { NgModule } from '@angular/core';

@NgModule({
	imports: [
		MatInputModule,
		MatButtonModule,
		MatButtonToggleModule,
		MatCheckboxModule,
		MatDatepickerModule,
		// MatMomentDateModule,
		MatButtonModule,
		MatCardModule,
		MatDialogModule,
		MatExpansionModule,
		MatFormFieldModule,
		MatTabsModule,
		MatRadioModule,
		MatRippleModule,
		MatSelectModule,
		MatSliderModule,
		MatSlideToggleModule,
		MatMenuModule,
		MatIconModule,
		MatToolbarModule,
		MatListModule,
		MatSnackBarModule,
		MatProgressBarModule,
		MatSidenavModule,
		// MatBottomSheetModule,
		MatTooltipModule,
		MatTableModule,
		MatStepperModule,
		MatChipsModule,
		MatAutocompleteModule,
		MatTreeModule,
		MatProgressSpinnerModule,
	],
	exports: [
		MatInputModule,
		MatButtonModule,
		MatButtonToggleModule,
		MatCheckboxModule,
		MatDatepickerModule,
		MatButtonModule,
		MatButtonModule,
		MatCardModule,
		MatDialogModule,
		MatExpansionModule,
		MatFormFieldModule,
		MatTabsModule,
		MatRadioModule,
		MatRippleModule,
		MatSelectModule,
		MatSliderModule,
		MatSlideToggleModule,
		MatMenuModule,
		MatIconModule,
		MatToolbarModule,
		MatListModule,
		MatSnackBarModule,
		MatProgressBarModule,
		MatSidenavModule,
		// MatBottomSheetModule,
		MatTooltipModule,
        MatTableModule,
		MatStepperModule,
		MatChipsModule,
		MatAutocompleteModule,
		MatTreeModule,
		MatProgressSpinnerModule
	],
	providers: [
		{
			provide: MATERIAL_SANITY_CHECKS,
			useValue: false
		},
		// { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
	]
})
export class MaterialModule { }
