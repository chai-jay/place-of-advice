import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HowToRoutingModule } from './how-to-routing.module';
import { SharedModule } from './../shared/shared.module';

import { HowToComponent } from './how-to/how-to.component';

@NgModule({
  imports: [
    SharedModule,
    HowToRoutingModule
  ],
  declarations: [HowToComponent]
})
export class HowToModule { }
