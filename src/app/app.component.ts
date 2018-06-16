import { Component } from '@angular/core';
import { ToDoItem } from './to-do-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  calendar: Date = new Date();
  toDoItem: ToDoItem = new ToDoItem('', this.calendar);
  toDoItemsList: ToDoItem[] = [];

  handleClick() {
    // execute action
  //  this.toDoItem.calendar = this.calendar;
  const newToDoItem = new ToDoItem(this.title, this.calendar);
this.toDoItemsList.push(newToDoItem);
console.log(this.toDoItemsList);
}
}
