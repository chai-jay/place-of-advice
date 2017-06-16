// Angular Core
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { TabCalcComponent } from './tab-calc/tab-calc.component';

const routes: Routes = [
  {
    path: '',
    component: TabCalcComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabCalcRoutingModule { }
