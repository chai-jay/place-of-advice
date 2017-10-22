// Angular Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Third Party Libraries
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
