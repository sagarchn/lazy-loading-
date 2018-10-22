import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildTwoRoutingModule } from './child-two-routing.module';
import { ChildTwoComponent } from './child-two.component';

@NgModule({
  imports: [
    CommonModule,
    ChildTwoRoutingModule
  ],
  declarations: [ChildTwoComponent]
})
export class ChildTwoModule { }
