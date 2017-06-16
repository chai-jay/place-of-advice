// Angular Core
import { NgModule } from '@angular/core';

// Modules
import { SharedModule } from './../shared/shared.module';
import { TabCalcRoutingModule } from './tab-calc-routing.module';

// Components
import { TabCalcComponent } from './tab-calc/tab-calc.component';

@NgModule({
  imports: [
    SharedModule,
    TabCalcRoutingModule
  ],
  declarations: [TabCalcComponent]
})
export class TabCalcModule { }
