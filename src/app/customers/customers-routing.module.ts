import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerListComponent } from './customer-list/customer-list.component';


const routes: Routes = [
  {
    path: '',
    component: CustomerListComponent,
    children: [
      {
        path: 'child1',
        loadChildren: 'app/customers/child-one/child-one.module#ChildOneModule',
        data: { loadKaruKya: true }
        

      }, {
        path: 'child2',
        loadChildren: 'app/customers/child-two/child-two.module#ChildTwoModule'

      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }