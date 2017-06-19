// Angular Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Third Party Libraries
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    // BrowserAnimationsModule, // Figure out why I can't export this module..
    // https://github.com/angular/material2/issues/4006
    // https://github.com/angular/angular-cli/issues/5684
    MaterialModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
