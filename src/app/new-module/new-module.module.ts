import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewModuleRoutingModule } from './new-module-routing.module';
import { NewModuleComponent } from './new-module/new-module.component';

@NgModule({
  imports: [
    CommonModule,
    NewModuleRoutingModule
  ],
  declarations: [NewModuleComponent]
})
export class NewModuleModule { }
