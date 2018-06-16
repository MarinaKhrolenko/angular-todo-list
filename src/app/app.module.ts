import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CalendarModule} from 'primeng/calendar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {DataViewModule} from 'primeng/dataview';


import { AppComponent } from './app.component';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';
import { CreateToDoItemComponent } from './create-to-do-item/create-to-do-item.component';
import { ToDoItemListComponent } from './to-do-item-list/to-do-item-list.component';
import { ToDoItemService } from './to-do-item.service';

@NgModule({
  declarations: [
    AppComponent,
    ToDoItemComponent,
    CreateToDoItemComponent,
    ToDoItemListComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    RadioButtonModule,
    FormsModule,
    CalendarModule,
    BrowserAnimationsModule,
    InputTextModule,
    DataViewModule
  ],
  providers: [ToDoItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
