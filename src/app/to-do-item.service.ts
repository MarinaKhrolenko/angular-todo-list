import { Injectable } from '@angular/core';
import { ToDoItem } from './to-do-item';
import { Subject, BehaviorSubject, Observable, from } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ToDoItemService {

    toDoList: BehaviorSubject<ToDoItem[]> = new BehaviorSubject<ToDoItem[]>(this.localStor || []);

    constructor() { }
    set localStor(listOfItems) {
        localStorage.setItem('toDoList', JSON.stringify(listOfItems));
    }
    get localStor() {
        return JSON.parse(localStorage.getItem('toDoList')) || [];
    }

    setItem(item: ToDoItem): void {
        const list = this.localStor;

        list.push(item);

        this.localStor = list;
        this.toDoList.next(list);
    }
    public getListOfItems(): Observable<ToDoItem[]> {
        return this.toDoList.asObservable();
    }
    editItem(item: ToDoItem): void {
        const oldList: ToDoItem []  = this.localStor;
        const index: number = oldList.findIndex(listItem => listItem.id === item.id);
        oldList.splice(index, 1, item);
        this.localStor = oldList;
        this.toDoList.next(oldList);
    }

    removeItem(id: number): void {
        const oldList: ToDoItem []  = this.localStor;
        const newList = oldList.filter((item) => {
            return item.id !== id;
        });
        this.localStor = newList;
        this.toDoList.next(newList);
    }
}
