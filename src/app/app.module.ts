import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent, NumberChangePipe } from './app.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NumberChangePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
