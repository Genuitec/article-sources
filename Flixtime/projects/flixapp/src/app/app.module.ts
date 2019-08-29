import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlixtimeModule } from 'flixtime';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, FlixtimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }