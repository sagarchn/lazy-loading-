import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildOneRoutingModule } from './child-one-routing.module';
import { ChildOneComponent } from './child-one.component';

@NgModule({
  imports: [
    CommonModule,
    ChildOneRoutingModule
  ],
  declarations: [ChildOneComponent]
})
export class ChildOneModule { }
