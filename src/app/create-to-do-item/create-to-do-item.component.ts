import { Component, OnInit } from '@angular/core';
import { ToDoItemService } from '../to-do-item.service';
import { ToDoItem } from '../to-do-item';

@Component({
  selector: 'app-create-to-do-item',
  templateUrl: './create-to-do-item.component.html',
  styleUrls: ['./create-to-do-item.component.css']
})
export class CreateToDoItemComponent implements OnInit {
  title: string;
  calendar: Date = new Date();
  toDoItem: ToDoItem = new ToDoItem('', this.calendar);


  constructor(private _toDoItemService: ToDoItemService) { }

  ngOnInit() {
  }

  handleClick() {
  this.toDoItem.calendar = this.calendar;
  const newToDoItem = new ToDoItem(this.title, this.calendar);
  this._toDoItemService.setItem(newToDoItem);

}

}
