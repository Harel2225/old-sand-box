import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Lesson3Module } from 'src/lesson3/lesson3.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Lesson3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
