// Angular Core
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HowToComponent } from './how-to/how-to.component';

const routes: Routes = [
  {
    path: '',
    component: HowToComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HowToRoutingModule { }
