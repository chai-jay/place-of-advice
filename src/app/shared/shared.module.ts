// Angular Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Third Party Libraries
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
