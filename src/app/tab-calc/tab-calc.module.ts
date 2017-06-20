// Angular Core
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// Modules
import { SharedModule } from './../shared/shared.module';
import { TabCalcRoutingModule } from './tab-calc-routing.module';

// Components
import { TabCalcComponent } from './tab-calc/tab-calc.component';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    TabCalcRoutingModule
  ],
  declarations: [TabCalcComponent]
})
export class TabCalcModule { }
