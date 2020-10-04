import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './styles/material.module';

@NgModule({
  declarations: [ ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  exports: [
	MaterialModule
  ],
  providers: [],
})
export class CoreModule { }
