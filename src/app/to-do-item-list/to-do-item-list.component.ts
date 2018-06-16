import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../to-do-item';
import { ToDoItemService } from '../to-do-item.service';
import { Observable, Subscription } from 'rxjs';

@Component({
	selector: 'app-to-do-item-list',
	templateUrl: './to-do-item-list.component.html',
	styleUrls: ['./to-do-item-list.component.css']
})
export class ToDoItemListComponent implements OnInit {

	edit = false;

	listOfItems: ToDoItem[];
	// message: any;
	subscription: Subscription;

	constructor(private _toDoItemService: ToDoItemService) {

	}

	ngOnInit() {
		this.subscription = this._toDoItemService.getListOfItems().subscribe(
			listOfItems => { this.listOfItems = listOfItems; });
	}

	done(id: number): void {
		this.listOfItems.map(function (item) {
			if (item.id === id) {
				return item.done = !item.done;
			}
		});

	}
	onEdit() {
		this.edit = true;
	}
	onRemove(id: number) {
		this._toDoItemService.removeItem(id);
	}
	saveEdit(item: ToDoItem) {
		this._toDoItemService.editItem(item);
		this.edit = !this.edit;
	}
}
