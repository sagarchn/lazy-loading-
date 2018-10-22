import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewModuleComponent } from './new-module/new-module.component';

const routes: Routes = [
  {
    path: '',
    component: NewModuleComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewModuleRoutingModule { }
