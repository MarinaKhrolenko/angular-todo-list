import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CalendarModule} from 'primeng/calendar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    RadioButtonModule,
    FormsModule,
    CalendarModule,
    BrowserAnimationsModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
