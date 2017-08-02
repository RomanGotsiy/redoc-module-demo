import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RedocModule } from 'redoc';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RedocModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
